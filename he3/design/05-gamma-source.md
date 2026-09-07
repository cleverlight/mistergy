# He-3 Programme - 05 Gamma Source

This is the subsystem the originating concept note did not have. Everything downstream of the laser
array depends on turning 1.03 µm infrared into photons above the 20.578 MeV (γ,n) threshold, and there
is exactly one practical way to do that: collide the light with relativistic electrons and take the
backscattered photons. That requires a GeV-class electron accelerator, which is the largest, most
expensive and most heavily regulated part of the whole machine. This section derives the electron
energy from the required photon energy, compares the two ways of producing the beam, makes the case
for the laser-wakefield route in detail because it is where the programme's laser array becomes the
point rather than an accessory, sets out the two-pulse timing problem that an inverse Compton source
inherits, and states plainly what the expected flux is and is not known to be.

---

## 1. What the concept note showed, and what it actually is

The architecture diagram in the originating note reads:

```
   Coherent Beam Combining Stage
            ↓
   Compton Backscatter X-ray Converter
     (infrared → 2.35 MeV hard X-rays)
            ↓
   Hard X-ray Focusing Optics
```

**That middle block is drawn as an optic.** It sits between two optical stages, in the same visual
weight as a beam combiner and a mirror, with an input wavelength and an output wavelength as though it
were a frequency converter. It is not. It is a particle accelerator, a beam transport line, an
interaction point, a beam dump and a shielded enclosure, and by any measure of cost, footprint,
schedule or licensing burden it is larger than everything else in the diagram put together.

The scale of the understatement does not depend on which photon energy you take as the target.

| Photon energy wanted | Lorentz factor γ | Electron beam energy |
|---|---|---|
| 2.35 MeV (the concept note's own figure) | 699 | 357 MeV |
| **20.578 MeV** ((γ,n) threshold) | **2,067** | **1.06 GeV** |
| **27 MeV** (near the cross-section peak) | **2,368** | **1.21 GeV** |

Even taking the concept note's own 2.35 MeV at face value, the block labelled "converter" is a
357 MeV accelerator. Taking the corrected threshold from [02-nuclear-physics](02-nuclear-physics.md),
it is a 1.06 GeV accelerator. The bottom two rows are the canonical figures from
[00-summary](00-summary.md) §7 and are derived in §2.1 below.

The third block, "hard X-ray focusing optics", is not buildable at all at these energies. §7 explains
why, and why it does not matter.

None of this invalidates the programme. It relocates it. The array is still the right driver, for the
reason developed in §4: 100-500 TW at 100 Hz is squarely in laser-wakefield territory, and 100 Hz at
joule class is precisely the capability that coherently combined fibre arrays were proposed to deliver.
The architecture was well aimed. It had the wrong final target attached.

---

## 2. Inverse Compton scattering

### 2.1 The energy relation

A photon of energy E_L colliding head-on with an electron of Lorentz factor γ is backscattered into
the electron's direction of travel with a large energy gain. In the Thomson limit, where the photon
energy in the electron rest frame is small compared with m_e c², the on-axis backscattered energy is:

```
  E_γ ≈ 4 γ² E_L
```

The two Doppler shifts, one into the electron frame and one back out, each contribute a factor of
approximately 2γ. Working the relation backwards gives the required electron energy.

```
  Laser wavelength         λ    = 1.03 µm
  Laser photon energy      E_L  = hc/λ = 1239.84 eV·nm / 1030 nm = 1.204 eV

  γ = √( E_γ / 4E_L )
  E_e = γ · m_e c²    with  m_e c² = 0.511 MeV

  For E_γ = 20.578 MeV:
    γ   = √( 20.578e6 / (4 × 1.204) ) = √( 4.274 × 10⁶ ) = 2,067
    E_e = 2,067 × 0.511 MeV = 1,056 MeV = 1.06 GeV

  For E_γ = 27 MeV:
    γ   = √( 27e6 / (4 × 1.204) ) = √( 5.607 × 10⁶ ) = 2,368
    E_e = 2,368 × 0.511 MeV = 1,210 MeV = 1.21 GeV
```

**Recoil correction.** The Thomson limit is not exact. The full on-axis expression carries a recoil
term in the denominator:

```
  E_γ = 4γ²E_L / ( 1 + 4γE_L/(m_e c²) )

  At γ = 2,067:  4γE_L = 9,955 eV,  and  9,955 / 511,000 = 0.0195
```

So the recoil correction is about 2%, and reaching 20.578 MeV in practice needs γ ≈ 2,087 rather than
2,067, an electron energy of about 1.07 GeV. That is a 1% adjustment, well inside the tuning range of
any accelerator that can reach 1 GeV at all, and the canonical figures in [00-summary](00-summary.md)
§7 are quoted in the Thomson limit for consistency. It is recorded here so a reader checking the
arithmetic does not think the 2% has been missed.

**The canonical envelope, and what to write on the accelerator specification.** The ideal two-body
values are **1.06 GeV at the 20.578 MeV threshold and 1.21 GeV at 27 MeV**, and the recoil correction
above raises the top of the band to about 1.22 GeV. The recommended 25-27 MeV operating band is
1.16-1.21 GeV ideal, or about 1.18-1.22 GeV with recoil. **An accelerator for this programme should be
specified to 1.25 GeV**, which reaches the whole 20.578-27 MeV band with margin. Those are the figures
in [00-summary](00-summary.md) §7 and in [02-nuclear-physics](02-nuclear-physics.md) §5.4, and the
1.06-1.21 GeV pair is what every other section of this set quotes.

**The energy is tuned by the electron beam, not by the laser.** E_γ ∝ γ², so a 1% change in electron
energy moves the photon energy by 2%. This is how HIgS and ELI-NP tune their gamma beams, and it is
the property that makes an inverse Compton source a genuinely useful instrument for measuring the
⁴He(γ,n)³He cross-section across the giant dipole resonance region: the same machine sweeps 20 to 30
MeV by changing one parameter.

### 2.2 The angular-energy correlation

The backscattered photon energy falls off with observation angle θ from the electron direction. In the
Thomson limit:

```
  E_γ(θ) ≈ 4γ²E_L / ( 1 + γ²θ² )
```

The energy is highest exactly on axis and drops to half at γθ = 1, that is at θ = 1/γ. At γ = 2,067
that is **484 µrad**, so essentially the whole emission is inside half a milliradian. An inverse
Compton beam is naturally, intrinsically collimated, which is one of its great practical virtues.

This correlation is what makes the source quasi-monochromatic **when collimated**: because energy maps
monotonically onto angle, placing an aperture at a chosen half-angle θ_c selects a band of energies.
For small γθ_c the relative bandwidth is:

```
  ΔE/E ≈ γ²θ_c²          and the flux inside the aperture scales roughly as (γθ_c)²
```

Both scale as the square of the same quantity, which is the whole trade in one line: **halving the
bandwidth costs half the flux, and getting to a tenth of the bandwidth costs a tenth of the flux.**

| Collimator half-angle θ_c | γθ_c | Bandwidth ΔE/E from collimation | Approximate fraction of total flux |
|---|---|---|---|
| 484 µrad (= 1/γ) | 1.0 | ~50% | ~1.0 |
| 153 µrad | 0.32 | 10% | ~0.10 |
| **48 µrad** | **0.10** | **1%** | **~0.01** |
| 15 µrad | 0.032 | 0.1% | ~0.001 |

At 48 µrad the collimator aperture is 0.5 mm in radius at 10 m from the interaction point. That is a
small hole a long way downstream, and everything it rejects becomes a shielding and activation problem
at the collimator rather than a beam (§8).

### 2.3 What actually sets the bandwidth

Collimation sets a floor, not the answer. Four contributions add, and for a wakefield-driven source
the first one dominates everything else.

| Contribution | Scaling | Typical size |
|---|---|---|
| **Electron energy spread** | ΔE_γ/E_γ = **2** · Δγ/γ | 0.2% for an RF linac, 2-20% for LWFA |
| Collimation half-angle | γ²θ_c² | chosen, per the table above |
| Electron beam divergence at the interaction point | adds in quadrature with θ_c | set by emittance and focusing |
| Laser bandwidth | ΔE_L/E_L directly | ~1.6% for a 100 fs pulse at 1.03 µm |

**The factor of two on the electron energy spread is the decisive number in this whole section.**
Because E_γ ∝ γ², a spread in electron energy is doubled in the photon spectrum, and no amount of
collimation removes it: every electron in the bunch radiates on axis, just at a different energy.

| Electron energy spread | Photon bandwidth floor | Achievable by |
|---|---|---|
| 0.1% | 0.2% | RF linac |
| 1% | 2% | an exceptionally good LWFA result |
| 5% | 10% | typical LWFA |
| 10% | 20% | ordinary LWFA without energy selection |

This is why every operating quasi-monochromatic gamma source in the world is built on an RF linac, and
it is the single strongest argument against the wakefield route for an instrument whose purpose is
precision spectroscopy.

**It also has a direct nuclear consequence** that ties back to
[02-nuclear-physics](02-nuclear-physics.md). The three photodisintegration channels open at 19.814 MeV
((γ,p), giving tritium), 20.578 MeV ((γ,n), giving helium-3) and 23.847 MeV ((γ,d)). They are 0.76 MeV
and 3.3 MeV apart. A beam with 20% bandwidth centred at 27 MeV spans roughly 24 to 30 MeV and opens
every channel at once. A beam with 1% bandwidth centred at 21 MeV spans about 20.9 to 21.2 MeV and
opens only two. **The bandwidth does not merely determine spectral tidiness, it determines the
reaction channel mix and therefore how much tritium the target breeds alongside the helium-3.** There
is no window in which only the (γ,n) channel is open, because the proton channel sits below it, so
tritium production is unavoidable at any bandwidth; but the ratio is controllable, and it is a
containment problem for [06-target-and-capture](06-target-and-capture.md).

---

## 3. Two routes to the electron beam

| | **Conventional RF linac** | **Laser-wakefield acceleration (LWFA)** |
|---|---|---|
| Accelerating gradient | 20-40 MV/m (normal conducting), up to ~30 MV/m superconducting | 10-100 GV/m |
| Length for 1.1 GeV | 30-50 m of structure, plus injector and beam transport | **1-10 cm** of plasma |
| Total footprint | a shielded tunnel, a klystron gallery, a building | a room, if the driver is the array |
| Energy spread | 0.1% or better, routinely | 1-10%, a few percent in the best results |
| Shot-to-shot energy stability | sub-percent | percent to tens of percent |
| Pointing stability | µrad, well controlled | mrad-class fluctuations are normal |
| Bunch charge | nC routinely, high average current | 10-500 pC typical |
| Normalised emittance | ~1 mm·mrad, controlled and measured | can be sub-mm·mrad at source, degrades on extraction |
| Repetition rate | kHz to continuous | set entirely by the driving laser |
| Maturity | decades of routine operation | roughly two decades of research |
| Operating examples | **HIgS** (Duke), **ELI-NP** gamma beam system | **BELLA**, **Apollon** and comparable facilities |
| Capital cost | tens of millions, plus tunnel and shielding | dominated by the laser system |
| What drives the laser array | nothing: the array is not needed | **the array is the accelerator** |

**For a first system, the RF linac is the right answer, and that should be said without hedging.** If
the objective is a working quasi-monochromatic gamma beam that can measure the ⁴He(γ,n)³He
cross-section, which [00-summary](00-summary.md) §1 ranks as a genuine contribution, then the beam has
to have a known, narrow and reproducible spectrum. §2.3 shows that a several-percent LWFA energy spread
gives a ten-percent-plus photon bandwidth, which is too wide to resolve structure across a resonance
that spans a few MeV. The linac is mature, it is what HIgS and ELI-NP use, and partnering for beam time
on an existing machine is a faster and vastly cheaper route to the physics than building anything.

**The wakefield route is the interesting one, and it is the only one in which this programme's laser
array is the point.** On a linac the array is an accessory: you would use a modest commercial laser for
the scattering arm and the array would have no role at all. On a wakefield stage the array is the
accelerator. That is the difference between a programme with a distinctive contribution and one that
has bought an expensive laser to do a job a cheap laser could do.

The honest recommendation is therefore both, in order: **use a linac (or a partner's) to get the
physics, and build the wakefield stage as the research contribution.** They are not competing designs
so much as different answers to different questions, and [09-roadmap](09-roadmap.md) should carry them
as separate lines rather than as a choice.

---

## 4. The wakefield case

### 4.1 The scalings

A short, intense laser pulse propagating through a plasma expels electrons transversely by its
ponderomotive force, leaving an ion cavity, or "bubble", trailing behind it. The charge separation
supports an accelerating field orders of magnitude beyond what a metal structure can hold. Three
quantities set the design.

**Normalised vector potential a₀** measures how relativistic the laser drives the plasma electrons.
The blowout regime that produces good beams needs a₀ of roughly 2-4:

```
  a₀ = 0.855 · λ[µm] · √( I / 10¹⁸ W/cm² )
```

**The cold wave-breaking field E₀** sets the scale of the accelerating gradient, and depends only on
the plasma density:

```
  E₀ [V/m] = 96 · √( n_e [cm⁻³] )        →  96 GV/m at n_e = 10¹⁸ cm⁻³

  Accelerating field in blowout:  E_z ≈ ½ √a₀ · E₀
```

**Dephasing** ends the acceleration. The bubble travels at the laser's group velocity, which is below
c, while the accelerated electrons approach c. Eventually an electron outruns the accelerating phase
and starts to be decelerated. The dephasing length is:

```
  L_d ≈ (4/3) · γ_p² · √a₀ · (c/ω_p)      with γ_p = ω_0/ω_p
```

Combining these gives the standard blowout-regime energy-gain scaling, in which the three levers are
visible at once:

```
  ΔW [GeV] ≈ 1.7 · (P[TW]/100)^(1/3) · (10¹⁸/n_e[cm⁻³])^(2/3) · (0.8/λ[µm])^(4/3)
```

Three things follow, and they are the qualitative shape of the whole design space:

- **Energy gain rises only as the cube root of power.** Doubling the final energy needs **eight times**
  the peak power at fixed density. This is why the difference between 100 TW and 500 TW is a factor of
  1.7 in energy, not a factor of five, and why the 100-laser configuration is already sufficient.
- **Lowering the plasma density raises the energy gain** as n_e^(-2/3), because dephasing takes longer.
  But the accelerating field falls as √n_e, so the stage gets much longer, and the matched spot grows
  as n_e^(-1/2), so more power is needed to reach the same a₀. Lower density buys energy and costs
  length and power.
- **Shorter wavelength helps strongly**, as λ^(-4/3). The 1.03 µm of an ytterbium fibre array is a
  ~29% penalty against the 0.8 µm of a titanium-sapphire system, which is visible as the factor 0.714
  in every calculation below. It is a real cost of choosing fibre and it should be carried openly.

### 4.2 Two operating points for 100 TW at 100 fs

Both assume the 100-laser configuration, 10 J in 100 fs, with the whole pulse used as the drive.
Section 5 revisits this when the array is split between the drive and scattering arms.

| | **Point A: high density** | **Point B: matched to 100 fs** |
|---|---|---|
| Plasma density n_e | 1 × 10¹⁸ cm⁻³ | 2 × 10¹⁷ cm⁻³ |
| Plasma skin depth c/ω_p | 5.3 µm | 11.9 µm |
| Plasma wavelength λ_p | 33.4 µm | 74.8 µm |
| Wave-breaking field E₀ | 96 GV/m | 43 GV/m |
| Matched spot radius w₀ | ~18 µm | ~30 µm |
| Focal intensity | ~1 × 10¹⁹ W/cm² | ~3.5 × 10¹⁸ W/cm² |
| Normalised amplitude a₀ | ~2.8 | ~1.7 |
| Accelerating field E_z | ~80 GV/m | ~28 GV/m |
| Dephasing length L_d | **~1.3 cm** | **~11 cm** |
| Rayleigh range z_R | ~1.0 mm | ~2.8 mm |
| Guiding needed | ~13 z_R | ~39 z_R |
| **Energy gain (scaling)** | **~1.2 GeV** | **~3.5 GeV** |
| Energy gain (E_z × L_d check) | ~1.0 GeV | ~3.0 GeV |
| Drive pulse vs matched duration | 100 fs is ~1.7× the blowout-matched ~60 fs | matched |

Two observations matter more than the individual numbers.

**Point A hits the requirement directly.** 100 TW at 10¹⁸ cm⁻³ over about 1.3 cm gives roughly
1.2 GeV, which is what §2.1 asks for to reach 27 MeV. The two independent estimates, the published
scaling and the crude E_z × L_d product, agree to within about 20%, which is the level of confidence
such scalings carry. The compromise at point A is that a 100 fs pulse is roughly 1.7 times longer than
the blowout-matched duration at that density, which reduces the wake amplitude and the energy-transfer
efficiency. It is workable but not optimal, and only a particle-in-cell simulation settles how much is
lost. **Nothing here has been simulated.**

**Point B overshoots, which is a good problem.** At the density where a 100 fs pulse is properly
matched, the same 100 TW reaches roughly 3.5 GeV in an 11 cm channel. That is three times more energy
than the gamma source needs, so the stage would be run with a shortened channel, a reduced drive
fraction, or at an intermediate density. **The programme has energy headroom, not an energy
shortfall**, and that is the strongest technical statement in this section.

**Guiding is mandatory, not optional.** At both operating points the required plasma length is tens of
Rayleigh ranges, so the pulse cannot simply be focused into a gas jet and left to diffract. A
capillary discharge waveguide or a hydrodynamically shaped plasma channel is required. This is
established practice: BELLA has demonstrated GeV-class and multi-GeV electron beams from
centimetre-to-decimetre-scale plasma channels, and the 1-11 cm lengths in the table are within that
demonstrated range rather than beyond it.

**A note on focusing, which contradicts the concept note's instinct.** The matched spot at both points
is 18-30 µm in radius, giving 3.5 × 10¹⁸ to 1 × 10¹⁹ W/cm². That is a **thousand times lower** than
the 1.3 × 10²² W/cm² a diffraction-limited 1 µm focus would give at the same power. Focusing harder
does not help: it violates the matching condition k_p w₀ ≈ 2√a₀, the pulse diffracts within a fraction
of the required length, and the wake becomes unstable. The array's job is to deliver 100 TW into a
20-30 µm spot with a good wavefront, not to reach the highest intensity it can.

### 4.3 Why the repetition rate is the hard part

The energy requirement is met by point A. The requirement that is **not** met by any existing
petawatt-class system is 100 Hz.

| Driver technology | Typical energy class | Typical repetition rate | Limit |
|---|---|---|---|
| Flashlamp-pumped Ti:sapphire, PW class | 10-30 J | 0.05-1 Hz | thermal load in the crystal, flashlamp duty |
| Diode-pumped Ti:sapphire | 1-5 J | 1-10 Hz | crystal thermal management |
| Thin-disk / slab, diode-pumped | 0.1-1 J | 100 Hz to kHz | achievable, see [04-laser-array](04-laser-array.md) §2.3 route (b) |
| **Coherently combined fibre array** | **set by channel count** | **essentially unlimited** | **surface-area-rich gain medium; the limit is the compressor and the combining, not the heat** |

**This is the ICAN and XCAN rationale, stated exactly.** A laser-plasma accelerator that fires once a
second is a physics experiment. One that fires at 100 Hz to kHz is an instrument, and at 10 kHz it is
a machine you could put a real application behind. Nothing about the plasma physics changes; what
changes is whether you accumulate statistics in an afternoon or a month, and whether feedback loops
that correct shot-to-shot jitter have enough shots to work with. The gain medium that can deliver the
average power is fibre, because its surface-to-volume ratio makes heat removal almost free, and the
way to get joules out of a medium limited to millijoules per channel is to coherently combine very many
channels. That is the ICAN thesis, and it is why [04-laser-array](04-laser-array.md) §2.4 recommends
scaling the channel count rather than changing the gain medium.

**So the programme's array architecture is well aimed.** It is the correct driver for a
high-repetition-rate laser-plasma accelerator, which is the correct front end for a high-flux inverse
Compton gamma source. The architecture was never the problem. The problem was the nuclear endpoint
bolted onto the end of it, which [03-feasibility](03-feasibility.md) rejects.

**The 100 Hz problem is not only the laser, and this is routinely underestimated.** Everything else at
the interaction point must also run at 100 Hz:

- **The plasma source.** A gas jet at 100 Hz needs high-throughput differential pumping to keep the
  chamber at vacuum. A capillary discharge at 100 Hz needs electrode lifetime measured in tens of
  millions of shots and its own heat removal.
- **Debris and optic lifetime.** The final focusing optic sees the plasma. At 1 Hz a protective
  pellicle lasts a day; at 100 Hz it lasts fifteen minutes.
- **The beam dump and shielding.** Dose accumulates a hundred times faster (§8).
- **Diagnostics and data.** Shot-tagged electron spectra, pointing and charge at 100 Hz is a real data
  rate, and it is what any shot-sorting or feedback scheme depends on.

### 4.4 What the wakefield route does not solve

Stated plainly, because §3 already gives the verdict and this is the evidence behind it:

- **Energy spread.** Several percent is normal, giving a photon bandwidth above 10% by the factor of
  two in §2.3. Energy selection with a magnetic chicane and a slit recovers narrow bandwidth at a
  direct and severe cost in charge.
- **Shot-to-shot stability.** Charge, energy and pointing all fluctuate at the percent to tens of
  percent level. For a source whose output is integrated over many shots this is tolerable if it is
  measured; for a source whose spectrum must be known per shot it is not.
- **Bunch charge.** 10-500 pC against the nanocoulombs a linac delivers routinely. Flux scales
  linearly with charge (§6).
- **Pointing.** Milliradian-class fluctuation against the tens of microradians the collimation in §2.2
  works at. The gamma beam axis moves shot to shot, which the collimator turns directly into flux
  fluctuation.

None of these is a reason not to build it. All of them are reasons not to promise a precision
instrument on the first machine.

---

## 5. The two-pulse problem

An inverse Compton source built on a wakefield accelerator needs **two** laser pulses, not one: a drive
pulse to make the electron bunch, and a scattering pulse to collide with it. This is a serious
engineering constraint and it is frequently underestimated, because on paper it looks like a
beamsplitter.

### 5.1 Splitting the array

**Split by channel group, not with a beamsplitter.** A beamsplitter capable of dividing the combined
beam would carry 10-50 J at 100 fs, which is exactly the full-energy optic that
[04-laser-array](04-laser-array.md) §4.3 exists to avoid. Assigning whole groups of channels to each
arm avoids it entirely, and buys two further advantages: the arms can be independently phased and
independently pointed, and the split ratio becomes a software parameter rather than a swapped optic.

An illustrative split for the 100-laser configuration:

| Arm | Fraction | Pulse energy | Peak power | Role |
|---|---|---|---|---|
| Drive | 80% | 8 J | 80 TW | wakefield acceleration to ~1.1 GeV |
| Scattering | 20% | 2 J | 20 TW | collision at the interaction point |

At 80 TW the point A energy gain becomes 1.7 × (0.8)^(1/3) × 0.714 = **1.12 GeV**, still above the
1.06 GeV needed for threshold photons. The cube-root scaling that makes power expensive to add also
makes it cheap to give away, which is why an 80/20 split costs only 7% of the electron energy.

### 5.2 The scattering pulse has its own constraint

The scattering pulse cannot simply be focused as hard as possible. If its normalised amplitude a₀
approaches 1, the electron quivers relativistically during the interaction, which produces
ponderomotive broadening of the scattered line and generates higher harmonics (nonlinear Compton
scattering). Both destroy the monochromaticity the source exists to provide. The working requirement is
**a₀ ≲ 0.3** in the scattering arm, which caps the intensity:

```
  a₀ = 0.855 · λ[µm] · √(I/10¹⁸)  = 0.3   →   I ≈ 1.16 × 10¹⁷ W/cm²

  2 J in 100 fs = 2 × 10¹³ W
  Required area = 2 × 10¹³ / 1.16 × 10¹⁷ = 1.7 × 10⁻⁴ cm²  →  spot radius ≈ 74 µm
```

So the scattering pulse is deliberately defocused to about 74 µm, roughly four times larger than the
drive focus and far larger than the electron bunch. **This is a helpful accident**: because the laser
spot is much bigger than the electron beam, the transverse overlap requirement relaxes to roughly
10 µm of pointing rather than 1 µm. The flux penalty is real and unavoidable, and it is one of the
reasons the conversion efficiency in §6 is as low as it is.

### 5.3 Crossing angle

A head-on collision maximises the photon energy, but requires the laser to enter along the electron
axis, which means a holed mirror or a plasma mirror at the interaction point. A small crossing angle α
away from head-on costs energy only at second order:

```
  E_γ(α) ≈ 4γ²E_L · (1 − α²/4)

  α = 100 mrad  →  0.25% energy loss
```

**A 100 mrad crossing angle costs a quarter of a percent in photon energy and removes an entire class
of optical problem at the interaction point.** It does shorten the overlap region and therefore costs
some luminosity, so the design point is a small crossing angle of order 10-100 mrad rather than either
extreme.

### 5.4 Synchronisation

The two pulses must meet. The interaction window is set by the scattering pulse duration, 100 fs, so
**timing jitter must be well below that: of order 10 fs RMS is the working requirement, which is 3 µm
of optical path**. A 100 fs error does not degrade the collision, it misses it entirely.

**The architecture makes most of this tractable, and it is worth being precise about which part.**
Because both arms are derived from the **same seed oscillator** ([04-laser-array](04-laser-array.md)
§5), there is no independent oscillator jitter between them. What remains is **differential path
drift**: thermal and mechanical change in the difference between the two arms' optical paths. That is
an interferometric stabilisation problem on a metre-to-hundred-metre scale, and stabilised optical
fibre links routinely hold sub-femtosecond timing over comparable distances in large accelerator
facilities. It is demanding, it is not novel, and it is the same class of problem as the group-delay
matching already required within the array.

**The irreducible residue is plasma-induced, and it cannot be removed by path stabilisation.** The
electron bunch's arrival time at the interaction point depends on where in the plasma it was injected
and on the group velocity of the drive pulse through the plasma, both of which fluctuate shot to shot
with the gas density, the drive energy and the pointing. That jitter is a property of the accelerator,
not of the optics. There are two responses, and a real machine needs both:

- **Measure it shot by shot** with an electro-optic or transverse-deflecting timing diagnostic, and tag
  every shot so the data can be sorted afterwards.
- **Correct what is correctable** with a fast feedback on the scattering arm's delay line, which at
  100 Hz has 10 ms per shot to act, comfortable for a piezo delay stage but only if the measurement
  exists.

**The honest statement is that shot-to-shot arrival jitter of the electron bunch, not the laser
timing, is the limiting synchronisation problem, and it has not been quantified for this design.**

---

## 6. Expected gamma flux and spectrum

**The flux figure for this machine awaits calculation.** What follows is an order-of-magnitude
illustration with every input stated, so that a reader can see where the numbers come from and replace
them when the real design exists. It is not a prediction, nothing has been simulated, and the real
figure depends on parameters that have not been chosen.

### 6.1 What the flux depends on

| Parameter | Enters as | Status |
|---|---|---|
| Electron bunch charge N_e | linear | not chosen; 10-500 pC is the LWFA range |
| Laser pulse energy at the interaction point | linear, through photon number | set by the array split (§5.1) |
| Laser spot size at the interaction point | inverse, through photon areal density | capped by the a₀ ≲ 0.3 constraint (§5.2) |
| Electron beam spot size | sets overlap; irrelevant while smaller than the laser spot | not chosen |
| Crossing angle | reduces overlap length | 10-100 mrad recommended (§5.3) |
| Repetition rate | linear | 100 Hz |
| Collimation half-angle | flux ∝ (γθ_c)², bandwidth ∝ (γθ_c)² | a design choice, §2.2 |
| Electron energy spread | sets the bandwidth floor, not the flux | the dominant unknown for LWFA |

### 6.2 An illustrative calculation

Assumptions: 100 pC bunch (6.24 × 10⁸ electrons), the 2 J scattering arm from §5.1, focused to the
74 µm spot the a₀ ≲ 0.3 constraint forces, perfect head-on overlap, and the Thomson cross-section
σ_T = 6.652 × 10⁻²⁵ cm². Perfect overlap makes this an **upper bound**.

```
  Laser photons in the scattering pulse:
    N_L = 2 J / (1.204 eV × 1.602e-19 J/eV) = 1.04 × 10¹⁹ photons

  Interaction area:
    A = π (74 µm)² = 1.72 × 10⁻⁴ cm²

  Probability that a given ELECTRON scatters:
    P_e = N_L σ_T / A = (1.04e19 × 6.652e-25) / 1.72e-4 = 0.040        (4%)

  Probability that a given LASER PHOTON scatters:
    P_L = N_e σ_T / A = (6.24e8 × 6.652e-25) / 1.72e-4 = 2.4 × 10⁻¹²   (2 in a trillion)

  Gamma photons per shot:
    N_γ = N_e × P_e = 6.24e8 × 0.040 = 2.5 × 10⁷

  At 100 Hz, into the full 1/γ cone:      2.5 × 10⁹ photons/s
  Collimated to 1% bandwidth (×0.01):     2.5 × 10⁷ photons/s
```

### 6.3 Why the conversion efficiency is so low

Converting that to energy:

```
  Gamma energy per shot = 2.5 × 10⁷ × 3.297 × 10⁻¹² J = 8.2 × 10⁻⁵ J

  As a fraction of the 2 J scattering arm:   4.1 × 10⁻⁵
  As a fraction of the 10 J array pulse:     8.2 × 10⁻⁶
```

This lands at roughly **10⁻⁵ of the array's pulse energy**, and the relationship to the figure used
elsewhere in this set needs stating precisely rather than glossed. **10⁻⁵ is about an order of
magnitude worse than the 10⁻⁴ used in [03-feasibility](03-feasibility.md) Part 2, Step 5, not
"slightly" worse**, and it is worse despite this calculation assuming perfect overlap, which makes it
an upper bound on itself.

The three figures now on the record, and what each is for:

| Figure | What it is | Where |
|---|---|---|
| **10⁻⁴** | **the canonical optimistic bound**, used by every rate in this set | [00-summary](00-summary.md) §4.2 and §4.4 |
| **~10⁻⁵** | this section's illustrative calculation for this specific machine | §6.2 above |
| 10⁻⁴ to 10⁻³ | this section's own ceiling, with all three improvements below applied at once | end of §6.3 |

So 10⁻⁴ should be read as the best defensible case rather than an expectation, and this calculation
as evidence that the true figure is more likely an order of magnitude below it. Nothing in
[03-feasibility](03-feasibility.md)'s verdict moves, because the correction runs in the pessimistic
direction: at 10⁻⁵ the realistic output falls from 68 ng/yr to 6.8 ng/yr and the shortfall against the
50 g/day target rises from 2.7 × 10¹¹ to 2.7 × 10¹². [00-summary](00-summary.md) §4.4 records which
figure is canonical and carries the 10⁻⁵ row for sections that need the pessimistic case.

**The reason it is so low is the Thomson cross-section, and the number that shows it is P_L above:
about two laser photons in every trillion scatter at all.** The electron is a very small target. At
6.652 × 10⁻²⁵ cm², an electron presents an area roughly 10⁻²⁰ of the 74 µm spot the light is spread
across, and even 6 × 10⁸ of them together intercept only a couple of parts per trillion of the beam.
Essentially all of the laser light passes straight through the electron bunch and continues into the
beam dump, unchanged and unused.

Three things could raise it, and none by orders of magnitude:

- **More charge.** Flux is linear in N_e, so a nanocoulomb bunch buys a factor of ten. This is one of
  the strongest practical arguments for the linac route.
- **Tighter focus.** Flux goes as 1/A, but the a₀ ≲ 0.3 constraint (§5.2) caps how tight the focus can
  be without destroying the monochromaticity. There is perhaps a factor of two here, bought against
  bandwidth.
- **Recirculating the scattering pulse.** An optical cavity that stores the scattering pulse and
  presents it to many electron bunches raises the effective photon number by the cavity finesse. This
  is standard practice at storage-ring Compton sources and is why HIgS operates the way it does. It is
  much harder for a 100 fs pulse than for a continuous-wave or picosecond one, because the cavity must
  preserve the pulse's spectral phase on every round trip.

Even taking all three, the conversion stays in the 10⁻⁴ to 10⁻³ region. **That is the ceiling, and it
is worth noticing that the canonical 10⁻⁴ sits at the bottom of it**: the figure the rest of this set
uses as an optimistic bound is what this machine reaches only after every available improvement has
been applied simultaneously. Anything above 10⁻³ is outside this section's estimate entirely, which is
why the 10⁻² row in [03-feasibility](03-feasibility.md) Part 2, Step 6 is labelled there as an upper
bound on the argument rather than a physical estimate. **This is not an efficiency that engineering
fixes; it is what the Thomson cross-section is.** It is one of the two multiplicative terms behind the
production verdict in [03-feasibility](03-feasibility.md), the other being the fraction of gammas that
react in the target ([06-target-and-capture](06-target-and-capture.md)).

### 6.4 Beam geometry at the target

Two useful consequences of §2.2 for the target design:

- The gamma beam leaves the interaction point with a half-angle of about 484 µrad, so at 1 m it is
  roughly 1 mm across and at 10 m roughly 1 cm. The electron beam spot at the interaction point,
  10-20 µm, contributes negligibly to that.
- The beam is therefore **naturally small and naturally collimated**, and a liquid helium-4 target of
  the kind [06-target-and-capture](06-target-and-capture.md) specifies can be a narrow column a metre
  long rather than a wide vessel. That is convenient for cryogenics and for the n·σ·L path length,
  which is the term the target design is trying to maximise.

---

## 7. There is no gamma focusing optic

The concept note's third architecture block, "hard X-ray focusing optics (multilayer mirrors, grazing
incidence)", cannot be built at 20-27 MeV, and the correction is worth recording because it also
removes a cost line rather than adding one.

Grazing-incidence reflection relies on total external reflection below a critical angle that scales as
1/E. At 10 keV the critical angle for a gold surface is of order 10 mrad; scaling to 20 MeV puts it
below 10 µrad, at which point no realisable mirror length intercepts a useful solid angle. Worse, above
about 1 MeV the photon interaction is dominated by Compton scattering and pair production rather than
coherent scattering, so there is no reflection to speak of at any angle. Multilayer optics reach
perhaps 100 keV. Laue lenses using Bragg diffraction in bent crystals reach the MeV region in
astrophysics instruments. **Nothing focuses 20 MeV photons.**

This does not matter, because the source does not need it. The beam is already collimated to 484 µrad
by the kinematics (§2.2), and the target sits a metre or so downstream where the beam is about a
millimetre across. The beam is shaped by **collimation and drift distance**, not by optics. What the
block should read is a collimator, which is a hole in a large block of shielding, and which is a
radiation problem rather than an optical one (§8).

---

## 8. Shielding and radiation safety

**A GeV electron accelerator, a 20-27 MeV gamma beam and a target designed to emit neutrons is a
licensed radiation facility. It is not a laboratory bench, and the concept note's cost ladder does not
contain a line for it.** This is the single largest omitted cost in the originating document.
[09-roadmap](09-roadmap.md) has since put numbers on it inside stage 3 - $10-30M for a new-build
shielded facility, $2-5M to fit out an existing host, and $2-6M for licensing and radiation
protection - and those lines are most of why stage 3 costs $12-100M against the concept note's
$3.075M. What follows is the technical content those numbers stand in for.

The hazards are separate and each needs its own treatment.

| Source | Nature | Control |
|---|---|---|
| Electron beam dump | ~11 W of beam power (100 pC × 100 Hz × 1.06 GeV), but a full electromagnetic shower | high-Z dump of ~25 radiation lengths, in a concrete enclosure |
| Photoneutrons from the dump | GeV shower photons exceed the giant dipole resonance threshold in the dump material | neutron shielding: hydrogenous material plus boron, outside the high-Z |
| Collimator | rejects roughly 99% of the gamma beam to get 1% bandwidth (§2.2) | the collimator is a second beam dump and must be shielded as one |
| Gamma beam, 20-27 MeV | above the (γ,n) threshold of essentially every nuclide it strikes | anything in or near the beam becomes a neutron source and becomes activated |
| Target neutrons | **produced by design**: ⁴He(γ,n)³He emits a neutron per reaction | [06-target-and-capture](06-target-and-capture.md) owns this |
| **Tritium** | the competing (γ,p) channel at 19.814 MeV makes tritium in the helium target, at any beam bandwidth (§2.3) | a regulated radionuclide with a 12.32 year half-life; the target loop is a tritium containment problem |
| Activation of structure | (γ,n) on copper, iron, concrete produces mostly short-lived and positron-emitting nuclides | material selection, access delay after beam off, activation survey |
| Air activation | Ar-41, N-13, O-15 in the beam enclosure | controlled ventilation with hold-up, not direct discharge |
| Laser hazards | class 4 throughout, plus a vacuum system at 10¹⁹ W/cm² focus | conventional laser safety, interlocked with the radiation enclosure |

Beyond the shielding itself, an installation of this class carries a compliance structure that has to
exist before it operates: a radiation facility licence or authorisation, a shielding design assessed
and approved before construction, a qualified radiation protection adviser, an interlocked enclosure
with a search-and-secure procedure and personnel exclusion during beam operation, dosimetry, and a
regime for accounting for the tritium the target produces.

**The comparison that sets the expectation properly:** HIgS and ELI-NP are the two facilities in the
world doing this kind of work, and both are national laboratory installations with dedicated shielded
halls, permanent health physics staff and multi-year construction programmes. A wakefield-driven
machine is genuinely smaller, because the accelerator is centimetres rather than tens of metres, but
the **radiation** footprint is set by the beam energy and the neutron production, not by the length of
the accelerator. The building shrinks much less than the accelerator does.

**This is also an argument for partnering rather than building.** Beam time on an existing licensed
facility to measure the ⁴He(γ,n)³He cross-section, which
[00-summary](00-summary.md) §1 ranks as the third-most-valuable thing this programme could do, avoids
the entire licensing and shielding cost, and it is the only route to that measurement that does not
depend on the array existing first.

---

## Open questions

- [ ] **Particle-in-cell simulation of both operating points in §4.2 has not been done.** The scaling
      law and the E_z × L_d check agree to ~20%, which is enough to say the energy is reachable and not
      enough to design a stage. In particular the penalty for running a 100 fs pulse at 10¹⁸ cm⁻³,
      where it is ~1.7× the matched duration, is unquantified.
- [ ] **Electron bunch charge is not chosen.** Flux is linear in it (§6.1), it spans 10-500 pC across
      the LWFA literature, and the whole flux estimate in §6.2 scales directly with it.
- [ ] **Achievable energy spread from this specific stage is unknown**, and by the factor of two in
      §2.3 it sets the photon bandwidth and therefore the reaction channel mix (§2.3, and
      [02-nuclear-physics](02-nuclear-physics.md)). Whether energy selection with a chicane is worth
      the charge it costs cannot be decided until this is estimated.
- [ ] **Shot-to-shot electron arrival jitter at the interaction point has not been quantified**, and
      §5.4 identifies it, rather than laser timing, as the limiting synchronisation problem.
- [ ] **The linac versus wakefield decision is recorded in §3 as "both, in order", which is a
      recommendation and not yet a plan.** **Partly addressed and now narrowed.**
      [09-roadmap](09-roadmap.md) carries a conventional GeV linac inside its stage 3 costing as a
      **fallback** line at $25-60M, taken only if the wakefield stage cannot deliver the beam quality
      or repetition rate, and its own open questions ask whether that fallback should be costed in
      parallel at the decision gate rather than left as a contingency. That is not the same as the two
      separate lines §3 asks for: a fallback is a branch of the wakefield plan, whereas §3's
      recommendation is that the linac route runs *first* and independently, to get the physics. What
      remains genuinely uncosted anywhere is the third option §3 names, **buying beam time on an
      existing licensed facility**, which §8 identifies as the only route to the ⁴He(γ,n)³He
      measurement that does not require the array to exist first, and which avoids the entire
      shielding and licensing cost.
- [ ] **Recirculating the scattering pulse in an optical cavity (§6.3) has not been assessed.** It is
      the only one of the three flux improvements that could be worth an order of magnitude, and it is
      substantially harder for 100 fs pulses than for the picosecond pulses at storage-ring sources.
- [ ] **Plasma source engineering at 100 Hz is unspecified** (§4.3): capillary electrode lifetime,
      differential pumping throughput, final-optic protection and debris mitigation are all real
      100 Hz problems that are independent of the laser.
- [ ] **The shielding design is not done** (§8). The *cost* is no longer unestimated:
      [09-roadmap](09-roadmap.md) now carries $10-30M for a new-build shielded facility, $2-5M for
      fit-out within an existing host, and $2-6M for licensing and the radiation protection programme,
      which between them are the reason stage 3 is a $12-100M item rather than the concept note's
      $3.075M. What has not been done is the design those numbers stand in for: thicknesses,
      materials, layout, capture gammas and skyshine. Note that the target's own neutron term is a
      modest 4.29 × 10⁸ n/s ([02-nuclear-physics](02-nuclear-physics.md) §6), so the design is set by
      the GeV electron beam dump and the collimator rather than by the helium target.
- [ ] **Tritium inventory from the competing (γ,p) channel has not been calculated.** It depends on the
      beam bandwidth and centre energy, and it determines whether the target loop is a minor
      radiological item or a licensed tritium facility in its own right. Shared with
      [06-target-and-capture](06-target-and-capture.md).

---

*Previous: [04-laser-array](04-laser-array.md) | Next: [06-target-and-capture](06-target-and-capture.md)*
