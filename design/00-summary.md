# Design Summary

A single-page reference for all key numbers, decisions, and parameters. Every value here has a derivation in the linked section.

---

## What This Is

A **Very High Temperature Reactor (VHTR)** — helium-cooled, graphite-moderated, TRISO-fuelled — sized to fit inside a 20 m × 20 m × 20 m envelope, installed below grade, and connected directly to the grid. The same helium that cools the core drives the turbine. No intermediate heat exchanger; no secondary loop; no cooling water.

---

## Key Numbers at a Glance

### Power and Efficiency

| Parameter | FOAK (850 °C) | Target (950 °C) | Source |
|---|---|---|---|
| Thermal power | ~100–150 MW(th) | ~100–150 MW(th) | [§03](03-core.md) |
| Net electrical output | ~43–65 MW(e) | ~47–70 MW(e) | [§08](08-power-conversion.md) |
| Cycle efficiency (Brayton) | ~43% | ~47% | [§08](08-power-conversion.md) |
| Hydrogen output (full H₂ mode, at ~130 MW(th)) | ~35,000 kg/day | ~38,000 kg/day | [§09](09-hydrogen.md) |

### Temperatures

| Location | FOAK (850 °C) | Target (950 °C) | Source |
|---|---|---|---|
| Compressor inlet (precooler outlet) | 35 °C | 35 °C | [§05](05-thermal-hydraulics.md) |
| Compressor outlet (recuperator cold inlet) | ~190 °C | ~195 °C | [§05](05-thermal-hydraulics.md) |
| Core inlet (recuperator cold outlet) | ~520 °C | ~580 °C | [§05](05-thermal-hydraulics.md) |
| Core outlet / turbine inlet | 850 °C | 950 °C | [§01](01-overview.md) |
| Turbine outlet (recuperator hot inlet) | ~540 °C | ~600 °C | [§05](05-thermal-hydraulics.md) |
| Recuperator hot outlet (precooler inlet) | ~210 °C | ~215 °C | [§05](05-thermal-hydraulics.md) |
| **Core temperature rise (ΔT)** | **330 °C** | **370 °C** | [§05](05-thermal-hydraulics.md) |
| Peak fuel temperature (normal operation) | ~1,140 °C | ~1,240 °C | [§05](05-thermal-hydraulics.md) |
| TRISO failure limit | 1,600 °C | 1,600 °C | [§02](02-fuel.md) |
| Temperature margin (normal operation) | 460 °C | 360 °C | [§05](05-thermal-hydraulics.md) |

### Flow Circuit

| Parameter | Value | Source |
|---|---|---|
| Primary pressure | 4 MPa | [§01](01-overview.md) |
| Pressure ratio | 2.5 | [§08](08-power-conversion.md) |
| Mass flow rate (100 MW(th)) | ~52 kg/s (target) / ~58 kg/s (FOAK) | [§05](05-thermal-hydraulics.md) |
| Mass flow rate (150 MW(th)) | ~78 kg/s (target) / ~87 kg/s (FOAK) | [§05](05-thermal-hydraulics.md) |
| Core pressure drop (target) | < 0.15 MPa | [§05](05-thermal-hydraulics.md) |
| Total circuit pressure drop | ~0.30 MPa | [§05](05-thermal-hydraulics.md) |
| Helium density at core inlet (4 MPa, 580 °C) | ~2.3 kg/m³ | [§05](05-thermal-hydraulics.md) |
| Helium density at core outlet (4 MPa, 950 °C) | ~1.6 kg/m³ | [§05](05-thermal-hydraulics.md) |

### Turbomachine Performance Targets

| Parameter | Value | Source |
|---|---|---|
| Turbine isentropic efficiency | 0.90 | [§08](08-power-conversion.md) |
| Compressor isentropic efficiency | 0.88 | [§08](08-power-conversion.md) |
| Recuperator effectiveness | 0.95 | [§08](08-power-conversion.md) |

---

## Fuel

### TRISO Particle

| Layer | Material | Thickness | Cumulative OD |
|---|---|---|---|
| Kernel | UO₂ | 500 μm diameter | 500 μm |
| Buffer | Porous PyC | 100 μm | 700 μm |
| IPyC | Dense PyC | 40 μm | 780 μm |
| SiC | β-SiC (CVD) | 35 μm | 850 μm |
| OPyC | Dense PyC | 40 μm | **930 μm** |

| Parameter | Value |
|---|---|
| Enrichment | 4.8% ²³⁵U |
| Particles per compact | ~5,000 |
| U-235 per compact | ~0.14 g |
| Total uranium per compact | ~3.0 g |

### Fuel Compact

| Parameter | Value |
|---|---|
| Diameter | 12.5 mm |
| Length | 49 mm |
| TRISO packing fraction | 35% by volume |
| Matrix material | IG-110 nuclear-grade graphite |

### Fuel Block

| Parameter | Value |
|---|---|
| Shape | Hexagonal prism |
| Height | ~793 mm |
| Width across flats | ~360 mm |
| Coolant channel geometry | TPMS gyroid |
| TPMS unit cell size | 15–20 mm |
| Coolant void fraction | ~50% |
| Hydraulic diameter | ~6–8 mm |
| Channel Reynolds number | ~30,000–80,000 |

### Fuel Cycle

| Parameter | Value |
|---|---|
| Enrichment limit | < 5% ²³⁵U (LEU) |
| Target discharge burnup | 80–100 GWd/tHM |
| Refueling interval | 12 months |
| Batch management | 6–10 batches |
| Cycle length (per batch in core) | 6–10 years |

---

## Core

| Parameter | Value | Source |
|---|---|---|
| Geometry | Annular prismatic | [§03](03-core.md) |
| Inner reflector radius | 0.8 m | [§03](03-core.md) |
| Fuel annulus thickness | 1.0 m | [§03](03-core.md) |
| Outer fuel radius | 1.8 m | [§03](03-core.md) |
| Outer reflector thickness | 0.5 m | [§03](03-core.md) |
| Core outer radius (incl. reflectors) | 2.3 m | [§03](03-core.md) |
| Reactor vessel OD | ~5.5 m | [§03](03-core.md) |
| Fuel annulus cross-section | ~8.2 m² | [§03](03-core.md) |
| Active height (100 MW(th)) | ~3.0 m | [§03](03-core.md) |
| Active height (150 MW(th)) | ~4.6 m | [§03](03-core.md) |
| Graphite mass (core + reflector) | ~150–250 tonnes | [§05](05-thermal-hydraulics.md) |
| Power density (fuel annulus) | ~4 MW(th)/m³ | [§03](03-core.md) |
| Core C/U ratio (core-average) | ~180–250 | [§04](04-neutronics.md) |
| Helium flow direction | Top-down | [§05](05-thermal-hydraulics.md) |

---

## Neutronics

| Parameter | Value | Source |
|---|---|---|
| Neutron spectrum | Thermal / epithermal | [§04](04-neutronics.md) |
| k-effective target (BOL, fresh) | ≥ 1.05 | [§04](04-neutronics.md) |
| Doppler coefficient | −2 to −5 × 10⁻⁵ Δk/k per °C | [§04](04-neutronics.md) |
| Helium void coefficient | ≈ 0 | [§04](04-neutronics.md) |
| BOC/EOC reactivity swing | ~3–6% Δk/k | [§04](04-neutronics.md) |
| Xenon equilibrium worth | ~3–5% Δk/k | [§04](04-neutronics.md) |
| Radial peaking factor (target) | < 1.3 | [§04](04-neutronics.md) |
| Axial peaking factor | ~1.2–1.4 | [§04](04-neutronics.md) |
| Combined peak-to-average (target) | < 1.6 | [§04](04-neutronics.md) |

---

## Passive Safety

| Parameter | Value | Source |
|---|---|---|
| Safety criterion | Peak fuel T < 1,600 °C, no operator action | [§07](07-safety.md) |
| Mechanism 1 | Doppler coefficient → immediate shutdown on temperature rise | [§04](04-neutronics.md) |
| Mechanism 2 | Graphite thermal mass → hours of buffering time | [§05](05-thermal-hydraulics.md) |
| Mechanism 3 | Air-cooled RCCS → removes long-term decay heat passively | [§07](07-safety.md) |
| RCCS type | Passive natural convection, air-cooled | [§07](07-safety.md) |
| Effective chimney height | ~20 m (below-grade installation) | [§11](11-siting.md) |
| Decay heat at shutdown (t = 0) | 6.5 MW (6.5% of rated) | [§05](05-thermal-hydraulics.md) |
| Decay heat at t = 1 hour | ~1.8 MW | [§05](05-thermal-hydraulics.md) |
| Decay heat at t = 24 hours | ~0.6 MW | [§05](05-thermal-hydraulics.md) |
| Graphite thermal capacitance | ~3.6 × 10⁸ J/°C | [§05](05-thermal-hydraulics.md) |
| Time to heat graphite mass 100 °C (initial decay heat) | ~1.5 hours | [§05](05-thermal-hydraulics.md) |

---

## Materials Summary

| Component | Material | Rationale |
|---|---|---|
| Moderator / reflector | IG-110 nuclear graphite, Li < 0.1 ppm | Low neutron absorption; low tritium generation |
| TRISO SiC layer | β-SiC, CVD deposited, 35 μm | Primary fission product barrier; 1600 °C rated |
| Turbine rotor (FOAK) | Ni superalloy (IN-738 / CM-247) | Proven at 850 °C; off-the-shelf supply chain |
| Turbine rotor (target) | Full ceramic blisk, SiC/SiC CMC | No blade cooling required at 950 °C inlet; additive manufacture |
| Vessel | High-temperature ferritic / austenitic steel | Standard nuclear vessel code |
| Recuperator (FOAK) | PCHE, 316H stainless steel | Hot side ~540 °C; lower cost |
| Recuperator (target) | PCHE, Alloy 617 or equivalent | Hot side ~600 °C; compact, high-effectiveness |

---

## Physical Envelope

| Parameter | Value | Source |
|---|---|---|
| Total envelope | 20 m × 20 m × 20 m | [§01](01-overview.md) |
| Below-grade depth | ~12 m | [§11](11-siting.md) |
| Above-grade height | ~8 m | [§11](11-siting.md) |
| Reactor vessel OD | ~5.5 m | [§03](03-core.md) |
| Turbomachine vessel OD | ~2.5 m | [§08](08-power-conversion.md) |
| Site water supply required | None | [§11](11-siting.md) |

---

## Design Decisions (Summary)

| Topic | Decision | Rationale |
|---|---|---|
| Coolant | Helium, direct Brayton | Inert, single-phase, no IHX needed |
| Primary pressure | 4 MPa | Thinner vessel, lower tritium permeation vs 7 MPa |
| Core geometry | Annular prismatic | Passive safety — decay heat path to RCCS always open |
| Coolant channel geometry | TPMS gyroid | 20–40% higher Nu; recovers 4 MPa pressure drop penalty |
| Fuel form | TRISO in graphite | 1600 °C rated; robust waste form |
| Fuel enrichment | LEU < 5% U-235 | Non-proliferation; standard supply chain |
| Turbine rotor | Phased: Ni superalloy FOAK / ceramic blisk target | De-risk with proven 850 °C turbine; upgrade to 950 °C CMC blisk |
| Fuel management | 6–10 batch, 12-month cycle | High burnup with annual site visits |
| Precooler | Air-cooled | No water dependency; works anywhere |
| RCCS | Air-cooled passive | No water; below-grade chimney; walk-away safe |
| Installation | Below-grade, modular pre-cast cavity | RCCS chimney height; seismic; security; factory segments |
| Hydrogen | HTE/SOEC electrical secondary | Nuclear island unchanged; S-I rejected (requires IHX) |
| Graphite specification | Li < 0.1 ppm | Tritium source term reduction ~5× |

---

## Economics Headline

| Metric | FOAK 850 °C | FOAK 950 °C | NOAK | Mature Fleet |
|---|---|---|---|---|
| Capital cost | ~$326M | ~$349M | ~$218M | ~$180M |
| $/kW(e) | ~5,900 | ~5,800 | ~3,600 | ~3,000 |
| LCOE ($/MWh) | ~88 | ~85 | ~56 | ~42 |

The 850 °C FOAK has similar $/kW(e) to the 950 °C FOAK despite lower output — the turbine and recuperator savings roughly offset the output penalty. The real advantage is risk: the metallic turbine is off-the-shelf, and total capital is $23M less. Full analysis in [§12 · Economics](12-economics.md).

---

*[README](../README.md) · [01 · Overview](01-overview.md) · [02 · Fuel](02-fuel.md) · [03 · Core](03-core.md) · [04 · Neutronics](04-neutronics.md) · [05 · Thermal-Hydraulics](05-thermal-hydraulics.md) · [06 · Materials](06-materials.md) · [07 · Safety](07-safety.md) · [08 · Power Conversion](08-power-conversion.md) · [09 · Hydrogen](09-hydrogen.md) · [10 · Fuel Cycle](10-fuel-cycle.md) · [11 · Siting](11-siting.md) · [12 · Economics](12-economics.md)*
