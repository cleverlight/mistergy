import * as fs from 'fs';
import * as path from 'path';
import { designSections, markdownFiles, PROGRAMMES, readFile, readLines, REPO_ROOT } from './helpers';

/*
 * The layout CODING_STANDARDS.md > Structure describes:
 *
 *   <programme>/
 *     README.md        programme index, design document table, key decisions
 *     design/          00-summary.md is canonical; sections numbered from 01
 *     diagrams/        hand-authored SVG, no build step
 *     references.md    reading map, not a formal bibliography
 */
describe.each(PROGRAMMES)('the %s programme', (programme) => {
    it('has the four documents the structure requires', () => {
        const required = ['README.md', 'design/00-summary.md', 'references.md'];
        const missing = required.filter((f) => !fs.existsSync(path.join(REPO_ROOT, programme, f)));
        expect(missing).toEqual([]);
    });

    it('has a diagrams directory', () => {
        expect(fs.existsSync(path.join(REPO_ROOT, programme, 'diagrams'))).toBe(true);
    });

    it('numbers its design sections contiguously from 01', () => {
        const numbers = designSections(programme)
            .map((f) => parseInt(path.basename(f).slice(0, 2), 10))
            .sort((a, b) => a - b);
        const expected = numbers.map((_, i) => i + 1);
        expect(numbers).toEqual(expected);
    });

    it('indexes every design section in its README', () => {
        const readme = readFile(`${programme}/README.md`);
        const unindexed = designSections(programme)
            .map((f) => f.replace(`${programme}/`, ''))
            .filter((relative) => !readme.includes(`(${relative})`));
        expect(unindexed).toEqual([]);
    });

    it('records the decisions that have been taken', () => {
        expect(readFile(`${programme}/README.md`)).toMatch(/^##\s+key decisions/im);
    });

    it('names its summary as the canonical source of numbers', () => {
        const summary = readFile(`${programme}/design/00-summary.md`);
        expect(summary.split('\n')[0]).toMatch(/^#\s/);
        expect(summary.length).toBeGreaterThan(1000);
    });
});

describe('the repository', () => {
    it('documents both programmes in the root README', () => {
        const readme = readFile('README.md');
        for (const programme of PROGRAMMES) {
            expect(readme).toContain(`${programme}/`);
        }
    });

    it('keeps the merge script the only executable it ships', () => {
        const executables: string[] = [];
        const walk = (dir: string): void => {
            for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
                const full = path.join(dir, entry.name);
                if (entry.isDirectory()) {
                    if (!['node_modules', '.git'].includes(entry.name)) walk(full);
                } else if ((fs.statSync(full).mode & 0o111) !== 0) {
                    executables.push(path.relative(REPO_ROOT, full));
                }
            }
        };
        walk(REPO_ROOT);
        expect(executables.sort()).toEqual(['sh/dash-baseline.sh', 'sh/lint.sh', 'sh/git/merge-main.sh'].sort());
    });
});

/*
 * The He-3 key decisions are recorded in three places and 01-overview.md says so itself, stating that
 * a divergence from 00-summary.md section 11 is a defect to report rather than a local variation.
 * Nothing mechanical enforced that, so when section 07 section 9 replaced the full-scale sensing
 * architecture the summary moved and the other two tables did not, with a green suite throughout.
 * Asserting the shared term rather than the shared sentence keeps 01's extra reasoning column legal.
 */
describe('the he3 alignment decision', () => {
    const TABLES = ['he3/README.md', 'he3/design/00-summary.md', 'he3/design/01-overview.md'];

    it('names the full-scale sensing architecture in every key-decision table', () => {
        const stale = TABLES.filter((file) => {
            const row = readLines(file).find((line) => /^\|\s*Alignment control\s*\|/i.test(line.text));
            return row === undefined || !row.text.toLowerCase().includes('pairwise');
        });
        expect(stale).toEqual([]);
    });
});

/*
 * The He-3 price is quoted in three places and drifted in two more. 00-summary.md section 9 sets the
 * canonical band at $1,000-2,000 per litre at STP, and two sections had acquired a $3,000 per litre
 * figure that put every derived value 1.5x out, in the flattering direction. Per-litre is the form
 * that drifted, so per-litre is what this asserts; per-gram figures are left alone because the
 * documents legitimately quote costs, targets and criticised concept-note goals in that unit.
 */
describe('the he3 price', () => {
    const MIN_PER_LITRE = 1000;
    const MAX_PER_LITRE = 2000;

    // only amounts bound to the unit: a conversion to $/g on the same line is not a per-litre claim
    const PER_LITRE = /\$([\d,]+)(?:\s*(?:-|to)\s*\$?([\d,]+))?\s+per litre/gi;

    it('quotes no per-litre figure outside the canonical band', () => {
        const offenders: string[] = [];
        let seen = 0;
        for (const file of markdownFiles().filter((f) => f.startsWith('he3/'))) {
            for (const line of readLines(file)) {
                for (const match of line.text.matchAll(PER_LITRE)) {
                    for (const raw of [match[1], match[2]]) {
                        if (raw === undefined) continue;
                        seen += 1;
                        const amount = parseInt(raw.replace(/,/g, ''), 10);
                        if (amount < MIN_PER_LITRE || amount > MAX_PER_LITRE) {
                            offenders.push(`${file}:${line.number} -> $${raw}`);
                        }
                    }
                }
            }
        }
        expect(offenders).toEqual([]);
        // a regex that matches nothing would pass vacuously, which is the failure this guards against
        expect(seen).toBeGreaterThanOrEqual(4);
    });
});
