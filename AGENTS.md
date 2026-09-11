# AI Agent Guidelines

Instructions for AI assistants working on this repository.

**Workspace-wide rules** live in [`../AGENTS.md`](../AGENTS.md) - story state machine, story tracking
format, commit policy, git workflow, edit verification, the em dash and en dash ban. Read both: the
workspace file defines the cross-project rules, this file documents what is different about this
repository. Document conventions are in [`CODING_STANDARDS.md`](CODING_STANDARDS.md).

## What this repository is, and what it is not

Mistergy holds two theoretical engineering design programmes, written as markdown and SVG. See
[`README.md`](README.md) for the index.

**There is no application here.** No server, no build step, no deployment, and nothing that runs in
production. The `package.json` and Jest suite exist only to check the documents, so `/prod-ready` has a
real gate: it runs `lint` and `test-jest` and reports Playwright as skipped. `/push-prod` records the
story done, commits, pushes to `staging` and runs `merge-main.sh`, but its deployment table gives
mistergy `n/a` for both healthchecks and both Playwright suites, so a green `/push-prod` here means the
tree shipped, never that anything was verified live, because nothing is live.
Do not add an application, a dev server or a deploy target; do extend the checks.

The workspace skills that sweep for a `package.json` are meant to find this repository, and
`/team-check-updates` includes it in a dependency wave. `/dev-status` and `/open-dev` have nothing to
start, because there is no `dev` script and no port, and that is correct rather than a gap.

**Know exactly how far the checks reach**, because the gap between what they cover and what they
appear to cover is where a false assurance would live:

| Checked mechanically | Still maintained only by reading |
|---|---|
| arithmetic that a derivation writes out in full | whether a figure traces to its summary page |
| relative links and heading anchors resolving | whether a number is the *right* number |
| British spelling, on a curated word list | whether a citation is real |
| new em dash and en dash glyphs | whether a diagram agrees with the prose |
| section numbering, indexing and structure | everything in `vhtr/diagrams/HOUSE-STYLE.md` |

The right-hand column contains every rule that matters most. A green suite means the mechanical floor
holds, not that a document is correct; the number discipline in `CODING_STANDARDS.md` is the rule this
repository is built on.

## Git workflow

Workspace-standard. This repository's `merge-main.sh` is the shared fast-forward core alone, with no
staging-healthcheck gate and no prod `migrate deploy`, because there is no deployed app and no
database. That is its finished state, not a half-finished script.

## The two programmes

| Programme | Directory | Character |
|---|---|---|
| VHTR | [`vhtr/`](vhtr/README.md) | A reactor design. Mature draft, internally consistent. |
| He-3 | [`he3/`](he3/README.md) | A helium-3 production concept. Under active feasibility assessment, and the assessment is largely negative. |

**These are peers, not a project and a side project.** A change to one does not imply a change to the
other, but the two are genuinely coupled at one point: the He-3 programme's recommended production
route is lithium-6 breeding hosted by a reactor of roughly the VHTR's size, and that cuts against the
VHTR's current low-lithium graphite decision. If you touch either side of that, check the other. See
[`he3/design/11-alternative-routes.md`](he3/design/11-alternative-routes.md).

## Do not quietly make the He-3 programme sound better than it is

The feasibility assessment in [`he3/design/03-feasibility.md`](he3/design/03-feasibility.md) states
its verdict in its opening headline: the production target is unreachable at the canonical realistic
rate, even granting a working single-photon mechanism. Quote the verdict figure from there. The smaller
shortfall it gives beside it is the optimistic case and is only ever quoted labelled as one. The
"eight to nine orders of magnitude" found elsewhere in the set is a different comparison, the
lithium-6 route against the laser route's realistic rate, and is never the verdict. The reasons are
thermodynamic rather than engineering, and the conclusion was reached by working the arithmetic, not
by taste.

An agent asked to "improve", "polish" or "expand" these documents will feel pressure to soften it,
because the surrounding material is enthusiastic and the conclusion is not. Do not. If you think the
assessment is wrong, say so with a number and a derivation, in the document, changing the verdict
explicitly. Quietly warming the language is how a repository stops being trustworthy.

The same applies in reverse: the laser array, the coherent combining and the AI alignment control are
genuinely good work with a real lineage, and the negative verdict on the nuclear endpoint is not a
verdict on them. Do not let the assessment bleed into a general pessimism the evidence does not support.

## Diagrams

Read [`CODING_STANDARDS.md`](CODING_STANDARDS.md) > Diagrams, and the VHTR house style it names,
before touching any drawing.

## Verification

Run `pnpm run lint` and `pnpm run test-jest`, then read. The suite catches a narrow band of mistakes
and reading catches the rest, so neither substitutes for the other. Before handing back a change:

- Re-read the section you edited, in full, not just the diff.
- If you changed a number, grep the whole repository for that number and for the figures derived from
  it. The suite checks arithmetic a document writes out; it cannot tell you a figure is the wrong one.
- If you changed a heading or a filename, run the suite: `__tests__/links.test.ts` resolves every
  relative link and anchor.
- The suite fails on a new em dash or en dash, or either HTML entity, in a markdown or SVG file, but
  only outside the directories `__tests__/helpers.ts` excludes from discovery. `docstech/` is one of
  them, so a glyph written into the story board passes silently; the ban still applies there. Use a
  hyphen. Do not regenerate the baseline to silence the check: it records what predates the rule, and
  `sh/dash-baseline.sh` is for edits that legitimately move a count, not for new text.
- If you rendered a diagram to check it, delete the PNG afterwards per the workspace browser-snapshot rule.
