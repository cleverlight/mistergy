# 01 · Design Overview

## Mission

Deliver sustained **carbon-free high-grade heat** at temperatures unreachable by light-water reactors, enabling industrial decarbonization and thermochemical hydrogen production.

## Top-Level Requirements

| Parameter | Target | Rationale |
|---|---|---|
| Core outlet temperature | ≥ 950 °C | Required for S–I thermochemical H₂ cycle |
| Thermal power | TBD MW(th) | Size TBD |
| Coolant | Helium | Chemically inert, single-phase, good heat transfer at high T |
| Moderator | Nuclear-grade graphite | Excellent high-T properties, neutron economy |
| Fuel form | TRISO particles in graphite matrix | Coated-particle safety, high burnup tolerance |
| Core geometry | TBD (prismatic block or pebble bed) | See §03 |
| Primary pressure | ~7 MPa | Balance of pumping power vs. heat capacity |
| Fuel enrichment | < 20% ²³⁵U (HALEU) | Non-proliferation limit |
| Passive decay heat removal | Yes — no active systems required | Walk-away safety |

## Key Design Philosophy

1. **Simplicity above all.** Fewer components means fewer failure modes, easier maintenance, and lower cost. Every added component must justify itself.

2. **Solve hard problems with better materials and manufacturing — not more components.** When a constraint seems to demand a new system, the preferred answer is a material or process that makes the system unnecessary. The CMC turbine blade is the template: rather than adding blade cooling infrastructure, use a material that doesn't need it. This principle applies across the design.

3. **Fuel as the first barrier.** TRISO coatings retain fission products up to ~1600 °C, well above any credible accident temperature. The reactor is designed so that peak fuel temperature *never* approaches this limit.

4. **Graphite as a thermal flywheel.** The large graphite heat capacity and negative temperature coefficient provide inherent self-regulation.

5. **Helium does one job.** The same helium that cools the core drives the turbine directly. No intermediate heat exchanger, no secondary loop, no steam generators.

6. **Helium purity is safety-critical.** Moisture and CO₂ attack graphite at high temperature; the helium purification system is a first-class design concern.

7. **Modularity.** Target a unit size that can be factory-fabricated and truck-shipped to enable rapid deployment.

## Open Design Decisions

- [x] **Core geometry: prismatic block** — fixed geometry, uniform coolant channels, predictable outlet temperature; simpler operational equipment than pebble bed
- [ ] Thermal power rating: 100 MW(th), 200 MW(th), or larger?
- [x] **Power conversion: direct Brayton cycle** — helium from core drives turbine directly; no IHX
- [ ] Hydrogen interface: S–I thermochemical cycle vs. high-temperature electrolysis (HTE)?
- [x] **Fuel enrichment: LEU (< 5% ²³⁵U)** — proliferation resistance is non-negotiable for widespread deployment; standard enrichment supply chain

## Relationship to Prior Designs

```
HTTR (Japan, prismatic, 950 °C demonstrated)
  └── Informs outlet temperature feasibility and helium purification requirements

GT-MHR (General Atomics)
  └── Prismatic block geometry, direct Brayton cycle reference

Xe-100 (X-energy)
  └── Modern pebble-bed SMR safety case and regulatory approach

NGNP (US DOE)
  └── S–I hydrogen coupling studies, IHX materials data
```

---

*Next: [02 · Fuel Design](02-fuel.md)*
