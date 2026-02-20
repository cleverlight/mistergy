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
  PRIMARY CIRCUIT (4 MPa, up to 950 °C)
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

**Tritium management** requires a layered approach because tritium passes through standard molecular sieves and ambient charcoal traps without being captured:

1. **Reduce generation at source — graphite specification.** Tritium in this reactor is produced primarily by the reaction Li-6(n,α)T, where Li-6 is a trace impurity in the graphite moderator. Li-6 is 7.6% of natural lithium. By specifying graphite with lithium content below 0.1 ppm, tritium generation is reduced to a very small fraction of what standard graphite would produce. This is the primary control — addressed in the graphite section below.

2. **Lower operating pressure.** At 4 MPa (vs. a higher-pressure alternative), tritium partial pressure in the circuit is lower, reducing the driving force for permeation through metal walls by ~√(4/7) ≈ 24% compared to 7 MPa. Additionally, the smaller total helium inventory means less total tritium dissolved in the circuit.

3. **Cold trap (cryogenic charcoal, ~−180 °C).** Tritium as HT or T₂ adsorbs onto activated charcoal at liquid nitrogen temperatures. The purification system cryogenic stage captures a fraction of the tritium on each pass through the slip-stream.

4. **Periodic monitored purge.** A small fraction of the helium inventory is periodically purged to a tritium hold-up and decay tank. Given the 12.3-year half-life, purged inventory is managed by dilution and decay rather than treatment.

5. **Continuous monitoring.** Tritium-specific sensors (ionisation chambers or liquid scintillation sampling) at the purification outlet and in the building atmosphere provide ongoing measurement and early warning of elevated levels.

Tritium remains the most operationally demanding impurity. The design manages it primarily through graphite specification (reducing generation) rather than through circuit design, which is the correct order of priority.

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

At 4 MPa, the primary circuit helium inventory is approximately 57% of what it would be at 7 MPa for the same circuit volume — a direct consequence of the lower operating pressure. This reduces the cost of the initial helium charge, the volume of high-pressure storage required, and the total tritium inventory dissolved in the circuit at any time.

During refueling, the circuit is depressurised — helium must be recovered rather than vented (both economic and radiological reasons).

The **helium inventory system** consists of:
- High-pressure storage cylinders (~30 MPa) for compressed helium storage during shutdown
- A recovery compressor to transfer helium from primary circuit to storage
- Re-pressurisation path back to primary circuit at restart
- Make-up supply for topping-up losses and providing fresh helium after purging

This system is located above grade in the main building. The helium in storage is cool and has had time for Ar-41 to decay before personnel access is required.

## Graphite

### Role

Nuclear-grade graphite performs four functions simultaneously in this design:

1. **Neutron moderator** — thermalises fast fission neutrons to the thermal energies where U-235 fissions efficiently
2. **Structural material** — fuel blocks, reflector blocks, and core support are all graphite
3. **Thermal flywheel** — the large graphite heat capacity slows temperature transients and gives passive safety margin
4. **Primary tritium control point** — lithium impurity content governs tritium generation rate

### Specification: Low-Lithium Nuclear Grade

**Lithium content: < 0.1 ppm (by mass)**

This is the primary tritium control measure. Tritium generation in the core is dominated by the Li-6(n,α)T reaction:

```
  Li-6  +  n  →  He-4  +  T        (thermal cross-section: 940 barns)
```

Li-6 is 7.6% of natural lithium. Reducing graphite lithium content from a typical ~0.5 ppm to < 0.1 ppm reduces tritium generation by a factor of ~5. Commercially available nuclear graphite grades can meet this specification:

| Grade | Manufacturer | Li content | Notes |
|---|---|---|---|
| IG-110 | Toyo Tanso (Japan) | < 0.1 ppm | Used in HTTR and HTR-10; well-characterised |
| IG-430 | Toyo Tanso | < 0.1 ppm | Higher strength variant |
| NBG-18 | SGL Carbon (Germany) | ~0.1–0.2 ppm | Large-grain, good isotropy |

IG-110 is the baseline candidate — it has the most extensive irradiation database from HTTR and HTR-10 operation, directly applicable to this design.

### Other Impurity Concerns

Beyond lithium, nuclear graphite purity matters for neutron economy and activation:

- **Boron** (strong neutron absorber): < 0.5 ppm — high boron content would significantly parasitically absorb neutrons and reduce k-effective
- **Nitrogen**: low N content reduces ¹⁴C production
- **Sulphur, chlorine**: avoid — activate to produce problematic radioisotopes or attack graphite at high temperature

Nuclear-grade graphite specifications address all of these. The lithium limit is the additional constraint beyond standard nuclear graphite requirements.

### Irradiation Behaviour

Graphite undergoes dimensional changes under fast neutron irradiation — initially shrinking, then expanding at higher fluence. The change depends on temperature and fast neutron dose. This must be accounted for in:

- Fuel block and reflector block clearances (gaps must accommodate dimensional change without jamming)
- Stress analysis of restrained components
- Reflector replacement schedule (outer reflector blocks see lower flux and change slowly; inner reflector blocks see higher flux)

Detailed irradiation behaviour data for IG-110 up to high fluence is available from HTTR operation — a key reason it is the preferred grade.

### Wigner Energy

Fast neutron irradiation displaces carbon atoms from their lattice positions, storing energy (Wigner energy). Below ~300 °C, this energy accumulates. Above ~300 °C, it anneals continuously. Since our graphite operates well above 300 °C throughout the core, **Wigner energy is not a concern during normal operation** — it continuously anneals. It is a relevant consideration only for the outer reflector blocks that run at lower temperatures, and for storage and disposal of removed graphite blocks.

## Other Materials (Stub)

The following material topics remain to be developed:

- **Graphite:** irradiation behaviour detail, reflector replacement schedule (grade selection above)
- **TRISO coatings:** SiC layer integrity at high burnup and temperature
- **Reactor pressure vessel:** material selection and temperature limits for an air-cooled vessel (vessel outer surface is cooler than in water-cooled designs — this is an advantage)
- **Control rods and reserve shutdown:** B₄C absorber, graphite sleeve, SiC composite spine
- **Recuperator (PCHE):** material selection for high-pressure He-He service at 500–800 °C

---

*Previous: [05 · Thermal-Hydraulics](05-thermal-hydraulics.md) | Next: [07 · Safety](07-safety.md)*
