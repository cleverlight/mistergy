# 09 · Hydrogen Production

## Architecture Decision: HTE as Electrical Secondary

Hydrogen production is a **secondary capability**, not a primary mission. The reactor and Brayton cycle are designed for electricity. Hydrogen is produced by diverting generator output to electrolyzer modules when hydrogen demand exists; otherwise the full output goes to the grid. The nuclear island is identical in both operating modes.

**Why not sulfur–iodine (S–I) thermochemical cycle:** S–I requires delivering ~850 °C heat to a corrosive acid process plant via an intermediate heat exchanger. We eliminated the IHX precisely because it adds a high-temperature, high-complexity component. Adding it back in for hydrogen contradicts the design philosophy. S–I also operates at much lower technology readiness than SOEC. It is not pursued further here.

## High-Temperature Electrolysis (HTE)

Solid oxide electrolyzer cells (SOECs) split steam into hydrogen and oxygen electrochemically at elevated temperature:

```
H₂O  →  H₂  +  ½O₂        (at 700–900 °C, electrically driven)
```

At high temperature, some of the dissociation energy is supplied as heat rather than electricity, improving electrical efficiency relative to room-temperature electrolysis. A conventional alkaline or PEM electrolyzer requires ~50 kWh/kg H₂. SOEC at operating temperature targets ~35–40 kWh/kg H₂ — a ~25–30% improvement in electrical efficiency.

## Integration with the Brayton Cycle

The nuclear island requires **no modification** for hydrogen mode. The integration points are all on the conventional side:

```
  GENERATOR output
        │
        ├──── [electricity mode] ──── GRID
        │
        └──── [hydrogen mode] ──────  ELECTROLYZER MODULES
                                            │
                                     Steam in, H₂ + O₂ out
```

### Waste Heat Recovery (Optional Enhancement)

The Brayton cycle precooler rejects heat to the environment at ~150–200 °C. In electricity-only mode this heat is wasted. In hydrogen mode, this heat can preheat the electrolyzer feedwater — reducing the electrical energy needed to raise steam to SOEC operating temperature.

This requires only a water-side heat exchanger between the precooler coolant loop and the electrolyzer feedwater supply — conventional technology, completely outside the high-pressure helium circuit. No changes to the nuclear island or Brayton cycle.

```
  PRECOOLER  ──(He, ~150°C)──►  [water-side HX]  ──►  preheated feedwater to SOEC
```

Estimated benefit: preheating feedwater from ambient to ~100–150 °C recovers heat that would otherwise be rejected, modestly improving overall hydrogen production efficiency. The gain is incremental but costs essentially nothing in design complexity.

## Operating Modes

| Mode | Generator output | Electrolyzer | Grid output |
|---|---|---|---|
| Full electricity | 100% | Off | 100% |
| Full hydrogen | 100% | 100% of generation | 0% (or grid-import for parasitic loads) |
| Split | Variable | Partial load | Remainder to grid |

SOEC stacks are inherently modular — electrolyzer capacity is sized independently of the reactor and can be expanded by adding modules. The reactor operates at constant full power in all modes; the electrolyzer is the variable element.

## Hydrogen Output Estimate

At 50 MW(e) net generation and 38 kWh/kg H₂ (SOEC with preheated feedwater):

- Full hydrogen mode: **~1,300 kg H₂/day** (~30 MW(e) equivalent chemical energy)
- This is approximately the output of a mid-scale steam methane reformer — but carbon-free

## Technology Readiness

SOEC technology is maturing rapidly. Key comparison:

| | SOEC (HTE) | S–I thermochemical |
|---|---|---|
| TRL (2025) | 5–7 (pilot to pre-commercial) | 3–4 (laboratory) |
| Minimum heat temp needed | None (electricity only) | ~850 °C (IHX required) |
| Corrosive chemistry | No | Yes (H₂SO₄, HI) |
| Nuclear island changes | None | Requires IHX in primary |
| Maturity path | Clear (SOEC is commercial at small scale) | Long — material and process challenges remain |

## Safety Considerations

- Hydrogen is produced and stored outside the nuclear island — the nuclear safety boundary is unaffected
- Hydrogen inventory management follows industrial gas plant codes (NFPA 2, ISO standards)
- Oxygen co-product is a secondary hazard — separation and venting in open air or utilisation as a product
- No hydrogen is present in the helium circuit

## Open Questions

- [ ] Electrolyzer capacity: size to absorb full generator output, or a fixed fraction?
- [ ] Hydrogen storage: gaseous, liquefied, or direct pipeline connection to industrial user?
- [ ] Precooler waste heat recovery: include in baseline or leave as a future option?

---

*Previous: [08 · Power Conversion](08-power-conversion.md) | Next: [10 · Fuel Cycle](10-fuel-cycle.md)*
