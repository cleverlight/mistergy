/**
 * A small arithmetic checker for the derivations written into the design documents.
 *
 * CODING_STANDARDS.md requires that a figure show its working ("Show the derivation. A number a
 * reader cannot check is worse than no number"). This module checks the working that is written,
 * which is the part a reader would otherwise have to do by hand.
 *
 * It is deliberately conservative: anything it cannot fully reduce to numbers and operators is
 * skipped rather than guessed at, because a false failure on a symbolic line would train a reader
 * to ignore the suite. The suite asserts a floor on how many expressions were checked so that a
 * parser regression cannot quietly reduce that to zero.
 *
 * - parseNumber: reads "1.3 x 10^22" as ONE value, never as a multiplication
 * - toleranceFor: half the last quoted significant digit, so 0.53 accepts 0.5258 but not 0.6
 */

const SUPERSCRIPTS: Record<string, string> = {
    '⁰': '0', '¹': '1', '²': '2', '³': '3', '⁴': '4',
    '⁵': '5', '⁶': '6', '⁷': '7', '⁸': '8', '⁹': '9',
    '⁻': '-', '⁺': '+',
};

const SUPERSCRIPT_CLASS = `[${Object.keys(SUPERSCRIPTS).join('')}]`;

export interface CheckedExpression {
    left: string;
    right: string;
    computed: number;
    stated: number;
    tolerance: number;
}

function decodeSuperscript(run: string): string {
    return [...run].map((c) => SUPERSCRIPTS[c] ?? '').join('');
}

/**
 * Half the place value of the last significant digit of a written figure.
 *
 * "1.7" is quoted to one decimal place, so any computed value within 0.05 of it rounds to it and
 * the derivation is correct as written. This is what makes the checker usable against prose, where
 * every figure is rounded for readability.
 */
export function toleranceFor(mantissa: string, exponent: number): number {
    const cleaned = mantissa.replace(/[,\s]/g, '').replace(/^-/, '');
    const dot = cleaned.indexOf('.');
    let placeOfLastSignificantDigit: number;
    if (dot === -1) {
        // an integer's trailing zeros are not significant: 5,500 is quoted to the nearest hundred, so treating it as exact fails every correctly-rounded derivation
        const trailingZeros = /0*$/.exec(cleaned)![0].length;
        placeOfLastSignificantDigit = cleaned === '0' ? 0 : trailingZeros;
    } else {
        placeOfLastSignificantDigit = -(cleaned.length - dot - 1);
    }
    const ulp = Math.pow(10, placeOfLastSignificantDigit) * Math.pow(10, exponent);
    return Math.abs(ulp) / 2;
}

interface ParsedNumber {
    value: number;
    tolerance: number;
    length: number;
}

/**
 * Read one numeric literal at the head of `text`, including a "x 10^n" tail if present.
 *
 * The tail matters more than anything else in this module: read as a multiplication, the divisor
 * in "0.53 / 2.06 x 10^7" binds the wrong way and the result is out by fourteen orders of magnitude.
 */
export function parseNumber(text: string): ParsedNumber | null {
    const mantissaMatch = /^(-?[\d,]+(?:\.\d+)?)/.exec(text);
    if (!mantissaMatch) return null;
    const mantissa = mantissaMatch[1];
    let consumed = mantissa.length;
    let exponent = 0;

    const rest = text.slice(consumed);
    const scientific = new RegExp(`^\\s*[×x*·]\\s*10\\s*(${SUPERSCRIPT_CLASS}+|\\^-?\\d+)`).exec(rest);
    const plainExponent = /^e([+-]?\d+)/.exec(rest);
    if (scientific) {
        const raw = scientific[1];
        exponent = parseInt(raw.startsWith('^') ? raw.slice(1) : decodeSuperscript(raw), 10);
        consumed += scientific[0].length;
    } else if (plainExponent) {
        exponent = parseInt(plainExponent[1], 10);
        consumed += plainExponent[0].length;
    }

    const value = parseFloat(mantissa.replace(/,/g, '')) * Math.pow(10, exponent);
    if (!Number.isFinite(value)) return null;
    return { value, tolerance: toleranceFor(mantissa, exponent), length: consumed };
}

type Token =
    | { kind: 'number'; value: number; tolerance: number }
    | { kind: 'op'; value: string }
    | { kind: 'unit'; value: string };

const SI_PREFIXES = 'Y|Z|E|P|T|G|M|k|h|d|c|m|µ|μ|n|p|f|a|z|y';
const BASE_UNITS = 'eV|Hz|Pa|Wh|bar|mol|m|s|g|J|W|N|K|A|V|C|T|F|b|t';

/**
 * Whether a unit symbol carries an SI multiplier, e.g. mJ, THz, fs, cm.
 *
 * A single-character symbol is never treated as prefixed, so tesla and kelvin read as base units.
 */
export function isPrefixedUnit(unit: string): boolean {
    return unit.length > 1 && new RegExp(`^(?:${SI_PREFIXES})(?:${BASE_UNITS})[²³]?$`).test(unit);
}

/**
 * Reduce one side of an equation to numbers and operators, or return null if anything else remains.
 *
 * Units are stripped only AFTER every number has been consumed, which is what stops the slash in
 * "J/MeV" being mistaken for division: by that point the only slashes left sit between numbers.
 */
export function tokenise(segment: string): Token[] | null {
    let text = segment.replace(/\*\*/g, '').replace(/[~≈]/g, '').trim();
    const tokens: Token[] = [];

    while (text.length > 0) {
        text = text.replace(/^\s+/, '');
        if (text.length === 0) break;

        const number = parseNumber(text);
        if (number) {
            tokens.push({ kind: 'number', value: number.value, tolerance: number.tolerance });
            text = text.slice(number.length);
            continue;
        }

        const operator = /^[×x*·÷/+\-()]/.exec(text);
        if (operator) {
            tokens.push({ kind: 'op', value: operator[0] });
            text = text.slice(1);
            continue;
        }

        // a unit: a run of letters that may carry a solidus and an exponent, consumed whole
        const unit = /^[A-Za-zµμ°%]+(?:\s*\/\s*[A-Za-zµμ°]+)*[²³]?/.exec(text);
        if (unit) {
            tokens.push({ kind: 'unit', value: unit[0].trim() });
            text = text.slice(unit[0].length);
            continue;
        }
        return null;
    }

    return tokens.some((t) => t.kind === 'number') ? tokens : null;
}

/** Recursive-descent evaluation over the token list. Never uses eval. */
function evaluate(withUnits: Token[]): number | null {
    const tokens = withUnits.filter((t) => t.kind !== 'unit');
    let position = 0;

    function parseExpression(): number | null {
        let left = parseTerm();
        if (left === null) return null;
        while (position < tokens.length) {
            const token = tokens[position];
            if (token.kind !== 'op' || (token.value !== '+' && token.value !== '-')) break;
            position += 1;
            const right = parseTerm();
            if (right === null) return null;
            left = token.value === '+' ? left + right : left - right;
        }
        return left;
    }

    function parseTerm(): number | null {
        let left = parseFactor();
        if (left === null) return null;
        while (position < tokens.length) {
            const token = tokens[position];
            const isMultiply = token.kind === 'op' && ['×', 'x', '*', '·'].includes(token.value);
            const isDivide = token.kind === 'op' && ['÷', '/'].includes(token.value);
            if (!isMultiply && !isDivide) break;
            position += 1;
            const right = parseFactor();
            if (right === null) return null;
            if (isDivide && right === 0) return null;
            left = isMultiply ? left * right : left / right;
        }
        return left;
    }

    function parseFactor(): number | null {
        const token = tokens[position];
        if (!token) return null;
        if (token.kind === 'number') {
            position += 1;
            return token.value;
        }
        if (token.value === '-') {
            position += 1;
            const inner = parseFactor();
            return inner === null ? null : -inner;
        }
        if (token.value === '(') {
            position += 1;
            const inner = parseExpression();
            if (inner === null) return null;
            const closing = tokens[position];
            if (!closing || closing.kind !== 'op' || closing.value !== ')') return null;
            position += 1;
            return inner;
        }
        return null;
    }

    const result = parseExpression();
    return position === tokens.length ? result : null;
}

/**
 * Check every "a = b" claim on one line, returning the comparisons that were actually verifiable.
 *
 * A line may chain several equalities. Each adjacent pair is checked independently, so a symbolic
 * first segment ("gamma = sqrt(...) = 2,067") does not prevent the numeric tail being checked.
 */
export function checkLine(line: string): { checked: CheckedExpression[]; failures: CheckedExpression[] } {
    const checked: CheckedExpression[] = [];
    const failures: CheckedExpression[] = [];

    // trailing commentary after an arrow is a separate claim, not part of this equation
    const trimmed = line.split('→')[0].split('#')[0];
    // a square root is not supported by the tokeniser, and a partial read of one would be wrong
    if (/[√]/.test(trimmed)) return { checked, failures };

    const segments = trimmed.split(/=|≈/).map((s) => s.trim()).filter((s) => s.length > 0);
    if (segments.length < 2) return { checked, failures };

    for (let i = 0; i < segments.length - 1; i += 1) {
        const leftTokens = tokenise(segments[i]);
        const rightTokens = tokenise(segments[i + 1]);
        if (!leftTokens || !rightTokens) continue;
        // only check where one side does the work and the other states the answer
        const leftHasOperator = leftTokens.some((t) => t.kind === 'op');
        const rightHasOperator = rightTokens.some((t) => t.kind === 'op');
        if (leftHasOperator === rightHasOperator) continue;

        const workingTokens = leftHasOperator ? leftTokens : rightTokens;
        const statedTokens = leftHasOperator ? rightTokens : leftTokens;
        const statedNumbers = statedTokens.filter((t) => t.kind === 'number');
        if (statedNumbers.length !== 1) continue;

        /*
         * Decline a result expressed in a scaled unit while the working side is also dimensioned:
         * "3 x 10^5 W x 2 x 10^-9 s = 0.6 mJ" is correct, and only a full treatment of dimensions
         * would show it. Modelling the prefix alone is worse than declining, because it would then
         * misread "20.578 MeV x 1.602 x 10^-13 J/MeV", where the conversion factor already carries
         * the scale. Where the working side is pure number, the result's unit cannot mislead.
         */
        const statedUnits = statedTokens.filter((t) => t.kind === 'unit');
        const workingUnits = workingTokens.filter((t) => t.kind === 'unit');
        const statedIsScaled = statedUnits.some((t) => isPrefixedUnit(t.value));
        if (statedIsScaled && workingUnits.length > 0) continue;

        const computed = evaluate(workingTokens);
        if (computed === null) continue;

        const statedToken = statedNumbers[0];
        if (statedToken.kind !== 'number') continue;
        const stated = statedToken.value;
        const tolerance = statedToken.tolerance;
        const record: CheckedExpression = {
            left: segments[i],
            right: segments[i + 1],
            computed,
            stated,
            tolerance,
        };
        checked.push(record);
        if (Math.abs(computed - stated) > tolerance) failures.push(record);
    }

    return { checked, failures };
}
