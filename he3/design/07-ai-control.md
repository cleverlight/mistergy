# He-3 Programme - 07 AI Control

This section covers the control problem that the array poses and the learned approach proposed to
solve it: how many degrees of freedom a coherently combined array actually has, what disturbs them
and on what timescales, what a camera watching a fringe pattern can and cannot measure, three
candidate learning architectures with a recommendation between them, how synthetic training data
should be generated (including a correction to the originating concept note's generator, which does
not produce interference at all), the real-time loop and its latency budget, what changes when the
channel count goes from 10 to 100 to 500, and finally the pairwise sampling architecture that has to
replace the camera once a single global metric stops carrying usable information about any individual
channel. Nothing in this section depends on the nuclear verdict
in [03-feasibility](03-feasibility.md). The alignment problem is real whatever the array is pointed
at, and it is the part of the programme that survives that verdict completely intact.

---

## 1. Why alignment is the binding constraint

### 1.1 The degrees of freedom scale with the element count

A tiled-aperture coherent array controls, per channel: one piston phase, two pointing angles (tip and
tilt), and - if the pulses are short - one group delay. Amplitude and polarisation are usually set
once and left, but they drift too.

| Channels | Piston | Tip and tilt | Group delay | Actuated DOF, CW | Actuated DOF, femtosecond |
|---|---|---|---|---|---|
| 10 | 10 | 20 | 10 | 30 | 40 |
| 100 | 100 | 200 | 100 | 300 | 400 |
| 500 | 500 | 1,000 | 500 | 1,500 | 2,000 |

The array specification in [00-summary](00-summary.md) is 100-500 channels at 100 fs, so the
full-scale control problem is 400 to 2,000 coupled degrees of freedom, all of which must be held
simultaneously and continuously. None of them is independently observable from the quantity anyone
actually cares about, which is the energy inside the focal spot.

### 1.2 The tolerance is a small fraction of a wavelength

For Gaussian-distributed residual piston errors of RMS magnitude σ radians, the combining efficiency
of a tiled array follows

```
  eta = exp(-sigma^2)
```

which sets the phase budget directly. At the array wavelength of 1.03 µm:

| RMS piston error | σ (rad) | Optical path error | Mirror displacement at normal incidence | η |
|---|---|---|---|---|
| λ/10 | 0.628 | 103 nm | 51.5 nm | 0.674 |
| λ/20 | 0.314 | 51.5 nm | 25.8 nm | 0.906 |
| λ/30 | 0.209 | 34.3 nm | 17.2 nm | 0.957 |
| λ/50 | 0.126 | 20.6 nm | 10.3 nm | 0.984 |

λ/20 RMS is the usual working target and is where this programme should aim. The corresponding
mechanical tolerance, 26 nm on a fold mirror, is the single number that governs the actuator choice
in [08-proof-of-concept](08-proof-of-concept.md), and it is roughly three orders of magnitude finer
than a stepper motor can position.

Pointing is looser but not loose. A sub-aperture of diameter D has a diffraction angle of about λ/D;
for D = 5 mm that is 206 µrad. Holding pointing to a tenth of that, 21 µrad, on a kinematic mount
with a 50 mm lever arm, requires the actuator to be positioned to about 1 µm.

**Neither tolerance relaxes because the focal spot is large**, and it is worth saying so because the
instinct runs the other way. [05-gamma-source](05-gamma-source.md) §4.2 records that the wakefield
stage wants a *matched* spot of 18-30 µm radius, and that focusing harder than the plasma wants is
actively wrong rather than merely wasteful. That decides the final optic and it leaves the phase
budget untouched: λ/20 comes from the combining efficiency `exp(-sigma^2)` and λ/(10 D) comes from
the sub-aperture diameter, and neither expression contains the spot size. The alignment problem is
exactly as hard for a 30 µm spot as for a 1 µm one.

### 1.3 The disturbance spectrum spans eight decades

Order-of-magnitude figures typical of an optical bench. **None of these has been measured here**;
measuring the actual spectrum of the proof-of-concept bench is the first Phase 1 deliverable in
[08-proof-of-concept](08-proof-of-concept.md), because every control bandwidth argument below rests
on it.

| Disturbance | Band | Typical OPD amplitude | Unity-gain bandwidth needed to suppress it |
|---|---|---|---|
| Thermal drift of mounts, bench and fibre | DC to ~10 mHz | 1-50 µm over minutes | ~0.1 Hz |
| Convection and air currents across open paths | 0.1-10 Hz | 10-100 nm | 10-100 Hz |
| Building and equipment vibration | 5-200 Hz | 10-1,000 nm | 200 Hz to 2 kHz |
| Acoustic coupling into fibre and mounts | 100 Hz to 5 kHz | 10-100 nm | 5-50 kHz |
| Mutual phase noise of *independent* laser sources | DC to > 100 kHz | many waves | 100 kHz to 1 MHz |

The rule of thumb is that suppressing a disturbance by 20 dB needs a loop whose unity-gain frequency
is roughly ten times the disturbance frequency. Two consequences follow immediately and both matter:

- **A 10 Hz camera loop is a thermal-drift controller.** With one sample of latency it can reach a
  unity-gain crossover of perhaps 0.5-1 Hz. It rejects thermal drift and slow convection completely
  and does essentially nothing to the acoustic band. This is not a defect of the proof of concept, it
  is a statement of what the proof of concept is testing: the *learning and scaling* hypothesis, not
  the bandwidth. The bandwidth problem is solved separately and conventionally, by a fast inner loop.
- **The last row is fatal to any architecture built on independent lasers.** Two free-running
  single-frequency lasers have a mutual phase that random-walks at their combined linewidth, typically
  1-2 MHz for DFB diodes and far worse for multimode devices. No camera loop can track that. Every
  serious coherent array, and the proof of concept, must therefore use one seed split N ways, with
  per-channel phase actuation. See [08-proof-of-concept](08-proof-of-concept.md) section 2.

### 1.4 Human alignment does not scale, and the argument is arithmetic

Let `t_c` be the time a skilled operator needs to bring one channel into phase against a live fringe
display, and `tau_drift` the time for uncontrolled drift to push a typical channel past the λ/20
budget. Closing the loop by hand requires

```
  N * t_c  <  tau_drift
```

On an unstabilised open bench, a 0.3 m aluminium path (CTE 23 × 10⁻⁶ K⁻¹) drifting at 0.01 K/min
moves 69 nm of OPD per minute, so `tau_drift` for a λ/20 budget of 51.5 nm is about 45 s. At an
optimistic `t_c` of 30 s that gives N_max ≈ 1.5. Stabilise the bench a further factor of ten, to
0.001 K/min, and N_max ≈ 23. Beyond a few tens of channels a human cannot close the loop at all, no
matter how skilled, because the first channels drift out before the last are touched. That is why
this is a control problem rather than a technician problem, and it is why the array count is the
thing that forces automation.

### 1.5 This is worth solving on its own merits

The claim to make here is precise, not sweeping. Phase-locking of tens to low hundreds of
**continuous-wave** fibre channels is demonstrated technology - LOCSET-style frequency tagging and
SPGD-style stochastic gradient search both work, and the ICAN and XCAN programmes built their case on
exactly this. Coherent combining of **femtosecond** channels has been demonstrated at tens of
channels. What is not demonstrated, and what this programme would need, is femtosecond combining at
hundreds of channels with group-delay control, held autonomously against non-stationary disturbance.

The open questions there are genuine: how a controller behaves when the disturbance statistics change,
how it recovers from a large excursion rather than tracking a small one, how it copes with actuator
hysteresis and creep, what happens when a sensor channel drops out, and how any of it scales past the
point where a single global metric carries usable information (section 7). Those are learning
problems, they are publishable independently of any nuclear endpoint, and they are useful to every
laser array ever built. A negative result on the He-3 route does not touch them.

---

## 2. What actually has to be controlled

### 2.1 The three quantities, and their sensors

| Quantity | Tolerance | What a fringe camera sees | Actuator |
|---|---|---|---|
| Piston phase | λ/20 RMS, 26 nm of mirror travel | directly, but only modulo 2π | piezo stack, 10-20 µm travel |
| Tip and tilt | ~λ/(10 D), 21 µrad at D = 5 mm | indirectly, as the position and envelope of the fringe pattern | motorised kinematic mount |
| Group delay | ≲ τ/10, i.e. 10 fs, i.e. 3 µm of OPD | **not at all** | delay line, mm travel, 0.1 µm resolution |

The first two are what the proof of concept exercises. The third is where the concept note was
optimistic, and it deserves to be spelled out.

### 2.2 Group delay is a different measurement, not a harder version of the same one

A camera watching an interference pattern measures the phase of the optical carrier. At 1.03 µm the
carrier period is λ/c = 3.44 fs, so a fringe measurement is periodic in delay with a 3.44 fs period
and tells you nothing about which period you are in.

A 100 fs pulse has an envelope roughly c·τ = 30 µm long, which is 29 carrier periods. So even once
the envelopes overlap, a single monochromatic-style fringe measurement is 29-fold ambiguous; and if
the envelopes do not overlap there are no fringes to read at all, and the camera cannot tell that
case apart from "the phases are scrambled". The two failure modes look identical on the sensor. This
is the honest correction to the concept note, which treated the interference pattern as a complete
observation of the beam state.

Sensing that would actually be needed for the full femtosecond system:

| Method | Useful delay range | Notes |
|---|---|---|
| Spectral interferometry (fringes in the combined spectrum, spacing Δν = 1/Δt) | ~30 fs to 2 ps | a 100 fs transform-limited pulse at 1.03 µm has ~15.6 nm of bandwidth (4.4 THz), so delays below ~30 fs give less than one spectral fringe and cannot be read |
| Scanning or single-shot cross-correlation against a reference channel | ~10 fs to 10 ps | slow if scanned channel by channel; the standard way to acquire delay initially |
| Coarse mechanical path metrology (encoder, interferometric length gauge) | mm to metres | closes the gap between "built" and "within a picosecond" |
| Fringe camera | 0 to λ (3.44 fs), ambiguously | the only fast, massively parallel sensor of the three, and the least informative |

The workable architecture is therefore layered: mechanical metrology to get within a picosecond,
cross-correlation or spectral interferometry to get within a few femtoseconds, and only then the
fringe camera and the learned phase controller to hold the carrier. Each layer hands a smaller
ambiguity to the next.

For the proof of concept, the resolution is to sidestep the problem honestly: run the bench with
continuous-wave or narrowband sources, where group delay does not arise, and say plainly that the
experiment tests the phase hypothesis and says nothing about the delay hypothesis. Claiming otherwise
would be the kind of over-reach that this document set exists to remove.

### 2.3 Two invariances that constrain what a network can be asked to predict

Both are properties of the physics, not of the network, and both make the naive formulation
ill-posed.

**Global phase is unobservable.** Adding a constant to every channel's phase leaves the intensity
pattern exactly unchanged, because the pattern depends only on phase *differences*. Only N-1 relative
phases are observable. A network trained to regress N absolute phases is being asked to predict an
unidentifiable quantity, and it will hedge towards the mean. Predict phases relative to a nominated
reference channel.

**Sign of the phase set is nearly degenerate on a symmetric layout.** Write the pattern as

```
  I_phi(r) = sum_ij a_i a_j cos((k_i - k_j) . r + phi_i - phi_j)
```

Replacing every phase by its negative and every position by its negative flips the sign of the whole
argument of the cosine, and the cosine is even, so for real amplitudes

```
  I_{-phi}(-r) = I_phi(r)   exactly
```

The image produced by the negated phase set is the 180-degree rotation of the original about the
optical axis. A convolutional network with global pooling is close to invariant under that rotation,
so it will struggle to determine the sign - and on a layout that is itself inversion-symmetric, such
as an even-N ring, the ambiguity is worse because the rotated image also maps onto a relabelling of
the channels. The cheap insurance is to break the symmetry deliberately: jitter the sub-aperture
positions off the ideal ring, or make one channel's amplitude or aperture distinguishable. The
generator in section 5 does this.

Phase is also circular, so a squared error on the raw angle is discontinuous at ±π. Regress
(sin, cos) pairs, or use a circular loss.

---

## 3. Three approaches

Preserved from the concept note and sharpened. All three remain worth having, and the recommendation
in section 4 is a sequence, not an elimination.

### 3.1 Approach A: supervised CNN on simulated interference patterns

| | |
|---|---|
| **Training data** | synthetic patterns from a diffraction model, 10⁴-10⁵ images, with known relative phases |
| **Network** | ResNet-18 or EfficientNet-B0 class; input a 256 × 256 or 512 × 512 mono crop; output 2(N-1) values, the (sin, cos) of each relative phase |
| **Inference** | 15-25 ms on a modern CPU, 2-5 ms on a small GPU |
| **Deployment** | direct feedforward controller inside the 10 Hz loop |

**Advantages.** Fast and deterministic: the same image always gives the same command, which makes the
loop analysable as an ordinary feedback system with a known delay. Training is free in the sense that
no hardware time is consumed. It needs no reward engineering and no exploration, so there is no risk
of the controller damaging the bench while it learns. It gives an *absolute* estimate rather than a
gradient direction, so it can capture from a large initial error rather than only tracking.

**Challenges.** Everything rests on simulation-to-reality transfer, which is section 5's subject and
the dominant risk. The network has no mechanism for noticing that the world has changed. And it
cannot exceed the fidelity of the diffraction model it was trained on.

**Verdict: build this first.** It is the only one of the three that gives a usable answer to "does
the basic idea work?" without weeks of hardware time.

### 3.2 Approach B: model-free reinforcement learning, trained online

| | |
|---|---|
| **Environment** | the real bench, optionally warm-started in simulation |
| **Agent** | PPO for continuous piezo commands; DQN only if the action set is genuinely discretised, which for piezo control it should not be |
| **State** | the last few frames plus the current actuator commands, so the policy can see velocity as well as position |
| **Action** | per-channel piezo increments, and occasional coarse stepper moves |
| **Reward** | encircled energy in the focal spot, or fringe visibility, or a combination with a penalty on actuator effort |

**Advantages.** It adapts to the actual hardware, including the parts nobody modelled: hysteresis and
creep in the piezo stacks, backlash in the mechanical stages, the specific disturbance statistics of
the room. It needs no simulator to be correct. It optimises the metric that is actually wanted rather
than a proxy.

**Challenges.** Sample cost is the problem. Model-free continuous control typically wants 10⁵-10⁷
environment steps; at 10 Hz that is between three hours and eleven days of continuous bench time, and
the bench drifts underneath it. Reward engineering is delicate: a single scalar reward has a credit
assignment problem that gets quantitatively worse with N (section 7). Online exploration on hardware
needs action clamps so a policy cannot walk a stage into its end stop.

**Verdict: add it second, as a refinement layer over A, not as a replacement.** Initialise from the
supervised controller so exploration starts from a working policy, and constrain it to small
corrections.

### 3.3 Approach C: model-based RL over a differentiable optics simulator

| | |
|---|---|
| **Model** | the diffraction forward model written in PyTorch so it is differentiable end to end |
| **Agent** | planning against the learned or analytic model; Dreamer-class latent models or MBPO if the model is learned, or plain gradient descent through the simulator if it is analytic |
| **Correction** | update model parameters (amplitudes, aberrations, calibration constants) when prediction and camera disagree |

**Advantages.** Sample-efficient, because most of the learning happens inside the model. Interpretable:
the model's parameters are physical quantities, and watching them move under real data is itself a
diagnostic of what the bench is doing. If the forward model is analytic and differentiable, the
"controller" can be plain gradient descent on phases through the simulator, with no policy network at
all - which is a much smaller thing to get right.

**Challenges.** The value is bounded by the model's accuracy, and the interesting failures are exactly
the ones the model does not contain. It is the most complex of the three to implement and debug, and
model error can produce confidently wrong plans, which is a worse failure mode than the honest
flailing of B.

**Verdict: worth building the differentiable simulator regardless**, because approach A needs a
forward model anyway and a differentiable one costs little more. Treat online model-based planning as
a research direction rather than the deployment path.

### 3.4 Side by side

| | A: supervised CNN | B: model-free RL | C: model-based RL |
|---|---|---|---|
| Hardware time to first result | none | days to weeks | hours to days |
| Robust to model error | no | yes | partially |
| Handles novel disturbance | no | yes | if modelled |
| Capture from large error | yes | slowly | yes |
| Interpretable failure | moderate | poor | good |
| Implementation risk | low | medium | high |
| Recommended role | primary controller | outer adaptive layer | forward model and research track |

---

## 4. Recommended path

1. **Build the differentiable forward model.** It is the shared dependency of all three approaches and
   the thing the whole programme reasons with.
2. **Train the supervised CNN on simulated patterns with heavy domain randomisation** (section 5) and
   deploy it as the proportional element of a 10 Hz loop.
3. **Generate a real labelled dataset using commanded piezo phase ramps** and fine-tune on it. This is
   the single highest-value step in the whole plan and it is described in section 5.3.
4. **Add a PPO layer initialised from the supervised controller**, constrained to small corrections,
   to handle the disturbances that the simulator does not contain.
5. **Keep a classical fallback** - SPGD dither, or a hill-climb on encircled energy - permanently
   available, selected automatically when the uncertainty estimate says the network is out of
   distribution. A learned controller that cannot admit ignorance is not deployable.

The reasoning for this order is that step 2 gives an answer in weeks with no hardware risk, step 3
converts the dominant risk from "does the simulator match reality" into an ordinary supervised
problem on real data, and step 4 only then spends bench time on the residue. Reversing the order
spends the expensive resource first.

---

## 5. Simulation-to-reality transfer

For approach A this is *the* risk. A network trained on clean simulated fringes and shown a real
camera frame is seeing a different distribution in at least a dozen respects, and unlike a
misalignment it fails silently: the network still emits confident phase estimates, the loop still
issues commands, and the bench walks away from alignment while everything reports normal.

### 5.1 Domain randomisation

Randomise over everything that is not the signal, at training time, across ranges wider than the real
bench should ever exhibit:

| Category | Randomised over |
|---|---|
| Sensor | read noise, shot noise, fixed-pattern noise, hot and dead pixels, bit depth, gamma and response nonlinearity |
| Exposure | mean level over a 20:1 range, occasional saturation of the central lobe |
| Background | stray light gradients, room-light leakage, ghost reflections at 10⁻³ of peak |
| Beams | amplitude imbalance ±30%, one channel dropped entirely, per-channel wavelength offset, partial polarisation mismatch |
| Wavefront | low-order Zernike aberration to λ/4 per channel (defocus, astigmatism, coma) |
| Geometry | sub-aperture position jitter, imaging scale ±10%, rotation ±5°, defocus of the imaging system, vignetting |
| Count | beam count from 5 to 10, so the network is not tied to one N |

The purpose is not realism. It is to make the real bench an interior point of the training
distribution rather than an extrapolation from it.

### 5.2 Ensembling and uncertainty

Train 5-10 networks from independent seeds on independently randomised data. Use the spread of their
predictions as the uncertainty estimate, and additionally have each network predict a per-channel
concentration parameter (the circular analogue of a variance) alongside its (sin, cos) output.

The loop then has three regimes, and the transitions matter as much as the estimates:

| Ensemble state | Interpretation | Loop behaviour |
|---|---|---|
| Tight agreement, high concentration | in distribution | apply the correction at full gain |
| Disagreement or low concentration | out of distribution | reduce gain, or hand over to the classical dither fallback |
| Persistent disagreement over many frames | the bench has changed | stop, log the frame, raise for inspection |

The third case is the one worth engineering for. A controller that halts and says "I do not recognise
this" is far more useful than one that keeps issuing commands, and it is how a sim-to-real failure
gets caught in minutes rather than after an afternoon of quiet drift.

### 5.3 The strongest mitigation is real labelled data, and it is cheap

The bench can label its own data. Command a known phase ramp on one channel's piezo and record the
resulting images. The piezo is calibrated first by sweeping it over more than two waves and counting
intensity maxima at a single pixel, which gives nanometres per volt directly with no external
reference. Then:

- sweeping one channel over 2π while the rest are held gives a few hundred images with exactly known
  relative phase for that channel;
- sweeping several channels over a Latin hypercube of commanded offsets gives a labelled set covering
  the joint space;
- at 10 fps, a few thousand labelled real images per hour, unattended.

This converts the dominant risk from "does the simulator transfer" into an ordinary supervised
learning problem on real data. It also produces the ground truth needed to *measure* the sim-to-real
gap rather than argue about it: train on simulation, test on the real labelled set, and the error gap
is the number. It should be the first thing built after the bench works at all.

The caveat, stated plainly: the labels are known *commanded* offsets on top of an unknown and slowly
drifting common-mode phase, so the labelling is exact in the differences and unknown in the absolute -
which is precisely the relative-phase quantity section 2.3 says is the only observable one. The
inconvenience is that drift during a sweep appears as label noise, which bounds sweep duration to
seconds, not minutes.

---

## 6. Training data generation

### 6.1 The generator, corrected

The concept note's `generate_interference_pattern` sums `np.abs(field) ** 2` inside the beam loop. That
adds *intensities*, which discards every cross term and produces a smooth blob with no fringes in it
at all - the exact opposite of what the network needs to learn from. The fields must be summed as
complex amplitudes and the modulus squared taken once, at the end. Two smaller faults ride along with
it: `zip(phases, amplitudes, amplitudes)` passes amplitudes where the beam angle is expected, and the
transverse wavevector omits the 2π/λ factor, so the pattern has no physical scale and about one fringe
across the frame.

```python
import numpy as np

WAVELENGTH_M = 1.03e-6


def generate_interference_pattern(phases, amplitudes, beam_positions_m,
                                  sensor_width_m=2.0e-3, grid_size=512,
                                  focal_length_m=0.75, wavelength_m=WAVELENGTH_M,
                                  read_noise_frac=0.005, rng=None):
    """
    Far-field intensity of N mutually coherent beams tiled across a combining aperture.

    Each sub-aperture at transverse position r arrives at the focal plane as a plane
    wave with transverse wavevector k_perp = (2*pi/lambda) * r / f. The complex fields
    are summed and the intensity taken once, at the end.

    Defaults correspond to the proof-of-concept bench in 08-proof-of-concept: a 512 px
    crop at 3.9 um per pixel, a 750 mm combining lens, and sub-apertures on a ring of
    40 mm diameter, which puts the finest fringe period at lambda*f/D = 19.3 um, or
    about 4.9 pixels.

    Args:
        phases: (N,) piston phase of each beam, radians.
        amplitudes: (N,) field amplitude of each beam.
        beam_positions_m: (N, 2) transverse centre of each sub-aperture.
        sensor_width_m: physical width of the square sensor region modelled.
        grid_size: pixels across that region.
        focal_length_m: focal length of the combining lens.
        wavelength_m: optical wavelength.
        read_noise_frac: Gaussian read noise as a fraction of mean intensity.
        rng: numpy Generator, for reproducible datasets.

    Returns:
        (grid_size, grid_size) float array of intensity, arbitrary units.
    """
    rng = np.random.default_rng() if rng is None else rng

    half = 0.5 * sensor_width_m
    axis = np.linspace(-half, half, grid_size)
    x_grid, y_grid = np.meshgrid(axis, axis)

    k = 2.0 * np.pi / wavelength_m
    field = np.zeros_like(x_grid, dtype=complex)

    for amp, phase, (pos_x, pos_y) in zip(amplitudes, phases, beam_positions_m):
        k_x = k * pos_x / focal_length_m
        k_y = k * pos_y / focal_length_m
        field += amp * np.exp(1j * (k_x * x_grid + k_y * y_grid + phase))

    # the modulus squared is taken ONCE, after summation; taking it per beam and
    # accumulating removes every cross term and produces no interference at all
    intensity = np.abs(field) ** 2
    intensity += rng.normal(0.0, read_noise_frac * intensity.mean(), intensity.shape)
    return np.clip(intensity, 0.0, None)
```

### 6.2 Labelling, given the invariances

```python
def wrap_to_pi(angle):
    """Wrap an angle array into [-pi, pi)."""
    return (angle + np.pi) % (2.0 * np.pi) - np.pi


def make_labelled_example(num_beams, ring_radius_m=0.020, rng=None):
    """
    One (image, label) pair for supervised phase regression.

    The label is the phase of each channel RELATIVE to channel 0, encoded as a
    (sin, cos) pair. Two properties of the physics dictate that encoding:
      - adding a constant to every phase leaves the intensity pattern exactly
        unchanged, so only N-1 relative phases are observable and regressing N
        absolute phases asks for an unidentifiable quantity;
      - phase is circular, so a squared error on the raw angle is discontinuous
        at +/- pi and penalises the wrap rather than the error.

    The sub-aperture positions are jittered off the ideal ring on purpose. For real
    amplitudes the intensity satisfies I_{-phi}(-r) = I_phi(r) exactly, so a negated
    phase set produces the 180-degree rotation of the same image; an inversion
    symmetric layout makes that near-degenerate for a pooled CNN, and breaking the
    layout symmetry removes it.
    """
    rng = np.random.default_rng() if rng is None else rng

    ring = 2.0 * np.pi * np.arange(num_beams) / num_beams
    positions = ring_radius_m * np.stack([np.cos(ring), np.sin(ring)], axis=1)
    positions += rng.normal(0.0, 0.1 * ring_radius_m, positions.shape)

    phases = rng.uniform(0.0, 2.0 * np.pi, num_beams)
    amplitudes = rng.uniform(0.7, 1.3, num_beams)

    image = generate_interference_pattern(phases, amplitudes, positions, rng=rng)

    relative = wrap_to_pi(phases - phases[0])[1:]
    label = np.stack([np.sin(relative), np.cos(relative)], axis=1).ravel()
    return image, label


def build_dataset(num_examples=10_000, seed=0):
    """Generate a training set spanning 5 to 10 beams."""
    rng = np.random.default_rng(seed)
    return [make_labelled_example(int(rng.integers(5, 11)), rng=rng)
            for _ in range(num_examples)]
```

Per-image normalisation before the network is acceptable, because fringe visibility
`(I_max - I_min) / (I_max + I_min)` is invariant under a scale factor. What is not acceptable is
normalising differently in training and at inference: whatever the camera pipeline does with
auto-exposure must be reproduced exactly in the training preprocessing, or the network is being tested
on a different distribution from the one it learned.

---

## 7. The real-time control loop

### 7.1 Execution flow at 10 Hz

```
  every 100 ms:
    1. trigger camera, read one frame (mono, 512 x 512 crop)
    2. preprocess: subtract dark, apply flat field, normalise
    3. ensemble inference -> (N-1) relative phases + per-channel concentration
    4. gate on uncertainty:
         in distribution   -> continue
         out              -> reduce gain, or hand to SPGD dither fallback
    5. wrap the error against the target relative phases
    6. proportional-integral correction -> piezo voltages
    7. if any piezo is near an end of travel, hand whole waves to its stepper
    8. write DAC (fine) and, at most once per second, serial (coarse)
```

### 7.2 Latency budget

| Stage | CPU-only | With a small GPU | Note |
|---|---|---|---|
| Camera exposure | 5 ms | 5 ms | set by signal level, not by the loop |
| Readout and USB3 transfer, 512 × 512 mono 8-bit | 3 ms | 3 ms | a mirrorless live-view feed is 50-150 ms and not deterministic; use a machine-vision camera |
| Preprocess | 2 ms | 2 ms | |
| Ensemble inference, 5 × ResNet-18 at 256 × 256 | 100 ms | 15 ms | a single network is 20 ms / 3 ms; the ensemble is the cost of knowing when you are wrong |
| Control law, wrap, gain, range check | 1 ms | 1 ms | |
| DAC write and piezo settle | 5 ms | 5 ms | flexure-mounted stack, first resonance ~1 kHz, damped |
| **Total** | **116 ms** | **31 ms** | |

The CPU-only ensemble does not fit a 100 ms budget; either run a single network on CPU (43 ms, which
fits comfortably) and accept a weaker uncertainty estimate, or put a small GPU on the bench and run
the full ensemble at 30 Hz. The second is the better trade and costs a few hundred dollars. Either
way, the loop is camera-limited and settle-limited rather than compute-limited, which is a healthy
place to be.

The stepper path is deliberately outside this budget. A stepper move takes 0.1-1 s to complete and
settle, so it belongs in a slow outer loop running at about 1 Hz, not in the 10 Hz phase loop. That
separation is what makes the two-stage actuation of
[08-proof-of-concept](08-proof-of-concept.md) work.

### 7.3 Phase error to actuator command, corrected

The concept note's mapping used `dx = lambda * phi / (2 * pi)`, then multiplied metres by 10⁶ and
returned the result as stepper steps. Three faults: the factor is wrong for a fold mirror, the units
conflate micrometres with motor steps, and the clamp treats an incremental correction as an absolute
range. A mirror translated by `dx` along the beam at normal incidence changes the optical path by
`2*dx`, so the phase change is `4*pi*dx/lambda` and the correct inverse is `dx = lambda*phi/(4*pi)`.

```python
import numpy as np

WAVELENGTH_M = 1.03e-6
PIEZO_TRAVEL_M = 10.0e-6      # stack travel at full drive voltage
STEPPER_STEP_M = 0.156e-6     # 0.5 mm pitch, 200 steps/rev, 1/16 microstepping


def phase_error_to_actuator(predicted_rel_phase, target_rel_phase, piezo_position_m,
                            gain=0.5, wavelength_m=WAVELENGTH_M):
    """
    Turn predicted relative-phase errors into a fine piezo command and, only when a
    piezo has run out of travel, a coarse stepper command.

    Geometry sets the mapping, not the wavelength alone. A fold mirror translated by
    dx along the beam axis at normal incidence changes the optical path by 2*dx, so
        d_phi = 4*pi*dx / lambda    =>    dx = lambda * d_phi / (4*pi)

    Args:
        predicted_rel_phase: (N-1,) phases of channels 1..N-1 relative to channel 0.
        target_rel_phase: (N-1,) desired relative phases, normally zeros.
        piezo_position_m: (N-1,) currently commanded piezo extension.
        gain: proportional loop gain, kept below 1 for stability against the one-sample
            loop delay and against prediction error.

    Returns:
        piezo_command_m: (N-1,) new absolute piezo extension to command.
        stepper_steps: (N-1,) integer coarse moves, zero except on a range reset.
    """
    error = wrap_to_pi(predicted_rel_phase - target_rel_phase)
    correction_m = -gain * wavelength_m * error / (4.0 * np.pi)

    piezo_command_m = piezo_position_m + correction_m
    stepper_steps = np.zeros(piezo_command_m.shape, dtype=int)

    # a mechanical displacement of lambda/2 is one full wave of optical path, so
    # unloading whole waves onto the stepper is phase-neutral in principle
    wave_m = 0.5 * wavelength_m
    for i, position in enumerate(piezo_command_m):
        if position < 0.1 * PIEZO_TRAVEL_M or position > 0.9 * PIEZO_TRAVEL_M:
            waves = np.round((position - 0.5 * PIEZO_TRAVEL_M) / wave_m)
            piezo_command_m[i] = position - waves * wave_m
            stepper_steps[i] = int(np.round(waves * wave_m / STEPPER_STEP_M))

    return piezo_command_m, stepper_steps
```

**The range reset is phase-neutral in principle and not in practice, and the loop must expect that.**
A stepper positions to a few micrometres at best, which is several waves, so the handover throws the
channel's phase away and the loop re-acquires over the next few iterations. Three ways to keep that
rare: stabilise the bench thermally so drift is slow, choose a longer-travel piezo (30-40 µm buys
60-80 waves of range), and put the stepper on a separate coarse delay element rather than on the same
mirror the piezo drives. A 10 µm stack gives 19.4 waves of optical path, while 1 K of drift on a 1 m
aluminium path is 23 µm - so on an unstabilised bench the range will be exhausted, and the reset
behaviour is a design feature rather than an edge case.

---

## 8. Scaling the controller from 10 to 500 channels

### 8.1 What gets linearly harder, and what does not

The action space grows linearly: 3N mechanical axes plus N piezo channels. That part is an
engineering cost, not a control problem. What degrades is the optimisation landscape. The search
volume is `(range / resolution)^{3N}`, which is exponential in N; the number of local optima in any
metric built on a single scalar grows with it; and, most importantly, the information per
measurement about any *individual* channel collapses.

### 8.2 A single global reward stops carrying information, quantitatively

Take the on-axis field of N equal, locked channels, `E = N·a`, so `I = N²a²`. Dither one channel by δ
radians. Then

```
  |E|^2 = a^2 [ (N-1)^2 + 2(N-1) cos(delta) + 1 ]
        ~ a^2 [ N^2 - (N-1) delta^2 ]        for small delta
```

so the fractional signal from one channel's dither is

```
  dI / I  ~  - delta^2 / N
```

The system is at a maximum when locked, so the first-order term vanishes and what remains is
curvature, which dilutes as 1/N. With a dither amplitude of δ = 0.3 rad:

| Channels | Fractional intensity change from one channel | Detected photons needed per measurement for a 1σ shot-noise detection |
|---|---|---|
| 10 | 9.0 × 10⁻³ | 1.2 × 10⁴ |
| 100 | 9.0 × 10⁻⁴ | 1.2 × 10⁶ |
| 500 | 1.8 × 10⁻⁴ | 3.1 × 10⁷ |

That is the sparse-reward problem in physical units. It is not that the reward is noisy; it is that a
single scalar built from the whole array contains a 1/N share of information about each channel, and
no amount of learning recovers information the measurement never had. Any architecture that scales
must change the *measurement*, not the algorithm.

### 8.3 Decomposition strategies

| Strategy | How it produces a dense signal | Scales to | Cost |
|---|---|---|---|
| **Frequency-tagged sensing** (LOCSET-like) | dither each channel at a distinct frequency and demodulate one fast photodiode, giving an independent error signal per channel | a few hundred, limited by detector bandwidth divided by N | one fast detector, N modulators, demodulation electronics |
| **Nearest-neighbour phase locking** | measure the phase difference between adjacent sub-apertures in the near field with a shearing interferometer or lenslet array; each signal is local and independent of N | indefinitely | a near-field sensor; leaves a slowly accumulating global piston-tilt ramp needing a coarse global sensor |
| **Sub-aperture grouping / hierarchical control** | combine in tiers of 7-19 hexagonal clusters; each tier is a small, well-conditioned problem with its own local metric, and the top tier sees ~30 super-channels | 500 and beyond | one extra combining stage and one detector per cluster |
| **Permutation-equivariant policy** | parameterise the controller over the aperture lattice (a graph or convolution over sub-aperture index) so parameter count is independent of N | any N | none, it is a modelling choice, and it lets a policy trained at N = 19 transfer to N = 500 |
| **Curriculum over N** | train at increasing channel counts with shared weights | any N | training time only |
| **Pairwise pick-off sampling** (§9) | split a small fraction of each beam and interfere the pairs directly, so each measurement reads one relative phase at unit visibility rather than a 1/N share of a global intensity | indefinitely, subject to the graph-depth constraint in §9.4 | N beamsplitters, a sensing bench, and the non-common-path problem of §9.6 |

The recommendation for the full array is hierarchical combining with local per-cluster sensing and a
permutation-equivariant learned policy shared across clusters. The camera-only architecture that the
proof of concept uses is correct at 10 channels and should not be assumed to scale; the transition
point is where the fractional signal in the table above drops below what the sensor can measure in
one frame, which on these numbers is somewhere between 30 and 100 channels.

**Section 9 develops the last row of that table into the sensing architecture the full array should
use.** It is not an alternative to the rows above it: frequency tagging and nearest-neighbour locking
also change the measurement in the way §8.2 demands, and §9.6's recommended intra-cluster form is the
nearest-neighbour option. What §9 adds is the composition, pairwise sensing carried on the
hierarchical clustering already recommended here. That recommendation survives intact and gains a
second justification: §9.4 shows that the clustering chosen for
combining reasons is also what keeps the sensing graph shallow enough to meet the phase budget.

### 8.4 Where the learned controller should actually earn its place

Worth saying explicitly, because it disciplines the whole approach. A well-conditioned local
phase-locking loop with a per-channel error signal is a solved problem, and a neural network is not a
better PID controller. The learned element should be aimed at what the classical loop does badly:

- **capture from a large excursion**, where a linear loop has no valid error signal at all;
- **non-stationary disturbance**, where fixed gains are either too slow or unstable;
- **actuator nonlinearity**, hysteresis and creep, which a learned inverse model handles naturally;
- **sensor dropout and degradation**, where a policy conditioned on uncertainty can degrade
  gracefully instead of diverging;
- **coordination across clusters**, where the coupling is real but not easily written down.

That framing also makes the research contribution honest: the claim is not "learning replaces
coherent beam combining control", it is "learning covers the regimes in which the established methods
have no error signal, and does so at a scale where hand-tuning cannot reach".

---

## 9. Pairwise sampling: the sensing architecture the full array needs

Section 8 establishes that a single global metric cannot scale, and that what has to change is the
measurement rather than the algorithm. This section works out what to change it to. The primitive is
a beam-splitter pick-off feeding a pairwise interferogram; the multiplexing has to be spatial rather
than temporal; the graph those pairs form has a depth constraint that disqualifies the obvious
topology; and the redundancy the graph makes cheap is worth more as fault detection than as alignment
speed. Nothing here is demonstrated. It is a design argument built on the disturbance figures in §1.3
and the phase budget in §1.2, both of which are estimates.

### 9.1 A pairwise interferogram does not dilute

The dilution in §8.2 is a property of the far-field metric, not of interferometry. It arises because
one channel's contribution to `I = N²a²` is a 1/N share. Two beams interfered against each other have
no such denominator: the fringe visibility is order unity however many other channels exist, and the
observable is the relative phase itself rather than a second-order intensity change.

For a shot-noise-limited fringe of visibility V, the phase estimate has RMS error

```
  sigma_phi  ~  1 / (V sqrt(N_ph))
```

so reaching the 0.222 rad per-edge budget derived in §9.4, at V = 1, needs

```
  N_ph = 1 / (0.222 × 0.222) = 20.3
```

about twenty detected photons. Set against the global metric at the same channel count:

| Measurement | What it observes | Detected photons required |
|---|---|---|
| Global far field, one channel dithered at δ = 0.3 rad, N = 500 | 1.8 × 10⁻⁴ fractional intensity change (§8.2) | 3.1 × 10⁷ for a 1σ detection |
| Pairwise interferogram, V = 1 | the relative phase directly | ~20 for 0.222 rad RMS |

The ratio between them is

```
  3.1 × 10⁷ / 20.3 = 1.5 × 10⁶
```

That factor is the whole argument for the architecture, and it is an information argument rather than
a hardware one: the pairwise measurement is not more sensitive, it is asking a question whose answer
is not shared out among 500 channels.

Read it as an idealised bound in the same spirit as §4.1 of [00-summary](00-summary.md). Read noise,
background, finite visibility, pick-off amplitude imbalance and the separate photon cost of the
pointing measurement all erode it, and none of those is calculated here.

### 9.2 Time multiplexing fails, and the arithmetic is the one in §1.4

A scheme that cycles through pairs, aligning each in turn, is §1.4's inequality with a machine
substituted for the operator:

```
  N * t_c  <  tau_drift
```

`t_c` is one pairwise measurement plus one actuator settle. A photodiode reads a fringe in
microseconds and a piezo stack settles in 100 µs to 1 ms, so the actuator dominates and `t_c` = 1 ms
is the realistic figure with 100 µs as the optimistic one.

`tau_drift` is not one number. Each band in §1.3 consumes the λ/20 budget of 51.5 nm at its own rate,
and for a band of amplitude A at frequency f the peak optical-path slew is `2 pi f A`. Worked at the
top of each band, taking amplitudes from §1.3:

```
  peak OPD slew of a band at amplitude A and frequency f  =  2 pi f A
  time to consume the budget                              =  51.5 nm / slew

  thermal drift, 69 nm/min from §1.4
  69 / 60 = 1.15 nm/s
  51.5 / 1.15 = 44.8 s

  convection, 100 nm at 10 Hz
  2 × 3.1416 × 10 × 100 = 6,283 nm/s
  51.5 / 6,283 = 8.2 × 10⁻³ s

  building vibration, 1,000 nm at 200 Hz
  2 × 3.1416 × 200 × 1,000 = 1.26 × 10⁶ nm/s
  51.5 / 1.26 × 10⁶ = 4.1 × 10⁻⁵ s

  acoustic, 100 nm at 5 kHz
  2 × 3.1416 × 5,000 × 100 = 3.14 × 10⁶ nm/s
  51.5 / 3.14 × 10⁶ = 1.6 × 10⁻⁵ s
```

| Disturbance (§1.3) | Amplitude and frequency used | Peak OPD slew | Time to consume 51.5 nm |
|---|---|---|---|
| Thermal drift | 69 nm/min, from §1.4 | 1.15 nm/s | 45 s |
| Convection | 100 nm at 10 Hz | 6.28 µm/s | 8.2 ms |
| Building vibration | 1,000 nm at 200 Hz | 1.26 mm/s | 41 µs |
| Acoustic | 100 nm at 5 kHz | 3.14 mm/s | 16 µs |

Which gives the channel ceiling a cycling scheme can hold, band by band:

| Band | τ_drift | N_max at t_c = 1 ms | N_max at t_c = 100 µs |
|---|---|---|---|
| Thermal drift | 45 s | 45,000 | 450,000 |
| Convection | 8.2 ms | 8 | 82 |
| Building vibration | 41 µs | < 1 | < 1 |
| Acoustic | 16 µs | < 1 | < 1 |

**Sequential cycling is a thermal-drift controller and nothing else.** Against convection it tops out
at single-digit channel counts, and against vibration it cannot hold one channel, which is the same
conclusion §1.3 reaches for the 10 Hz camera loop and for the same reason. The fast inner loop has to
be parallel and per-channel whatever else is true.

The cycle-length arithmetic says the same thing from the other side. At 500 channels a spanning tree
is 499 edges and the complete graph is

```
  500 × 499 / 2 = 124,750
```

At `t_c` = 1 ms the tree cycles in 0.499 s, a 2.0 Hz per-channel update, and the complete graph in
124.75 s, a 0.0080 Hz update. Against the unity-gain bandwidths §1.3 requires - 0.1 Hz for thermal
drift, 10 to 100 Hz for convection, 200 Hz to 2 kHz for vibration - tree cycling holds thermal drift
with margin and misses convection by one to two orders. Cycling the complete graph fails to hold even
thermal drift.

**Rotation is therefore an outer-loop mechanism, not a scaling mechanism.** It has real work to do
there, and §9.5 and §9.8 say what.

### 9.3 Multiplex in space instead

Every argument above is against time-division. None of it is against pairwise measurement. Fix a
pick-off per channel, interfere the pairs simultaneously, and image the set onto one sensor as
separate fringe patches: every edge is then measured every frame, and the per-edge update rate is the
frame rate rather than the frame rate divided by the edge count. The cost moves from bandwidth, which
is scarce, to beamsplitters and pixels, which are not.

Two consequences follow from treating the result as a graph over channels, with an edge wherever a
pair is interfered.

**The graph needs N-1 edges, not N(N-1)/2.** Phase differences on a connected graph determine every
node phase relative to a nominated reference, which is the same N-1 observable relative phases §2.3
already identifies. At 500 channels that is 499 measurements rather than 124,750:

```
  124,750 / 499 = 250
```

Any scheme that visits all pairs is doing 250 times more work than the physics requires.

**Redundant edges beyond the spanning tree are not waste**, but what they buy is noise averaging and
fault detection rather than reach. See §9.5.

### 9.4 Graph depth is the binding constraint, and it disqualifies a chain

Phases propagate from the reference along paths. With independent per-edge measurement errors of RMS
σ_e, the accumulated error at a node sitting d edges from the reference is

```
  sigma_node = sigma_e * sqrt(d)

  chain of 500, d = 499, root d = 22.34
  0.314 / 22.34 = 0.01406 rad

  two tiers, d = 2, root d = 1.414
  0.314 / 1.414 = 0.222 rad
```

Setting that against the λ/20 combining budget of 0.314 rad from §1.2 gives the per-edge measurement
requirement for each candidate topology:

| Topology | Depth from reference | Required per-edge σ_e | In waves |
|---|---|---|---|
| Chain of 500 | up to 499 | 0.01406 rad | λ/447 |
| Two tiers, 27 clusters of 19 | 2 | 0.222 rad | λ/28 |
| Star, one global reference | 1 | 0.314 rad | λ/20 |

**A chain is disqualified outright**, and this is worth stating plainly because a chain is exactly
what a naive "align each laser to its neighbour, working along the array" scheme produces. It demands
a per-edge measurement thirty times better than the budget it is trying to meet.

A star is optimal on depth and unacceptable on failure: one reference channel carries every
measurement in the array, and [04-laser-array](04-laser-array.md) §6.2 treats a silent single-channel
failure as more dangerous than a dead one.

The two-tier hierarchy is the compromise and it costs nothing new, because it is the clustering §8.3
already recommends on combining grounds. At 500 channels

```
  500 / 19 = 26.3
```

so 27 clusters of up to 19, and the top tier sees 27 super-channels, which is the ~30 §8.3 assumes.
**The structure that makes the combining tractable is the same structure that keeps the sensing graph
shallow**, and that coincidence is the strongest argument for it.

### 9.5 Redundancy buys closure, and closure is what makes the graph self-diagnosing

Around any closed loop in the graph the measured phase differences must sum to zero:

```
  delta_ij + delta_jk + delta_ki = 0   (mod 2 pi)
```

This holds identically whatever the true channel phases are, because each true phase enters twice with
opposite sign. So a non-zero closure residual is a statement about the *measurement*, never about the
array: a bad edge, a 2π wrap, a dropped sensor, a channel that has silently lost power. It is the only
observable in this design that separates a sensing fault from a real drift, and
[04-laser-array](04-laser-array.md) §6.2 is explicit that the silent failure is the one that matters.

Redundancy is cheap on a near-field lattice. A hexagonal close-packed aperture has of order 3N
nearest-neighbour edges, against the N-1 a spanning tree needs.

**The table below is the all-neighbour ceiling, not the recommended graph.** It instruments every
nearest-neighbour pair on a flat lattice of 500, whereas §9.4 and §9.6 recommend 27 sheared clusters
plus a tree of 26 routed top-tier edges, which instruments far fewer pairs and has no top-tier
closures at all. Read it as the redundancy available if you pay for every edge, and as the bound the
recommended topology trades away in exchange for confining the non-common-path problem to 26 edges.

| Quantity | Value at N = 500, all neighbours instrumented |
|---|---|
| Spanning-tree edges | 499 |
| Nearest-neighbour edges, hexagonal lattice | ~1,500 |
| Independent closure loops, E - N + 1 | ~1,001 |
| Redundancy factor | ~3 |
| Noise improvement from a least-squares solve over the redundant graph | ~√3, about 1.7 |

The closure-loop count is the cyclomatic number of the sensing graph:

```
  1,500 - 500 + 1 = 1,001
```

The ~3N edge estimate behind it is the interior count, where each vertex has six neighbours and each
edge is shared between two. The boundary reduces it and by how much is not calculated here.

**So triplets do earn a place in this design, and it is not the one intuition suggests.** They are not
a faster way to align. They are a consistency check, a fringe-order disambiguator and the mechanism by
which the sensor array detects its own faults, and they are worth having for that alone.

### 9.6 Non-common-path error is what this architecture costs

A routed pick-off measures the phase difference **at the sensor**, not at the aperture. Every drift in
the pick-off path adds to the measurement and is indistinguishable from a real channel error, so the
sensing bench inherits the whole disturbance problem of §1.3, at the same 51.5 nm tolerance, over paths
that are not the ones being controlled. This is the classical non-common-path error and it is the
reason the architecture is not free. It is also the weakness most likely to be discovered late, because
a bench that is drifting coherently will look perfectly locked.

Three mitigations, in increasing order of how much they actually solve:

- **Keep the pick-off paths short, matched and inside one thermally stabilised enclosure.** Reduces the
  drift; does not make it common. Cheapest and weakest.
- **Calibrate the sensing bench periodically against the far-field metric.** Turns an unbounded drift
  into a bounded one, at the cost of a slow outer loop that needs the far-field camera after all. This
  is a legitimate use for the rotation §9.2 rejects as an inner loop.
- **Shear the near field rather than routing it.** Interfere each sub-aperture against its neighbour at
  the aperture plane, so the two arms of every interferometer share substantially the same path. This
  is §8.3's nearest-neighbour option, and it is free of non-common-path error very nearly by
  construction.

**The recommendation is the shearing form for the intra-cluster tier**, with routed pick-offs kept only
for the cluster-to-cluster tier, where the apertures are not adjacent and a routed path is unavoidable.
That confines the non-common-path problem to the 26 top-tier edges instead of all ~1,500.

### 9.7 A candidate answer to the group-delay multiplexing question

The open questions below previously carried "what group-delay sensor architecture serves 500 channels?"
on the grounds, from §2.2, that spectral interferometry and cross-correlation are both per-channel
measurements against a reference. Spatial multiplexing offers a candidate answer. **This is a proposal,
not a result.**

Disperse each pairwise fringe along one axis with a grating and image the set onto a two-dimensional
sensor, so that each edge occupies a row and carries a spectral interferogram rather than a single
fringe. The physics is unchanged: this is the spectral interferometry §2.2 already lists. What changes
is that it is acquired for every edge in one frame instead of one channel at a time, which is precisely
the multiplexing the open question asks for.

The unambiguous range follows from the synthetic wavelength of the two edges of the pulse spectrum. A
100 fs transform-limited pulse at 1.03 µm carries 15.6 nm of bandwidth (§2.2), so with
λ₁ = 1.0222 µm and λ₂ = 1.0378 µm:

```
  Lambda = lambda_1 lambda_2 / (lambda_2 - lambda_1)
  1.0222 × 1.0378 / 0.0156 = 68.0 µm
```

against the 30 µm envelope length §2.2 gives. The synthetic wavelength exceeds the envelope, so the
fringe order is determined everywhere the envelopes overlap at all, which is exactly the 29-fold
ambiguity §2.2 identifies as unresolvable by a single fringe camera.

What it does not solve is the other half of §2.2: where the envelopes do not overlap there are still no
fringes, and that case still needs mechanical metrology to get within a picosecond first. The layered
architecture §2.2 describes is unchanged. This proposal replaces the middle layer's per-channel scan
with a parallel read and nothing else.

Three things would settle whether it works, none of them done here:

- the photon budget per spectral element, which is the frame photon count divided by the number of
  resolved spectral elements and is not computed;
- whether fringe visibility survives the dispersion and the pick-off amplitude imbalance;
- whether a sensor exists with enough rows, well depth and frame rate to carry ~1,500 dispersed edges.

### 9.8 What this leaves the learned controller

Section 8.4 argues that the learned element should target what a classical loop does badly. A dense
per-edge error signal sharpens that argument rather than weakening it, because it moves phase-holding
firmly into the solved-problem column. What remains:

- **capture from a large excursion**, unchanged from §8.4 and now better posed, because a pairwise
  fringe carries a valid error signal across a full wave rather than only near the lock point;
- **wrap resolution**, deciding which 2π branch each edge sits on, informed by the closure residuals of
  §9.5 and the spectral read of §9.7;
- **fault classification**, separating a sensing fault from a real drift from a dead channel using
  closure residuals, which is a labelling problem with a physical ground truth rather than a control
  problem;
- **non-common-path estimation**, holding a slowly varying model of the sensing bench's own drift,
  which is exactly the unmodelled non-stationary quantity §8.4 lists and which the classical loop has
  no handle on at all;
- **actuator inversion**, hysteresis and creep, unchanged from §8.4.

Note what has left the list: regressing N phases from one far-field image, which is approach A in §3.1
and what the originating concept note proposed. That formulation is correct at proof-of-concept scale,
where §8.3 puts the crossover between 30 and 100 channels, and **it should not be carried into the
full-array design**. The proof of concept in [08-proof-of-concept](08-proof-of-concept.md) tests the
learning hypothesis on a camera-only bench, which remains the right experiment; this section is about
what replaces the camera afterwards.

---

## Open questions

- **What is the actual disturbance spectrum of the bench?** Every bandwidth argument above uses
  order-of-magnitude figures typical of an optical table. The real spectrum is one accelerometer and
  one photodiode away and has not been measured. Awaiting measurement.
- **How large is the sim-to-real gap in practice?** Section 5.3 gives a way to measure it rather than
  argue about it, but the number is unknown until the bench exists. Awaiting measurement.
- **Where does the camera-only architecture break?** Section 8.2 puts the crossover somewhere between
  30 and 100 channels on a shot-noise argument alone. Read noise, background and finite dynamic range
  will move it earlier, and by how much is not calculated here. Awaiting calculation.
- **Is the phase-sign degeneracy of section 2.3 a practical problem or only a theoretical one?** It is
  cheap to insure against by jittering the layout, so the question is whether the insurance is
  necessary. Testable in simulation before any hardware exists.
- **Does the dispersed pick-off array of §9.7 actually multiplex the group-delay measurement?** This
  replaces the flat "what group-delay sensor architecture serves 500 channels?" that stood here before
  §9 was written. Spectral interferometry and cross-correlation are both per-channel measurements
  against a reference, and §9.7 proposes reading all edges in one dispersed frame instead. The
  synthetic wavelength arithmetic works, at 68.0 µm against a 30 µm envelope. The photon budget per
  spectral element, the fringe visibility after dispersion, and whether a sensor of the required
  format exists are all uncomputed. Awaiting calculation. See [04-laser-array](04-laser-array.md).
- **What is the residual non-common-path drift of a routed pick-off bench?** This is the number that
  decides whether §9.6's routed form is usable at all, and unlike most questions here it is a
  measurement rather than a calculation: build two pick-off paths, interfere them against a common
  source, and watch. If it exceeds the 51.5 nm budget over the control interval, the shearing form is
  not merely preferable but mandatory. Awaiting measurement.
- **What per-edge measurement error does a real bench achieve?** §9.4 derives a requirement of
  0.222 rad RMS per edge for the two-tier graph, from the λ/20 budget and a √d accumulation. Nothing
  here shows that a bench meets it, and §9.1's twenty-photon figure is a shot-noise bound that ignores
  read noise, background and visibility loss. Awaiting measurement.
- **Does the ~3N nearest-neighbour edge count survive the aperture boundary?** §9.5 uses the interior
  count for a hexagonal lattice and says explicitly that the boundary reduces it. The closure-loop
  count and the √3 noise improvement both scale with it. This bounds the all-neighbour ceiling rather
  than the recommended 27-cluster topology, whose intra-cluster edge counts and 26 top-tier edges are
  fixed by §9.4 and do not depend on it. Awaiting calculation.
- **Does a policy trained at small N genuinely transfer to large N?** The permutation-equivariant
  argument says it should. Nothing here demonstrates it, and the scaling steps in
  [09-roadmap](09-roadmap.md) are the place it would be tested.
- **What is the right fallback when the ensemble reports out-of-distribution?** SPGD dither is the
  obvious choice, but it is also the slowest thing on the bench, and a controller that falls back
  frequently is worse than one that never had a network.
