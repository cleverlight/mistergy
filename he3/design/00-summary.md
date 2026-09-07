# He-3 Programme - Design Summary

**All key numbers consolidated. Start here.** Every figure quoted anywhere in `he3/design/` comes
from this page. If a section disagrees with this page, this page is wrong or the section is - either
way it is a defect, so report it rather than reconciling it locally.

Companion to the VHTR set's [`../../vhtr/design/00-summary.md`](../../vhtr/design/00-summary.md).

---

## 1. What this programme is

**It is a gamma-ray source and photonuclear instrument programme, built on a coherently combined
laser array whose alignment is maintained by a learned controller.**

It did not start that way. It began as a scheme to produce helium-3 by photodisintegrating helium-4,
and that mission has been assessed and reassigned: the energy balance does not close, by a margin
that is thermodynamic rather than technological. [03-feasibility](03-feasibility.md) carries the
argument and [11-alternative-routes](11-alternative-routes.md) carries the replacement route. The
production claim is the thing that failed; the array, the control problem and the gamma source it can
drive are what the programme is now for, and none of them are weakened by the failure.

Ranked by confidence that the work is worth doing:

1. **AI-driven coherent beam alignment.** Real, unsolved at scale, demonstrable on a bench costing
   under $20k, and valuable to any coherent array whatever it is pointed at.
2. **A high-flux quasi-monochromatic gamma source** driven by a fibre-laser-driven wakefield stage.
3. **Measuring the ⁴He(γ,n)³He cross-section properly**, which is disputed by roughly a factor of two.
4. **Helium-3 production.** Not by this route.

## 2. The reaction

| Quantity | Value | Note |
|---|---|---|
| Target reaction | ⁴He(γ,n)³He | helium-4 plus a photon gives helium-3 plus a free neutron |
| **(γ,n) threshold** | **20.578 MeV** | this is the reaction this programme wants |
| (γ,p) threshold | 19.814 MeV | competing channel, gives **tritium** plus a proton, not helium-3 |
| (γ,d) threshold | 23.847 MeV | second competing channel, two deuterons; isospin-forbidden for E1 |
| Energy per reaction at threshold | 3.297 × 10⁻¹² J | 20.578 MeV |
| Peak (γ,n) cross-section | ~1.3 mb near 26-28 MeV | experimentally disputed by ~2×, see [02](02-nuclear-physics.md) |
| Recommended operating band | **25-27 MeV**, design point 26 MeV | [02-nuclear-physics](02-nuclear-physics.md) §5 |
| Products | ³He (stable) + 1 neutron | the neutron is a shielding and activation problem, not a free good |

**Two corrections to the originating concept note, both load-bearing.** It gave the threshold as
19.8 MeV and the peak cross-section as 8 mb. 19.814 MeV is the *proton* channel, which produces
tritium rather than helium-3; the helium-3 channel starts 0.76 MeV higher at 20.578 MeV. And helium-4
is anomalously *weak* in the giant dipole resonance region - roughly 1.3 mb, not 8 mb - because it is
the most tightly bound light nucleus there is. The 8 mb figure is representative of heavier nuclei.
Both errors ran in the optimistic direction.

**There is no photon energy at which only the helium-3 channel is open.** The proton channel opens
0.764 MeV lower and stays open everywhere above it, so tritium is always co-produced and the design
variable is the tritium-to-helium-3 branching ratio, never its elimination. Section 02 estimates
roughly 5 tritium per helium-3 at 21 MeV, falling to about 1.2 near the cross-section peak, which is
the main reason the recommended band sits high rather than at threshold.

## 3. Laser array specification

**The array specification is unsettled, and this is the programme's largest open design decision.**
Two cases are carried below. The reference case is the originating specification; the recommended
case is what [04-laser-array](04-laser-array.md) concludes is actually buildable. Documents in this
set still describe the reference case in places, because restaging the roadmap around the recommended
case has not been done and is not a change to make silently.

| Parameter | Reference case (originating) | Recommended case ([04](04-laser-array.md) route (a)) |
|---|---|---|
| Channel count | 100-500 | **~10⁴** |
| Per-channel pulse energy | 0.10 J | **~1 mJ** |
| Per-channel average power | 10 W | ~0.1 W |
| Total average power | 1-5 kW | 1-5 kW (unchanged) |
| Repetition rate | 100 Hz | 100 Hz |
| Pulse duration | 100 fs | 100 fs |
| Array pulse energy | 10 J (100 ch) / 50 J (500 ch) | 10 J at 10⁴ channels |
| Peak power | 100 TW / 500 TW | 100 TW |
| Buildable as fibre? | **No** | Yes |

**Why the reference case fails.** 0.10 J in 100 fs per element is roughly 100× more pulse energy than
fibre chirped-pulse amplification delivers. Section 04 works the B-integral and facet-damage limits
independently and both land near a ~0.6 mJ ceiling, so the mJ scale is a physical bound rather than an
effort problem. The total average power is what the energy budget depends on, and it is the same in
both cases - so **nothing in the feasibility assessment moves** whichever case is adopted. What moves
is capital cost, which is dominated by channel count, and the alignment problem, which gets much
harder at 10⁴ independent phases and therefore makes the control work more valuable, not less.

Section 04 also records that the obvious escape - lengthening the compressed pulse - does not work:
the amplifier sees the stretched nanosecond pulse, so it relieves only the compressor, and it hurts
the wakefield stage by forcing lower plasma density and higher matched power.

| Focal intensity, reference case | 1 µm spot | 3 µm spot |
|---|---|---|
| 100 channels | 1.3 × 10²² W/cm² | 1.4 × 10²¹ W/cm² |
| 500 channels | 6.4 × 10²² W/cm² | 7.1 × 10²¹ W/cm² |

**Third correction to the concept note.** It quoted ~10²⁴ W/cm². The stated power, rep rate, pulse
duration and a diffraction-limited 1 µm spot give 1.3 × 10²² W/cm², about 80× lower. The N² framing is
the likely source: coherent combination multiplies *peak intensity* by N² relative to a single beam
filling the same aperture, but it multiplies *available power* only by N. Both statements are true and
only the second constrains the energy budget.

## 4. Production rate

### 4.1 Absolute ceiling

Assumes **100% conversion of laser light into threshold-energy gammas and 100% of those gammas causing
a reaction**. Neither is approachable; this is a bound, not an estimate.

| Gamma power at threshold | Reactions/s | He-3 out |
|---|---|---|
| 1 kW | 3.03 × 10¹⁴ | 0.131 mg/day (0.048 g/yr) |
| 5 kW | 1.52 × 10¹⁵ | 0.656 mg/day (0.240 g/yr) |

### 4.2 Realistic rate

Chain: array average power × laser-to-gamma conversion × target reacting fraction, into a liquid
He-II target (reacting fraction 2.83 × 10⁻³).

| Array | Conversion | Reactions/s | He-3 out |
|---|---|---|---|
| 1 kW | 10⁻⁴ | 8.58 × 10⁷ | 1.36 × 10⁻⁸ g/yr (13.6 ng/yr) |
| **5 kW** | **10⁻⁴** | **4.29 × 10⁸** | **6.78 × 10⁻⁸ g/yr (67.8 ng/yr)** |
| 5 kW | 10⁻⁵ | 4.29 × 10⁷ | 6.78 × 10⁻⁹ g/yr (6.8 ng/yr) |

**The 5 kW, 10⁻⁴ row is canonical.** Every "realistic rate" anywhere in this set means 4.29 × 10⁸
reactions/s and 6.78 × 10⁻⁸ g/yr unless it says otherwise.

**Correction, recorded because it was wrong in this set's first draft.** Several sections stated the
realistic output as "~10⁻⁹ of the ceiling", giving 0.24 ng/yr and 3.03 × 10⁵ reactions/s. That applied
the shortfall against the 50-100 g/day *target* to the *ceiling* instead, which is the wrong
denominator and wrong by a factor of about 280. The realistic rate is **2.83 × 10⁻⁷ of the ceiling**.
The verdict does not move: the shortfall against the target is unchanged at 2.7 × 10¹¹.

### 4.3 Against the originating target

| Target | Reactions/s needed | Gamma power absorbed at threshold |
|---|---|---|
| 50 g/day | 1.16 × 10²⁰ | **381 MW** |
| 100 g/day | 2.31 × 10²⁰ | **762 MW** |

A 1-5 kW array is short of its own stated 50-100 g/day target by a factor of roughly 10⁵ **at the
thermodynamic floor**, before any efficiency, and by **2.7 × 10¹¹** at the canonical realistic rate.

### 4.4 Conversion efficiency: which figure is canonical

**10⁻⁴ is the canonical optimistic bound and is what the rate table above uses.** Section
[05-gamma-source](05-gamma-source.md) §6.2 carries an illustrative calculation landing near
**10⁻⁵**, an order of magnitude worse, and section 05's own ceiling with every improvement applied is
10⁻⁴ to 10⁻³. So 10⁻⁴ should be read as the best defensible case rather than an expectation. Where a
section needs the pessimistic case, use the 10⁻⁵ row and say so. The 10⁻² figure that appears as an
optimistic row in [03-feasibility](03-feasibility.md) Part 2 is above section 05's own ceiling and is
retained only as an upper bound on the argument, not as a physical estimate.

## 5. Target interaction

| Configuration | Number density | Path | Fraction of gammas reacting |
|---|---|---|---|
| He-4 gas, 10 bar, 300 K | 2.41 × 10²⁰ /cm³ | 10 cm | 3.14 × 10⁻⁶ |
| **Liquid He-4 (He-II, ~2 K)** | **2.18 × 10²² /cm³** | 100 cm | **2.83 × 10⁻³** |
| Liquid He-4 (He-I, 4.2 K, 1 atm) | 1.88 × 10²² /cm³ | 100 cm | 2.44 × 10⁻³ |

Computed as n·σ·L at σ = 1.3 mb. Liquid helium-4 buys three orders of magnitude and is the only
target configuration worth designing around.

**The canonical target is superfluid He-II at about 2 K, not normal liquid at 4.2 K.** An earlier
draft of this page carried the density 2.18 × 10²² /cm³ under a "4.2 K" label, which was wrong: that
density is 0.145 g/cm³, which is He-II below the lambda point. Normal liquid at 4.2 K and one
atmosphere is 0.125 g/cm³, or 1.88 × 10²² /cm³. The value was right and the label was not, so every
figure derived from 2.18 × 10²² stands. Running as He-II is in any case the better choice on its own
merits, for the heat-transport and isotope-separation reasons set out in
[06-target-and-capture](06-target-and-capture.md); the cost is a pumped-helium refrigerator at 2 K
rather than 4.2 K.

## 6. Neutron source term

One neutron per reaction, so the neutron rate equals the reaction rate.

| Case | Neutron rate | Use it for |
|---|---|---|
| 1 kW ceiling | 3.03 × 10¹⁴ n/s | stating the bound only |
| 5 kW ceiling | 1.52 × 10¹⁵ n/s | stating the bound only |
| **Canonical realistic** | **4.29 × 10⁸ n/s** | **shielding, activation, facility design, detection** |

**Size the facility against the realistic rate, not the ceiling.** The ceiling assumes 100% conversion
and 100% absorption and describes a source that will not exist. A 4.29 × 10⁸ n/s source is a modest
laboratory term, not the 2 m of concrete a 3 × 10¹⁴ n/s source would need, and it should not be
tabulated alongside sealed D-T generators and research reactors as though it were comparable to them.
Section 06 already makes the analogous correction for beam heating, where the realistic deposit is
about 20 mW rather than 200 W; the same correction applies to neutrons.

This cuts both ways and the sceptical direction is the honest one: at 4.29 × 10⁸ n/s the reaction is
still comfortably detectable by neutron counting, so the *physics experiment* works even though the
factory does not.

## 7. The missing subsystem: a GeV electron accelerator

Reaching 20-27 MeV photons from a 1.03 µm laser by inverse Compton scattering needs relativistic
electrons, because the backscattered photon energy goes as ~4γ²E_laser.

| Photon target | Lorentz factor γ | Electron beam energy |
|---|---|---|
| 20.578 MeV (threshold) | 2,067 | **1.06 GeV** |
| 27 MeV (near cross-section peak) | 2,368 | **1.21 GeV** |

These are the ideal two-body values. Including the Compton recoil correction raises the required
electron energy by about 1%, so the top of the band sits nearer 1.22 GeV. **The canonical envelope is
therefore 1.06-1.21 GeV ideal, and an accelerator for this programme should be specified to 1.25 GeV
so the whole 20.578-27 MeV band is reachable with margin.** The recommended 25-27 MeV operating band
is 1.16-1.21 GeV ideal, about 1.18-1.22 GeV with recoil.

The originating architecture diagram showed the infrared-to-gamma step as a single block labelled
"Compton backscatter converter", as though it were an optical component. It is a GeV-class particle
accelerator, and it dominates the cost, footprint and complexity of the whole system.

**This is also where the programme's strongest idea lives.** The array's 100-500 TW peak power is
squarely in laser-wakefield-acceleration territory, and a laser-wakefield stage can reach 1 GeV in
centimetres rather than the tens of metres a conventional linac needs. That makes the coherently
combined fibre array not an incidental power source but the correct driver, which is precisely the
rationale of the ICAN and XCAN programmes.

## 8. Comparison: the route that actually works

All laser figures below are the **5 kW** case, for consistency.

| Route | Yield | Maturity |
|---|---|---|
| Laser photodisintegration, ceiling | 0.240 g/yr at unreachable 100% efficiency | concept |
| Laser photodisintegration, realistic | **6.78 × 10⁻⁸ g/yr (68 ng/yr)** | concept |
| **Li-6(n,α)T → ³He in a 100 MW(th) VHTR** | **12-60 g/yr** at 1-5% neutron capture | established physics, engineering problem |
| Tritium decay from weapons stockpiles | current world supply, single-kg/yr scale, declining | existing, not expandable |

The lithium route is **50 to 250×** the laser route's unreachable ceiling and **eight to nine orders of
magnitude** above its realistic rate. It is the strongest option in this repository.

**It is still not a fusion-fuel supply.** A D-³He plant needs of order 90 kg of helium-3 per GWe-year
([01-overview](01-overview.md) §1.4). At 12 g/yr a 100 MW(th) VHTR supplies 1.3 × 10⁻⁴ of one
GWe-year, so fuelling a single gigawatt-electric D-³He plant would take about **7,500** such reactors
at 1% capture, or about **1,500** at the 5% case section 11 itself calls unaffordable. The lithium
route addresses the existing instrumentation-scale market for helium-3. It does not address fusion.

## 9. Economics reference values

One set of figures, so sections 10 and 11 cannot tell different stories.

| Quantity | Canonical value | Note |
|---|---|---|
| He-3 market price | $1,000-2,000 per litre at STP | 0.135 g/litre, so **$7,400-14,900/g** |
| He-3 working reference | **~$10,000/g** | approximate and volatile; does not change any verdict |
| Electricity price | **$50/MWh** sale price | the VHTR's ~$88/MWh LCOE is a **cost**, never a revenue |
| Proof-of-concept bench | **$16,700** hardware | 08's itemised BOM including the piezo stage; cap $20,000 |
| Lunar regolith grade | 4-10 ppb by mass in mature mare | **100-250 t of regolith per gram** at full recovery |

The concept note's "~$12,000" bench figure is superseded: its eight rows sum to $12,200 and omit fine
phase actuation entirely, without which the experiment cannot demonstrate phase locking at all. See
[08-proof-of-concept](08-proof-of-concept.md) §5.

## 10. Phase-error criteria

Two different bars for two different stages. They are not in conflict and neither should be quoted
without saying which it is.

| Bar | Value | Applies to |
|---|---|---|
| **Full-system combining requirement** | **λ/20 RMS** (51.5 nm at 1.03 µm), target λ/40 | the 100-500 or 10⁴ channel array; gives 0.91 combining efficiency |
| **Proof-of-concept acceptance** | **< 1 rad RMS, target π/4 rad (λ/8)** | the 5-10 beam bench in [08](08-proof-of-concept.md) |

## 11. Key decisions made

| Topic | Decision |
|---|---|
| Programme mission | Gamma-ray source and photonuclear instrument |
| Production mission | Reassigned to the Li-6 route, hosted by the VHTR |
| Reaction channel | ⁴He(γ,n)³He at 20.578 MeV, single-photon, not multi-photon |
| Multi-photon absorption | **Rejected.** He-4 has no bound excited state below breakup; there is no ladder to climb |
| Operating band | 25-27 MeV, design point 26 MeV |
| Tritium co-production | Unavoidable; managed as a branching ratio, never eliminated |
| Gamma generation | Inverse Compton scattering off a laser-wakefield electron beam |
| Electron energy | 1.06-1.21 GeV ideal; specify the accelerator to 1.25 GeV |
| Target | Superfluid He-II at ~2 K (2.18 × 10²² /cm³); gas targets are three orders of magnitude worse |
| Array architecture | Coherently combined, tiled aperture, actively phase-locked |
| **Channel count** | **Unsettled.** 04 recommends ~10⁴ × 1 mJ; the roadmap is still staged on 100-500 × 0.10 J |
| Alignment control | Learned controller, camera feedback, no wavefront sensor at PoC scale |

## 12. Sections

| # | Section | Summary |
|---|---|---|
| 00 | This page | All key numbers |
| 01 | [Overview](01-overview.md) | Mission, architecture, what changed from the concept note |
| 02 | [Nuclear Physics](02-nuclear-physics.md) | Thresholds, cross-sections, why He-4 is uniquely hard |
| 03 | [Feasibility](03-feasibility.md) | The energy balance, the multi-photon assessment, the verdict |
| 04 | [Laser Array](04-laser-array.md) | Sources, coherent combining, thermal management, pulse energy |
| 05 | [Gamma Source](05-gamma-source.md) | Wakefield acceleration and inverse Compton scattering |
| 06 | [Target and Capture](06-target-and-capture.md) | Helium-4 target, product separation, neutron handling |
| 07 | [AI Control](07-ai-control.md) | Alignment as a learning problem; three approaches |
| 08 | [Proof of Concept](08-proof-of-concept.md) | The bench, phases, success criteria |
| 09 | [Roadmap](09-roadmap.md) | Staged path and the decision gate |
| 10 | [Economics](10-economics.md) | Budget, cost per gram, the gamma-source framing |
| 11 | [Alternative Routes](11-alternative-routes.md) | Li-6 breeding, VHTR coupling, spallation, lunar regolith |
| - | [References](../references.md) | Nuclear data, coherent combining, wakefield sources |

---

**Document status:** living document, updated as assessment progresses.
**Every value on this page is an estimate awaiting calculation**, apart from the reaction thresholds,
which are nuclear data. Derivations are in the sections; the arithmetic behind the rate and
accelerator figures is reproducible from the inputs given here.
