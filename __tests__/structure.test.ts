import * as fs from 'fs';
import * as path from 'path';
import { designSections, PROGRAMMES, readFile, readLines, REPO_ROOT } from './helpers';

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
