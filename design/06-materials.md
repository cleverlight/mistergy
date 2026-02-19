# 06 · Materials

## Helium Chemistry and Purification

### Why Helium Does Not Activate

Helium-4 has a neutron capture cross-section of approximately **0.007 barns** — orders of magnitude smaller than any structural metal or competing coolant. A helium atom passing through the reactor core does not become radioactive. This is a fundamental advantage, not an incidental one:

| Coolant | Primary activation product | Half-life | Consequence |
|---|---|---|---|
| Helium-4 | None (He-4 → He-5 unstable, immediate decay) | — | Coolant itself is non-radioactive |
| Sodium | Na-24 | 15 hr | Strong gamma source; circuit highly radioactive |
| CO₂ | Various; CO₂ also becomes corrosive | — | Activated and chemically aggressive |
| Water | O-16 → N-16 (in coolant) | 7.1 s | Short-lived but high-energy gamma |

Helium was selected partly for this reason. The primary helium circuit in this design — including the turbomachine, recuperator, and precooler — does not become a major radiation source from coolant activation.

### What Does Activate: Impurities

The activation products that do arise come not from helium but from trace impurity gases carried in it. Keeping these impurities low is therefore both a **radiological** and a **chemical** protection requirement.

**Radioactive species from impurities:**

| Impurity | Reaction | Product | Half-life | Concern |
|---|---|---|---|---|
| Oxygen (trace) | O-16(n,p) | N-16 | 7.1 s | High-energy gamma during operation; gone in seconds after shutdown |
| Argon (trace) | Ar-40(n,γ) | Ar-41 | 1.83 hr | Circulates in helium; shielding needed around turbomachine |
| Lithium in graphite | Li-6(n,α) | Tritium (H-3) | 12.3 yr | Enters helium; long-lived contamination management concern |
| TRISO failure (fission gas) | — | Kr-85, Xe-133 | Days–years | Early warning signal; normal TRISO integrity keeps this near zero |

**Chemical impurities (not radioactive, but material-attack risks):**

| Impurity | Attack mechanism | Threshold |
|---|---|---|
| Moisture (H₂O) | C + H₂O → CO + H₂ | Significant above ~700 °C |
| Carbon dioxide (CO₂) | C + CO₂ → 2CO (Boudouard) | Significant above ~700 °C |
| Oxygen (O₂) | Direct graphite oxidation | Significant above ~400 °C |

At 950 °C core outlet, even trace moisture will attack graphite. The purification system is therefore a **primary safety system**, not a secondary utility.

### Helium Purification System

A continuous **slip-stream purification loop** processes ~1–5% of the main helium flow at all times. It operates at reduced temperature and pressure, treating the helium before returning it to the primary circuit.

```
  PRIMARY CIRCUIT (7 MPa, up to 950 °C)
         │
         ├──── 1–5% slip-stream ────►  PURIFICATION TRAIN  ────► return
         │
         └──── 95–99% main flow ─────────────────────────────────────►
```

**Purification train stages, in order:**

1. **Cooler** — brings slip-stream from circuit temperature to ~40 °C; most moisture condenses
2. **Catalytic oxidiser** — converts CO, H₂, and hydrocarbons to CO₂ and H₂O over a Pd/Al₂O₃ catalyst
3. **Molecular sieve dryer** — adsorbs H₂O and CO₂ (regenerable)
4. **Activated charcoal trap (ambient)** — removes heavy hydrocarbons
5. **Cryogenic charcoal trap (~−180 °C)** — adsorbs Ar, Kr, Xe, N₂; this is where Ar-41 and fission gases are captured
6. **Return to circuit** — purified helium at circuit pressure

The cryogenic trap is periodically regenerated (warmed, impurities vented to a hold-up tank for decay). Ar-41 decays to stable Ca-41 within ~24 hours of being held.

**Tritium management** is handled separately. Tritium passes through molecular sieves and charcoal at normal temperatures. Options include:
- Isotopic exchange: react T₂ with oxygen to form HTO, then absorb with molecular sieves
- Periodic purge of a small helium inventory fraction to a tritium hold-up and decay system
- Continuous monitoring with tritium-specific sensors; action on threshold

Tritium is the most operationally demanding impurity because of its long half-life and small molecular size (it can permeate through metal walls at high temperature). Keeping the primary circuit at high pressure minimises outward permeation.

### Helium Specification

Primary circuit helium is specified at ultra-high purity, with particular attention to argon content:

| Impurity | Maximum allowable | Rationale |
|---|---|---|
| H₂O | < 0.1 ppm (vol) | Graphite oxidation prevention |
| O₂ | < 0.1 ppm | Graphite oxidation prevention |
| CO₂ | < 0.5 ppm | Boudouard reaction prevention |
| N₂ | < 1 ppm | N-16 and C-14 activation precursor |
| Ar | < 0.1 ppm | Ar-41 activation limitation |
| Hydrocarbons (total) | < 0.1 ppm | Pyrolysis deposit prevention |

Ultra-pure helium meeting these specifications is commercially available from major industrial gas suppliers. The argon specification in particular — standard commercial helium contains ~5 ppm Ar — requires specifying a purified grade, which is available.

### Helium Purity and the Turbomachine

Because the turbomachine is inside the primary helium circuit (direct Brayton), every component wetted by helium must be compatible with the purity requirements:

- **Magnetic bearings** — mandatory. Oil-lubricated bearings would contaminate the helium with hydrocarbons, which pyrolyse at high temperatures and deposit carbon on turbine blades and heat exchanger surfaces. This is not optional.
- **Shaft seals** — labyrinth seals with a purified helium buffer gas seal prevent leakage both inward (air) and outward (radioactive helium) without introducing a seal fluid.
- **Ceramic blisk surface** — SiC has negligible outgassing at operating temperatures in helium. No surface treatment or coating required.
- **No lubricants, adhesives, or polymers** in the primary circuit — all materials are metals, ceramics, or carbon-based materials specifically qualified for helium service.

### Fission Gas Monitoring: Early Warning System

Even with intact TRISO coatings, a small statistical fraction of fuel particles (typically < 10⁻⁵ of all particles) may have coating defects or fail at high burnup. Fission gases (primarily Kr-85 and Xe-133) released from these particles appear in the helium circuit.

Continuous **on-line gas sampling and gamma spectrometry** at the purification slip-stream outlet monitors for:
- Rising Kr-85 or Xe-133 activity → indicates increasing TRISO failure fraction
- Sudden step-change → potential fuel block damage or handling accident
- Isotopic ratios → can indicate whether release is from fresh or aged failures

This monitoring system provides early warning of fuel integrity issues well before any safety threshold is approached, and informs the fuel management strategy at refueling.

### Helium Inventory Management

At ~7 MPa, the primary circuit contains a large helium inventory. During refueling, the circuit is depressurised — helium must be recovered rather than vented (both economic and radiological reasons).

The **helium inventory system** consists of:
- High-pressure storage cylinders (~30–50 MPa) for compressed helium storage during shutdown
- A recovery compressor to transfer helium from primary circuit to storage
- Re-pressurisation path back to primary circuit at restart
- Make-up supply for topping-up losses and providing fresh helium after purging

This system is located above grade in the main building. The helium in long-term storage is cool and has had time for Ar-41 to decay — significantly reducing the dose rate to the inventory system.

## Other Materials (Stub)

The following material topics remain to be developed:

- **Graphite:** grade selection (IG-110, NBG-18, etc.), irradiation behaviour, oxidation limits
- **TRISO coatings:** SiC layer integrity at high burnup and temperature
- **Reactor pressure vessel:** material selection and temperature limits for an air-cooled vessel (vessel outer surface is cooler than in water-cooled designs — this is an advantage)
- **Control rods and reserve shutdown:** B₄C absorber, graphite sleeve, SiC composite spine
- **Recuperator (PCHE):** material selection for high-pressure He-He service at 500–800 °C

---

*Previous: [05 · Thermal-Hydraulics](05-thermal-hydraulics.md) | Next: [07 · Safety](07-safety.md)*
