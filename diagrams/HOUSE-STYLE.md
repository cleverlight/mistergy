# VHTR Master Set — House Style

Binding on all four master sheets. The four are used **together as a set**, so anything
in this file must be identical across sheets, byte-for-byte where it is a colour or a string.

Sheet D is a **deliberate register break**: it alone sits on a dark ground. Everything in
this document still applies to D, but D uses the dark-ground colour column where one is given.

---

## 1. Temperature colour language

One ramp. Every helium tag, pipe stroke, plenum fill, thermometer and legend bar on every
sheet takes its colour from these anchors. Do not invent intermediate colours by eye — a bar
must be built by interpolating **between exactly these anchors**, at each anchor's true linear
position across whatever temperature domain that bar spans.

| Temperature | Role | Light ground (A, B, C) | Dark ground (D) |
|---|---|---|---|
| 35 °C | compressor inlet | `#12417F` | `#3D8FD4` |
| 195 °C | compressor outlet / recuperator cold in | `#1D76B8` | `#4FA8DC` |
| 215 °C | recuperator hot out / precooler in | `#2E8FB4` | `#5CB6D8` |
| 580 °C | core inlet | `#E8A31E` | `#F2B23A` |
| 600 °C | turbine outlet / recuperator hot in | `#EF8B1F` | `#FF9A33` |
| 950 °C | core outlet / turbine inlet | `#D9481A` | `#F2582A` |
| 1,240 °C | peak fuel, normal operation | `#A81D0E` | `#D13A22` |
| 1,600 °C | TRISO coating failure limit | `#5E0B07` | `#9C2418` |

The dark column is the same hue sequence lightened for contrast on the dark ground. Hue
order and relative warmth must read identically to a viewer comparing sheets side by side.

**Two domains, one language.** Legend bars showing the *working fluid* span 0–1,000 °C.
Bars showing *fuel* temperature span 0–1,600 °C. Both interpolate the same anchors; only the
domain differs. Label the domain on the bar.

**The bar must agree with the tags.** If a sheet draws a 950 °C tag, its colour must be the
same value the sheet's own legend bar shows at 950 °C. This is currently the single most
visible inconsistency in the set — check it explicitly.

## 2. Non-temperature colours

| Use | Light ground | Dark ground |
|---|---|---|
| Primary ink / body text | `#12242E` | `#E8EFF7` |
| Muted text, secondary labels | `#5A7280` | `#93A6B8` |
| Faint text, notes, units | `#90A4AE` | `#6E8296` |
| Sheet ground | `#FBFAF7` | `#0D1117` |
| Panel fill | `#FFFFFF` | `#161C24` |
| Panel frame stroke | `#CCD8DE` | `#2A3441` |
| Panel header fill | `#F2F6F8` | `#1E2732` |
| Hairline divider | `#DBE4E9` | `#26303B` |
| Nuclear graphite | `#5C6670` | `#5C6670` |
| Pre-cast concrete | `#B9B2A4` | `#8A8478` |
| Pressure-boundary steel | `#8FA3B0` | `#8FA3B0` |
| RCCS air (cool, passive) | `#2FA88C` | `#3FD8B0` |
| Electrical / generator | `#5B4EA8` | `#8E82D8` |

**Area fills vs line work.** The values above are specified at full strength for *line work,
arrows, tags and legend swatches*. Where the same system is expressed as a large *area* fill,
use the same hue at low saturation — roughly 12–18% opacity over the sheet ground, or an
equivalent pre-computed light tint. Large areas must recede. **The primary helium circuit is
always the dominant read**; no secondary system may out-weigh it.

## 2b. Recurring objects — drawn identically on every sheet

Some objects appear on more than one sheet. A reader comparing sheets side by side must see
the *same object*, not three interpretations of it. These palettes are material colours, not
temperature colours, and do not come from the ramp.

### TRISO particle (appears on A, B and D)

Canonical, taken from sheet B, whose layer-stack panel is the most developed:

| Layer | Fill | Note |
|---|---|---|
| OPyC, 40 µm | `#56707C` | slate — dense pyrolytic carbon |
| SiC, 35 µm | `#0F8074` | teal-green — **the barrier**, always the visually emphasised ring |
| IPyC, 40 µm | `#7D939C` | light slate |
| Buffer, 100 µm | `#E3E9EC` | near-white — porous, reads as void-bearing |
| UO₂ kernel, 500 µm | `#BF360C` | fired-oxide red |

Kernel gradient, where a sheet shades it: `#DC501B → #D24218 → #BE3013 → #A81D0E`.

D may raise lightness on any of these by up to ~12% for contrast on the dark ground, but must
not change hue. The SiC ring carries the ★ mark and the "primary fission-product barrier"
callout on every sheet that draws it.

### Hexagonal fuel block and gyroid (appears on A, B and D)

The solid domain is graphite `#5C6670`; the void domain is helium. Draw the void neutral
(`#E3E9EC` light / `#2A3441` dark) unless the sheet is specifically annotating the helium
*temperature* inside the block, in which case use the ramp anchor for the stated temperature
and label it. Do not colour the void warm without saying what temperature it represents.

## 3. Typography

Single stack, on every text element of every sheet:

```
font-family="Helvetica Neue, Helvetica, Arial, Liberation Sans, sans-serif"
```

Do not use `system-ui` or `-apple-system` — they resolve to different faces on different
machines, which is unacceptable in a drawing set where sheets are compared side by side.

| Role | Size | Weight | Tracking |
|---|---|---|---|
| Sheet title | 30–34 | 700 | −0.2 |
| Sheet subtitle | 12.5 | 400 | 0.3 |
| Panel header | 12 | 700 | 1.1, uppercase |
| Panel sub-header / right-aligned panel note | 9.5 | 400 | 0 |
| Callout heading | 11 | 700 | 0.2 |
| Callout body | 9.5 | 400 | 0 |
| Data label | 10 | 400 | 0 |
| Data value | 10 | 700 | 0 |
| Temperature tag | 11.5 | 700 | 0 |
| Axis tick | 9 | 400 | 0 |
| Footnote / disclaimer | 8.5 | 400 | 0 |

Minimum size anywhere: **8.5**. Nothing below that.

## 4. Terminology — canonical strings

Use exactly these. They are what the design documents use.

| Use | Do not use |
|---|---|
| confinement building | containment building, confinement enclosure |
| functional containment (SECY-18-0096) | — (correct only for the licensing concept) |
| reactor vessel | RPV, pressure vessel |
| turbomachine vessel | power conversion vessel, PCU vessel |
| annular prismatic core | annular core, prismatic core |
| TPMS gyroid *(first use)* → gyroid | TPMS alone, gyroid TPMS |
| pre-cast concrete | precast concrete |
| RCCS *(expand once per sheet as* Reactor Cavity Cooling System *)* | RCCS unexpanded |
| walk-away safe | walkaway safe, walk away safe |
| direct Brayton | direct-Brayton, open Brayton |
| SiC/SiC CMC blisk | ceramic blisk, CMC blisk |
| TRISO particle | TRISO fuel particle |
| IG-110 nuclear graphite | IG-110 graphite |
| below grade | below-grade *(adjectival use only: "below-grade cavity")* |

D may use **power-conversion module** as the name of its exploded assembly *layer*, since that
is a group of components rather than the vessel itself. The vessel inside it is still the
turbomachine vessel.

## 5. Sheet identity

Every sheet carries, in this form:

- **Top-left**: sheet title, then a one-line subtitle in muted ink.
- **Top-right of the title band**: `VHTR DESIGN PROJECT · MASTER SET · SHEET n OF 4`
  in 9.5/700, tracking 1.1, uppercase, muted ink. n is A=1, B=2, C=3, D=4.
- **Bottom rule**, full width, hairline, with this disclaimer at 8.5 in faint ink:
  `Preliminary design — every value is an estimate awaiting calculation. All values traced to design/00-summary.md and the linked sections.`

Panel frames: 1.4 stroke, 3 corner radius, panel header band 22 high. Same on all sheets.

## 6. Headline statistic strip

Every sheet carries this strip, same eight cells, same order, same labels, same wording.
Value on top (18–22, weight 700), label beneath (8.5, faint, uppercase, tracking 0.6).

| # | Value | Label |
|---|---|---|
| 1 | 100–150 | MW(th) THERMAL POWER |
| 2 | 43–70 | MW(e) NET TO GRID |
| 3 | ~47 % | BRAYTON CYCLE EFFICIENCY |
| 4 | 950 °C | CORE OUTLET AT 4 MPa |
| 5 | 4.8 % ²³⁵U | LEU ENRICHMENT |
| 6 | 80–100 | GWd/tHM DISCHARGE BURNUP |
| 7 | 20 × 20 × 20 m | ENVELOPE, 12 m BELOW GRADE |
| 8 | 1,240 / 1,600 °C | PEAK FUEL vs TRISO LIMIT |

Position is free — top band, bottom band, or a column — whatever suits the sheet. Content is not.

## 7. Line conventions

| Meaning | Convention |
|---|---|
| Helium, primary circuit | solid, width by role, temperature-coloured |
| RCCS air | solid, RCCS air colour, 2.0, never touching a helium line |
| Electrical | solid, electrical colour, 1.6 |
| Refuelling route | dashed 6,4, 1.4 |
| Crossing, no connection | hop arc, never a plain crossing |
| Leader line | 0.8, muted ink, terminating exactly on its feature |
| Dimension line | 1.0, ink, with 6-long ticks or arrowheads at both ends |
| Grade line | dash-dot 12,4,3,4, 2.5, earth brown `#6D4C41` |
| Cut face | white cross-hatch on dark ground, grey cross-hatch on light |
| Section datum | dash-dot, with A–A style end labels |

## 8. Facts — do not change

The number audit found **no contradictions** between the four sheets. Do not alter any value,
range, unit or derived figure while conforming to this style. If conforming appears to require
changing a number, stop and report it instead.
