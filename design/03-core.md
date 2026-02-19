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

## Core Dimensions and Power Rating

Core dimensions are set by the passive safety constraint: the annular geometry must be thin enough that decay heat conducted to the outer vessel wall keeps peak fuel temperature below 1600 °C in a depressurised loss-of-forced-cooling event.

This sets a characteristic **fuel annulus thickness of roughly 1 metre**, largely independent of core height. Power is then set by core height and power density.

Thermal power is currently **TBD** — a sizing study is needed. The likely range for a factory-fabricable, truck-shippable unit is 100–300 MW(th). This is the next major parameter to fix.

## Open Questions

- [ ] Thermal power rating — needs sizing study against passive safety constraint
- [ ] Fuel block channel geometry: baseline circular holes vs. optimised profiles — when to make this choice?
- [ ] Control rod count and worth distribution in inner reflector
- [ ] Enrichment zoning: uniform to start, but at what cycle length does zoning become necessary?
- [ ] Number of fuel columns in the annulus (function of final core diameter)

---

*Previous: [02 · Fuel](02-fuel.md) | Next: [04 · Neutronics](04-neutronics.md)*
