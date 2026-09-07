# He-3 Programme - 01 Overview

This section states what the programme is for, why helium-3 is worth producing at all, why it is
scarce, and what the system looks like once the physics of the originating concept note has been
corrected. It sets out the mission in two halves - a gamma-ray source mission that is achievable and
a production mission that is not, and has been reassigned - gives the corrected block architecture
including the GeV accelerator the original diagram omitted, and records the design decisions that the
rest of the set builds on. All numbers here come from [00-summary](00-summary.md).

---

## 1. Mission

### 1.1 Why helium-3

Deuterium-helium-3 fusion is the reaction that makes fusion power look like an electrical machine
rather than a boiler:

```
  D + ³He  ->  ⁴He (3.6 MeV)  +  p (14.7 MeV)      Q = 18.353 MeV
```

Both products carry charge. That single fact is the whole argument:

- **Direct conversion becomes possible.** Charged products can be decelerated against an
  electrostatic field, or their expansion can induce a current in a coil, converting kinetic energy
  to electrical energy without a working fluid, a turbine or a Carnot limit. Nominal efficiencies
  quoted for such schemes are 60-80% against 35-45% for a thermal cycle. Helion Energy is the
  best-known commercial pursuit of this route and TAE Technologies of the related p-¹¹B case.
- **The primary channel emits no neutron.** Nothing in the reaction above activates the first wall,
  damages the structure, or needs to be bred.

Contrast deuterium-tritium, the reaction every mainstream tokamak and laser-fusion programme is
built around:

```
  D + T  ->  ⁴He (3.5 MeV)  +  n (14.1 MeV)        Q = 17.59 MeV
```

Eighty percent of the yield leaves as a 14.1 MeV neutron.

### 1.2 What the D-T neutron actually costs

The neutron is not merely an inconvenience to be shielded. It sets the material lifetime, the fuel
cycle, the maintenance concept and the power conversion architecture of the entire plant.

| Cost | Mechanism | Scale |
|---|---|---|
| **First-wall damage** | 14.1 MeV is above the (n,2n), (n,p) and (n,α) thresholds in every structural steel. Displacement cascades plus transmutation-produced helium and hydrogen in the lattice give swelling, hardening and embrittlement | roughly 10 dpa per MW·yr/m² of wall loading, so 10-30 dpa per full-power year at 1-2 MW/m²; helium production of order 10-15 appm per dpa against 0.1-0.5 for a fission spectrum |
| **Activation and waste** | transmutation of Fe, Ni, Co, Nb in the structure into Mn-54 (312 d), Co-60 (5.27 yr) and a long tail | the vessel internals become an intermediate-level waste stream; component life is set by damage, not by wear |
| **Tritium breeding** | tritium has a 12.32 yr half-life and no natural terrestrial supply, so it must be bred in situ from ⁶Li(n,α)T and ⁷Li(n,n'α)T with a breeding ratio above unity | a lithium blanket, a neutron multiplier (Be or Pb), an extraction and permeation-control plant, and a licensed multi-kilogram tritium inventory, all inside the neutron field they depend on |
| **Remote maintenance** | activated in-vessel structures cannot be approached | every in-vessel component change becomes a remote-handling operation, which is the dominant driver of plant availability |
| **Thermal conversion anyway** | 80% of the yield arrives as neutron kinetic energy, which is heat | you are back to a Rankine or Brayton cycle at 35-45%, so the direct-conversion advantage is lost even before the neutron damage is counted |

Removing the neutron removes all five at once. That is why helium-3 is interesting enough to justify
a programme aimed at making it.

### 1.3 The caveat that has to be stated

D-³He is **low-neutron, not no-neutron**, and honesty about that is load-bearing for everything
below.

- Any deuterium-bearing plasma also burns D+D, which branches roughly evenly into
  T (1.01 MeV) + p (3.02 MeV) and ³He (0.82 MeV) + n (2.45 MeV). The tritium from the first branch
  then burns with deuterium and produces 14.1 MeV neutrons after all. Careful fuel management (³He-rich
  mixtures, prompt tritium removal) suppresses this to a few percent of the D-T neutron power rather
  than to zero.
- The D-³He cross-section peaks near 200 keV of centre-of-mass energy, so the required ion
  temperature is several times that of D-T, and bremsstrahlung losses scale unfavourably at that
  temperature. D-³He is a harder plasma-physics problem, not an easier one.

Neither point is this programme's to solve. Both are recorded because they set the value of the
product: the customer for helium-3 is buying a large reduction in neutron flux, not its abolition.
[02-nuclear-physics](02-nuclear-physics.md) shows that the photodisintegration route emits exactly
one neutron per helium-3 atom it makes, which means the route being proposed here moves the neutron
from the reactor to the fuel factory rather than eliminating it. That is still a real gain, because a
4-5 MeV neutron does far less damage than a 14.1 MeV one, but it is not the clean story the concept
note told.

### 1.4 How much helium-3 would actually be needed

A useful scale, derived from the numbers above rather than quoted:

```
  1 GW(e) at 60% direct conversion  ->  1.67 GW of fusion power
  18.353 MeV = 2.940e-12 J per reaction
  reaction rate = 1.67e9 / 2.940e-12 = 5.68e20 /s
  per year      = 5.68e20 x 3.156e7  = 1.79e28 reactions
                = 2.98e4 mol         = 89.8 kg of ³He
```

**About 90 kg of helium-3 per gigawatt-electric per year.** Hold that against a world supply measured
in single kilograms per year, and the scale of the problem is set. The originating concept note's
50-100 g/day target is 18-37 kg/yr, which is a fifth to two-fifths of one gigawatt plant. The ambition
was correctly sized to the need; it is the route that does not reach.

---

## 2. The scarcity problem

### 2.1 There is no natural terrestrial source worth mining

| Source | ³He/⁴He ratio | What one gram would cost you |
|---|---|---|
| Atmosphere | 1.384 × 10⁻⁶ (helium itself is 5.24 ppm of air) | ³He is 7.3 × 10⁻¹² of air by volume, so a gram needs about 1.0 × 10⁹ m³ of air processed, a cube a kilometre on a side |
| Crustal and natural-gas helium | ~10⁻⁸ to 10⁻⁷, because crustal helium is radiogenic ⁴He from alpha decay | 13-130 tonnes of separated helium per gram of ³He, at an isotopic separation factor set by cryogenic distillation of two chemically identical noble gases |
| Lunar regolith | solar-wind implanted, **4-10 ppb by mass** in mature mare soils | **100-250 tonnes of regolith per gram** at full recovery, released by heating to roughly 700 °C. [11-alternative-routes](11-alternative-routes.md) §3.4 works the full range, and adds the energy cost: 16-39 MWh of heat per gram |

The natural-gas figure is worth a second look, because it is not absurd on its face: world helium
production of order 29,000 tonnes per year at a ratio of 10⁻⁷ contains a couple of kilograms of
helium-3, which is the same order as the entire current supply. The obstacle is not the inventory but
the separation: extracting a 10⁻⁷ isotopic impurity from a noble gas is a cost problem governed by
the separation factor, not by the amount present. It is done, at gram scale, for research purposes.

The lunar proposal is the one that gets the attention, and it is worth being precise about why it is
unsatisfying. It is not wrong physics. At 4-10 parts per billion, the helium-3 really is there and
really does come off on heating. Supplying a single gigawatt plant at 90 kg/yr means excavating,
heating and processing of order 10⁷ tonnes of regolith per year on the Moon, which is a large
terrestrial open-pit mine's throughput delivered to a body with no atmosphere, no water and a
two-week night. **It is a mining and logistics problem, not a physics problem**, which is exactly why
it stays permanently twenty years away.

### 2.2 The actual supply is tritium decay, and it is a neutron-economy problem

Essentially all helium-3 in commerce comes from the beta decay of tritium held in weapons stockpiles:

```
  T  ->  ³He + e⁻ + ν̄     t½ = 12.32 yr,  λ = ln2 / 12.32 = 0.0563 /yr
```

The arithmetic is unforgiving and completely determines the market:

```
  ³He output per year = 0.0563 x (tritium inventory)
  a 20-30 kg stockpile therefore yields 1.1-1.7 kg/yr
```

That reproduces the observed single-kilogram-per-year world supply, and it explains why the supply is
declining: stockpiles are being drawn down rather than expanded, and demand from neutron detection,
cryogenics and medical imaging has been rising since the mid-2000s.

The important structural point is this. **Helium-3 supply is a neutron supply problem wearing a
disguise.** Tritium is made by irradiating lithium in a reactor; the tritium then decays to helium-3
on a 12.32 year clock. There is no path to more helium-3 that does not begin with more neutrons
striking lithium, unless you can break helium-4 apart directly. Breaking helium-4 apart directly is
what this programme set out to do, and it is why the idea deserved a serious look rather than a
dismissal. [11-alternative-routes](11-alternative-routes.md) returns to the lithium path and finds it
two to three orders of magnitude better than the optimistic ceiling of the laser route.

---

## 3. The concept, in one paragraph

Rather than build one impossibly expensive ultra-intense laser, build many modest fibre lasers and
combine them coherently, so that the intensity challenge is distributed
across many cheap, individually unremarkable, mass-manufacturable units. The obstacle to doing this
has never been the lasers; it is that keeping a large array phase-locked and pointed at a common focus
is a high-dimensional, drifting, non-convex control problem that grows worse with element count, and
which conventional wavefront-sensor-and-servo approaches scale into poorly. The proposal is to solve
that alignment problem with a learned controller driven by a camera looking at the combined beam,
which turns an optics-metrology problem into a machine-learning problem where cheap sensing and cheap
actuation are acceptable. **That idea is sound, unsolved, publishable and independent of what the
array is eventually pointed at**, and it is the reason the programme survives its own physics review.

How many lasers, and how much energy each, is not settled. This document set describes the
originating reference case of 100-500 elements at 10 W and 0.10 J per pulse, while
[04-laser-array](04-laser-array.md) §2.4 concludes that the buildable machine is of order 10⁴ fibre
channels at ~1 mJ each. Both cases carry the same 1-5 kW of total average power, so nothing in the
feasibility assessment moves either way. [00-summary](00-summary.md) §3 carries both and records the
decision as open.

---

## 4. What changed from the originating concept note

Four things changed. Three are numerical corrections and one is architectural. They are stated here
once, without apology, because every later section depends on them.

### 4.1 The three numerical corrections

| # | The concept note said | The corrected value | Why it matters |
|---|---|---|---|
| 1 | photodisintegration threshold **19.8 MeV** for ⁴He(γ,n)³He | **20.578 MeV**. 19.814 MeV is the ⁴He(γ,p)³H channel | a beam tuned to 19.8 MeV cannot make helium-3 at all. It makes **tritium**, which is a different product with a different licence, a different market and a 12.32 yr wait attached. See [02-nuclear-physics](02-nuclear-physics.md) |
| 2 | giant dipole resonance peak cross-section **~8 mb** | **~1.3 mb** near 26-28 MeV for (γ,n) | helium-4 is the most tightly bound light nucleus and is anomalously weak in the GDR region; 8 mb is representative of heavier nuclei. The reacting fraction in any target falls by roughly six times |
| 3 | focal intensity **~10²⁴ W/cm²** | **1.3 × 10²² W/cm²** for 100 lasers into a 1 µm spot | the note's own stated power, repetition rate and pulse duration give the lower figure. The N² framing is the likely source of the error: coherent combination multiplies **peak intensity** by N² relative to one beam filling the same aperture, but multiplies **available power** only by N. Both are true; only the second constrains an energy budget |

All three errors ran in the optimistic direction, which is the normal failure mode and the reason
[00-summary](00-summary.md) exists as a single canonical number set.

### 4.2 The architectural change

**Multi-photon absorption is replaced by single-photon inverse Compton scattering off a
laser-wakefield electron beam.**

The concept note proposed generating 2.35 MeV photons and having a helium-4 nucleus absorb about ten
of them coherently to reach the breakup threshold. That does not work, and the reason is structural
rather than a matter of degree: in atoms, multiphoton absorption works because there is a dense ladder
of real intermediate states to climb. Helium-4 has **no bound excited state at all**. Its first
excited state is a resonance at roughly 20.21 MeV, sitting essentially at the breakup threshold, and
it holds the largest first-excitation gap of any nucleus. There is no ladder. The full argument, with
the order-of-magnitude estimate of the perturbative amplitude, belongs to
[03-feasibility](03-feasibility.md) and is not repeated here.

The replacement is the standard and demonstrated way to make photons of this energy: accelerate
electrons to about a GeV, collide a laser pulse head-on with them, and take the backscattered photon,
whose energy scales as roughly 4γ²E_laser. This is how the HIgS facility and the ELI-NP gamma beam
system produce quasi-monochromatic MeV-class photons. **It preserves the user's architecture**: the
laser array is still the primary machine, still needs coherent combining, and still needs the
alignment controller that was the original insight.

### 4.3 What survives, and why the array turns out to be the right driver

The strategic insight survives all four changes intact:

> Instead of pursuing a single ultra-intense laser, distribute the intensity challenge across
> hundreds of phase-locked modest-power lasers, and use AI to solve the alignment problem
> autonomously.

More than survives: the corrected architecture makes the array *more* necessary, not less. The array's
peak power is 100 TW at 100 elements and 500 TW at 500, and that is squarely the power range in which
laser-wakefield acceleration reaches GeV electron energies in centimetres of plasma rather than the
tens of metres a conventional radio-frequency linac needs. A coherently combined fibre array driving a
laser-plasma accelerator is precisely the concept behind the ICAN and XCAN programmes, so the idea has
a real lineage in the field. **The concept note had the right machine attached to the wrong nuclear
endpoint.** Correcting the endpoint leaves the machine standing and gives it a mission it is
genuinely well matched to.

---

## 5. System architecture

The originating architecture diagram had six blocks and showed the infrared-to-gamma conversion as a
single box labelled "Compton Backscatter X-ray Converter", positioned as though it were an optical
component sitting between two others. It is a GeV-class particle accelerator. It dominates the cost,
the footprint, the shielding envelope and the technical risk of the whole system, and its omission was
the most consequential gap in the original design.

```
        +-----------------------------------------------------------+
        |  1. FIBRE LASER ARRAY                                     |
        |     100-500 elements, 10 W average each, ~1.03 um         |
        |     100 fs, 100 Hz, 0.10 J per element per pulse          |
        |     (the per-element pulse energy is the open problem)    |
        +-----------------------------------------------------------+
                                  |
                                  v
        +-----------------------------------------------------------+
   +--->|  2. COHERENT COMBINING STAGE                              |
   |    |     tiled aperture, actively phase-locked                 |
   |    |     10 J (100 elements) / 50 J (500) per pulse            |
   |    |     100 TW / 500 TW peak power                            |
   |    +-----------------------------------------------------------+
   |                              |
   |             +----------------+-----------------+
   |             |                                  |
   |             v                                  v
   |    +--------------------------+   +----------------------------+
   |    |  3. LASER-WAKEFIELD      |   |  scattering arm            |
   |    |     ELECTRON ACCELERATOR |   |  split before the plasma,  |
   |    |     gas jet / capillary  |   |  delayed to meet the bunch |
   |    |     cm-scale plasma      |   +----------------------------+
   |    |     1.06-1.21 GeV bunch    |                 |
   |    +--------------------------+                 |
   |             |                                   |
   |             +----------------+------------------+
   |                              |
   |                              v
   |    +-----------------------------------------------------------+
   |    |  4. INVERSE COMPTON SCATTERING STAGE                      |
   |    |     head-on collision, E_gamma ~ 4 x gamma^2 x E_laser    |
   |    |     collimation sets the delivered bandwidth              |
   |    +-----------------------------------------------------------+
   |                              |
   |                              v
   |                   GAMMA BEAM, 20-27 MeV
   |                   quasi-monochromatic, collimated
   |                              |
   |                              v
   |    +-----------------------------------------------------------+
   |    |  5. LIQUID HELIUM-4 TARGET                                |
   |    |     He-II ~2 K, 2.18e22 /cm3, ~1 m path                   |
   |    |     (g,n) -> He-3 + n     (g,p) -> H-3 + p                |
   |    |     reacting fraction 2.83e-3                             |
   |    +-----------------------------------------------------------+
   |                  |                             |
   |                  v                             v
   |    +--------------------------+   +----------------------------+
   |    |  6. PRODUCT SEPARATION   |   |  7. NEUTRON SHIELDING      |
   |    |     cryogenic separation |   |     and gamma beam dump    |
   |    |     + noble-gas mass     |   |     4.29e8 n/s realistic;  |
   |    |       spectrometry       |   |     3.03e14 n/s is the     |
   |    |                          |   |     1 kW ceiling, a bound  |
   |    +--------------------------+   +----------------------------+
   |
   |    +-----------------------------------------------------------+
   +----+  8. AI ALIGNMENT CONTROLLER                               |
        |     camera -> learned model -> actuator commands, ~10 Hz  |
        |     objective: far-field concentration and ICS yield      |
        +-----------------------------------------------------------+
                                  ^
                                  |
                     diagnostics fed back to the controller:
                     combined near and far field, wakefield
                     pointing and bunch charge, ICS photon yield
```

**Blocks 1 and 2 are drawn in the originating reference case, and that case is not settled.** The
100-500 elements at 10 W and 0.10 J shown here are the concept note's own specification;
[04-laser-array](04-laser-array.md) §2.4 finds 0.10 J per fibre channel to be roughly 100 times
beyond fibre chirped-pulse amplification and recommends of order 10⁴ channels at ~1 mJ instead. The
total average power is 1-5 kW in both cases, so every rate downstream of block 2 is unchanged and
nothing in this diagram has been restaged. [00-summary](00-summary.md) §3 carries both cases and is
the place the decision will be recorded.

Two further features of this diagram differ from the original in ways worth stating explicitly.

- **Block 3 is new and it is large.** It is not a component, it is a subsystem with its own vacuum,
  gas handling, plasma diagnostics, electron spectrometer, beam dump and radiation envelope.
- **The control loop closes on the physics output, not just on the optics.** The original loop ran
  from a camera back to beam alignment. The corrected loop can also use wakefield pointing and
  measured gamma yield as its objective, which is a far stronger training signal than fringe contrast
  and is one of the more interesting parts of [07-ai-control](07-ai-control.md).

| Block | Owning section |
|---|---|
| 1, 2 Laser array and coherent combining | [04-laser-array](04-laser-array.md) |
| 3, 4 Wakefield accelerator and inverse Compton stage | [05-gamma-source](05-gamma-source.md) |
| 5, 6, 7 Target, separation, neutron handling | [06-target-and-capture](06-target-and-capture.md) |
| 8 Alignment controller | [07-ai-control](07-ai-control.md), [08-proof-of-concept](08-proof-of-concept.md) |

---

## 6. Design decisions

These mirror section 11 of [00-summary](00-summary.md). The reasoning column is the addition; if the
decision text ever diverges from the summary page, the summary page wins and the divergence is a
defect to report.

| Topic | Decision | Reasoning |
|---|---|---|
| Reaction channel | ⁴He(γ,n)³He at 20.578 MeV, single-photon | it is the only channel whose product is helium-3; the (γ,p) channel at 19.814 MeV makes tritium |
| Multi-photon absorption | **rejected** | helium-4 has no bound excited state below breakup, so there is no ladder of real intermediate states to climb. [03-feasibility](03-feasibility.md) |
| Gamma generation | inverse Compton scattering off a laser-wakefield electron beam | the demonstrated route to tunable quasi-monochromatic 10-30 MeV photons, and it uses the array as its driver rather than sidelining it |
| Electron energy | 1.06-1.21 GeV ideal; specify the accelerator to 1.25 GeV | 1.06 GeV puts the backscattered photon at the 20.578 MeV threshold; 1.21 GeV puts it at 27 MeV near the cross-section peak. The Compton recoil correction adds about 1%, taking the top of the band to ~1.22 GeV, so 1.25 GeV covers the whole range with margin |
| Target | superfluid He-II at ~2 K | 2.18 × 10²² /cm³ against 2.41 × 10²⁰ for 10 bar gas; three orders of magnitude in reacting fraction, and the only configuration worth designing around |
| Array architecture | coherently combined, tiled aperture, actively phase-locked | tiled aperture keeps per-element optics simple and makes element count a manufacturing variable rather than a redesign |
| Alignment control | learned controller, camera feedback, no wavefront sensor at proof-of-concept scale | the point of the demonstration is that commodity sensing suffices; adding a wavefront sensor at bench scale would prove a different and less interesting claim |
| Primary mission | gamma-ray source and photonuclear instrument | it is achievable with the specified hardware and has real users |
| Production mission | reassigned to the ⁶Li route hosted by the VHTR | 12-60 g/yr against ≤ 0.24 g/yr at an unreachable 100% efficiency. [11-alternative-routes](11-alternative-routes.md) |

---

## 7. Requirements

### 7.1 Gamma-source mission (primary, achievable)

The system shall:

| Ref | Requirement | Basis |
|---|---|---|
| G-1 | deliver a collimated gamma beam continuously tunable across **20-27 MeV** | spans the ⁴He(γ,n)³He threshold at 20.578 MeV to the cross-section peak at 26-28 MeV |
| G-2 | hold the tritium-to-helium-3 branching ratio at or below roughly 1.3 : 1, by centring the beam in the recommended 25-27 MeV band and delivering a few percent FWHM or better after collimation | [02-nuclear-physics](02-nuclear-physics.md) §2.2 and §5. There is **no** photon energy at which the (γ,p) channel is closed, so this is a branching requirement and never a separation one |
| G-3 | produce a 1.06-1.21 GeV electron bunch from a laser-wakefield stage driven by the combined array, with pointing and charge stability sufficient for a repeatable ICS luminosity; specify the accelerator to 1.25 GeV so the whole band is reachable once the ~1% Compton recoil correction is applied | [05-gamma-source](05-gamma-source.md), [00-summary](00-summary.md) §7 |
| G-4 | maintain coherent combination of the full array at 100 Hz with residual piston phase error at or below **λ/20 RMS** (51.5 nm at 1.03 µm), target λ/40, giving a combining efficiency of 0.91 | [04-laser-array](04-laser-array.md), [00-summary](00-summary.md) §10. The proof-of-concept bench is held to the looser π/4 rad (λ/8) acceptance bar; the two are different stages, not a conflict |
| G-5 | hold alignment autonomously, recovering from thermal and mechanical disturbance without human intervention, for at least one hour at prototype scale | inherited from the concept note's 20-beam scaling criterion |
| G-6 | measure delivered photon flux and spectrum absolutely, to a precision better than the factor of two by which existing ⁴He(γ,n)³He measurements disagree | this is the scientific deliverable, not an ancillary diagnostic |
| G-7 | contain a fast-neutron source term of **4.29 × 10⁸ n/s** and the associated activation. This is a modest laboratory term, of the same order as a sealed D-T generator, not a facility needing metres of concrete. The 1 kW ceiling of 3.03 × 10¹⁴ n/s is a stated bound and assumes 100% conversion and 100% absorption; it must not be used to size the enclosure | [02-nuclear-physics](02-nuclear-physics.md) §6, [06-target-and-capture](06-target-and-capture.md), [00-summary](00-summary.md) §6 |
| G-8 | detect helium-3 production as a **signal** rather than as a mass | see below |

Requirement G-8 is the one that replaces the production claim, and it is worth making concrete.
Taking the canonical realistic chain from [00-summary](00-summary.md) §4.2 - the 5 kW array, a
laser-to-gamma conversion efficiency of order 10⁻⁴ and the liquid-target reacting fraction of
2.83 × 10⁻³:

```
  5 kW / 3.297e-12 J        =  1.52e15 reactions/s   (the ceiling, unreachable)
  1.52e15 x 1e-4 x 2.83e-3  =  4.29e8 reactions/s    (the canonical realistic rate)
                            =  3.7e13 atoms/day  =  1.9e-10 g/day  =  68 ng/yr
```

That is under 200 picograms per day, which is nothing whatsoever as a commodity and an overwhelming
signal for a modern noble-gas mass spectrometer, whose detection limits sit around 10⁶ to 10⁸ atoms:
one second of beam time makes 4.3 × 10⁸ atoms. **The concept note's "photodisintegration signal
detected" success criterion is therefore retained essentially unchanged**; only the "50-100 grams per
day" criterion is not.

Note the denominator, because this set got it wrong once. The realistic rate is
**2.83 × 10⁻⁷ of the ceiling**, not the 10⁻⁹ an earlier draft stated: 10⁻⁹ was the shortfall against
the 50-100 g/day *target* misapplied to the ceiling. The correction is recorded in
[00-summary](00-summary.md) §4.2 and it changes no verdict. The efficiency chain used here is owned
by [03-feasibility](03-feasibility.md).

### 7.2 Production mission (reassigned)

The originating requirement was 50-100 g/day of helium-3. Against the canonical figures that means:

| Target | Reactions/s | Gamma power absorbed at threshold |
|---|---|---|
| 50 g/day | 1.16 × 10²⁰ | 381 MW |
| 100 g/day | 2.31 × 10²⁰ | 762 MW |

A 1-5 kW array cannot supply 381 MW of absorbed gamma power, and no amount of coherent combining
changes that, because combining multiplies available power by N and the N is already counted. The
requirement is therefore reassigned:

| Ref | Requirement | Owner |
|---|---|---|
| P-1 | produce helium-3 at 10 g/yr or better | ⁶Li(n,α)T breeding in a 100 MW(th) VHTR, giving 12.0 g/yr at 1% neutron capture and 59.9 g/yr at 5%. [11-alternative-routes](11-alternative-routes.md) |
| P-2 | accept a 12.32 yr delay between production and availability | intrinsic to the tritium decay clock; it is a working-capital problem, not a technical one |
| P-3 | host the breeding blanket without compromising the reactor's safety case | [../../vhtr/design/00-summary.md](../../vhtr/design/00-summary.md) and the VHTR materials and neutronics sections |

The laser programme retains no production requirement. Retaining one would be a false record of what
the machine can do, and the whole value of this document set is that the numbers are honest.

---

## Open questions

- [X] Per-element pulse energy. **Answered by [04-laser-array](04-laser-array.md) §2.4: 0.10 J per
      fibre channel is not achievable.** The B-integral and facet-damage limits are worked
      independently there and both land near a ~0.6 mJ ceiling, so the mJ scale is a physical bound
      rather than an effort problem. The recommendation is to hold total average power at 1-5 kW and
      let the channel count float to of order 10⁴ at ~1 mJ each. What remains open is not the physics
      but the programme decision, since the roadmap and this section are still staged on the
      100-500 element reference case, and the change is a two-order-of-magnitude increase in channel
      count that hits [10-economics](10-economics.md) hard. Carried in [00-summary](00-summary.md) §3.
- [ ] Whether the wakefield stage is driven by the full combined array or by a subset, and whether the
      inverse Compton scattering arm is split from the same pulse or supplied by dedicated elements.
      This determines whether the array is one machine or two.
- [ ] Repetition rate compatibility. Laser-wakefield accelerators are typically demonstrated at 1-10 Hz
      because of gas load and target replenishment; the array specification is 100 Hz. Awaiting
      assessment in [05-gamma-source](05-gamma-source.md).
- [ ] Whether the neutron produced alongside each helium-3 atom should be captured in a lithium
      blanket around the target rather than merely shielded. Capture would roughly double the eventual
      yield through the tritium decay path, at the cost of a tritium licence.
- [ ] Whether the gamma-source mission has enough independent demand to fund the programme on its own,
      absent any helium-3 claim. This is the question that decides whether the rescoping is a rescue or
      a graceful retirement, and it is a market question rather than a technical one.
- [ ] Whether the alignment controller's objective should be an optical metric or the measured physics
      output. The latter is a much sparser and noisier reward signal but is the quantity actually being
      optimised.

---

*Previous: [00-summary](00-summary.md) | Next: [02-nuclear-physics](02-nuclear-physics.md)*
