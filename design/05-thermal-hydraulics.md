# 05 · Thermal-Hydraulics

## Helium Coolant Properties at Operating Conditions

Helium's thermal properties are unusual and largely constant with temperature — an advantage for analysis and design.

| Property | Value | Notes |
|---|---|---|
| Specific heat Cp | 5,193 J/(kg·K) | Constant; independent of T and P |
| Prandtl number Pr | ~0.66 | Weakly temperature-dependent; close to air (0.71) |
| Density at 4 MPa, 35°C | 6.4 kg/m³ | ρ = PM/RT; M = 4.003 g/mol |
| Density at 4 MPa, 580°C | 2.3 kg/m³ | Core inlet condition |
| Density at 4 MPa, 950°C | 1.6 kg/m³ | Core outlet condition |
| Dynamic viscosity at 700°C | ~4.1 × 10⁻⁵ Pa·s | Increases with temperature (kinetic theory) |
| Thermal conductivity at 700°C | ~0.37 W/(m·K) | High for a gas; aids convective heat transfer |

The Prandtl similarity with air (Pr_He ≈ 0.66 vs Pr_air ≈ 0.71) means heat transfer measurements from air-flow test rigs translate directly to helium service with a correction factor of (0.66/0.71)^0.4 ≈ 0.97 — essentially unity. This is the physical basis for air-loop validation of core thermal-hydraulic designs (§03).

## Primary Flow Circuit and Temperatures

### Brayton Cycle Temperatures

Working backwards from the cycle parameters established in §08:

| Point | Location | Temperature | Notes |
|---|---|---|---|
| 1 | Core outlet / turbine inlet | 950 °C | Design requirement |
| 2 | Turbine outlet / recuperator hot inlet | ~600 °C | η_turbine = 0.90, PR = 2.5 |
| 3 | Recuperator hot outlet / precooler inlet | ~215 °C | ε_recuperator = 0.95 |
| 4 | Precooler outlet / compressor inlet | 35 °C | Air-cooled precooler target |
| 5 | Compressor outlet / recuperator cold inlet | ~195 °C | η_compressor = 0.88, PR = 2.5 |
| 6 | Recuperator cold outlet / core inlet | ~580 °C | ε_recuperator = 0.95 |

**Core temperature rise: 950 − 580 = 370 °C**

This is set by the thermodynamic cycle, not by an independent choice. It feeds directly into the mass flow rate calculation.

### Mass Flow Rate

For thermal power Q and core ΔT:

```
  ṁ = Q / (Cp × ΔT)
```

| Thermal power | Mass flow rate |
|---|---|
| 100 MW(th) | 52 kg/s |
| 125 MW(th) | 65 kg/s |
| 150 MW(th) | 78 kg/s |

These are moderate, well-engineered mass flow rates for a helium system of this scale.

### Flow Direction in Core

Cool helium (580 °C) enters the **top plenum**, flows **downward** through the fuel channels, and exits via the **bottom hot plenum** at 950 °C. This keeps the vessel top head (and its penetrations, instrumentation, and control rod drive mechanisms) at the cooler inlet temperature — a significant engineering advantage for sealing and materials. The same flow configuration is used in the HTTR and GT-MHR.

```
  TOP HEAD (cool, ~580°C)  ← helium inlet
       │
       │   control rod drives (cool end)
       │
  ┌────▼────────────────────────────────────────┐
  │         TOP REFLECTOR                        │  580°C
  │   ┌──────────────────────────────────────┐   │
  │   │                                      │   │
  │   │     FUEL ANNULUS                     │   │  580→950°C
  │   │     (helium flows down               │   │
  │   │      through TPMS channels)          │   │
  │   │                                      │   │
  │   └──────────────────────────────────────┘   │
  │         BOTTOM REFLECTOR                     │  950°C
  └────┬────────────────────────────────────────┘
       │
  HOT PLENUM → cross-vessel duct → turbine inlet
```

## Core Heat Transfer

### The 4 MPa Challenge

At 4 MPa (vs. 7 MPa), helium density is lower by a factor of 4/7 = 0.57. For the same mass flux G = ṁ/A through a given channel cross-section, the velocity is higher and the Reynolds number (Re = GD/μ) is unchanged — meaning the Nusselt number and heat transfer coefficient are the same. However:

**Pressure drop per unit length** scales as:
```
  ΔP/L ∝ f × G² / (2ρD)
```

At the same mass flux and channel geometry, lower density → **1.75× higher pressure drop** than at 7 MPa. This is the thermal-hydraulic cost of the lower operating pressure. For a given pumping power budget, we must either:
1. Accept larger channel hydraulic diameter (lower velocity, lower ΔP), or
2. Use a geometry with intrinsically better Nusselt/friction performance

The TPMS approach addresses this directly. It is not cosmetic — it is the mechanism that makes 4 MPa operation thermally and hydraulically viable within the 20 m envelope.

### TPMS Gyroid Heat Transfer

Published experimental and computational data on gyroid TPMS channels in turbulent flow (Re = 10,000–100,000) consistently show:

- **Nusselt number 20–40% higher** than a circular tube at the same Reynolds number
- **Colburn j-factor / friction factor ratio (j/f) 15–30% better** than circular tubes — meaning more heat transfer per unit pumping power

The physical mechanism: the gyroid surface continuously redirects the flow, disrupting boundary layer development and promoting mixing without the sharp direction changes (and associated pressure losses) of conventional fin or baffle geometries.

**The net effect at 4 MPa:** the TPMS geometry recovers the pressure-drop penalty of lower density, and delivers better heat transfer per unit core volume than conventional circular channels would at 7 MPa. The 4 MPa + TPMS combination is thermally superior to 7 MPa + circular channels.

### Channel Sizing

For the gyroid TPMS in our fuel block:

| Parameter | Target | Notes |
|---|---|---|
| TPMS unit cell size L | 15–20 mm | Sets hydraulic scale; must fit ≥ 3 TRISO diameters across solid walls |
| Hydraulic diameter D_h | ~6–8 mm | Approximately 0.4L for gyroid at 50% void fraction |
| Void fraction (helium domain) | ~50% | Balanced against fuel loading requirement |
| Reynolds number at design flow | ~30,000–80,000 | Turbulent; Dittus-Boelter / TPMS correlation applies |
| Core pressure drop (target) | < 0.15 MPa | < 4% of circuit pressure; minimises pumping loss |

The unit cell size of 15–20 mm is set by the TRISO particle size constraint from §02: minimum solid wall thickness must accommodate at least 3 particle diameters (~3 mm) with adequate graphite coverage around each particle. A unit cell of 15 mm gives wall thickness ~7.5 mm — comfortable margin.

Detailed channel sizing requires the full conjugate CFD optimisation described in §03, informed by the neutronics power distribution from §04.

## Peak Fuel Temperature Analysis

The temperature rise from bulk helium to peak fuel temperature involves a chain of thermal resistances:

```
  Bulk He  →  [film resistance]  →  Graphite surface
           →  [TPMS wall conduction]  →  Fuel compact interface
           →  [Matrix graphite]  →  TRISO OPyC surface
           →  [Coating layers]  →  UO₂ kernel surface
           →  [Kernel internal]  →  Kernel centre (peak temperature)
```

### Temperature Budget at Peak Power Location

At the axial and radial hot spot (core mid-plane, outer face of fuel annulus), with local power peaking factor ~1.5:

| Thermal resistance | ΔT estimate | Basis |
|---|---|---|
| Bulk helium at hot spot | 910 °C | Helium outlet 950°C, hot spot near outlet |
| Helium film (TPMS surface to bulk) | ~80 °C | From TPMS Nu correlation at design Re |
| TPMS graphite wall to compact surface | ~60 °C | k_graphite ~15 W/(m·K), wall thickness ~7 mm |
| Matrix graphite (compact) | ~60 °C | k_matrix ~10 W/(m·K), path to nearest TRISO |
| TRISO coatings (OPyC + SiC + IPyC) | ~20 °C | Thin layers, reasonable conductivity |
| Buffer + UO₂ kernel | ~110 °C | Buffer is porous PyC, lower conductivity |
| **Total — peak fuel temperature** | **~1,240 °C** | Sum of above |

**Margin to TRISO failure limit: 1600 − 1,240 = 360 °C**

This is a substantial margin. The design target is to keep peak fuel temperature below **1,200 °C** in normal operation — achievable with optimised TPMS geometry reducing the film and wall ΔT terms. The 360°C residual margin provides confidence for the accident analysis.

Note: these are first-principles estimates. The full conjugate CFD calculation will refine each term, particularly the TPMS film resistance which is geometry-dependent.

### Effect of TPMS Optimisation

Reducing the helium film ΔT from ~80°C to ~50°C (achievable with better TPMS geometry) reduces peak fuel temperature by 30°C. Reducing graphite wall thickness (finer TPMS unit cell) reduces the wall conduction ΔT. Both improvements are within reach of the computational optimisation programme, pushing the normal-operation peak below 1,200°C with margin.

## Depressurised Loss of Forced Cooling (DLOFC)

The DLOFC is the worst credible accident scenario: primary pressure drops to atmospheric (full helium blowdown) and forced circulation stops simultaneously. All decay heat removal is by passive RCCS only.

### Decay Heat Profile

| Time after shutdown | Decay heat (100 MW(th) core) |
|---|---|
| 0 s (immediate) | ~6.5 MW (6.5%) |
| 1 hour | ~1.8 MW |
| 8 hours | ~0.9 MW |
| 24 hours | ~0.6 MW |
| 1 week | ~0.25 MW |

### Graphite as Thermal Buffer

The core graphite mass is approximately **150–250 tonnes** (fuel blocks + reflector blocks). At a specific heat of ~1,800 J/(kg·K) at operating temperature, the thermal capacitance is:

```
  C = 200,000 kg × 1,800 J/(kg·K) = 3.6 × 10⁸ J/°C
```

To raise this mass by 100 °C requires 3.6 × 10¹⁰ J = 36 GJ. At the initial decay heat rate of 6.5 MW, the time to heat the graphite mass by 100 °C is:

```
  t = 36 × 10⁹ / 6.5 × 10⁶ = ~5,500 s ≈ 1.5 hours
```

The graphite mass buys **hours of time** before temperatures rise significantly. By the time the core has heated by 200–300°C, the decay heat has dropped to ~1–2 MW — well within the passive RCCS removal capacity.

### RCCS Heat Removal in DLOFC

The passive RCCS removes heat by three mechanisms operating simultaneously:

1. **Thermal radiation** from reactor vessel outer surface to cavity liner:
   ```
   Q_rad = σ × ε_eff × A_vessel × (T_vessel⁴ − T_liner⁴)
   ```
   With vessel outer wall at ~500°C (773K) and liner at ~200°C (473K), emissivity 0.85:
   Q_rad ≈ 5.67×10⁻⁸ × 0.85 × A × (773⁴ − 473⁴) ≈ 12,000 × A W/m²
   For a vessel outer surface area of ~200 m²: Q_rad ≈ 2.4 MW

2. **Natural convection** in the RCCS air annulus — rises with temperature difference and chimney height (20 m effective chimney, see §07 and §11)

3. **Conduction** through the vessel wall — limited by graphite thermal resistance

The combination is sufficient to limit peak fuel temperature below 1,600°C. Quantitative confirmation requires a transient thermal-hydraulic simulation (RELAP5, THERMIX, or equivalent). The HTTR has demonstrated this experimentally: DLOFC tests confirmed no TRISO failures with the passive cooling system operating.

### Walk-Away Safety Confirmation

The walk-away safety case rests on three physical facts:

1. **Large graphite thermal mass** — slows temperature rise to hours, not seconds
2. **Strongly negative Doppler coefficient** — reactor shuts down immediately on temperature rise; no additional neutron power after scram
3. **RCCS removes long-term decay heat** — steady-state temperatures reach a plateau well below TRISO failure limit

No active systems, no operator action, no external power, no cooling water are required at any point. This is the architecture the annular geometry and the passive RCCS were specifically designed to deliver.

## Pumping Power and Cycle Efficiency

The helium circulator (compressor in the Brayton cycle) must overcome:
- Core pressure drop: target < 0.15 MPa
- Cross-vessel duct losses: ~0.02 MPa
- Recuperator pressure drop: ~0.05 MPa (each side)
- Precooler pressure drop: ~0.03 MPa

Total circuit pressure drop (excluding turbomachine): ~0.30 MPa
This represents ~7.5% of the 4 MPa circuit pressure — acceptable but should be minimised. Each 0.01 MPa of unnecessary pressure drop reduces net electrical output slightly.

The TPMS channel optimisation (§03) specifically targets minimising pressure drop while maximising heat transfer — this is the j/f ratio optimisation that makes the 4 MPa design work.

## Air-Loop Test Programme

Before final channel geometry is committed to nuclear fabrication, the TPMS thermal-hydraulic performance is validated in an **air-flow test rig**:

1. Fabricate test graphite blocks (or non-nuclear surrogates) with candidate TPMS geometry
2. Instrument with thermocouples and pressure transducers
3. Run at air flow rates that match the helium Reynolds number at design conditions
4. Measure Nusselt number and friction factor vs. Re across operating range
5. Compare to CFD predictions; iterate geometry if needed
6. Validate conjugate heat transfer model against measurements

The rig operates at ambient pressure and temperature — no nuclear material, no helium. It is a low-cost, high-iteration development tool that can be run many times with different TPMS geometries before the optimal is selected for qualification.

## Open Questions

- [ ] Full conjugate CFD of TPMS gyroid block — confirm Nu, f, peak fuel temperature
- [ ] DLOFC transient simulation — confirm peak fuel temperature below 1,600°C with time-accurate decay heat and RCCS model
- [ ] RCCS sizing calculation — confirm air-side natural draft sufficient at peak decay heat
- [ ] Core pressure drop optimisation — TPMS geometry iteration to meet < 0.15 MPa target
- [ ] Air-loop test programme — validate CFD model against physical measurements before nuclear qualification

---

*Previous: [04 · Neutronics](04-neutronics.md) | Next: [06 · Materials](06-materials.md)*
