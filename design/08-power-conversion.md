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

## Turbine Blade Materials

### Why Not Nickel Superalloys

At 950 °C turbine inlet, blade metal temperatures approach 900–930 °C. Nickel superalloys are at their absolute limit here, and the standard mitigation — internal film cooling — is not available because the working fluid *is* helium. There is no separate cooling stream to bleed through blade passages. Creep life at sustained 930 °C with no cooling margin is the fundamental objection to Ni alloys in this application.

### Selected Material: SiC/SiC Ceramic Matrix Composite (CMC)

SiC fibers in a SiC matrix, typically manufactured by chemical vapor infiltration (CVI) of the SiC matrix around woven SiC fiber preforms.

**Why CMC is a stronger choice here than in air-breathing turbines:**

In jet engines, SiC/SiC faces a serious degradation mechanism: water vapor in the combustion gas reacts with SiO₂ (the native oxide on SiC surfaces) to form volatile Si(OH)₄, causing progressive material recession. Environmental barrier coatings (EBCs) are required to protect CMC hardware in aircraft engines.

In pure helium, this mechanism does not exist. There is no water vapor, no oxygen, no sulfur. The degradation modes that make CMC challenging in air — oxidation, hot corrosion, EBC spallation — are simply absent. The material can operate at its intrinsic temperature and creep limits without protective coatings.

**Relevant properties of SiC/SiC:**

| Property | SiC/SiC CMC | Ni superalloy (CMSX-4) |
|---|---|---|
| Max service temperature | ~1350 °C | ~950 °C (uncooled) |
| Density | ~2.7 g/cm³ | ~8.9 g/cm³ |
| Creep rate at 950 °C | Negligible | Significant — limiting factor |
| Oxidation in He | None | None |
| Fracture toughness | ~15–25 MPa√m | ~80+ MPa√m |

The density advantage is significant: CMC blades are ~70% lighter than equivalent Ni blades, reducing centrifugal stress on the rotor disk and enabling higher tip speeds if needed.

**The TRISO connection:**

SiC is already the pressure-retaining fission product barrier in TRISO fuel particles. This design uses the same material class as both the fuel's pressure vessel and the turbine blades. The high-temperature nuclear behavior of SiC is therefore already central to the design's safety case, and the material knowledge base applies across both applications.

### The Root Attachment Problem

The primary engineering challenge for CMC blades is not temperature — it is the blade root, where the blade attaches to the rotor disk.

Conventional fir-tree root profiles create stress concentrations that brittle ceramics handle poorly. Several approaches are under development:

1. **Compliant metal root insert:** A metallic (e.g. Ni alloy) shim bonded or mechanically interlocked to the CMC blade shank, transferring load gradually. The root metal runs cooler than the airfoil so Ni alloy is acceptable there.
2. **Pin-loaded composite root:** Load transferred through ceramic pins through holes in a thickened CMC root tab — distributes load more uniformly.
3. **Integral ceramic disk:** If rotor disk and blades are co-manufactured as a ceramic blisk, the attachment problem is eliminated. Manufacturing complexity shifts to the blisk fabrication.

This is an open engineering problem. It is the primary risk item for the turbine design and warrants dedicated development effort.

### No Thermal Barrier Coating Required

TBCs (typically yttria-stabilized zirconia in gas turbines) serve two purposes: thermal insulation and oxidation protection. In helium service, neither is needed. The CMC surface is the functional surface. This simplifies blade manufacturing and eliminates a spallation failure mode.

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
- [x] **Blade material: SiC/SiC CMC** — selected; root attachment method is the key development item
- [ ] Root attachment approach: compliant metal insert, pin-loaded tab, or ceramic blisk?
- [ ] Magnetic bearing design and redundancy for safety case
- [ ] Precooler design: air-cooled or water-cooled? (affects siting flexibility)
- [ ] Partial-load control strategy: bypass valve, variable speed, or inventory control?

---

*Previous: [07 · Safety](07-safety.md) | Next: [09 · Hydrogen Production](09-hydrogen.md)*
