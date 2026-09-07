# Mistergy

[![License: CC BY 4.0](https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)

Two theoretical engineering programmes, developed iteratively as living documents. Both are
about helium, and that is not a coincidence: one burns uranium to make electricity and heat
with helium as the working fluid, the other tries to make the helium isotope that a clean
fusion cycle would need.

| Programme | Directory | What it is | Status |
|---|---|---|---|
| **VHTR** | [`vhtr/`](vhtr/README.md) | Helium-cooled, graphite-moderated Very High Temperature Reactor. TRISO fuel, direct Brayton cycle, 950 °C core outlet, grid AC in a 20 m cube. | Draft design, 13 sections |
| **He-3** | [`he3/`](he3/README.md) | A gamma-ray source and photonuclear instrument: a coherently combined laser array with AI-driven alignment, driving a wakefield accelerator and inverse Compton stage. Began as a helium-3 production scheme by photodisintegration; that mission has been assessed and reassigned. | Rescoped after feasibility assessment |

## Why these two sit in one repository

They are the two halves of the same question: what does a self-contained, carbon-free power
unit actually need, and can the fuel for the better version of it be made?

The VHTR is buildable now. Every hard problem in it is a materials or manufacturing problem
with a known research path, and the design deliberately solves them with better materials
rather than more components.

The He-3 programme reaches further. Deuterium-helium-3 fusion produces charged particles that
can be converted to electricity directly, with none of the neutron flux that makes
deuterium-tritium reactors an activation and shielding problem. The obstacle is not the
reactor concept, it is that there is almost no helium-3 on Earth to fuel one.

The link between the programmes is concrete rather than thematic. **The most viable route to
helium-3 identified in this repository runs through the reactor, not the laser array**: lithium-6
targets irradiated in a neutron flux breed tritium, which beta-decays to helium-3 with a 12.32
year half-life. A 100 MW(th) VHTR could yield an estimated 12-60 g of helium-3 per year by that
path. The laser photodisintegration route, assessed honestly in
[`he3/design/03-feasibility.md`](he3/design/03-feasibility.md), falls short of that by eight to
nine orders of magnitude at its realistic rate, and is retained as a physics instrument rather than
a production method.

Neither route is a fusion-fuel supply, and the repository is careful to say so. A deuterium-helium-3
plant would need of order 90 kg of helium-3 per gigawatt-electric year; at 12 g/yr a single VHTR
supplies about a ten-thousandth of that, so the lithium route addresses the existing
instrumentation-scale market and nothing larger. That assessment is the most important document in the He-3 set and it should be read
before the rest of it.

Note that this cuts against a live VHTR decision: the reactor currently specifies low-lithium
graphite specifically to suppress tritium generation. Breeding helium-3 deliberately means
reversing that in a controlled, separable target rather than in the moderator. See
[`he3/design/11-alternative-routes.md`](he3/design/11-alternative-routes.md).

## Reading order

- New here, want the reactor: [`vhtr/design/00-summary.md`](vhtr/design/00-summary.md).
- New here, want the laser array: [`he3/design/00-summary.md`](he3/design/00-summary.md), then the feasibility assessment.
- Want to know whether any of this is real: [`he3/design/03-feasibility.md`](he3/design/03-feasibility.md) is the most sceptical document in the repository and the best test of the rest.

## Status and standing warning

Every number in both programmes is an estimate awaiting calculation. Nothing here has been
validated against a neutronics code, a CFD run, a particle-in-cell simulation or an experiment.
The documents are written to be falsifiable - figures are given with their derivation so that
a reader can check them - but they have not yet been falsified by anyone competent to do it.

The sums, at least, are checked by machine. `pnpm run test-jest` re-computes every derivation the
documents write out in full and fails if a stated result does not follow from the inputs beside it,
alongside checks on links, structure and spelling. That is a check on the arithmetic and nothing more:
it cannot tell you that a figure is the right figure, that a cross-section is current, or that a
model applies. The standing warning above is unaffected by it.

Licensed CC BY 4.0. See [LICENSE](LICENSE).
