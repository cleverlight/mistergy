# 11 · Siting and Civil Layout

## Below-Grade Installation

The reactor is installed in a below-grade excavated cavity. This is not merely a preference — it is the configuration that makes several other design choices work together cleanly.

### The 20 m Envelope Interpreted

The 20 m × 20 m × 20 m envelope spans **total installed height**, split between below and above grade:

| Zone | Approximate depth | Contents |
|---|---|---|
| Above grade | 0 to +8 m | Upper turbomachine, RCCS exhaust stack, maintenance building |
| Below grade | 0 to −12 m | Reactor vessel, cross-vessel, lower turbomachine, recuperator, precooler |

The cavity floor sits ~12 m below grade. The tallest above-grade element (RCCS exhaust stack or maintenance crane structure) reaches ~8 m. Total vertical span: 20 m.

### What Below-Grade Gives for Free

**RCCS chimney height.** The passive air cooling system depends on natural draft — hot air rising through the annular gap around the reactor vessel and exiting at the top. The driving force is proportional to the total height between the cavity floor air inlet and the above-grade exhaust outlet. With ~20 m of effective chimney height, natural draft airflow at peak decay heat (~6–7 MW) is sufficient to keep peak fuel temperature well below 1600 °C — without any active assistance.

**Seismic isolation.** Soil and rock surrounding the below-grade cavity damp horizontal ground motion. The reactor vessel is effectively embedded in a mass that moves with it rather than shaking it. This reduces the seismic demand on the vessel and internals compared to an above-grade installation.

**Shielding mass.** The surrounding earth and concrete provide neutron and gamma shielding without dedicated shield structures. The above-grade building requires far less biological shielding than it would for an above-grade reactor.

**Physical security.** The reactor vessel is not accessible from grade level without deliberate construction. The above-grade surface presents a modest industrial building — not a recognisable reactor structure.

**Flood resilience.** With appropriate civil design (drainage, waterproofing, sealed penetrations), the below-grade cavity is isolated from surface flooding. The reactor does not need elevated levees or berms.

## Above-Grade Surface Expression

The above-grade building is compact — roughly 15 m × 12 m in plan, 8 m tall. It houses:

- Maintenance access hatch and crane over the reactor vessel and turbomachine
- RCCS exhaust stack (perforated or louvred to allow hot air discharge)
- Electrical switchgear and grid connection equipment
- Control room (or control cabinet — the reactor is designed to operate autonomously; full control room optional)
- Helium inventory storage (high-pressure gas cylinders)
- Spent fuel interim storage bay (see below)

The building is unremarkable from the outside. No cooling towers, no large exhaust stacks, no visible steam plumes.

## RCCS Air Circuit

```
  AMBIENT AIR
       │
       ▼  [louvred inlets at grade, around cavity perimeter]
  ANNULAR GAP between reactor vessel and cavity liner
       │  (air rises, heated by radiation and convection from vessel wall)
       ▼
  RISER DUCTS (within the above-grade building walls)
       │
       ▼  [louvred exhaust at roof level, or dedicated exhaust stack]
  ATMOSPHERE
```

Air inlets are distributed around the perimeter at grade level, screened against debris and weather. The inlet area is sized to provide airflow at peak decay heat without choking. The exhaust is at roof level or a short stack above the building — high enough to ensure the chimney effect drives flow even in still-air conditions.

The air path is entirely open to atmosphere — no valves, no dampers, no active components anywhere in the circuit. It cannot be accidentally isolated.

## Spent Fuel Interim Storage

Each annual refueling visit discharges approximately one batch of spent fuel blocks. These are:

1. Removed from the core by the refueling machine (below grade)
2. Transferred to a shielded transfer container
3. Stored in the above-grade spent fuel bay pending collection

The spent fuel bay is sized for **two years' discharge** — providing a buffer if a collection visit is delayed. The TRISO blocks are air-cooled (decay heat is low enough at this point) in shielded dry storage. No water pool required.

At the next annual visit, the previously discharged batch is loaded into the transport container and removed from site to a central storage or disposal facility.

## Refueling Access

The reactor vessel top head is accessed from above via the maintenance hatch and crane. Refueling sequence:

1. Shut down reactor; allow short decay heat cool-down
2. Depressurise primary helium circuit; store helium in inventory cylinders
3. Open top head
4. Refueling machine removes discharged fuel blocks from designated zones; transfers to shielded storage
5. Fresh fuel blocks inserted into vacated positions; intermediate blocks shuffled
6. Top head closed; system leak-checked
7. Helium re-pressurised from inventory
8. Reactor restart

The entire operation is designed to be completed within a planned annual site visit. Fuel handling machinery is integral to the reactor vessel top closure — it is not brought to site each time.

## Hot-Climate Bolt-On

For sites with sustained high ambient temperatures, an extended air-cooled precooler module attaches to the side of the above-grade building. It is a conventional finned-tube air heat exchanger with increased face area. The helium piping connection is at the above-grade level — no excavation required for the bolt-on.

The bolt-on is sized for the specific site's worst-case ambient temperature. The nuclear island is unmodified.

## Multi-Unit Sites

A site can host multiple units in adjacent below-grade cavities. Units share:

- Grid connection infrastructure
- Site perimeter security
- Control room (one control room can monitor multiple units)
- Annual service team visit (all units refueled in sequence)

Units are otherwise independent — no shared safety systems, no shared primary helium circuits. A fault in one unit does not affect adjacent units.

## Minimum Site Requirements

| Requirement | Value | Notes |
|---|---|---|
| Plot area (per unit) | ~30 m × 30 m | Nuclear island + exclusion zone |
| Excavation depth | ~12–14 m | Rock or firm soil preferred |
| Grid connection | HV cable or overhead line | Standard industrial connection |
| Water supply | None required | Air-cooled throughout |
| Road access | Standard heavy industrial | For component delivery and fuel logistics |
| Exclusion zone | TBD — regulatory dependent | Expected to be very small given passive safety |

## Open Questions

- [ ] Exact below-grade depth: optimise chimney height vs. excavation cost (10 m vs 12 m vs 14 m)
- [ ] Cavity liner material and emissivity specification
- [ ] Spent fuel bay shielding thickness and container standard
- [ ] Refueling machine design: integral to vessel head or removable tool?
- [ ] Exclusion zone radius: requires source-term calculation from safety analysis (§07)
- [ ] Seismic qualification basis: site-independent envelope or site-specific?

---

*Previous: [10 · Fuel Cycle](10-fuel-cycle.md)*
