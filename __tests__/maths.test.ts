import { checkLine, parseNumber, toleranceFor, tokenise } from './maths';
import { designSections, PROGRAMMES, readLines } from './helpers';

// a floor far below the current count, so a parser regression that silently stops reading the documents still fails
const MINIMUM_EXPRESSIONS_CHECKED = 20;

describe('number parsing', () => {
    it('reads a scientific literal as one value rather than a multiplication', () => {
        const parsed = parseNumber('2.06 × 10⁷');
        expect(parsed).not.toBeNull();
        expect(parsed!.value).toBeCloseTo(2.06e7, 0);
    });

    it('binds the exponent tighter than a preceding division', () => {
        // read as (0.53 / 2.06) x 10^7 this is 2.6e6, which is out by fourteen orders of magnitude
        const result = checkLine('ε = 0.53 / 2.06 × 10⁷ = 2.6 × 10⁻⁸');
        expect(result.checked).toHaveLength(1);
        expect(result.failures).toHaveLength(0);
    });

    it('reads thousands separators', () => {
        expect(parseNumber('7,300')!.value).toBe(7300);
    });

    it('reads a plain exponent', () => {
        expect(parseNumber('1.3e22')!.value).toBeCloseTo(1.3e22, 0);
    });

    it('derives tolerance from the last quoted significant digit', () => {
        expect(toleranceFor('1.7', -4)).toBeCloseTo(0.05e-4, 10);
        expect(toleranceFor('0.53', 0)).toBeCloseTo(0.005, 10);
    });
});

describe('unit handling', () => {
    it('does not read the solidus in a unit as division', () => {
        const tokens = tokenise('1.602 × 10⁻¹³ J/MeV');
        expect(tokens).not.toBeNull();
        expect(tokens!.filter((t) => t.kind === 'op')).toHaveLength(0);
    });

    it('checks a product carrying units between its factors', () => {
        const result = checkLine('6.33 × 10¹⁸ × 3.65 MeV × 1.602 × 10⁻¹³ J/MeV = 3.7 × 10⁶ W');
        expect(result.checked).toHaveLength(1);
        expect(result.failures).toHaveLength(0);
    });

    it('strips bold markers around a stated result', () => {
        const result = checkLine('mass = 0.0446 × 3.016 g/mol = **0.135 g per litre**');
        expect(result.failures).toHaveLength(0);
        expect(result.checked).toHaveLength(1);
    });
});

describe('detection', () => {
    it('fails an arithmetic claim that is actually wrong', () => {
        const result = checkLine('2 × 3 = 7');
        expect(result.failures).toHaveLength(1);
    });

    it('accepts a result rounded to the quoted precision', () => {
        const result = checkLine('3.13 × 10¹⁴ × 1.68 × 10⁻¹⁵ = 0.53 eV');
        expect(result.checked).toHaveLength(1);
        expect(result.failures).toHaveLength(0);
    });

    it('skips a symbolic line rather than guessing at it', () => {
        expect(checkLine('E = sqrt(2I / cε₀)').checked).toHaveLength(0);
    });

    it('skips a square root rather than reading half of it', () => {
        expect(checkLine('γ = √( 4.274 × 10⁶ ) = 2,067').checked).toHaveLength(0);
    });
});

describe('the design documents', () => {
    const sections = PROGRAMMES.flatMap((programme) => [
        ...designSections(programme),
        `${programme}/design/00-summary.md`,
    ]);

    const failures: string[] = [];
    let totalChecked = 0;

    for (const section of sections) {
        for (const line of readLines(section)) {
            const result = checkLine(line.text);
            totalChecked += result.checked.length;
            for (const failure of result.failures) {
                failures.push(
                    `${section}:${line.number}  ${failure.left} = ${failure.right}\n` +
                        `    computed ${failure.computed.toExponential(4)}, ` +
                        `stated ${failure.stated.toExponential(4)}, ` +
                        `tolerance ${failure.tolerance.toExponential(2)}`,
                );
            }
        }
    }

    it('state arithmetic that checks out', () => {
        expect(failures.join('\n')).toBe('');
    });

    it('are actually being read, so a parser regression cannot pass silently', () => {
        expect(totalChecked).toBeGreaterThanOrEqual(MINIMUM_EXPRESSIONS_CHECKED);
    });
});
