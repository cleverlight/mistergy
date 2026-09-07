# 12 · Economics

## Design Thesis

The economic case rests on a structural argument: this design **eliminates roughly half the systems** that drive conventional nuclear plant costs. The steam system, pressure-rated containment (replaced by a simpler confinement building — see §07), emergency core cooling, and cooling water infrastructure are not merely simplified — they do not exist in their conventional form. The question is whether the novel components (ceramic blisk, TPMS fuel blocks, TRISO at scale) can mature fast enough to realise the savings.

The goal is firm, baseload, carbon-free electricity at a cost competitive with natural gas and cheaper than firmed renewables — a bridge until fusion reaches commercial scale.

### Terminology

This section uses standard power-industry cost terminology:

- **FOAK** — First-Of-A-Kind: the first unit built, carrying full development, licensing, and engineering costs.
- **NOAK** — Nth-Of-A-Kind: a unit built after the design is proven and the supply chain is established (roughly the 10th–20th unit). Engineering and licensing costs are amortised across the fleet.
- **LCOE** — Levelized Cost of Electricity: the all-in cost per MWh over the plant's lifetime, including capital recovery, fuel, operations, and decommissioning. The standard metric for comparing generation technologies.
- **WACC** — Weighted Average Cost of Capital: the blended financing rate (debt + equity) used to discount future cash flows.
- **BOP** — Balance of Plant: all systems outside the nuclear island and power conversion — instrumentation, electrical distribution, site services.

## What This Design Eliminates

| Eliminated System | Present in Conventional PWR | Impact |
|---|---|---|
| Steam generators (2–4 units) | Yes — major cost item | Eliminated by direct Brayton |
| Condenser | Yes | No steam to condense |
| Cooling towers / circ. water system | Yes — significant civil works | Air-cooled precooler replaces |
| Feedwater system (pumps, heaters, deaerator) | Yes | No water in cycle |
| Moisture separator reheaters | Yes | No wet steam |
| Containment building | Yes — massive reinforced concrete | Confinement building sufficient (low source term) |
| Emergency core cooling (ECCS) | Yes — redundant safety-grade | Walk-away passive safety |
| Emergency diesel generators | Yes — safety-grade backup power | No active safety systems to power |
| Secondary loop piping | Yes | No secondary loop |
| Intermediate heat exchanger | Yes (in some HTGRs) | Direct Brayton — helium does one job |
| Cooling water supply infrastructure | Yes — site-limiting requirement | No water needed; works anywhere |

A conventional PWR's secondary side and safety systems account for roughly 30–40% of total plant cost. This design replaces all of it with a turbomachine, a recuperator, and a precooler.

## Capital Cost Estimate

The table below shows three configurations: the **FOAK unit** (850 °C metallic turbine, de-risked; see §08 phased strategy), the **NOAK unit** (950 °C ceramic blisk, proven design), and a 950 °C FOAK for comparison. All are based on the same ~130 MW(th) thermal power (mid-range of the 100–150 MW(th) envelope; see §03) — electrical output differs due to cycle efficiency.

### Component Breakdown

| Component | FOAK 850 °C ($M) | FOAK 950 °C ($M) | NOAK 950 °C ($M) | Notes |
|---|---|---|---|---|
| **Nuclear island** | | | | *Identical across all variants* |
| Reactor pressure vessel | 15 | 15 | 12 | 4 MPa → ~65 mm wall |
| Graphite core & reflector | 30 | 30 | 25 | ~200 t IG-110, low-Li, TPMS |
| Control rods, drives, internals | 13 | 13 | 10 | |
| Helium systems | 8 | 8 | 7 | |
| *Nuclear island subtotal* | *66* | *66* | *54* | |
| **Power conversion** | | | | *Only section that changes* |
| Gas turbine / compressor | 18 | 30 | 22 | FOAK 850 °C: Ni superalloy (proven); 950 °C: ceramic blisk |
| Generator & electrical | 10 | 10 | 8 | |
| Recuperator (PCHE) | 10 | 15 | 12 | FOAK 850 °C: 316H SS (hot side ~540 °C); 950 °C: Alloy 617 |
| Air-cooled precooler | 8 | 8 | 6 | |
| *Power conversion subtotal* | *46* | *63* | *48* | |
| **Civil** | | | | |
| Below-grade cavity (modular pre-cast) | 10 | 10 | 8 | Pre-cast segments; see §11 |
| Confinement building | 12 | 12 | 10 | |
| RCCS structure, site works, grid | 14 | 14 | 11 | |
| *Civil subtotal* | *36* | *36* | *29* | |
| **BOP & I&C** | 20 | 20 | 18 | |
| **Initial fuel load** | 33 | 33 | 28 | ~3.3 t HM TRISO |
| **Indirect** | | | | |
| Engineering & design | 25 | 25 | 5 | |
| Licensing & regulatory | 35 | 35 | 5 | |
| Project management & commissioning | 25 | 25 | 13 | |
| *Indirect subtotal* | *85* | *85* | *23* | |
| **Contingency** | 40 (14%) | 46 (15%) | 18 (10%) | 850 °C FOAK: lower turbine risk |
| | | | | |
| **Total capital** | **~326** | **~349** | **~218** | |
| **Net output (MWe)** | **~55** | **~60** | **~60** | Same thermal power; efficiency differs |
| **$/kW(e)** | **~5,900** | **~5,800** | **~3,600** | |

The 850 °C FOAK has a similar $/kW(e) to the 950 °C FOAK despite lower output, because the turbine and recuperator savings roughly offset the output penalty. The real advantage is risk: the metallic turbine is off-the-shelf, the contingency is lower, and total capital is $23M less.

### Mature Fleet Projection (50th+ Unit)

All mature fleet units use the 950 °C ceramic blisk with modular pre-cast cavity: **~$3,000/kW(e)**, potentially falling to ~$2,500/kW(e) with sustained production beyond 50 units.

### Context

| Plant | $/kW(e) | Status |
|---|---|---|
| AP1000 at Vogtle (USA) | ~13,000 | Built; massive overruns |
| Hinkley Point C (UK) | ~12,000 | Under construction |
| NuScale SMR (projected) | 5,000–9,000 | Cancelled |
| Korean APR1400 (UAE) | ~4,500 | Built on schedule |
| **This design (FOAK 850 °C)** | **~5,900** | Projected; de-risked metallic turbine |
| **This design (FOAK 950 °C)** | **~5,800** | Projected; ceramic blisk |
| **This design (NOAK)** | **~3,600** | Projected |
| **This design (mature fleet)** | **~3,000** | Projected |

## Fuel Cost

### TRISO Fabrication

TRISO is more expensive per kilogram than conventional UO₂ pellets, but the high burnup target (80–100 GWd/tHM vs. 45–60 for UO₂) means each kilogram produces roughly twice the energy.

| Parameter | Value |
|---|---|
| Initial core load | ~3.3 t HM (6–10 batches, all loaded) |
| Annual reload | ~0.41 t HM (one batch per 12-month cycle) |
| Current TRISO cost (small batch) | $20,000–40,000/kg(U) |
| Projected cost at scale | $5,000–10,000/kg(U) |
| Estimate used (NOAK) | $10,000/kg(U) |
| Annual reload cost (NOAK) | ~$4.1M |
| Fuel cost per MWh | ~$8.5/MWh |

For comparison, conventional nuclear fuel cycle cost (mining + conversion + enrichment + fabrication): ~$6–8/MWh. TRISO is only marginally more expensive per MWh despite being several times more expensive per kilogram — the high burnup largely compensates.

As TRISO production scales and competition enters the market, fuel cost could fall to ~$6–7/MWh, reaching parity with conventional fuel on a per-MWh basis.

## Operating Cost

### Staffing

This design targets minimal on-site staffing, enabled by passive safety and simplified operations:

| Function | People | Frequency |
|---|---|---|
| Control room monitoring | 5–10 | Continuous (potentially remote) |
| Annual refueling campaign | 20–30 | 2–4 weeks per year |
| Periodic maintenance & inspection | 5–10 | As scheduled |

Estimated annual staffing cost: $3–5M.

For comparison, a conventional nuclear plant employs 500–1,000 people at $50–100M/year. On a per-MWh basis the difference is less dramatic (conventional plants produce more MWh), but the absolute cost is an order of magnitude lower.

### Total O&M

| Item | Annual Cost ($M) | $/MWh |
|---|---|---|
| Staffing | 4 | 8 |
| Maintenance & consumables | 1.5 | 3 |
| Insurance & fees | 1 | 2 |
| **Total fixed O&M** | **6.5** | **~13** |

These are FOAK estimates. For NOAK with operational experience, total O&M could fall to ~$8–10/MWh.

## LCOE (Levelized Cost of Electricity)

### Assumptions

| Parameter | Value |
|---|---|
| Discount rate (WACC) | 8% |
| Plant life | 40 years |
| Capacity factor | 92% (2-week annual refueling outage) |
| Annual generation | ~443,000 MWh (FOAK 850 °C, 55 MWe) / ~483,000 MWh (60 MWe variants) |
| Capital recovery factor | 0.0839 |

### LCOE Breakdown

| Component | FOAK 850 °C ($/MWh) | FOAK 950 °C ($/MWh) | NOAK ($/MWh) | Mature Fleet ($/MWh) |
|---|---|---|---|---|
| Capital recovery | 62 | 61 | 38 | 26 |
| Fuel (TRISO reload) | 9 | 9 | 8 | 7 |
| O&M | 15 | 13 | 8 | 7 |
| Decommissioning provision | 2 | 2 | 2 | 2 |
| **Total LCOE** | **~88** | **~85** | **~56** | **~42** |

The 850 °C FOAK has a slightly higher LCOE than the 950 °C FOAK (~$88 vs ~$85/MWh) because fixed O&M costs are spread over fewer MWh. The difference is small — and the 850 °C variant eliminates the ceramic blisk from the FOAK critical path.

### Comparison to Alternatives

| Source | LCOE ($/MWh) | Firm 24/7? | Notes |
|---|---|---|---|
| **This design (FOAK 850 °C)** | **~88** | **Yes** | De-risked metallic turbine |
| **This design (NOAK)** | **~56** | **Yes** | 92% CF, baseload |
| **This design (mature)** | **~42** | **Yes** | 50th+ unit |
| Large nuclear (AP1000 FOAK) | 90–150 | Yes | Western construction experience |
| CCGT (natural gas) | 40–70 | Yes | Exposed to fuel price; carbon cost extra |
| Onshore wind | 25–50 | No | 30–45% CF; intermittent |
| Solar PV | 20–40 | No | 15–25% CF; intermittent |
| Wind/solar + 4 h battery | 55–90 | Partial | Not fully firm |
| Wind/solar + long-duration storage | 70–120 | Yes | Hydrogen / compressed air; early stage |

The key comparison: at ~$42–56/MWh for firm, 24/7, zero-carbon power with no fuel price exposure, this design is competitive with natural gas, significantly cheaper than conventional nuclear, and cheaper than firmed renewables at current storage costs.

## Multi-Unit Site Economics

The modular design is explicitly intended for scale by replication. A 4-unit site (240 MWe total):

| Advantage | Saving |
|---|---|
| Shared control room & operators | ~$6M/year across site |
| Shared security perimeter | ~$2M/year |
| Single grid connection | ~$5M capital |
| Single operating licence (design cert) | ~$25M capital |
| Shared civil works (site, RCCS structure) | ~$15M capital (vs. 4× individual site works) |
| Shared BOP & I&C infrastructure | ~$10M capital |
| Sequential refueling (stagger outages) | Maintains ~75% site output during any refueling |

Effective 4-unit NOAK site cost: ~$3,200/kW(e) for the cluster, with site LCOE approaching ~$48/MWh.

## What Drives the Cost Down (FOAK → Mature Fleet)

Three factors dominate the cost trajectory:

### 1. Factory Learning Curve

The 20 m envelope is designed for factory assembly. Historical manufacturing learning rates of 10–15% per doubling of cumulative production apply to the nuclear island and power conversion system. Over 50 units, this could reduce equipment costs by 30–40%.

The key enabler: every unit is identical. No site-specific engineering, no custom civil works beyond the excavation (and even that is standardised — see modular pre-cast cavity, §11), no design iteration between units.

### 2. TRISO Supply Chain Scale-Up

Current TRISO production is small-batch and expensive ($20,000–40,000/kg). At commercial scale with dedicated production lines, costs are projected to fall to $5,000–10,000/kg. The high burnup (80–100 GWd/tHM) means each kilogram produces roughly twice the energy of conventional UO₂, so TRISO reaches per-MWh cost parity with conventional fuel even at a significant per-kg premium.

### 3. Ceramic Blisk Maturation

The ceramic blisk is the single highest-uncertainty cost item. GE Aviation's SiC/SiC CMC programme for jet engine components demonstrates that costs drop steeply once manufacturing is industrialised — CMC components in the LEAP engine went from laboratory to serial production within a decade. The first blisk for this reactor will be expensive; the hundredth will be routine.

## Key Sensitivities and Uncertainties

| Item | Uncertainty | Impact on $/kW(e) | Notes |
|---|---|---|---|
| Ceramic blisk cost | Very high | ±$500/kW(e) | No commercial precedent for full blisk |
| TRISO at scale | High | ±$3/MWh fuel cost | Projected but not demonstrated at volume |
| Regulatory timeline | High | Indirect costs could double for FOAK | Novel design, no licensing precedent |
| Factory learning rate | Moderate | Determines NOAK trajectory | Requires sustained order book |
| Capacity factor | Low | ±$2–4/MWh | Prismatic HTGR refueling well understood |
| Discount rate | Moderate | ±$8–12/MWh per ±2% WACC | Capital-intensive; sensitive to financing |

### Financing Note

Nuclear projects are capital-intensive and front-loaded. The discount rate assumption (8%) reflects typical utility financing. Government-backed financing at 4–5% (as used for Hinkley Point C) would reduce the capital component of LCOE by ~30%, bringing NOAK LCOE to ~$42/MWh and mature fleet to ~$33/MWh. The economic case strengthens considerably with policy support during the FOAK phase.

## Economic Summary

| Metric | FOAK 850 °C | FOAK 950 °C | NOAK | Mature Fleet |
|---|---|---|---|---|
| Capital cost | ~$326M | ~$349M | ~$218M | ~$180M |
| Net output (MWe) | ~55 | ~60 | ~60 | ~60 |
| $/kW(e) | ~5,900 | ~5,800 | ~3,600 | ~3,000 |
| LCOE | ~$88/MWh | ~$85/MWh | ~$56/MWh | ~$42/MWh |
| Annual fuel cost | ~$4.1M | ~$4.1M | ~$4.1M | ~$3.5M |
| Annual O&M | ~$6.5M | ~$6.5M | ~$5M | ~$4.5M |

The design is not the cheapest option at unit one. It becomes compelling at unit ten, and competitive with any firm generation source by unit fifty. The path from FOAK to mature fleet depends on sustained production, TRISO scale-up, and ceramic blisk industrialisation — all of which are manufacturing problems, not physics problems. The physics is already solved.

---

*Previous: [11 · Siting](11-siting.md) · [References](../references.md)*
