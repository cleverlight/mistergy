# He-3 Programme - 02 Nuclear Physics

This section establishes the nuclear data the whole programme rests on: why helium-4 is the most
awkward target in the periodic table, where the three photodisintegration channels open and which one
gives helium-3, why the cross-section is roughly 1.3 mb rather than the 8 mb the concept note assumed,
what photon energy the gamma source should be tuned to, and how large a neutron problem the target
creates. Every threshold quoted here is derived from tabulated binding energies so the reader can
check it. The cross-section figures are experimental and, unusually for a light nucleus, genuinely
disputed. The verdict on multi-photon absorption is stated but not argued here; that argument belongs
to [03-feasibility](03-feasibility.md).

---

## 1. Helium-4 is the hardest target there is

### 1.1 Binding energy

| Nuclide | Binding energy B (MeV) | B/A (MeV) |
|---|---|---|
| ²H (deuteron) | 2.2246 | 1.112 |
| ³H (triton) | 8.4818 | 2.827 |
| ³He | 7.7180 | 2.573 |
| **⁴He** | **28.2957** | **7.074** |
| ⁶Li | 31.994 | 5.332 |
| ⁸Be | 56.4995 | 7.062 |
| ¹²C | 92.1620 | 7.680 |

The pattern in the third column is the entire story of this programme. Binding energy per nucleon
climbs from 1.1 MeV at A = 2 to **7.07 MeV at A = 4**, then *falls back* to 5.33 at A = 6, and does
not exceed the helium-4 value again until carbon-12. Helium-4 is a spike, not a step.

A neat confirmation sits in the table. Beryllium-8 is bound by 7.062 MeV per nucleon, marginally
*less* than helium-4's 7.074:

```
  Q(⁸Be -> 2 ⁴He) = 2 x 28.2957 - 56.4995 = +0.092 MeV
```

Helium-4 is so tightly bound that two of them are more stable than the beryllium-8 nucleus made of
them, which is why beryllium-8 falls apart in about 10⁻¹⁶ s and why stellar nucleosynthesis has to
route around A = 8 through the triple-alpha process. That is the same 92 keV, arrived at from the
same numbers.

### 1.2 Why it is bound so tightly

Helium-4 is **doubly magic at the smallest possible magic number**. Two protons and two neutrons fill
the 1s₁/₂ shell completely for both species. The consequences compound:

- Every nucleon is in the lowest available orbital, so there is no valence nucleon to remove cheaply.
- N = Z, so the symmetry energy penalty is zero.
- The ground state is Jᵖ = 0⁺, T = 0: spin-saturated, isospin-scalar, spatially compact.
- With only four nucleons there is no surface-to-volume penalty of the kind that erodes binding in
  larger nuclei, and the tensor component of the nucleon-nucleon force acts coherently across all six
  pairs.

The measurable consequence is the separation energy, and it is extreme:

| Nucleus | S_n (MeV) |
|---|---|
| **⁴He** | **20.578** |
| ¹²C | 18.72 |
| ¹⁶O | 15.66 |
| ⁵⁶Fe | 11.2 |
| ²⁰⁸Pb | 7.37 |
| ²³⁸U | 6.15 |

Helium-4 has the largest neutron separation energy of any stable nucleus. **This single fact is the
root cause of everything difficult in this programme.** It sets the photon energy that has to be
manufactured, it forces the GeV electron accelerator that dominates the system cost, it suppresses
the cross-section, and it makes the energy bookkeeping of the fuel cycle marginal even before any
efficiency is applied. Nothing downstream can be optimised around it.

---

## 2. The three breakup channels

### 2.1 Thresholds, derived

Each threshold is the difference of tabulated binding energies. No other input is needed:

```
  ⁴He + γ -> ³H  + p     S_p = 28.2957 - 8.4818        = 19.8139 MeV
  ⁴He + γ -> ³He + n     S_n = 28.2957 - 7.7180        = 20.5777 MeV
  ⁴He + γ -> d   + d     S_d = 28.2957 - 2 x 2.2246    = 23.8466 MeV
```

| Channel | Threshold | Products | Wanted? |
|---|---|---|---|
| ⁴He(γ,p)³H | **19.814 MeV** | tritium + proton | **no.** Makes tritium, not helium-3 |
| ⁴He(γ,n)³He | **20.578 MeV** | helium-3 + neutron | **yes.** This is the programme's reaction |
| ⁴He(γ,d)d | **23.847 MeV** | two deuterons | no, but see §5.3 - it is weak and costs little |

The 0.764 MeV gap between the first two is the number the originating concept note fell into. It gave
the threshold as 19.8 MeV, which is the proton channel. **A gamma source tuned to 19.8 MeV produces
tritium and nothing else**, because the helium-3 channel is not yet open.

### 2.2 The proton channel opens first and is the stronger one

Two effects compound against the wanted channel:

- **It opens 0.764 MeV lower.** At any photon energy above 20.578 MeV, the proton channel has
  0.764 MeV more excess energy, and therefore more available phase space, than the neutron channel.
- **Charge symmetry makes the two intrinsically comparable.** ³H + p and ³He + n are mirror final
  states, so in the absence of Coulomb effects the two matrix elements should be nearly equal.
  Whatever asymmetry exists is small; the phase-space advantage is not.

Near threshold the difference is dramatic. The ground state is 0⁺, an E1 photon takes it to 1⁻, and
the final state (³He at ½⁺, a neutron at ½⁺) must therefore be emitted with odd orbital angular
momentum, so l = 1 dominates. A p-wave threshold gives

```
  sigma  ~  k^(2l+1)  =  k^3  ~  (E_gamma - E_threshold)^(3/2)
```

which is a very steep suppression. Taking the ratio of phase-space factors for the two channels
(ignoring, for the moment, the resonance shape and the modest ~0.4 MeV Coulomb barrier that
suppresses proton emission within a few hundred keV of *its* threshold):

| Photon energy | (γ,p) excess | (γ,n) excess | Approximate ³H per ³He produced |
|---|---|---|---|
| 21 MeV | 1.19 MeV | 0.42 MeV | ~4.8 |
| 22 MeV | 2.19 MeV | 1.42 MeV | ~1.9 |
| 24 MeV | 4.19 MeV | 3.42 MeV | ~1.4 |
| 26 MeV | 6.19 MeV | 5.42 MeV | ~1.2 |
| 28 MeV | 8.19 MeV | 7.42 MeV | ~1.2 |

**This reverses the naive intuition.** Sitting just above the helium-3 threshold, where the deuteron
channel is safely closed, looks like the selective choice and is in fact the *worst* place to sit:
the wanted channel has almost no phase space and the unwanted one has plenty, so nearly five tritium
atoms are made per helium-3 atom. The branching only becomes tolerable well above threshold. This
table is a phase-space argument, not a measurement, and the real ratio needs the measured cross-section
curves of both channels; it is directionally reliable and quantitatively indicative.

### 2.3 A broadband source is worse than this table suggests

The table assumes a monochromatic photon. A bremsstrahlung source, which is the cheap way to make
20 MeV photons, delivers a continuum: every photon between 19.814 and 20.578 MeV can *only* make
tritium, and every photon below 19.814 MeV does nothing at all except deposit dose and activate the
apparatus. That is the structural argument for inverse Compton scattering over bremsstrahlung in this
programme, and it is independent of the flux comparison in
[05-gamma-source](05-gamma-source.md): a quasi-monochromatic source is not merely more elegant here,
it is the only way to control what the target actually makes.

### 2.4 The tritium is not entirely wasted, only very slow

There is an irony worth recording, because it is a signpost rather than a consolation.

```
  ³H  ->  ³He + e⁻ + ν̄     t½ = 12.32 yr,  lambda = ln2 / 12.32 = 0.0563 /yr
```

Tritium and helium-3 have essentially the same molar mass (3.01605 against 3.01603 g/mol), so every
gram of tritium made in the "wasted" channel becomes a gram of helium-3 eventually. The word doing
the work is *eventually*: 5.6% of the inventory converts in the first year, half of it in 12.32 years.
The proton channel is therefore not a loss, it is a **slow-release store** with a decade-scale
release constant and a tritium licence attached.

Which quietly poses the question the rest of the document set has to answer. If the accepted route to
helium-3 is to make tritium and wait, then the figure of merit is not photons at all, it is
**tritium production rate**, and the machine that maximises tritium production rate is not a laser.
It is a neutron source pointed at lithium. That is [11-alternative-routes](11-alternative-routes.md),
and §6.4 below closes the same loop from the neutron side.

---

## 3. There is no bound excited state to work with

Helium-4's first excited state is the 0⁺₂ resonance at an excitation energy of about **20.21 MeV**,
with a width of roughly 0.5 MeV. Compare:

| Nucleus | First excited state |
|---|---|
| **⁴He** | **~20.21 MeV** (0⁺₂, and it is unbound) |
| ¹²C | 4.44 MeV |
| ¹⁶O | 6.05 MeV |
| ²³⁸U | 0.045 MeV |

Two properties of that state matter, and they are independent:

- **It is above the particle-emission threshold.** The proton channel opens at 19.814 MeV, so the
  0⁺₂ state sits 0.4 MeV *into* the continuum. It is a resonance that decays by emitting a proton,
  not a bound level that can hold excitation energy while more is delivered. Helium-4 has **no bound
  excited state at all**, and its 20.21 MeV first-excitation gap is the largest of any nucleus.
- **It is invisible to a single photon anyway.** A 0⁺ to 0⁺ transition is an electric monopole (E0)
  transition, and E0 cannot proceed by emission or absorption of a single real photon, which carries
  at least one unit of angular momentum. The one excited state helium-4 possesses cannot be reached
  by the mechanism under discussion even if it were bound.

**The consequence for any multi-photon scheme.** Multiphoton absorption in atoms works because there
is a dense ladder of real intermediate states, each within an optical photon's reach of the last, so
the process proceeds as a sequence of near-resonant steps. Helium-4 offers no rung. A scheme that
absorbs ten photons of about 2.35 MeV would be a tenth-order perturbative process in which every
intermediate step is off-shell by of order 20 MeV, and the amplitude carries that energy denominator
nine times over. The resulting effective cross-section is not merely small; it is negligible by tens
of orders of magnitude. Nonlinear QED at high normalised vector potential is a real and observed set
of phenomena, but it acts on **electrons** (nonlinear Compton scattering, Breit-Wheeler pair
production), not as a nuclear excitation ladder. The full argument, with the order-of-magnitude
estimate, is in [03-feasibility](03-feasibility.md) Part 1 and is not repeated here.

This is why the architecture in [01-overview](01-overview.md) §4.2 makes **single** photons above
20.578 MeV instead of trying to add up small ones.

---

## 4. The giant dipole resonance in helium-4

### 4.1 The peak is about 1.3 mb, not 8 mb

The (γ,n) cross-section peaks at roughly **1.3 mb near 26-28 MeV**. The concept note used ~8 mb,
which is a reasonable figure for a medium-mass nucleus and is roughly six times too large here.

The reason is a sum rule, and it can be checked in three lines. The classical Thomas-Reiche-Kuhn
dipole sum rule gives the energy-integrated photoabsorption cross-section as

```
  integral sigma_abs dE  =  60 x (NZ/A)  MeV.mb
```

For helium-4, N = Z = 2 and A = 4, so **NZ/A = 1**, the smallest value any nucleus of A > 1 can have.
The entire dipole strength available to helium-4 is 60 MeV·mb, full stop.

| Nucleus | NZ/A | TRK integral (MeV·mb) | GDR centroid | Approximate peak σ |
|---|---|---|---|---|
| **⁴He** | **1.0** | **60** | ~26-28 MeV, very broad | **~1.3 mb** for (γ,n) |
| ¹²C | 3.0 | 180 | ~23 MeV | ~10 mb |
| ⁵⁶Fe | 13.9 | 836 | ~18 MeV | ~90 mb |
| ²⁰⁸Pb | 49.7 | 2,980 | ~13.4 MeV | ~640 mb |

Spreading 60 MeV·mb over a Lorentzian of width Γ gives a peak of 2·(sum)/(π·Γ). Helium-4's resonance
is exceptionally broad, of order 10 MeV or more, because there is no collective restoring structure
in a four-nucleon system to keep the strength narrow:

```
  sigma_peak(total absorption)  ~  2 x 60 / (pi x 10)  =  3.8 mb
```

Split between the (γ,p) and (γ,n) channels, that is roughly 1.9 mb each before any correction, and
the measured (γ,n) peak of ~1.3 mb sits comfortably below it. The shortfall is expected: in
helium-4 a substantial part of the dipole strength is pushed to very high excitation energy, tens to
hundreds of MeV, by the short-range nucleon-nucleon correlations and the tensor force that make the
nucleus so compact in the first place. Less of the sum rule sits in the GDR region than in a heavy
nucleus, where the enhancement factor typically puts the observed integral *above* the classical sum.
The same arithmetic applied to lead-208 with Γ = 4 MeV gives 474 mb against an observed ~640 mb, an
enhancement of about 1.35, which is the usual result.

**So the smallness of the cross-section is not an experimental accident. It is the direct consequence
of NZ/A = 1**, and it cannot be engineered around by any choice of source, target or geometry.

### 4.2 The experimental situation is genuinely unsettled, and that is an opportunity

It has to be said plainly: the ⁴He(γ,n)³He cross-section in and around the giant dipole resonance is
**not well determined**. Measurements have disagreed by roughly a factor of two for decades, and the
disagreement has not converged. The contributing reasons are structural rather than a matter of one
bad experiment:

| Source of disagreement | Why it bites here |
|---|---|
| Photon source calibration | bremsstrahlung experiments need an unfolded continuum spectrum; tagged-photon and Compton-backscatter experiments measure a narrow band directly. The two families have historically disagreed |
| Neutron detection efficiency | the neutron carries only a few MeV and must be counted absolutely, which is the classic systematic in low-cross-section photoneutron work |
| Detailed-balance inference | the cross-section is also extracted from the inverse capture reaction ³He(n,γ)⁴He, which is a different experiment with different systematics and does not always agree |
| Real versus virtual photons | electron-scattering measurements access the same strength through virtual photons and require a model-dependent conversion |
| Theory has moved too | ab initio calculations with realistic two- and three-nucleon forces have themselves shifted as the treatment of the continuum improved, so there has been no fixed theoretical anchor to arbitrate |

A factor of two on a 1.3 mb cross-section is a factor of two on every yield figure in this document
set, so the programme has a direct interest in the answer. More importantly, **it is a legitimate and
publishable contribution in its own right.** A tunable, quasi-monochromatic, well-calibrated gamma
source in the 20-30 MeV band pointed at a liquid helium-4 target is close to the ideal instrument for
settling it, which is why [00-summary](00-summary.md) §1 ranks this third among the things the
programme should actually do, ahead of production. Facilities of this general type, HIgS and the
ELI-NP gamma beam system, exist and do this class of measurement; none of them is optimised for
helium-4 at 26 MeV.

---

## 5. Choosing the photon energy

### 5.1 The tradeoff

| Band | (γ,p) | (γ,n) | (γ,d) | σ(γ,n) | ³H per ³He | Neutron energy | Electron energy needed |
|---|---|---|---|---|---|---|---|
| **20.6-21 MeV** at threshold | open, 0.8-1.2 MeV excess | just open | closed | near zero, suppressed as (E-E_thr)^(3/2) | ~5 or worse | < 0.32 MeV | 1.06-1.07 GeV |
| **22-24 MeV** intermediate | open | open, rising | closed below 23.847 | climbing, perhaps 0.3-0.7 mb, awaiting measurement | ~1.4-1.9 | 1.1-2.6 MeV | 1.09-1.14 GeV |
| **26-28 MeV** near peak | open | open, at peak | open but weak, see §5.3 | ~1.3 mb | ~1.2 | 4.1-5.6 MeV | 1.19-1.23 GeV |

Neutron energies are the kinematic share, E_n ≈ (3/4)(E_γ - 20.578), the three quarters coming from
the mass ratio of the neutron to the recoiling helium-3. Electron energies use the same inverse
Compton relation as [00-summary](00-summary.md) §7, E_γ ≈ 4γ²E_laser with a 1.03 µm laser photon at
1.2037 eV; the canonical anchors are 1.06 GeV at 20.578 MeV and 1.21 GeV at 27 MeV.

### 5.2 The threshold band is the trap

The appeal of sitting just above 20.578 MeV is that the deuteron channel is closed and the source
looks clean. It is not clean. It is the point of **maximum tritium contamination and minimum yield**
simultaneously, because the p-wave threshold factor crushes the wanted channel while the unwanted
channel, open 0.764 MeV lower, is already running. Nothing is gained by the deuteron channel being
closed, for the reason in the next paragraph.

### 5.3 The deuteron channel is weak and costs almost nothing to allow

⁴He has T = 0 and the deuteron has T = 0, so the d + d final state is T = 0. For a self-conjugate
N = Z nucleus the E1 operator is purely isovector, requiring ΔT = 1, so **E1 absorption into the
d + d channel is isospin-forbidden**. It proceeds only through E2, through the small isoscalar E1
component, and through isospin mixing, and is correspondingly weak: tens of microbarns rather than
millibarns. Avoiding it is not worth paying for. This is a useful result, because it means the only
competitor that genuinely matters is the proton channel, and the proton channel cannot be avoided at
any photon energy whatsoever.

### 5.4 Recommendation

**Design point 26 MeV, operating band 25-27 MeV.** The reasoning, in order of weight:

1. The (γ,n) cross-section is at or near its 1.3 mb peak. At threshold it is effectively zero, and
   yield scales linearly with it.
2. The tritium-to-helium-3 branching is at its best there, roughly 1.2 : 1, against roughly 5 : 1 at
   threshold. Selectivity improves with energy, not against it.
3. The deuteron channel, though open, is isospin-suppressed and takes little flux (§5.3).
4. The 4.1 MeV neutron is below the (n,2n) threshold of every common structural element, which keeps
   the activation problem in §6 as small as it can be made.
5. The whole band lies within a 1.06-1.23 GeV electron energy range, so tuning across it is a 16%
   change in accelerator energy. Tuning is cheap; the accelerator does not need redesigning to move
   around the resonance.

This was briefly inconsistent with [00-summary](00-summary.md), which rounded the envelope to
1.0-1.2 GeV while its own kinematics table put 27 MeV at 1.21 GeV. It is now settled in
[00-summary](00-summary.md) §7: the canonical envelope is **1.06-1.21 GeV** on the ideal two-body
kinematics, about 1% higher once the Compton recoil correction is applied, so the top of the band
sits nearer 1.22 GeV, and an accelerator should be specified to **1.25 GeV** so the whole band is
reachable with margin. The 1.23 GeV quoted in the table above is the recoil-corrected 28 MeV edge and
is consistent with that figure.

---

## 6. Neutron inventory

### 6.1 One neutron per helium-3 atom, by definition

The reaction is ⁴He(γ,n)³He. There is no version of it that does not liberate a free neutron. The
production rate and the neutron source term are therefore the same number, and **the number that
sizes the facility is the realistic one, not the ceiling**:

| Case | Reactions/s | Neutrons/s | What it is for |
|---|---|---|---|
| **Canonical realistic** (5 kW array, 10⁻⁴ conversion, liquid target) | **4.29 × 10⁸** | **4.29 × 10⁸** | **shielding, activation, facility design, detection** |
| 1 kW ceiling | 3.03 × 10¹⁴ | 3.03 × 10¹⁴ | stating the bound only |
| 5 kW ceiling | 1.52 × 10¹⁵ | 1.52 × 10¹⁵ | stating the bound only |

The two ceiling rows assume 100% conversion of laser light into threshold-energy gammas and 100% of
those gammas causing a reaction. Neither is approachable, so they describe a source that will not
exist and they must not be used to size anything. See [00-summary](00-summary.md) §4 and §6. Section
[06-target-and-capture](06-target-and-capture.md) already makes the same correction for beam heating,
where the ceiling asks for 200 W into the liquid and the realistic deposit is about 20 mW; this is
that correction applied to neutrons.

For scale, against the realistic figure:

| Source | Approximate neutron output |
|---|---|
| **This target, canonical realistic** | **4.29 × 10⁸ n/s** |
| Sealed D-T neutron generator | 10⁸ to 10¹¹ n/s |
| Accelerator Be(d,n) source, mA class | 10¹² to 10¹³ n/s |
| *This target at the 1 kW ceiling (bound only)* | *3.03 × 10¹⁴ n/s* |
| *This target at the 5 kW ceiling (bound only)* | *1.52 × 10¹⁵ n/s* |
| 1 MW(th) fission reactor | 7.6 × 10¹⁶ n/s |
| 100 MW(th) VHTR | 7.58 × 10¹⁸ n/s |

**At 4.29 × 10⁸ n/s the target sits at the bottom of the sealed D-T generator range**, which is a
modest laboratory neutron term: a shielded enclosure, an interlock and area monitoring, not a
research neutron source and not a building-scale shield. An earlier version of this section put the
1 kW ceiling in that comparison and concluded the target emitted about as many neutrons as a
4 kW(th) fission reactor. That comparison is against a rate the machine cannot reach and it is
withdrawn.

**The correction cuts both ways, and the sceptical direction is the honest one.** 4.29 × 10⁸ n/s is
easy to shield and it is also easy to *count*: neutron counting detects the reaction comfortably, so
the physics experiment works even though the factory does not. The radiological envelope of this
facility is set by the GeV electron beam dump and the 20-27 MeV photon field (§6.3), not by the
target neutrons.

### 6.2 Shielding, to an order of magnitude

Taking the standard few-MeV fluence-to-dose conversion of about 4.0 × 10⁻¹⁰ Sv per n/cm², a point
source at the **canonical realistic** rate gives, unshielded at 1 metre:

```
  flux at 1 m   = 4.29e8 / (4 pi x 1e4 cm2)   =  3.41e3 n/cm2/s
  dose rate     = 3.41e3 x 4.0e-10            =  1.37e-6 Sv/s  =  4.9e-3 Sv/h
```

Reaching an unrestricted-area target of about 1 µSv/h needs an attenuation of 4.9 × 10³, which is
3.7 decades. At a fast-neutron tenth-value layer of 20-25 cm in ordinary concrete, that is roughly
**0.75 to 0.95 metres of concrete** - a shielded enclosure of entirely ordinary construction, and
one that a laboratory wall or an existing accelerator vault largely provides already.

For the record, and for the record only, the same arithmetic at the unreachable 1 kW ceiling gives
2.41 × 10⁹ n/cm²/s at 1 m, 3.5 × 10³ Sv/h, 9.5 decades of attenuation and **1.9 to 2.4 metres of
concrete**, with the 5 kW ceiling adding a further 15-18 cm. That is a major building element rather
than a local enclosure, and it is the figure this section previously quoted as though it were the
design case. It is not: it is a bound on a source that assumes 100% conversion and 100% absorption.

In either case a proper calculation must also handle the capture gammas the shield itself produces,
hydrogenous shielding with a thermal-neutron absorber (borated polyethylene inside the concrete),
the gamma beam dump, and skyshine. This is an order-of-magnitude sizing only; the real calculation is
[06-target-and-capture](06-target-and-capture.md)'s and is awaiting calculation. Note that it will be
dominated by the electron beam dump and the collimator (§6.3), not by the target.

### 6.3 Activation

A continuous few-MeV neutron field activates everything inside the shield. At the realistic
4.29 × 10⁸ n/s the target's own contribution to that is small, and the reactions below are listed
because they are the ones that matter for the **beam dump**, which is the facility's dominant
neutron source. The list is the same either way:

| Reaction | Product half-life | Where it bites |
|---|---|---|
| ²⁷Al(n,α)²⁴Na | 15.0 h | aluminium structure and cryostat components; dominates the short-term dose rate after shutdown |
| ⁵⁴Fe(n,p)⁵⁴Mn | 312 d | steel structure and vessels; sets the medium-term hands-on wait |
| ⁵⁹Co(n,γ)⁶⁰Co | 5.27 yr | cobalt trace impurity in steels and in any hard-facing alloy; sets the long-term problem |
| ²³Na(n,γ)²⁴Na | 15.0 h | the concrete shield itself |

Two features are specific to this design and worth calling out. First, the cryostat is the closest
object to the source, cannot be built from anything but metal, and has to be entered for maintenance,
which makes its material selection a radiological decision rather than only a cryogenic one. Second,
**the electron beam dump is an independent neutron source, and at realistic rates it is the larger
one**. A 1.2 GeV electron beam dumped into any high-Z material produces bremsstrahlung well above the
(γ,n) thresholds of the dump material, so the dump generates photoneutrons whether or not the helium
target is in the beam, and it does so at a rate set by the beam power rather than by the helium
reaction rate. It needs its own shielding assessment, it cannot be treated as an appendage of the
target shield, and it, not the target, sets the facility's radiological envelope.

### 6.4 What this does to the selling point, stated honestly

Section 1 of [01-overview](01-overview.md) makes the case for helium-3 on the grounds that D-³He
fusion emits no 14.1 MeV neutron and therefore avoids first-wall activation, tritium breeding and
remote maintenance. This section has just shown that the proposed production route emits **exactly
one neutron per helium-3 atom manufactured**. Three things follow, and all three should be on the
record.

- **The neutron has moved, not vanished.** It has been relocated from the power plant to the fuel
  factory. That is not nothing: the fuel factory is a fixed site, not a machine whose internals must
  survive the flux, and its shielding can be concrete rather than a breeding blanket.
- **The neutron has also been downgraded, which is a genuine gain.** A 4.1 MeV neutron at the 26 MeV
  design point sits below the (n,2n) threshold of essentially every structural element and produces
  one to two orders of magnitude less helium in the lattice per dpa than a 14.1 MeV neutron does. The
  damage physics is qualitatively easier. But "no neutron flux" is not a true description of the fuel
  cycle taken end to end, and the claim should not be made in that form.
- **The energy bookkeeping is adverse before any efficiency is counted.** Making one helium-3 atom
  costs at least 20.578 MeV of photon energy delivered into a nucleus. Burning it later releases
  18.353 MeV. The ratio is 0.892, so the cycle is **nuclear-energy-negative at 100% efficiency in both
  directions**, and the real laser-to-gamma and gamma-to-reaction efficiencies then apply on top of
  that. This is a physics fact rather than an engineering shortfall. The full balance is
  [03-feasibility](03-feasibility.md)'s.

And one constructive consequence. The neutron is worth more than it costs to shield, if it is caught
rather than merely stopped:

```
  ⁶Li + n  ->  ⁴He + ³H     Q = 4.78 MeV, thermal capture cross-section 940 b
  ³H  ->  ³He                t½ = 12.32 yr
```

A lithium blanket around the target, in place of part of the concrete, would convert a large fraction
of those neutrons into tritium and hence, on a decade clock, into a **second helium-3 atom per
reaction**. It roughly doubles the eventual yield for the cost of a tritium licence. It does not save
the route: doubling the canonical realistic 68 ng/yr gives 136 ng/yr, and even doubling the
unreachable 1 kW ceiling of 0.048 g/yr gives only 0.096 g/yr. What it does is point at the finding
that matters.

The productive step in this whole chain is a neutron being captured in lithium, so compare the
neutron supplies directly. **This target supplies 4.29 × 10⁸ n/s at the canonical realistic rate. A
100 MW(th) VHTR supplies 7.58 × 10¹⁸ n/s, a factor of 1.8 × 10¹⁰ - about ten orders of magnitude
more - as a by-product of doing something else it is already paid for.** Even against this target's
unreachable 1 kW ceiling the VHTR is twenty-five thousand times better. That comparison, not the
laser physics, is the argument of [11-alternative-routes](11-alternative-routes.md).

---

## Open questions

- [ ] The ⁴He(γ,n)³He cross-section itself. A factor of two is unresolved between measurement
      families, and every yield figure in this set scales linearly with it. Resolving it is both a
      programme need and the programme's most defensible scientific deliverable.
- [ ] The measured ratio σ(γ,p)/σ(γ,n) as a function of photon energy across 20-30 MeV. §2.2 gives a
      phase-space estimate only; the real branching decides how much tritium the facility produces and
      therefore what licence it needs. This is now load-bearing rather than informational:
      [01-overview](01-overview.md) requirement G-2 is written as a branching-ratio target of roughly
      1.3 : 1 in the 25-27 MeV band, because there is no bandwidth at which the proton channel is
      closed, and that target rests on this table rather than on a measurement.
- [ ] Whether the near-threshold rise really follows (E - E_thr)^(3/2). The p-wave argument is sound
      for pure E1, but the 0⁺₂ resonance sits at 20.21 MeV, immediately below the (γ,n) threshold, and
      its tail may distort the threshold region.
- [ ] The true width and centroid of the helium-4 dipole strength, and what fraction of the 60 MeV·mb
      sum rule actually sits below 40 MeV. This determines whether 26 MeV is the right design point or
      whether the peak is higher and flatter than assumed.
- [X] Resolve the 1.2 GeV against 1.21 GeV boundary between the electron energy envelope in
      [00-summary](00-summary.md) **§7** (not §9, which this list previously cited) and the 27 MeV top
      of the operating band (§5.4 above). **Settled.** The canonical envelope is 1.06-1.21 GeV on the
      ideal two-body kinematics, about 1.22 GeV at the top of the band once the ~1% Compton recoil
      correction is applied, and an accelerator for this programme is specified to 1.25 GeV so the
      whole 20.578-27 MeV band is reachable with margin. §5.4 above now states this and so does
      [01-overview](01-overview.md) §6.
- [ ] Whether the ⁴He(γ,d)d channel is weak enough to ignore entirely in the yield model, or whether
      the isospin-forbidden E1 leaks enough through isospin mixing to matter at the 26-28 MeV design
      point. Awaiting a literature value.
- [ ] Whether a lithium blanket around the target is worth building at demonstration scale (§6.4). It
      doubles yield and it makes the neutron-economy argument for
      [11-alternative-routes](11-alternative-routes.md) concrete rather than rhetorical, but it turns
      a radiation facility into a tritium facility.

---

*Previous: [01-overview](01-overview.md) | Next: [03-feasibility](03-feasibility.md)*
