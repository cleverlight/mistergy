# AI Agent Guidelines

Instructions for AI assistants working on this repository.

**Workspace-wide rules** live in [`../AGENTS.md`](../AGENTS.md) - story state machine, story tracking
format, commit policy, git workflow, edit verification, the em dash and en dash ban. Read both: the
workspace file defines the cross-project rules, this file documents what is different about this
repository. Document conventions are in [`CODING_STANDARDS.md`](CODING_STANDARDS.md).

## What this repository is, and what it is not

Mistergy holds two theoretical engineering design programmes, written as markdown and SVG. See
[`README.md`](README.md) for the index.

**There is no code here.** No `package.json`, no `node_modules`, no lint, no tests, no dev server,
no deployment. Do not add any of these. The workspace skills that sweep every project by discovering
`package.json` files (`/project-status`, `/team-check-updates`, `/dev-status`, `/open-dev`) will pass
over this repository correctly, and that is the intended behaviour rather than a gap to be closed.

The consequence for an agent working here is that **the usual safety nets do not exist**. There is no
type checker to catch a wrong identifier, no test to catch a wrong number, no linter to catch a banned
character. Every guarantee in this repository is one a human or an agent maintained by reading. Work
accordingly, and see the number discipline in `CODING_STANDARDS.md`, which is the closest thing this
repository has to a test suite.

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

The feasibility assessment in [`he3/design/03-feasibility.md`](he3/design/03-feasibility.md) concludes
that the photodisintegration route misses a useful production rate by roughly nine orders of magnitude,
for thermodynamic rather than engineering reasons. That conclusion is load-bearing and it was reached
by working the arithmetic, not by taste.

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

There is nothing to run, so verification is reading. Before handing back a change:

- Re-read the section you edited, in full, not just the diff.
- If you changed a number, grep the whole repository for that number and for the figures derived from it.
- If you changed a heading or a filename, grep for links to it. Cross-references between sections are
  plain relative markdown links and nothing validates them.
- If you rendered a diagram to check it, delete the PNG afterwards per the workspace browser-snapshot rule.
