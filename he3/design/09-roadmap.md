# He-3 Programme - 09 Roadmap

This section sets out the staged path from a ten-laser bench to a 500-element array, giving each
stage a goal, a deliverable list, a cost, a timeline and an explicit exit criterion. The staging
itself is inherited from the originating concept note and survives intact: proof of concept, then
20 beams, then 100, then 500. What changes is what each stage is *for*. The programme no longer
advances towards helium-3 production, because [03-feasibility](03-feasibility.md) rules that
endpoint out by nine to eleven orders of magnitude. It advances instead towards the two things it can
actually deliver: an autonomous alignment controller for coherently combined laser arrays, and a
compact high-flux gamma source built on a laser-wakefield stage. The hardware ladder is unchanged.
The exit criteria are not.

---

## 1. The stage set at a glance

| Stage | What it is | Duration | Hardware | All-in cost | Exit criterion |
|---|---|---|---|---|---|
| **0** | Simulation and training | Months 1-2 | none | staff time only | CNN recovers phase on held-out synthetic data; BOM ordered |
| **1** | Proof-of-concept bench, 10 beams | Months 2-6 | $16.7k | ~$170k | **autonomous phase-locking of 10 beams** |
| **2** | 20-beam prototype | 3-6 months | ~$25k | ~$325k | coherence held autonomously for over an hour, and a measured scaling law |
| **GATE** | **Decision gate** | - | - | - | **see [section 6](#6-the-decision-gate-after-stage-2)** |
| **3** | 100-beam system with a wakefield stage | 24-36 months | see [section 7](#7-stage-3---100-beam-system-with-a-wakefield-stage) | **$12-100M** | characterised gamma beam above 20.578 MeV, one published cross-section point |
| **4** | 500-beam production system | 12-24 months per unit | see [section 8](#8-stage-4---500-beam-production-system) | **$60-200M** | sustained operation as a user facility |

Two features of this table matter more than the individual rows.

The first is that **stages 0 to 2 cost under half a million dollars in total and stage 3 costs
between twenty-five and two hundred times that.** The concept note put the 100-beam stage at
$3.075M, which is the right order for the optics and the people and omits the accelerator and the
facility entirely. Corrected, the jump from stage 2 to stage 3 is not a scale-up. It is a change of
project category.

The second is that **every exit criterion below stage 3 is a control result, not a nuclear one.**
Nothing before stage 3 produces a gamma ray, a neutron or an atom of helium-3, and nothing before
stage 3 needs a radiation licence. That is a feature: it means the cheap part of the programme is
also the part with the highest confidence of a useful outcome.

---

## 2. Stage 0 - simulation and training

**Months 1-2. Cost: staff time only, no hardware.**

### Goal

Build and validate the whole software stack before any hardware arrives, so that the four-to-six
week procurement lead time is spent productively rather than waiting. Everything in this stage is
open-source tooling and costs nothing but time.

### Deliverables

- Optics simulator computing the Fresnel diffraction pattern of N mutually coherent beams, given
  per-beam position, angle, amplitude and phase. Validated against the analytic two-beam fringe
  pattern, for which a closed-form answer exists.
- Synthetic training set of 50,000 interference patterns with known per-beam phase offsets, varying
  beam count (5 to 10), wavelength, phase error, pointing error, detector noise and background.
- Trained CNN mapping a single camera frame to per-beam phase estimates. A ResNet-18 class backbone
  is the sensible starting point; inference must fit in the control loop budget.
- Reinforcement learning environment wrapping the simulator, with the observation, action and reward
  definitions fixed in code so the stage 1 and stage 2 agents are comparable.
- Hardware bill of materials finalised, priced and ordered.

The simulator, the dataset and the trained weights are the stage's real product. See
[07-ai-control](07-ai-control.md) for the three control approaches and why the supervised CNN comes
first.

### Exit criterion

The trained network recovers per-beam phase on a **held-out** synthetic set to better than 0.3 rad
RMS across 5 to 10 beams, and the simulator reproduces the analytic two-beam fringe spacing and
contrast to numerical tolerance. If the network cannot do this in simulation, where the labels are
exact and the noise model is the one it was trained on, it will not do it on a bench.

**Failure here is cheap and informative.** A simulator that cannot be inverted is a sign that the
observation is under-determined, which is a design problem to fix in software before $16,700 of
optics is committed.

---

## 3. Stage 1 - the proof-of-concept bench

**Months 2-6. Hardware $16,700, one FTE, roughly $170k all-in.**

### Goal

Demonstrate that a learned controller can align and phase-lock ten cheap lasers from commodity
camera feedback alone, with no wavefront sensor and no human in the loop. This is the claim the
whole programme rests on, and it is the cheapest claim in the programme to test.

The bench itself, its bill of materials, its phase structure and its success criteria are specified
in [08-proof-of-concept](08-proof-of-concept.md) and are not repeated here. What follows is the
roadmap view: where the stage sits, what it costs, and what has to be true to leave it.

### Deliverables

- Optical bench assembled: 10 sources collimated and mounted, motorised kinematic mounts on three
  degrees of freedom per beam, spatial filtering, combining optics, focal lens.
- Camera at the observation plane with an infrared pass filter, streaming at 10 Hz or better.
- Microcontroller and stepper driver stack, with a Python control interface over serial.
- Human alignment baseline documented: time taken, fringe contrast achieved, drift over five minutes.
  The controller has to beat a person, and nobody can say whether it has without this number.
- Computer vision pipeline as a fallback and a cross-check on the network: FFT-based fringe frequency
  extraction and contrast measurement.
- The stage 0 network deployed on the live camera feed, closing the loop through the motors.
- Disturbance rejection demonstrated: a deliberate mirror nudge and an induced thermal drift, both
  recovered from without intervention.

### Cost

| Item | Cost |
|---|---|
| Hardware (see [08-proof-of-concept](08-proof-of-concept.md) for the itemised BOM) | $16,700 |
| Shipping, spares, one replacement laser, consumables | $3,000 |
| Software and simulation tooling | $0, open source |
| Personnel, 6 months at 1 FTE | $150,000 |
| **Total** | **~$170,000** |

**The hardware line is $16,700, not the concept note's "~$12,000".** The note's eight rows in fact sum
to $12,200, and they omit fine phase actuation entirely - without which the bench cannot demonstrate
phase locking at all, which is the one thing it exists to demonstrate. The piezo stacks and their
drive electronics add $4,500. The itemised bill of materials is in
[08-proof-of-concept](08-proof-of-concept.md) §5 and the canonical figure is in
[00-summary](00-summary.md) §9. **Shipping, spares and consumables stay a separate $3,000 line and are
not hardware**, so the under-$20,000 metric below is met with $3,300 of margin, exactly as
[08-proof-of-concept](08-proof-of-concept.md) §5 states. The cash actually committed before the bench
runs is $19,700, which is the number to plan procurement against.

### Exit criterion

**Autonomous phase-locking of 10 beams**, meaning all of the following, unassisted:

| Metric | Threshold |
|---|---|
| Alignment time from a cold, misaligned start | under 10 minutes |
| Fringe contrast at lock | > 0.8 |
| Residual phase error, **proof-of-concept acceptance bar** | < 1 rad RMS, target π/4 rad (λ/8) |
| Continuous hold without intervention | > 30 minutes |
| Recovery from an induced disturbance | yes, without retraining |
| Reproducibility | 4 attempts in 5, no retraining between attempts |
| Hardware spend | under $20,000 |

**The phase bar above is the proof-of-concept acceptance criterion and not the array's combining
requirement.** Two different bars apply at two different stages and they must never be quoted without
saying which is meant. The **full-system combining requirement is λ/20 RMS** (51.5 nm at 1.03 µm,
target λ/40), which is what delivers the 0.91 combining efficiency the full array is specified
against; the **proof-of-concept acceptance bar is < 1 rad RMS with a π/4 rad (λ/8) target**. λ/20 is
0.31 rad, so the π/4 target is 2.5× looser than the array requirement and the 1 rad bar is 3.2×
looser. Both are legitimate and [00-summary](00-summary.md) §10 carries both. A ten-beam bench holding π/4 rad has demonstrated the control principle; it has not met the
array specification and does not claim to.

### A correction to the concept note's schedule

The concept note placed its go/no-go at the end of month 4. With a four-to-six week procurement lead
time starting in month 1, hardware lands around month 2.5 and assembly runs into month 3, which
leaves roughly four weeks of bench time before the decision. That is not enough to distinguish a
controller that does not work from one that has not been debugged yet. **The gate moves to the end
of month 6.** Everything else in the note's phasing is preserved.

---

## 4. Stage 2 - the 20-beam prototype

**3-6 months following stage 1. Hardware ~$25k, two FTE, roughly $325k all-in.**

### Goal

Establish that the control approach scales, and measure *how* it scales. Doubling the element count
is not interesting on its own. What is interesting, and what licenses any claim about 100 or 500
beams, is whether the convergence time and the steady-state phase error grow linearly with element
count or faster than linearly. The optimisation landscape has one more dimension per beam and a
combinatorially larger set of local optima, and nobody can assert from ten beams which regime the
problem is in.

### The substantive hardware change

Stepper motors moving a kinematic mount are a coarse alignment actuator with a response time of
order one second. At ten beams on a thermally quiet bench that is adequate. At twenty beams held for
an hour it is not: the phase noise that has to be tracked is acoustic and thermal, and it lives at
frequencies a one-second actuator cannot reach.

**Stage 2 therefore adds a fast phase actuator per channel** - a piezoelectric fibre stretcher or an
electro-optic modulator - and demotes the steppers to coarse alignment. This splits the control
problem into a slow spatial loop and a fast phase loop, which is how coherent beam combining is done
at scale and is the architecture stage 3 would inherit. See [04-laser-array](04-laser-array.md) for
the combining architecture and [07-ai-control](07-ai-control.md) for how the two loops divide.

This is the single most important thing stage 2 buys, and it is worth being explicit that it is a
change of approach rather than a scale-up of stage 1.

### Deliverables

- 20 channels aligned and phase-locked, with per-channel fast phase actuation.
- Two-loop controller: learned spatial alignment at roughly 1 Hz, phase locking at kilohertz.
- Scaling study across N = 5, 10, 15, 20 with the same controller and the same tuning, reporting
  convergence time, steady-state phase error and combining efficiency as functions of N.
- Long-hold record: continuous autonomous coherence for over an hour, with the drift and disturbance
  history logged so the failure modes are characterised rather than merely survived.
- A written, evidenced position on whether the approach reaches 100 elements, and on what actuator
  and sensing architecture it would need there.

### Cost

| Item | Cost |
|---|---|
| Hardware: 10 further channels, fast phase actuators, drive electronics, larger breadboard | $25,000 |
| Personnel, 6 months at 2 FTE | $300,000 |
| **Total** | **~$325,000** |

### Exit criterion

- 20 beams held in autonomous coherence for **over one hour continuously**, fringe contrast > 0.8
  throughout, with no manual intervention.
- The scaling law measured and reported over N = 5 to 20, with an explicit extrapolation and an
  explicit statement of its uncertainty.

The second half of that criterion is the one that matters. A programme that reaches 20 beams and
cannot say how the control effort scales has not earned the right to describe 100 beams as an
engineering problem.

---

## 5. What stages 0 to 2 have delivered

By the end of stage 2 the programme has spent roughly **$495,000 over about a year** and holds:

- An open optics simulator and a labelled synthetic dataset for coherent-array phase retrieval.
- A learned controller that aligns and phase-locks twenty beams autonomously from a commodity camera.
- A measured scaling law for control effort against element count.
- Two or three publishable papers ([section 9](#9-what-gets-published-at-each-stage)).
- No radiation licence, no accelerator, no shielded space, and no regulatory exposure of any kind.

That body of work stands on its own. It is useful to anyone building a coherent array for any
purpose, it does not depend on the helium-3 mission being viable, and it is complete in the sense
that a reader of the resulting papers gets something they can use. **This is the point at which the
programme has definitively succeeded at the thing it was most likely to succeed at.**

---

## 6. The decision gate after stage 2

> **This is a gate, not a milestone. It should be taken as a genuine decision with a real
> possibility of stopping, and not passed through on momentum.**

### What is being decided

Continuing to stage 3 is not "the next stage of the laser programme". It is a decision to build,
license and operate a radiation facility containing a GeV-class electron beam, a photon field above
20 MeV and the neutron field that comes with it. That is a different kind of undertaking from a
bench in a laboratory, and it differs on every axis that determines whether a project succeeds:

| Axis | Stages 0-2 | Stage 3 |
|---|---|---|
| Capital | under $0.5M | $12-100M |
| Funding source | a research grant, a single sponsor | a facility-scale programme, usually multi-party |
| Siting | any laboratory bench | a shielded vault, or a host facility with one |
| Regulator | none | radiation licensing, 12-24 months lead before construction |
| Staff | 1-2 FTE, optical and software | 10-15 FTE, adding health physics, accelerator operations, cryogenics |
| Reversibility | walk away, keep the code | a licensed facility is a long-lived commitment |
| Time to a result | months | years |

### The three honest options at the gate

**Option A: stop, and publish.** The control work is complete at stage 2 and is publishable on its
own. This is not a failure outcome. It is the outcome in which the programme spent under half a
million dollars, produced a genuinely novel and useful result, and correctly declined to spend two
orders of magnitude more chasing a mission that [03-feasibility](03-feasibility.md) had already
ruled out.

**Option B: continue to stage 3 as a gamma-source programme**, with the helium-3 framing dropped
entirely and the deliverable stated as a compact high-flux quasi-monochromatic photon source. This
is a defensible decision, but it should be made on the gamma source's own merits and funded by
people who want a gamma source. See [10-economics](10-economics.md) for what that business case
looks like and [05-gamma-source](05-gamma-source.md) for the physics.

**Option C: hand the control technology on and redirect the production mission.** The alignment
controller is licensable or open-sourceable independently of any of this, and the helium-3
production question is better answered by the lithium-6 route in
[11-alternative-routes](11-alternative-routes.md), which reaches 12-60 g/yr in a reactor that is
being built for electricity anyway. A programme genuinely motivated by helium-3 supply should take
this option.

### Why the gate needs protecting

The failure mode here is specific and common: stage 2 succeeds, the team is enthusiastic, the
hardware ladder looks continuous, and the programme walks into a facility-scale commitment on the
strength of a bench result, having never separately justified the accelerator. The hardware ladder
*looks* continuous because the concept note costed the 100-beam stage as though the accelerator were
an optical component. It is not.

Two practical protections are worth building in from month 1:

1. **Cost stage 3 properly before stage 2 finishes**, not after. The range in
   [section 7](#7-stage-3---100-beam-system-with-a-wakefield-stage) is an estimate with wide error
   bars and it needs replacing with quotes and a siting decision.
2. **Approach candidate host facilities early.** Licensing lead times of 12-24 months mean that a
   gate decision taken without a host in view is a decision to wait two years before anything
   happens. Whether stage 3 is hosted or built standalone is worth roughly a factor of four on its
   capital cost and should be known at the gate, not discovered after it.

---

## 7. Stage 3 - 100-beam system with a wakefield stage

**24-36 months following the gate. $12-100M depending on siting.**

### Goal

Produce and characterise a quasi-monochromatic photon beam above the 20.578 MeV ⁴He(γ,n)³He
threshold, by using the array to drive a laser-wakefield electron accelerator and inverse-Compton
scattering off the resulting beam. Then use that beam to measure the ⁴He(γ,n)³He cross-section,
which is genuinely disputed at roughly a factor of two and is a legitimate contribution to nuclear
data. See [05-gamma-source](05-gamma-source.md) and [02-nuclear-physics](02-nuclear-physics.md).

**The goal is not helium-3 production, and stating a production target here would be dishonest.**

### This is where the programme stops being a laboratory project

At 100 elements the array reaches 1 kW average and 100 TW peak, which is squarely in
laser-wakefield territory and is the genuine strength of the architecture. It is also the point at
which the following all become true at once, and none of them appear in the concept note's costing:

- **A GeV-class electron accelerator is required.** Reaching 20.578 MeV photons by inverse Compton
  scattering off 1.03 µm light needs γ = 2,067, or **1.06 GeV**; reaching the 26-28 MeV
  cross-section peak needs **1.21 GeV**. The concept note's architecture diagram showed this as a
  single block labelled "Compton backscatter converter" costed at $500k, as though it were an
  optical element.
- **A radiation-controlled facility is required.** A GeV electron beam, a >20 MeV photon field and
  the photoneutrons that come with it need a shielded vault, interlocks, area monitoring, a beam
  dump and a radiation protection programme. This is the cost that dominates if the wakefield stage
  works, because a wakefield stage is cheap in hardware and does nothing at all to reduce the
  shielding.
- **A licence is required**, with a 12-24 month lead time before construction can start.
- **A cryogenic target is required.** [00-summary](00-summary.md) gives the reacting fraction as
  3.14 × 10⁻⁶ for 10 bar gas over 10 cm against 2.83 × 10⁻³ for liquid helium-4 over a metre. The
  gas target is not worth building; the liquid one brings a cryoplant and a helium inventory.

### The channel count this stage is staged on is not settled

**Every figure in this stage, and in [stage 4](#8-stage-4---500-beam-production-system) below, is
built on the originating reference case of 100-500 channels at 0.10 J each.**
[04-laser-array](04-laser-array.md) §2.4 rejects that case as a fibre architecture. 0.10 J in 100 fs
per element is roughly 100× more pulse energy than fibre chirped-pulse amplification delivers, the
B-integral and facet-damage limits land near a ~0.6 mJ ceiling independently of one another, and
lengthening the compressed pulse does not rescue it because the amplifier sees the stretched
nanosecond pulse. Section 04's recommendation is route (a): **of order 10⁴ channels at ~1 mJ**, which
holds the array's total average power at the same 1-5 kW.

Three consequences follow, and only the second is comfortable:

- **No rate, energy-balance or feasibility figure moves.** Those depend on total average power, which
  is identical in both cases, so nothing in [03-feasibility](03-feasibility.md) or in
  [section 8](#8-stage-4---500-beam-production-system) changes.
- **The control work gets more valuable, not less.** At 10⁴ independent phases the convergence time of
  a hand-tuned dithering scheme becomes the binding constraint, which is the case for a learned
  controller stated at its strongest.
- **The capital cost rises substantially.** Capital here is dominated by channel count, and a
  hundredfold increase in channels is not absorbed anywhere inside the ranges below, wide as they
  are. Section 04 §2.4 says so plainly and says this roadmap and [10-economics](10-economics.md) have
  to absorb it.

**The ladder below has deliberately not been restaged around route (a).** That is an open decision,
recorded as the programme's largest open design question in [00-summary](00-summary.md) §3, and taking
it silently inside a roadmap would hide a change of cost class behind a table. What follows is
therefore the reference case, labelled as such, and its array cost line should be read as a floor
rather than an estimate.

### Corrected cost estimate

**These are estimates with wide error bars, awaiting proper costing.** The accelerator and the
facility dominate, and the split between the two depends entirely on whether the wakefield stage
performs or a conventional linac is needed as a fallback.

| Item | Concept note | Corrected | Note |
|---|---|---|---|
| Laser array, 100 × 10 W, combining optics, phase control | $1.9M | $4-8M | the note implies ~$19k per channel all-in; femtosecond fibre CPA with per-channel phase control is more. **Reference case only** - at route (a)'s ~10⁴ channels this becomes the dominant line and rises by orders of magnitude |
| "Compton backscatter converter" | $0.5M | withdrawn | not an optical component |
| Laser-wakefield stage: gas target, plasma diagnostics, magnetic transport, spectrometer, beam dump | not costed | $3-6M | assumes the wakefield route works |
| Conventional GeV linac fallback | not costed | $25-60M | only if the wakefield stage cannot deliver the beam quality or rep rate |
| Shielded facility, interlocks, monitoring - new build | not costed | $10-30M | |
| Shielded facility - fit-out within an existing host | not costed | $2-5M | the single largest cost lever in the programme |
| Licensing and radiation protection programme | not costed | $2-6M | 12-24 months lead |
| Cryogenic liquid helium-4 target and handling | not costed | $1-3M | |
| Photon and neutron diagnostics, data acquisition | not costed | $1-3M | |
| Personnel | $675k (3 FTE × 18 mo) | $6-12M (10-15 FTE × 3 yr) | a facility needs health physics, accelerator operations and cryogenics as well as optics |
| **Total, hosted at an existing accelerator facility** | - | **$12-25M** | |
| **Total, standalone new build** | - | **$40-100M** | |
| *Concept note total* | *$3.075M* | - | *omitted the accelerator and the facility entirely* |

### Deliverables

- 100-channel array at 1 kW average, 100 TW peak, phase-locked under the stage 2 controller scaled up.
- Laser-wakefield electron stage delivering 1.06-1.21 GeV with characterised energy spread, charge,
  emittance and shot-to-shot pointing stability.
- Inverse Compton interaction region, with the photon spectrum and flux measured, not inferred.
- Liquid helium-4 target with cryogenic handling and product extraction.
- Neutron shielding and activation management, designed and commissioned.
- A measured ⁴He(γ,n)³He cross-section point, or better a scan across 20-30 MeV.

### Exit criterion

- Electron beam at 1.06-1.21 GeV, characterised, with a stated and reproducible rep rate.
- Photon beam above 20.578 MeV, with **measured** flux and spectrum.
- At least one ⁴He(γ,n)³He cross-section datum published, with an uncertainty budget.

**Explicitly not an exit criterion:** any helium-3 production figure. The concept note set
"photodisintegration signal detected" and "cost per He-3 under $100 per gram" as stage 3 success
metrics. The first is retained and is a good criterion; the second is unreachable by a margin of
several orders of magnitude and is withdrawn. See [10-economics](10-economics.md).

---

## 8. Stage 4 - 500-beam production system

**12-24 months per unit following stage 3. $60-200M, estimate with wide error bars.**

### Goal

Operate the 500-element array and its gamma beamline as a user facility: scheduled beam time for
photonuclear cross-section measurement, nuclear resonance fluorescence assay work, photonuclear
isotope production and photofission research.

### What it would actually produce

This is the question the concept note answered with "50-100 grams of He-3 per day", and it needs
answering honestly, because it is the whole reason the stage exists in the original plan.

At 500 elements the array reaches 5 kW average and 500 TW peak. That element count is the originating
reference case, and [04-laser-array](04-laser-array.md) §2.4 recommends of order 10⁴ channels at ~1 mJ
instead; the total average power is 5 kW either way, so every figure in the table below stands
whichever case is adopted. See [section 7](#the-channel-count-this-stage-is-staged-on-is-not-settled)
and [00-summary](00-summary.md) §3. From [00-summary](00-summary.md):

| Quantity | Value |
|---|---|
| Ceiling at 100% laser-to-gamma conversion **and** 100% absorption | 1.52 × 10¹⁵ reactions/s = 0.656 mg/day = **0.240 g/yr** |
| Realistic figure after conversion and target efficiencies | 2.83 × 10⁻⁷ of that: 4.29 × 10⁸ reactions/s = **6.78 × 10⁻⁸ g/yr, or 67.8 nanograms per year** |
| Needed for the originating 50 g/day target | 1.16 × 10²⁰ reactions/s, **381 MW of absorbed gamma power** |
| Needed for 100 g/day | **762 MW** |

The originating target is short by a factor of roughly 10⁵ **at the ceiling**, before any efficiency is
applied, and by **2.7 × 10¹¹** at the canonical realistic rate - eleven orders of magnitude, or nine if
the optimistic 10⁻² conversion figure is granted. A 500-element array is not a production system for
helium-3 and no amount of further replication makes it one: reaching 50 g/day requires 381 MW of gamma
power absorbed in the target, which is not a laser array, it is a power station.

**What it does produce is a world-class photon source.** At the canonical realistic rate the array
still drives **4.29 × 10⁸ reactions per second**, which is 1.35 × 10¹⁶ helium-3 atoms per year. That is
comfortably detectable by mass spectrometry, and the matching 4.29 × 10⁸ n/s is detectable by neutron
counting shot by shot. It is a fine signal for a cross-section measurement and a hopeless quantity of
product, and those two statements are not in tension: they are the same number seen from a physics
bench and from a commodity market.

### Deliverables

- 500-channel array, 5 kW average, 500 TW peak, with the thermal management that implies.
- Beamline and end stations for external users.
- Published cross-section dataset across the giant dipole resonance region for helium-4 and,
  plausibly, other light nuclei.
- Scheduled user programme with allocated beam time.

### Exit criterion

Sustained operation as a user facility: a stated availability figure, delivered beam time against an
allocation process, and user-generated publications. Not a production tonnage.

### Cost

$60-200M, dominated by the same accelerator and facility terms as stage 3 at five times the array
scale. **This range is a placeholder awaiting proper costing** and should not be quoted as though it
were an estimate. The concept note's figure of $1.5M per unit derives from the same omission as its
stage 3 figure and is withdrawn.

---

## 9. What gets published at each stage

Publication is a real output of this programme, not a byproduct. Stages 0 to 2 in particular are
worth doing partly *because* they are publishable, and the gate in
[section 6](#6-the-decision-gate-after-stage-2) is defensible partly because the work is already
written up by the time it is reached.

| Stage | Output | Venue character | The claim it supports |
|---|---|---|---|
| 0 | Coherent-array optics simulator and labelled synthetic phase-retrieval dataset, released as code and data | software or dataset note, preprint | Reproducibility, and a benchmark the field currently lacks |
| 1 | Autonomous alignment of a 10-beam array from commodity camera feedback | applied optics journal | A learned controller can phase-lock a small array with no wavefront sensor |
| 2 | How control effort scales with element count in coherently combined arrays | optics journal | The extrapolation to 100+ elements, with a measured basis |
| 2 | Corrective note: why multi-photon photodisintegration of helium-4 does not work | short comment or preprint | Records the reasoning in [03-feasibility](03-feasibility.md) so the next person does not repeat it |
| 3 | Characterisation of a fibre-array-driven laser-wakefield inverse Compton photon source | accelerator physics journal | The source itself, as an instrument |
| 3 | Measurement of the ⁴He(γ,n)³He cross-section in the 20-30 MeV region | nuclear physics journal | The genuinely disputed nuclear datum, currently uncertain by roughly a factor of two |
| 4 | Facility description and user programme, plus user-generated results | facility or instrumentation journal | The source as a shared research capability |

**One proposed paper is withdrawn.** The concept note listed *"Proof-of-Concept Multi-Photon
Photodisintegration of Helium-4 for Fusion Fuel"* as a target. Helium-4 has no bound excited state
below breakup and therefore no ladder of intermediate states to climb, so the multi-photon mechanism
is not merely inefficient, it is negligible by tens of orders of magnitude
([03-feasibility](03-feasibility.md)). The corrective note in the table above replaces it and is
worth writing precisely because the reasoning is not obvious: multiphoton absorption *does* work in
atoms, for a reason that does not carry over.

---

## 10. Immediate next steps, month 1

These are preserved from the concept note and updated for the corrected mission. None of them costs
anything but time and the procurement item, and all five can start on day one.

### 10.1 Finalise the laser source

Choose between fibre lasers and diodes for the proof-of-concept bench. The trade is stability
against cost:

| Option | Unit cost | Trade |
|---|---|---|
| Fibre | ~$1,000 | More stable output and better beam quality, so less of the observed phase noise is the source's own |
| Diode | ~$300 | Cheaper, so more channels for the same money, but less stable |

The decision is not purely a budget question. A noisier source makes the control problem *harder*,
which arguably makes a successful demonstration stronger, but it also confounds the diagnosis when
the controller fails: source noise and control failure look the same on a camera. **The
recommendation is fibre for the proof of concept**, on the grounds that stage 1 is a test of the
controller and every confound removed from it is worth $700. Cost-optimised diodes belong at stage 2
where the failure modes are already understood. See [04-laser-array](04-laser-array.md).

### 10.2 Simulate first

Build the Fresnel diffraction simulator, generate 50,000 synthetic training patterns, train the
baseline CNN. Cost: $0, open-source tooling only. Timeline: 2-3 weeks. This is stage 0 and it runs
during the procurement lead time rather than after it.

### 10.3 Procurement

| Item | Quantity |
|---|---|
| Laser sources | 10 |
| Motorised kinematic mounts, 3 degrees of freedom | 10 |
| Stepper motors and drivers | 30 |
| Optical elements: lenses, filters, combiners | 1 set |
| Mirrorless camera and infrared pass filter | 1 |
| Control computer and microcontroller | 1 each |
| Optical breadboard and table | 1 |
| Cables, brackets, power supplies | 1 set |
| Piezo actuators, 10 µm stack, one per channel | 10 |
| Piezo drive electronics: 10-channel HV amplifier and DAC board | 1 |

Total **$16,700**, with **$19,700** the realistic figure once shipping, spares and one replacement
laser are allowed for. The under-$20,000 metric in
[section 3](#3-stage-1---the-proof-of-concept-bench) is a hardware metric, so it is the $16,700 that
is measured against it, with $3,300 of margin. The concept note's "~$12,000" omitted the fine
phase actuators, which are the last two rows above and are not optional; see
[08-proof-of-concept](08-proof-of-concept.md) §5. **Lead time 4-6 weeks**, which is the constraint
that sets the whole month 1-2 schedule.

### 10.4 Form the team

| Role | Responsibility |
|---|---|
| Optical engineer | Bench layout, alignment, combining optics, beam diagnostics |
| Software engineer | Simulator, training, controller, real-time loop |
| Electronics technician | Motor drivers, microcontroller firmware, later the fast phase actuators |
| Project lead | Integration, success criteria, and ownership of the stage 2 gate decision |

At stage 1 this is one FTE spread across four skill sets in practice, not four people. The staffing
in the cost tables reflects that. Stage 2 doubles it; stage 3 changes it entirely, adding health
physics, accelerator operations and cryogenics.

### 10.5 Establish the success criteria document

Write down, before any hardware arrives, the numeric thresholds in
[section 3](#3-stage-1---the-proof-of-concept-bench) and who decides whether they have been met.
Weekly check-ins, a monthly written progress report, and a **go/no-go at the end of month 6**
(moved from the concept note's month 4, for the reason in
[section 3](#3-stage-1---the-proof-of-concept-bench)). If 10-beam autonomous alignment is achieved,
proceed to stage 2; if not, diagnose before iterating, because "try again with more training data"
is not a diagnosis.

### 10.6 Start the stage 3 siting question now

This is an addition to the concept note's list, and it belongs in month 1 rather than at the gate.
Whether stage 3 is hosted at an existing accelerator facility or built standalone is worth roughly a
factor of four on its capital cost, and a licence takes 12-24 months to obtain. Approaching
candidate host facilities is free, costs a few conversations, and is the difference between a gate
decision that can be acted on and one that starts a two-year wait. See
[section 6](#6-the-decision-gate-after-stage-2).

---

## 11. Schedule summary

| Month | Activity |
|---|---|
| 1-2 | Stage 0: simulator, dataset, trained CNN, RL environment, BOM ordered |
| 2-3 | Hardware arrives; bench assembly, collimation, motorised mounts, camera, control stack |
| 3-4 | Manual alignment baseline; computer vision pipeline |
| 4-5 | Controller deployed on live feed; closed-loop alignment |
| 5-6 | Autonomous operation, disturbance rejection, reproducibility runs |
| 6 | **Stage 1 go/no-go** |
| 7-12 | Stage 2: 20 channels, fast phase actuators, two-loop control, scaling study |
| 12 | **Decision gate** ([section 6](#6-the-decision-gate-after-stage-2)) |
| 13-24 | If continuing: siting, licensing, detailed design, procurement of long-lead items |
| 25-48 | Stage 3: array build-out, wakefield stage, inverse Compton, cryogenic target, commissioning |
| 49+ | Stage 4, per unit |

The 13-24 month band is the one most often left out of roadmaps of this kind. It contains no
hardware and no experiment, and it is not optional.

---

## Open questions

- **Piezo fibre stretchers or electro-optic modulators for the stage 2 fast phase loop?** The choice
  determines the stage 3 combining architecture and the per-channel cost at 100 elements. Not
  resolvable until the stage 1 phase noise spectrum is measured.
- **Can the wakefield stage deliver the beam quality inverse Compton needs at 100 Hz**, or does the
  practical rep rate collapse towards single-shot? Rep rate is what makes the source useful to
  external users, and it is the single largest unknown in stage 3.
- **Hosted or standalone for stage 3?** Worth roughly a factor of four on capital. Answerable only
  by approaching candidate hosts, which is why [section 10.6](#106-start-the-stage-3-siting-question-now)
  puts it in month 1.
- **Which cost branch is the gate decision taken against?** The costing half of this is now settled:
  [section 7](#7-stage-3---100-beam-system-with-a-wakefield-stage) carries the wakefield stage
  ($3-6M) and the conventional GeV linac fallback ($25-60M) as separate lines, which is what
  [05-gamma-source](05-gamma-source.md) asked for. What is not settled is which of them the gate
  decision is taken on, and the fallback moves stage 3 into the standalone cost class on its own.
  **The residue of 05's request is the third option it also named: buying beam time at an existing
  facility rather than building any accelerator.** That is costed nowhere in this set, and on 05's own
  recommendation - "use a linac to get the physics, build the array to do the research" - it is the
  branch most likely to be taken first.
- **Answered: 0.10 J per laser per pulse is not achievable from fibre.**
  [04-laser-array](04-laser-array.md) §2.4 works the B-integral and the facet-damage limit
  independently and both land near a ~0.6 mJ ceiling, roughly 100× below the reference case, and
  lengthening the compressed pulse does not rescue it. The recommendation is route (a), of order 10⁴
  channels at ~1 mJ, at the same total average power. The stage 2 to stage 3 hardware continuity is
  **not** broken by this - the bench is 5-10 fibre channels either way - and the case for stages 0-2
  as control research is strengthened, because 10⁴ independent phases is the regime in which a
  learned controller stops being a convenience. **The successor question is live and larger: should
  the whole ladder be restaged around route (a)?** That is a cost-class decision rather than a
  technical one, since capital is dominated by channel count, and it is recorded as the programme's
  largest open design decision in [00-summary](00-summary.md) §3.
- **What is the minimum publishable control result?** The gate recommendation in
  [section 6](#6-the-decision-gate-after-stage-2) assumes stage 2 stands alone as a publication. That
  assumption is worth testing against a real venue early, because it is load-bearing for the
  "stop and publish" option.
- **Does the lithium-6 route deserve a roadmap of its own?** It is the route that actually reaches
  useful quantities ([11-alternative-routes](11-alternative-routes.md)), and it currently has an
  assessment but no staged plan.

---

*Previous: [08 Proof of Concept](08-proof-of-concept.md) · Next: [10 Economics](10-economics.md) · [Summary](00-summary.md) · [References](../references.md)*
