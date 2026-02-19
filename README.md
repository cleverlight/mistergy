# VHTR Design Project

A theoretical **Very High Temperature Reactor (VHTR)** design developed iteratively as a living document.

## Concept

A helium-cooled, graphite-moderated reactor using TRISO fuel particles, targeting a core outlet temperature of **≥950 °C**. The primary mission is **grid-connected AC electricity** from a self-contained unit no larger than 20 m × 20 m × 20 m. Secondary capability: carbon-free hydrogen production via high-temperature electrolysis.

The same helium that cools the core drives the turbine directly — no intermediate heat exchanger, no secondary loop. Hard problems are solved with better materials and manufacturing, not more components.

## Design Documents

| # | Section | Status | Summary |
|---|---|---|---|
| 01 | [Overview](design/01-overview.md) | Draft | Mission, requirements, key decisions, layout |
| 02 | [Fuel](design/02-fuel.md) | Stub | TRISO particle and fuel element design |
| 03 | [Core](design/03-core.md) | Draft | Annular prismatic geometry, sizing, fuel management |
| 04 | [Neutronics](design/04-neutronics.md) | Stub | Neutron physics, criticality, reactivity coefficients |
| 05 | [Thermal-Hydraulics](design/05-thermal-hydraulics.md) | Stub | Coolant flow, heat transfer, temperature profiles |
| 06 | [Materials](design/06-materials.md) | Stub | High-temperature material selection |
| 07 | [Safety](design/07-safety.md) | Draft | Walk-away safety, air-cooled RCCS, DLOFC, confinement |
| 08 | [Power Conversion](design/08-power-conversion.md) | Draft | Direct Brayton cycle, full ceramic blisk, precooler |
| 09 | [Hydrogen Production](design/09-hydrogen.md) | Draft | HTE secondary capability via SOEC |
| 10 | [Fuel Cycle](design/10-fuel-cycle.md) | Draft | LEU, burnup strategy, spent fuel composition, proliferation assessment |
| 11 | [Siting](design/11-siting.md) | Draft | Below-grade installation, civil layout, refueling access, multi-unit sites |
| — | [References](references.md) | Draft | Prior programmes, standards, key papers |

## Key Decisions Made

| Topic | Decision |
|---|---|
| Primary output | AC electricity to grid |
| Physical envelope | 20 m × 20 m × 20 m |
| Coolant | Helium — direct Brayton (no IHX) |
| Core geometry | Annular prismatic block |
| Turbine rotor | Full ceramic blisk (SiC/SiC CMC, additive manufacturing) |
| Fuel enrichment | LEU < 5% ²³⁵U |
| Fuel management | 3-batch, 12-month cycle, target 80–100 GWd/tHM |
| Precooler | Air-cooled baseline; hot-climate bolt-on module |
| RCCS | Air-cooled passive natural convection; ~20 m chimney height |
| Installation | Below-grade; ~12 m cavity, ~8 m above-grade building |
| Hydrogen | HTE/SOEC electrical secondary |

## Design Heritage

This design draws on lessons from:
- **HTTR** (Japan, 30 MW, 950 °C achieved 2004)
- **HTR-10** (China, 10 MW pebble bed)
- **GT-MHR** (General Atomics, prismatic block, direct Brayton)
- **NGNP** (US DOE Very High Temperature Reactor program)
- **X-energy Xe-100** (modern pebble-bed SMR regulatory approach)
