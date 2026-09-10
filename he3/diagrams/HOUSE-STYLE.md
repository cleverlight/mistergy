# He-3 Programme - House Style

Binding on all three system sheets. Companion to
[`../../vhtr/diagrams/HOUSE-STYLE.md`](../../vhtr/diagrams/HOUSE-STYLE.md), which this file does not
restate. Read that one for typography, panel construction, line weights, leader lines, dimensioning
and sheet identity: those are shared across both programmes deliberately, so that a reader moving
between the two sets does not have to relearn how a drawing in this repository is put together.

What follows is only what differs, and there is one substantial difference.

---

## 1. The temperature ramp is not inherited

The VHTR ramp encodes helium as a working fluid across 35-950 °C. Nothing in the He-3 set is a
working fluid and nothing in it has a bulk temperature worth colouring. Using those anchors here
would import a meaning that does not apply.

**The quantity that wants a colour language in this set is photon energy**, because the whole
architecture exists to move a photon across seven decades of it. That is the story the drawings have
to tell, so it is the story the ramp encodes.

## 2. Photon energy ramp

One ramp, spanning the 1.204 eV drive light to the top of the useful gamma band. Interpolate between
these anchors; do not invent intermediate values by eye.

| Photon energy | Role | Colour |
|---|---|---|
| 1.204 eV | 1030 nm drive and scattering light | `#B3261E` |
| 1 MeV | bottom of the useful gamma band | `#8E3AA8` |
| 10 MeV | mid band, where most users sit | `#5A4FC4` |
| 20.578 MeV | ⁴He(γ,n)³He threshold | `#2F6FD0` |
| 27 MeV | near the cross-section peak | `#1B8FC4` |

The sequence runs deep red to cyan through violet, which reads as increasing energy to anyone who has
seen a spectrum. **The 1.204 eV anchor and the 20.578 MeV anchor are the two ends of the 4γ² leap**
and should be placed adjacent wherever a sheet illustrates that step, because their separation on the
ramp is the argument.

## 3. System colours

Not photon energies, so not from the ramp above.

| Use | Colour | Note |
|---|---|---|
| Electron beam, 1.06-1.25 GeV | `#4B3F9E` | deep violet, distinct from the 1 MeV gamma anchor |
| Wakefield plasma stage | `#E8701A` | the only hot colour in the set |
| Cryogenic helium target | `#2FA88C` | inherited from the VHTR RCCS colour; cold and passive reads correctly |
| Lithium-6 solid target | `#8A8478` | the [13](../design/13-neutron-free-routes.md) route, where a sheet draws it |
| Loss, unconverted power, waste heat | `#90A4AE` | must never out-weigh a live beam path |
| Timing and synchronisation | `#C2410C` | reserved; used only for the inter-arm timing link |

Primary ink, muted text, faint text, sheet ground, panel fill, panel frame and hairline are all taken
unchanged from the VHTR light-ground column. There is no dark-ground variant in this set.

## 4. Line conventions specific to this set

The VHTR line conventions apply. These are additional.

| Meaning | Convention |
|---|---|
| Laser light, drive arm | solid, 1.204 eV colour, 3.0 |
| Laser light, scattering arm | solid, 1.204 eV colour, 2.0, distinguished by width not hue |
| Electron beam | solid, electron colour, 3.0, arrowhead at every stage boundary |
| Gamma beam | solid, ramp colour at the stated energy, 3.0 |
| Timing link | dashed 4,3, timing colour, 1.4 |
| Energy lost at a stage | tapered band to the loss colour, leaving the flow downward |

**A beam path never crosses another beam path without a hop arc**, exactly as in the VHTR set.

## 5. Headline statistic strip

Every sheet carries this strip, same eight cells, same order, same labels. Value on top, label
beneath, per the VHTR spec.

| # | Value | Label |
|---|---|---|
| 1 | 1-30 MeV | GAMMA BEAM BAND |
| 2 | 1.06-1.21 GeV | ELECTRON BEAM ENERGY |
| 3 | 1.7 x 10⁷ | INVERSE COMPTON LEAP, 4γ² |
| 4 | 1-5 kW | ARRAY AVERAGE POWER |
| 5 | 100-500 TW | ARRAY PEAK POWER |
| 6 | 10⁻⁴ | LASER TO GAMMA CONVERSION |
| 7 | ~10 fs | INTER-ARM TIMING BUDGET |
| 8 | 1.5 x 10¹¹ /s | GAMMA FLUX AT 5 kW |

Cell 6 is the canonical optimistic bound and cell 8 follows from it. Both are labelled optimistic on
every sheet that draws them; see [`../design/03-feasibility.md`](../design/03-feasibility.md) Step 5.

## 6. Sheet identity

As the VHTR set, with the marker string:

```
HE-3 PROGRAMME · SYSTEM SET · SHEET n OF 3
```

n is A=1, B=2, C=3. Bottom rule disclaimer, 8.5 in faint ink:

```
Preliminary design - every value is an estimate awaiting calculation. All values traced to design/00-summary.md and the linked sections.
```

## 7. The one thing every sheet must get right

The originating concept note drew the infrared-to-gamma step as a single block labelled "Compton
backscatter converter", as though it were an optical component. **It is a GeV-class particle
accelerator, and it dominates the cost, footprint and complexity of the whole system.** Any sheet in
this set that shows the beam chain must draw that stage at true weight relative to everything around
it. A sheet that lets it read as an optic has reproduced the error the set exists to correct.
