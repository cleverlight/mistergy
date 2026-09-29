# He-3 Programme - 15 Kilogram-Scale Closure

[03-feasibility](03-feasibility.md) closed the laser photodisintegration route.
[11-alternative-routes](11-alternative-routes.md) worked the lithium-6 route in full and recommended it
as the strongest option in this repository. [13-neutron-free-routes](13-neutron-free-routes.md) found
two routes that make no free neutron at all. Each of those assessments answered the question "what is
the best route?" and none of them answered the question a fusion customer actually asks, which is
"can any route reach kilograms per year?"

This section answers that one. It fixes the mission at 3 to 30 kg/yr, enumerates every way a
helium-3 nucleus can come into existence, and closes each in turn. **The answer is that no route in
this repository reaches the mission, and one route outside it does.** The reason is not engineering
immaturity in any of the four cases: three are closed by constants of nature and the fourth by the
size of the natural gas industry.

The section exists because the question keeps being re-asked. Anyone who proposes breeding helium-3
for a fusion company is proposing something that looks obviously sensible and is not, and the
arithmetic that shows why takes about a week to rediscover.

---

## 1. The mission this section tests

[01-overview](01-overview.md) §1.4 derives the canonical demand figure: **about 90 kg of helium-3 per
gigawatt-electric per year** for a D-³He plant. That sets the scale for everything below.

A useful stopgap supply for a fusion developer is therefore of order:

```
  3 kg/yr  / 90 kg per GW(e)-yr  =  0.033 GW(e)  =  33 MW(e)
  30 kg/yr / 90 kg per GW(e)-yr  =  0.333 GW(e)  =  333 MW(e)
```

**So the mission band is 3 to 30 kg/yr**, which fuels 33 to 333 MW(e) of D-³He plant. This is the
same order as the originating concept note's 50-100 g/day target, which §1.4 records as 18 to 37 kg/yr,
so the band is not a new ambition. It is the old one, restated in the unit a customer buys in.

Against it, the best route in this repository produces **12 g/yr** ([00-summary](00-summary.md) §8).
The gap is a factor of 250.

---

## 2. There are four ways to make a helium-3 nucleus, and only four

This is nuclear structure rather than a survey of proposals, which is what makes the list complete.
Helium-3 is two protons and one neutron, so a route must either remove a neutron from something with
one more, convert a neutron to a proton, assemble it from lighter nuclei, or find one that already
exists.

| # | Origin | Representative routes | Closed by |
|---|---|---|---|
| A | Convert a neutron to a proton in ³H | Li-6 breeding, fission, hybrids, spallation, ⁷Li(γ,t) | §3, the decay constant |
| B | Remove a neutron from ⁴He | ⁴He(γ,n)³He, spallation on helium | §4, threshold and the competing proton channel |
| C | Assemble from lighter nuclei | D-D fusion, ⁶Li(p,α)³He | §5, fusion gain and §6, thick-target yield |
| D | Find helium-3 that already exists | natural helium, lunar regolith | §7, the size of the resource |

There is no fifth origin. Every proposal that has been put to this programme, including every one
raised while this section was being written, falls into one of these four.

---

## 3. Origin A: the tritium routes, and why the inventory cannot be reduced

Family A is the whole of the fission and breeding literature, and it is where every serious proposal
lands. It is closed by a single relation.

### 3.1 The inventory relation

Tritium decays at its own rate and nothing in a reactor changes it. At steady production rate P, the
inventory held reaches the equilibrium where production balances decay, so N = P/λ. With the tritium
decay constant from [11-alternative-routes](11-alternative-routes.md) §2.3:

```
  lambda = ln2 / 12.32 yr = 0.0563 /yr
  mean holding time = 1 / 0.0563 = 17.8 yr
```

Tritium and helium-3 have the same molar mass to four figures, 3.016 g/mol, so the relation collapses
to a form with no unit conversion in it at all:

> **Tritium held, in kg, is the helium-3 production rate in kg/yr multiplied by 17.8.**

### 3.2 What the mission therefore costs

| He-3 produced | Tritium held at all times | Comparison |
|---|---|---|
| 12 g/yr (the repository's best route) | 0.21 kg | a licensable research inventory |
| 60 g/yr (the same route at its 5% capture case) | 1.1 kg | still a research-scale inventory |
| **3 kg/yr (mission floor)** | **53.4 kg** | an order of magnitude above a large fusion facility |
| 30 kg/yr (mission ceiling) | 534 kg | not licensable to any private entity |

The arithmetic for the floor:

```
  53.4 kg = 3 kg/yr × 17.8 yr
```

**This is the binding constraint on family A, and it is worse than a cost.** It scales in exact
proportion to success: a design that doubles its helium-3 output doubles the inventory that makes it
unlicensable. There is no operating point at which the product is large and the hazard is small.

Two consequences follow that are easy to miss:

- **The hazard cannot be moved off the site by ageing the tritium elsewhere.** Wherever the tritium
  ages, that place holds 53 kg, and that place is the one producing the helium-3. Splitting breeding
  from ageing relocates the licence; it does not shrink it.
- **The 17.8 yr holding time is also a ramp.** A plant started today delivers 23.5% of its nameplate
  rate at year ten and 40.0% at year twenty ([11-alternative-routes](11-alternative-routes.md) §2.3).
  Adding a decade of licensing and construction puts the first meaningful inventory beyond 2050.

### 3.3 No machine architecture escapes it, hybrids included

The natural response is to burn the tritium as it is bred, in a fission-fusion hybrid or a coupled
plasma, keeping the helium-3 and destroying the inventory. **No fusion reaction converts tritium into
helium-3.** The candidates, with their products:

| Reaction | Products | Helium-3 yield |
|---|---|---|
| D + T | ⁴He + n | none; the tritium is consumed |
| T + T | ⁴He + 2n | none; two tritons are consumed |
| D + ³He | ⁴He + p | negative; it consumes helium-3 |
| T -> ³He + e⁻ + ν̄ | beta decay, 12.32 yr | **the only route, and it is not a fusion reaction** |

Beta decay is the sole mechanism. So burning a triton does not preserve a helium-3 atom, it destroys
the only thing that was ever going to become one, and the output falls by exactly as much as the
inventory does. N = P/λ holds throughout, with a smaller P.

A hybrid does multiply neutrons, which raises P. It raises the inventory by the same factor.

### 3.4 The decay constant cannot be altered

The remaining escape is to speed up the decay, which would fix the ramp and the inventory together
because both are proportional to 1/λ. It is the correct lever and it is not available.

**The beta particle does not exist before the decay.** It is created at the instant the weak
interaction converts a neutron into a proton, so an external field has nothing to act on. The rate is
set by the weak coupling constant, the nuclear matrix element and the available phase space, and
tritium is slow because its beta endpoint is only 18.6 keV, one of the smallest known, with phase
space scaling as roughly the fifth power of it.

Granting a mechanism for the sake of argument, the field needed to double the rate by shifting the
endpoint is:

```
  fractional shift to double a Q⁵ rate = 2^0.2 - 1 = 0.149
  0.149 × 18.6 keV = 2.77 keV
  2,770 V / 2.0 × 10⁻¹⁵ m = 1.39 × 10¹⁸ V/m
```

The Schwinger limit, above which the vacuum itself breaks down into electron-positron pairs, is
1.32 × 10¹⁸ V/m. The required field is 1.05 times it, so it is not a field that can exist, and any
approach to it would strip the atom and accelerate the triton away first.

One genuine effect deserves recording, because it is large and it is the thing this idea is reaching
for. In **bound-state beta decay** a fully stripped nucleus emits its electron into an empty orbital of
the daughter, adding the binding energy to the phase space. For bare ¹⁸⁷Re the measured half-life falls
from about 43 billion years to about 33 years, a factor of order 10⁹. It pays only where the endpoint
is comparable to atomic energies: ¹⁸⁷Re has a 2.47 keV endpoint, so tens of eV is a large fractional
change, whereas tritium's 18.6 keV endpoint makes the same trick worth of order 1% in rate. Electron
capture rates likewise vary with ionisation state at the percent level, but that channel depends on
electron density at the nucleus and runs in the opposite direction from beta-minus.

For a beta-minus emitter with an endpoint far above atomic energy scales, the half-life is
environment-independent to parts in 10⁴.

---

## 4. Origin B: removing a neutron from helium-4

This is the route the programme was built on, and it is closed twice over.

[13-neutron-free-routes](13-neutron-free-routes.md) §1 records the structural problem: the ⁴He(γ,p)³H
channel opens at 19.814 MeV, which is 0.764 MeV **below** the 20.578 MeV helium-3 channel, so the
proton channel is always open when the helium-3 channel is. A helium-4 target cannot be operated in a
tritium-free window, which means family B leaks into family A and inherits its inventory.

The rate verdict belongs to [03-feasibility](03-feasibility.md) and is unchanged here: short of the
originating target by 2.7 × 10¹¹ at the canonical realistic rate. Against the mission band of this
section the shortfall is larger still, because the band is larger than the originating target.

---

## 5. Origin C by fusion: the D-D route, and why it is circular

D-D fusion is the one route that produces helium-3 **directly**, with no tritium intermediate, no
17.8 yr holding time and no inventory:

```
  D + D  ->  ³He + n   (3.27 MeV)   about half of reactions
  D + D  ->  T   + p   (4.03 MeV)   about half of reactions
```

It escapes every objection in §3. The fusion power needed is startlingly small. Taking the helium-3
branch as half of all D-D reactions, and 3.65 MeV as the mean energy released per reaction:

```
  3,000 g/yr / 3.016 g/mol = 995 mol/yr
  995 mol/yr × 6.022 × 10²³ /mol = 5.99 × 10²⁶ atoms/yr
  D-D reactions = 2 × 5.99 × 10²⁶ = 1.20 × 10²⁷ /yr
  per second = 1.20 × 10²⁷ / 3.156 × 10⁷ = 3.80 × 10¹⁹ /s
  3.80 × 10¹⁹ × 3.65 MeV × 1.602 × 10⁻¹³ J/MeV = 2.22 × 10⁷ W
```

**22.2 MW of D-D fusion power would supply the mission floor.** The obstacle is the gain at which that
power has to be produced, because the input scales as the fusion power divided by the machine gain:

| Machine gain Q(D-D) | Input power for 3 kg/yr |
|---|---|
| 0.001 | 22,200 MW |
| 0.01 | 2,220 MW |
| 0.1 | 222 MW |
| 1.0 | 22 MW |

And D-D is far harder than D-T at the same conditions. Using Maxwellian reactivities near 50 keV, with
the factor of two that like-species reactions gain from the n²/2 density term:

```
  8.7 × 10⁻²² / 1.2 × 10⁻²³ = 72.5          reactivity ratio
  17.6 / 3.65 = 4.82                        energy per reaction ratio
  72.5 × 4.82 / 2 = 175                     D-T power density advantage
```

So **Q(D-D) = 0.1 demands roughly the confinement quality of Q(D-T) = 17.5**, which is well beyond
ITER's design point and far beyond anything demonstrated. The route that escapes the tritium inventory
requires the working high-gain fusion it was meant to substitute for. It is not a stopgap; it is the
destination.

---

## 6. Origin C by accelerator: ⁶Li(p,α)³He and the thick-target ceiling

[13-neutron-free-routes](13-neutron-free-routes.md) §4 identifies this reaction and it is the most
attractive on paper anywhere in the set: direct helium-3, no tritium, no free neutron, exothermic at
Q = +4.02 MeV, and MeV protons rather than a GeV accelerator.

It is closed by a general property of charged-particle production rather than by anything specific to
lithium. **In a thick target, protons lose energy to atomic electrons thousands of times faster than
they undergo nuclear reactions**, so the reactions-per-incident-particle yield is pinned near 10⁻⁴
whatever the beam. For 95% enriched lithium metal and a 2 MeV proton, taking 100 MeV cm²/g as the mass
stopping power and 100 mb as the cross-section:

```
  0.534 g/cm³ / 6.05 g/mol × 6.022 × 10²³ /mol × 0.95 = 5.05 × 10²² /cm³
  range = 2 MeV / (100 MeV cm²/g × 0.534 g/cm³) = 0.0375 cm
  yield = 0.0375 cm × 5.05 × 10²² /cm³ × 1.0 × 10⁻²⁵ cm² = 1.89 × 10⁻⁴
  beam energy per atom = 2 MeV / 1.89 × 10⁻⁴ = 10,580 MeV
```

**About 10.6 GeV of beam per helium-3 atom, to liberate a reaction energy of 4.02 MeV**, an energy
return of order 10⁻⁴. The nominal exothermicity is irrelevant because the beam pays for stopping, not
for the reaction. Scaled to the mission:

| Assumed cross-section | Beam energy per atom | Input power for 3 kg/yr |
|---|---|---|
| 10 mb | 106 GeV | 322 GW |
| 100 mb | 10.6 GeV | 32 GW |
| 1,000 mb, generous | 1.1 GeV | 3.2 GW |

This reproduces the independently derived rate in [13-neutron-free-routes](13-neutron-free-routes.md)
§5 to within an order of magnitude, which is the check that the method is sound. **⁶Li(p,α)³He is a
milligram-per-year reaction.** It is why medical isotopes come from accelerators and bulk isotopes come
from reactors, and no accelerator improvement addresses it, because the loss is to atomic electrons
rather than to inefficiency.

---

## 7. Origin D: extraction, the only route that reaches the mission

[11-alternative-routes](11-alternative-routes.md) §3.4 closes lunar regolith on thermal grounds alone,
at 16 to 39 MWh per gram merely to heat the regolith enough to release the implanted helium, before
excavation or transport. Nothing here revisits it.

Natural helium is different, and it is the one route in this assessment that reaches 3 kg/yr.
[11-alternative-routes](11-alternative-routes.md) §3.5 gives world helium production as
7.1 × 10⁹ mol/yr and the contained helium-3 as 2.2 kg/yr at an abundance of 10⁻⁷ and 21.5 kg/yr at
10⁻⁶. The fraction of that stream the mission floor would consume:

```
  at 10⁻⁶: 995 mol/yr / (7.1 × 10⁹ mol/yr × 1.0 × 10⁻⁶) = 0.140
  at 10⁻⁷: 995 mol/yr / (7.1 × 10⁹ mol/yr × 1.0 × 10⁻⁷) = 1.40
```

**So 3 kg/yr means isotopically processing 14% of world helium production at the optimistic abundance,
and more than all of it at the pessimistic one.** The abundance therefore decides whether the route
exists, and it spans the deciding order of magnitude.

What makes it the strongest of the four regardless is that the physics is already free. There is no
tritium, no holding time, no inventory and no reactor, and helium liquefaction plants concentrate
helium-3 as a thermodynamic consequence of separating helium at all, because helium-3 boils at 3.19 K
against helium-4's 4.22 K. Per-stage separation factors for cryogenic helium distillation are large
compared with uranium enrichment. The infrastructure exists and only the economics are missing, which
is why §3.5 calls it a price-elastic reserve rather than a production programme.

**It is bounded above by the natural gas industry rather than by demand**, so it cannot be scaled by
wanting more. That is a real limit, and it still leaves extraction as the only family that touches the
mission band at all.

---

## 8. Verdict

**No route assessed in this repository reaches 3 kg/yr of helium-3, and the reasons are categorical
rather than technological.**

| Origin | Best case against the mission | Closed by |
|---|---|---|
| A, tritium decay | reachable in principle, unlicensable in practice: 53.4 kg of tritium held | the decay constant, a weak-interaction property |
| B, ⁴He(γ,n) | short by more than 10¹¹, and co-produces tritium by construction | threshold physics and the lower proton channel |
| C, D-D fusion | 22.2 MW of fusion power, but at Q(D-D) equivalent to Q(D-T) = 17.5 | circular; it needs the fusion it substitutes for |
| C, ⁶Li(p,α) | 32 GW of beam power for 3 kg/yr | thick-target yield near 10⁻⁴ |
| D, extraction | **14% of world helium production at 10⁻⁶ abundance** | the size of the natural gas industry |

Three implications follow, and they are the reason this section is worth its length:

1. **Fission has no path to kilogram-scale helium-3.** Its only access is family A, and family A is
   closed by a constant of nature. The absence of breeder reactors supplying helium-3 is not an
   oversight in the industry.
2. **A fusion developer's helium-3 strategy is offtake plus its own D-D breeding**, not a reactor.
   Extraction is the only external route with the scale, and it is a separation and contracts problem.
3. **This does not touch the VHTR, the laser array, the coherent combining or the gamma source.** The
   verdict is on one mission, reached by arithmetic. [14-surviving-mission](14-surviving-mission.md)
   is unaffected, and so is the reason the array is worth building.

The lithium-6 route remains what [11-alternative-routes](11-alternative-routes.md) §4 says it is: the
strongest helium-3 option in this repository, and the right answer for the existing
instrumentation-scale market measured in grams. This section adds only that the market it serves is
the one it is sized for, and that no amount of scaling moves it to the other one.

---

## Open questions

- [ ] **The ⁶Li(p,α)³He cross-section used in §6 is assumed at 100 mb, not read.** The same gap is
      recorded in [13-neutron-free-routes](13-neutron-free-routes.md). The conclusion survives three
      orders of magnitude of error in it, so this is a precision question rather than a verdict
      question, but the table should carry measured values.
- [ ] **The proton mass stopping power in §6 is a round 100 MeV cm²/g rather than a tabulated value.**
      A stopping-power table for lithium at 0.5 to 3 MeV would replace both it and the single-energy
      treatment, which ignores the cross-section's variation over the slowing-down range.
- [ ] **The helium-3 abundance in natural helium is the number that decides whether §7 has a route at
      all**, and it is quoted across the order of magnitude that decides it. Abundances are measured
      per field and vary with the radiogenic helium-4 fraction, so a single world figure may not be the
      right form for the question.
- [ ] **The D-T to D-D power density ratio in §5 is evaluated at a single temperature.** A real
      comparison optimises each reaction over its own temperature profile and confinement, and 175 is
      an estimate of the penalty rather than a calculated one.
- [ ] **The ITER site tritium inventory used for comparison in [00-summary](00-summary.md) §15 is
      quoted from memory at about 4 kg and has not been verified against a licensing document.** It
      carries no derivation in this repository, and the §3.2 comparison column should name a source or
      drop the comparison.
- [ ] **Nothing here establishes what cryogenic helium isotope separation actually costs** at the
      scale §7 needs. That number, not the physics, is what decides the only surviving route, and it is
      outside this repository's competence as currently written.
