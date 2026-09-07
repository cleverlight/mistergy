import * as fs from 'fs';
import * as path from 'path';
import { markdownFiles, readLines, REPO_ROOT } from './helpers';

/*
 * CODING_STANDARDS.md says of the section cross-references: "Nothing validates those links, so grep
 * after any rename." This is that validation. It is the check most likely to catch a real mistake,
 * because a renamed section breaks silently and a reader only finds out by clicking.
 */
const LINK_PATTERN = /\[[^\]]*\]\(([^)\s]+)(?:\s+"[^"]*")?\)/g;

interface Link {
    file: string;
    line: number;
    target: string;
}

function collectLinks(): Link[] {
    const links: Link[] = [];
    for (const file of markdownFiles()) {
        for (const line of readLines(file)) {
            for (const match of line.text.matchAll(LINK_PATTERN)) {
                links.push({ file, line: line.number, target: match[1] });
            }
        }
    }
    return links;
}

/** GitHub's heading slug: lowercased, punctuation dropped, spaces hyphenated. */
function slug(heading: string): string {
    return heading
        .trim()
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-');
}

function headingSlugs(absolutePath: string): Set<string> {
    const source = fs.readFileSync(absolutePath, 'utf8');
    const slugs = new Set<string>();
    for (const match of source.matchAll(/^#{1,6}\s+(.+?)\s*$/gm)) {
        slugs.add(slug(match[1]));
    }
    return slugs;
}

describe('relative links', () => {
    const links = collectLinks().filter((l) => !/^(https?:|mailto:|#)/.test(l.target));

    it('are present in the document set at all', () => {
        expect(links.length).toBeGreaterThan(30);
    });

    it('point at files that exist', () => {
        const broken = links
            .filter((link) => {
                const target = link.target.split('#')[0];
                if (target === '') return false;
                const resolved = path.resolve(REPO_ROOT, path.dirname(link.file), target);
                return !fs.existsSync(resolved);
            })
            .map((link) => `${link.file}:${link.line} -> ${link.target}`);
        expect(broken).toEqual([]);
    });

    it('point at headings that exist, where they name one', () => {
        const broken: string[] = [];
        for (const link of links) {
            const [target, fragment] = link.target.split('#');
            if (!fragment) continue;
            const resolved = path.resolve(
                REPO_ROOT,
                path.dirname(link.file),
                target === '' ? path.basename(link.file) : target,
            );
            if (!fs.existsSync(resolved) || !resolved.endsWith('.md')) continue;
            if (!headingSlugs(resolved).has(fragment.toLowerCase())) {
                broken.push(`${link.file}:${link.line} -> ${link.target}`);
            }
        }
        expect(broken).toEqual([]);
    });

    it('are relative, never absolute filesystem paths', () => {
        const absolute = links
            .filter((link) => link.target.startsWith('/'))
            .map((link) => `${link.file}:${link.line} -> ${link.target}`);
        expect(absolute).toEqual([]);
    });
});

describe('in-page anchors', () => {
    const anchors = collectLinks().filter((l) => l.target.startsWith('#'));

    it('point at headings in their own file', () => {
        const broken = anchors
            .filter((link) => {
                const resolved = path.join(REPO_ROOT, link.file);
                return !headingSlugs(resolved).has(link.target.slice(1).toLowerCase());
            })
            .map((link) => `${link.file}:${link.line} -> ${link.target}`);
        expect(broken).toEqual([]);
    });
});
