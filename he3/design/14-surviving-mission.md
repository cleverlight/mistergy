# He-3 Programme - 14 The Surviving Mission

[03-feasibility](03-feasibility.md) Part 5 reassigned the production mission and recorded "Gamma source
design: Go" in the same table. Every section since has referred to that decision in passing without any
section owning it. This one owns it: what the mission is, why inverse Compton scattering is the only
mechanism that serves it, where the instrument would sit against the two facilities that already exist,
what each application actually needs, and who would use the thing if it were built.

Nothing here changes a verdict. The production verdict stands at 10⁹ to 10¹¹ short and is not revisited.

---

## 1. The mission, in one statement

**Build a tunable, quasi-monochromatic, polarised gamma-ray source covering 1 to 30 MeV, by using the
coherently combined array to drive a laser-wakefield accelerator to 1.06-1.21 GeV and inverse-Compton
scattering a second laser arm off that electron beam. The gamma beam is the product.**

```
  array  ->  coherent combining  ->  two-arm split
                                       |
             drive arm  ->  laser wakefield accelerator  ->  1.06-1.21 GeV electrons
                                                                     |
             scattering arm  ------------------------------>  interaction point
                                                                     |
                                              collimator  ->  1-30 MeV gamma beam  ->  user
```

Drawn at [`../diagrams/system-architecture.svg`](../diagrams/system-architecture.svg). The two arms must
meet within about 10 fs, which is [`../diagrams/two-arm-synchronisation.svg`](../diagrams/two-arm-synchronisation.svg).

**Two things survive [03-feasibility](03-feasibility.md), and they are different in kind.** The learned
alignment control of [07-ai-control](07-ai-control.md) survives unconditionally, because it is valuable
to any large phase-locked array whatever that array is eventually pointed at, which is why Part 5
recommends doing it first. The gamma source survives as the thing the programme should be about. This
section is about the second.

---

## 2. Why inverse Compton, and why nothing else will do

A photon of energy E_L meeting an electron of Lorentz factor γ head-on is Doppler-shifted into the
electron frame by ~2γ, scatters approximately elastically there, and is shifted again by ~2γ on the way
back out. The two factors multiply:

```
  E_γ ≈ 4 γ² E_L
```

At γ = 2,067 that turns a 1.204 eV photon into a 20.578 MeV one, a factor of 1.7 x 10⁷ in a single
scattering event. [05-gamma-source](05-gamma-source.md) §2 works the arithmetic and the recoil
correction; nothing is restated here.

Four properties follow from the kinematics, and the mission needs all four at once:

| Property | Where it comes from | Why the mission needs it |
|---|---|---|
| **Tunable** | E ∝ γ², so the electron energy sets the photon energy | a cross-section is a function of energy; you have to sweep it |
| **Quasi-monochromatic** | E(θ) ≈ 4γ²E_L / (1 + γ²θ²), so an aperture selects a band | a continuum cannot tell you which photon energy caused what |
| **Polarised** | the gamma inherits the drive laser's polarisation | angular-distribution and parity measurements need it |
| **Collimated** | emission into a cone of half-angle ~1/γ, 0.48 mrad at threshold | the beam reaches a small sample without a collimator throwing most of it away |

**No other mechanism gives all four.** Bremsstrahlung from an electron linac is roughly 260x more
efficient ([12-intensity-limits](12-intensity-limits.md) §6) and produces a continuum from zero to the
electron energy, which disqualifies it for every application below except the fourth. Radioisotope
sources are fixed-energy and weak. A reactor gives neutrons, not photons.

This is the third independent argument in the set that converges on inverse Compton: the mission needs
it here, [13-neutron-free-routes](13-neutron-free-routes.md) §2 needs a band-limited source to keep the
lithium-7 window closed to neutrons, and [12-intensity-limits](12-intensity-limits.md) §6 rejects its own
cheaper alternative for the same reason.

---

## 3. Where this instrument would sit

Two facilities define the field. Both are Compton sources; neither is laser-wakefield driven.

| | HIgS (TUNL / Duke) | ELI-NP VEGA (Magurele) | This programme |
|---|---|---|---|
| Energy range | 1-100 MeV | 1-19.5 MeV | 1-30 MeV |
| Bandwidth | narrow, storage-ring FEL driven | better than 0.5% relative | uncosted, see Open questions |
| Polarisation | polarised | above 95% linear | inherits the drive laser |
| Peak flux | ~3 x 10¹⁰ γ/s near 10 MeV | spectral density above 5 x 10³ photons/eV/s | see below |
| Driver | storage-ring free-electron laser | warm RF linac | **laser wakefield** |
| Status | operating, ~1,500 h/yr for nuclear physics | under construction, RF conditioning in 2026 | design only |

**Flux.** At the canonical 10⁻⁴ conversion, a 5 kW array puts 0.5 W into 20.578 MeV photons, which is
**1.5 x 10¹¹ γ/s**, about five times the HIgS figure. That is the optimistic end and it must be quoted
as such: [05-gamma-source](05-gamma-source.md) §6.2 works an illustrative calculation for this specific
machine and lands nearer 10⁻⁵, which puts the 5 kW case *below* HIgS and the 50 kW case about five times
above it.

**The honest claim is that the plausible range brackets the world record, not that it clears it**, and
the range is wider than those two rows suggest. [05-gamma-source](05-gamma-source.md) §6.2 reaches its
figure by a different route, modelling bunch charge and spot area rather than scaling average power, and
it lands on 2.5 x 10⁷ gamma photons per shot, a conversion of 4.1 x 10⁻⁵ against the scattering arm, and
at its assumed 100 Hz:

| §6.2 illustrative case | Flux |
|---|---|
| into the full 1/γ cone | 2.5 x 10⁹ γ/s |
| **collimated to 1% bandwidth** | **2.5 x 10⁷ γ/s** |

**That collimated row is the only spectral-density figure the set contains, and it is the one that
matters**, because HIgS and ELI-NP are both specified on beam inside a narrow band rather than on total
emission. It has never been carried to this array's operating point, and the two estimates have never
been reconciled: one scales average power, the other models a single shot at a tenth the repetition
rate. Until that is done, §3's comparison is total flux against total flux, which is the weaker claim.

**The differentiator is not flux, it is footprint.** HIgS is a storage ring; ELI-NP is a linac hall. A
wakefield stage reaches 1 GeV in centimetres of plasma rather than tens of metres of accelerator, so the
interesting claim for this architecture is a **university-scale instrument in the performance class of a
national facility**, not a better national facility. No laser-wakefield-driven Compton source is a user
facility today, and that gap is the opportunity and the risk in the same sentence.

---

## 4. The applications

[03-feasibility](03-feasibility.md) Part 4 ranks four. The ranking is unchanged. What follows is what
each one actually needs and why this instrument answers it.

### 4.1 Photonuclear cross-section measurement, 8-30 MeV

**The problem.** The evaluated photonuclear data record is thin and, where it is not thin, it disagrees
with itself. The IAEA Photonuclear Data Library 2019 carries 219 isotopes, of which 199 evaluations are
new and only 20 were retained from the 1999 library. Results from different laboratories for the same
nucleus show systematic discrepancies: Saclay (γ,1n) cross-sections run generally larger than Livermore's
while Saclay (γ,2n) run smaller, and the evaluators had to make recommendations to users about which to
believe. Where no measurement exists at all, the library carries model predictions.

**Why this instrument.** Tunability and narrow bandwidth are what a cross-section measurement is made of,
and average flux matters far less than either. That is the one application where this machine's weakest
axis is also the axis nobody is asking about. [03-feasibility](03-feasibility.md) lists the binding
constraint as "none serious; it is what the instrument is for".

**The recursion, which should be stated openly.** This programme's own assessment rests on a
⁴He(γ,n)³He cross-section disputed by roughly a factor of two, and the instrument the programme would
build is the right instrument to settle it. That is not a rhetorical flourish; it is
[`he4-cross-section-spread`](../../docstech/users/alex.stanhope/todo.md), an open story in this
repository.

**Who uses it.** National nuclear data programmes and the IAEA Nuclear Data Section, whose 2016-2019
Coordinated Research Project on Photonuclear Data had as an explicit objective the measurement of
cross-sections "for unexplored nuclei and cases of discrepant existing data". The downstream consumers
the IAEA names are radiation shielding design, radiotherapy dose calculation, fission and fusion reactor
physics, activation analysis, safeguards, waste transmutation and medical isotope production.

### 4.2 Nuclear astrophysics: the gamma process, 5-15 MeV

A distinct customer for the same measurement, and worth separating because the demand is better defined.

**The problem.** The p-nuclei, a group of neutron-deficient isotopes between ⁷⁴Se and ¹⁹⁶Hg, are believed
to form by sequences of photodisintegration in stellar environments at 2 to 3.5 GK. Modelling that
requires the reaction rates. Despite decades of effort, **experimental cross-sections for gamma-process
reactions are mostly unknown**, and the rates in use are predominantly Hauser-Feshbach theoretical
calculations rather than measurements.

**Why this instrument.** (γ,p) and (γ,α) measurements need exactly a tunable monoenergetic photon beam,
and the field's own literature dates its progress over the last twenty years to the arrival of
monoenergetic gamma-beam facilities. This is a demand that grew because the instrument class appeared,
which is the strongest evidence that another one would be used.

**Who uses it.** University nuclear astrophysics groups, the same community that competes for HIgS and
ELI-NP beam time.

### 4.3 Nuclear resonance fluorescence assay, 2-8 MeV

**The problem.** Almost every isotope has a unique NRF spectral signature, so a tunable narrow-band gamma
beam can identify isotopes non-destructively and through shielding. The named applications are cargo
screening for special nuclear material, spent fuel and waste characterisation, and safeguards.

**Why this instrument.** The narrow energy spread, continuous tunability and tight collimation of a
Compton source are the properties the technique depends on, and the energy band is reached by *lowering*
the electron energy, which is the easy direction. Work in this area already uses laser Compton
backscattering gamma-rays specifically.

**The binding constraint is throughput, and it is real.** Average flux sets how long a container takes to
scan. This machine is well suited to method development and to establishing the signatures, and
[03-feasibility](03-feasibility.md) calls it "marginal for a deployed portal". That judgement stands.

**Who uses it.** Safeguards and homeland-security research programmes, and the nuclear waste
characterisation community. A deployed portal market exists in principle; nothing in this set costs one.

### 4.4 Photofission studies, 6-20 MeV

Energetically a clean match, and a monochromatic probe benefits fission-fragment and delayed-neutron
work. The binding constraint is actinide handling and licensing rather than anything about the beam, so
the instrument's suitability is not the deciding factor and this application does not drive the design.

### 4.5 Medical isotope production, 12-25 MeV

**Correct energy, wrong scale, and the gap is quantified.** ¹⁰⁰Mo(γ,n)⁹⁹Mo is a real production route
being demonstrated with electron linacs, and the demand is not in doubt: technetium-99m is used in
roughly 40,000 diagnostic scans a day in the United States alone, and the supply chain is fragile enough
that reactor outages produce shortages.

But the photonuclear route's output is about **3,700 times lower than the neutron-induced fission route**
because the cross-section is so much smaller, which is why it needs high-power electron linacs running
tens of kilowatts of beam. This system delivers watts of gamma power at 10⁻⁴ conversion, roughly five
orders short. **This is a market with genuine demand that this instrument cannot serve**, and saying so
plainly is more useful than listing it as an opportunity.

---

## 5. The market, honestly described

**This is a scientific-instrument market, sized in facilities rather than in units.** There is no product
here to sell by the thousand. Two facilities cover the world's demand for this beam class today, one of
them still commissioning, and HIgS delivers roughly 1,500 hours a year of nuclear-physics beam time
against a capability of more than 2,000. Beam time is allocated by a programme advisory committee against
peer-reviewed proposals.

What that implies for a third instrument:

- **The demand is real but it is not commercial demand.** The customers are national data programmes,
  university groups and safeguards agencies. The funding model is institutional, not a sales pipeline.
- **The case is oversubscription and access, not performance.** A third facility competes by being
  available, not by being better, unless the footprint argument in §3 holds.
- **The footprint argument is the whole commercial thesis.** If a wakefield-driven source puts
  national-facility performance in a university hall, the addressable count is the number of nuclear
  physics departments rather than the number of national laboratories. That is a different market by two
  orders of magnitude, and it is entirely unproven.
- **The applied markets are gated on flux, not on capability.** NRF portals and medical isotopes both
  have real demand and both need average flux this design does not have. They are reachable only if the
  conversion efficiency question in §3 resolves at the optimistic end and average power grows.

**What this is not.** It is not a helium-3 business, it is not a power source, and it is not a route to
either. Those were assessed and closed in [03-feasibility](03-feasibility.md),
[13-neutron-free-routes](13-neutron-free-routes.md) and [11-alternative-routes](11-alternative-routes.md)
respectively.

### Reading map

Named rather than cited, per [`../../CODING_STANDARDS.md`](../../CODING_STANDARDS.md). Each is a
starting point a reader can verify independently.

- **IAEA Evaluated Photonuclear Data Library 2019** (IAEA/PD-2019), IAEA Nuclear Data Section. The
  library, its 219 isotopes and the Saclay-Livermore discrepancy discussion.
- **IAEA Coordinated Research Project on Photonuclear Data**, 2016-2019. Its stated objectives are the
  clearest available statement of where the measurement gaps are.
- **HIgS**, Triangle Universities Nuclear Laboratory at Duke. Facility parameters, the programme advisory
  committee process and the annual beam-time figures.
- **ELI-NP Gamma Beam System and the VEGA system**, Extreme Light Infrastructure Nuclear Physics,
  Magurele. Design specification and construction status.
- **The gamma-process literature** on p-nuclei photodisintegration rates, for the statement that
  experimental cross-sections are mostly unknown and the rates rest on Hauser-Feshbach calculations.

---

## 6. What the surviving mission is not

Several options have been examined in this set and only one of them is the mission. Recorded here
because they are easy to conflate.

| Option | Status | Where |
|---|---|---|
| **Gamma source, photonuclear measurement** | **the surviving mission** | this section, [03](03-feasibility.md) Part 5 |
| Learned coherent alignment control | survives separately and unconditionally | [07](07-ai-control.md), [08](08-proof-of-concept.md) |
| He-3 by ⁴He photodisintegration | closed, short by 10⁹ to 10¹¹ | [03](03-feasibility.md) |
| Multi-photon absorption | closed permanently, on nuclear structure | [03](03-feasibility.md) Part 1 |
| He-3 by ⁶Li(p,α) with laser-driven protons | open as a channel decision, closed as a business | [13](13-neutron-free-routes.md) §4 |
| He-3 production as a mission | **reassigned** to ⁶Li breeding in a reactor | [11](11-alternative-routes.md) |
| Aneutronic fusion power | not assessed in this set; see Open questions | - |

---

## Open questions

- [ ] **The gamma flux figure spans an order of magnitude and the set has not closed it.** §3 quotes
      1.5 x 10¹¹ γ/s at 5 kW on the canonical 10⁻⁴ conversion, while
      [05-gamma-source](05-gamma-source.md) §6.2 lands nearer 10⁻⁵ for this specific machine. The
      difference decides whether the instrument leads the field or trails it, and no section resolves it.
- [ ] **Bandwidth is costed once and never carried forward.** Spectral density, not total flux, is what
      HIgS and ELI-NP are specified on. [05-gamma-source](05-gamma-source.md) §6.2 gives one worked
      collimated figure, 2.5 x 10⁷ γ/s at 100 Hz into 1% bandwidth, and nothing scales it to the array's
      operating point or to the bandwidth a wakefield energy spread actually permits. Until that exists,
      §3's comparison table has an empty cell where the decisive row should be.
- [ ] **The footprint claim is asserted rather than costed.** §3 says the commercial thesis is
      university-scale delivery of national-facility performance. Nobody has drawn the hall, costed the
      shielding, or established what a wakefield stage needs around it.
- [ ] **No laser-wakefield-driven Compton source is a user facility anywhere.** That is either the
      opportunity or the reason it has not been done, and this set does not know which.
- [ ] **The applied markets are named but not sized.** NRF portal screening and medical isotope
      production both have real demand and neither has a number in this section beyond the flux gap.
