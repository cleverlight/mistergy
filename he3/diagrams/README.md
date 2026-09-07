# He-3 Programme - Diagrams

Empty so far. The drawings this set needs are tracked as a story in
[`../../docstech/users/alex.stanhope/todo.md`](../../docstech/users/alex.stanhope/todo.md).

## Conventions

Hand-authored SVG, committed as source, no build step - the same as the VHTR set.

The He-3 sheets inherit the VHTR house style at
[`../../vhtr/diagrams/HOUSE-STYLE.md`](../../vhtr/diagrams/HOUSE-STYLE.md) for **typography, panel
construction, line conventions, leader lines, dimensioning and sheet identity**. A reader moving
between the two programmes should not have to relearn how a drawing in this repository is put together.

They do **not** inherit the temperature colour ramp. That ramp encodes helium as a working fluid
across 35-950 °C and means nothing here, where the quantities that want a colour language are photon
energy, conversion efficiency and beam path. A He-3 companion ramp should be defined before the second
sheet is drawn, not after, and for the same reason the VHTR ramp exists: an ad hoc colour chosen per
sheet is the thing that makes a set stop reading as a set.

## What the first sheets should show

The prose is weakest where the architecture is most easily misread, so the drawings should attack
exactly that:

- **The gamma conversion stage is a GeV-class particle accelerator, not an optic.** The originating
  concept note drew it as a single block in a beam path and that single error carried most of the
  system's cost and complexity out of view. Any system diagram here must show it at true weight.
- **The energy chain.** The programme is lost in the conversion efficiencies rather than in any one
  component, and a sheet carrying the losses end to end says that faster than
  [`../design/03-feasibility.md`](../design/03-feasibility.md) can.
- **The two-arm split**, and the femtosecond synchronisation between the wakefield drive pulse and the
  scattering pulse, which is a serious constraint that reads as a detail in text.
