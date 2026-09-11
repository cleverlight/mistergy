# He-3 Programme - 11 Alternative Routes

[03-feasibility](03-feasibility.md) establishes that the laser photodisintegration route cannot produce
useful quantities of helium-3. This section asks the question that follows: if the mission is
helium-3 rather than a laser array, what actually works? It compares every route that has been
proposed or demonstrated, works the lithium-6 route through in full because that is the one this
repository can actually host, and states plainly what hosting it would cost the VHTR design sitting
alongside it. The recommendation at the end is the most useful single output of the whole programme.

---

## 1. The routes, side by side

Every route to helium-3 is either a neutron route (make tritium, wait for it to decay), a fusion route
(make helium-3 directly in a plasma), or an extraction route (find helium-3 that already exists and
concentrate it). There is no fourth category, and the laser route is a very inefficient member of the
first two hybridised.

| Route | Yield | Maturity | Capital character |
|---|---|---|---|
| **Laser photodisintegration** (this programme) | ≤ 0.240 g/yr at an unreachable 100% efficiency (5 kW array); **6.78 × 10⁻⁸ g/yr (68 ng/yr)** realistically | concept | moderate capital, no saleable product |
| **Li-6(n,α)T in a 100 MW(th) VHTR** | **12 to 60 g/yr** at 1 to 5% neutron capture | established physics, engineering problem | hosted on a plant built and paid for by electricity sales |
| Dedicated tritium production reactor | kg/yr, single-kg scale | proven; this is how the existing supply was made | state-scale capital, weapons-adjacent, heavy regulatory weight |
| Accelerator-driven spallation + Li blanket | ~14 g/yr from a 1.4 MW proton beam | proven components, never built for this | large capital, consumes ~5 MW rather than exporting any |
| D-D fusion, He-3 branch | ~1 kg/yr from ~3.7 MW of fusion power | no net-energy reactor exists | circular: needs the thing the helium-3 was for |
| Lunar regolith mining | 18 to 45 kg per km² stripped to 3 m | speculative | extreme logistics; a mining problem, not a physics one |
| Separation from terrestrial helium | 2 to 20 kg/yr bounded by world helium production | partly done today | modest, but bounded by the helium market |

Two observations before the detail. First, **the existing world supply of helium-3, at single kilograms
per year and declining, comes entirely from the decay of tritium bred for weapons.** Every route in
the table except the last two is an attempt to reproduce that supply without the weapons programme
attached to it. Second, the laser route is not merely worse than the others, it is worse by a margin
that no engineering improvement addresses, which is why this section exists at all.

## 2. The lithium-6 route

### 2.1 The reaction chain

```
  ⁶Li  +  n   →   ⁴He  +  T          (thermal σ = 940 barns, Q = 4.78 MeV)
   T          →   ³He  +  e⁻  +  ν̄   (β⁻, half-life 12.32 yr)
```

Both steps are settled physics. The first has one of the largest thermal neutron cross-sections of any
light nucleus, which is why lithium-6 is used as a neutron absorber, a neutron detector and a fusion
breeding material. The second is the mechanism that produced every gram of helium-3 in circulation
today.

**The route's whole difficulty is the second step's timescale, and it is a real difficulty rather than
a bookkeeping one.** See §2.3.

### 2.2 Yield arithmetic for a 100 MW(th) VHTR

Every step, so a reader can check it:

**Fission rate.** At 200 MeV per fission, which is 200 × 1.602 × 10⁻¹³ = 3.204 × 10⁻¹¹ J:

```
  3.12 × 10¹⁸ fissions/s = 1.00 × 10⁸ W / 3.204 × 10⁻¹¹ J
```

**Neutron production.** At 2.43 neutrons per fission:

```
  7.58 × 10¹⁸ n/s = 3.12 × 10¹⁸ × 2.43
```

**Tritium production at 1% capture in lithium targets:**

```
  7.58 × 10¹⁶ T/s  ×  3.156 × 10⁷ s/yr  =  2.39 × 10²⁴ atoms/yr
  2.39 × 10²⁴ / 6.022 × 10²³           =  3.97 mol/yr
```

**Helium-3 at equilibrium**, at 3.016 g/mol:

```
  3.97 mol/yr × 3.016 g/mol = 12.0 g/yr
```

| Capture fraction | Tritium bred | He-3 at equilibrium | Equilibrium tritium held on site |
|---|---|---|---|
| 1% | 3.97 mol/yr | **12.0 g/yr** | 70.6 mol = 213 g ≈ 2.1 × 10⁶ Ci |
| 5% | 19.9 mol/yr | **59.9 g/yr** | 353 mol = 1.07 kg ≈ 1.0 × 10⁷ Ci |

The equilibrium inventory is the production rate divided by the decay constant, λ = ln2/12.32 yr =
0.0563 /yr, and it is not a footnote. **At the 5% end the plant holds of order a kilogram of tritium
at all times.** That is a licensing item in its own right, comparable to the site inventory a fusion
research facility is licensed for, sitting on a 100 MW(th) power reactor that was designed to have
essentially none.

### 2.3 The 12.32 year problem: a decades-scale asset, not a tap

The tritium has to decay before there is any helium-3, and it decays on its own schedule. The
cumulative helium-3 recoverable after t years of steady breeding is

```
  N₃(t) = P·t − (P/λ)·(1 − e^(−λt))
```

where P is the tritium production rate. At 1% capture (P = 3.97 mol/yr, P/λ = 70.6 mol):

| Plant age | He-3 if decay were instant | He-3 actually recoverable | Fraction realised |
|---|---|---|---|
| 1 yr | 12.0 g | **0.33 g** | 2.7% |
| 2 yr | 24.0 g | 1.30 g | 5.4% |
| 5 yr | 59.9 g | 7.7 g | 12.8% |
| 10 yr | 120 g | 28.2 g | 23.5% |
| 20 yr | 240 g | 95.8 g | 39.9% |
| 40 yr | 479 g | 289 g | 60.3% |
| 60 yr | 719 g | 513 g | 71.4% |

**The economic implication is the point of the table.** The 12.0 g/yr headline figure is a steady-state
rate that is approached asymptotically over roughly three tritium half-lives, and the first decade of
operation delivers under a quarter of it. A financial model that books 12 g/yr from commissioning
overstates the first ten years' output by a factor of four. In the meantime the plant is holding, and
paying to contain, an ever-growing tritium inventory that reaches 213 g at equilibrium and is a cost
rather than a product for the whole ramp.

There is one consolation, and it is how the existing supply chain already works: **the ageing happens
in a tritium store, not in the reactor.** Helium-3 accumulating in a tritium reservoir has to be
stripped out periodically anyway, because it poisons the getter beds tritium is stored on. The
helium-3 is a by-product of storing tritium, not a separate process step, and the stripping is routine
practice. The asset being built is a tritium inventory; the helium-3 falls out of holding it.

### 2.4 What it costs the reactor: neutron economy

Neutrons captured in lithium are neutrons not doing something else. The size of the cost depends
entirely on what that something else was.

Of the 2.43 neutrons produced per fission, exactly 1.000 must go on to cause the next fission for the
reactor to stay critical. The remaining 1.43 are already spent: capture in U-238 (useful, it makes
Pu-239), capture in fission products, capture in graphite and structure, and leakage from the core
([04-neutronics](../../vhtr/design/04-neutronics.md)).

| Capture fraction | Neutrons diverted per fission | Worst-case reactivity cost |
|---|---|---|
| 1% | 0.0243 | up to 2,430 pcm |
| 5% | 0.1215 | up to 12,150 pcm |

The worst case assumes every diverted neutron would otherwise have sustained the chain. Against the
VHTR's stated budget - k-effective ≥ 1.05 at beginning of life, about 4% Δk/k of xenon to override and
a 3 to 6% burnup swing to accommodate - a worst-case 2,430 pcm is affordable but not free, and a
worst-case 12,150 pcm is flatly unaffordable.

**So the 59.9 g/yr figure at 5% capture is only reachable if the neutrons come from what was being
wasted rather than from the chain**, and that turns target placement from a convenience into the
central design question. A reflected graphite core loses a genuine 10 to 15% of its neutron budget to
graphite capture and leakage, so there is real waste to recover; whether 5% of the total can be
recovered from it is a Monte Carlo question and nothing here settles it. The 1% case, and the 12.0 g/yr
that goes with it, is the defensible planning figure.

Two secondary costs, both quantifiable and neither alarming:

- **Target heat.** Li-6(n,α)T releases 4.78 MeV. At 1% capture that is
  7.58 × 10¹⁶ × 4.78 × 1.602 × 10⁻¹³ = **58 kW**, and 290 kW at 5%. Negligible against 100 MW(th) for
  the plant heat balance, but concentrated in a few litres of ceramic and therefore the constraint on
  target pin dimensions and helium cooling.
- **Reflector and control interaction.** The VHTR puts control rods in the inner reflector and the
  reserve shutdown system (gravity-fed B₄C balls) in the outer reflector. A strong thermal absorber
  added to the reflector changes rod worth and shutdown margin, both of which are safety-case
  quantities. This has to be re-evaluated, not assumed.

### 2.5 Target form and placement

**Form: lithium aluminate or a similar ceramic in clad pins.** LiAlO₂ is the material used in the
tritium-producing burnable absorber rods at Watts Bar and is a long-standing fusion breeder-blanket
candidate alongside Li₂TiO₃ and Li₄SiO₄. It melts near 1700 °C, so it survives VHTR core temperatures
with margin, and it retains tritium chemically rather than releasing it all promptly.

**How much lithium.** Capture rate is N·σ·φ. Assuming a reflector thermal flux of 10¹³ n/cm²/s, which
is a placeholder awaiting the neutronics calculation:

```
  N(Li-6) = 7.58 × 10¹⁶ / (940 × 10⁻²⁴ cm² × 10¹³ cm⁻²s⁻¹) = 8.06 × 10²⁴ atoms = 13.4 mol
```

That is 80.5 g of lithium-6. The interesting question is what it is diluted in.

| Lithium specification | Ceramic mass | Ceramic volume | Li-6 mean free path in the ceramic |
|---|---|---|---|
| Fully Li-6 enriched LiAlO₂ | 0.87 kg | 0.34 L | **0.44 mm** |
| Natural lithium LiAlO₂ (7.6% Li-6) | 11.6 kg | 4.5 L | 5.9 mm |

**Self-shielding, not lithium mass, sets the target geometry.** At 940 barns a fully enriched pellet is
opaque to thermal neutrons within half a millimetre, so all the capture happens in a thin skin and the
interior is inert ballast. The fix is either very thin annular pellets, which is what TPBARs use, or
dilution.

Dilution has an advantage worth stating explicitly: **natural lithium works.** Lithium-7 is nearly
transparent to thermal neutrons, so the capture rate depends only on the lithium-6 content, and using
natural lithium costs 13 times the ceramic mass, which is 4.5 litres rather than 0.34 litres, an
irrelevance in a reactor core. In exchange it removes lithium-6 enrichment from the supply chain
entirely, and lithium-6 enrichment is an export-controlled, dual-use capability with a poor
environmental history and almost no Western capacity. Given that
[10-fuel-cycle](../../vhtr/design/10-fuel-cycle.md) makes "cannot depend on a material that creates
proliferation risk or requires special-access supply chains" a binding constraint on the whole reactor
design, **natural-lithium targets are strongly preferred and the reasoning is the VHTR's own.**

**Placement: the outer reflector.** Three arguments converge on the same answer:

1. **Neutronics.** The reflector is where neutrons are lost to graphite capture and leakage, so
   capture there is the cheapest available in reactivity terms (§2.4). The thermal flux in a graphite
   reflector is high and the neutron importance is low, which is exactly the combination wanted.
2. **Temperature.** [06-materials](../../vhtr/design/06-materials.md) notes that outer reflector blocks
   run at lower temperatures than the core. Tritium permeation through any cladding is strongly
   Arrhenius, so every hundred degrees is worth an order of magnitude, and this is the single largest
   technical objection to the whole scheme (§2.6).
3. **Access.** The outer reflector already carries channels for the reserve shutdown system, and
   reflector blocks are already a replaceable item on a defined schedule.

**Exchange cadence.** The VHTR refuels annually, one batch per visit
([10-fuel-cycle](../../vhtr/design/10-fuel-cycle.md)). Target pins exchange on the same visit and add
no new outage. Lithium-6 burnout over a 12 month exposure needs checking against the flux, but at
these capture fractions the fractional burnup of the lithium inventory per year is small.

**Sealed pins, not a purge loop.** Fusion breeder blankets sweep tritium out continuously with a
low-pressure helium purge. That is the wrong choice here, and the reason is the VHTR's own
architecture: a purge line is a tritium-bearing penetration through the primary boundary and it
implies a tritium extraction plant inside the reactor building. Sealed pins removed at the annual
outage and shipped to a central facility with the spent fuel keep the tritium inside cladding for its
whole time on site, and match the annual-removal, central-processing model the fuel cycle already
uses. The cost is that the pins must contain their own gas generation:

```
  1% capture: 3.97 mol/yr of He-4  +  3.97 mol/yr of tritium
  8 mol total in 20 L of plenum at 900 K:  P = nRT/V = 3.0 × 10⁶ Pa = 30 bar
```

Sizing roughly 20 litres of free volume across the target set keeps end-of-cycle internal pressure
below the 4 MPa primary circuit pressure, so the pins sit in external compression rather than
internal tension for their whole life. That is structurally the favourable direction and it is a
direct benefit of the VHTR's decision to run at 4 MPa rather than 7.

### 2.6 The tension with the VHTR design, stated honestly

The VHTR does not merely happen to have low tritium generation. It **designed for it, deliberately,
and named it the primary control.** [06-materials](../../vhtr/design/06-materials.md) is explicit:

> "Reduce generation at source - graphite specification. Tritium in this reactor is produced primarily
> by the reaction Li-6(n,α)T, where Li-6 is a trace impurity in the graphite moderator. [...] By
> specifying graphite with lithium content below 0.1 ppm, tritium generation is reduced to a very
> small fraction of what standard graphite would produce. This is the primary control."

and again:

> "Tritium remains the most operationally demanding impurity. The design manages it primarily through
> graphite specification (reducing generation) rather than through circuit design, which is the
> correct order of priority."

The reason is stated in the same section: tritium passes straight through the molecular sieves and
ambient charcoal traps that catch everything else, permeates readily through hot metals into the
primary helium, and has a 12.3 year half-life, so it becomes a long-lived contamination management
problem in a circuit whose whole selling point is that the coolant does not activate.

**Deliberate breeding reverses that decision.** It is worth being precise about which part is reversed
and which part is not.

| VHTR decision | Under deliberate breeding |
|---|---|
| Keep lithium out of the graphite moderator (< 0.1 ppm) | **Unchanged.** The moderator specification stands. |
| Minimise the total tritium source term | **Reversed.** The source term rises by roughly two orders of magnitude. |
| Manage tritium by not making it, rather than by circuit design | **Reversed.** Containment becomes the primary control, not generation. |
| No tritium handling facility on site | **Reversed.** Sealed-pin handling, assay and shipping are added. |

**How big is the reversal.** The VHTR's baseline lithium inventory is whatever the graphite carries.
For a core of order 150 tonnes of graphite at 0.1 ppm, that is about 15 g of natural lithium, of which
7.6% is lithium-6: about 1.1 g, or 0.19 mol of lithium-6 in the entire core, for its entire life.
Deliberate breeding at 1% capture consumes 3.97 mol of lithium-6 per year. **The annual deliberate
production exceeds the total lifetime tritium yield of the graphite impurity by a factor of about
twenty, and the annual rate by roughly two orders of magnitude.** The purification train described in
[06-materials](../../vhtr/design/06-materials.md), which is sized against a source term chosen to be
negligible, is not sized for that.

**Containment during irradiation is the hard part.** Cladding candidates are SiC, which is consistent
with the design's materials strategy (TRISO coatings, turbine blisks), or a nickel alloy with an
alumina permeation barrier, which is the TPBAR approach. But TPBARs work at PWR cladding temperatures
near 300 °C, and permeation is Arrhenius: a VHTR reflector runs hundreds of degrees hotter, and the
permeability rises by orders of magnitude across that gap. **No cladding is a perfect tritium barrier
at these temperatures, and the design must assume a leak fraction rather than zero.** Whatever escapes
enters the primary helium and lands on the purification system. Sizing that leak fraction is the
single question on which the whole proposal turns, and it is not answerable from this repository.

Two things work in the design's favour and should be recorded alongside the objection:

- **There is no steam generator.** The VHTR is a direct Brayton cycle, so tritium in the primary
  helium never meets a water circuit. Its escape routes are permeation through the recuperator and the
  air-cooled precooler into the atmosphere, which is a controlled and monitorable release path rather
  than a contaminated secondary inventory.
- **The purification train already has the right stage.** The cryogenic charcoal trap at about −180 °C
  captures tritium as HT or T₂ on each slip-stream pass. It is sized for a trace source, but the
  architecture does not need to change, only the capacity and the purge cadence.

### 2.7 Is this compatible with the VHTR's mission?

The VHTR exists to sell grid AC: 100 MW(th), direct Brayton, roughly 47% net cycle efficiency, annual
service visits. Breeding targets touch that mission in four places.

**Electricity output: essentially unaffected.** The reactivity cost shows up as a shorter cycle or a
higher fissile loading, not as reduced power. At 1% capture it is manageable within the stated
reactivity budget; at 5% it is not, unless the neutrons come from losses (§2.4).

**Outage cadence: unaffected.** Target exchange rides the existing annual refuelling visit.

**Economics: the helium-3 does not pay for itself at current prices.** Helium-3 trades at roughly
$1,000 to $2,000 per litre at STP, which at 0.135 g/litre is $7,400 to $14,900 per gram, with
$10,000/g as the working reference ([00-summary](00-summary.md) §9). Against a plant selling roughly
47 MW(e) at a **$50/MWh sale price** - not the VHTR's ~$88/MWh LCOE, which is a cost and never a
revenue ([12-economics](../../vhtr/design/12-economics.md)):

| Line | Figure |
|---|---|
| Electricity revenue, 47 MW(e) at 90% capacity factor, $50/MWh sale price | ~$18.5M/yr |
| He-3 revenue at 12 g/yr | $89k to $179k/yr; $120k at the working reference |
| He-3 revenue at 60 g/yr | $444k to $894k/yr; $600k at the working reference |

**The helium-3 is worth between 0.5% and 5% of the electricity.** It therefore cannot justify a
reactivity penalty that costs more than a percent or two of cycle length, and it certainly cannot
justify buying extra fuel to compensate for one. The design goal is not to maximise capture, it is to
capture neutrons that were being wasted anyway and to spend nothing else. Anything more aggressive
than that fails on arithmetic before it fails on physics.
See [10-economics](10-economics.md) and [12-economics](../../vhtr/design/12-economics.md).

**Regulatory category: this is the real cost, and it is not financial.** Producing tritium in a civil
power reactor is precedented, and the precedent is Watts Bar producing tritium for the United States
weapons stockpile. That is precisely why it attracts scrutiny. The material bred here is intended to
decay into fusion fuel and never to be used as tritium, but while it is being held it is
indistinguishable from the other thing, and safeguards are applied to material rather than to
intentions.

This sits directly against the VHTR's own non-proliferation case, which is not incidental to that
design but load-bearing: LEU below 5%, TRISO's intrinsic resistance, no special-access supply chains,
annual removal to a central facility. Adding a bred-tritium inventory to that plant partially
undercuts a story the design is otherwise unusually good at telling. Choosing natural rather than
enriched lithium (§2.5) removes the most sensitive single element of it, and that is a strong argument
for accepting the extra ceramic volume. The residual tension is real and cannot be engineered away;
it is a decision, and it belongs to whoever owns the reactor programme rather than to this one.

## 3. The other routes

### 3.1 Dedicated tritium production reactors

**This works, and it is how every gram of the existing supply was made.** The Savannah River
production reactors bred tritium for the United States stockpile; helium-3 is what that tritium became
while it sat in storage. The supply reaching the market today is the decay product of an inventory
nobody built for this purpose, which is why it is measured in single kilograms per year and why it is
declining.

The assessment is short because the objection is not technical. A reactor optimised for tritium
production rather than for electricity is a weapons-adjacent capability by construction, carries the
regulatory and diplomatic weight that goes with it, and is available to states rather than to
companies. It is the fastest route to kilogram quantities and it is not a route this repository can
take.

### 3.2 Accelerator-driven spallation with a lithium blanket

A 1 GeV proton on a heavy target liberates of order 20 neutrons. For a 1.4 MW proton beam, which is
about the scale of an operating spallation neutron source:

```
  1.4 × 10⁶ W / 1.602 × 10⁻¹⁰ J = 8.74 × 10¹⁵ protons/s
  8.74 × 10¹⁵ × 20 n = 1.75 × 10¹⁷ n/s
```

A dedicated lithium blanket around a spallation target can capture a much larger fraction than a
critical reactor can, because none of the neutrons are needed to sustain anything. At 50% capture:

```
  8.74 × 10¹⁶ T/s × 3.156 × 10⁷ = 2.76 × 10²⁴ atoms/yr = 4.58 mol/yr = 13.8 g/yr of He-3
```

**Roughly the same yield as the VHTR at 1% capture, which makes the energy comparison the whole
argument.** The 100 MW(th) reactor produces 7.58 × 10¹⁸ n/s, forty-three times more neutrons than the
spallation source, while exporting about 47 MW(e). The spallation source produces its neutrons by
consuming roughly 5 MW from the grid, since a 1.4 MW beam needs about that at realistic accelerator
wall-plug efficiency. One machine sells 47 MW and breeds tritium as a by-product; the other buys 5 MW
and breeds tritium as its only product.

The physics is proven and the components exist. The energy economy is simply bad, and no amount of
blanket optimisation fixes a forty-three-fold deficit in the neutron source itself.

### 3.3 D-D fusion

Deuterium-deuterium fusion has two branches of roughly equal probability:

```
  D + D  →  ³He + n   (Q = 3.27 MeV)
  D + D  →  T   + p   (Q = 4.03 MeV)
```

**Both branches yield helium-3**, one directly and one via tritium decay, so a D-D plasma produces one
helium-3 equivalent per reaction. Averaging the branch energies at 3.65 MeV:

```
  1 kg/yr of He-3 = 331.6 mol/yr = 6.33 × 10¹⁸ atoms/s
  6.33 × 10¹⁸ × 3.65 MeV × 1.602 × 10⁻¹³ J/MeV = 3.7 × 10⁶ W
```

**A D-D plasma releasing about 3.7 MW of fusion power would make a kilogram of helium-3 a year**,
which is comparable to the entire current world supply. That number is the argument against the route
rather than for it: anyone able to sustain a few megawatts of D-D fusion has solved the problem the
helium-3 was wanted for, and no longer needs an aneutronic fuel to make the case for fusion. The route
is perfectly circular.

Two further points belong on the record because they touch the originating concept note's motivation
directly. The D-D helium-3 branch emits a neutron, so making helium-3 this way produces exactly the
neutron flux that D-He-3 fusion was chosen to avoid. And a D-He-3 plasma is not truly aneutronic
either: the deuterium in it burns against itself, so D-D side reactions produce neutrons regardless.
The concept note's claim of "no problematic neutron flux" is a reduction rather than an elimination,
and it should be stated that way.

### 3.4 Lunar regolith

Solar wind implants helium into lunar regolith over billions of years, and mature mare regolith
carries helium-3 at 4 to 10 ppb by mass ([01-overview](01-overview.md) §2.1). The physics is not in
question; the logistics are absurd.

At 4 to 10 ppb by mass, at full recovery:

| Quantity | Figure |
|---|---|
| Regolith processed per gram of He-3 | **100 to 250 tonnes** |
| Regolith processed per kilogram | 100,000 to 250,000 tonnes |
| He-3 yielded by 1 km² stripped to 3 m depth (4.5 Mt at 1.5 t/m³) | **18 to 45 kg** |
| Companion He-4 released per gram of He-3 (ratio ~3000) | ~3 kg |
| Thermal energy to heat that regolith by 700 K at cp ≈ 800 J/(kg·K) | 5.6 × 10¹⁰ to 1.4 × 10¹¹ J = **16 to 39 MWh per gram** |

The last row is the one that settles it. Extracting the implanted helium needs the regolith heated to
around 700 °C, so producing one gram of helium-3 requires delivering 16 to 39 MWh of thermal energy
on the lunar surface, before any allowance for excavation, transport, beneficiation or heat recovery,
and before the helium-3 is separated from three kilograms of accompanying helium-4 by exactly the
isotope separation problem described in [06-target-and-capture](06-target-and-capture.md).

**This is a mining and logistics problem, not a physics one**, and it is a mining problem of a scale
that presupposes an established industrial presence on the Moon. It is not a helium-3 supply strategy;
it is something a lunar industrial base might eventually do as a sideline. Anyone proposing it as a
near-term source is proposing lunar industrialisation with the helium-3 attached as a justification.

### 3.5 Separation from terrestrial helium

Helium-3 is present in natural helium at an atomic abundance of order 10⁻⁶, and lower in crustal well
gas where radiogenic helium-4 dilutes it. World helium production runs at roughly 1.6 × 10⁸ m³/yr at
STP, which is 7.1 × 10⁹ mol or about 28,600 tonnes of helium-4:

| Assumed He-3/He-4 | He-3 contained in world annual helium production |
|---|---|
| 1 × 10⁻⁶ | 21.5 kg/yr |
| 1 × 10⁻⁷ | 2.2 kg/yr |

**The entire world helium stream carries a few kilograms to a few tens of kilograms of helium-3 per
year**, which is the same order as the weapons-decay supply it would supplement, and it is already
partly recovered: helium liquefaction plants concentrate helium-3 as a matter of thermodynamics
whether anyone wants them to or not.

The route is bounded in two directions and both matter. It cannot exceed world helium production, so
it does not scale with demand, only with the natural gas industry. And harvesting it requires
isotopically processing the whole stream to recover parts per million, at a cost that has never been
worth paying against a demand measured in tens of kilograms. If helium-3 demand rose by orders of
magnitude, this is the route that would respond first, because the infrastructure exists and only the
economics are missing. It is a price-elastic reserve, not a production programme.

## 4. Recommendation

**The lithium-6 route hosted by the VHTR is the strongest helium-3 option in this repository, and it
is not close.**

- It produces 12 g/yr at a defensible 1% capture, against a laser-route ceiling of 0.240 g/yr at a
  100% efficiency that cannot be approached ([00-summary](00-summary.md) §8; both figures are the
  5 kW array). That is **50 times** the laser route's *theoretical maximum* at 1% capture and 250
  times at 5%, and **eight to nine orders of magnitude** above its canonical realistic output of
  6.78 × 10⁻⁸ g/yr.
- Both steps are settled physics with decades of industrial practice behind them. Nothing has to be
  invented, only engineered.
- The capital is already being spent for another reason. The reactor is built and paid for by
  electricity sales; the targets are a few litres of ceramic in the outer reflector and an annual
  handling operation on an outage that was happening anyway.
- At fleet scale it is genuinely material: 17 units at 5% capture, or 83 at 1%, reach a kilogram a
  year, which is the current world supply. A fleet of 100 MW(th) units on annual service visits is
  exactly what the VHTR programme is for.

**It is not a fusion-fuel supply, and that has to be said as plainly as anything else here.** A
D-³He plant needs of order 90 kg of helium-3 per gigawatt-electric-year
([01-overview](01-overview.md) §1.4). At 12 g/yr a 100 MW(th) VHTR supplies 1.3 × 10⁻⁴ of one
GWe-year, so fuelling a single gigawatt-electric D-³He plant would take about **7,500** such reactors
at 1% capture, or about **1,500** at the 5% case §2.4 above calls unaffordable unless the neutrons
come from what was already being wasted. Even the fleet-scale kilogram a year in the bullet above is
about one ninetieth of one plant's annual fuel, which is another way of saying that the entire current
world supply of helium-3 would run one gigawatt-electric D-³He plant for about four days. What this
route serves is the existing instrumentation-scale market - neutron detectors, dilution refrigerators,
hyperpolarised lung imaging - measured in single kilograms per year worldwide, and against that market
12 to 60 g/yr is a material contribution. Against fusion it is nothing, at any capture fraction and
any fleet size this design contemplates.

**It is not free either, and none of the following should be softened in the telling.** It reverses a
deliberate VHTR design decision, raising the tritium source term by roughly two orders of magnitude in
a reactor that was designed to manage tritium by not making it. It requires the plant to hold 213 g of
tritium at equilibrium at 1% capture, or over a kilogram at 5%. It takes neutrons that would otherwise
sustain the chain reaction, and the optimistic 5% case is only reachable if those neutrons come from
leakage and parasitic capture instead. It adds tritium handling to a plant designed not to need it,
and it puts a bred-tritium inventory on a reactor whose non-proliferation case is one of its better
features. At current prices the product is worth a few percent of the electricity, so the whole thing
is justified by the strategic value of a domestic helium-3 supply and not by its revenue.

**And the laser programme should stop claiming the production mission.** It is a good gamma source, a
real control-systems problem and a legitimate route to a disputed cross-section measurement
([00-summary](00-summary.md) §8). It is not a way to make helium-3, and continuing to describe it as
one costs the credibility of the parts that are genuinely sound.

**As of 2026-09-11 it does not claim it.** The operator closed the production mission outright, so this
section is a recorded finding rather than a recommendation this programme acts on. Everything above is
unchanged and none of it is withdrawn: the arithmetic is the same, ⁶Li(n,α)T in a VHTR-sized core is
still the only route in this repository that reaches grams per year, and it remains the right answer for
anyone who wants helium-3. It is simply no longer this programme's answer, because this programme now
builds a gamma source. See [14-surviving-mission](14-surviving-mission.md).

## Open questions

- [ ] **Monte Carlo capture fraction for reflector-sited lithium targets.** The 1 to 5% range is an
      assumption, and the difference between its ends is the difference between a defensible proposal
      and an unaffordable one. This is the calculation that decides the route.
- [ ] **Reflector thermal flux.** The 10¹³ n/cm²/s used to size the lithium inventory in §2.5 is a
      placeholder. It sets the target mass, the pin count and the lithium-6 burnout rate.
- [ ] **Tritium permeation rate through candidate cladding at outer-reflector temperature.** The single
      question the whole proposal turns on. SiC against nickel alloy with an alumina barrier, measured
      rather than extrapolated from PWR-temperature TPBAR data.
- [ ] **Purification train capacity against a source term two orders of magnitude larger.** Does the
      existing cryogenic charcoal stage and purge cadence in
      [06-materials](../../vhtr/design/06-materials.md) scale, or does it need a dedicated tritium
      removal system?
- [ ] **Control rod worth and shutdown margin with a strong thermal absorber in the outer reflector.**
      A safety-case quantity, not an optimisation.
- [ ] **Sealed pin plenum sizing and end-of-life internal pressure**, including how much of the bred
      tritium stays chemically bound in the ceramic rather than entering the gas phase.
- [ ] **Does the plant's hydrogen production route (see
      [09-hydrogen](../../vhtr/design/09-hydrogen.md)) create a tritium pathway into the product
      stream?** Hydrogen isotope exchange is efficient, and a tritium-contaminated hydrogen product
      would be a serious problem. Flagged rather than assessed; this section has not evaluated that
      section.
- [ ] **Does the helium-3 price hold at fleet scale?** §2.7 books revenue at the current $7,400 to
      $14,900 per gram, and that price is set by a world supply of single kilograms per year. The
      fleet-scale case in §4 reaches a kilogram a year on its own, roughly doubling that supply, and
      the revenue line has not been re-run against the price that would result.
- [ ] **Regulatory classification of a power reactor breeding tritium for civil helium-3 supply**, in
      the jurisdictions the VHTR is aimed at. This is a licensing question that could be decisive
      before any of the physics above matters.

---

*Previous: [10 Economics](10-economics.md) | Next: [References](../references.md)*
