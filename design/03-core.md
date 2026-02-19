# 03 · Core Design

## Geometry: Annular Prismatic

The core is an **annular arrangement of hexagonal graphite fuel block columns**, with a solid inner reflector at the centre and a solid outer reflector at the periphery. The fuel lives in the annular region between them.

```
        OUTER REFLECTOR
      ┌─────────────────┐
      │  FUEL ANNULUS   │
      │   ┌─────────┐   │
      │   │  INNER  │   │
      │   │REFLECTOR│   │
      │   └─────────┘   │
      │  FUEL ANNULUS   │
      └─────────────────┘
        OUTER REFLECTOR

        (cross-section, not to scale)
```

The annular geometry is the key passive safety enabler: decay heat conducted outward through the outer reflector to the reactor cavity cooling system (RCCS) is sufficient to keep peak fuel temperature below the TRISO failure limit with no active systems. A solid-core design at the same power level cannot guarantee this.

## Fuel Block Design

Each fuel block is a **hexagonal graphite prism**, approximately 793 mm tall and 360 mm across flats — dimensions close to the GT-MHR standard, which have good operational heritage.

Each block contains two types of axial channels drilled through it:

- **Fuel channels:** larger-diameter holes containing cylindrical TRISO fuel compacts stacked end-to-end
- **Coolant channels:** smaller-diameter holes through which helium flows from top to bottom

The ratio of fuel channels to coolant channels per block, and their diameters, sets the local power density, peak fuel temperature, and coolant outlet temperature. This geometry is fixed at manufacture.

### The Manufacturing Opportunity

Traditional prismatic blocks use circular drilled holes — a manufacturing constraint, not a physics requirement. The coolant channel profile is a pure drilling artifact.

Advanced manufacturing opens this up. With precision graphite machining or near-net-shape graphite fabrication, coolant channel cross-sections can be optimised for heat transfer rather than ease of drilling. Options include:

- **Lobed or finned channel profiles** — increased surface area without increased flow resistance
- **Varying channel diameter with axial position** — wider channels in the high-flux (high heat generation) zone at core mid-plane, tighter at top and bottom
- **Integrated fuel compact seating** — co-manufactured tight-tolerance seats that locate compacts precisely, improving thermal contact and reducing inter-compact gaps

The principle: use manufacturing capability to do what extra components would otherwise do. Better channel geometry replaces a more complex thermal-hydraulic design.

## Reflector Design

### Inner Reflector

Solid graphite column at the core centre. Houses **control rod channels** — the inner reflector is the primary control rod location. This keeps control rods out of the fuel annulus, avoiding local flux depression in the fuel region and simplifying fuel block geometry.

### Outer Reflector

Solid graphite annulus surrounding the fuel. Functions as:

- Neutron reflector (reflects fast neutrons back into the fuel region, improving neutron economy)
- Thermal flywheel for decay heat conduction
- Structural support for fuel columns
- Mounting location for **reserve shutdown channels** (see below)

### Top and Bottom Reflectors

Graphite blocks above and below the active fuel region. The top reflector assembly includes penetrations for control rod drives and helium inlet. The bottom reflector is the helium outlet plenum.

## Control and Shutdown

### Control Rods

Located in the inner reflector. Boron carbide (B₄C) absorber sections on graphite or SiC composite spine assemblies. Inserted from the top by motor drives; gravity-assisted insertion on scram.

Having control rods entirely in the inner reflector (not in the fuel annulus) is operationally cleaner — no fuel blocks need to be designed around control rod channels.

### Reserve Shutdown System

A passive backup to control rods: small boron carbide spheres (absorber balls) stored above the core that flow by gravity into dedicated channels in the outer reflector on demand. No mechanical actuation required beyond opening a valve. This is a demonstrated feature of the HTTR design.

Two diverse, passive shutdown mechanisms with no shared failure modes. No active pumps or power required for either.

## Fuel Loading and Enrichment

With LEU (< 5% ²³⁵U), a single enrichment level across the core is the simplest starting point. Enrichment zoning — higher enrichment at the top and bottom of the fuel columns where flux is lower — can extend cycle length and flatten the axial power profile, but adds fuel fabrication complexity.

**Starting assumption:** uniform enrichment, accept the axial peaking factor, optimise later if the cycle length target demands it.

## Core Dimensions and the 20 m Envelope

Core dimensions are driven by two constraints working together:

1. **Passive safety** sets the fuel annulus thickness at ~1 m, independent of power. This ensures decay heat can conduct to the outer vessel wall and radiate to the RCCS without active cooling.
2. **The 20 m × 20 m × 20 m physical envelope** sets the maximum reactor vessel size, which in turn caps thermal power.

### Sizing Estimate

Assumed geometry:
- Inner reflector radius: 0.8 m
- Fuel annulus: 1.0 m → outer fuel radius: 1.8 m
- Outer reflector: 0.5 m → outer core radius: 2.3 m → core diameter: 4.6 m
- Reactor vessel outer diameter: ~5.5 m (vessel wall + insulation)
- Vessel total height: active height + ~8 m (top/bottom reflectors, plenums, control rod drives above)

Fuel annulus cross-sectional area:
π × (1.8² − 0.8²) = π × 2.6 ≈ **8.2 m²**

At a conservative power density of 4 MW(th)/m³:

| Thermal power | Active height | Total vessel height |
|---|---|---|
| 100 MW(th) | 3.0 m | ~11 m |
| 125 MW(th) | 3.8 m | ~12 m |
| 150 MW(th) | 4.6 m | ~13 m |

All three fit within the 20 m height envelope, with room for the cross-vessel connection to the turbomachine at the top. The turbomachine vessel (vertical, ~2.5 m dia, ~6 m tall) sits alongside within the 20 m footprint.

**Working assumption: 100–150 MW(th)**, to be fixed once a full sizing study is done. At ~47% cycle efficiency this delivers **~50–70 MW(e)** net to the grid.

## Open Questions

- [ ] Thermal power: 100 MW(th) vs 150 MW(th) — detailed envelope study needed
- [ ] Fuel block channel geometry: circular baseline vs. optimised profiles — manufacturing readiness decision
- [ ] Control rod count and worth distribution in inner reflector
- [ ] Enrichment zoning: uniform first, revisit if cycle length target requires it
- [ ] Number of fuel columns in the annulus (set by final core diameter)

---

*Previous: [02 · Fuel](02-fuel.md) | Next: [04 · Neutronics](04-neutronics.md)*
