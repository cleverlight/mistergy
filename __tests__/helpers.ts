/**
 * Shared file discovery and text extraction for the document checks.
 *
 * Everything here is deliberately dependency-free and synchronous: the repository is a few dozen
 * small files, so the simplest possible reader is also the fastest one, and a test suite with no
 * parser dependency cannot be broken by a dependency wave.
 *
 * - PROGRAMMES: the two design programmes, which is what most checks iterate over
 * - stripCode: blanks fenced blocks and inline spans WITHOUT changing the line count, so that a
 *   violation found in prose still reports the line number a reader would see in the editor
 */
import * as fs from 'fs';
import * as path from 'path';

export const REPO_ROOT = path.resolve(__dirname, '..');

export const PROGRAMMES = ['vhtr', 'he3'] as const;

// docstech holds the shared todo/done board, which follows workspace story conventions rather than this repository's document standards
const EXCLUDED_DIRS = new Set(['node_modules', '.git', 'docstech', 'test-results']);

export interface DocLine {
    number: number;
    text: string;
}

function walk(dir: string, extension: string, found: string[]): void {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        if (entry.isDirectory()) {
            if (!EXCLUDED_DIRS.has(entry.name)) walk(path.join(dir, entry.name), extension, found);
        } else if (entry.name.endsWith(extension)) {
            found.push(path.join(dir, entry.name));
        }
    }
}

/** List every tracked file with the given extension, as paths relative to the repository root. */
function filesWithExtension(extension: string): string[] {
    const found: string[] = [];
    walk(REPO_ROOT, extension, found);
    return found.map((f) => path.relative(REPO_ROOT, f)).sort();
}

export function markdownFiles(): string[] {
    return filesWithExtension('.md');
}

export function svgFiles(): string[] {
    return filesWithExtension('.svg');
}

/** The numbered design sections of one programme, in order, excluding the 00-summary page. */
export function designSections(programme: string): string[] {
    return markdownFiles().filter((f) => {
        const inProgramme = f.startsWith(`${programme}/design/`);
        return inProgramme && /\/(?!00)\d{2}-/.test(f);
    });
}

export function readFile(relativePath: string): string {
    return fs.readFileSync(path.join(REPO_ROOT, relativePath), 'utf8');
}

export function readLines(relativePath: string): DocLine[] {
    return readFile(relativePath)
        .split('\n')
        .map((text, i) => ({ number: i + 1, text }));
}

/**
 * Blank out fenced code blocks and inline code spans, preserving the line count.
 *
 * Prose rules (spelling, dash glyphs in authored text) must not fire on code: a Python snippet
 * saying `# 1 um in meters` is a quoted artefact, and an SVG attribute named stop-color is markup.
 */
export function stripCode(lines: DocLine[]): DocLine[] {
    let inFence = false;
    return lines.map((line) => {
        const fenceDelimiter = /^\s*(```|~~~)/.test(line.text);
        if (fenceDelimiter) {
            inFence = !inFence;
            return { number: line.number, text: '' };
        }
        if (inFence) return { number: line.number, text: '' };
        // an indented block is code by CommonMark, but this repository indents derivations under list items too, so only inline spans are stripped
        return { number: line.number, text: line.text.replace(/`[^`]*`/g, '') };
    });
}
