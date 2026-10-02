import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { checkLine, parseNumber, toleranceFor, tokenise } from './maths.ts';
import { designSections, PROGRAMMES, readLines } from './helpers.ts';

// a floor far below the current count, so a parser regression that silently stops reading the documents still fails
const MINIMUM_EXPRESSIONS_CHECKED = 20;

/** Passes when actual is within half a unit of the given decimal place of expected. */
function assertCloseTo(actual: number, expected: number, digits: number): void {
    assert.ok(Math.abs(actual - expected) < 10 ** -digits / 2, `${actual} is not close to ${expected}`);
}

describe('number parsing', () => {
    it('reads a scientific literal as one value rather than a multiplication', () => {
        const parsed = parseNumber('2.06 × 10⁷');
        assert.notEqual(parsed, null);
        assertCloseTo(parsed!.value, 2.06e7, 0);
    });

    it('binds the exponent tighter than a preceding division', () => {
        // read as (0.53 / 2.06) x 10^7 this is 2.6e6, which is out by fourteen orders of magnitude
        const result = checkLine('ε = 0.53 / 2.06 × 10⁷ = 2.6 × 10⁻⁸');
        assert.equal(result.checked.length, 1);
        assert.equal(result.failures.length, 0);
    });

    it('reads thousands separators', () => {
        assert.equal(parseNumber('7,300')!.value, 7300);
    });

    it('reads a plain exponent', () => {
        assertCloseTo(parseNumber('1.3e22')!.value, 1.3e22, 0);
    });

    it('derives tolerance from the last quoted significant digit', () => {
        assertCloseTo(toleranceFor('1.7', -4), 0.05e-4, 10);
        assertCloseTo(toleranceFor('0.53', 0), 0.005, 10);
    });
});

describe('unit handling', () => {
    it('does not read the solidus in a unit as division', () => {
        const tokens = tokenise('1.602 × 10⁻¹³ J/MeV');
        assert.notEqual(tokens, null);
        assert.equal(tokens!.filter((t) => t.kind === 'op').length, 0);
    });

    it('checks a product carrying units between its factors', () => {
        const result = checkLine('6.33 × 10¹⁸ × 3.65 MeV × 1.602 × 10⁻¹³ J/MeV = 3.7 × 10⁶ W');
        assert.equal(result.checked.length, 1);
        assert.equal(result.failures.length, 0);
    });

    it('strips bold markers around a stated result', () => {
        const result = checkLine('mass = 0.0446 × 3.016 g/mol = **0.135 g per litre**');
        assert.equal(result.failures.length, 0);
        assert.equal(result.checked.length, 1);
    });
});

describe('detection', () => {
    it('fails an arithmetic claim that is actually wrong', () => {
        const result = checkLine('2 × 3 = 7');
        assert.equal(result.failures.length, 1);
    });

    it('accepts a result rounded to the quoted precision', () => {
        const result = checkLine('3.13 × 10¹⁴ × 1.68 × 10⁻¹⁵ = 0.53 eV');
        assert.equal(result.checked.length, 1);
        assert.equal(result.failures.length, 0);
    });

    it('skips a symbolic line rather than guessing at it', () => {
        assert.equal(checkLine('E = sqrt(2I / cε₀)').checked.length, 0);
    });

    it('skips a square root rather than reading half of it', () => {
        assert.equal(checkLine('γ = √( 4.274 × 10⁶ ) = 2,067').checked.length, 0);
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
        assert.equal(failures.join('\n'), '');
    });

    it('are actually being read, so a parser regression cannot pass silently', () => {
        assert.ok(
            totalChecked >= MINIMUM_EXPRESSIONS_CHECKED,
            `only ${totalChecked} expressions checked, floor is ${MINIMUM_EXPRESSIONS_CHECKED}`,
        );
    });
});
