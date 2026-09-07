# Mistergy Document Standards

This repository holds prose and drawings rather than code, so "coding standards" here means document
standards. Workspace-wide rules still apply and are not restated: see [`../AGENTS.md`](../AGENTS.md),
in particular the ban on em dash and en dash characters, which is binding on everything written here.

## Number discipline

This is the most important rule in the repository, and the test suite does not replace it. The suite
checks the arithmetic a derivation writes out, which catches a slipped digit; it cannot tell you that a
figure is the wrong figure, or that it disagrees with the summary page. That remains yours to hold.

**Every quantitative claim traces to a summary page.** Each programme has one:
[`vhtr/design/00-summary.md`](vhtr/design/00-summary.md) and
[`he3/design/00-summary.md`](he3/design/00-summary.md). A figure quoted in any section must match its
summary page exactly, including significant figures and units.

- **A section may not introduce a new headline number on its own.** If a section needs a figure the
  summary does not carry, add it to the summary in the same change.
- **A disagreement between a section and its summary is a defect, not a local variation.** Report it.
  Do not reconcile it by editing whichever one you happen to be looking at.
- **Show the derivation.** A number a reader cannot check is worse than no number. Give the inputs and
  the arithmetic, either inline or as a footnote, so that a figure can be falsified.
- **Say when a figure is unknown.** Write "awaiting calculation" rather than inventing something
  plausible. A placeholder that reads like a result is the failure mode this rule exists to prevent.
- **Distinguish nuclear data from estimates.** Reaction thresholds, half-lives and masses are measured
  values from evaluated data files and should be presented as such. Almost everything else in this
  repository is an estimate, and the two must not look alike.

The He-3 set is the worked example of why this matters. Its originating concept note carried three
numerical errors - a threshold that belonged to a different reaction channel, a cross-section
representative of heavier nuclei, and a focal intensity inconsistent with the note's own stated power
budget - and all three ran in the optimistic direction. None of them would have survived a summary page.

## No fabricated citations

Do not invent authors, titles, journals, volumes, years or DOIs, and do not reproduce a citation you
cannot verify. This is not a style preference: a plausible-looking fake reference is worse than no
reference, because it survives casual review and propagates.

Where a specific source cannot be verified, name the facility, programme, database or evaluating body
instead and describe what a reader should look for. Both `references.md` files are written as reading
maps for exactly this reason.

## Prose conventions

- **British spelling.** Metre, fibre, programme, analyse, optimise, modelling, behaviour.
- **Plain hyphens only**, never U+2014 or U+2013, and never `&mdash;` or `&ndash;`. Existing text that
  predates this rule is left alone; what you write follows it.
- **Tables for anything with more than two parallel facts.** These documents are read for their numbers
  and a table is scannable where a paragraph is not.
- **Units on every quantity**, with a space before the unit, and SI unless an industry convention is
  genuinely stronger (GWd/tHM, barn, eV and its multiples).
- **Sections open with what they cover and close with `## Open questions`.** The open-questions list is
  not decoration. It is how a reader tells a settled decision from an unexamined assumption, and it is
  the first thing to update when something is resolved.

## Structure

```
<programme>/
  README.md        programme index, design document table, key decisions
  design/          00-summary.md is canonical; sections numbered from 01
  diagrams/        hand-authored SVG, no build step
  references.md    reading map, not a formal bibliography
```

Sections are numbered with a two-digit prefix and referenced by relative link. Nothing validates those
links, so grep after any rename.

## Diagrams

SVG, authored by hand, committed as source. No build step and no generated artefacts.

The VHTR master set is governed by [`vhtr/diagrams/HOUSE-STYLE.md`](vhtr/diagrams/HOUSE-STYLE.md),
which is binding and unusually strict because its four sheets are compared side by side. Its section 8
states the rule that matters most: conforming to the style must never change a number. If it appears to,
stop and report it.

Rendered checks (PNG, screenshots) are throwaway. Delete them before handing back, per the workspace
browser-snapshot rule.

## Changing a decision

Both programmes carry a "Key decisions" table. When a decision changes:

1. Update the decision table.
2. Update the summary page if a number moved.
3. Update every section that reasoned from the old decision, which is what the grep is for.
4. Say what changed and why in the commit message.

Do not leave a superseded decision in place alongside its replacement. Change history lives in git, and
a document that records both the old answer and the new one is a document that cannot be relied on.
