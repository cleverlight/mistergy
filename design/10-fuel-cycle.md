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

## Burnup and Cycle Length

With LEU TRISO at < 5% enrichment, target burnup is approximately **80–100 GWd/tHM** — achievable in existing TRISO designs (AVR, HTR-10 have demonstrated comparable values). This implies:

- **Pebble bed:** Each pebble makes multiple passes through the core (typically 6–10 passes) before discharge. Online refueling means no scheduled outages for fuel.
- **Prismatic:** Fuel blocks remain in core for a fixed irradiation period; outage required for refueling. Shorter cycle length (vs. HALEU) increases outage frequency — a meaningful operations cost.

The refueling mode interacts strongly with the core geometry decision (§03), which remains open.

## Spent Fuel

TRISO spent fuel is fundamentally different from LWR spent fuel:

- Fission products remain encapsulated in SiC/PyC coatings through disposal
- Cannot be readily reprocessed (this is a proliferation feature, not a bug)
- Lower decay heat density per unit volume than LWR spent fuel — dry storage is more manageable
- No liquid chemistry involved (unlike spent MOX or metal fuel)

The pathway to final disposal is direct dry storage followed by geological repository. The compact, self-contained nature of TRISO kernels makes this straightforward relative to LWR spent fuel.

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
