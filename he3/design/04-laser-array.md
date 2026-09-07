# He-3 Programme - 04 Laser Array

The array is the part of this programme that is real. It is a coherently combined, actively
phase-locked ultrafast laser system delivering 10-50 J per pulse at 100 Hz in 100 fs, and it is the
driver for the wakefield stage in [05-gamma-source](05-gamma-source.md). This section takes the
specification from [00-summary](00-summary.md) at face value, finds the one number in it that cannot
be met as written, sets out the three ways out and recommends one. It then covers coherent combining
and what phase-locking a femtosecond array actually requires, the thermal problem, the transport and
combining architecture, and what happens when channels fail. The alignment control loop that holds
all of this together is [07-ai-control](07-ai-control.md); this section defines the plant that
controller has to stabilise.

---

## 1. Array specification

Straight from [00-summary](00-summary.md) §3. Nothing here is recomputed.

| Parameter | Value | Basis |
|---|---|---|
| Laser sources | 100-500 | design range |
| Per-laser average power | 10 W | infrared, ~1.03 µm |
| Total average power | 1-5 kW | 100-500 × 10 W |
| Repetition rate | 100 Hz | |
| Pulse duration | 100 fs | |
| Pulse energy, whole array | 10 J (100 lasers) / 50 J (500) | average power ÷ rep rate |
| **Pulse energy per laser** | **0.10 J** | the number this section is about |
| Peak power, whole array | 100 TW (100) / 500 TW (500) | pulse energy ÷ duration |
| Focal intensity, 1 µm spot | 1.3 × 10²² W/cm² (100) / 6.4 × 10²² (500) | |
| Focal intensity, 3 µm spot | 1.4 × 10²¹ W/cm² (100) / 7.1 × 10²¹ (500) | |
| Coherent peak-intensity gain | N² relative to one beam at the same aperture | N× the total power, not N² |

Two of those focal intensity rows are worth reading twice. They are the numbers the concept note gave
as ~10²⁴ W/cm², and the correction is arithmetic rather than physics: 100 TW into a diffraction-limited
1 µm spot is 1.3 × 10²² W/cm², about 80× lower. §3.3 below spells out where the N² framing comes from
and why it does not put more joules on the target.

A further note on the intensity rows, developed in [05-gamma-source](05-gamma-source.md) §4: the
wakefield stage does not want a 1 µm spot. Its matched focal spot is of order 20-30 µm radius and its
working intensity is of order 10¹⁹ W/cm², roughly a thousand times lower than the diffraction limit of
the same aperture. Tighter focusing is not better here, it is off-design.

---

## 2. The pulse energy problem

### 2.1 The number that does not work

0.10 J in 100 fs from a device described as a 10 W fibre laser is the specification's real difficulty,
and it is worth being precise about how far off it is. 0.10 J in 100 fs is 1 TW of peak power out of a
single fibre.

Single-channel femtosecond fibre chirped-pulse amplification in the 100 fs class delivers of order
0.1-1 mJ, with research rod-type and large-pitch fibres reaching a few mJ at reduced repetition rate.
Taking the optimistic end, 1 mJ, the specification asks for **roughly 100× more pulse energy per
channel than the technology delivers**, and large-mode-area and rod-type fibres push that ceiling by
factors of a few, not by two orders of magnitude.

Two independent limits set the mJ ceiling, and they arrive at the same place, which is why the number
is robust rather than a matter of engineering effort.

**Nonlinearity (the B-integral).** The accumulated nonlinear phase along an amplifier is

```
  B = (2π/λ) ∫ n₂ I(z) dz
```

with n₂ ≈ 2.6 × 10⁻¹⁶ cm²/W for silica. Pulse quality after compression degrades once B exceeds a few
radians. Working backwards at B = 3, λ = 1.03 µm:

```
  I · L_eff = B λ / (2π n₂) = 3 × 1.03e-4 cm / (6.283 × 2.6e-16) = 1.9 × 10¹¹ W/cm
```

For a large-mode-area fibre with 5,000 µm² (5 × 10⁻⁵ cm²) mode area and an effective interaction
length of ~30 cm (shorter than the physical fibre, because the power only builds up towards the
output end), that permits a peak power of ~3 × 10⁵ W in the amplifier. Stretched to 2 ns before
amplification, that is:

```
  E_max ≈ 3 × 10⁵ W × 2 × 10⁻⁹ s ≈ 0.6 mJ
```

**Optical damage at the facet.** That same 0.6 mJ over 5,000 µm² is a fluence of ~13 J/cm² in a 2 ns
stretched pulse. Fused silica surface damage at nanosecond duration sits in the 10-20 J/cm² region.
The two limits land within a factor of two of each other, which is the signature of a technology
already operating at its ceiling on both axes rather than one with obvious headroom.

Stretching further helps both limits linearly, and 2 ns is not the maximum; but the stretcher and
compressor grow with the stretch ratio, and the compressor is already the array's most expensive and
most damage-limited component (§4.3). This is a trade with a few times of headroom in it, not a
hundred times.

### 2.2 The identity that constrains the design

The whole problem fits in two lines. With N channels, per-channel pulse energy E_ch and repetition
rate f:

```
  E_pulse = N × E_ch                (combined pulse energy)
  P_avg   = N × E_ch × f            (total average power)
```

The specification fixes **four** quantities: P_avg = 1-5 kW, f = 100 Hz, N = 100-500, and per-channel
average power 10 W (hence E_ch = 0.10 J). Only three are independent. Something has to give, and the
choice of which is the central architectural decision of this section.

### 2.3 The three ways out

| | **(a) More, smaller elements** | **(b) Change the gain medium** | **(c) Relax the pulse duration** |
|---|---|---|---|
| Change | keep fibre at E_ch ≈ 1 mJ, raise N | thin-disk or slab amplifiers at 0.1-1 J per element | lengthen the compressed pulse from 100 fs |
| N required for 10 J | ~10,000 | ~10-100 | unchanged |
| N required for 50 J | ~50,000 | ~50-500 | unchanged |
| Per-channel average power at 100 Hz | 0.1 W | 10-100 W | unchanged |
| Effect on the amplifier limit | none needed, stays inside it | sidesteps it, different physics | **none: the amplifier sees the stretched ns pulse, not the compressed one** |
| Effect on the compressor | per-channel compression, ~1 mJ each, trivial | one large compressor at full energy | lower peak intensity on the final gratings, genuine relief |
| Effect on the wakefield stage ([05](05-gamma-source.md)) | none | none | **negative**: longer pulse means lower plasma density, which raises the matched power requirement |
| Effect on the alignment problem | far harder: 10⁴ independent phases | far easier: 10-100 phases | neutral |
| Modularity and redundancy | excellent, per-channel hot-swap | poor, each element is a large fraction of the array | neutral |
| 100 Hz average-power handling | excellent, fibre is surface-area rich | good for thin-disk, harder for slabs | neutral |
| Lineage | ICAN, XCAN | conventional high-energy laser practice | n/a |
| Capital cost | dominated by channel count, very high at 10⁴ | dominated by amplifier heads and the compressor | negligible on its own |

Route (c) needs correcting rather than simply listing, because it looks like a way out and is not.
The amplifier chain sees the **stretched** pulse, typically 1-3 ns, so the compressed duration does not
enter the B-integral or the facet fluence at all. Relaxing 100 fs to 300 fs buys nothing at the
amplifier. It does relieve the compressor gratings and the final transport optics, which is worth
having, but it is a second-order benefit. Worse, it hurts the stage it is meant to serve: in the
blowout regime the drive pulse length is tied to the plasma density, and a longer pulse forces a lower
density, which increases the matched spot size and therefore the **power** required to reach the same
normalised amplitude a₀. Lengthening the pulse makes the wakefield stage more demanding, not less.
See [05-gamma-source](05-gamma-source.md) §4.2.

### 2.4 Recommendation: route (a)

**Keep fibre, hold P_avg at 1-5 kW and E_pulse at 10-50 J, and let the channel count float to of order
10⁴.** The 10 W per element is the figure that gives way; at 100 Hz and ~1 mJ each channel delivers
0.1 W average, and the array's total average power is preserved by having 100× more channels.

**This recommendation has not yet been adopted by the rest of the set.** [00-summary](00-summary.md)
§3 now carries both cases side by side: the originating 100-500 x 0.10 J reference case, which this
section shows is not buildable as fibre, and route (a) as the recommended case. Sections 09 and 10 are
still staged on the reference case, because restaging the roadmap and recosting it around 10⁴ channels
is a scope decision rather than a correction. Nothing in the feasibility assessment turns on it: the
total average power is 1-5 kW either way, so every rate figure is unchanged. What changes is capital
cost, which is dominated by channel count.

Five reasons, in order of weight.

1. **It preserves what the programme is actually good at.** [00-summary](00-summary.md) §1 ranks
   AI-driven coherent alignment as the most defensible contribution here. That contribution gets more
   valuable as N grows, not less: at N ≈ 100 a conventional dithering scheme is adequate and a learned
   controller is a convenience, whereas at N ≈ 10⁴ the convergence time of hand-tuned schemes becomes
   the binding constraint and the controller is the enabling technology. Route (a) is the only option
   that makes the control work load-bearing rather than incidental.
2. **It has a lineage.** ICAN proposed precisely this, of order 10⁴ coherently combined fibre channels
   as the driver for a laser-plasma accelerator, and XCAN built a demonstrator of the combining
   architecture. The programme is not inventing an architecture; it is executing a published one
   against a specific target.
3. **Fibre is the gain medium whose average-power scaling permits 100 Hz at this pulse energy.** That
   is exactly the gap the gamma source needs filled: most petawatt-class systems fire once a second or
   less, and 100 Hz at joule class is the specific capability an array buys. See
   [05-gamma-source](05-gamma-source.md) §4.3.
4. **It keeps the compressor problem small.** Compressing per channel at ~1 mJ is routine. Route (b)
   puts 10-50 J through one compressor, which is a metre-class grating problem (§4.3).
5. **Redundancy is free.** Losing one channel of 10,000 is a 0.02% loss of combined intensity (§6).
   Losing one thin-disk head of twenty is a 10% loss.

**Route (b) is the faster route to a working gamma beam, and that should be said plainly.** Thin-disk
and slab amplifiers reach joule class at 100 Hz today, in tens of elements rather than tens of
thousands. If the only objective were a gamma source, the correct engineering decision would be to buy
a commercial system and skip the array entirely. The array is justified by the control research, by
the ICAN lineage, and by the long-term average-power argument, not by being the shortest path to
photons.

**The cost consequence is severe and belongs on the record here rather than buried in
[10-economics](10-economics.md).** The concept note budgeted ~$3.1M for a 100-beam prototype. A 10⁴-channel
array is two orders of magnitude more channels, and even at an aggressive per-channel cost it does not
land anywhere near that figure. Three things soften it without removing it: per-channel cost falls
steeply with volume and with monolithic integration, which is the core of the ICAN cost argument; the
array can be built and useful in stages, so a 10³-channel machine at 1 J is a real instrument on the
way to 10 J; and the proof-of-concept in [08-proof-of-concept](08-proof-of-concept.md) is 5-10 channels
either way and is unaffected. The honest statement is that route (a) makes the full-scale machine
substantially more expensive than the concept note assumed, and that
[09-roadmap](09-roadmap.md) and [10-economics](10-economics.md) need to absorb that.

---

## 3. Coherent beam combining

### 3.1 Tiled aperture versus filled aperture

These are the two ways to make N beams behave as one, and they fail differently.

| | **Tiled aperture** | **Filled aperture** |
|---|---|---|
| Geometry | N beamlets side by side on a close-packed grid, combined in the far field at the focus | N beams superimposed into a single beam inside a combining element, combined in the near field |
| Combining element | none: free space and a common focusing optic | beamsplitter tree, polarisation combiners, or a diffractive optical element |
| Efficiency into the main lobe | 60-80% typical for a hexagonal array, set by fill factor | 90-95%+ achievable |
| Where the lost energy goes | grating side lobes around the main lobe | rejected ports of the combiner, plus scatter |
| Scaling in N | trivially good, add more tiles | needs a tree (log₂N stages) or a bespoke DOE; each element sees the full combined power |
| Power on the combining element | none: nothing sees the full energy until the focus, which is in vacuum | the last element carries the full 10-50 J, at 100 fs |
| Femtosecond suitability | good: each channel compresses its own ~1 mJ pulse, and combining happens on already-short pulses | harder: either combine before compression, putting the full energy through one compressor, or match dispersion perfectly through the combiner |
| Alignment burden | pointing plus piston phase plus group delay, per tile | piston phase plus group delay, per channel |

**Recommendation: tiled aperture, compressing per channel and combining after compression.** The
decisive argument is thermal and damage-related rather than optical. In a filled-aperture design the
final combining element and the compressor both carry the full 10-50 J at 100 fs, which is a
metre-class optic problem (§4.3). In a tiled design nothing sees more than one channel's ~1 mJ until
the beams meet in vacuum at the focus, where there is no material to damage. The price is the 60-80%
fill-factor efficiency and a harder alignment problem, and the harder alignment problem is the one
the programme is set up to solve.

This is also the architecture [00-summary](00-summary.md) §11 already records as decided.

### 3.2 What phase-locking actually requires

Phase-locking a continuous-wave array requires one thing per channel: **piston phase**, the optical
phase of the carrier, held to a fraction of a wavelength. The combining efficiency for a Gaussian
distribution of residual piston errors with RMS σ radians is approximately

```
  η ≈ exp(−σ²)
```

| Residual piston RMS | σ (rad) | Combining efficiency |
|---|---|---|
| λ/10 | 0.628 | 0.67 |
| λ/20 | 0.314 | 0.91 |
| λ/40 | 0.157 | 0.98 |
| λ/60 | 0.105 | 0.99 |

So **λ/20 RMS is the working requirement** and λ/40 is the target. At 1.03 µm, λ/20 is 52 nm of
optical path.

Femtosecond pulses add two more requirements, and this is the real technical barrier. It is not that
the phase requirement gets tighter; it is that two further quantities have to be matched
simultaneously, and they drift independently of the carrier phase because fibre is dispersive.

**Group delay (envelope timing).** The pulse envelopes must arrive together. Combining efficiency
falls once the delay mismatch approaches the pulse duration, so for 100 fs pulses the requirement is
of order 10 fs RMS, which is **3 µm of optical path**. Note that this is 60× looser than the piston
requirement in absolute path terms, but it is a different quantity: piston is the carrier phase modulo
2π, group delay is the absolute envelope arrival time. A channel can be perfectly piston-locked and
still be 500 fs late, and the sensor that measures one does not see the other.

**Spectral phase (dispersion matching).** A 100 fs transform-limited pulse at 1.03 µm has a bandwidth
of roughly:

```
  Δν ≈ 0.44 / 100 fs = 4.4 THz
  Δλ = λ²Δν/c = (1.03 µm)² × 4.4 THz / c ≈ 16 nm
```

Every channel must present the same spectral amplitude and the same spectral phase across those 16 nm.
Mismatched second- or third-order dispersion between channels produces pulses of different duration
and chirp that cannot be made to combine efficiently by any amount of piston adjustment. In a
compress-per-channel architecture this means every compressor must be matched, which is a manufacturing
and alignment tolerance rather than something the control loop can fix.

**Carrier-envelope phase.** At 100 fs the pulse contains about 29 optical cycles at 1.03 µm, so the
carrier-envelope offset is a second-order effect for combining efficiency: matching piston phase and
group delay implicitly constrains it. It becomes a first-order requirement only if the pulses are
compressed below roughly 10 fs, and it matters separately for shot-to-shot reproducibility of
wakefield injection ([05-gamma-source](05-gamma-source.md) §4.4).

**The summary that matters:** CW combining is a one-dimensional-per-channel control problem.
Femtosecond combining is at least three-dimensional per channel (piston, group delay, spectral phase),
with two of those three not observable by the interferometric sensor that measures the first. This is
why coherent combining of femtosecond pulses is a research topic while CW combining is a product.

### 3.3 The N versus N² distinction, spelled out

Both statements in the specification table are true and they answer different questions. Here is the
arithmetic.

Take N beamlets, each carrying power P through a sub-aperture of area a. Arrange them tiled into a
common aperture of area A = N·a, and focus with a lens of focal length f. Diffraction sets the focal
spot area of a beam filling aperture area A at approximately λ²f²/A, so the peak focal intensity of a
beam of power P_tot filling area A is:

```
  I_peak ∝ P_tot · A / (λ² f²)
```

Three cases:

```
  One beamlet alone, sub-aperture a:
      I₁     ∝ P · a

  N beamlets, incoherent, tiled across aperture A = N·a:
      each beamlet still diffracts from its own sub-aperture a, so each makes a
      broad spot of area ∝ λ²f²/a; N of them overlap in intensity:
      I_inc  ∝ N · P · a  =  N · I₁

  N beamlets, phase-locked, tiled across aperture A = N·a:
      the array diffracts as one aperture of area N·a, giving a spot N times smaller
      in area, carrying N times the power:
      I_coh  ∝ (N·P) · (N·a)  =  N² · P · a  =  N² · I₁  =  N · I_inc
```

So:

| Comparison | Gain |
|---|---|
| Coherent array vs **one beamlet** at the same sub-aperture | **N²** |
| Coherent array vs **the same N beamlets combined incoherently** | **N** |
| Total power, any of the three | **N·P**, always |

Coherence buys focal *concentration*, not energy. The N² figure is the ratio to a single small beam,
and it is real: it is the reason a tiled array focuses like a large telescope rather than like N small
ones. But it does not add a joule. The energy budget in [03-feasibility](03-feasibility.md) is
constrained by N·P and by nothing else, and this is exactly the confusion that produced the
concept note's 10²⁴ W/cm².

Two corrections to the ideal N² figure in practice. The fill factor of a tiled array is below 1
(hexagonal close packing of circular beams gives about 0.9 geometrically, and apodised Gaussian
beamlets much less), and the missing fraction goes into side lobes rather than the main lobe, so
60-80% into the central lobe is the realistic figure. And residual piston error multiplies through
exp(−σ²) from §3.2 on top of that.

### 3.4 Actuators and the disturbance spectrum

The control loop must reject a disturbance spectrum whose largest amplitudes sit at the lowest
frequencies. Amplitudes below are per channel, in radians of piston phase.

| Disturbance | Band | Typical piston amplitude | Rejection needed |
|---|---|---|---|
| Thermal drift in fibre, mounts and enclosure | DC to 0.1 Hz | tens to hundreds of rad | > 40 dB |
| Air currents, enclosure convection | 0.1-10 Hz | ~1 rad | > 30 dB |
| Structural and acoustic vibration | 10 Hz to 1 kHz | 0.1-1 rad | 20-30 dB |
| Pump-diode noise, amplifier index fluctuation | up to a few kHz | < 0.1 rad | 10-20 dB |
| Mount creep, per-shot pointing | at the 100 Hz shot rate | varies | detect and correct shot to shot |

A servo needs roughly a decade of bandwidth above the highest frequency it must suppress with useful
gain, so **rejecting to a few kHz calls for a closed-loop unity-gain bandwidth of order 10 kHz**, and
therefore a total sensor-plus-controller-plus-actuator latency budget of a few tens of microseconds.
That drives a two-stage actuator per channel:

| Actuator | Stroke | Bandwidth | Role |
|---|---|---|---|
| Piezo fibre stretcher | mm of fibre, hundreds of waves | a few kHz, resonance-limited | absorbs thermal drift and the whole DC-to-Hz band |
| Electro-optic phase modulator (LiNbO₃) | a few waves | MHz, effectively unlimited here | the fast loop, everything above ~100 Hz |
| Motorised mount, tip and tilt | mrad | Hz | pointing and initial acquisition, not phase |

**Three consequences follow immediately, and all three matter to
[07-ai-control](07-ai-control.md) and [08-proof-of-concept](08-proof-of-concept.md).**

First, **the concept note's stepper motors cannot do phase.** A stepper with 10-50 µm resolution
moving once per second is between 200× and 1,000× too coarse for a λ/20 = 52 nm requirement and three
to four decades too slow. The concept note's own phase-to-displacement conversion computes a correction
in tens of nanometres and then rounds it to an integer number of steps, which quantises it to zero.
Steppers are the right actuator for pointing and for coarse path-length acquisition, and they are the
wrong actuator for piston phase.

Second, **a 10 Hz camera loop cannot do phase either.** It can do beam pointing, fill-factor
optimisation, slow thermal drift, and group-delay acquisition, all of which are genuinely useful and
all of which are what the proof-of-concept bench should target. It cannot close a kHz phase loop.

Third, the correct architecture is therefore **two-tier**: a fast, local, per-channel electronic phase
lock (dither-and-demodulate tagging in the LOCSET style, or stochastic parallel gradient descent, with
an electro-optic modulator as the actuator) running at kHz to MHz, underneath a slow global controller
working on camera imagery that handles alignment, group delay, fill factor, drift and fault
reconfiguration. **The learned controller belongs in the upper tier.** This reconciles the concept
note's camera-and-motor scheme with what phase-locking requires: the scheme is right for the layer it
can reach, and a second layer beneath it is not optional.

The scaling argument that makes the upper tier interesting is convergence time. Dither tagging assigns
each channel its own modulation frequency, so the available bandwidth is divided among N channels and
per-channel loop bandwidth falls roughly as 1/N. Gradient-descent schemes converge in a number of
iterations that grows at least linearly with N. At N ≈ 100 both are comfortable. At the N ≈ 10⁴ that
§2.4 recommends, both are the binding constraint, and a controller that can predict rather than search
is the difference between an array that locks and one that does not.

---

## 4. Thermal management

### 4.1 The heat load

Wall-plug efficiency for continuous-wave ytterbium fibre lasers reaches 20-30%. Taking **30% as an
optimistic assumption**, the array's electrical input and its heat rejection are:

| Optical output | Electrical input at 30% | Heat to remove |
|---|---|---|
| 1 kW (100-laser configuration) | 3.3 kW | 2.3 kW |
| 5 kW (500-laser configuration) | 16.7 kW | 11.7 kW |

**30% is optimistic here for a specific reason worth stating.** A femtosecond CPA chain loses
efficiency at the stretcher, the pulse picker and the compressor, and at 100 Hz the pulse picker
discards the overwhelming majority of the oscillator's pulses. If the pump diodes run continuous-wave
while the amplifiers deliver 100 pulses per second, the real wall-plug efficiency is far below 30% and
the heat load correspondingly higher. Pulsed pumping recovers much of this and should be assumed in the
design, but the figure above should be read as a floor on the cooling requirement rather than an
estimate of it.

### 4.2 Per-channel load, and why route (a) changes the problem

| Configuration | Channels | Optical out per channel | Heat per channel | Cooling approach |
|---|---|---|---|---|
| Specification as written | 100 | 10 W | 23 W | liquid cooling per channel |
| Specification as written | 500 | 10 W | 23 W | liquid cooling per channel |
| Route (a), 10 J array | ~10,000 | 0.1 W | 0.23 W | conduction to a cooled chassis, air or water at rack level |
| Route (a), 50 J array | ~50,000 | 0.1 W | 0.23 W | as above, at five times the density |

Route (a) converts a per-channel cooling problem into an aggregate packaging problem. 0.23 W per
channel is trivial in isolation; 2.3 kW spread across ten thousand channels in a hall, each of which
must hold its optical path stable to tens of nanometres, is not. The requirement is not raw cooling
capacity, it is **thermal uniformity and stability**, which is a much harder specification than
"remove 2.3 kW".

### 4.3 The compressor and the final optics

Whatever route is chosen, the last dispersive and combining elements are the array's most exposed
components, and they are exposed in two independent ways.

**Damage fluence.** Multilayer dielectric gratings for sub-picosecond pulses damage at roughly 0.5-1
J/cm². Operating at 0.3 J/cm² for margin:

| Combined pulse energy | Illuminated grating area required | Beam diameter at 72° grazing incidence |
|---|---|---|
| 10 J | ~33 cm² | ~3.6 cm |
| 50 J | ~167 cm² | ~8 cm |

The grazing incidence geometry stretches the footprint along the dispersion axis by 1/cos(72°) ≈ 3.2,
so the 50 J case needs gratings of order half a metre long. Metre-class gratings are the dominant cost
line in petawatt-class facilities. **This is the strongest single argument for compressing per channel
and combining afterwards**, which removes the problem entirely: each channel's compressor handles 1 mJ.

**Absorbed average power.** Dielectric coatings absorb of order 0.1-0.5% of incident average power. At
1-5 kW that is 1-25 W deposited into optics whose surface figure must hold to about λ/10. The resulting
thermal lensing and surface deformation is slow, deterministic and cumulative, and it is precisely the
kind of disturbance a learned controller can anticipate rather than merely chase.

### 4.4 Why thermal drift is the dominant disturbance

This is the number that ties this section to [07-ai-control](07-ai-control.md). The thermo-optic
coefficient of silica is dn/dT ≈ 1.1 × 10⁻⁵ K⁻¹. For a fibre of length L, a temperature change ΔT
produces a piston phase change:

```
  Δφ = (2π/λ) · L · (dn/dT) · ΔT

  For L = 10 m, ΔT = 1 mK, λ = 1.03 µm:
  Δφ = (6.10 × 10⁶ rad/m) × (10 m × 1.1e-5 K⁻¹ × 1e-3 K)
     = (6.10 × 10⁶) × (1.1 × 10⁻⁷ m)
     = 0.67 rad
```

Thermal expansion adds roughly a further 10% to that coefficient. So **one millikelvin across ten
metres of fibre moves a channel by 0.67 radians, which is about λ/9, which is already worse than the
λ/20 combining requirement on its own.** Open-loop stability would demand sub-millikelvin control of
every fibre in the array, which is not achievable in any realistic enclosure. The loop must be closed,
and thermal drift is the disturbance it spends most of its authority rejecting.

Three consequences:

- The drift is **slow** (DC to ~0.1 Hz), so it is within reach of the camera-rate outer loop, not just
  the fast electronic inner loop.
- The drift is **large**, tens to hundreds of radians, so it consumes the whole stroke of the piezo
  stretcher and would saturate an electro-optic modulator on its own. Hence the two-stage actuator.
- The drift is **correlated across channels**, because channels sharing a rack, a coolant loop or an
  air path drift together. A controller that models the correlation structure needs far fewer
  measurements per channel than one treating 10⁴ channels as independent. That correlation is the
  specific thing a learned model can exploit and a per-channel PID cannot, and it is the strongest
  technical argument in [07-ai-control](07-ai-control.md).

---

## 5. Beam transport and combining architecture

The recommended architecture: one seed oscillator, a passive split to N channels, per-channel
actuation and amplification, per-channel compression, tiled-aperture combination at a common focusing
optic, and a sampled feedback path to the controller. A single seed matters for more than convenience:
it makes every channel intrinsically synchronous, so the residual timing error is differential path
drift rather than independent oscillator jitter. That same property is what makes the two-pulse timing
requirement in [05-gamma-source](05-gamma-source.md) §5 tractable.

```
   ┌──────────────────────────────────────────────────────────────────────┐
   │  SEED: mode-locked oscillator, 1.03 µm, ~16 nm bandwidth              │
   │        pulse picker gates to 100 Hz                                   │
   └───────────────────────────────┬──────────────────────────────────────┘
                                   │
                        ┌──────────▼──────────┐
                        │  STRETCHER          │  100 fs → ~2 ns chirped
                        └──────────┬──────────┘
                                   │
                   ┌───────────────▼───────────────┐
                   │  1 : N PASSIVE SPLITTER TREE  │   N ≈ 10⁴ (route a)
                   └───┬───────────┬───────────┬───┘
                       │           │           │
                    ch 1        ch 2   ...   ch N
                       │           │           │
              ┌────────▼───┐  ┌────▼───┐  ┌────▼───┐
              │ EOM        │  │ EOM    │  │ EOM    │   fast piston, MHz, few waves
              ├────────────┤  ├────────┤  ├────────┤
              │ PIEZO      │  │ PIEZO  │  │ PIEZO  │   slow piston + group delay,
              │ STRETCHER  │  │        │  │        │   kHz, mm stroke
              ├────────────┤  ├────────┤  ├────────┤
              │ Yb PREAMP  │  │        │  │        │
              ├────────────┤  ├────────┤  ├────────┤
              │ Yb POWER   │  │        │  │        │   ~1 mJ stretched out
              │ AMPLIFIER  │  │        │  │        │
              ├────────────┤  ├────────┤  ├────────┤
              │ COMPRESSOR │  │        │  │        │   per channel, ~1 mJ, 100 fs
              ├────────────┤  ├────────┤  ├────────┤
              │ SHUTTER    │  │        │  │        │   fault isolation, see §6
              └────────┬───┘  └────┬───┘  └────┬───┘
                       │           │           │
                   ┌───▼───────────▼───────────▼───┐
                   │  TILED APERTURE               │  hexagonal close pack,
                   │  N beamlets, fill factor ~0.9 │  no element sees full energy
                   └───────────────┬───────────────┘
                                   │
                   ┌───────────────▼───────────────┐
                   │  SAMPLING WEDGE (< 0.1%)      │──► camera + photodiode array
                   └───────────────┬───────────────┘         │
                                   │                         │
                   ┌───────────────▼───────────────┐         │
                   │  COMMON FOCUSING OPTIC        │         │
                   │  off-axis parabola, in vacuum │         │
                   └───────────────┬───────────────┘         │
                                   │                         │
                        ┌──────────▼──────────┐              │
                        │  BEAM SPLIT (§05)   │              │
                        │  ~80% drive arm     │              │
                        │  ~20% scatter arm   │              │
                        └──────────┬──────────┘              │
                                   │                         │
                                   ▼                         │
                    to wakefield stage + ICS               ┌─▼──────────────┐
                    interaction point (05)                 │  CONTROLLER    │
                                                           │  fast: per-ch  │
                                                           │  slow: learned │
                                                           │  (07)          │
                                                           └─┬──────────────┘
                                                             │
                    phase, delay, pointing corrections ◄──────┘
                    to every channel's EOM / piezo / mount
```

Four design decisions are visible in that diagram and are worth naming.

**The split to the drive and scatter arms is by channel group, not by beamsplitter.** Splitting the
combined beam requires an optic that carries 10-50 J at 100 fs, which is the damage problem §4.3 exists
to avoid. Assigning, say, 8,000 channels to the drive arm and 2,000 to the scatter arm avoids it
entirely, and has the further advantage that the two arms can be independently phased and independently
pointed. See [05-gamma-source](05-gamma-source.md) §5.

**Compression is per channel and before combining.** This follows from §3.1 and §4.3. The cost is that
every compressor must be dispersion-matched to every other, which is a tolerance rather than a
controllable degree of freedom.

**The sampling wedge takes under 0.1% of the beam.** At 10 J that is still 10 mJ per shot into the
diagnostic path, which is far more than any camera can survive, so the diagnostic leg needs its own
attenuation chain. The diagnostic path is a beam-handling problem in its own right, not a detail.

**The focusing optic and everything past it is in vacuum.** At 10¹⁹ W/cm² and above, air ionises and
self-focusing in air is catastrophic well below that. The vacuum boundary sits before the final focus,
and its window is another full-energy optic unless the beam is transported through vacuum from the
tiled aperture onwards.

---

## 6. Failure and redundancy

### 6.1 Graceful degradation

Combined peak intensity scales as the square of the number of correctly phased channels, so losing m
of N gives:

```
  I(m) / I(0) = ((N − m)/N)²  ≈  1 − 2m/N   for small m/N
```

| N | Channels lost | Intensity retained |
|---|---|---|
| 500 | 1 | 99.6% |
| 500 | 10 | 96.0% |
| 500 | 50 (10%) | 81.0% |
| 10,000 | 1 | 99.98% |
| 10,000 | 100 (1%) | 98.0% |
| 10,000 | 1,000 (10%) | 81.0% |

The scaling is the same in fractional terms, but the granularity is completely different, and this is
the redundancy half of the route (a) argument in §2.4: at N = 10⁴ a single channel failure is
invisible, and the array can run for a maintenance interval accumulating faults without a measurable
change in output.

There is a second effect the arithmetic above does not capture. A dead channel leaves a hole in the
tiled aperture, and a hole is an aperture perturbation: it moves energy out of the central lobe into
the side lobes beyond the fill-factor loss already accounted for. A controller that can re-optimise the
surviving channels' phases and, if the aperture supports it, apodise around the hole, recovers part of
that. A fixed dither-tagging scheme cannot. This is another place where the learned controller earns
its keep rather than merely being convenient.

### 6.2 A silent failure is worse than a dead channel

A channel that goes dark removes its amplitude. A channel that keeps emitting with a wrong phase, a
broken group delay or a distorted spectrum **adds a field that partly cancels the others**. Worst case,
at phase π:

| N = 500, 50 channels affected | Combined amplitude | Intensity retained |
|---|---|---|
| all 500 correctly phased | 500 | 100% |
| 50 shuttered | 450 | 81% |
| 50 at random phase | ~450 on average, 400 worst case | 81% average, 64% worst case |

**Shuttering a faulty channel is strictly better than leaving it running.** That makes the per-channel
shutter in the §5 diagram a functional requirement rather than a convenience, and it makes per-channel
health monitoring mandatory: the array must be able to tell a channel that is contributing correctly
from one that is contributing wrongly, and the two look identical on a power meter.

The diagnostics that distinguish them are per-channel output energy, per-channel spectrum (to catch a
damaged amplifier or a drifting compressor), and the channel's own error signal from the fast phase
loop. A channel whose phase loop has lost lock reports it; a channel whose group delay has slipped by
a picosecond does not, and needs a separate cross-correlation measurement against a reference. Group
delay is the failure mode most likely to go undetected.

### 6.3 Hot-swap and the maintenance interval

The failure rate arithmetic is what makes hot-swap non-negotiable at scale. If a channel has a mean
time between failures of 20,000 hours, which is optimistic for an assembly containing pump diodes, a
fibre amplifier, a compressor and two actuators:

| N | Array-level mean time between channel failures |
|---|---|
| 100 | 200 hours (~8 days) |
| 500 | 40 hours (~1.7 days) |
| 10,000 | 2 hours |

At N = 10⁴ the array experiences a channel failure every couple of hours. If a failure required
shutting the array down, the machine would never run. The design consequences:

- **Modular drawers.** Channels are packaged in groups of 8-16, in drawers that can be withdrawn and
  replaced while the array runs at fractionally reduced power.
- **Per-channel shutters** (§6.2), so a failing channel is isolated the moment it is detected rather
  than at the next maintenance window.
- **Single-channel re-acquisition.** The controller must be able to bring one channel back into lock
  without unlocking the rest. Dither-tagging schemes support this naturally, since each channel carries
  its own tag frequency. A global gradient-descent scheme optimising a single scalar metric does not,
  because it has no per-channel observable. This is a concrete architectural reason to keep per-channel
  tagging in the fast inner loop even if a learned controller runs above it.
- **Spares policy driven by the failure rate, not by cost.** At 2 hours mean time between failures, the
  spares holding and the swap procedure are operational parameters of the machine.

The proof-of-concept in [08-proof-of-concept](08-proof-of-concept.md) cannot test any of this at 5-10
channels, and should not try. What it can and should test is single-channel fault injection: shutter
one beam and measure how fast the controller re-converges on the survivors, and how much of the lost
central-lobe power it recovers by re-optimising. That is a small, cheap, decisive experiment for the
redundancy claim.

---

## Open questions

- [ ] **The channel count is the open architectural decision.** §2.4 recommends of order 10⁴, which
      the concept note's budget does not accommodate. [10-economics](10-economics.md) needs a
      per-channel cost model at volume before the recommendation can be confirmed or overturned.
- [ ] **Achievable per-channel pulse energy awaiting calculation.** The 0.6 mJ B-integral estimate in
      §2.1 uses a 30 cm effective length and a 2 ns stretch. The real figure depends on the amplifier
      gain profile, the actual stretch ratio and the mode area of the chosen fibre, and it sets N
      directly. Nothing here has been modelled.
- [ ] **Combining efficiency of a tiled array at N ≈ 10⁴.** Published demonstrations are at N of order
      10-100. Whether the fill-factor and residual-phase losses stay at 60-80% at three more orders of
      magnitude, or degrade, is not established.
- [ ] **Dispersion matching tolerance across 10⁴ independent compressors.** §3.2 states the requirement
      qualitatively. The allowable channel-to-channel group-delay dispersion mismatch for a given
      combining efficiency has not been computed, and it may be the binding manufacturing tolerance.
- [ ] **Group-delay drift measurement.** §6.2 identifies group delay as the failure mode most likely
      to go undetected. A per-channel cross-correlation diagnostic that works at 10⁴ channels and 100
      Hz has not been specified.
- [ ] **Realistic wall-plug efficiency at 100 Hz.** §4.1 uses 30% and explains why that is optimistic
      when the pulse picker discards most oscillator pulses. The pulsed-pumping design that recovers it
      has not been worked through, and the cooling plant is sized from this number.
- [ ] **Thermal correlation structure across the array.** §4.4 argues that a learned controller can
      exploit correlated drift between channels sharing a rack or coolant loop. Whether that
      correlation is strong enough to be useful is an empirical question, answerable on the
      proof-of-concept bench and not before.
- [ ] **Vacuum boundary placement.** §5 notes that the final focus must be in vacuum. Whether the
      tiled aperture is inside or outside the vacuum envelope changes the window requirement from
      nothing to a full-energy optic, and the decision has not been made.

---

*Previous: [03-feasibility](03-feasibility.md) | Next: [05-gamma-source](05-gamma-source.md)*
