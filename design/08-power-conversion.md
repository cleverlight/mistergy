# 08 · Power Conversion

## Architecture: Direct Brayton Cycle

The same helium that cools the reactor core flows directly through the turbomachine. There is no intermediate heat exchanger and no secondary working fluid. This is the defining simplicity decision of the design.

```
  REACTOR CORE
  [950 °C outlet]
        │
        ▼
   TURBINE  ──────────────── shaft ──── GENERATOR
        │
        ▼
   RECUPERATOR (hot side)
        │
        ▼
   PRECOOLER (reject heat to environment)
        │
        ▼
   COMPRESSOR ──────────────  (same shaft)
        │
        ▼
   RECUPERATOR (cold side — helium preheated before returning to core)
        │
        ▼
  REACTOR CORE
  [~490 °C inlet]
```

The recuperator is essential: it transfers heat from the turbine exhaust back into the helium stream returning to the core, dramatically improving cycle efficiency without adding a second fluid.

## Key Cycle Parameters (Preliminary)

| Parameter | Value | Notes |
|---|---|---|
| Turbine inlet temperature | ~950 °C | Matches core outlet |
| Compressor inlet temperature | ~30 °C | After precooler |
| Primary pressure (high side) | ~7 MPa | |
| Pressure ratio | ~2.5 | Optimal for He at this temperature ratio |
| Recuperator effectiveness | ~95% | Target |
| Net cycle efficiency | ~47–50% | vs. ~33% for LWR steam Rankine |
| Working fluid | Helium (same as primary coolant) | γ = 1.667, Cp = 5.19 kJ/kg·K |

Helium's high γ (1.667 vs 1.4 for air) makes it thermodynamically favorable for Brayton cycles. A pressure ratio of only ~2.5 achieves efficiencies that would require much higher ratios in air or CO₂.

## Turbomachine Design

### Single-Shaft Layout

All rotating components — turbine, compressor, and generator — sit on a single vertical shaft. This eliminates gearboxes and shaft couplings, consistent with the simplicity goal. The GT-MHR program validated this configuration at the design level.

```
   ┌─────────────┐
   │   TURBINE   │  ← hot end, top
   ├─────────────┤
   │  GENERATOR  │
   ├─────────────┤
   │  COMPRESSOR │  ← cold end, bottom
   └─────────────┘
```

Magnetic bearings are preferred over oil-lubricated bearings to avoid helium contamination.

### Shaft Speed

Helium's low molecular weight (4 g/mol) means low enthalpy drop per turbine stage. To achieve the required pressure ratio without an impractical number of stages, the shaft runs at high speed — likely 3,000–6,000 RPM for this power class. A frequency converter decouples shaft speed from grid frequency (50/60 Hz), avoiding a gearbox.

### Number of Stages

Preliminary estimate: 4–6 turbine stages and 4–6 compressor stages. Exact count depends on final pressure ratio and allowable tip speed, which are set by blade material limits.

## Turbine Blade Materials — The Key Challenge

At 950 °C turbine inlet, metal blade temperatures will approach 900–930 °C. This is beyond the comfortable operating range of conventional nickel superalloys, and internal film cooling — standard practice in gas turbines — cannot be used here because there is no separate coolant stream (the working fluid *is* helium).

### Candidate Materials

| Material | Max use temp | Advantage | Risk |
|---|---|---|---|
| Single-crystal Ni superalloy (e.g. CMSX-4) | ~950 °C | Mature industrial technology, high strength | At the very limit; creep life uncertain at sustained 930 °C |
| ODS (oxide dispersion strengthened) alloys | ~1100 °C | Superior creep strength at high T | Difficult to manufacture in complex blade shapes |
| SiC/SiC ceramic matrix composite (CMC) | ~1400 °C | No creep concern; used in jet engines | Brittle, attachment/root design challenges; newer technology |

The absence of oxygen in pure helium is a significant advantage: oxidation and hot corrosion — major blade degradation mechanisms in air-breathing turbines — do not occur. The dominant failure mode is **creep** under sustained load, which pure temperature and stress govern.

### Design Approach

Design for creep life at the blade root (highest stress point) as the primary structural constraint. The blade tip section runs hotter but at lower stress. Thermal barrier coatings (TBCs) are not needed in helium service.

## Radioactivity of the Helium Circuit

With direct Brayton, the turbomachine is inside the primary helium circuit and will be mildly activated:

- **¹⁶N** (t½ = 7.1 s, high-energy γ): produced from trace oxygen/moisture impurities. Controlled by helium purity.
- **⁴¹Ar** (t½ = 1.83 hr, β/γ): from trace ⁴⁰Ar impurity in the helium supply. Managed by helium specification.

Biological shielding is required around the turbomachine during operation. Maintenance access requires a shutdown and short hold time for ¹⁶N decay (essentially immediate) and Ar-41 (hours). This is a manageable operational constraint, not a fundamental barrier.

## What This Architecture Eliminates

Compared to an indirect cycle with an IHX:

- ❌ Intermediate heat exchanger (most challenging high-T component)
- ❌ Secondary working fluid loop and all associated piping
- ❌ Secondary circulators / pumps
- ❌ Secondary loop chemistry and inventory management
- ❌ IHX tube failure as a loss-of-coolant pathway

## Open Questions

- [ ] Final pressure ratio and number of stages (requires thermodynamic optimization)
- [ ] Blade material selection: single-crystal Ni vs. CMC — cost and manufacturing readiness
- [ ] Magnetic bearing design and redundancy for safety case
- [ ] Precooler design: air-cooled or water-cooled? (affects siting flexibility)
- [ ] Partial-load control strategy: bypass valve, variable speed, or inventory control?

---

*Previous: [07 · Safety](07-safety.md) | Next: [09 · Hydrogen Production](09-hydrogen.md)*
