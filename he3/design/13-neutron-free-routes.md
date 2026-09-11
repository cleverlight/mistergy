# He-3 Programme - 13 Neutron-Free Routes

The reaction this programme is built on, ⁴He(γ,n)³He, produces a free 20 MeV-class neutron **by
construction**. That is not an engineering side effect to be shielded away: helium-3 has one fewer
neutron than helium-4, so removing a neutron is the reaction, and the neutron has to go somewhere.
Every surface it reaches accumulates activation, and the facility becomes a radiological object with a
decommissioning liability rather than an optical instrument.

This section asks whether the mission can be met without ever making a free neutron. **It can**, by
two independent routes, and the better of the two is also about 360 times more productive than the
route the set currently designs around and deletes the GeV accelerator entirely.

It does not change the production verdict. Nothing does; see [03-feasibility](03-feasibility.md) and
§5 below.

---

## 1. Why the current route cannot be made clean

| Channel | Threshold | Products | Neutron? |
|---|---|---|---|
| ⁴He(γ,n)³He | 20.578 MeV | ³He + n | **yes, it is the reaction** |
| ⁴He(γ,p)³H | 19.814 MeV | ³H + p | no, but gives tritium not helium-3 |

The proton channel opens 0.764 MeV **lower** and is therefore always open when the helium-3 channel
is, so a helium-4 target cannot be operated in a neutron-free window and cannot be operated in a
tritium-free one either. [00-summary](00-summary.md) §2 already records the second half of that; this
section records the first.

The neutron yield is one per reaction by definition. At the canonical rate of 4.29 x 10⁸ reactions/s
that is 4.29 x 10⁸ n/s, which [06-target-and-capture](06-target-and-capture.md) treats as a shielding
problem. It is a shielding problem, and it is also a permanent one: the activation inventory grows
monotonically for the life of the facility.

**So the question is not how to shield the neutron. It is which nucleus to point the machine at.**

---

## 2. The clean photonuclear window: lithium-7

Every threshold below is computed from AME atomic masses and reproduces the two helium-4 values in
[00-summary](00-summary.md) §2 exactly, which is the check that the arithmetic is right.

| Channel | Threshold | Products |
|---|---|---|
| **⁷Li(γ,t)⁴He** | **2.468 MeV** | **³H + ⁴He** |
| ⁷Li(γ,n)⁶Li | 7.251 MeV | first neutron channel |
| ⁷Li(γ,d)⁵He | 9.460 MeV | ⁵He is unbound and emits a neutron |
| ⁷Li(γ,p)⁶He | 9.974 MeV | |

**Between 2.468 and 7.251 MeV the triton channel is the only open particle channel in lithium-7.** A
photon in that window can do nothing to a ⁷Li nucleus except split it into a triton and an alpha, and
the triton beta-decays to helium-3 with a 12.32 year half-life. There is no neutron anywhere in the
chain, not as a branch and not as a contaminant, because there is no energetically open channel that
produces one.

That is a 4.78 MeV wide window, which is wide enough to sit comfortably inside with a Compton source
of a few percent bandwidth.

Three further advantages, and one condition.

- **The photon energy requirement collapses.** Threshold falls from 20.578 MeV to 2.468 MeV, so the
  inverse Compton electron energy falls from the 1.06 GeV in [00-summary](00-summary.md) §7 to roughly
  370 to 520 MeV for a 3 to 5 MeV photon, since E_γ ≈ 4γ²E_laser puts the electron energy on the
  square root of the photon energy. That is a materially easier wakefield stage.
- **It uses the cheap isotope.** Lithium-7 is 92.4% of natural lithium and is the residue left over
  after lithium-6 enrichment, which the [11-alternative-routes](11-alternative-routes.md) breeding
  route consumes. The two routes in this repository want opposite ends of the same separation plant.
- **The condition: the source must be band-limited.** Above 7.251 MeV the neutron channel opens and
  the window closes. This **disqualifies the bremsstrahlung route costed in
  [12-intensity-limits](12-intensity-limits.md) §6**, which produces a continuum spanning zero to the
  hot-electron energy and would drive every open channel at once. Neutron-free operation requires a
  quasi-monochromatic source, which is inverse Compton scattering, which is the programme's surviving
  justification anyway. **The operator's neutron requirement and the programme's remaining mission
  point the same way**, which is the most useful thing in this section.

The cost of the window is patience: the product is tritium, so a batch has to be held for years and
milked. That is the same economics as the lithium-6 route in
[11-alternative-routes](11-alternative-routes.md) and is not a new problem.

---

## 3. The two-helium-3 reaction, which does not have a clean window

The reaction that literally produces two helium-3 nuclei from one event exists:

```
  6Li + γ  ->  3He + 3H        threshold 15.794 MeV
                     3H -> 3He + e- + nu    (12.32 y)
```

One helium-3 immediately and a second after the triton decays, from a single photon, with no neutron
in the reaction itself. It is the cleanest-looking entry in the whole survey and it cannot be used.

| ⁶Li channel | Threshold | |
|---|---|---|
| ⁶Li(γ,d)⁴He | 1.474 MeV | dominant, and it makes nothing useful |
| ⁶Li(γ,p)⁵He | 4.433 MeV | ⁵He is unbound, emits a neutron |
| **⁶Li(γ,n)⁵Li** | **5.665 MeV** | **neutron channel, opens 10.1 MeV below the useful one** |
| ⁶Li(γ,t)³He | 15.794 MeV | the reaction wanted |

**Every channel that matters opens below the one that is wanted.** By the time a photon has enough
energy to make two helium-3 nuclei, it has had more than ten MeV of headroom in which to knock out a
neutron instead, and the deuteron channel has been open since 1.474 MeV. There is no window and no
way to make one, because thresholds are not a design variable.

Recorded here rather than omitted because it is the obvious thing to try and the reason it fails is
not obvious until the thresholds are laid out.

---

## 4. The better answer: stop using photons

The strongest neutron-free route abandons photodisintegration altogether.

```
  6Li + p  ->  4He + 3He        Q = +4.020 MeV
```

**Exothermic. No neutron. No tritium. Helium-3 directly, in the reaction, not after a decay.** It is
the only route in this repository that produces the product without a radioactive intermediate.

### 4.1 Why it suits this machine specifically

The array is a poor gamma source and a capable proton source. Target normal sheath acceleration
converts a few percent of an ultraintense pulse into multi-MeV protons from a thin foil, it operates
across the 10¹⁹ to 10²¹ W/cm² range [12-intensity-limits](12-intensity-limits.md) §3 and §4 show the
array covers, and it is among the best demonstrated capabilities in high-intensity laser physics.
**It wants the bottom of that range rather than the top**, which is the largest qualification on this
route and is §4.5 below.

**It deletes the whole gamma chain.** No wakefield stage, no GeV electron beam, no scattering laser
arm, no femtosecond synchronisation between two arms, no inverse Compton conversion at 10⁻⁴. Section
[05-gamma-source](05-gamma-source.md) describes a subsystem this route does not need, and
[00-summary](00-summary.md) §7 calls that subsystem the programme's missing piece.

### 4.2 Cross-section and yield

The bare astrophysical S-factor is S(0) = 3.52 ± 0.08 MeV·b, from R-matrix and polynomial fits in the
literature. Converting through σ(E) = (S/E) exp(-2πη) with a Sommerfeld parameter for p + ⁶Li:

| E (centre of mass) | E (lab) | σ |
|---|---|---|
| 0.5 MeV | 0.58 MeV | 143 mb |
| 1.0 MeV | 1.17 MeV | 223 mb |
| 2.0 MeV | 2.34 MeV | 250 mb |
| 3.0 MeV | 3.50 MeV | 239 mb |

**Of order 200 to 250 mb, against 1.3 mb for ⁴He(γ,n)³He: about 180 times larger.** This is an
extrapolation of a threshold S-factor to MeV energies and is an order-of-magnitude device rather than
a measurement; the measured excitation function exists and belongs in the Open questions below.

Thick-target yield in enriched ⁶Li metal at 0.46 g/cm³ (n = 4.61 x 10²² /cm³), taking σ flat at 200 mb
over the slowing-down path from E₀ down to 0.5 MeV:

| Proton energy | Range | Useful path | Yield per proton |
|---|---|---|---|
| 2 MeV | 163 µm | 149 µm | 1.4 x 10⁻⁴ |
| **3 MeV** | **334 µm** | **320 µm** | **3.0 x 10⁻⁴** |
| 5 MeV | 826 µm | 812 µm | 7.5 x 10⁻⁴ |

### 4.3 The rate

Chain: array average power, times TNSA conversion efficiency, divided by mean proton energy, times
thick-target yield. TNSA laser-to-proton conversion is 1 to 15% in the record; 5% is the working
figure and the band is carried.

| Configuration | TNSA η | Reactions/s | He-3 per year | Shortfall vs 50 g/day |
|---|---|---|---|---|
| 5 kW array | 2% | 6.24 x 10¹⁰ | 9.86 x 10⁻⁶ g | 1.9 x 10⁹ |
| **5 kW array** | **5%** | **1.56 x 10¹¹** | **2.47 x 10⁻⁵ g** | **7.4 x 10⁸** |
| 5 kW array | 10% | 3.12 x 10¹¹ | 4.93 x 10⁻⁵ g | 3.7 x 10⁸ |
| 50 kW array (100 x Dira) | 5% | 1.56 x 10¹² | 2.47 x 10⁻⁴ g | 7.4 x 10⁷ |

**At equal average power this is 364 times the canonical inverse Compton rate** of 4.29 x 10⁸
reactions/s in [00-summary](00-summary.md) §4.2, and it is the highest figure anywhere in this
repository for the laser route.

### 4.4 The conditions, one of which is safety-critical

- **The lithium must be highly enriched in lithium-6, and this is not an efficiency question.**
  ⁷Li(p,n)⁷Be has a lab threshold of **1.880 MeV** and is one of the standard laboratory neutron
  sources. Natural lithium is 92.4% ⁷Li, so a natural-lithium target struck by the protons this route
  needs is not a helium-3 source with a neutron problem, it is a neutron source with a helium-3
  contaminant. **Enrichment is the neutron control, and residual ⁷Li sets the neutron floor.**
- **Proton energy must stay below 5.920 MeV.** ⁶Li(p,n)⁶Be opens there. TNSA spectra are exponential
  with a high-energy tail, so the tail has to be either suppressed or accepted as a neutron source,
  and this is a real constraint on the target design rather than a footnote.
- **⁷Be is produced by ⁶Li(p,γ)⁷Be**, Q = +5.607 MeV, decaying by electron capture with a 53.2 day
  half-life and a 478 keV gamma. Radiative capture is orders of magnitude weaker than the (p,α)
  channel, so this is an inventory to account for rather than a hazard, and it decays away in about a
  year. It is not activation of structure.
- **Deuterium contamination of the TNSA foil** drives ⁶Li(d,n)⁷Be. TNSA protons come from
  hydrocarbon and water contamination layers, so foil preparation is a neutron-control step.

### 4.5 The array's design intensity is sixty times too high

TNSA does not produce a monoenergetic beam. The proton spectrum is quasi-exponential with a slope
temperature of the order of the hot-electron temperature, so **the focal intensity sets the proton
spectrum**, and this route cares about the proton spectrum in a way the gamma route never did. §4.4
caps proton energy at 5.920 MeV. What the array delivers at its design focus is not close to that.

Hot-electron temperature from the ponderomotive scaling of
[12-intensity-limits](12-intensity-limits.md) §5, with the fraction of an exponential proton spectrum
lying below each neutron threshold taken as 1 - exp(-E_th / T_p) and T_p set equal to T_hot:

| Configuration | Focused intensity | a₀ | T_hot | Below 5.920 MeV | Below 1.880 MeV |
|---|---|---|---|---|---|
| 100 channels, coherently combined, f/1 | 3.7 x 10²¹ W/cm² | 53.5 | 18.83 MeV | 27% | 10% |
| 10 channels, coherently combined, f/1 | 3.7 x 10²⁰ W/cm² | 16.9 | 5.63 MeV | 65% | 28% |
| **one channel at 500 mJ, f/1** | **6.2 x 10¹⁹ W/cm²** | **6.9** | **2.04 MeV** | **95%** | **60%** |

The single-channel row is one Dira 1000-1 at the 500 mJ, 1 kHz point
[12-intensity-limits](12-intensity-limits.md) §4 adopts, not the 1 J point of its §3.2 table, which
is a peak-power figure the box cannot sustain at 1 kHz. That is why this row reads 6.2 x 10¹⁹ where
§3.2 reads 1.2 x 10²⁰ for the same hardware.

**At the array's design focus roughly three protons in four are above the ⁶Li(p,n)⁶Be threshold**,
which inverts the reason this route was chosen: the reaction channel is neutron-free and the proton
source is not. [12-intensity-limits](12-intensity-limits.md) §5 reports 18.83 MeV as the array's
headline achievement because the gamma route needs 20.578 MeV. This route needs about 2 MeV, so
18.83 MeV is not a margin over the requirement but an overshoot of a factor of nine.

**Correcting it costs nothing optically.** Focal intensity goes as the inverse square of the focal
ratio ([12-intensity-limits](12-intensity-limits.md) §2.1), so the required derate is bought with a
longer focal length and nothing else.

```
  intensity ratio    = 3.7 x 10²¹ / 6.2 x 10¹⁹ = 60      → the design focus is 60x too intense
  focal ratio needed = 7.75 x 7.75 = 60.06               → f/1 becomes f/8
  cross-check        = 100 x 0.6 / 60 = 1.0              → the array defocused 60x is one channel at f/1
```

The array focused at f/8 rather than f/1 puts 6.2 x 10¹⁹ W/cm² on one target while keeping all 100
channels, all 50 kW of average power, and one foil per shot. No exotic optic is involved and no power
is lost; the light lands on a spot about eight times wider. The single-channel row above is the same
operating point reached from the other direction, which is what the cross-check states.

**It is not free in rate, and the cost has two parts.**

- **The softer spectrum costs about 30% of the yield per unit of beam energy**, from the §4.2 table:

```
  three MeV protons = 3.0 x 10⁻⁴ / 3 = 1.0 x 10⁻⁴ reactions per MeV of beam
  two MeV protons   = 1.4 x 10⁻⁴ / 2 = 7.0 x 10⁻⁵ reactions per MeV of beam
  ratio             = 7.0 x 10⁻⁵ / 1.0 x 10⁻⁴ = 0.70
```

  Against that, a 2 MeV operating point sits below the 1.880 MeV ⁷Li(p,n)⁷Be threshold for 60% of its
  protons rather than 10%, so the enrichment requirement of §4.4 eases in proportion.
- **TNSA conversion efficiency falls with intensity by an amount this section cannot state.** The 1 to
  15% band in §4.3 is drawn from experiments spanning orders of magnitude in intensity, and the high
  figures come from the high-intensity end of it. Moving from 3.7 x 10²¹ to 6.2 x 10¹⁹ W/cm² moves
  down that band, and the 5% working figure should not be assumed to survive. This is now the second
  largest uncertainty in the section, after the excitation function itself.

### 4.6 What the route deletes, which is more than the gamma chain

§4.1 says this route deletes the gamma chain. §4.5 extends that, and the extension is uncomfortable
because it reaches the part of the programme most worth keeping. The argument is three steps.

- **Coherent combining buys radiance and nothing else.**
  [12-intensity-limits](12-intensity-limits.md) §1.2 establishes this as a theorem: phase-locked
  beamlets diffract as one aperture, so focal intensity rises by N² against one beamlet and by N
  against the same beamlets combined incoherently. Total delivered power is N x P in every case.
- **This route wants average power and specifically does not want focal intensity.** The rate chain
  in §4.3 is average power, times conversion efficiency, times yield. Focal intensity enters only
  through the proton spectrum, and §4.5 shows it enters with the wrong sign: more intensity is more
  neutrons.
- **So the second factor of N is not merely unused, it is deliberately discarded.** Defocusing to f/8
  throws away the factor of 60 that coherent combining exists to deliver. An incoherent array of the
  same hundred lasers, focused onto the same spot, reaches the same operating point.

**For this reaction the array reduces to N independent lasers pointed at a common target.** No phase
locking, no pairwise pick-off sensing, no closed-loop phase control, and therefore no requirement for
the alignment work in [07-ai-control](07-ai-control.md).

Two things follow, and they point in opposite directions.

- **This is not a verdict on the combining or the control architecture.**
  [03-feasibility](03-feasibility.md) has already reassigned the mission: the surviving justification
  for this machine is a quasi-monochromatic gamma source, and that mission needs the intensity, the
  coherence and the control. Adopting ⁶Li(p,α)³He removes helium-3 production as a justification for
  coherent combining. It does not remove the justification.
- **It raises a question this set has not asked, which is why a laser at all.** If the requirement is
  protons at about 2 MeV, and neither intensity nor coherence nor pulse duration is wanted, then TNSA
  is being asked for the one thing it is worst at, which is time-averaged current.

Expressed as a current, the §4.3 rate chain at 5 kW and 5% delivers 250 W of protons at 3 MeV:

```
  protons per second = 250 / (3 x 1.602 x 10⁻¹³) = 5.20 x 10¹⁴
  beam current       = 5.20 x 10¹⁴ x 1.602 x 10⁻¹⁹ = 8.33 x 10⁻⁵ A
```

| Proton source | Current | Beam power at 3 MeV | Reactions/s | He-3 per year |
|---|---|---|---|---|
| 5 kW array, TNSA at 5% | 83 µA | 250 W | 1.56 x 10¹¹ | 2.47 x 10⁻⁵ g |
| 50 kW array, TNSA at 5% | 833 µA | 2.5 kW | 1.56 x 10¹² | 2.47 x 10⁻⁴ g |
| **A 1 mA radio-frequency quadrupole** | **1,000 µA** | **3 kW** | **1.87 x 10¹²** | **2.96 x 10⁻⁴ g** |
| A 100 mA machine | 100,000 µA | 300 kW | 1.87 x 10¹⁴ | 2.96 x 10⁻² g |

**One ordinary 1 mA proton accelerator outproduces the entire hundred-amplifier array**, which is a
seven or eight figure capital item, and it converts wall power to protons at tens of percent rather
than at the few percent TNSA manages. Continuous-wave machines of the 100 mA class have been built;
LEDA at Los Alamos and the IFMIF/LIPAc injector are where to look for the demonstrated current.

The comparison is not one-sided and should not be quoted as though it were. An accelerator brings an
ion source, an RF plant, a vacuum system and its own shielding, it delivers a beam that has to be
swept across a target it is heating, and it makes no gammas, so it cannot serve the gamma-source
mission that is the reason this machine exists at all. For a **demonstration** of ⁶Li(p,α)³He on
hardware the programme already owns, TNSA costs no new capital and that is a real argument. For
production it does not compete, and neither does anything else. The scale the mission asks for, at
50 g/day and the §4.2 thick-target yield:

```
  product atoms per second      = 50 / 3.016 x 6.022 x 10²³ / 86,400 = 1.155 x 10²⁰
  protons per second            = 1.155 x 10²⁰ / 3.0 x 10⁻⁴ = 3.85 x 10²³
  beam current                  = 3.85 x 10²³ x 1.602 x 10⁻¹⁹ = 6.17 x 10⁴ A
  beam energy per product atom  = 3 / 3.0 x 10⁻⁴ = 1.0 x 10⁴ MeV
```

**61.7 kA of protons at 3 MeV, or 10 GeV of beam energy per helium-3 atom.** The highest-current
continuous proton machines ever built are of order 100 mA, so the requirement is about 617,000 of
them run in parallel. That figure is a property of the reaction and the stopping power, not of the proton source, so
the choice of source moves the instrument and never the verdict.

---

## 5. What this does not change

**The production verdict is unmoved and this section must not be read as moving it.** The best
neutron-free rate here is 2.47 x 10⁻⁴ g/yr at 50 kW, which is short of 50 g/day by 7.4 x 10⁷. The
levers analysis in [03-feasibility](03-feasibility.md) Part 3 applies unchanged: the cross-section is
nuclear data, the target absorbed fraction and the conversion efficiency are both bounded above by 1,
and only average power is unbounded and it is unbounded at a price nobody will pay.

The clearest way to say it: **2.47 x 10⁻⁵ g/yr of helium-3, at the $10,000 per gram working reference
of [00-summary](00-summary.md) §9, is about 25 cents of product per year** from a facility whose laser
array alone is a seven- or eight-figure capital item. Across the $7,400 to $14,900 per gram band that
reference sits in, the range is 18 to 37 cents, which changes nothing. The lithium-6 breeding route in
[11-alternative-routes](11-alternative-routes.md) remains better by five orders of magnitude and
remains the best production route this repository has assessed. That route is a recorded finding
rather than a live recommendation: the operator closed the production mission on 2026-09-11, so
nothing in this section is work the programme intends to do.

What does change:

| Claim | Status |
|---|---|
| A neutron-free route to helium-3 exists | **Yes, two.** ⁷Li(γ,t) in a 2.468 to 7.251 MeV window, and ⁶Li(p,α) |
| The best of them needs no GeV accelerator | **Yes.** ⁶Li(p,α)³He is proton-driven and exothermic |
| It is the highest laser-route rate in the repository | **Yes**, 364x the canonical inverse Compton figure |
| Neutron-free operation forbids a bremsstrahlung continuum | **Yes**, which reverses [12](12-intensity-limits.md) §6 for this mission |
| The array's design focus suits this route | **No**, §4.5. It is 60x too intense and three protons in four exceed the ⁶Li(p,n)⁶Be threshold |
| Coherent combining is required by this route | **No**, §4.6. It buys radiance, which this route discards; the gamma-source mission still requires it |
| A laser is the natural proton source for this route | **No**, §4.6. A 1 mA accelerator outproduces the whole array, and the verdict moves either way |
| The reaction channel decision in [00-summary](00-summary.md) §11 | **Now open.** It is a scope decision and is not taken here |
| The production verdict | **Unchanged.** Short by 10⁷ to 10⁹ |

---

## Open questions

- [ ] **The ⁶Li(p,α)³He excitation function has been extrapolated, not read.** Measurements exist
      across 1.0 to 2.6 MeV and below 0.5 MeV. The measured curve should replace the S-factor
      extrapolation in §4.2 before any rate here is quoted elsewhere, and it is the single largest
      uncertainty in this section.
- [ ] **The ⁷Li(γ,t)⁴He cross-section in the 2.468 to 7.251 MeV window is not established here at
      all.** It sits below the giant dipole resonance so it is expected to be small, possibly below
      the 1.3 mb of the helium-4 route, which would cost the window most of its attraction. Nothing in
      §2 should be relied on until this number exists.
- [ ] **TNSA conversion efficiency at 1 kHz is assumed from single-shot literature.** Every quoted
      TNSA efficiency comes from low-repetition-rate experiments with individually mounted foils. A
      1 kHz machine needs a renewable target at 1000 foils per second, and whether the efficiency
      survives that is unknown and is probably the hardest engineering problem in this route.
- [ ] **The neutron floor set by residual ⁷Li has not been computed.** It is the number that decides
      whether "neutron-free" is literal or merely "a few orders of magnitude better", and it follows
      directly from the enrichment fraction and the ⁷Li(p,n)⁷Be cross-section.
- [ ] **TNSA conversion efficiency at the defocused operating point is unknown, and §4.5 requires
      that operating point.** The 5% working figure in §4.3 comes from the high-intensity end of the
      published band, and the neutron window needs the array run at 6.2 x 10¹⁹ W/cm² rather than
      3.7 x 10²¹. Every rate in §4.3 is staged on an efficiency measured somewhere this route does
      not operate.
- [ ] **Whether a conventional proton accelerator is the correct instrument has not been assessed.**
      §4.6 shows a 1 mA radio-frequency quadrupole outproducing the hundred-channel array. That is a
      comparison, not a costing, and it has to be one before the reaction channel is decided.
- [ ] **Helium-3 extraction from a solid lithium target is undesigned.** [06-target-and-capture](06-target-and-capture.md)
      designs for a cryogenic helium fluid, which is a different problem from recovering helium
      implanted in a metal at a few hundred micrometres depth.
- [ ] **Whether the programme adopts any of this is not decided here.** The reaction channel is a Key
      Decision in [00-summary](00-summary.md) §11 and changing it restages sections 02, 05, 06 and 09.
      That is a scope decision for the operator.
