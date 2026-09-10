# He-3 Programme - Diagrams

Three system sheets, hand-authored SVG, committed as source, no build step - the same as the VHTR set.

| Sheet | File | What it shows |
|---|---|---|
| A | [`system-architecture.svg`](system-architecture.svg) | The beam chain from array to user station, with the wakefield stage drawn at true weight |
| B | [`two-arm-synchronisation.svg`](two-arm-synchronisation.svg) | The drive and scattering arms, and the ~10 fs budget for bringing them back together |
| C | [`energy-flow.svg`](energy-flow.svg) | Where the energy goes, on a logarithmic axis, and the inversion that saves the machine |

## House style

[`HOUSE-STYLE.md`](HOUSE-STYLE.md) is binding on all three. It is a companion to the VHTR house style
at [`../../vhtr/diagrams/HOUSE-STYLE.md`](../../vhtr/diagrams/HOUSE-STYLE.md) rather than a replacement:
typography, panel construction, line weights, leader lines, dimensioning and sheet identity are shared
across both programmes deliberately, so a reader moving between the two sets does not have to relearn
how a drawing in this repository is put together.

The one substantial divergence is colour. The VHTR temperature ramp encodes helium as a working fluid
across 35-950 °C and means nothing here. **The He-3 set has its own ramp, keyed to photon energy**,
because moving a photon across seven decades of it is what the architecture exists to do.

## What the sheets are for

The prose is weakest where the architecture is most easily misread, so the drawings attack exactly that.

- **The gamma conversion stage is a GeV-class particle accelerator, not an optic.** The originating
  concept note drew it as a single block in a beam path and that one error carried most of the system's
  cost and complexity out of view. Sheet A draws it at true weight and states the substitution directly.
- **The two-arm split and its femtosecond synchronisation** is a serious constraint that reads as a
  detail in text. Sheet B gives it a sheet, including the failure mode, which is silent.
- **The energy chain.** The programme is lost in the conversion efficiencies rather than in any one
  component, and sheet C carries the losses end to end faster than
  [`../design/03-feasibility.md`](../design/03-feasibility.md) can. It also carries the inversion that
  makes the surviving mission work: read as a production line the chain fails by eleven orders, and read
  as an instrument the 10⁻⁴ stage is not a loss but the product.

## What is not drawn yet

- A sheet for the ⁶Li(p,α)³He proton route of [`../design/13-neutron-free-routes.md`](../design/13-neutron-free-routes.md),
  which is a different machine and would need its own architecture sheet if the channel decision goes
  that way.
- The pairwise sensing graph of [`../design/07-ai-control.md`](../design/07-ai-control.md) §9. The
  two-tier topology, its 27 clusters and its 26 routed top-tier edges are the kind of structure that a
  drawing explains and a paragraph does not.
