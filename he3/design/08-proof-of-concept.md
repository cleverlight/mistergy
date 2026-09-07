# He-3 Programme - 08 Proof of Concept

This section specifies the bench that tests the one hypothesis this programme most needs tested:
that a learned controller can align and phase-lock a small array of beams autonomously, using
commodity hardware and camera feedback alone. It covers the optical configuration, the detection
chain and its constraints, the two-stage actuation the concept note did not have, a revised hardware
budget, three phases of success criteria, the hard go/no-go metrics, and what a negative result would
mean and how it would be told apart from a mistake. It is the cheapest and most immediately
actionable part of the whole repository, and it should be built.

**This proof of concept is unaffected by the feasibility verdict in
[03-feasibility](03-feasibility.md).** That verdict is about a nuclear reaction: helium-4 has no
bound excited state below breakup, so there is no ladder for multi-photon absorption to climb, and the
helium-3 production route fails by orders of magnitude for reasons that have nothing to do with beam
control. This bench tests the control hypothesis. Coherent beam combining is useful to a gamma source
([05-gamma-source](05-gamma-source.md)), to a wakefield driver, to directed-energy and free-space
communication work, and to every large laser array that will ever be built. Build it exactly as
designed here, and read its result as a statement about control, not about physics.

---

## 1. Purpose and scope

**Demonstrate autonomous alignment and phase-locking of 5-10 beams using commodity hardware and camera
feedback, with no human in the loop once running.**

In scope:

- coarse alignment to beam overlap at a common focus, autonomously;
- fine phase control, autonomously. **Two bars apply and they must not be confused**: λ/20 RMS is the
  full-system combining requirement this bench is a rehearsal for, while **< 1 rad RMS, target π/4
  (λ/8), is the acceptance bar for the bench itself** (§7, metric 7). Reaching λ/20 on 10 beams would
  be an excellent result and is the stretch target; it is not the pass condition. See
  [00-summary](00-summary.md) §10.
- holding that state against real disturbance for 30 minutes without intervention;
- recovering from an induced disturbance;
- measuring how the effort scales from 2 to 10 channels, which is the only part of the experiment
  that speaks directly to the 100- and 500-channel array.

Out of scope, and stated so nobody later reads a result as covering it:

- **group delay.** The bench runs continuous-wave or narrowband, so the group-delay problem described
  in [07-ai-control](07-ai-control.md) section 2.2 does not arise and is not tested.
- **acoustic-band disturbance rejection.** A 10 Hz camera loop reaches a unity-gain crossover of
  roughly 0.5-1 Hz. It rejects thermal drift and slow convection. It does not touch vibration above a
  few hertz, and the bench must be quiet enough that it does not have to.
- **anything nuclear.** No target, no gammas, no accelerator.

---

## 2. Optical configuration

### 2.1 One seed, split N ways: the correction that makes the experiment possible

The concept note proposed 5-10 **independent** laser sources. That cannot work, and the reason is
arithmetic rather than a matter of quality.

Two free-running lasers have a mutual phase that random-walks at their combined linewidth. For good
single-frequency DFB diodes that is 1-2 MHz; for the multimode Fabry-Perot diodes at the cheap end of
the range it is orders of magnitude worse, with a coherence length of well under a millimetre. To
phase-lock two such sources to each other, the control loop must have a bandwidth well above their
mutual linewidth: megahertz, against the 10 Hz a camera can deliver. The gap is five to six orders of
magnitude and no controller closes it.

**Use one seed laser split N ways.** Then the only relative phase noise between channels comes from
differential path fluctuation - thermal drift, convection, vibration - which is exactly the spectrum
in [07-ai-control](07-ai-control.md) section 1.3, and the slow end of it is precisely what a 10 Hz
loop handles. This is also what every real coherent array does, including ICAN and XCAN, so the bench
becomes *more* faithful to the full-scale system rather than less.

### 2.2 Configuration

| Element | Specification | Note |
|---|---|---|
| Seed source | single-frequency, 1030-1064 nm, > 10 mW, linewidth < 1 MHz, polarisation-maintaining fibre output | one only; DFB diode with a low-noise current driver and TEC |
| Splitter | 1 × 10 PM fused fibre splitter | equal split; per-channel imbalance is tolerable, see section 6 |
| Per-channel patch cord | PM fibre, lengths matched to ±10 mm | matching is not critical for a narrowband source but keeps the coherence budget uninteresting |
| Collimator | f = 11 mm PM fibre collimator, ~2 mm 1/e² beam | one per channel |
| Fold mirror | 12.7 mm dielectric mirror on a piezo stack | the fine phase actuator, section 4 |
| Kinematic mount | motorised, 3 stepper axes: tip, tilt, axial | the coarse actuator |
| Tiling geometry | 10 collimators on a ring of 40 mm diameter, positions deliberately jittered off the ideal ring | the jitter breaks the inversion symmetry that makes the phase sign near-degenerate, see [07-ai-control](07-ai-control.md) section 2.3 |
| Combining lens | f = 750 mm achromat, ≥ 50 mm clear aperture | forms the far field on the sensor |
| Focal plane | sensor placed directly at the focus, no diffuser | see section 3.3 |
| Enclosure | boxed bench with foam-lined lid, bench on passive isolators | not optional; it is what makes a 10 Hz loop sufficient |

### 2.3 What sets the fringe scale

For a tiled aperture of overall diameter `D` combined by a lens of focal length `f`, the finest
structure in the focal plane has period

```
  Lambda_min = lambda * f / D
```

With λ = 1.03 µm, f = 750 mm and D = 40 mm:

```
  Lambda_min = 1.03e-6 * 0.75 / 0.040 = 1.93e-5 m = 19.3 um
```

That single number ties the optical layout to the sensor. Making the ring larger or the lens shorter
gives finer fringes than the camera can resolve; the reverse wastes sensor area. The pair
(D = 40 mm, f = 750 mm) is chosen so that the finest fringes land at about 5 pixels on a 3.9 µm
sensor, which is comfortably above the Nyquist limit of 2.

---

## 3. Detection

### 3.1 The wavelength constraint, which the concept note missed

The concept note proposed sources at 1.0-1.55 µm read by a standard mirrorless camera. Those two
choices are incompatible at the long end.

| Wavelength | Silicon quantum efficiency | Verdict for a silicon camera |
|---|---|---|
| 1030 nm | ~2-6% | usable with modest exposure |
| 1064 nm | ~1-3% | usable, dimmer |
| 1310 nm | effectively zero | silicon is transparent, no signal |
| 1550 nm | effectively zero | needs an InGaAs camera, $15-25k, which breaks the budget outright |

**The source must be at or below about 1064 nm.** That is also the right choice for the full-scale
array, which is specified at 1.03 µm in [00-summary](00-summary.md), so the constraint costs nothing.

### 3.2 The IR-cut filter, which is the trap

Nearly every consumer camera has an infrared-cut ("hot mirror") filter bonded over the sensor stack.
It attenuates 1030 nm by several orders of magnitude, and an IR-pass filter screwed onto the front of
the lens does not help at all - that filter blocks visible light, which is the opposite problem. A
stock mirrorless body will show nothing, and it will show nothing in a way that looks exactly like a
misaligned bench.

Two ways out, both inside the existing $800 camera line:

| Option | Cost | Frame rate and latency | Verdict |
|---|---|---|---|
| Full-spectrum-converted mirrorless (IR-cut filter removed) | ~$700-900 including conversion | USB live view ~30 fps at reduced resolution, 50-150 ms latency, not deterministic | good for documentation images, poor for a control loop |
| Monochrome machine-vision CMOS, USB3, no IR-cut, global shutter | ~$500-800 | 60-200 fps full frame, < 10 ms latency, hardware trigger | **recommended as the loop sensor** |

Use the machine-vision camera for control. If a mirrorless body is wanted for publication-quality
images of the fringe pattern, that is a separate, later purchase and not on the critical path.

### 3.3 Sampling and frame rate

| Quantity | Value | Basis |
|---|---|---|
| Finest fringe period at the focus | 19.3 µm | λf/D, section 2.3 |
| Sensor pixel pitch | 2.4-3.9 µm | typical machine-vision or APS-C |
| Pixels per finest fringe | 4.9 to 8.0 | above the Nyquist limit of 2, and enough for reliable FFT phase extraction |
| Crop used by the loop | 512 × 512 px, ~2.0 mm at 3.9 µm/px | about 100 of the finest fringes across the frame |
| Loop rate | 10 Hz target, 20-30 Hz achievable | see the latency budget in [07-ai-control](07-ai-control.md) section 7.2 |
| Exposure | ~5 ms | set by signal level; low silicon QE at 1030 nm is the reason the seed wants ≥ 10 mW |

A diffuse scattering card at the focal plane, as the concept note suggested, is unnecessary and
harmful: it costs two or three orders of magnitude of signal at a wavelength where the sensor is
already struggling, and it adds speckle that the network then has to be trained to ignore. Put the
sensor at the focus directly, behind calibrated attenuation.

---

## 4. Mechanical control: two stages, because one is not enough

### 4.1 The caution

**Stepper motors are adequate for coarse alignment and are orders of magnitude too coarse for phase
control.** This is the most important hardware correction to the concept note, and without it the
bench can demonstrate beam overlap and cannot demonstrate phase locking at all.

The numbers, from [07-ai-control](07-ai-control.md) section 1.2:

| Requirement | Mechanical tolerance | Stepper capability | Shortfall |
|---|---|---|---|
| Piston phase to λ/20 RMS (stretch target) | 26 nm of mirror travel | 5-20 µm real positioning accuracy | 200-800× too coarse |
| Pointing to λ/(10D) at D = 5 mm | ~1 µm of actuator travel on a 50 mm lever arm | 5-20 µm | 5-20× too coarse for fine pointing, adequate for capture |
| Beam overlap at the focus | tens of µm | 5-20 µm | adequate |

The nominal microstep resolution of a NEMA 17 on a 0.5 mm-pitch screw at 1/16 microstepping is
0.156 µm, which looks sufficient on paper. It is not: microstep nonlinearity, screw backlash and
mount hysteresis dominate, and real repeatability is in the 5-20 µm range quoted above. Never size a
mechanism from a microstep count.

### 4.2 The two-stage scheme

| Stage | Actuator | Travel | Resolution | Bandwidth | Controls |
|---|---|---|---|---|---|
| **Coarse** | 3 × stepper per channel on a motorised kinematic mount | 5-10 mm | 5-20 µm real | ~1 Hz command rate, 0.1-1 s per move | tip, tilt, axial position; beam capture and overlap; piezo range resets |
| **Fine** | 1 × piezo stack per channel under the fold mirror | 10 µm (30-40 µm optional) | sub-nanometre open loop | first resonance ~1 kHz loaded, 5 ms settle | piston phase |

The two stages live in different control loops. The fine loop runs at 10 Hz inside the latency budget
in [07-ai-control](07-ai-control.md) section 7.2; the coarse loop runs at about 1 Hz and never inside
the phase loop, because a stepper move takes 0.1-1 s and would blow the budget by an order of
magnitude.

### 4.3 Piezo range and why resets are a design feature

A 10 µm stack under a normal-incidence fold mirror gives 20 µm of optical path, which is 19.4 waves at
1.03 µm. One kelvin of drift on a 1 m aluminium path (CTE 23 × 10⁻⁶ K⁻¹) is 23 µm. So on an
unstabilised bench the piezo range is exhausted inside a degree of room drift, and the controller must
hand accumulated drift to the stepper and re-acquire. That handover is not phase-neutral in practice,
because a stepper positions to several waves, so the loop loses lock briefly on every reset. Three
mitigations, in order of cost effectiveness:

1. **Box and thermally stabilise the bench.** Also required for the acoustic budget, so it is free.
2. **Specify 30-40 µm stacks** instead of 10 µm, buying 60-80 waves of range for a modest premium.
3. **Put the stepper on a separate coarse delay element** rather than on the mirror the piezo drives,
   so a reset does not disturb pointing at the same time.

A hard metric follows from this and is listed in section 7: a range reset must not cost more than 5 s
of lost lock.

### 4.4 Control electronics

Two paths, deliberately separate, because putting the fast one behind a slow serial link to a
microcontroller running blocking stepper code is the obvious mistake:

```
  host  --USB serial, ~1 Hz-->  MCU  -->  stepper drivers  -->  30 stepper axes   (coarse)
  host  --USB, 10-30 Hz------>  DAC  -->  HV amplifier     -->  10 piezo stacks   (fine)
```

Prefer an RP2040 or Teensy over an ATmega-class Arduino for the coarse path: more SPI throughput,
hardware timers, and a non-blocking stepper library. The concept note's Appendix B sketch is preserved
below, tidied and with its problems named. As written it does not compile (`Stepper` has no default
constructor, so the array initialiser is invalid) and its blocking `step()` calls stall the loop for
the duration of every move.

```cpp
// motor_control.ino - coarse alignment axes only
//
// The fine phase channel does NOT go through here. It goes host -> DAC -> HV amp ->
// piezo, because a blocking stepper move takes 0.1-1 s and a phase correction has a
// 100 ms budget. Mixing them puts the phase loop behind the slowest thing on the bench.
//
// AccelStepper is used instead of the built-in Stepper library because Stepper::step()
// blocks until the move completes, which stalls serial handling and every other axis.

#include <AccelStepper.h>

const int NUM_BEAMS = 10;
const int AXES_PER_BEAM = 3;              // tip, tilt, axial
const long MAX_SPEED_STEPS_PER_S = 800;
const long ACCEL_STEPS_PER_S2 = 4000;

AccelStepper axes[NUM_BEAMS * AXES_PER_BEAM] = {
  AccelStepper(AccelStepper::DRIVER, 2, 3),
  AccelStepper(AccelStepper::DRIVER, 4, 5),
  // ... one (step, direction) pin pair per axis; a 30-axis bench needs a driver
  // expander or a second MCU rather than 60 GPIO pins on one board
};

void setup() {
  Serial.begin(115200);                   // 9600 is too slow for 30 axes of traffic
  for (int i = 0; i < NUM_BEAMS * AXES_PER_BEAM; i++) {
    axes[i].setMaxSpeed(MAX_SPEED_STEPS_PER_S);
    axes[i].setAcceleration(ACCEL_STEPS_PER_S2);
  }
}

void loop() {
  // commands arrive as "axis,steps" lines and are queued, never executed inline
  if (Serial.available() > 0) {
    String line = Serial.readStringUntil('\n');
    int comma = line.indexOf(',');
    if (comma > 0) {
      int axis = line.substring(0, comma).toInt();
      long steps = line.substring(comma + 1).toInt();
      if (axis >= 0 && axis < NUM_BEAMS * AXES_PER_BEAM) {
        axes[axis].move(steps);
      }
    }
  }

  // non-blocking: every axis advances at most one step per pass, so serial keeps
  // being serviced and 30 axes move concurrently
  bool moving = false;
  for (int i = 0; i < NUM_BEAMS * AXES_PER_BEAM; i++) {
    axes[i].run();
    if (axes[i].distanceToGo() != 0) moving = true;
  }

  if (!moving) Serial.println("IDLE");    // the host gates coarse moves on this
}
```

---

## 5. Hardware budget

The concept note's table, preserved, with the piezo stage added.

| Component | Qty | Unit cost | Total |
|---|---|---|---|
| Lasers (1 W fibre or diode) | 10 | $500 | $5,000 |
| Motorised mounts (3 DOF) | 10 | $150 | $1,500 |
| Stepper motors + drivers | 30 | $20 | $600 |
| Optical elements (lenses, filters, combiners) | 1 | $1,500 | $1,500 |
| Mirrorless camera + IR filter | 1 | $800 | $800 |
| Control computer (Raspberry Pi / Arduino) | 1 | $300 | $300 |
| Optical breadboard + table | 1 | $2,000 | $2,000 |
| Miscellaneous (cables, brackets, power supplies) | 1 | $500 | $500 |
| **Piezo actuators (10 µm stack, one per channel)** | **10** | **$250** | **$2,500** |
| **Piezo drive electronics (10-channel HV amplifier + DAC board)** | **1** | **$2,000** | **$2,000** |
| | | **TOTAL** | **$16,700** |

The concept note rounded its eight rows to "~$12,000"; they in fact sum to $12,200, and the piezo
stage adds $4,500 for a revised total of **$16,700**. That leaves $3,300 of margin against the
under-$20k success metric in section 7.

Three notes on the lines that move:

- **The piezo line is not optional and its price has a wide range.** Bare stacks with a self-built
  driver come in near $1,200 for ten channels; a turnkey laboratory multi-channel controller runs to
  $12,000 and would break the budget. $4,500 buys commodity stacks with a compact multi-channel
  amplifier, which is the right point on that curve for a bench that is proving a control concept
  rather than publishing metrology.
- **The seed-and-split architecture of section 2.1 replaces the $5,000 laser line**, with a
  single-frequency seed and driver at ~$3,000, a 1 × 10 PM splitter at ~$1,200 and ten PM patch cords
  at ~$1,000. That is $5,200 against $5,000: **cost-neutral to within the noise of the estimate**, and
  the difference between an experiment that can work and one that cannot. The revised total under that
  variant is ~$16,900.
- **The $800 camera line buys the machine-vision camera recommended in section 3.2**, not a stock
  mirrorless body. A stock body will not see 1030 nm at all.

Everything except the optics and the piezo drive remains commodity off-the-shelf, which was the
concept note's central practical point and it stands.

---

## 6. Phased success criteria

Preserved from the concept note, extended for the piezo stage and the disturbance measurement.

### Phase 1: basic alignment and characterisation

- [ ] Measure the bench disturbance spectrum with an accelerometer and a single-channel photodiode
      interferometer, before any control work. Every bandwidth argument in
      [07-ai-control](07-ai-control.md) currently rests on typical figures rather than measured ones.
- [ ] Manually align 5 beams to a visible interference pattern (human baseline)
- [ ] Capture interference images at 10 Hz with deterministic latency
- [ ] Extract phase information from images with classical CV (2D FFT of the fringe field)
- [ ] Calibrate each piezo in nanometres per volt by sweeping over more than two waves and counting
      intensity maxima at a single pixel
- [ ] Record the two-beam visibility for all 45 channel pairs as a baseline health matrix

### Phase 2: AI-driven alignment

- [ ] Train a CNN on synthetic interference patterns
  - Generate 10,000+ simulated patterns with known **relative** phases, per
    [07-ai-control](07-ai-control.md) section 6
  - Train a ResNet-18 class network to predict per-channel relative phase as (sin, cos) pairs
- [ ] Generate a real labelled dataset by commanding known piezo phase ramps, and measure the
      simulation-to-reality gap as the difference in test error between the two datasets
- [ ] Deploy the trained network on the live camera feed
- [ ] Closed-loop control: network predicts, piezos correct, camera re-images, repeat at 10 Hz
- [ ] Demonstrate capture from a deliberately scrambled start, not only tracking from an aligned one

### Phase 3: autonomous maintenance

- [ ] Introduce disturbances (nudge one mirror, change the ambient temperature, open the enclosure)
- [ ] AI autonomously re-aligns without manual intervention
- [ ] Hold coherence for > 10 minutes continuously, then > 30 minutes
- [ ] Execute a piezo range reset via the stepper stage without losing lock for more than 5 s
- [ ] Repeat the whole sequence at N = 2, 3, 5, 7 and 10 channels and record convergence time against
      N, which is the only measurement on this bench that speaks to the 100-channel array

---

## 7. Hard success metrics

The go/no-go set, preserved from the concept note with the two new hardware-driven entries.

| # | Metric | Target | How it is measured |
|---|---|---|---|
| 1 | Autonomous alignment time | < 10 minutes for a 10-beam system, from a scrambled start | wall clock from loop start to sustained fringe contrast above target |
| 2 | Coherence maintenance | > 30 minutes continuous, no manual input | contrast logged every second, no excursion below target for more than 5 s |
| 3 | Robustness | recovers from induced disturbance (mirror nudge, thermal step) | time to re-acquire, over 10 repeats |
| 4 | Cost | total hardware < $20,000 | $16,700 as budgeted, section 5 |
| 5 | Reproducibility | works 4 attempts out of 5 without retraining | cold start on five separate days |
| 6 | Fringe contrast | > 0.7, target > 0.8 | (I_max - I_min) / (I_max + I_min) over the central lobe |
| 7 | Phase stability | < 1 rad RMS, target < π/4 rad (λ/8) | residual from the network estimate, cross-checked by FFT phase extraction |
| 8 | Range reset cost | < 5 s of lost lock per reset | contrast log during a commanded reset |
| 9 | Scaling behaviour | convergence iterations grow no faster than linearly from N = 2 to N = 10 | fit to the Phase 3 sweep |

Metrics 6 and 7 need one caveat about their relationship. Two-beam visibility with unequal intensities
is `V = 2*sqrt(I1*I2)/(I1+I2)`, which for a 2:1 intensity ratio is still 0.943, so amplitude imbalance
is a weak effect on contrast. Polarisation mismatch is a strong one: orthogonal polarisations give
V = 0 regardless of phase. That asymmetry is what makes contrast a useful diagnostic in section 8
rather than just a score.

Metric 9 is the one that carries the most information about the rest of the programme, and it is the
one the concept note did not have. If contrast and hold time are met but convergence effort grows
faster than linearly with N, the bench has succeeded and the *architecture* has failed, which is a
result worth having and is discussed next.

---

## 8. What a negative result would mean

A proof of concept that cannot fail informatively is not one. Each of the following failures is
distinguishable from the others by a specific measurement, and each says something different.

| Symptom | What it would mean | Diagnostic | Consequence |
|---|---|---|---|
| No fringes anywhere, at any alignment | the sources are not mutually coherent, or the paths are mismatched beyond the coherence length | run two channels only, scan the coarse axial stage over ±5 mm while logging one pixel; visibility nowhere means a source-architecture fault, visibility in a narrow window means a path-matching fault | source architecture, not control; fix per section 2.1 and continue |
| Fringes present, contrast stuck below 0.3 | amplitude imbalance, polarisation mismatch, or per-channel wavefront error | pairwise contrast matrix over all 45 pairs, then rotate a half-wave plate in one arm; contrast insensitive to the waveplate rules out polarisation | optical hygiene, not control; fixable |
| Network accurate on simulated data, poor on real | simulation-to-reality gap | train on the real piezo-ramp dataset instead; if that works, the simulator is wrong and is correctable; if neither works, the problem is observability | if observability, the geometry does not determine the phases and the layout must change |
| Two distinct phase sets give near-identical simulated images | the chosen geometry is degenerate | search the simulated dataset for near-duplicate images with distant labels | change the tiling geometry before touching the network; this is checkable before any hardware exists |
| Loop converges then oscillates | gain too high for the loop delay, or piezo hysteresis | measure the step response and the true loop delay, reduce gain, add an integral term | ordinary control tuning |
| Holds for minutes then loses lock abruptly and repeatedly | piezo range exhaustion | log commanded piezo positions; a saw-tooth ending at a rail is diagnostic | thermal stabilisation or longer-travel stacks, section 4.3 |
| Works at 5 beams, degrades sharply at 10 | **the scaling hypothesis is in trouble** | fit convergence iterations against N over the Phase 3 sweep; super-linear growth points at the single global reward | the fix is per-channel sensing, not a better network; see [07-ai-control](07-ai-control.md) section 8 |

The last row is the informative failure and it is worth stating what it would and would not refute. A
super-linear scaling result would **not** show that learned control cannot align a large array. It
would show that a single scalar metric built from the whole array carries a 1/N share of the
information about each channel, which is the quantitative argument in
[07-ai-control](07-ai-control.md) section 8.2, and that the 100-channel system therefore needs
frequency-tagged or nearest-neighbour sensing rather than a camera watching one combined pattern.
That is a specification for the next machine, extracted for $16,700 instead of discovered at
$3,000,000. It is the most valuable thing this bench can produce short of outright success.

Conversely, a negative result here says nothing at all about [03-feasibility](03-feasibility.md), and
a positive one does not rescue it. The two hypotheses are independent and should stay that way in
every report written about this work.

---

## Open questions

- **What is the real disturbance spectrum of the bench?** Phase 1 measures it. Until then every claim
  about 10 Hz being sufficient is an inference from typical optical-table figures, not a measurement.
- **Is 10 Hz actually enough once the enclosure is built?** It follows from the disturbance
  measurement, not from argument. If the residual acoustic-band phase noise exceeds λ/20 RMS with the
  lid on, the bench needs a fast photodiode inner loop at 10-100 kHz with the learned controller as
  outer supervisor, which changes the electronics but not the hypothesis.
- **How much does silicon's low quantum efficiency at 1030 nm cost in practice?** 2-6% QE with a 5 ms
  exposure and a 10 mW seed split ten ways should be ample, but the number depends on the attenuation
  needed to avoid saturating the central lobe, which has not been worked through. Awaiting calculation.
- **Is 10 µm of piezo travel enough, or should the budget carry 30-40 µm stacks from the start?** It
  turns entirely on how well the enclosure holds temperature, which Phase 1 measures. Buying the
  larger stacks up front costs perhaps $1,000 and removes the question.
- **What is the right reference channel?** Section 2.3 of [07-ai-control](07-ai-control.md) fixes
  phases relative to channel 0. If channel 0 is the one that drifts or drops out, every label moves at
  once. A least-squares reference over all channels is more robust and is not costed here.
- **Does the human baseline in Phase 1 mean anything at 10 channels?** The arithmetic in
  [07-ai-control](07-ai-control.md) section 1.4 suggests a human cannot close a 10-channel loop at all
  on an unstabilised bench, in which case the baseline is a demonstration of the problem rather than a
  comparison. That is still worth recording, but it should be described honestly.
- **Who builds it?** The concept note assumed an optician, a software engineer, an electronics
  technician and a project lead over six months. That staffing has not been re-examined against the
  revised scope, and the budget in [10-economics](10-economics.md) owns the question.
