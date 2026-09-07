# He-3 Programme - 12 Intensity Limits and the Commercial Laser Survey

This section answers three questions that the rest of the set assumes rather than derives. What does
constructive superposition of many beams actually buy, stated as a theorem rather than an intuition?
What is the ceiling on focused intensity, and how far below it does hardware you can order today sit?
And what temperature does that intensity correspond to, given that the originating idea is to heat a
point in space until helium-4 comes apart?

The short answers, because they are not what the intuition predicts. Superposition buys concentration
and nothing else, but concentration is exactly the thing that cannot be bought any other way, so the
architectural instinct is right. Focused intensity from an array of catalogue lasers lands at
3.7 x 10²¹ W/cm², which is about thirty times below the single-shot world record set by one
conventional petawatt laser in 2021, and about ten thousand times above it in photons per second.
And the temperature is **sufficient**: a hundred purchasable amplifiers, coherently combined, put the
hot-electron temperature at the focus at 18.83 MeV against a 20.578 MeV threshold, and a
five-hundred-channel version clears it outright.

That last finding is the reason this section exists. The programme does not fail on temperature. It
fails on rate, and the distinction matters because they are fixed by different quantities and only one
of them is available for purchase.

Companion to [03-feasibility](03-feasibility.md), which owns the verdict, and
[04-laser-array](04-laser-array.md), which owns the array specification. Nothing here changes either.

---

## 1. What superposition actually buys

The originating idea is that N beams meeting at a point interfere constructively and therefore heat
that point harder than N beams would separately. This is true, it is worth more than it first appears,
and it is worth less than the arithmetic suggests. Three statements, in order of how often they are
confused.

### 1.1 Energy is conserved, always

Constructive interference at one point requires destructive interference elsewhere. Integrated over
the focal plane, the power is the sum of the beam powers and no interference term survives. There is
no configuration of mirrors, phases or apertures that puts more than N x P watts through the focal
plane of N lasers of power P.

This is not a practical limit that better engineering erodes. It is conservation of energy, and it is
why [03-feasibility](03-feasibility.md) Part 2 is a bound rather than an estimate: the reaction rate
is set by delivered power divided by 20.578 MeV, and superposition does not change delivered power.

### 1.2 What it does buy is brightness, and nothing else can

The useful statement is about **radiance** (equivalently brightness, or power per unit etendue,
B = P / (A Ω)). Passive optics conserve radiance and cannot increase it. Adding N incoherent beams
adds N times the power, but it also adds N times the aperture-solid-angle product, so the radiance of
the ensemble is exactly the radiance of one beam. **An incoherent array of N lasers cannot be focused
to a smaller spot than one of its own members.** Pointing N ordinary lasers at a common target puts N
times the power into a spot the size a single beamlet already made, so focal intensity rises by N and
stops there. The aperture grew and bought nothing, because an incoherent ensemble does not diffract
as one aperture.

Mutually coherent beams are the exception, and they are the only exception. Phase-locked beamlets are
a single optical mode occupying the full tiled aperture, so the ensemble diffracts as one aperture of
area N x a: N times the power, N times the area, and a solid angle N times smaller. The radiance rises
by N, and that second factor of N is the whole of what coherence pays for.

**This is the whole justification for the architecture, and it is a strong one.** Coherent combining
is not a convenient way to add lasers together; it is the only physical mechanism by which many
ordinary sources can be made to behave as one extraordinary source. The instinct behind this programme
is correct at the level of the theorem.

### 1.3 The N versus N² arithmetic, and which one pays

[04-laser-array](04-laser-array.md) §3.3 works this through and nothing here restates it. The result,
for reference:

| Comparison | Focal intensity gain |
|---|---|
| Coherent array against **one beamlet** at the same sub-aperture | N² |
| Coherent array against **the same N beamlets combined incoherently** | N |
| Total power, all three cases | N x P, always |

The N² is real and it is the reason a tiled array focuses like a large telescope rather than like N
small ones. It is also the number that misleads, because a rate calculation is driven by N x P and
never by N². The correct summary is that coherence converts an aperture problem into a control
problem, and this programme exists because the control problem is the easier of the two.

### 1.4 The ceiling this sets

An array of total aperture A and total power P focuses exactly as well as a single monolithic laser of
aperture A and power P, and never better. **The array never beats the equivalent monolith on physics.**
What it beats is what can be built, cooled, repaired and afforded, which is a different and entirely
legitimate argument, and it is the argument ICAN and XCAN make. It should be made in those terms and
not in terms of an intensity advantage that does not exist.

---

## 2. The focusing limit

### 2.1 The formula

For a beam of peak power P filling a circular aperture of diameter D and focused at focal length f,
the on-axis irradiance of the Airy pattern is

```
  I₀ = P A / (λ² f²)  =  (π/4) P / (λ² (f/#)²)        with A = πD²/4,  f/# = f/D
```

The tightest useful focusing is of order f/1, so the practical statement is that **the ceiling on
focused intensity is about 0.79 P/λ²**, and at 1.03 µm that is 7.4 x 10⁷ W/cm² per watt of peak power.
Everything below is this formula with a peak power substituted into it.

### 2.2 The derate a real system suffers

The formula is the diffraction limit of a perfect wavefront, and no system delivers it. The verified
benchmark is the world intensity record: Yoon et al. focused the CoReLS petawatt laser with a
two-stage adaptive optical system onto an f/1.1 (f = 300 mm) off-axis parabola, reached a 1.1 µm FWHM
spot, and measured **(1.1 ± 0.2) x 10²³ W/cm²** over 80 consecutive shots at 0.1 Hz.

Running the formula at 800 nm and f/1.1 against the plausible range of CoReLS peak powers gives:

| Assumed peak power | Ideal I₀ | Implied Strehl against the measured 1.1 x 10²³ |
|---|---|---|
| 2 PW | 2.03 x 10²³ W/cm² | 0.54 |
| 3 PW | 3.04 x 10²³ W/cm² | 0.36 |
| 4 PW | 4.06 x 10²³ W/cm² | 0.27 |

**A factor of two to four below the ideal Airy value is what a state-of-the-art system with adaptive
optics achieves**, and that is the derate every figure in this section should be read against. It is
an inference from the measured intensity and the published focusing geometry, not a measurement of the
Strehl ratio itself. A tiled array carries the same derate plus its own fill-factor and residual-phase
losses, which is where the 0.6 combining efficiency used below comes from
([04-laser-array](04-laser-array.md) §3.2 and §3.3).

### 2.3 The absolute ceiling

The Schwinger field is the intensity at which the vacuum itself becomes unstable against
electron-positron pair creation:

```
  E_S = m_e² c³ / (e ħ) = 1.323 x 10¹⁸ V/m
  I_S = ½ c ε₀ E_S²     = 2.32 x 10²⁹ W/cm²   (single plane wave convention)
```

Conventions differ by a factor of about two depending on whether one or two counter-propagating waves
are counted, so 2.3 x 10²⁹ and 4.6 x 10²⁹ both appear in the literature and mean the same thing.

The 2021 record sits **2.1 x 10⁶** below it. That gap is the entire remaining headroom in laser
intensity as a physical quantity, and no route to closing it is known. It is quoted here only to fix
the scale: everything this programme discusses happens in the bottom millionth of the available range.

---

## 3. The commercial laser survey

Catalogue figures, taken from manufacturers' published specifications and reproduced as stated. Prices
are **not** included because none of these vendors publishes them; see Open questions.

### 3.1 What one box delivers

| System | Pulse energy | Pulse duration | Average power | Rep rate | λ | M² |
|---|---|---|---|---|---|---|
| Amplitude Satsuma X | 500 µJ | < 500 fs | 50 W | to 40 MHz | 1030 nm | < 1.3 |
| Amplitude Tangor 100 | 500 µJ | < 500 fs | 100 W | to 40 MHz | 1030 ± 5 nm | < 1.3 |
| Amplitude Tangor 300 | 1 mJ | < 500 fs | 300 W | to 40 MHz | 1030 ± 5 nm | < 1.5 |
| Light Conversion CARBIDE CB3 | 2 mJ | 250 fs to 10 ps | 120 W | to 10 MHz | 1030 nm | - |
| Light Conversion PHAROS PH2-5mJ | 5 mJ | 290 fs to 10 ps | 20 W | single shot to 1 MHz | 1030 ± 10 nm | < 1.3 |
| TRUMPF Dira 200-100 | 2 mJ | ≤ 1000 fs | 200 W | 50 to 400 kHz | 1030 nm | ≤ 1.4 |
| TRUMPF Dira 500-10 | 50 mJ | ≤ 600 fs | 500 W | 10 to 100 kHz | 1030 nm | ≤ 1.5 |
| TRUMPF Dira 200-1 | 200 mJ | ≤ 600 fs | 200 W | 1 to 100 kHz | 1030 nm | ≤ 1.5 |
| **TRUMPF Dira 1000-1** | **500 mJ, 1 J on request** | **≤ 600 fs** | **500 W** | **1 kHz** | **1030 nm** | **≤ 1.5** |

Three observations that matter more than the individual rows.

**Every one of these is at 1030 nm.** Ytterbium has taken over the industrial ultrafast market
completely, which means an array assembled from mixed vendors is at least plausibly spectrally
compatible. That is a real and underappreciated advantage: the wavelength that ICAN, XCAN and this
programme all assume is the wavelength the catalogue actually sells.

**The pulse energy spread across the catalogue is a factor of 2000, and it maps onto gain medium.**
Fibre systems (Satsuma, Tangor) top out below 1 mJ, exactly as [04-laser-array](04-laser-array.md) §2.1
derives from the B-integral and facet-damage limits, and the derivation is confirmed by what is
actually for sale. Thin-disk systems (Dira) reach 1 J, three orders of magnitude higher, by putting the
gain in a geometry with no fibre core to damage.

**This is [04-laser-array](04-laser-array.md) route (b) sitting in a catalogue.** Section 04 lists
"change the gain medium, thin-disk or slab amplifiers at 0.1 to 1 J per element" as route (b),
recommends against it in favour of route (a), and says plainly that "if the only objective were a
gamma source, the correct engineering decision would be to buy a commercial system". The Dira 1000-1
row is what that sentence refers to, and this section is the first time the set has priced the
observation in physical units rather than leaving it as an aside.

### 3.2 What one box focuses to

At f/1, single channel, with no combining and the ideal Airy formula derated by nothing:

| System | Peak power | Focused intensity, f/1 |
|---|---|---|
| Amplitude Tangor 300 | 2.0 x 10⁹ W | 1.5 x 10¹⁷ W/cm² |
| Light Conversion PHAROS PH2-5mJ | 1.7 x 10¹⁰ W | 1.3 x 10¹⁸ W/cm² |
| TRUMPF Dira 200-1 | 3.3 x 10¹¹ W | 2.5 x 10¹⁹ W/cm² |
| TRUMPF Dira 1000-1 at 1 J | 1.7 x 10¹² W | 1.2 x 10²⁰ W/cm² |

A single Dira 1000-1 is already a relativistic-optics instrument. It is the array that is in question,
not whether ordinary lasers can do interesting physics.

---

## 4. What an array of catalogue hardware reaches

Configuration: N channels, tiled aperture, f/1 focusing, combining efficiency 0.6 (fill factor times
residual-phase Strehl, from [04-laser-array](04-laser-array.md) §3.2). Dira 1000-1 operated at 500 mJ
and 1 kHz, which is the combination consistent with its stated 500 W average power ceiling.

| N | Peak power | Focused intensity | a₀ | T_hot | Array average power |
|---|---|---|---|---|---|
| 10 | 8.3 x 10¹² W | 3.7 x 10²⁰ W/cm² | 16.9 | 5.6 MeV | 5 kW |
| **100** | **8.3 x 10¹³ W** | **3.7 x 10²¹ W/cm²** | **53.5** | **18.83 MeV** | **50 kW** |
| 1,000 | 8.3 x 10¹⁴ W | 3.7 x 10²² W/cm² | 169 | 60.6 MeV | 500 kW |
| 10,000 | 8.3 x 10¹⁵ W | 3.7 x 10²³ W/cm² | 535 | 193 MeV | 5 MW |

### 4.1 The geometry closes, which is the surprising part

A 500 mJ compressed pulse at 600 fs run at 0.3 J/cm² on the last dielectric optic needs a 1.5 cm
beam. One hundred of those on a hexagonal grid, at a pitch of two to three beam diameters for mounts
and clearance, gives an array 36 to 53 cm across, focused by an off-axis parabola of the same
diameter at f/1.

**The record-setting CoReLS experiment used a 28 cm beam on a 30 cm focal length parabola.** The
array is in the same physical envelope as an existing, working, record-holding instrument. Whatever
else is hard about this, the optical geometry is not exotic.

### 4.2 Where the array wins, and where it does not

| | 100 x Dira 1000-1, coherently combined | CoReLS PW, 2021 record |
|---|---|---|
| Focused intensity | 3.7 x 10²¹ W/cm² | 1.1 x 10²³ W/cm² |
| Shot rate | 1 kHz | 0.1 Hz |
| Average power at the focus | 50 kW | order of watts |
| Shots per day | 8.6 x 10⁷ | order of 10⁴ |

**The array loses on peak intensity by a factor of about thirty and wins on shot rate by a factor of
ten thousand.** That is the honest comparison and it should replace any framing in which the array is
a way to reach intensities a single laser cannot. It is not. It is a way to reach a given intensity
**continuously**, and continuity is what a production mission needs and what a single-shot petawatt
facility structurally cannot provide.

This is the same conclusion [04-laser-array](04-laser-array.md) §2.4 reaches from the fibre side, and
it survives the substitution of thin-disk hardware for fibre. The argument for the architecture is
average power and repetition rate. It has never been peak intensity, and the concept note's
10²⁴ W/cm² is the artefact of assuming otherwise.

---

## 5. The temperature question

The originating idea is thermal: heat a point hard enough and helium-4 comes apart. This section takes
that seriously and computes the temperature, because the answer is more interesting than a dismissal.

### 5.1 What "temperature" means in a laser focus

A laser field is coherent, not thermal, and has no temperature of its own. What has a temperature is
the electron population the field creates, and the standard measure is the normalised vector potential

```
  a₀ = e E / (m_e ω c) = 0.854 sqrt(I λ² / 10¹⁸)      I in W/cm², λ in µm, linear polarisation
```

with a₀ = 1 marking the onset of relativistic electron motion. The hot-electron temperature follows
from ponderomotive scaling. Two forms appear in the literature and they differ by a factor of two
inside the square root:

```
  T_pond = m_e c² [ sqrt(1 + a₀²/2) - 1 ]        cycle-averaged, linear polarisation
  T_Wilks = m_e c² [ sqrt(1 + a₀²)   - 1 ]        Wilks et al. 1992, as originally written
```

**This section quotes T_pond throughout**, which is the lower of the two by about 40% at the
intensities of interest, on the principle that the conservative figure is the one that should carry an
argument. Both are given below so the choice is visible.

### 5.2 The numbers

| Focused intensity | E field | a₀ | Ponderomotive energy | T_pond | T_Wilks | T_pond in kelvin |
|---|---|---|---|---|---|---|
| 10¹⁸ W/cm² | 2.7 x 10¹² V/m | 0.9 | 0.099 MeV | 0.09 MeV | 0.17 MeV | 1.0 x 10⁹ K |
| 10²⁰ W/cm² | 2.7 x 10¹³ V/m | 8.8 | 9.9 MeV | 2.71 MeV | 4.01 MeV | 3.1 x 10¹⁰ K |
| **3.7 x 10²¹ W/cm²** | **1.7 x 10¹⁴ V/m** | **53.5** | **366 MeV** | **18.83 MeV** | **26.83 MeV** | **2.2 x 10¹¹ K** |
| 10²² W/cm² | 2.7 x 10¹⁴ V/m | 88.0 | 990 MeV | 31.28 MeV | 44.44 MeV | 3.6 x 10¹¹ K |
| 2.2 x 10²² W/cm² | 4.1 x 10¹⁴ V/m | 130.5 | 2178 MeV | 46.63 MeV | 66.16 MeV | 5.4 x 10¹¹ K |

### 5.3 The finding: the temperature is sufficient

**At 100 catalogue channels the hot-electron temperature is 18.83 MeV against a 20.578 MeV
threshold, and 500 channels clears it outright at 42.7 MeV** (1.85 x 10²² W/cm², a₀ = 120). On the
Wilks form 100 channels already clears it, at 26.83 MeV. The reference fibre case in
[00-summary](00-summary.md) §3, at 500 channels and η = 0.6, lands in the same place: 46.63 MeV.
Two hundred billion kelvin is a real number produced by hardware that can be ordered, and the
originating intuition that a sufficiently concentrated field reaches nuclear energy scales is correct.

It is worth stating why this does not contradict [03-feasibility](03-feasibility.md) Part 1, which
rejects multi-photon absorption. Part 1 rejects the *mechanism* of climbing a ladder of nuclear states
with 2.35 MeV photons, and that rejection stands: helium-4 has no ladder. What the temperature above
describes is a completely different route, in which the field accelerates electrons, the electrons
radiate bremsstrahlung, and a single bremsstrahlung photon above threshold does the work. That route
is real, it is used in laser-driven photonuclear experiments, and Part 1 says nothing against it.

### 5.4 Why sufficient temperature does not produce helium-3

Three reasons, and the third is decisive.

**The temperature belongs to the electrons, not the nucleus.** The field couples through charge over
mass, so a helium-4 nucleus responds about 7300 times more weakly than an electron and experiences the
field almost entirely as a centre-of-mass push, which excites no internal degrees of freedom.
[03-feasibility](03-feasibility.md) Part 1 makes this point and it is unchanged: the residual coupling
to the nuclear dipole is the 0.53 eV figure computed there.

**The focal volume is tiny.** A 1 µm³ focus holds of order 10¹⁰ helium nuclei at liquid density. Even
a per-nucleus reaction probability of 10⁻⁶ per shot at 1 kHz is 10⁷ reactions per second, which is
four orders below the bremsstrahlung rate in §6 and thirteen below what 50 g/day needs. Concentration is
the thing superposition buys, and concentration is precisely the wrong currency for a rate problem:
every joule spent making the spot smaller is a joule not spent making more of them.

**The rate is set by average power, and average power is the one quantity superposition cannot
increase.** This is §1.1 restated where it bites. A hundred catalogue amplifiers deliver 50 kW whether
they are phase-locked or scattered across a car park. Phase-locking changes where those 50 kW land, not
how many there are, and [03-feasibility](03-feasibility.md) Part 2 depends only on how many there are.

---

## 6. The bremsstrahlung route, costed

§5.3 opens a route the set has not previously costed, so it is costed here. It is the route the
originating "heat a point" intuition actually implies, and it turns out to be **better than the
inverse Compton route the programme currently designs around**, by about two orders of magnitude.
That is a real finding and it does not rescue anything.

### 6.1 The chain

Laser to hot electrons to bremsstrahlung to photodisintegration, with each step's efficiency stated:

| Step | Factor | Basis |
|---|---|---|
| Absorption into hot electrons | 0.30 | laser-solid interaction at a₀ >> 1; 10 to 50% is the observed band, 0.30 is mid-range |
| Hot electrons to bremsstrahlung | 0.50 | thick high-Z converter; generous |
| Fraction of bremsstrahlung **energy** above 20.578 MeV | exp(-E_th / T_hot) | see below |
| Photon energy to photon number | mean photon above threshold ≈ E_th + T_hot | |
| Fraction of photons reacting in the target | 2.83 x 10⁻³ | liquid He-II over 1 m at 1.3 mb, from [03-feasibility](03-feasibility.md) Step 5 |

The third row is the one worth deriving. Thick-target bremsstrahlung from an exponential hot-electron
spectrum exp(-E/T) gives a photon spectrum dN/dk ∝ (T/k) exp(-k/T), so the photon energy above a
threshold k_th is

```
  ∫ k (T/k) exp(-k/T) dk  from k_th to ∞  =  T² exp(-k_th/T)
```

and the total is T², so **the fraction of bremsstrahlung energy above threshold is simply
exp(-k_th/T_hot)**. At T_hot = 18.83 MeV and k_th = 20.578 MeV that is 0.33, which is remarkably
favourable and is the reason this route beats inverse Compton scattering at all.

### 6.2 The result

| Route | Average power | Reactions/s | He-3 per year | Shortfall vs 50 g/day |
|---|---|---|---|---|
| Inverse Compton, canonical ([03](03-feasibility.md)) | 5 kW | 4.29 x 10⁸ | 6.78 x 10⁻⁸ g | 2.7 x 10¹¹ |
| **Bremsstrahlung, same average power** | **5 kW** | **1.12 x 10¹¹** | **1.78 x 10⁻⁵ g** | **1.0 x 10⁹** |
| Bremsstrahlung, 10% geometric collection | 5 kW | 1.12 x 10¹⁰ | 1.78 x 10⁻⁶ g | 1.0 x 10¹⁰ |
| Bremsstrahlung, 100 x Dira array | 50 kW | 1.12 x 10¹² | 1.78 x 10⁻⁴ g | 1.0 x 10⁸ |

**The mechanism is about 260 times more efficient than inverse Compton scattering at equal average
power**, because it skips the wakefield stage and the 10⁻⁴ scattering conversion entirely. Against
the thermodynamic ceiling of [03-feasibility](03-feasibility.md) Step 2 it runs at 7.3 x 10⁻⁵, which
is consistent: 0.30 x 0.50 x 0.33 x 0.52 x 2.83 x 10⁻³.

### 6.3 What it costs to gain that, and why the verdict is unchanged

Three things are worse about this route and one of them is fatal to the programme's surviving mission.

- **The spectrum is broad.** Bremsstrahlung is a continuum from zero to the electron energy.
  [02-nuclear-physics](02-nuclear-physics.md) already records why that is unacceptable for the
  work the programme is now for: a continuum source cannot measure a cross-section without unfolding,
  and the historical disagreement in the helium-4 photonuclear data is largely an argument between
  continuum and monochromatic experiments. **The programme's best surviving justification is a
  quasi-monochromatic gamma source, and this route cannot produce one.**
- **Tritium co-production gets worse.** The proton channel opens 0.764 MeV lower and a continuum
  populates it preferentially, so the branching moves against helium-3 relative to the 25 to 27 MeV
  band [00-summary](00-summary.md) §2 recommends.
- **The geometry factor is unestimated and will not be kind.** Hot electrons from laser-solid
  interaction have a broad angular distribution, so the fraction of bremsstrahlung entering a metre of
  liquid helium is well below unity. The 10% row above is an illustration, not an estimate.

And the arithmetic that decides it: **1.0 x 10⁹ is still 1.0 x 10⁹**. Two orders of magnitude off a
shortfall of eleven leaves nine, and the levers analysis in [03-feasibility](03-feasibility.md) Part 3
is unaffected because the bounded levers are bounded for the same reasons. The verdict on production
does not move, and nothing in this section should be read as moving it.

---

## 7. What this section changes and what it does not

| Claim | Status |
|---|---|
| Coherent combining is the only way to raise the radiance of many ordinary sources | **New here.** Strengthens the architecture argument in [04](04-laser-array.md) §3 |
| The array's advantage is repetition rate, not peak intensity | Confirms [04](04-laser-array.md) §2.4 reason 3, now with a measured comparison |
| A 100-channel array of catalogue thin-disk amplifiers reaches 3.7 x 10²¹ W/cm² | **New here.** Route (b) of [04](04-laser-array.md) §2.3, quantified |
| Hot-electron temperature at that intensity is 18.83 MeV, at the nuclear scale | **New here.** The originating thermal intuition is vindicated |
| Multi-photon absorption is rejected | Unchanged. [03](03-feasibility.md) Part 1 |
| Direct bremsstrahlung beats inverse Compton by ~260x | **New here.** Does not change the verdict |
| Production shortfall is 10⁹ to 10¹¹ | Unchanged. Best case improves from 10¹¹ to 10⁹ |
| The array and its control problem are worth building | Unchanged, and better supported than before |

---

## Open questions

- [ ] **No vendor has been asked for a price.** Every system in §3.1 is quoted to order and none
      publishes a figure. A 100-channel Dira array is the single largest capital number this programme
      could generate and it is currently unknown to within an order of magnitude. Three quotations
      (Amplitude, Light Conversion, TRUMPF) at N = 1, 10 and 100 would settle it, and the volume
      discount slope is the number that actually matters.
- [ ] **The 0.6 combining efficiency is inherited, not derived for thin-disk beams.** It comes from
      [04-laser-array](04-laser-array.md) §3.2 for a fibre array with small beamlets. A 100-element
      array of 1.5 cm beams has a different fill factor and a different pointing-stability budget, and
      the number should be recomputed rather than carried across.
- [ ] **The geometric collection factor in §6.2 is a placeholder.** It needs a real solid-angle
      calculation for a converter target and a metre-long cryogenic helium column, and it could
      plausibly cost another order of magnitude.
- [ ] **Whether 100 thin-disk amplifiers can be phase-locked at all is unestablished.** Every
      demonstration in the record, including the 107-beam result that holds the channel-count record,
      is a fibre array. Thin-disk amplifiers have no equivalent of a fibre stretcher and their thermal
      lensing is a different problem. This is the assumption most likely to be wrong in this section.
- [ ] **The Wilks versus ponderomotive factor of two is unresolved here** and has been handled by
      quoting the conservative form. It should be settled against the laser-solid interaction
      literature for the specific case of a tiled array at normal incidence.
- [ ] **T_hot is a scaling law, not a simulation.** Every temperature in §5.2 comes from an analytic
      formula with no particle-in-cell run behind it, which is the standing warning for this repository
      applied to the one number this section is built on.
