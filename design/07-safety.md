# 07 · Safety

## Defence in Depth

Safety is achieved by multiple independent barriers, each capable of limiting consequences on its own:

```
  1. TRISO coatings         — fission products retained at kernel level
  2. Helium pressure boundary — contains activated coolant
  3. Reactor vessel          — secondary containment of helium
  4. Reactor cavity          — structural barrier; houses RCCS
  5. Confinement building    — final barrier against atmospheric release
```

No single barrier failure leads to a public radiological consequence. The design is tolerant of any one barrier failing.

## Walk-Away Safety Criterion

**The peak fuel temperature must remain below 1600 °C under any credible accident scenario, with no operator action, no active systems, and no external power — indefinitely.**

1600 °C is the demonstrated limit for TRISO coating integrity. Below this temperature, fission products are retained within the fuel particles regardless of what happens to the rest of the reactor. The safety case does not rely on any active cooling system — it relies only on the physics of heat conduction and radiation.

This criterion is the governing constraint on core geometry. It is why the fuel annulus is limited to ~1 m thickness (see §03): beyond this width, the conduction path to the vessel wall becomes too long and peak fuel temperature in a fully depressurised, no-flow accident exceeds the limit.

## Passive Decay Heat Removal: Air-Cooled RCCS

### Why Air

No water supply is required. The unit works anywhere — desert, arctic, remote industrial site, island. There are no water pipes in the reactor cavity, no water inventory to maintain, no steam generation risk if a panel fails. The cooling medium is ambient air, which is always available.

### Operating Principle

Heat flows from the fuel by four successive passive mechanisms — no pumps, no valves, no power required at any step:

```
  FUEL
   │ conduction
   ▼
  GRAPHITE MODERATOR
   │ conduction
   ▼
  REACTOR VESSEL WALL
   │ thermal radiation + convection
   ▼
  CAVITY LINER PANELS
   │ natural convection of air
   ▼
  RISER DUCTS → ATMOSPHERE
```

Ambient air enters the RCCS at low-level inlets around the base of the reactor cavity. It rises through the annular gap between the reactor vessel outer surface and the cavity liner, heating as it goes. The hot air exits via riser ducts to atmosphere at the top — the chimney effect. No moving parts anywhere in this path.

### Chimney Height and Siting

The strength of the natural draft is proportional to the total height between the lowest air inlet (at cavity floor level) and the exhaust outlet at the top of the above-grade building.

The reactor is installed below grade (see §11), with the cavity floor ~12 m below grade and the RCCS exhaust at ~+8 m above grade. **Effective chimney height: ~20 m** — the full vertical span of the 20 m envelope. This is an inherent benefit of the below-grade layout; no additional stack structure is required to achieve good RCCS performance.

Below-grade installation also provides seismic isolation, shielding mass, and physical security as co-benefits.

### Decay Heat Load

Decay heat from a ~100 MW(th) core follows approximately:

| Time after shutdown | Decay heat |
|---|---|
| Immediate (0 s) | ~6–7 MW (~6.5% of full power) |
| 1 hour | ~1.5–2 MW |
| 24 hours | ~0.5–0.8 MW |
| 1 week | ~0.2–0.3 MW |
| Long-term | Declining slowly |

The RCCS must be sized to remove the **peak ~6–7 MW** while keeping peak fuel temperature below 1600 °C. This is the governing design case. Because the graphite core has enormous thermal mass, the temperature rise after shutdown is slow — the system has hours, not seconds, to respond, which a passive air system handles comfortably.

### Sizing Principles

- Annular gap width between reactor vessel and cavity liner: drives airflow velocity and heat transfer area
- Cavity liner emissivity: high-emissivity coating (ε > 0.85) on both surfaces maximises radiation heat transfer across the gap
- Riser duct cross-section and height: must support the natural draft flow rate at peak decay heat without excessive pressure drop
- Inlet area: sized to match riser flow without choking

Detailed sizing requires a coupled thermal-hydraulic and neutronics analysis (§04, §05). The PBMR programme produced extensive air-cooled RCCS modelling that provides a starting point.

## Loss-of-Coolant Accident (LOCA)

If the helium pressure boundary is breached, the primary circuit depressurises. Helium (being a noble gas) escapes to the confinement building without chemical reaction. There is no steam explosion, no hydrogen generation, no zircaloy oxidation — mechanisms that dominate LWR LOCAs simply do not exist here.

After depressurisation, heat removal relies entirely on the RCCS. This is the **depressurised loss-of-forced-cooling (DLOFC)** scenario — the worst credible accident.

In the DLOFC:
- Helium circulation stops
- Primary pressure drops to atmospheric
- Heat removal is by conduction through graphite → radiation across the vessel gap → natural convection of RCCS air
- Peak fuel temperature rises slowly, reaches a maximum some hours after the event, then declines
- The peak must remain below 1600 °C

The annular core geometry is sized specifically so that this criterion is met with margin.

## Air / Water Ingress

### Air Ingress

If air enters the depressurised primary circuit, it can oxidise the graphite moderator:

```
C + O₂ → CO₂     (above ~400 °C)
C + CO₂ → 2CO    (Boudouard reaction, above ~700 °C)
```

Graphite oxidation is exothermic and self-sustaining above a threshold temperature. This is a more serious concern than the LOCA itself in some scenarios.

Mitigations:
- The helium confinement building limits air access after a primary breach
- Reactor trip and natural shutdown on any depressurisation signal
- Below-grade installation limits the driving pressure differential for air ingress
- The graphite mass is large — oxidation of a small fraction does not immediately threaten structural integrity

### Water Ingress

Water ingress is more reactive than air above ~900 °C:

```
C + H₂O → CO + H₂   (steam-carbon reaction)
```

This produces combustible hydrogen, which is a secondary hazard. The helium purification system monitors moisture continuously; any significant water ingress triggers an alarm and shutdown. The design avoids water-cooled systems in proximity to the primary circuit (hence air-cooled RCCS and air-cooled precooler).

## Confinement Approach

This design uses **confinement** rather than full pressure-capable **containment**. The distinction:

- **Containment** (LWR approach): a pressure-capable building designed to retain steam/hydrogen in a high-energy accident. Expensive, large, complex.
- **Confinement** (HTGR approach): a low-leakage building that delays and filters any release. Acceptable because the source term (activity available for release) is very low — fission products are retained in TRISO coatings, and helium activation products are short-lived or noble-gas.

The confinement building forms the fifth and outermost barrier. It does not need to withstand high internal pressure. This significantly reduces structural costs and is consistent with the overall simplicity principle.

## Open Questions

- [ ] RCCS annular gap dimensions and liner coating specification
- [ ] Below-grade depth: optimise chimney height vs. civil construction cost
- [ ] DLOFC peak fuel temperature calculation (requires §04 neutronics + §05 T-H)
- [ ] Air ingress accident analysis: oxidation kinetics and structural graphite margin
- [ ] Confinement leakage rate specification and filtered vent design
- [ ] Seismic design basis: site-independent or defined seismic zone?

---

*Previous: [06 · Materials](06-materials.md) | Next: [08 · Power Conversion](08-power-conversion.md)*
