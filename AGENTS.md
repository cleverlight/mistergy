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
production. What the repository does carry is a `package.json` and a Jest suite whose entire purpose is
to check the documents, so that `/prod-ready` has a real gate here: it runs `lint` and `test-jest` as
it does everywhere else, and reports Playwright as skipped because there is none. `/push-prod` does
less. It still records the story done, commits, pushes to `staging` and runs `merge-main.sh`, but its
deployment table gives mistergy `n/a` for both healthchecks and both Playwright suites, so the two
deploy waits and the two Playwright runs all report skipped. A green `/push-prod` here means the tree
shipped, never that anything was verified live, because nothing is live. (Corrected 2026-09-11: this
said both skills "work here as they do everywhere else".)
Do not add an application, a dev server or a deploy target; do extend the checks.

Because there is now a `package.json`, the workspace skills that sweep for one will find this
repository. That is intended. `/team-check-updates` should include it in a dependency wave like any
other project. `/dev-status` and `/open-dev` still have nothing to start, because there is no `dev`
script and no port, and that remains correct rather than a gap to be closed.

**Know exactly how far the checks reach**, because the gap between what they cover and what they
appear to cover is where a false assurance would live:

| Checked mechanically | Still maintained only by reading |
|---|---|
| arithmetic that a derivation writes out in full | whether a figure traces to its summary page |
| relative links and heading anchors resolving | whether a number is the *right* number |
| British spelling, on a curated word list | whether a citation is real |
| new em dash and en dash glyphs | whether a diagram agrees with the prose |
| section numbering, indexing and structure | everything in `vhtr/diagrams/HOUSE-STYLE.md` |

The right-hand column is the larger one and contains every rule that actually matters most. A green
suite means the mechanical floor holds, not that a document is correct, and the number discipline in
`CODING_STANDARDS.md` remains the rule this repository is really built on.

## Git workflow

Workspace-standard, with one exception worth knowing before you read the script and think it is
half-finished. [`../AGENTS.md`](../AGENTS.md) says that in most projects `merge-main.sh` also runs a
staging-healthcheck gate, a prod `migrate deploy`, or both before merging, and that `/push-prod` step 6
tables which script runs which. Neither runs here, because neither thing exists: no deployed app to be
unhealthy, no database to migrate. That table lists mistergy under neither. This repository's copy is
the shared fast-forward core alone, and that is its finished state. (Corrected 2026-09-11: this quoted
the workspace file as saying `merge-main.sh` runs both gates, which it no longer says.)

## The two programmes

| Programme | Directory | Character |
|---|---|---|
| VHTR | [`vhtr/`](vhtr/README.md) | A reactor design. Mature draft, 13 sections, internally consistent, has been through several consistency audits. |
| He-3 | [`he3/`](he3/README.md) | A helium-3 production concept. Under active feasibility assessment, and the assessment is largely negative. |

**These are peers, not a project and a side project.** A change to one does not imply a change to the
other, but the two are genuinely coupled at one point: the He-3 programme's recommended production
route is lithium-6 breeding hosted by a reactor of roughly the VHTR's size, and that cuts against the
VHTR's current low-lithium graphite decision. If you touch either side of that, check the other. See
[`he3/design/11-alternative-routes.md`](he3/design/11-alternative-routes.md).

## Do not quietly make the He-3 programme sound better than it is

The feasibility assessment in [`he3/design/03-feasibility.md`](he3/design/03-feasibility.md) states
its own headline: "The production target is unreachable by **2.7 × 10¹¹** at the canonical realistic
rate, even granting a working single-photon mechanism, and by 2.7 × 10⁹ on a conversion efficiency two
orders of magnitude better than anything [05-gamma-source](he3/design/05-gamma-source.md) believes is
reachable." The verdict is the first figure, roughly eleven orders of magnitude. The second is the
optimistic case and is only ever quoted labelled as one. The reasons are thermodynamic rather than
engineering. That conclusion is load-bearing and it was reached by working the arithmetic, not by
taste. (Corrected 2026-09-11: this said the route misses "by roughly nine orders of magnitude", which
matches only the optimistic case. The "eight to nine orders" elsewhere in the set is a different
comparison, the lithium-6 route against the laser route's realistic rate.)

An agent asked to "improve", "polish" or "expand" these documents will feel pressure to soften it,
because the surrounding material is enthusiastic and the conclusion is not. Do not. If you think the
assessment is wrong, the way to say so is with a number and a derivation, in the document, changing
the verdict explicitly. Quietly warming the language is how a repository stops being trustworthy.

The same applies in reverse: the laser array, the coherent combining and the AI alignment control are
genuinely good work with a real lineage, and the negative verdict on the nuclear endpoint is not a
verdict on them. Do not let the assessment bleed into a general pessimism the evidence does not support.

## Diagrams

SVG, hand-authored, no build step. The VHTR master set has a binding house style at
[`vhtr/diagrams/HOUSE-STYLE.md`](vhtr/diagrams/HOUSE-STYLE.md) covering the temperature colour ramp,
typography, terminology and line conventions. Read it before touching any drawing in that set - the
four master sheets are used together and must agree byte-for-byte on colours and strings.

He-3 diagrams inherit the same typography, panel and line conventions. They do not inherit the
temperature ramp, which is specific to the reactor's working fluid.

## Verification

Run `pnpm run lint` and `pnpm run test-jest`, then read. The suite catches a narrow band of mistakes
and reading catches the rest, so neither substitutes for the other. Before handing back a change:

- Re-read the section you edited, in full, not just the diff.
- If you changed a number, grep the whole repository for that number and for the figures derived from
  it. The suite checks arithmetic a document writes out; it cannot tell you a figure is the wrong one.
- If you changed a heading or a filename, run the suite: `__tests__/links.test.ts` resolves every
  relative link and anchor, which is the one check that used to be a manual grep.
- If you added an em dash or en dash, or either HTML entity, to a markdown or SVG file, the suite will
  fail - but only outside `docstech/`, `node_modules/`, `.git/` and `test-results/`, which
  `__tests__/helpers.ts` excludes from discovery and `sh/dash-baseline.sh` excludes too. A glyph
  written into the story board under `docstech/` passes silently; the ban still applies there.
  (Corrected 2026-09-11: this said the suite fails on any new em dash, without naming where the check
  stops.) Use a hyphen. Do not regenerate the baseline to silence it - that file records what predates
  the rule, and `sh/dash-baseline.sh` exists for edits that legitimately move a count, not for new text.
- If you rendered a diagram to check it, delete the PNG afterwards per the workspace browser-snapshot rule.
