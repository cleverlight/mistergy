# He-3 Programme - 10 Economics

This section costs the programme stage by stage, then computes the number the whole exercise turns
on: the cost of a gram of helium-3 by this route. That calculation is the centrepiece and it is not
close. At the absolute physical ceiling, assuming perfect conversion of laser light into
threshold-energy gammas and perfect absorption of those gammas in the target, the cost lands in the
tens of millions of dollars per gram against a market of order ten thousand. At the realistic rate
it is not a number that means anything. The section then does what follows from that: it compares
the route that does work, reframes the economics around the gamma source, which is the honest
business case, and values the alignment control technology on its own, which is the highest-confidence
asset in the programme. Every figure here is an estimate awaiting proper costing, and the ones with
the widest error bars are flagged where they appear.

---

## 1. Budget by stage

Stages 0 to 2 are taken from the originating concept note and survive largely intact, because their
costs were realistic. Stages 3 and 4 do not survive, because the note costed the accelerator as an
optical component and did not cost the facility at all. See
[09-roadmap](09-roadmap.md) for what each stage delivers.

| Stage | Hardware | Personnel | Other | **Total** | Status of the estimate |
|---|---|---|---|---|---|
| **0** Simulation and training | $0 | folded into stage 1 | $0 | **staff time only** | Concept note, retained. Open-source tooling throughout |
| **1** Proof of concept, 10 beams | $16.7k | $150k (1 FTE × 6 mo) | $3k misc | **~$170k** | **Corrected.** Concept note said ~$12k; its rows sum to $12,200 and omit fine phase actuation. Itemised BOM in [08-proof-of-concept](08-proof-of-concept.md) §5 |
| **2** 20-beam prototype | $25k | $300k (2 FTE × 6 mo) | - | **~$325k** | Concept note, retained |
| **3** 100 beams + wakefield stage, hosted | $6-13M | $6-12M | licensing $2-6M | **$12-25M** | **Corrected.** Concept note said $3.075M |
| **3** 100 beams + wakefield stage, standalone | $6-13M | $6-12M | facility $10-30M, licensing $2-6M | **$40-100M** | **Corrected.** Wide error bars |
| **4** 500-beam production system | - | - | - | **$60-200M** | **Corrected.** Concept note said $1.5M per unit. Placeholder awaiting costing |

**Cumulative through stage 2: roughly $495,000 over about a year.** That is the whole of the
programme's cheap, high-confidence portion, and it delivers the alignment controller, the scaling
law and two or three papers.

### Why stage 3 moved by an order of magnitude

The concept note's $3.075M for the 100-beam stage broke down as $1.9M of optics and integration,
$500k for a "Compton backscatter converter", and $675k of personnel. The optics figure is the right
order. The other two are not.

- **The converter is a GeV-class particle accelerator.** Reaching 20.578 MeV photons by inverse
  Compton scattering off 1.03 µm light requires an electron beam at **1.06 GeV**, and 1.21 GeV to
  reach the 26-28 MeV cross-section peak ([00-summary](00-summary.md),
  [05-gamma-source](05-gamma-source.md)). The programme's best idea is that the array's 100 TW peak
  power can drive a laser-wakefield stage to that energy in centimetres rather than tens of metres,
  which genuinely does cut the *accelerator hardware* cost. It cuts nothing else.
- **Nothing was costed for the facility.** A GeV electron beam, a photon field above 20 MeV and the
  photoneutrons that come with it need a shielded vault, interlocks, area monitoring, a beam dump, a
  radiation protection programme and a licence with a 12-24 month lead time. The wakefield approach
  does not reduce any of these. This is the term that dominates, and it is the reason
  [09-roadmap](09-roadmap.md) puts a decision gate in front of stage 3 rather than a milestone.
- **Three FTE for 18 months does not staff a facility.** Health physics, accelerator operations and
  cryogenics are additional to the optical and software team, and they are continuing costs, not
  build costs.

**And the channel count underneath all of it is not settled.** The $4-8M array line, and every stage 3
and stage 4 total built on it, assumes the originating reference case of 100-500 channels at 0.10 J
each. [04-laser-array](04-laser-array.md) §2.4 rejects that as a fibre architecture - 0.10 J in 100 fs
is roughly 100× beyond fibre chirped-pulse amplification, with the B-integral and facet-damage limits
landing near a ~0.6 mJ ceiling independently - and recommends of order **10⁴ channels at ~1 mJ**
instead, at the same 1-5 kW total average power. **Nothing in the helium-3 verdict moves**, because
that rests on average power and average power is identical in both cases. What moves is capital, which
is dominated by channel count: a hundredfold increase in channels is not contained anywhere inside the
ranges below. Section 04 says so itself and says this section has to absorb it. The restaging has not
been done and is recorded as the programme's largest open design decision in
[00-summary](00-summary.md) §3; until it is taken, the stage 3 and stage 4 totals here should be read
as a floor rather than an estimate.

The single largest cost lever in the whole programme is whether stage 3 is hosted at an existing
accelerator facility (fit-out, $2-5M) or built standalone (new vault, $10-30M). That is worth
roughly a factor of four on the stage total and it is knowable in month 1 for the price of a few
conversations.

---

## 2. Cost per gram of helium-3

This is the calculation the programme exists to justify, so it is worked in full.

### 2.1 The reference price

Helium-3 is quoted per litre at standard conditions rather than per gram. One litre of helium-3 gas
at 0 °C and 101.325 kPa contains:

- n = PV/RT = (101,325 × 1.0 × 10⁻³) / (8.314 × 273.15) = **0.0446 mol**
- mass = 0.0446 × 3.016 g/mol = **0.135 g per litre**

| Quoted price | Implied price per gram |
|---|---|
| $1,000 per litre | ~$7,400/g |
| $2,000 per litre | ~$14,900/g |

**Working reference: of order $10,000 per gram, bracket $5,000-15,000.** This figure is approximate
and volatile. The market is thin, opaque and government-mediated: essentially all current supply is
the decay product of tritium held in weapons stockpiles, so the price reflects release policy at
least as much as it reflects demand. Quoted per-litre figures are sometimes stated at different
reference conditions without saying so, which is worth an additional factor of a few per cent. None
of this matters for what follows, because the gap being measured is four orders of magnitude at the
most generous reading.

### 2.2 The output, at the ceiling and in reality

From [00-summary](00-summary.md), for the full 500-element array at 5 kW average power:

| Case | Assumption | Output |
|---|---|---|
| **Ceiling** | 100% of laser power converted to threshold-energy gammas **and** 100% of those gammas causing a reaction | 1.52 × 10¹⁵ reactions/s = 0.656 mg/day = **0.240 g/yr** |
| **Realistic** | Inverse Compton conversion ~10⁻⁴, target reacting fraction 2.83 × 10⁻³ for liquid helium-4 over a metre | 2.83 × 10⁻⁷ of the ceiling: 4.29 × 10⁸ reactions/s = **6.78 × 10⁻⁸ g/yr (67.8 ng/yr)** |

The ceiling is not an estimate of output. It is a floor on the impossibility: a bound that cannot be
exceeded no matter how good the engineering gets, because it already assumes every efficiency in the
chain is unity.

### 2.3 The annualised cost

| Parameter | Value |
|---|---|
| Discount rate | 8% |
| Facility life | 20 years |
| Capital recovery factor | 0.08 / (1 - 1.08⁻²⁰) = **0.1019** |

Three capital cases spanning the stage 4 range from [section 1](#1-budget-by-stage):

| Case | Capital | Annual operating | Annualised total | **Cost per gram at the CEILING** |
|---|---|---|---|---|
| Low | $30M | $3M | $6.06M/yr | **~$25M per gram** |
| Central | $100M | $5M | $15.2M/yr | **~$63M per gram** |
| High | $200M | $8M | $28.4M/yr | **~$118M per gram** |

### 2.4 The verdict

> **At the absolute physical ceiling, this route delivers helium-3 at $25 million to $118 million
> per gram, against a market of order $10,000 per gram. That is a factor of 2,500 to 12,000 too
> expensive, before a single efficiency is applied.**

At the realistic rate, which is 2.83 × 10⁻⁷ of the ceiling, the same facilities produce
**6.78 × 10⁻⁸ g/yr - 67.8 nanograms per year** - and the cost per gram runs from $8.9 × 10¹³ in the low
capital case to $4.2 × 10¹⁴ in the high one, so **of order 10¹⁴ dollars per gram**. For scale, world
annual GDP is of order 10¹⁴ dollars: a single gram costs somewhere between most of a year of world
economic output and about four times all of it. The number is not wrong, it is simply not a number
that belongs in an economic analysis.

**This is 280× better than the figure this section carried in its first draft, and it changes
nothing.** That draft stated the realistic rate as "~10⁻⁹ of the ceiling", giving 0.24 ng/yr and a
cost of order 10¹⁶-10¹⁷ dollars per gram. It had applied the shortfall against the 50-100 g/day
*target* to the *ceiling*, which is the wrong denominator ([00-summary](00-summary.md) §4.2). The
correction is recorded because the arithmetic should be checkable, not because the verdict softens:
10¹⁴ dollars per gram against a market of 10⁴ is the same closed case that 10¹⁶ was.

### 2.5 Why this does not improve with engineering

The instinct on seeing a cost like that is to assume a learning curve fixes it. It does not, and the
reason is worth stating precisely, because it is the difference between a hard problem and a closed
one.

The shortfall lives in three multipliers, and two of them are already pinned against their physical
ceilings in the calculation above:

| Multiplier | Current | Physical ceiling | Headroom |
|---|---|---|---|
| Laser to threshold-energy gammas | ~10⁻⁴ | 1 | 10⁴, and unreachable |
| Fraction of gammas reacting in the target | 2.83 × 10⁻³ (liquid He-4, 1 m) | 1 | ~350, and a 3.5 m liquid helium path would buy only the first factor of 3.5 |
| Array average power | 1-5 kW | no physical limit, only an economic one | this is the only term with real headroom |

The ceiling calculation in [section 2.3](#23-the-annualised-cost) already sets the first two to
unity. **Everything left over has to come from array power**, and the requirement is stark: 50 g/day
needs **381 MW** of gamma power absorbed in the target, and 100 g/day needs **762 MW**
([00-summary](00-summary.md)). Two ways of feeling that number:

- At a generous 1% wall-to-gamma efficiency and perfect absorption, 381 MW absorbed requires
  **38 GW** of laser average power. High-power industrial fibre lasers run of order $50 per watt,
  so the laser diodes alone would cost of order **$2 trillion**, before the accelerator, the
  facility, or the electricity to run any of it.
- At the *realistic* efficiencies (10⁻⁴ conversion, 2.83 × 10⁻³ absorption), 381 MW absorbed
  requires 381 × 10⁶ / (10⁻⁴ × 2.83 × 10⁻³) = **1.35 × 10¹⁵ W**, which is about 1,350 TW of average
  laser power. World electricity generation averages roughly 3.4 TW. The array would need
  **around four hundred times the world's entire electrical output**, delivered as laser light.

That is a thermodynamic statement, not a technological one. There is no manufacturing curve, no
supply chain maturation and no clever optical architecture that closes a gap of that shape. The
comparison in [section 3](#3-the-comparison-the-lithium-6-route) is not "a better version of the
same idea"; it is a different physical mechanism with an entirely different energy budget.

### 2.6 Two commercial targets from the concept note, withdrawn

| Target as stated | Actual | Disposition |
|---|---|---|
| "Cost per He-3: < $100 per gram (target for commercial viability)" | $25-118M/g at the ceiling | **Withdrawn.** Wrong by six orders of magnitude at the most generous reading |
| "Power efficiency: >1% He-3 atoms per incident hard X-ray photon" | 2.83 × 10⁻³, i.e. 0.28%, for liquid helium-4 over a metre; 1% would need a 3.5 m liquid helium path | **Withdrawn as stated.** Replace with a measured absorption fraction against the target geometry actually built |
| "He-3 supply is the missing piece for fusion energy. Solving this unlocks a multi-billion-dollar market" | The helium-3 *commodity* market today is of order $100M/yr at most, at single-kg/yr supply | **Reframed.** The multi-billion figure describes the fusion industry helium-3 would enable, not the helium-3 trade itself. See [section 3.4](#34-the-scale-of-the-real-problem) |

Retiring these matters more than it might appear. A stage 3 or stage 4 decision taken against a
"$100 per gram" success metric is a decision taken against a target that cannot be hit, and the
programme would discover that only after spending $12-100M.

---

## 3. The comparison: the lithium-6 route

[11-alternative-routes](11-alternative-routes.md) owns this analysis. What matters here is the
economic structure, which differs from the laser route in a way that is more important than the
yield difference.

### 3.1 The yield

In a 100 MW(th) VHTR of the kind specified in [`../../vhtr/design/00-summary.md`](../../vhtr/design/00-summary.md):
3.12 × 10¹⁸ fissions/s giving 7.58 × 10¹⁸ neutrons/s, of which 1% captured on lithium-6 yields
3.97 mol of tritium per year and, at steady state, **12.0 g/yr of helium-3**; at 5% capture,
19.9 mol and **59.9 g/yr**.

Two features of that number are easy to miss:

- **It is a steady-state figure.** Tritium decays to helium-3 with a 12.32-year half-life, so the
  yield equals the tritium production rate only once the held inventory has saturated. Inventory at
  steady state is N = P/λ with λ = ln2 / 12.32 yr = 0.0563/yr, giving **213 g of tritium** at 1%
  capture and **1,067 g** at 5%. Reaching half the steady-state yield takes one half-life, about
  12 years; reaching 90% takes about 41 years. **The lithium route has a decade-scale ramp**, which
  is a working-capital problem rather than a physics one, and it is a real cost that belongs in any
  honest comparison.
- **That inventory is the licensing driver.** At 9.6 kCi per gram, 213 g of tritium is roughly
  2 MCi and 1,067 g is roughly 10 MCi. This is a substantial licensed inventory and it, not the
  reactor, is what makes the route a regulatory undertaking.

### 3.2 The economic structure, which is the actual point

| | Laser photodisintegration, stage 4 | Li-6 breeding in a 100 MW(th) VHTR |
|---|---|---|
| Realistic output | 6.78 × 10⁻⁸ g/yr (68 ng/yr) | 12-60 g/yr at steady state |
| Ceiling output | 0.240 g/yr | - |
| Capital chargeable to helium-3 | **all of it**, $60-200M | **marginal only**: tritium extraction and handling, ~$20-60M |
| Capital paid for by another revenue stream | none | the reactor, ~$326M, repaid by electricity sales |
| Revenue that exists regardless | gamma beam time (see [section 4](#4-the-honest-business-case-the-gamma-source)) | ~$18.5M/yr of electricity: 47 MW(e) at a 90% capacity factor and the canonical **$50/MWh sale price** |
| Marginal annual cost of the isotope | $6-28M/yr | order $10-15M/yr for a single unit |
| Cost per gram | $25-118M at the ceiling; ~10¹⁴ realistic | order $10⁵-10⁶ for one unit, order $10⁵ for a fleet |
| Ratio to a ~$10,000/g reference | 2,500-12,000× at the ceiling; ~10¹⁰× realistic | 10-100×, falling with fleet scale |
| Improves with scale? | no, the gap is thermodynamic | yes, the extraction plant is largely a fixed cost |
| Maturity | concept | established physics, engineering problem |

**One line in that table is worth stating explicitly, because getting it wrong is an easy and
flattering mistake.** The electricity figure is a **sale** at the canonical $50/MWh
([00-summary](00-summary.md) §9, matching [11-alternative-routes](11-alternative-routes.md) §2.7). The
VHTR set's ~$88/MWh is a **levelised cost of electricity** - what a megawatt-hour costs to produce,
recovering capital, fuel and operations - and multiplying generation by an LCOE gives total cost, never
revenue. An earlier draft of this section did exactly that, reporting ~$39M/yr from 443,000 MWh at
~$88/MWh. The corrected line uses section 11's basis, 47 MW(e) at a 90% capacity factor sold at
$50/MWh, and comes to less than half as much; most of that factor is the price rather than the
generation. Treating an LCOE as a sale price would have made a plant selling below its own cost of
production look profitable.

**The structural difference is the whole argument.** The laser route charges every dollar of a
purpose-built facility against a product it barely makes. The lithium route adds target assemblies
to a reactor that is being built to sell electricity, and charges helium-3 only with the incremental
cost: the assemblies, the neutrons diverted from the chain reaction, the tritium extraction and
handling facility, and the decade of inventory build-up. The reactor's capital and its licence are
paid for by a revenue stream that already exists.

### 3.3 The marginal cost, worked

Indicative, with wide error bars and awaiting proper costing:

| Term | Single 100 MW(th) unit | Ten-unit fleet, 1 GW(th) |
|---|---|---|
| Tritium extraction and handling plant, annualised at 0.1019 | ~$4M/yr on $40M | ~$8M/yr on $80M, shared |
| Plant operating cost | ~$5M/yr | ~$12M/yr |
| Lithium-bearing target assemblies and hot cell work | ~$3M/yr | ~$25M/yr |
| Generation lost to the reactivity penalty (1-4% of ~$18.5M/yr per unit) | ~$0.5M/yr | ~$5M/yr |
| **Total marginal cost** | **~$12.5M/yr** | **~$50M/yr** |
| Output at 1% capture | 12.0 g/yr | 120 g/yr |
| Output at 5% capture | 59.9 g/yr | 599 g/yr |
| **Cost per gram, 1% capture** | **~$1.0M** | **~$420k** |
| **Cost per gram, 5% capture** | **~$210k** | **~$84k** |

So the lithium route is also above market today, by roughly one to two orders of magnitude. That is
worth stating plainly rather than glossing, because the honest comparison is not "one route works
and the other does not". It is that **one route is 10 to 100 times too expensive and gets cheaper
with fleet scale and capture fraction, and the other is 10¹⁰ times too expensive and gets cheaper
with nothing.**

There is also an option in the lithium route that the laser route does not have: sell the tritium.
Tritium itself has a market, of order $30,000 per gram historically, and the held inventory can be
read as an asset yielding about 5.6% per year in helium-3. That reframes the decade-scale ramp from
a cost into an inventory position.

### 3.4 The scale of the real problem

Neither route solves helium-3 supply for a hypothetical D-³He fusion economy, and the arithmetic is
worth working rather than gesturing at. A D-³He plant consumes of order **90 kg of helium-3 per
GWe-year** ([01-overview](01-overview.md) §1.4, [00-summary](00-summary.md) §8), so the unit of demand
is not "tonnes per year" in the abstract but 90,000 grams per gigawatt-electric per year:

| Capture fraction | Yield per 100 MW(th) unit | Units needed per GWe-year | Reactor thermal capacity |
|---|---|---|---|
| 1% | 12.0 g/yr | **~7,500** | 750 GW(th) |
| 5% | 59.9 g/yr | **~1,500** | 150 GW(th) |

World thermal generation is of order 10 TW. **Fuelling one gigawatt-electric D-³He plant therefore
takes a fleet of between 1,500 and 7,500 reactors, which is 0.15 to 0.75 TW(th) - between about 1.5%
and 7.5% of the world's entire thermal generation - standing behind a single fusion plant.** The 5%
case is the one section 11 itself calls unaffordable on reactivity grounds, so 7,500 is the honest
end of that range rather than 1,500.

Those reactors do still sell their electricity, so this is a statement about fleet size rather than
about energy: the helium-3 rides on capacity built for another purpose. It remains a fleet nobody is
going to build for this reason.

That is an order-of-magnitude illustration rather than a projection, and it does not make the
lithium route pointless: 12-60 g/yr is enormously valuable to the research and instrumentation
markets that consume helium-3 today, principally neutron detection and cryogenics. It does mean that
"solving the helium-3 bottleneck" is not a thing any single programme does, and a business case that
depends on it should be treated with suspicion.

---

## 4. The honest business case: the gamma source

Strip the helium-3 mission out and what stage 3 builds is a **compact, high-flux, quasi-monochromatic
photon source in the 10-30 MeV range**. That is a real instrument with real customers, and it is the
only part of the hardware programme with a defensible commercial framing. See
[05-gamma-source](05-gamma-source.md) for the physics.

### 4.1 The customers

| Application | Who buys | What they buy | Market character |
|---|---|---|---|
| **Photonuclear cross-section measurement** | National laboratories, nuclear data evaluation programmes, astrophysics groups | Beam time | Competitively allocated, usually free at the point of use and funded by a host agency. Revenue is an operating grant, not a sale |
| **Nuclear resonance fluorescence assay** | Border and port security agencies; legacy nuclear waste operators | Instruments plus service contracts | The one application with a plausible fleet requirement. NRF gives isotope-specific identification through shielding, non-destructively, which nothing else does |
| **Medical isotope production** | Radiopharmacy supply chain | Curies, recurring | Accelerator-driven ¹⁰⁰Mo(γ,n)⁹⁹Mo for technetium generators is already a commercial route in North America. Real revenue, but it competes against conventional electron linacs that need no laser array, and it carries GMP and regulatory burden |
| **Photofission research and safeguards** | Research institutes, safeguards agencies | Beam time | Small and academic |

### 4.2 The market character, and why it matters

**This is instrument sales and beam time, not commodity supply.** That distinction changes the shape
of the business completely:

- Revenue is lumpy and relationship-driven, not volumetric. There is no price per unit that scales.
- The addressable market is a handful of facilities worldwide, not a fleet. HIgS and ELI-NP already
  deliver quasi-monochromatic gammas in this energy range using conventional accelerators, so a
  fibre-array-driven wakefield source competes on footprint, capital cost and possibly flux. It does
  not compete on existence.
- The buyer is usually a government agency on a multi-year procurement cycle, which means long sales
  cycles and no ability to grow into demand.

### 4.3 What would have to be true for it to pay back

Stated as conditions rather than projections, because none of them has been tested:

1. **The rep rate has to hold.** A single-shot wakefield source is a physics experiment; a 100 Hz one
   is an instrument. This is the single largest technical unknown in stage 3 and it is binary for
   the business case.
2. **The compact form factor has to be worth paying for.** If the source costs the same as a
   conventional linac and delivers less flux, the footprint advantage does not close a sale.
3. **The market has to absorb two to four systems a year.** At $15-30M per system and a 30-40% gross
   margin, that is roughly $12-45M/yr of gross profit against a $40-100M development, giving payback
   in three to eight years. **The absorption assumption is doing all the work in that sentence**, and
   the realistic global market for GeV-class photonuclear sources is a handful of facilities in total,
   not a handful per year.
4. **Or the NRF assay application finds an agency buyer with a fleet requirement**, in which case the
   volume assumption becomes defensible and the business case changes character entirely.

**The honest read: the gamma source is a credible scientific instrument and a marginal business.** It
should be funded as scientific infrastructure, on the strength of the measurements it enables,
unless and until condition 4 turns out to be true. A programme that raises money against condition 3
without testing it is raising money against a hope.

### 4.4 What the source produces that helium-3 production does not

At the canonical realistic rate, the 500-element array still drives **4.29 × 10⁸ reactions per
second**, or 1.35 × 10¹⁶ helium-3 atoms per year. That is comfortably detectable by mass spectrometry,
and the co-produced 4.29 × 10⁸ n/s is detectable by neutron counting shot by shot. **It is
an excellent signal for a cross-section measurement and a hopeless quantity of product**, and those
two statements are the same number viewed from a physics bench and from a commodity market. The
⁴He(γ,n)³He cross-section is currently uncertain by roughly a factor of two
([02-nuclear-physics](02-nuclear-physics.md)), so measuring it properly is a genuine contribution and
one the programme is unusually well placed to make.

---

## 5. The value of the control technology on its own

The alignment controller is the highest-confidence asset in the programme, and it is worth separating
from everything above because **its value does not depend on any nuclear claim being true.**

### 5.1 Why the confidence is high

- The demonstration costs **$16,700 of hardware and one FTE for six months**
  ([08-proof-of-concept](08-proof-of-concept.md) §5). Nothing else in this document has that ratio of
  cost to information.
- The deliverable is software, so it has no manufacturing cost, no supply chain and no unit economics.
- The applications exist and are funded today, independently of this programme.
- Success is unambiguous and measurable: the criteria in [09-roadmap](09-roadmap.md) are numeric.

### 5.2 Where it applies

| Domain | Why coherent array alignment matters there |
|---|---|
| Directed energy | Fibre coherent beam combining at the 100 kW class is an active procurement area; phase and alignment control is the core problem |
| Free-space optical communication | Ground-to-satellite links use transmit arrays and must compensate atmospheric turbulence in real time |
| Laser-driven inertial fusion | Successor concepts to flashlamp glass lasers use diode and fibre arrays at high repetition rate, which is precisely the ICAN and XCAN rationale |
| Laser material processing, lidar, laser propulsion | Any application where many modest emitters must behave as one aperture |

### 5.3 How the value would be captured

| Route | Assessment |
|---|---|
| **Open source it** | Most likely to create value. Captures returns as reputation, publications, consulting and follow-on funding rather than licence income. Also the fastest route to adoption, which is what makes the reputation worth having |
| **License it** | Possible but thin. The buyers are few and large, and organisations in this space generally build control software in house |
| **Patent the architecture plus algorithm combination** | Defensible if genuinely novel, but the field is active and moving, and a patent on a control method is expensive to enforce |

**Do not build a business plan on licence income from this.** Expected licence revenue is low;
expected strategic value is high. The right way to hold it is as the thing that makes the programme
credible and fundable, and as a contribution to a field that will use it.

---

## 6. Sensitivity

Which uncertainties actually move which conclusion. The striking feature of this table is that
**nothing moves the helium-3 conclusion and almost everything moves the gamma-source conclusion.**

| Parameter | Plausible range | Effect on the helium-3 verdict | Effect on the gamma-source case |
|---|---|---|---|
| Helium-3 market price | $5,000-15,000/g | **None.** The gap is 2,500-12,000× at the ceiling | None |
| ⁴He(γ,n)³He cross-section | 0.65-2.6 mb (disputed by a factor of ~2) | Moves the ceiling by 2×; the gap remains >10³ | **This uncertainty is the reason to build the source** |
| Laser-to-gamma conversion | 10⁻⁴ to 10⁻² (a 100× improvement, not plausible) | Still 2.7 × 10⁹ short of the stated target | 100× on flux; decisive for the instrument |
| Target reacting fraction | 3.14 × 10⁻⁶ gas to 2.83 × 10⁻³ liquid | Already assumes liquid; a 3.5 m path buys 3.5× more | Minor |
| Array average power | 1-5 kW; 381 MW absorbed needed for 50 g/day | Linear, and the gap is 10⁵ at the ceiling | More power is more flux, linearly |
| Stage 3 capital | $12-100M, hosted versus standalone | None | **Dominates the entire business case** |
| Wakefield repetition rate | single-shot to 100 Hz | None | **Decides whether it is an instrument or an experiment** |
| Discount rate | 6-12% | ±25% on the annualised cost, against a 10³-10¹⁰ gap | Moderate; the capital is front-loaded |
| Li-6 capture fraction | 1-5% | n/a | n/a; moves the lithium route's cost per gram by 5× |
| Fleet size for the lithium route | 1 to 10+ units | n/a | n/a; the extraction plant is largely fixed, so cost per gram falls with scale |

### The standing caveat

**Every figure in this section is an estimate awaiting proper costing.** The stage 0 to 2 numbers are
solid in the sense that they are ordinary laboratory procurement and salary, and they came from the
originating concept note where they were realistic. The stage 3 and stage 4 numbers are ranges
constructed to span plausible siting and technology outcomes, not quotes, and the accelerator and
facility terms dominate them. The marginal cost of the lithium route in
[section 3.3](#33-the-marginal-cost-worked) is an indicative structure with placeholder values for
the extraction plant and the target assemblies. Nothing here has been costed by a supplier, and none
of the efficiencies has been measured.

What that caveat does *not* touch is the central verdict. The helium-3 conclusion rests on the
reaction threshold, the cross-section and the energy per reaction, which are nuclear data, and on
arithmetic that anyone can repeat from [00-summary](00-summary.md). Better costing would move the
numbers in [section 2.3](#23-the-annualised-cost) by a factor of a few. It would not move a factor
of 10¹⁰.

---

## 7. Economic summary

| Metric | Value |
|---|---|
| Cost to a demonstrated 10-beam autonomous alignment | **~$170k** |
| Cost to a demonstrated 20-beam scaling law | **~$495k cumulative** |
| Cost to a characterised gamma beam above 20.578 MeV | **$12-100M**, siting-dependent |
| Cost per gram of helium-3, at the physical ceiling | **$25-118M** |
| Cost per gram of helium-3, realistic | **~10¹⁴ dollars** ($8.9 × 10¹³ to $4.2 × 10¹⁴) |
| Reference market price of helium-3 | **~$10,000/g**, bracket $5,000-15,000, volatile |
| Cost per gram by the lithium-6 route, single unit | **~$210k to $1.0M**, capture-dependent |
| Cost per gram by the lithium-6 route, ten-unit fleet | **~$84k to $420k** |
| Highest-confidence asset | the alignment controller, at $16,700 of hardware |
| Honest commercial framing | a gamma-source instrument, sold as beam time and systems |

The programme's economics invert the concept note's. In the note, the cheap early stages were a
means to the expensive productive one. In fact **the cheap early stages are where nearly all the
realisable value sits**, the expensive stage buys a scientific instrument rather than a product, and
the production mission belongs to a different technology entirely. That is a better programme than
the one originally described, and stage 1 costs about a five-hundredth of stage 4 to find out whether
its central claim is true.

---

## Open questions

- **What does a supplier actually quote for a femtosecond fibre array with per-channel phase
  control, and at which channel count?** The $4-8M figure in [section 1](#1-budget-by-stage) is scaled
  from the concept note's per-channel implication, has never been tested against a vendor, and is
  priced for 100 channels at 0.10 J - a case [04-laser-array](04-laser-array.md) §2.4 has rejected.
  The question that needs asking is the route (a) one: what does 10⁴ channels at ~1 mJ cost, with the
  volume and monolithic-integration discounts that are the core of the ICAN cost argument, and does a
  staged 10³-channel machine at 1 J price as a useful instrument on the way there?
- **Hosted or standalone for stage 3?** Worth a factor of four on stage 3 capital and therefore the
  largest single lever on the gamma-source business case. Answerable in month 1 by asking.
- **Is there an agency buyer with a fleet requirement for NRF assay?** This is condition 4 in
  [section 4.3](#43-what-would-have-to-be-true-for-it-to-pay-back) and it is the only thing that
  turns the gamma source from infrastructure into a business. Nobody has asked.
- **What does a tritium extraction plant for a 100 MW(th) VHTR actually cost?** The $20-60M in
  [section 3](#3-the-comparison-the-lithium-6-route) is a placeholder, and it is the dominant term in
  the lithium route's marginal cost.
- **What is the reactivity penalty of a 1-5% lithium-6 capture fraction in the VHTR core**, expressed
  as lost generation? The 1-4% used in [section 3.3](#33-the-marginal-cost-worked) is an assumption,
  and it needs a neutronics calculation against the actual core design. It is now the smallest line in
  the marginal-cost table (~$0.5M/yr against ~$18.5M/yr of electricity), so it is unlikely to change
  the cost per gram; what it decides is whether the 5% capture case is available at all, and section
  11 already says it is not.
- **Is the tritium sale option worth modelling properly?** Selling tritium at ~$30,000/g rather than
  holding it for decay changes the lithium route's cash flows substantially and may change which
  capture fraction is optimal.
- **What is the real size of the helium-3 market by segment?** Neutron detection, cryogenics and
  research consume it today at single-kg/yr scale. Nobody in this document has broken that down, and
  the lithium route's 12-60 g/yr is small enough that segment matters.
- **Would an open-source release of the controller foreclose the licensing route?** The recommendation
  in [section 5.3](#53-how-the-value-would-be-captured) assumes licence income is not worth
  protecting. That assumption should be tested before the stage 1 code is published, because it is
  not reversible.

---

*Previous: [09 Roadmap](09-roadmap.md) · Next: [11 Alternative Routes](11-alternative-routes.md) · [Summary](00-summary.md) · [References](../references.md)*
