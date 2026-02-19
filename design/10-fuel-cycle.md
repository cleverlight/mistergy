# 10 · Fuel Cycle

## Enrichment Decision: LEU (< 5% ²³⁵U)

This design uses **low-enriched uranium** — below the 5% threshold that can be handled by the existing global enrichment and fuel fabrication infrastructure. The rationale is explicit: if this reactor type is to become widespread, it cannot depend on a material that creates proliferation risk or requires special-access supply chains.

This is a binding constraint that shapes core and fuel design, not an optimization variable.

### What LEU Costs Us

Compared to HALEU (5–20%), LEU means:

- **Lower reactivity** per unit fuel mass — requires more fuel or a larger core for equivalent power and cycle length
- **Shorter burnup** per fuel cycle — LEU TRISO reaches criticality limits sooner
- **More frequent refueling** (prismatic) or higher fuel throughput (pebble bed)
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

**Target discharge burnup: 100–120 GWd/tHM.** This is achievable with LEU at < 5% enrichment and proven TRISO coating performance. It represents roughly 2–3× the discharge burnup of a typical LWR fuel assembly.

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
- Allows every block to approach the 100–120 GWd/tHM target before discharge
- Reduces peak-to-average power ratio → lower peak fuel temperature → more margin

A 3-batch scheme is the baseline. 4-batch would push average burnup higher but increases fuel management complexity at outages.

### Cycle Length

With LEU and 3-batch management at 100 MW(th):
- Approximate fissile inventory: ~250–300 kg ²³⁵U per full core load (to be calculated in §04)
- At 100 MW(th) and ~33% capacity utilization of fissile material per batch:
- **Estimated cycle length: 12–18 months** per batch

This is comparable to a LWR refueling cycle. Refueling outages also serve as scheduled turbomachine maintenance windows — the outage is not dead time.

## Spent Fuel: A Manageable Waste Form

### TRISO Spent Fuel

TRISO spent fuel is fundamentally different from LWR spent fuel, and the differences are mostly favourable:

- Fission products remain encapsulated in SiC/PyC coatings — the fuel particle is its own primary waste containment
- Lower decay heat density per unit volume than LWR spent fuel → dry storage manageable from day one
- Cannot be readily reprocessed (a proliferation feature, not a bug)
- No liquid chemistry — solid, compact, mechanically stable particles

The disposal pathway is straightforward: interim dry storage on site, then geological repository. The TRISO form requires no additional conditioning before disposal, unlike LWR spent fuel which requires vitrification or other immobilisation of dissolved fission products.

At 100–120 GWd/tHM discharge burnup, the spent fuel volume per unit energy generated is substantially lower than LEU LWR fuel at ~45–55 GWd/tHM. More energy per gram of fuel means less spent fuel per kWh.

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

Separating spent fuel blocks from reflector blocks at refueling is operationally straightforward and significantly simplifies the waste classification picture.

## Fresh Fuel Supply Chain

LEU TRISO fabrication requires:
1. UO₂ kernel production from standard UF₆ feedstock (≤ 5% enriched)
2. Fluidized-bed chemical vapor deposition (FBCVD) of PyC and SiC coatings
3. Overcoating and compaction into fuel compacts (prismatic) or graphite matrix pebbles

The kernel and coating deposition process is specialized but not classified or proliferation-sensitive. Several vendors have demonstrated production-scale TRISO fabrication (BWXT in the US, INET in China, NFI in Japan).

## Open Questions

- [ ] Target burnup: 80 GWd/tHM or push toward 100+ with optimized coating design?
- [ ] Pebble vs. prismatic refueling — awaiting core geometry decision (§03)
- [ ] Spent fuel interim storage design: on-site pool vs. dry casks from day one?

---

*Previous: [09 · Hydrogen Production](09-hydrogen.md)*
