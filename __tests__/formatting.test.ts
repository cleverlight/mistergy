import * as fs from 'fs';
import * as path from 'path';
import {
    designSections,
    markdownFiles,
    PROGRAMMES,
    readFile,
    readLines,
    REPO_ROOT,
    stripCode,
    svgFiles,
} from './helpers';

const DASH_PATTERN = /[—–]|&mdash;|&ndash;/g;

/*
 * The dash ban is a ratchet, not a sweep.
 *
 * Workspace AGENTS.md governs what is written, not the purity of history, and says explicitly not to
 * hunt the character out of existing content. This repository's own standards repeat that: "Existing
 * text that predates this rule is left alone; what you write follows it." So the baseline records
 * what was already there when the check was introduced, and only a change to those counts fails.
 *
 * Regenerate after a legitimate edit with: bash sh/dash-baseline.sh
 */
const BASELINE_PATH = '__tests__/fixtures/dash-baseline.json';

/*
 * American spellings whose British form this repository already uses predominantly, so the check
 * enforces the convention in CODING_STANDARDS.md rather than imposing a new one.
 *
 * Deliberately absent: "meter", because a power meter is an instrument and correct as written;
 * "center" and "program", because both appear only inside the names of US institutions.
 */
const AMERICAN_SPELLINGS: Array<{ wrong: RegExp; right: string }> = [
    { wrong: /\brefuel(ing|ed)\b/gi, right: 'refuelling / refuelled' },
    { wrong: /\bfibers?\b/gi, right: 'fibre / fibres' },
    { wrong: /\bbehaviors?\b/gi, right: 'behaviour' },
    { wrong: /\bdefenses?\b/gi, right: 'defence' },
    { wrong: /\bmodeling\b/gi, right: 'modelling' },
    { wrong: /\banalyze[ds]?\b/gi, right: 'analyse' },
    { wrong: /\boptimize[ds]?\b/gi, right: 'optimise' },
    { wrong: /\bvapor\b/gi, right: 'vapour' },
];

// the original concept note is a historical artefact, preserved with the errors AGENTS.md describes
const PROSE_EXEMPT = new Set(['he3/origin-note.md']);

/*
 * Names of US organisations, which keep their own spelling.
 *
 * Anglicising one would corrupt a citation, and CODING_STANDARDS.md treats a wrong reference as
 * worse than no reference because it survives casual review. Add to this list rather than reaching
 * for a broader exemption: a rule that skipped every capitalised word would miss a sentence-initial
 * violation, which is the commonest kind.
 */
const PROPER_NOUNS = [/Natural Resources Defense Council/g, /National Nuclear Data Center/g];

function properNounSpans(text: string): Array<[number, number]> {
    const spans: Array<[number, number]> = [];
    for (const phrase of PROPER_NOUNS) {
        for (const match of text.matchAll(phrase)) {
            spans.push([match.index, match.index + match[0].length]);
        }
    }
    return spans;
}

// these three sections predate the open-questions convention; the gap is recorded rather than papered over by inventing questions
const NO_OPEN_QUESTIONS = new Set([
    'vhtr/design/01-overview.md',
    'vhtr/design/06-materials.md',
    'vhtr/design/12-economics.md',
]);

describe('dash glyphs', () => {
    const baseline: Record<string, number> = JSON.parse(readFile(BASELINE_PATH));

    const actual: Record<string, number> = {};
    for (const file of [...markdownFiles(), ...svgFiles()]) {
        if (file === BASELINE_PATH) continue;
        const count = (readFile(file).match(DASH_PATTERN) ?? []).length;
        if (count > 0) actual[file] = count;
    }

    it('appear in no file that did not already carry them', () => {
        const introduced = Object.keys(actual).filter((f) => !(f in baseline));
        expect(introduced).toEqual([]);
    });

    it('have not increased in any file that already carried them', () => {
        const increased = Object.keys(actual)
            .filter((f) => f in baseline && actual[f] > baseline[f])
            .map((f) => `${f}: ${baseline[f]} -> ${actual[f]}`);
        expect(increased).toEqual([]);
    });

    it('match the recorded baseline exactly, so it cannot go stale', () => {
        expect(actual).toEqual(baseline);
    });
});

describe('British spelling', () => {
    const violations: string[] = [];

    for (const file of markdownFiles()) {
        if (PROSE_EXEMPT.has(file) || file === 'CODING_STANDARDS.md') continue;
        for (const line of stripCode(readLines(file))) {
            const exempt = properNounSpans(line.text);
            for (const { wrong, right } of AMERICAN_SPELLINGS) {
                for (const match of line.text.matchAll(wrong)) {
                    const inName = exempt.some(([from, to]) => match.index >= from && match.index < to);
                    if (inName) continue;
                    violations.push(`${file}:${line.number}  "${match[0]}" should be ${right}`);
                }
            }
        }
    }

    it('is used throughout the design documents', () => {
        expect(violations.join('\n')).toBe('');
    });
});

describe('design sections', () => {
    const sections = PROGRAMMES.flatMap((programme) => designSections(programme));

    it('exist in both programmes', () => {
        expect(sections.length).toBeGreaterThan(20);
    });

    it('close with an open-questions list', () => {
        const missing = sections
            .filter((f) => !NO_OPEN_QUESTIONS.has(f))
            .filter((f) => !/^##\s+open questions\s*$/im.test(readFile(f)));
        expect(missing).toEqual([]);
    });

    it('do not carry a stale entry in the open-questions exemption list', () => {
        const nowCompliant = [...NO_OPEN_QUESTIONS].filter((f) =>
            /^##\s+open questions\s*$/im.test(readFile(f)),
        );
        expect(nowCompliant).toEqual([]);
    });

    it('open with a level-one heading naming the section', () => {
        const bad = sections.filter((f) => !/^# \S/m.test(readFile(f).split('\n')[0]));
        expect(bad).toEqual([]);
    });
});

describe('SVG diagrams', () => {
    it('are well-formed XML', () => {
        const broken: string[] = [];
        for (const file of svgFiles()) {
            const source = readFile(file);
            if (!source.trimStart().startsWith('<')) broken.push(`${file}: does not open with a tag`);
            if (!/<\/svg>\s*$/.test(source)) broken.push(`${file}: does not close its svg element`);
        }
        expect(broken).toEqual([]);
    });

    it('are committed as source with no generated companion', () => {
        const generated = fs
            .readdirSync(path.join(REPO_ROOT, 'vhtr/diagrams'))
            .filter((f) => /\.(png|jpe?g|pdf)$/i.test(f));
        expect(generated).toEqual([]);
    });
});
