# He-3 Programme - 03 Feasibility Assessment

This section decides the programme. It asks two independent questions and answers both quantitatively:
does the proposed multi-photon absorption mechanism work, and if a working single-photon mechanism were
substituted for it, would the energy budget reach the originating production target of 50-100 g/day. The
two questions are deliberately separated, because the second is a bound that survives regardless of how
the first is answered: no mechanism, however clever, can produce more reactions than the delivered energy
divided by 20.578 MeV. Every figure below is traceable to [00-summary](00-summary.md) and every derivation
is written out so a reader can check it with a calculator.

---

## The verdict, up front

The laser array and its alignment control problem are sound. Distributing intensity across many modest
phase-locked sources rather than building one enormous laser is the correct architectural instinct, it has
a real lineage in the ICAN and XCAN programmes, and autonomous alignment at 100-500 elements is a genuine
unsolved control problem worth solving.

The multi-photon absorption mechanism does not work. Helium-4 has no bound excited state to absorb into.
Its first excited state, the 0⁺₂ resonance, sits at roughly 20.21 MeV of excitation energy, essentially at
the breakup threshold, and it is the largest first-excitation gap of any nucleus. A 2.35 MeV photon cannot
leave a helium-4 nucleus in any state at all, real or long-lived, so there is no ladder to climb. This is a
physics-level rejection rather than an engineering difficulty, and no amount of intensity fixes it.

The production target is unreachable by **2.7 × 10¹¹** at the canonical realistic rate, even granting
a working single-photon mechanism, and by 2.7 × 10⁹ on a conversion efficiency two orders of
magnitude better than anything [05-gamma-source](05-gamma-source.md) believes is reachable. The
reasons are thermodynamic rather than technological. 50 g/day of helium-3 is 381 MW of gamma-ray
power absorbed in the reaction channel. The array delivers 1-5 kW of infrared. Efficiency
improvements are bounded and, when driven to their physical limits, still leave a factor of
7.6 × 10⁴ that only raw average power can pay.

**The programme is worth continuing with a different mission.** The recommendation in Part 5 is to proceed
with the alignment work unchanged, proceed with the gamma-source design, and hand the production mission to
the lithium-6 route in [11-alternative-routes](11-alternative-routes.md). The operator closed that
production mission outright on 2026-09-11, so the lithium-6 analysis stands as a finding and this
programme carries no production requirement at all.

---

## Part 1 - The multi-photon absorption mechanism

The originating concept note proposes absorbing roughly ten 2.35 MeV photons into a single helium-4
nucleus, on the grounds that coherent combination of N beams multiplies focal intensity by N² and that
this "makes multi-photon absorption probable". The intensity claim is arithmetically true at fixed
aperture. The conclusion drawn from it is not.

### Why multiphoton absorption works in atoms

Atomic multiphoton absorption is routine, well measured, and understood, and it is worth being precise
about *why*, because every one of the enabling conditions fails in the nuclear case.

| Enabling condition | Atomic case | Consequence |
|---|---|---|
| Dense ladder of intermediate states | bound Rydberg series plus a continuum, spaced by fractions of an eV near threshold | there is always a state to pass through |
| Intermediate states nearly on-shell | typical detuning 1-10 eV against a 1-10 eV photon | energy denominators are the same size as the numerators |
| Strong dipole coupling at reachable intensity | at 10¹⁴ W/cm² the field is 2.7 × 10¹⁰ V/m and e·E·a₀ ≈ 1.5 eV; the ponderomotive energy is ≈ 9.9 eV, comparable to the ionisation potential | the perturbative expansion parameter is of order unity |
| Modest order required | 3-20 photons of 1-2 eV to strip an outer electron | the order is small and the per-order cost is not punishing |

The decisive number is the last column of row three. The ratio of the interaction matrix element to the
energy denominator, which is the expansion parameter of the perturbative series, is of order unity in the
atomic case. That is exactly why strong-field atomic physics stopped being perturbative at all and moved to
tunnelling and rescattering descriptions: the series was not converging because there was nothing small in
it. Multiphoton ionisation is observable precisely because the process is *not* deeply suppressed.

### Why the nuclear case is categorically different

Helium-4 is the worst possible nucleus to attempt this on, and not by a small margin.

- **It has no bound excited state.** Not a sparse ladder, not a weak one: none. The first excited state is
  the 0⁺₂ resonance at approximately 20.21 MeV of excitation, which sits *above* the 19.814 MeV proton
  separation energy and therefore is not a bound state at all but a broad resonance in the p + t continuum.
  Helium-4 has the largest first-excitation gap of any nucleus in the chart.
- **A 2.35 MeV photon therefore leaves the nucleus in no state whatsoever.** In the atomic analogy the
  first rung of the ladder is a real state 1 eV away. Here the first rung would have to be a virtual state
  roughly 20 MeV off-shell, and the same is true of the second, third and every subsequent rung until the
  final photon completes the transition. There is nothing intermediate to be nearly resonant with.
- **The reason is the binding.** Helium-4 is the most tightly bound light nucleus, at 28.3 MeV total and
  7.07 MeV per nucleon. It is also self-conjugate (N = Z) with a good T = 0 ground state, and the E1
  operator for a self-conjugate nucleus is purely isovector, so dipole strength requires an isospin change
  and the whole giant dipole strength sits high in excitation energy, spread across the continuum rather
  than concentrated in a strong narrow resonance. That is the same physics that makes the peak (γ,n)
  cross-section approximately 1.3 mb rather than the 8 mb assumed in the concept note. See
  [02-nuclear-physics](02-nuclear-physics.md).

Reaching 20.578 MeV from 2.35 MeV photons requires nine photons (nine gives 21.15 MeV, which clears
threshold; the note's ten gives 23.5 MeV). That is a ninth- or tenth-order perturbative amplitude with a
roughly 20 MeV energy denominator at every intermediate step.

### How large the suppression actually is

The expansion parameter per order is approximately the interaction matrix element divided by the energy
denominator, ε ≈ e·E·R / ΔE, with R the nuclear dipole length scale (the helium-4 rms charge radius is
1.68 fm) and ΔE ≈ 20 MeV. Evaluated at the array's own focal field, which is the most generous field the
system can produce:

```
  I    = 1.3 × 10²² W/cm² = 1.3 × 10²⁶ W/m²      (100 lasers, 1 µm spot)
  E    = sqrt(2I / cε₀) = 3.13 × 10¹⁴ V/m
  e·E·R = 3.13 × 10¹⁴ × 1.68 × 10⁻¹⁵ = 0.53 eV
  ε    = 0.53 / 2.06 × 10⁷ = 2.6 × 10⁻⁸
```

Compare that with the atomic case, where the same ratio is of order 1. The per-order cost is not a factor
of a hundred and not a factor of a million; it is eight orders of magnitude, *per photon*, and there are
nine or ten of them. The rate goes as |amplitude|², so the scaling is ε^(2n):

```
  ε^18 ≈ (2.6 × 10⁻⁸)^18 ≈ 10⁻¹³⁷
```

An effective cross-section of order 10⁻¹³⁷ times the single-photon value of 1.3 mb is not a small number,
it is zero for every operational purpose. This is an order-of-magnitude scaling argument and not a
calculated cross-section, and it does not need to be right: **the conclusion is unchanged if the estimate
is wrong by fifty orders of magnitude in the optimistic direction.** That insensitivity is the point. An
engineering difficulty is something you can attack with money and cleverness. A shortfall of 10¹³⁷ is a
statement about the structure of the nucleus.

Two further problems compound it, either of which would be disqualifying on its own.

- **The 0.53 eV coupling above is generous to the point of fiction, because it uses the 1.03 µm laser
  field rather than the 2.35 MeV photons the mechanism actually requires.** 2.35 MeV photons cannot be
  focused. The concept note's architecture includes a "Hard X-ray Focusing Optics (multilayer mirrors,
  grazing incidence)" stage, but the refractive index decrement scales as λ², so the grazing critical angle
  at 2.35 MeV falls to the order of tens of microradians, and Compton scattering dominates the interaction
  with any mirror surface long before that. There is no optical element that concentrates MeV photons into
  a focal spot, which means the field strength available to drive a multiphoton process at 2.35 MeV is far
  below the figure used above.
- **Driving the transition with the infrared field directly is worse, not better.** A 1.03 µm photon
  carries 1.204 eV, so 20.578 MeV is 1.71 × 10⁷ photons. The required order is not ten but seventeen
  million.

### The strongest counter-argument, taken seriously

There is a real physical effect in this neighbourhood and it deserves a straight answer rather than a
dismissal. Nonlinear quantum electrodynamics genuinely does become non-perturbative when the normalised
vector potential a₀ exceeds unity, and this array reaches that regime comfortably:

| Configuration | Focal intensity | a₀ |
|---|---|---|
| 100 lasers, 1 µm spot | 1.3 × 10²² W/cm² | ≈ 100 |
| 500 lasers, 1 µm spot | 6.4 × 10²² W/cm² | ≈ 221 |
| 100 lasers, 3 µm spot | 1.4 × 10²¹ W/cm² | ≈ 33 |

At a₀ ≫ 1 an electron in the field absorbs many laser photons per emission event, and the observable
consequences are real and measured: nonlinear Compton scattering, multiphoton Breit-Wheeler pair
production, radiation reaction. These are exactly the processes that make 100 TW to 500 TW peak power
scientifically interesting.

**They do not help here, for a specific reason.** The a₀ parameter is
a₀ = eE/(m_e ω c) and it is defined for an *electron*. Its size reflects the electron quiver momentum in
the field, and every one of these processes acts on free or quasi-free electrons in the focal volume. None
of them constitutes a nuclear excitation ladder, and none of them deposits its energy into a helium-4
nucleus. The energy goes into electron kinetic energy, into scattered photons, and into electron-positron
pairs. The nucleus experiences the field almost entirely as a centre-of-mass force, which does not excite
internal degrees of freedom at all; what remains after the centre-of-mass motion is removed is the
isovector dipole coupling estimated above, and that is the 0.53 eV number.

There is one structural loophole worth naming honestly, and it is discussed further under Open questions.
The 0⁺₂ state is a 0⁺ state and the ground state is 0⁺, so a single-photon E1 transition between them is
strictly forbidden while a *two*-photon transition is allowed. That is a genuine second-order channel. It
does not rescue the concept: it needs two photons of roughly 10.1 MeV rather than ten of 2.35 MeV, which
requires exactly the same GeV-class accelerator as the single-photon route, its second-order rate is still
minute, and the 0⁺₂ resonance sits above the proton separation energy so it decays overwhelmingly to
proton plus triton, producing tritium rather than helium-3.

### Conclusion of Part 1

The multi-photon route is rejected on physics, not on engineering. It is not that the intensity is
insufficient, or the coherence imperfect, or the focusing immature. There is no ladder of intermediate
states to climb because helium-4 does not have one, and the perturbative suppression that follows is not
addressable by any amount of laser power. The array should be pointed at a single-photon process above
20.578 MeV instead, which is what [05-gamma-source](05-gamma-source.md) designs.

---

## Part 2 - The energy balance, even granting single-photon operation

This part sets Part 1 aside entirely and assumes a perfectly working single-photon mechanism. It is a
conservation-of-energy bound: every reaction consumes at least 20.578 MeV, so the reaction rate cannot
exceed the delivered power divided by that energy no matter what mechanism delivers it. The bound holds
even if Part 1 turns out to be wrong.

### Step 1: energy per reaction

```
  E_reaction = 20.578 MeV × 1.602177 × 10⁻¹³ J/MeV = 3.297 × 10⁻¹² J
```

### Step 2: the absolute ceiling

Assume every watt of laser light becomes a threshold-energy gamma, and every gamma causes a reaction.
Neither is approachable; this is a floor on the impossibility rather than an estimate of output. Reaction
rate is simply power divided by energy per reaction, and the mass follows from Avogadro's number and the
3.016 g/mol molar mass of helium-3:

```
  R      = P / E_reaction
  m/day  = R × 86,400 × 3.016 / 6.022 × 10²³
```

| Gamma power at threshold | Reactions/s | He-3 per day | He-3 per year |
|---|---|---|---|
| 1 kW | 3.03 × 10¹⁴ | 0.131 mg | 0.048 g |
| 5 kW | 1.52 × 10¹⁵ | 0.656 mg | 0.240 g |

**A 5 kW array, operating at perfect efficiency in every stage, produces about two thirds of a milligram
of helium-3 per day.** The originating concept note's production target is 50-100 g/day.

### Step 3: what the target actually costs

Running the same arithmetic backwards from the target:

| Target | Reactions/s needed | Gamma power absorbed in the reaction channel |
|---|---|---|
| 50 g/day | 1.16 × 10²⁰ | **381 MW** |
| 100 g/day | 2.31 × 10²⁰ | **762 MW** |

It is worth pausing on what 381 MW of absorbed gamma power means. It is not a beam. It is nearly four
times the thermal output of the 100 MW(th) reactor designed in the sibling
[VHTR set](../../vhtr/design/00-summary.md), delivered as 20 MeV photons and deposited in a helium target.
The proposal is to obtain it from a laser of 1-5 kW average power.

### Step 4: the gap at the thermodynamic floor

```
  1.1555 × 10²⁰ reactions/s needed  ÷  1.5165 × 10¹⁵ reactions/s available at 5 kW  =  7.62 × 10⁴
```

**The array is short of its own stated target by a factor of roughly 10⁵ before any efficiency is applied
at all.** Everything that follows makes this worse.

### Step 5: the real efficiency chain

Two multiplicative losses stand between laser light and reactions, and both are severe.

**Laser to gamma conversion by inverse Compton scattering: of order 10⁻⁴ or worse.** The mechanism is
elastic scattering of laser photons off relativistic electrons, and the reason the efficiency is so low is
simply that most laser photons never scatter at all. The Thomson cross-section is 6.65 × 10⁻²⁵ cm², and an
electron bunch presents an areal density many orders of magnitude short of what would be needed for a
laser photon to have an appreciable chance of interacting on a single pass. Demonstrated inverse Compton
sources convert a very small fraction of drive-laser energy into gamma-ray energy; 10⁻⁴ is an optimistic
round number, not a measured system efficiency, and it also silently assumes the electron beam itself is
free, which it is not. [05-gamma-source](05-gamma-source.md) §6.2 has since worked an illustrative
calculation for this specific machine and landed near **10⁻⁵**, an order of magnitude worse, so 10⁻⁴
should be read throughout as the best defensible case rather than an expectation. It is retained as the
canonical figure because [00-summary](00-summary.md) §4.4 makes it the canonical optimistic bound, and
because using the pessimistic figure would only deepen a verdict that is already decided.

**Fraction of gammas that react in the target: 3.14 × 10⁻⁶ to 2.83 × 10⁻³.** Computed as n·σ·L at
σ = 1.3 mb:

| Configuration | Number density n | Path L | n·σ·L |
|---|---|---|---|
| He-4 gas, 10 bar, 300 K | 2.41 × 10²⁰ /cm³ | 10 cm | 3.14 × 10⁻⁶ |
| Liquid He-4 (He-II, ~2 K) | 2.18 × 10²² /cm³ | 100 cm | 2.83 × 10⁻³ |

Liquid helium over a metre buys three orders of magnitude over the gas cell in the concept note's
architecture, and is the only target configuration worth designing around. See
[06-target-and-capture](06-target-and-capture.md).

### Step 6: the chain, end to end

| Case | Laser avg power | Laser to gamma | Gammas reacting | Reactions/s | He-3 output | Shortfall vs 50 g/day |
|---|---|---|---|---|---|---|
| Thermodynamic floor | 5 kW | 1 (impossible) | 1 (impossible) | 1.52 × 10¹⁵ | 0.656 mg/day | 7.6 × 10⁴ |
| Upper bound on the argument | 5 kW | 10⁻² | 2.83 × 10⁻³ (liquid) | 4.3 × 10¹⁰ | 6.8 µg/yr | 2.7 × 10⁹ |
| **Nominal (canonical)** | **5 kW** | **10⁻⁴** | **2.83 × 10⁻³ (liquid)** | **4.3 × 10⁸** | **68 ng/yr** | **2.7 × 10¹¹** |
| Concept-note architecture | 1 kW | 10⁻⁴ | 3.14 × 10⁻⁶ (10 bar gas) | 9.5 × 10⁴ | 15 pg/yr | 1.2 × 10¹⁵ |

**The nominal row is the canonical realistic case for the whole document set**: 4.29 × 10⁸ reactions/s
and 6.78 × 10⁻⁸ g/yr, from [00-summary](00-summary.md) §4.2. Stated as a fraction of the 5 kW ceiling
in Step 2, that is **2.83 × 10⁻⁷ of the ceiling**, and it is worth writing down explicitly because an
earlier draft of this set quoted it as ~10⁻⁹. That draft took the shortfall against the 50-100 g/day
*target* and applied it to the *ceiling*, which is the wrong denominator, and it is wrong by a factor
of about 280. Nothing in the verdict moves, because the verdict is measured against the target and not
against the ceiling: the shortfall is 2.7 × 10¹¹ either way.

**The 10⁻² row is an upper bound on the argument, not a physical estimate, and it is labelled that way
deliberately.** [05-gamma-source](05-gamma-source.md) §6.3 puts the ceiling on laser-to-gamma
conversion at 10⁻⁴ to 10⁻³ with every available improvement applied simultaneously - more charge, a
tighter focus, and a recirculating scattering cavity - so 10⁻² sits an order of magnitude above what
that section believes is reachable at all. It is retained because the argument is stronger for granting
it: even at a conversion efficiency nobody can build, the shortfall is 2.7 × 10⁹. See
[00-summary](00-summary.md) §4.4, which records which figure is canonical and why.

**The honest range for the shortfall is therefore 10⁹ to 10¹¹, and 10¹¹ is the realistic end of it.**
The concept note's own stated architecture, a gas target fed from a 1 kW array, is a further four
orders worse again.

Expressed as annual output rather than as a ratio, the nominal case produces about **68 nanograms of
helium-3 per year**. A year of continuous operation of the facility yields an amount of helium-3
that would be difficult to weigh.

### Step 7: scaling the array does not close this

This is the point that most needs stating plainly, because the concept note's roadmap treats scale as the
answer to everything.

Going from 100 lasers to 500 lasers multiplies available power by 5. Coherent combination multiplies peak
*intensity* by N² relative to a single beam filling the same aperture, but it multiplies available *power*
only by N, and it is power that sets the reaction rate in Part 2. Only the second constrains the energy
budget.

**Closing a factor of 10⁹ requires a factor of 10⁹.** At 10 W per laser that is 10⁸ lasers, which is
1 GW of average optical power, before considering that a laser array is perhaps 20-30% wall-plug efficient
and would therefore need several gigawatts of electrical supply. The array does not scale into the target;
it scales into a power station.

Turning the requirement round gives the cleanest statement of it:

| Assumption | Laser average power required for 50 g/day |
|---|---|
| Perfect conversion, perfect absorption | 381 MW |
| Perfect absorption, 10⁻⁴ conversion | 3.81 TW |
| Liquid target (2.83 × 10⁻³), 10⁻⁴ conversion | 1.35 PW |

Total world electricity generation averages roughly 3 TW. The middle row of that table asks for a laser
whose average optical output matches the entire electrical output of civilisation, and it is the row that
assumes a perfectly absorbing target.

---

## Part 3 - What would have to be true for it to work

The right way to test a negative result is to ask what would have to change, by how much, and whether each
change is forbidden or merely absurd. There are exactly four levers.

| Lever | Factor needed | Physical bound | Verdict |
|---|---|---|---|
| (γ,n) cross-section | ≈ 10³ (1.3 mb to 1.3 b) | nuclear data, not a design variable; no nucleus has a photoabsorption peak approaching 1 b, and heavy-nucleus giant dipole peaks top out in the hundreds of mb | **Forbidden.** Unavailable at any price |
| Target absorbed fraction | ≈ 10³ beyond liquid | the absorbed fraction cannot exceed 1, so at most ×353 from the liquid-metre case and ×3.2 × 10⁵ from the gas case | **Bounded.** Caps out roughly 3× short of the ask |
| Laser to gamma conversion | ≈ 10⁴ | efficiency cannot exceed 1, so at most ×10⁴ from an assumed 10⁻⁴ | **Bounded.** Saturable in principle, unreachable in practice |
| Laser average power | ≈ 10⁶ | not bounded by physics | **Absurd but not forbidden.** 1-5 GW average optical |

Three of the four are physically bounded and one is merely ridiculous, which is what makes the combination
decisive.

**Cross-section.** 1.3 mb is a measurement, not a parameter. It is disputed at roughly a factor of two
(see [02-nuclear-physics](02-nuclear-physics.md) and Open questions below), which is exactly why measuring
it properly is on the list of things this programme could usefully do. A factor of two, or even a factor of
ten, does not touch a shortfall of 10⁹ to 10¹¹.

**Target density.** Solid helium-4 exists above roughly 25 bar at low temperature, but it is only about
1.3 times denser than the liquid at the melting line, and even at GPa pressures it reaches a few times
liquid density rather than a thousand times. Lengthening the target instead runs into the same ceiling from
the other direction: n·σ·L at liquid density over a kilometre would exceed unity, which simply means the
beam is fully attenuated. **The absorbed fraction is bounded above by 1 by definition, so the entire target
lever is worth at most ×353 over the liquid-metre baseline and never more.**

**Conversion efficiency.** Bounded above by 1 for the same trivial reason, and bounded well below 1 by
scattering kinematics: the Thomson cross-section and achievable electron areal densities set the
interaction probability per laser photon, and a laser photon that does not scatter carries its energy
straight through the interaction point.

**The closure.** Drive both bounded efficiency levers to their absolute physical maxima simultaneously. The
target lever gives ×353 and the conversion lever gives ×10⁴, a combined ×3.5 × 10⁶ applied to the nominal
case of 4.3 × 10⁸ reactions/s. That lands at 1.5 × 10¹⁵ reactions/s, which is precisely the thermodynamic
ceiling from Part 2, Step 2. **With every efficiency in the system perfect, the remaining gap is
7.6 × 10⁴, and it can only be paid in average power: 381 MW of it.**

No combination of the four levers reaches the target. Three of them, taken together and driven to
perfection, recover only the efficiency chain and return the problem to where Part 2 started it.

---

## Part 4 - What survives

The critical half of this assessment is finished. This half is the more useful one, and it is not
consolation: the hardware described in the concept note is genuinely well matched to a mission, just not
to the one it was given.

### The strategic insight is correct and independently arrived at

The concept note's founding move is to distribute the intensity challenge across hundreds of modest
phase-locked lasers rather than pursuing a single ultra-intense system. That is right, it is right for the
reasons the note gives (cost, redundancy, manufacturability of the individual element), and it is the
organising principle of the ICAN and XCAN programmes, which pursued coherently combined fibre laser arrays
precisely because a fibre amplifier is efficient, high-repetition-rate and industrially available while a
single monolithic amplifier of the same total power is none of those things. The note reaches an
established architectural conclusion from first principles, which is a point in its favour.

The specification has a real problem in the per-laser pulse energy: 0.10 J in 100 fs from a device
described as a 10 W fibre laser is roughly a hundred times more than fibre chirped-pulse amplification
delivers before nonlinearity and damage intervene. That is a design problem with candidate solutions, not
a physics rejection. **[04-laser-array](04-laser-array.md) §2.4 has since answered it**: the B-integral
and facet-damage limits both land near a ~0.6 mJ per-channel ceiling, so the recommendation is to hold
total average power at 1-5 kW and let the channel count float to of order 10⁴ channels at ~1 mJ each.
Nothing in this assessment moves, because the assessment depends on total average power and that is
unchanged; what moves is capital cost, which is dominated by channel count. See
[00-summary](00-summary.md) §3, which carries both cases and records the choice as open.

### The alignment problem is real, unsolved at scale, and a good target for learned control

Coherently combining a large number of fibre amplifiers requires holding relative phase to a small fraction
of a wavelength against thermal drift, mechanical vibration and amplifier-induced phase noise, continuously
and without human intervention. Demonstrated arrays run to tens of elements and in the best cases into the
low hundreds; 100-500 elements with autonomous recovery from disturbance is beyond routine practice.

The problem is unusually well suited to a learned controller, for structural reasons rather than
fashionable ones:

- The map from a far-field intensity image to per-element phase, which is the proof-of-concept
  formulation rather than the full-scale one ([07-ai-control](07-ai-control.md) §9 replaces the camera
  with pairwise sensing above roughly 30 to 100 channels), is a high-dimensional, nonlinear inverse
  problem with no closed-form solution, which is the class of problem where learned inverses do well.
- The forward model is cheap and differentiable, so synthetic training data is effectively free and
  model-based approaches are available. This is what makes the $16,700 bench in
  [08-proof-of-concept](08-proof-of-concept.md) a credible way to attack it.
- The residual after the physics model is exactly the part that is hard to model analytically: thermal
  transients, mount hysteresis, vibration coupling. That residual is what a learned controller is for.
- Success is measurable without ambiguity. Fringe contrast, encircled energy and phase error RMS are
  directly observable, so the claim "the controller works" is falsifiable on the bench.

**This work is valuable regardless of what the array is eventually pointed at**, which is the strongest
argument for doing it first. See [07-ai-control](07-ai-control.md).

### The peak power is in laser-wakefield territory, and that is the pivot

The array's peak power is 100 TW at 100 lasers and 500 TW at 500. That is squarely in the regime where
laser-wakefield acceleration produces GeV-class electron beams in centimetres of plasma rather than the
tens of metres a conventional radiofrequency linac requires.

This matters because [00-summary](00-summary.md) §7 identifies the missing subsystem: reaching
20.578 MeV photons by inverse Compton scattering off a 1.03 µm laser needs a Lorentz factor of 2,067,
which is a 1.06 GeV electron beam, and 1.21 GeV to reach the 27 MeV cross-section peak. An accelerator
for the programme is specified to 1.25 GeV, which covers the whole band once the ~1% Compton recoil
correction is applied. The concept note's
architecture diagram showed this step as a single block labelled "Compton backscatter converter", as though
it were an optical component. It is a GeV-class particle accelerator.

**The array is the correct driver for that accelerator, and the fit is better than it first appears.**
Petawatt-class titanium-sapphire systems reach GeV energies but typically at 1 Hz or less, and their
average power is a few tens of watts. A coherently combined fibre array at 100 Hz and 1-5 kW average power
is a fundamentally different kind of driver: repetition rate and average power are precisely what
laser-plasma accelerators lack and precisely what fibre technology is good at. That is the entire thesis of
ICAN and XCAN, and this programme arrives at it from the other direction. See
[05-gamma-source](05-gamma-source.md).

### The gamma source has real users

An inverse Compton source driven by a 1.06-1.21 GeV wakefield beam produces a tunable, quasi-monochromatic,
polarised gamma beam in the 1-30 MeV range. That is the same class of instrument as HIgS and the ELI-NP
gamma beam system, and those facilities exist because there is demand for the beam. Ranked by how well the
application fits *this* hardware:

| Rank | Application | Energy range | What the hardware gives it | Binding constraint |
|---|---|---|---|---|
| 1 | **Photonuclear cross-section measurement** | 8-30 MeV | tunability and narrow bandwidth matter far more than average flux; this is the natural home for a first-of-kind source | none serious; it is what the instrument is for |
| 2 | **Nuclear resonance fluorescence assay** for cargo and waste screening | 2-8 MeV | isotope-specific signatures need exactly the narrow bandwidth an ICS source provides, and the energy is reached by *lowering* the electron energy, which is easier | average flux limits throughput; excellent for method development, marginal for a deployed portal |
| 3 | **Photofission studies** | 6-20 MeV | energetically a clean match; fission-fragment and delayed-neutron work benefits from a monochromatic probe | actinide handling and licensing, not the beam |
| 4 | **Medical isotope production**, e.g. ¹⁰⁰Mo(γ,n)⁹⁹Mo | 12-25 MeV | correct energy, wrong scale | production e-linacs run 10-40 kW of beam power; this system delivers watts of gamma power at 10⁻⁴ conversion, roughly five orders short |

The first entry has a pleasing recursive quality that should be stated openly: **this assessment had to
rely on a ⁴He(γ,n)³He cross-section that is disputed at roughly a factor of two, and the instrument the
programme would build is the right instrument to measure it.** The gap in the data is real, the measurement
is a legitimate contribution, and the facility is well suited to making it.

A minor additional product: any (γ,n) target is also a photoneutron source. The yields here are small, but
a tunable, pulsed, monoenergetic-photon-driven neutron source is a genuine if modest capability, and the
neutron handling has to be designed for in any case. See [06-target-and-capture](06-target-and-capture.md).

---

## Part 5 - Recommendation

| Strand | Decision | Reasoning |
|---|---|---|
| **AI-driven coherent alignment, PoC** | **Go, unchanged** | It is cheap ($16,700 of hardware against a $20,000 cap, [00-summary](00-summary.md) §9), it is the programme's real technical risk, the problem is genuinely unsolved at 100+ elements, and the result is valuable to every laser array regardless of the nuclear endpoint. Nothing in this assessment touches it |
| **Scaling to 20 and 100 beams** | **Go, gated on the PoC** | The scaling case in the concept note is sound. Retain the go/no-go structure and the success criteria; retarget the milestone from "photodisintegration signal detected" to beam quality and wakefield drive performance |
| **Gamma source design** | **Go** | Single-photon inverse Compton off a 1.06-1.21 GeV wakefield beam. This is the correct use of 100-500 TW at 100 Hz and it is what the programme should be about |
| **Multi-photon absorption** | **No-go, permanently** | Rejected on nuclear structure in Part 1. Not an engineering difficulty, not addressable by intensity, not worth a line item |
| **Helium-3 production by this route** | **Do not fund** | Short by 10⁹ to 10¹¹ for thermodynamic reasons. No combination of the four available levers reaches the target |
| **Helium-3 production mission** | **Closed** | Assessed here, reassigned to the lithium-6 route in [11-alternative-routes](11-alternative-routes.md), and closed outright by operator decision 2026-09-11. The lithium-6 analysis stands as a finding; this programme does not carry the requirement |

### On the reassignment

The ⁶Li(n,α)T route in a 100 MW(th) VHTR yields 12.0 g/yr of helium-3 at 1% neutron capture and 59.9 g/yr
at 5%, from 3.12 × 10¹⁸ fissions/s and 7.58 × 10¹⁸ neutrons/s, with tritium decaying to helium-3 at a
12.32 year half-life. Against this route's figures:

| Comparison | Ratio |
|---|---|
| Li-6 route vs. laser route's **unreachable** 100%-efficiency ceiling (0.240 g/yr) | 50× to 250×, i.e. 2-3 orders of magnitude |
| Li-6 route vs. laser route's **realistic** figure (68 ng/yr canonical nominal) | **8 to 9 orders of magnitude** |
| Li-6 route vs. the concept note's own gas-target architecture (15 pg/yr) | 12 orders of magnitude |

The lithium route is established physics with an engineering problem attached, it does not require a
photon above 20 MeV, and the VHTR in this same repository is a plausible host for it. This is the
programme's most useful finding and it should be treated as a result, not as a consolation.

### What this means for the roadmap and the budget

The PoC phase and its budget survive intact. The 100-beam phase survives with its milestone rewritten. The
500-beam "production system" phase, costed in the concept note at $1.5M per unit against a 50-100 g/day
target, does not survive in that form and should be replaced by a user-facility case for the gamma source.
The cost-per-gram figure in the concept note's success metrics (< $100/g) is not achievable by this route
at any scale and should be struck rather than revised. See [09-roadmap](09-roadmap.md) and
[10-economics](10-economics.md).

---

## Open questions

These are the things that could genuinely change some part of this verdict, stated honestly, including the
ones that would not change it enough to matter.

- [ ] **How large is the ⁴He(γ,n)³He cross-section discrepancy really?** The literature disagrees at
      roughly a factor of two near the peak, and some older datasets differ by more. This is bounded and
      would not close a 10⁹ gap even at a factor of ten, so it does not affect the production verdict at
      all. It does change the instrument case: a real and unresolved disagreement in nuclear data is
      exactly the kind of thing a new quasi-monochromatic source should be built to settle. Awaiting a
      proper survey in [02-nuclear-physics](02-nuclear-physics.md).
- [ ] **Is there a resonant enhancement mechanism nobody has identified?** The honest answer is that none
      is known, and it is worth being specific about what one would have to look like: a narrow state at
      or near an integer multiple of the drive photon energy, or a nuclear analogue of a dressed-state
      ladder. Helium-4's level structure offers neither. This is the one place where the argument in Part 1
      is an absence-of-evidence claim rather than a positive bound, and it is recorded as such.
- [ ] **Does the two-photon 0⁺ to 0⁺₂ channel deserve a rate estimate?** Named in Part 1 as the only
      structural loophole. Two photons of roughly 10.1 MeV can reach a state that a single E1 photon cannot,
      which is a real selection-rule fact rather than a hand-wave. It is expected to be irrelevant for three
      independent reasons (it needs the same GeV accelerator, the second-order rate is minute, and the
      resonance decays predominantly to p + t giving tritium), but "expected" is doing work in that
      sentence and a second-order estimate has not been done. Awaiting calculation.
- [ ] **Could coherent or collective nuclear effects at solid density change the picture?** Collective
      enhancement of nuclear transitions is established at keV energies in Mössbauer-regime systems. There
      is no established analogue at 20 MeV, and the mechanism as usually formulated requires a long-lived
      excited state to build coherence in, which helium-4 does not have. Recorded because dismissing it
      without stating the reason would be the wrong kind of confidence.
- [X] **What is the actual achievable laser-to-gamma conversion efficiency for a fibre-array-driven
      wakefield ICS source?** **Calculated in [05-gamma-source](05-gamma-source.md) §6.2, and the
      answer is worse than the figure used here.** An illustrative calculation for this machine - a
      100 pC bunch, the 2 J scattering arm, defocused to 74 µm by the a₀ ≲ 0.3 constraint, with perfect
      overlap assumed - gives 2.5 × 10⁹ photons/s into the 1/γ cone, which is roughly **10⁻⁵** of the
      array pulse energy, an order of magnitude below the 10⁻⁴ used throughout this section. Section
      05's own ceiling, with more charge, a tighter focus and a recirculating cavity all applied at
      once, is 10⁻⁴ to 10⁻³. So 10⁻⁴ is the optimistic end of the achievable range and not the middle
      of it. The verdict is unaffected, since the lever is bounded at ×10⁴ and Part 3 shows that
      saturating it still leaves 7.6 × 10⁴ - and the correction moves in the pessimistic direction. It
      does sharpen the flux specification for the gamma source, and therefore which of the four
      applications in Part 4 are reachable: the medical-isotope row, already five orders short at
      10⁻⁴, is six orders short at 10⁻⁵.
- [X] **Does the per-laser 0.10 J pulse energy requirement survive contact with fibre CPA limits?**
      **No.** [04-laser-array](04-laser-array.md) §2.4 works the B-integral and the facet-damage
      fluence independently and both land near a ~0.6 mJ per-channel ceiling, roughly 100× below the
      0.10 J specification, so this is a physical bound rather than an effort problem. The
      recommendation is route (a): hold total average power at 1-5 kW and total pulse energy at
      10-50 J, and let the channel count float to of order 10⁴ at ~1 mJ each. The 100-500 TW peak power
      the wakefield case depends on is therefore still reached, which is what mattered for this
      section. What remains open is the programme decision rather than the physics, since the roadmap
      is still staged on 100-500 channels; it is carried in [00-summary](00-summary.md) §3.

---

**Document status:** living document. Parts 1 and 2 are the load-bearing arguments and both are stated so
that a reader can check the arithmetic independently; Part 2's bound is deliberately independent of Part
1's mechanism, so the conclusion does not rest on a single line of reasoning. Nothing here has been
simulated or measured.
