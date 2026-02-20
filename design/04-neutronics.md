# 04 · Neutronics

## Governing Physics

This is a **thermal/epithermal neutron spectrum reactor**. Fast fission neutrons (~2 MeV) from U-235 and Pu-239 fission are thermalised by elastic scattering in the graphite moderator. Thermalised neutrons (~0.025 eV) are far more likely to cause fission in U-235 than to be captured by U-238, sustaining the chain reaction.

The neutron life cycle in one generation:

```
  Fission → fast neutrons
       │ thermalisation in graphite (hundreds of scatters)
       ▼
  Thermal/epithermal neutrons
       │
       ├── Fission in U-235, Pu-239          → sustains reaction (desired)
       ├── Capture in U-238                  → produces Pu-239 (useful)
       ├── Capture in fission products       → parasitic loss (unavoidable)
       ├── Capture in graphite (C-12)        → very low; why graphite is chosen
       └── Leakage from core                → controlled by reflector
```

The graphite reflector (inner and outer) reflects leaking neutrons back into the fuel region, substantially improving neutron economy relative to a bare core.

## The C/U Ratio: Critical Design Parameter

The **carbon-to-uranium atomic ratio** (C/U) is the single most important neutronics parameter for a graphite-moderated reactor. It sets the neutron spectrum, the achievable k-effective, and the safety coefficients.

- **Too low (undermoderated):** insufficient thermalisation → harder spectrum → lower fission probability → reduced k-effective
- **Too high (overmoderated):** too many neutrons absorbed in graphite → reduced k-effective
- **Optimum:** ~200–400 C atoms per U atom for graphite-moderated thermal systems

### LEU Implication

HALEU designs (19.9% enrichment) typically achieve C/U ≈ 250–300 and sit near the thermal optimum. Our LEU design at 4.8% enrichment contains ~4× more total uranium per unit fissile material — which at the same TRISO packing fraction gives a much lower C/U ratio.

**Estimated C/U for our fuel block geometry:**

| Region | Estimate | Basis |
|---|---|---|
| Within fuel compact alone | ~15–20 | Matrix graphite vs. TRISO uranium |
| Fuel block (compacts + graphite land + coolant channels) | ~100–150 | Block geometry estimate |
| Fuel block + inter-block graphite + reflector contribution | ~180–250 | Core-average, reflector-augmented |

The core-average C/U of ~180–250 puts this design in the **thermal-to-epithermal boundary** — harder spectrum than a deeply thermal HALEU HTGR, but well within the operating envelope of demonstrated LEU HTGR designs. The HTTR operates successfully in this regime at LEU enrichments of 2–10%.

**Key consequence: the fuel block geometry must be tuned.** Packing fraction and compact-to-graphite ratio within the block need to be optimised to land in the right C/U range. This is the primary task of the lattice neutronics calculation. If the C/U is too low (undermoderated), reducing packing fraction or increasing graphite land width brings it into range. The TPMS geometry, by changing the ratio of solid graphite to coolant void, is a direct handle on this parameter.

## Reactivity Coefficients

### Doppler Coefficient (Fuel Temperature Coefficient)

**Strongly negative. This is the primary passive safety mechanism.**

As fuel temperature rises, the U-238 neutron absorption resonances broaden (Doppler broadening). More neutrons are captured parasitically in U-238, reducing the fission rate and decreasing reactivity. This effect acts immediately as fuel temperature changes — no time delay, no moving parts.

For our somewhat undermoderated LEU core, the harder epithermal spectrum means more neutrons are in the resonance energy range where Doppler broadening has maximum effect. **The Doppler coefficient is likely stronger (more negative) than in a HALEU HTGR** — an inherent safety benefit of the LEU design choice.

Typical range for HTGR designs: −2 to −5 × 10⁻⁵ Δk/k per °C.

### Moderator Temperature Coefficient

**Small and slightly positive for graphite at operating temperatures.** As graphite heats up, the average thermal neutron energy shifts slightly higher (hardening), reducing parasitic capture in graphite and marginally increasing fission probability. This effect is small compared to Doppler.

The combined fuel + moderator temperature coefficient is **net negative**, dominated by Doppler. This is the fundamental basis for walk-away safety — the reactor self-limits on temperature rise without any active intervention.

### Helium Void Coefficient

**Essentially zero. This is a major advantage over every other coolant option.**

Helium at 4 MPa contributes negligibly to neutron moderation (low atomic mass, but very low density and essentially zero neutron absorption cross-section). Loss of helium coolant — whether by depressurisation or loss of flow — produces essentially no reactivity change from the void effect alone.

Compare:
- Water-cooled reactors: loss of water moderator inserts large negative reactivity (generally good) but loss of water coolant at the same time is the LOCA scenario
- Sodium-cooled fast reactors: positive sodium void coefficient is a fundamental safety concern
- **This design: helium void coefficient ≈ 0** — neither a safety benefit nor a hazard; the safety case does not depend on it

The dominant response to loss of cooling is temperature rise → Doppler feedback → reactor self-shuts down. The helium serves only as the heat transfer medium; the neutron physics is independent of whether it's present.

### Contrast with Historic Graphite-Moderated Reactors

This design shares graphite moderation with a class of historic reactors — most notoriously the Soviet **RBMK**, the reactor type involved in the 1986 Chernobyl accident. The comparison is instructive because the RBMK also had graphite as its moderator, yet had a strongly *positive* void coefficient. Understanding why reveals why this design architecture is fundamentally different.

**Why the RBMK had a positive void coefficient:**

In the RBMK, graphite was the moderator and water was the coolant. These were physically separate roles. At operating conditions the water was partially boiling, and crucially, the water acted as a *neutron absorber* — it captured neutrons that the graphite had already thermalised. When coolant voids formed (more steam, less liquid water):

```
More steam → less neutron absorption by water → more neutrons available for fission
           → positive reactivity insertion → more heat → more steam → runaway
```

The graphite continued moderating throughout; losing the water only removed its absorbing function. The result was a positive feedback loop — the reactor accelerated when it should have shut down.

**Why this cannot happen here:**

Helium plays no absorbing or moderating role in this reactor. At 4 MPa and operating temperature, helium density is ~2.3 kg/m³; its thermal neutron absorption cross-section is ~0.007 barns. For comparison, water at PWR conditions has a cross-section of ~0.66 barns at roughly 300× higher density — roughly 28,000× more neutron absorption per unit volume.

Losing helium — whether by depressurisation, loss of flow, or complete blowdown — removes nothing meaningful from the neutron balance. The graphite moderates in the same way with or without helium present.

The actual response to loss of helium cooling is:

```
Coolant flow stops → fuel temperature rises → Doppler broadening of U-238 resonances
                  → negative reactivity → fission rate falls → reactor self-shuts down
```

This is the inverse of the RBMK sequence. The shutdown mechanism is *thermally driven and instantaneous*; it requires no active systems and no operator action. It cannot be defeated by the progression of the accident, because the hotter the fuel gets, the harder the reactor shuts down.

**The architectural lesson:**

The RBMK's positive void coefficient was a consequence of using a neutron-absorbing coolant in a graphite-moderated core. Any reactor where the coolant doubles as a neutron absorber or moderator will have a coupled void/reactivity response — potentially positive if the geometry is unfavourable. This design eliminates the coupling entirely: helium is neutronically inert, so the neutron physics and the thermal-hydraulic accident progression are decoupled. The safety case rests solely on the Doppler coefficient and the graphite thermal mass, both of which are negative feedbacks.

### Xenon and Samarium Poisoning

**Xe-135** (t½ = 9.2 hr) is produced both directly as a fission product (~0.3% yield) and from decay of I-135 (from Te-135 fission product chain, t½ = 6.6 hr). Xe-135 has an enormous thermal neutron absorption cross-section (~2.6 × 10⁶ barns). At full power, xenon builds to equilibrium in ~40–50 hours and represents a significant negative reactivity worth (~3–5% Δk/k for thermal reactors).

**Xenon peak (post-shutdown):** After shutdown, I-135 continues decaying to Xe-135 while Xe burnup stops. Xenon concentration peaks ~6–8 hours after shutdown, then decays away over ~2 days. This "xenon precluded" period means the reactor cannot restart for several hours after shutdown without sufficient excess reactivity. This is managed by the control rod design — sufficient worth must be available to overcome the xenon peak.

**Sm-149** builds to equilibrium more slowly (~100 hours) and represents a smaller reactivity worth (~0.6% Δk/k). Relevant for startup physics after extended shutdown.

## k-effective and Criticality

**Target: k-effective ≥ 1.05 at beginning-of-life (BOL), fresh core**, providing sufficient reactivity to:
- Overcome xenon equilibrium poisoning (~4% Δk/k)
- Accommodate burnup reactivity swing over the cycle (~3–6% Δk/k; see batch analysis below)
- Maintain shutdown margin with all rods inserted and maximum stuck rod

A full Monte Carlo calculation (OpenMC or Serpent 2) is required to confirm k-effective for our specific geometry. The calculation inputs are now fully defined:
- TRISO particle geometry: 500 μm kernel, standard coating stack (§02)
- Packing fraction: 35% (starting point; may be adjusted based on C/U result)
- Block geometry: hexagonal prism, compact and TPMS coolant arrangement (§03)
- Helium coolant at 4 MPa, 520–950 °C temperature range
- Graphite: IG-110 properties (density, scattering cross-sections)
- Annular core geometry with inner and outer reflectors (§03)

**Expected result based on heritage:** LEU HTGR designs in this enrichment range have been demonstrated critical at reasonable packing fractions. The HTTR at 2–10% LEU is the closest reference. No fundamental barrier to criticality is anticipated; the calculation confirms the specific geometry.

## Burnup and Reactivity Management

### Reactivity Swing Over Cycle

As fuel burns, U-235 is depleted and k-effective decreases. Partially compensated by Pu-239 buildup from U-238 capture — Pu-239 is also fissile and contributes to the chain reaction.

In a multi-batch core (the analysis below concludes 6–10 batches are required):
- Fresh batch: highest reactivity
- Middle batches: moderate reactivity
- Oldest batch (approaching discharge): lowest reactivity
- Net core reactivity relatively flat over the cycle compared to single-batch loading

**Estimated BOC/EOC reactivity swing:** 3–6% Δk/k — manageable with control rods and/or burnable poison if needed.

### Burnable Poison Option

If the beginning-of-cycle k-effective is too high for the control rod system to manage gracefully, a small amount of burnable poison (e.g. erbium oxide Er₂O₃ mixed into the graphite matrix) can be incorporated. Erbium absorbs neutrons at BOC, reducing excess reactivity; as it burns out, it compensates for fuel depletion. This is a routine tool in HTGR design and does not require additional components.

### Confirming the 12-Month Cycle

The 12-month cycle is a design requirement driven by the annual service visit model. Whether it is achievable with our fuel loading depends on:

1. Fissile inventory per batch (set by fuel loading and packing fraction)
2. Specific power (MW(th) per tonne heavy metal in the batch)
3. The discharge burnup target (80–100 GWd/tHM)

**Bounding estimate:**

If specific power in the fuel region is ~15–25 MW(th)/tHM (typical for LEU HTGR, lower than HALEU designs due to lower enrichment diluted over more uranium mass), then:

- Burnup added per year = specific power × 365 days
- At 20 MW(th)/tHM: 20 × 365 = 7,300 MWd/tHM ≈ 7.3 GWd/tHM per year
- With 3-batch management (batch stays in core 3 years): discharge burnup ≈ 21.9 GWd/tHM

This is below the 80–100 GWd/tHM target. To reach higher burnup, we need either higher specific power (fewer tonnes HM in the core) or more batches.

**The implication:** achieving 80–100 GWd/tHM with a 12-month cycle likely requires **6–10 batch management** rather than 3-batch. At 12 months per cycle and 10 batches, a fuel assembly spends 10 years in the core — reaching 73 GWd/tHM at 20 MW(th)/tHM specific power, or 80+ GWd/tHM at slightly higher specific power.

This is an important finding that needs the neutronics calculation to resolve. The number of batches trades against:
- Refueling complexity (more zones to manage at each outage)
- Spent fuel quantity (more batches = each discharge is smaller = more visits before accumulating a significant spent fuel volume)
- Burnup uniformity

**The 12-month visit model is not threatened** — each annual visit still refuels one batch. The number of active batches in the core is an internal design variable; it doesn't change the operational cadence.

## Power Distribution

### Radial Power Profile

In the annular core, neutron flux peaks in the fuel annulus and is lower in the reflectors. Radial power peaking factor (ratio of maximum to average power density in the fuel) depends on the fuel loading pattern and enrichment zoning.

With uniform enrichment (as specified), the radial power peaks at the inner and outer faces of the fuel annulus where neutron flux is augmented by the reflectors. A modest enrichment reduction at these faces (or burnable poison at the periphery) can flatten the radial profile — this is an optimisation for the detailed design phase.

### Axial Power Profile

In a bare cylindrical core, the axial flux follows a cosine shape, peaking at the mid-plane. In our design, the top and bottom reflectors perturb this slightly. The control rods (inserted from the top in normal operation) introduce an axial asymmetry that must be managed.

The **axially graded TPMS unit cell** (§03) — denser surface structure at the mid-plane where flux peaks, coarser at top and bottom — is directly informed by this axial power profile. The thermal-hydraulic design (§05) must match the cooling intensity to the local power generation rate.

### Peaking Factors

- **Radial peak-to-average:** target < 1.3 (achievable with mild enrichment zoning)
- **Axial peak-to-average:** ~1.2–1.4 (cosine profile, perturbed by control rods)
- **Combined peak-to-average:** target < 1.6 overall

These peaking factors multiply directly into peak fuel temperature. Keeping them low is key to maintaining temperature margin below the 1600 °C TRISO limit.

## Control Rod System

Control rods are located in the inner reflector (§03), keeping them out of the fuel annulus. This avoids local flux depression in the fuel and simplifies fuel block geometry.

**Required rod worth:**
- Xenon override at peak xenon: ~5% Δk/k
- Cold shutdown from hot full power: ~8–10% Δk/k (including temperature defect)
- Shutdown margin with maximum stuck rod: ≥ 1% Δk/k subcritical

Control rods use B₄C absorber sections on SiC composite spine assemblies (consistent with the design's materials strategy). B₄C is highly effective: thermal neutron capture cross-section ~760 barns for natural boron, ~3840 barns for B-10.

The **reserve shutdown system** (gravity-fed B₄C balls into the outer reflector) provides a diverse, passive backup with independent worth sufficient for cold shutdown on its own.

## Calculation Requirements

The following calculations are required to confirm the design:

| Calculation | Tool | Input | Output |
|---|---|---|---|
| Lattice k-infinity | Serpent 2 / OpenMC | TRISO cell geometry, enrichment, packing fraction | Optimal C/U ratio, confirm criticality |
| Full-core k-effective | OpenMC Monte Carlo | Core geometry, reflector, control rods | Confirm BOL/EOL k, shutdown margin |
| Burnup calculation | Serpent + ORIGEN | Fuel loading, specific power | Discharge burnup, Pu inventory, cycle length |
| Power distribution | Coupled neutronics | Core geometry, fuel zoning | Radial/axial peaking factors |
| Doppler coefficient | Parametric T sweep | Temperature-dependent cross-sections | Confirm negative coefficient, magnitude |
| Control rod worth | Rodded vs. unrodded comparison | Rod geometry, position | Confirm shutdown margin |

All calculations use established nuclear data libraries (ENDF/B-VIII.0 or JEFF-3.3) and are standard practice for HTGR design. No novel calculation methods are required.

## Open Questions

- [ ] Full Monte Carlo criticality calculation — confirm k-effective and optimal packing fraction
- [ ] Burnup calculation — confirm discharge burnup and required number of batches for 12-month cycle
- [ ] Optimal enrichment zoning (radial/axial) — uniform enrichment starting point, refine if peaking factors exceed targets
- [ ] Xenon worth calculation — confirm control rod system can override xenon peak at shutdown
- [ ] Doppler coefficient magnitude — confirm strongly negative; expected to be better than HALEU heritage

---

*Previous: [03 · Core Design](03-core.md) | Next: [05 · Thermal-Hydraulics](05-thermal-hydraulics.md)*
