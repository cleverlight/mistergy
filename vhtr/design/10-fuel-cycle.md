# 10 · Fuel Cycle

## Enrichment Decision: LEU (< 5% ²³⁵U)

This design uses **low-enriched uranium** — below the 5% threshold that can be handled by the existing global enrichment and fuel fabrication infrastructure. The rationale is explicit: if this reactor type is to become widespread, it cannot depend on a material that creates proliferation risk or requires special-access supply chains.

This is a binding constraint that shapes core and fuel design, not an optimization variable.

### What LEU Costs Us

Compared to HALEU (5–20%), LEU means:

- **Lower reactivity** per unit fuel mass — requires more fuel or a larger core for equivalent power and cycle length
- **Shorter burnup** per fuel cycle — LEU TRISO reaches criticality limits sooner
- **More frequent refuelling** (prismatic) or higher fuel throughput (pebble bed)
- **Larger core volume** to achieve the same k-effective with adequate shutdown margin

These are real engineering penalties. They are accepted because the non-proliferation goal is not negotiable.

### What LEU Gives Us

- Standard enrichment services available worldwide from multiple suppliers
- No special material controls or export license complications for international deployment
- Directly comparable to LWR fuel from a regulatory and safeguards perspective
- Lower enrichment means lower ²³⁵U inventory per unit volume → lower material attractiveness of fresh fuel

## Fuel Form

TRISO particles in a graphite matrix. The SiC coating layer in TRISO is the primary pressure vessel for fission products — the same material chosen for the turbine blades (see §08), reflecting a consistent materials strategy across the design.

## Sweating the Fuel: High Burnup Strategy

The goal is to extract maximum energy from every fuel load — minimising fuel throughput, spent fuel volume, and cost per kWh generated. This is an explicit design principle, not an optimisation afterthought.

### Target Burnup

TRISO fuel has demonstrated structural integrity at burnups well beyond conventional LWR fuel:

| Programme | Demonstrated burnup |
|---|---|
| AVR / THTR (Germany) | ~80–100 GWd/tHM |
| HTR-10 (China) | ~80 GWd/tHM |
| NRC-qualified US TRISO (BWXT) | ~170 GWd/tHM (irradiation test) |

**Target discharge burnup: 80–100 GWd/tHM.** This is achievable with LEU at < 5% enrichment and proven TRISO coating performance. It represents roughly 2× the discharge burnup of a typical LWR fuel assembly.

### Multi-Batch Fuel Management

In a prismatic core, fuel blocks remain in fixed positions between outages. Single-batch operation — fresh fuel in, all fuel out at end of cycle — wastes reactivity and produces uneven burnup across the core.

Multi-batch management reshuffles blocks at each outage:

```
  Fresh fuel   →  Zone A  →  Zone B  →  Zone C  →  Discharge
  (outermost        (high flux)          (lower flux)
   or innermost,
   depending on
   zone design)
```

At each outage, the highest-burnup blocks (Zone C) are discharged. Others shift inward or outward. Fresh blocks fill the vacated positions. This:

- Flattens the radial and axial power profile across the cycle
- Allows every block to approach the 80–100 GWd/tHM target before discharge
- Reduces peak-to-average power ratio → lower peak fuel temperature → more margin

A 6–10 batch scheme is the baseline (see §04 neutronics). More batches push average discharge burnup closer to the target and reduce per-batch reactivity swing, at the cost of more fuel management complexity at outages.

### Cycle Length

**Refuelling interval: 12 months** — fixed by the annual site visit model. Each visit inserts a fresh batch and removes the discharged batch. The reactor does not accumulate spent fuel on site beyond the current discharge batch.

With a 12-month interval and 6–10 batch management, each fuel batch spends 6–10 years in the core before discharge. The exact discharge burnup achieved depends on the fissile loading and power density — this requires a full neutronics calculation (§04) to confirm. Preliminary estimate: **80–100 GWd/tHM** is achievable at reasonable power density with LEU at 4.8% enrichment.

Refuelling outages double as scheduled turbomachine maintenance windows. The outage is productive, not dead time.

## Spent Fuel: A Manageable Waste Form

### Spent Fuel Isotopic Composition

At 80–100 GWd/tHM discharge burnup in a thermal graphite-moderated spectrum, the spent fuel contains:

**Residual uranium**
- U-238: largely intact (~99% remains — only a small fraction is transmuted)
- U-235: mostly burned; a small residual remains (~5–10% of original loading)
- U-236: minor activation product, not fissile

**Plutonium** — inevitable in any uranium reactor; U-238 neutron capture always produces Pu-239. Net inventory at discharge is approximately 4–8 kg per tonne of heavy metal. High burnup fissions much of the early-cycle Pu in-situ, reducing the net inventory compared to a lightly-irradiated core.

Approximate isotopic split at 80–100 GWd/tHM:

| Isotope | Fraction | Notes |
|---|---|---|
| Pu-239 | ~45–50% | Fissile; the weapons-relevant fraction |
| Pu-240 | ~30–35% | Spontaneous fission source — the proliferation barrier |
| Pu-241 | ~10–15% | Fissile; decays to Am-241 (t½ = 14.4 yr) |
| Pu-242 | ~5–10% | Non-fissile, long-lived |

This is firmly **reactor-grade plutonium**. The IAEA classification requires >93% Pu-239 for weapons-grade material. Pu-240 emits spontaneous fission neutrons that cause pre-initiation (fizzle) in simple weapon designs — the reason reactor-grade plutonium is considered essentially unusable for first-generation weapons without sophisticated implosion engineering beyond most actors' reach.

**Minor actinides** — the long-term radiotoxicity concern:
- Np-237, Am-241, Am-243, Cm-244: produced by successive neutron captures
- These dominate repository dose after ~1,000 years
- In a thermal spectrum, they cannot be efficiently transmuted in-situ; they go to disposal with the spent fuel
- Quantities are small but not zero — this is a known characteristic of thermal-spectrum reactors

**Fission products** — retained within TRISO coatings under normal burnup conditions: Cs-137, Sr-90 (30-yr half-lives, dominant short-to-medium term heat source), Kr-85, I-129, Tc-99.

### Proliferation Assessment of Spent TRISO Fuel

Two independent barriers make the spent fuel highly resistant to diversion for weapons use:

1. **Isotopic quality:** The Pu-240 content (~30–35%) makes the material unsuitable for reliable weapons without sophisticated implosion designs. The IAEA classifies material of this composition as requiring substantial further processing before it is of direct weapons concern.

2. **Physical form:** Extracting plutonium from TRISO spent fuel requires breaking the SiC coating layer on millions of sub-millimetre particles, dissolving the UO₂ kernels, and running a chemical separation. The SiC layer is specifically designed to resist chemical attack. This is far more difficult than reprocessing LWR spent fuel rods, which can be dissolved directly. The IAEA formally recognises TRISO spent fuel as having high intrinsic proliferation resistance.

The combination of reactor-grade isotopics and a physically resistant form means the spent fuel presents a lower proliferation risk than LWR spent fuel of equivalent energy content.

### Annual Removal Model

Spent fuel is removed at every 12-month refuelling visit — it does not accumulate on site. This limits the at-any-time on-site inventory to approximately one batch, keeps safeguards accounting straightforward, and allows central facility storage and monitoring. The annual service model is a natural fit with international safeguards frameworks.

### TRISO Spent Fuel as a Waste Form

- Fission products remain encapsulated in SiC/PyC coatings — the fuel particle is its own primary waste containment
- Lower decay heat density per unit volume than LWR spent fuel → dry storage manageable from day one
- Cannot be readily reprocessed (a proliferation feature, not a bug)
- No liquid chemistry — solid, compact, mechanically stable particles

The disposal pathway is direct: interim dry storage, then geological repository. The TRISO form requires no additional conditioning before disposal, unlike LWR spent fuel.

At 80–100 GWd/tHM discharge burnup, the spent fuel volume per unit energy generated is substantially lower than LEU LWR fuel at ~45–55 GWd/tHM.

### The Graphite Waste Stream

The graphite moderator blocks are an additional waste stream not present in LWR designs. After irradiation, graphite is:

- **Activated:** primarily ¹⁴C (t½ = 5,730 yr) from ¹⁴N(n,p)¹⁴C and ¹⁷O(n,α)¹⁴C reactions, and ³H (tritium, t½ = 12.3 yr)
- **Classified as intermediate-level waste (ILW)** in most regulatory frameworks — not high-level waste, but not trivial
- **Wigner energy bearing:** fast neutron irradiation displaces carbon atoms in the graphite lattice, storing energy that releases on annealing (relevant for accident scenarios and for disposal)

To keep this waste stream manageable:
- The annular core uses less graphite per unit power than a solid core
- Graphite blocks are dimensionally standard — they can be stored in a defined container format
- Fuel blocks (graphite + TRISO) are classified as high-level waste and managed with the TRISO spent fuel
- Reflector blocks (no fuel) are ILW — lower activity, simpler disposal pathway

Separating spent fuel blocks from reflector blocks at refuelling is operationally straightforward and significantly simplifies the waste classification picture.

## Fresh Fuel Supply Chain

LEU TRISO fabrication requires:
1. UO₂ kernel production from standard UF₆ feedstock (≤ 5% enriched)
2. Fluidized-bed chemical vapour deposition (FBCVD) of PyC and SiC coatings
3. Overcoating and compaction into fuel compacts (prismatic) or graphite matrix pebbles

The kernel and coating deposition process is specialized but not classified or proliferation-sensitive. Several vendors have demonstrated production-scale TRISO fabrication (BWXT in the US, INET in China, NFI in Japan).

## Open Questions

- [ ] Confirm discharge burnup via neutronics calculation (§04): is 80–100 GWd/tHM achievable with LEU at 4.8% and 12-month cycles?
- [ ] Number of batches within the 6–10 range: optimise for burnup vs. fuel management complexity
- [ ] Spent fuel transport packaging: what container standard applies to TRISO spent fuel blocks for annual removal?
- [ ] Minor actinide inventory: quantify Am/Cm/Np per discharge batch for waste classification purposes

---

*Previous: [09 · Hydrogen Production](09-hydrogen.md) | Next: [11 · Siting](11-siting.md)*
