# VHTR Design Project

[![License: CC BY 4.0](https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)

A theoretical **Very High Temperature Reactor (VHTR)** design developed iteratively as a living document.

One of the two programmes in this repository - see the [repository index](../README.md) for the other,
a helium-3 production concept, and for how the two connect.

## Concept

A helium-cooled, graphite-moderated reactor using TRISO fuel particles, targeting a core outlet temperature of **≥950 °C**. The primary mission is **grid-connected AC electricity** from a self-contained unit no larger than 20 m × 20 m × 20 m. Secondary capability: carbon-free hydrogen production via high-temperature electrolysis.

The same helium that cools the core drives the turbine directly — no intermediate heat exchanger, no secondary loop. Hard problems are solved with better materials and manufacturing, not more components.

## Design Documents

| # | Section | Status | Summary |
|---|---|---|---|
| — | [Design Summary](design/00-summary.md) | Draft | All key numbers consolidated — start here |
| 01 | [Overview](design/01-overview.md) | Draft | Mission, requirements, key decisions, layout |
| 02 | [Fuel](design/02-fuel.md) | Draft | TRISO particle spec, fuel compact, Gen 1/2 TPMS block design |
| 03 | [Core](design/03-core.md) | Draft | Annular prismatic geometry, sizing, fuel management |
| 04 | [Neutronics](design/04-neutronics.md) | Draft | C/U ratio, reactivity coefficients, burnup, power distribution, calculation requirements |
| 05 | [Thermal-Hydraulics](design/05-thermal-hydraulics.md) | Draft | Flow circuit, TPMS heat transfer, peak fuel temp, DLOFC analysis |
| 06 | [Materials](design/06-materials.md) | Draft | Helium chemistry, purification system, impurity limits, material stubs |
| 07 | [Safety](design/07-safety.md) | Draft | Walk-away safety, air-cooled RCCS, DLOFC, confinement |
| 08 | [Power Conversion](design/08-power-conversion.md) | Draft | Direct Brayton cycle, phased turbine strategy, precooler |
| 09 | [Hydrogen Production](design/09-hydrogen.md) | Draft | HTE secondary capability via SOEC |
| 10 | [Fuel Cycle](design/10-fuel-cycle.md) | Draft | LEU, burnup strategy, spent fuel composition, proliferation assessment |
| 11 | [Siting](design/11-siting.md) | Draft | Below-grade installation, civil layout, refueling access, multi-unit sites |
| 12 | [Economics](design/12-economics.md) | Draft | Capital cost, LCOE, comparison to alternatives, cost reduction pathway |
| — | [References](references.md) | Draft | Prior programmes, standards, key papers |

## Key Decisions Made

| Topic | Decision |
|---|---|
| Primary output | AC electricity to grid |
| Physical envelope | 20 m × 20 m × 20 m |
| Coolant | Helium — direct Brayton (no IHX) |
| Core geometry | Annular prismatic block |
| Turbine rotor | Phased: Ni superalloy at 850 °C (FOAK) → SiC/SiC CMC ceramic blisk at 950 °C (target) |
| Fuel enrichment | LEU < 5% ²³⁵U |
| Fuel management | 6–10 batch, 12-month cycle, target 80–100 GWd/tHM |
| Precooler | Air-cooled baseline; hot-climate bolt-on module |
| RCCS | Air-cooled passive natural convection; ~20 m chimney height |
| Installation | Below-grade; ~12 m cavity, ~8 m above-grade building |
| Hydrogen | HTE/SOEC electrical secondary |

## Relationship to the He-3 programme

The [He-3 programme](../he3/README.md) assesses routes to producing helium-3. Its conclusion is that the
strongest available route is neutron irradiation of lithium-6 to breed tritium, which decays to helium-3 -
and that a reactor of roughly this size is the natural host for it. That is a live tension with this design
rather than a settled feature of it: section 06 currently specifies **low-lithium graphite** precisely to
suppress tritium generation, on the grounds that tritium is a permeation and contamination problem in a
helium circuit. Breeding helium-3 on purpose means putting lithium back, in a separable irradiation target
rather than in the moderator, and accepting the tritium handling that follows.

Nothing in the sections below has been changed to accommodate this. The estimate, the neutron budget it
would consume and the argument for keeping the moderator lithium-free are in
[`../he3/design/11-alternative-routes.md`](../he3/design/11-alternative-routes.md).

## Design Heritage

This design draws on lessons from:
- **HTTR** (Japan, 30 MW, 950 °C achieved 2004)
- **HTR-10** (China, 10 MW pebble bed)
- **GT-MHR** (General Atomics, prismatic block, direct Brayton)
- **NGNP** (US DOE Very High Temperature Reactor program)
- **X-energy Xe-100** (modern pebble-bed SMR regulatory approach)
