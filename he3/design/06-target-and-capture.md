# He-3 Programme - 06 Target and Capture

This section covers everything downstream of the gamma beam: the helium-4 target the photons have to
traverse, how much of the beam reacts in it, what it costs to hold helium in a form dense enough to be
worth irradiating, the windows the beam has to cross to get in, how the helium-3 product would be
separated from the helium-4 it is dissolved in, what to do with one neutron per reaction, and how a
real experiment would detect that the reaction happened at all. The gamma source itself is
[05-gamma-source](05-gamma-source.md); the verdict on the overall energy balance is
[03-feasibility](03-feasibility.md). Every number quoted here comes from [00-summary](00-summary.md).

---

## 1. What the target has to do

The target sits in the middle of a chain of three multiplicative losses:

```
  laser light  ──►  gamma photons  ──►  reactions  ──►  recovered He-3
                    (05, ~10⁻⁴)        (this section)    (this section)
```

Only the middle and right-hand steps belong here. The middle step is the fraction of photons above
20.578 MeV that actually cause ⁴He(γ,n)³He rather than passing through, and it is set by one number:
the areal density of helium-4 nuclei the beam crosses. The right-hand step is the fraction of the
helium-3 atoms produced that can be recovered from the helium-4 they are dissolved in, and it is set
by isotope separation.

**Nothing in this section rescues the programme's production case.** The best available target
configuration improves the reacting fraction by roughly three orders of magnitude over the obvious
one, which is a large factor and worth having, but the shortfall it is working against is eleven
orders. The section is written because the target is genuinely the right design for a
*gamma-source and photonuclear-measurement* instrument, which is what the programme becomes, and
because two of its conclusions are non-obvious and would otherwise be discovered expensively.

## 2. Target configuration: gas against liquid

The fraction of an incident beam that reacts over a path length L is

```
  f = 1 − exp(−n·σ·L)  ≈  n·σ·L        for n·σ·L ≪ 1
```

where n is the number density of helium-4 nuclei and σ is the ⁴He(γ,n)³He cross-section. Taking the
peak value σ = 1.3 mb = 1.3 × 10⁻²⁷ cm²:

| Configuration | n (cm⁻³) | L (cm) | n·σ·L arithmetic | Reacting fraction |
|---|---|---|---|---|
| He-4 gas, 10 bar, 300 K | 2.41 × 10²⁰ | 10 | 2.41 × 10²⁰ × 1.3 × 10⁻²⁷ × 10 | **3.14 × 10⁻⁶** |
| Liquid He-4 | 2.18 × 10²² | 100 | 2.18 × 10²² × 1.3 × 10⁻²⁷ × 100 | **2.83 × 10⁻³** |

The improvement factor is 901, and it decomposes cleanly:

| Contribution | Factor |
|---|---|
| Density, liquid over 10 bar gas (2.18 × 10²² / 2.41 × 10²⁰) | 90.5 |
| Path length, 100 cm over 10 cm | 10 |
| **Product** | **905** |

**Liquid helium-4 is the only target configuration worth designing around.** Three orders of
magnitude is not a refinement; it is the difference between a diagnostic that can be made to work and
one that cannot. Every subsequent decision in this section assumes a liquid target.

### 2.1 What the liquid target costs

The three orders of magnitude are bought with a set of problems that a gas cell does not have:

- **A cryostat in the beam line.** The cell has to hold liquid helium at a few kelvin, along a
  one-metre axis that the gamma beam traverses end to end. That means a vacuum jacket,
  multi-layer superinsulation, a radiation shield and a cold path a metre long, with the beam axis
  clear of all of it. A one-metre cryogenic cell with an unobstructed axial bore is a real piece of
  apparatus, not a bought item.
- **A GeV electron beam a few metres upstream.** The inverse Compton interaction point is close to
  the target by construction (see [05-gamma-source](05-gamma-source.md)), and after the interaction
  essentially the whole electron beam energy is still in the electrons, because the conversion
  efficiency is 10⁻⁴ or worse. At a plausible 100 pC per bunch and 100 Hz, a 1.0 GeV spent beam
  carries 10 W. It must be magnetically swept to a dump *before* the cryostat. If it is not, and it
  lands in the liquid, it deposits roughly 3% of its energy over a metre of liquid helium
  (0.15 radiation lengths), which is 0.3 W straight into a bath whose latent heat of vaporisation is
  about 21 J/g. That is 14 mg/s of boil-off from a stray beam alone.
- **Beam heating that must not boil the target.** Treated separately in §4 below, because the
  arithmetic is more interesting than it looks.

## 3. High-pressure gas as the middle option

The obvious way to avoid cryogenics is to raise the gas pressure instead. Gas density scales linearly
with pressure at fixed temperature, so the scaling is easy to state and easy to over-trust:

| Pressure, 300 K | n (cm⁻³), ideal gas | f over 10 cm | f over 100 cm |
|---|---|---|---|
| 10 bar | 2.41 × 10²⁰ | 3.14 × 10⁻⁶ | 3.14 × 10⁻⁵ |
| 100 bar | 2.41 × 10²¹ | 3.14 × 10⁻⁵ | 3.14 × 10⁻⁴ |
| 1000 bar | 2.41 × 10²² | 3.14 × 10⁻⁴ | 3.14 × 10⁻³ |

Two corrections apply before these are believed. First, helium at 1000 bar and 300 K is not an ideal
gas: its second virial coefficient is positive at room temperature, so the compressibility factor is
comfortably above unity and the real density is materially below the ideal figure. The exact value
awaits an equation-of-state evaluation; the direction is not in doubt. Second, the pressure at which
a gas target becomes competitive is the pressure at which the containment becomes the dominant
engineering problem, and worse, the dominant photonuclear source. That is the subject of §5.

**The verdict on high-pressure gas.** At the pressures a laboratory would actually run, 100 to 300 bar
in a windowed cell, the reacting fraction is one to one-and-a-half orders better than 10 bar and still
one to two orders short of liquid. To match liquid on the arithmetic alone requires 1000 bar *and*
a metre of path, which means a metre-long, thick-walled pressure vessel with the gamma beam entering
and leaving through its end caps. That does not remove the difficulty, it relocates it, and it
relocates it into the one place where it does the most damage. A 4.2 K cryostat is a well-understood
piece of apparatus. A metre-long 1000 bar bore with photon-transparent end windows is not.

## 4. Beam heating and the cryogenic load

The photonuclear channel is a rounding error in the target's energy balance. The electromagnetic
channels are not.

At 20 to 27 MeV, photons in helium interact overwhelmingly by Compton scattering and pair production,
not by photodisintegration. A first-order estimate of the total mass attenuation coefficient for
helium in this range gives roughly 0.015 cm²/g, of which perhaps two thirds is Compton and one third
pair production. Over a metre of liquid at the canonical density the beam crosses about 14.5 g/cm²,
so μx ≈ 0.22 and of order 20% of the beam interacts electromagnetically. This figure is an estimate
from photon-interaction systematics and awaits a proper cross-section lookup, but the order is not in
doubt.

| Channel | Fraction of an incident gamma beam | At the notional 1 kW gamma ceiling |
|---|---|---|
| Electromagnetic deposition (Compton + pair) | ~0.2 | ~200 W into the liquid |
| ⁴He(γ,n)³He, the useful channel | 2.83 × 10⁻³ | ~3 W equivalent |
| Transmitted | ~0.8 | to the beam dump |

**The useful channel is roughly seventy times smaller than the parasitic heating channel.** That is
not a design defect and cannot be engineered away: it is a direct consequence of helium-4 having an
anomalously small photonuclear cross-section while having a perfectly ordinary electron cloud.

What 200 W does to liquid helium is the part worth writing down. The latent heat of vaporisation of
helium-4 is about 21 J/g, which is roughly two orders of magnitude smaller than water's:

```
  boil-off = 200 W / 21 J/g = 9.5 g/s = 66 cm³/s of liquid
```

A one-metre cell of 20 mm bore holds 314 cm³. At the 1 kW gamma ceiling it would boil dry in about
five seconds. Sustaining the target therefore requires either forced circulation from a large external
reservoir with a refrigerator sized for the full deposited power, or operation as a pressurised
single-phase fluid where there is no phase change to run away.

And the refrigerator is expensive in a way that is easy to underestimate. A 4.2 K plant runs at a
Carnot fraction of 4.2/300 = 1.4%, and large real plants reach perhaps 20 to 30% of Carnot, giving
around 250 W of wall-plug power per watt lifted at 4.5 K:

```
  200 W at 4.2 K  ×  250 W/W  ≈  50 kW electrical
```

Against a laser array drawing perhaps 3 to 17 kW from the wall. **At the notional ceiling, the target
refrigerator is the largest electrical load on the site, several times larger than the laser array it
exists to serve.**

The honest coda is deflating. At the realistic inverse Compton conversion efficiency the gamma beam is
not 1 kW, it is of order 0.1 W, and the deposited power is of order 20 mW. That is within the reach of
a two-stage pulse-tube cryocooler costing tens of thousands of pounds. **The thermal problem only
exists at gamma powers the programme cannot reach.** Both statements need to be on the record: the
cryogenic engineering is not a barrier to the experiment, and it would be a very large barrier to the
factory, which is another way of saying the same thing [03-feasibility](03-feasibility.md) says.

### 4.1 Normal liquid or superfluid

The canonical density of 2.18 × 10²² cm⁻³ corresponds to about 0.145 g/cm³, which is the density of
helium-4 below the lambda point rather than of normal liquid at 4.2 K and one atmosphere
(0.125 g/cm³, or 1.88 × 10²² cm⁻³). This matters, and the resolution is probably to run the target
deliberately as He-II at around 2 K, for three separate reasons:

1. It is 16% denser, and density is the whole argument for a liquid target.
2. He-II has an effective thermal conductivity far above any ordinary material, so it moves deposited
   heat to the walls without a boiling front forming in the beam path. A boiling front in the beam
   path is a density modulation the diagnostic cannot correct for.
3. It makes superfluid heat-flush separation available for product recovery (§6).

The cost is a pumped-helium refrigerator at 2 K instead of 4.2 K, which is a further factor of two to
three on the refrigeration power, and a critical heat flux above which He-II reverts to normal fluid
and boils anyway. The choice is flagged in the open questions because the canonical number set should
say which it is.

## 5. Windows and beam entry

A cryogenic cell needs windows: a cold window at each end of the liquid volume and a warm window at
each end of the vacuum jacket. The windows have to hold a pressure differential, survive the beam, not
crack from thermal cycling, and not become an activation problem. The last of these turns out to be the
binding constraint, for a reason that is genuinely absurd when stated plainly.

**Helium-4 has the highest (γ,n) threshold of any stable nuclide, and an anomalously small giant
dipole resonance cross-section on top of that. Every material that can be made into a window is
therefore more photo-reactive than the thing the window contains.**

| Material | (γ,n) threshold | Peak (γ,n) σ, order | n (cm⁻³) | n·σ per cm |
|---|---|---|---|---|
| **He-4 (the target)** | **20.578 MeV** | **1.3 mb** | 2.18 × 10²² | **2.8 × 10⁻⁵** |
| Beryllium | 1.665 MeV | ~1 mb, but open from 1.7 MeV | 1.24 × 10²³ | ~1.2 × 10⁻⁴ |
| Carbon (C-12) | 18.72 MeV | ~10 mb | ~1.0 × 10²³ | ~1.0 × 10⁻³ |
| Aluminium (Al-27) | 13.06 MeV | ~25 mb | 6.03 × 10²² | ~1.5 × 10⁻³ |
| Iron (Fe-56, stainless) | 11.20 MeV | ~50 mb | 8.49 × 10²² | ~4.2 × 10⁻³ |

The peak cross-sections are order-of-magnitude values from giant-dipole-resonance systematics and
await a data-library lookup; the thresholds are nuclear data and are exact.

Putting those numbers against the target:

| Window arrangement | Reactions per incident photon | Compared against |
|---|---|---|
| Two 1 mm aluminium windows, liquid cell | 3.0 × 10⁻⁴ | 11% of the liquid target's 2.83 × 10⁻³ |
| Two 1 mm aluminium windows, 10 bar gas cell | 3.0 × 10⁻⁴ | **96× the gas target's 3.14 × 10⁻⁶** |
| One 10 mm steel end cap, 1000 bar vessel | 4.2 × 10⁻³ | **exceeds the entire liquid target** |

Three consequences follow, and they are the reason this subsection exists:

- **For a gas target the windows are the experiment.** They produce roughly two orders of magnitude
  more photoneutrons than the helium does. Any neutron signal measured from a windowed gas cell is
  overwhelmingly a measurement of the windows.
- **For a high-pressure vessel the containment out-produces the contents.** This is the second and
  decisive argument against the high-pressure route in §3, and it is worse than the first, because
  the containment cannot be made thin.
- **Even for the liquid target the windows are an 11% contamination of the signal**, and their
  products are not benign in the way helium's are. Al-27(γ,n) gives Al-26 with a 7.2 × 10⁵ year
  half-life; the target's own products are stable helium-3 and a free neutron.

**Mitigations, in order of effect.** Choose carbon, which has the highest (γ,n) threshold after helium
itself and so is blind to the whole sub-18.7 MeV part of the beam. Make the windows as thin as the
pressure differential permits, which for a cold window across a few hundred millibars can be tens of
microns. Avoid beryllium despite its status as the default X-ray window material: its 1.665 MeV
threshold is the lowest of any stable nuclide, so it produces neutrons from the entire low-energy tail
of the beam, which is far more intense than the useful above-threshold part. Avoid hydrogenous
polymers containing deuterium for the same reason at 2.225 MeV. For gas targets, eliminate the windows
entirely with differentially pumped apertures, which is standard practice on gas-jet targets. For the
liquid target, windows are unavoidable, and the residual contamination has to be subtracted rather
than eliminated (§8).

## 6. Product separation

The helium-3 recoils with the difference between the photon energy and the threshold, shared with the
neutron by mass ratio. At a 26 MeV photon the excess is 5.42 MeV and the helium-3 takes one quarter of
it, 1.36 MeV, ignoring the photon recoil momentum. A 1.36 MeV helium ion stops within of order 100 µm
of liquid helium, so the product neutralises and stays dissolved in the bath. There is no wall
implantation problem and no separate collection step: the helium-3 simply becomes a trace isotopic
impurity in the helium-4 inventory, which is exactly the difficulty.

### 6.1 How trace is trace

Take a circulating inventory of 10 litres of liquid helium-4, which is a modest cryostat: 1.0 × 10⁴ cm³
at 2.18 × 10²² cm⁻³ is 2.18 × 10²⁶ atoms of helium-4.

| Case | He-3 added in one year | Mole fraction reached |
|---|---|---|
| 1 kW gamma ceiling (3.03 × 10¹⁴ /s) | 9.56 × 10²¹ atoms (0.048 g) | 4.4 × 10⁻⁵ |
| 5 kW gamma ceiling (1.52 × 10¹⁵ /s) | 4.80 × 10²² atoms (0.240 g) | 2.2 × 10⁻⁴ |
| **Canonical realistic (4.29 × 10⁸ /s)** | **1.35 × 10¹⁶ atoms (6.78 × 10⁻⁸ g)** | **6.2 × 10⁻¹¹** |
| **Native He-3 already in ordinary helium** | present from day one | **~1.4 × 10⁻⁶** |

The last row is the one that decides how the experiment is designed. Ordinary helium carries helium-3
at an atomic abundance of order 10⁻⁶, lower in crustal well gas where radiogenic helium-4 dilutes it.
For the 10 litre inventory above that is 3.05 × 10²⁰ atoms, about 1.5 mg, present in the charge before
the beam is ever switched on.

**A year of running at the theoretical 1 kW ceiling would add about 31 times the native content. A year
of running at the canonical realistic rate would add about 4.4 × 10⁻⁵ of it.** That is a part in
twenty-three thousand change in an isotope ratio of 1.4 × 10⁻⁶, accumulated over a full year of beam
time, and it sits two orders below what noble-gas mass spectrometry does routinely. Two things follow:
the target must be charged with isotopically purified helium-4 if the product is ever to be assayed
directly, and the primary diagnostic must not be the product at all (§8).

### 6.2 Cryogenic distillation

Helium-3 boils at 3.19 K and helium-4 at 4.21 K, a large enough difference that the relative
volatility near 3 K is of order 8 to 10. That is a generous single-stage separation factor by the
standards of isotope separation, and the stage count is correspondingly small: lifting a feed at
4.4 × 10⁻⁵ to 99% purity is a change of about 2.2 × 10⁴ in the abundance ratio, which is
ln(2.2 × 10⁴)/ln(8) ≈ 4.8 theoretical stages.

The stage count is not what makes this hard. What makes it hard is:

- The column runs at 3 to 4 K, so the reboiler heat and the condenser refrigeration are both delivered
  by a helium refrigerator, with the wall-plug penalty of §4.
- The entire helium-4 inventory has to be processed to harvest the helium-3, because the helium-3 is
  distributed uniformly through it. Recovering 48 mg means distilling 10 litres of liquid helium.
- The plant runs continuously against a product stream measured in milligrams per year. Its
  hold-up, its leak rate and its own native helium-3 background all have to be smaller than the thing
  it is measuring.

### 6.3 Superfluid heat flush

Below the lambda point at 2.17 K, helium-4 has a superfluid component that carries no entropy. A heat
current drives the normal component away from the heater and the superfluid component towards it, and
helium-3 dissolved in the bath moves with the normal component. The effect is used to make the most
isotopically pure material in existence: helium-4 with helium-3 removed to parts in 10¹⁵.

Run in reverse, it is a collection mechanism rather than a purification one, sweeping helium-3 towards
the cold end of a channel where it can be drawn off. It is attractive here because it needs the target
to be He-II, which §4.1 argues for on independent grounds, and because it separates continuously in
the target loop rather than in a separate plant. It is unproven as a *collection* technique at these
concentrations, and its throughput at useful concentration factors is not established. It is a
research direction, not a design choice.

**Neither route is cheap, and the choice between them is not the difficulty.** At the ceiling rate the
separation plant is asked to find 44 parts per million, which is awkward; at the canonical realistic
rate it is asked to recover 68 ng from ten litres of liquid helium, a mole fraction of 6.2 × 10⁻¹¹
sitting under a native background twenty-three thousand times larger. That is not a separation problem
worth solving, because the quantity recovered would not be worth having. The separation technology is
not the constraint on this programme and should not be presented as though it were.

## 7. Neutron handling

Every reaction emits exactly one neutron, so the neutron rate equals the reaction rate:

| Case | Reactions/s | Neutrons/s | Use it for |
|---|---|---|---|
| 1 kW gamma ceiling | 3.03 × 10¹⁴ | 3.03 × 10¹⁴ | stating the bound only |
| 5 kW gamma ceiling | 1.52 × 10¹⁵ | 1.52 × 10¹⁵ | stating the bound only |
| **Canonical realistic** | **4.29 × 10⁸** | **4.29 × 10⁸** | **shielding, activation, facility design** |

**The facility is sized against the realistic rate, not the ceiling.** The ceiling assumes 100%
laser-to-gamma conversion and 100% absorption in the target, and it describes a source that will not
exist; quoting it as the design source term buys roughly six orders of magnitude of shielding nobody
needs. For scale, a 100 MW(th) reactor runs at 7.58 × 10¹⁸ neutrons per second (see
[11-alternative-routes](11-alternative-routes.md)), so the 1 kW ceiling is 2.5 × 10⁴ times weaker and
corresponds to a reactor of about 4 kW(th), while the canonical realistic rate is 1.8 × 10¹⁰ times
weaker and corresponds to about 6 mW(th). The realistic source term is a laboratory one.

**Energy spectrum.** At threshold the neutron leaves with almost no kinetic energy. Above threshold
the excess is shared by mass ratio, so at a 26 MeV photon the neutron takes three quarters of
5.42 MeV, about 4.1 MeV. These are fast neutrons and must be moderated before they can be captured
efficiently.

**Shielding.** At 1 m from an isotropic 4.29 × 10⁸ /s source the unshielded fluence rate is

```
  4.29 × 10⁸ / (4π × 10⁴ cm²) = 3.4 × 10³ cm⁻² s⁻¹
```

At a fluence-to-dose coefficient of about 4 × 10⁻¹⁰ Sv·cm² for few-MeV neutrons, that is
1.4 × 10⁻⁶ Sv/s, or about 4.9 mSv/h at a metre. Reaching a 1 µSv/h occupied boundary needs 3.7
decades of attenuation, which is roughly 0.8 m of ordinary concrete at a fast-neutron tenth-value
layer of ~21 cm, and less again once standoff is counted, since every doubling of distance is worth
0.6 of a decade on its own. Borated polyethylene for the moderation and capture stages, with a high-Z
layer for the 2.2 MeV capture gammas, plus a few metres of standoff, reaches the boundary without a
bunker. **This is a shielded laboratory enclosure with an interlocked radiation area, not the two
metres of concrete the ceiling figure implies.** The ceiling stays on the record as the bound it is:
at 3.03 × 10¹⁴ /s the same arithmetic gives 2.41 × 10⁹ cm⁻² s⁻¹, about 3.5 × 10³ Sv/h at a metre and
9.5 decades of attenuation, and that is where the 2 m came from.

The photoneutrons are in any case unlikely to be the dominant radiological source term on the site.
The spent electron beam carries about 10 W at 1.0 GeV into a dump a few metres from the target
(§2.1), and a GeV-class beam dump is a photoneutron and activation source in its own right. The
facility is more likely to be sized against the dump than against the target, and that is a
calculation this section has not done.

**Activation.** Fast neutrons activate everything within the shield. The species that set the
decommissioning cost are the familiar ones: Co-59(n,γ)Co-60 from the cobalt impurity in stainless
steel, at 5.27 years; Fe-58(n,γ)Fe-59 at 44.5 days; Al-27(n,α)Na-24 at 15 hours, which dominates the
dose rate for the first day after a run and then disappears. Material selection inside the shield
(low-cobalt steel, aluminium in preference to steel where strength permits) is worth doing at design
time and impossible to retrofit. The activated inventory scales with the source term, so at
4.29 × 10⁸ n/s it is modest rather than decommissioning-driving; the material selection is worth doing
anyway, because it costs nothing at design time and the beam dump is activating the same hall.

**Using the neutrons rather than absorbing them.** A lithium blanket around the target would capture
neutrons in Li-6(n,α)T and breed tritium, which decays to helium-3. This is the same chemistry that
[11-alternative-routes](11-alternative-routes.md) recommends for the VHTR, and it is worth doing here
for shielding reasons regardless of yield, because Li-6 is an excellent thermal absorber. But it is
worth being precise about what it buys. The stoichiometry is one neutron per reaction and one
helium-3 per reaction, so **capturing every single neutron in lithium would exactly double the
programme's helium-3 output.** A factor of two against a shortfall of 2.7 × 10¹¹ is not a rescue, and
the observation is useful mainly because it demonstrates that the problem is the reaction rate and not
the capture scheme. No improvement in capture, separation or blanket design can change the conclusion.

## 8. Instrumentation: detecting that the reaction happened at all

The product is a stable, chemically inert, isotopically dilute gas dissolved in a much larger
inventory of a chemically identical gas. The neutron is a prompt, penetrating, easily detected
particle emitted at the moment of the reaction. **The diagnostic is neutron counting, and it is not a
close call.**

### 8.1 Why not assay the product

Noble-gas mass spectrometry measures helium-3 to helium-4 ratios down to about 10⁻⁸ routinely, which
sounds ample until §6.1 is applied: the required measurement is a 4.4 × 10⁻⁵ *relative* change against
a 1.4 × 10⁻⁶ native background, which is 6.2 × 10⁻¹¹ absolute, two orders below the routine floor and
accumulated over a full year of beam time. Isotopically purified feedstock removes the background but
not the sensitivity limit. Direct assay of the product is therefore a year-long measurement at the
edge of the technique, competing against a neutron count that gives the same answer in seconds. It is
not the diagnostic.

### 8.2 What a neutron counter would see

Take a moderated array of counters around the target subtending roughly half of 4π with about 20%
intrinsic efficiency after moderation, giving a total detection efficiency of order 10%:

| Reaction rate | Detected counts/s | Against a ~1 count/s shielded background |
|---|---|---|
| 1 kW ceiling, 3.03 × 10¹⁴ /s | 3.0 × 10¹³ | detector saturated, use current mode |
| 5 kW ceiling, 1.52 × 10¹⁵ /s | 1.5 × 10¹⁴ | detector saturated, use current mode |
| **Canonical realistic, 4.29 × 10⁸ /s** | **4.3 × 10⁷** | **4 × 10⁷ : 1, and already above pulse-counting rates** |
| Pessimistic (10⁻⁵ conversion), 4.29 × 10⁷ /s | 4.3 × 10⁶ | 4 × 10⁶ : 1, still above pulse-counting rates |

**This is the section's most encouraging result and it deserves to be stated in its own right: at the
canonical realistic rate the reaction is not merely detectable but bright - eleven orders of magnitude
below anything commercially useful, and still seven orders above the shielded background.** The
physics experiment works even though the factory does not, and the margin is wide enough that the
measurement survives a further two or three orders of pessimism about the conversion efficiency. That
is precisely the argument for rescoping the programme as a gamma source and a photonuclear instrument
([00-summary](00-summary.md) §1).

### 8.3 Two things that will go wrong

**Pulse structure saturates a counting chain.** The array fires at 100 Hz in 100 fs bursts, so all of
a pulse's neutrons arrive together and are then spread over the moderation time, of order 10 to 100 µs.
At the canonical realistic rate of 4.29 × 10⁸ /s that is 4.3 × 10⁶ neutrons per pulse arriving inside
~100 µs, an instantaneous emission rate near 4.3 × 10¹⁰ /s. A helium-3 proportional tube with a
microsecond dead time cannot count that; it will report a fraction of the truth and report it
smoothly, which is worse than reporting nothing. **At the corrected rate the current-mode or
Campbelling channel is the primary instrument and pulse counting is the auxiliary one, which is the
opposite of the way a low-rate photonuclear experiment is usually built.** The design must provide
both, with an overlap region where the two are cross-calibrated, and reaching that overlap is not
trivial: lowering the repetition rate cuts the average rate without touching the within-pulse pile-up
that causes the dead time. Activation foils give a third, slow, absolutely calibrated cross-check that
is immune to dead time entirely.

**Window photoneutrons are indistinguishable from target photoneutrons.** §5 puts them at 11% of the
signal for a liquid target with thin aluminium windows, and there will be further photoneutrons from
collimators, the electron beam dump and the interaction region. A neutron counter cannot tell them
apart by energy or timing. Two subtractions work:

- **Fill-empty subtraction.** Run with the cell full and with it evacuated and take the difference.
  This is standard practice and it works, at the cost of doubling the beam time and requiring the
  beam to be stable between the two runs.
- **A threshold scan, which is the better measurement.** Helium-4 has the highest (γ,n) threshold of
  any stable nuclide. Every other material in the apparatus is therefore already above its own
  threshold at 19 MeV and contributes a smooth, slowly varying background. Sweeping the inverse
  Compton photon energy from 19 to 23 MeV and looking for a step at 20.578 MeV isolates the helium
  signal by its threshold rather than by subtraction. It is also, not coincidentally, exactly the
  measurement needed to settle the ⁴He(γ,n)³He cross-section, which is disputed at roughly a factor of
  two ([02-nuclear-physics](02-nuclear-physics.md)). **The right first experiment for this apparatus
  is a threshold scan, and it produces a publishable physics result whether or not any helium-3 is
  ever recovered.**

### 8.4 The detector consumes more helium-3 than the experiment makes

Worth stating because it is true, checkable and a fair summary of the whole programme. The standard
thermal-neutron detector is a helium-3 proportional tube. A 25 mm diameter, 300 mm long tube filled to
10 bar holds 147 cm³ at 2.41 × 10²⁰ cm⁻³, which is 3.55 × 10²² atoms, or **0.178 g of helium-3**.
Annual production at the 1 kW theoretical ceiling, with perfect conversion and perfect absorption, is
0.048 g. **A single detector tube contains about 3.7 years of the programme's theoretical maximum
output, and about 2.6 million years of its canonical realistic output.** A counter array uses several
such tubes. Boron trifluoride or lithium-6 glass detectors avoid the irony at some cost in efficiency,
and should be specified for that reason as much as for supply-chain ones.

## Open questions

- [X] **Which liquid phase is the canonical target?** Resolved in favour of this section's reading.
      2.18 × 10²² cm⁻³ is the density of He-II at about 2 K, not of normal liquid at 4.2 K and one
      atmosphere (1.88 × 10²² cm⁻³). [00-summary](00-summary.md) carried the right value under the
      wrong label and has been corrected: the canonical target is now **superfluid He-II at ~2 K**,
      adopted deliberately on the density, heat-transport and separation grounds argued in §4.1, with
      the 4.2 K figure recorded alongside it as the alternative. Every figure derived from
      2.18 × 10²² stands unchanged.
- [ ] **Photon attenuation in helium at 20 to 30 MeV.** The ~0.015 cm²/g figure driving the whole
      cryogenic load estimate in §4 is from systematics, not from a data library. A lookup would
      settle the deposited power to within a factor rather than an order.
- [ ] **Giant dipole resonance peak cross-sections for candidate window materials.** The window table
      in §5 uses order-of-magnitude values. The conclusions are robust to a factor of two but the
      11% signal contamination figure is not quotable until these are looked up properly.
- [ ] **Window thickness against pressure differential and thermal cycling.** How thin can a cold
      carbon window be at a few hundred millibars differential across 20 mm of bore, surviving
      repeated cooldowns from 300 K to 2 K?
- [ ] **Critical heat flux for a He-II target in a one-metre bore.** Sets the deposited power at which
      the superfluid reverts to normal fluid and the density in the beam path stops being uniform.
      Retargeted: at the canonical realistic deposit of order 20 mW this is nowhere near binding, so it
      is a question for the ceiling case in §4 and not for the experiment that will actually be built.
- [ ] **Superfluid heat flush as a collection rather than a purification technique.** Established for
      removing helium-3 to parts in 10¹⁵; unestablished as a way of concentrating and drawing it off.
      Throughput and achievable concentration factor both awaiting calculation.
- [ ] **Native helium-3 abundance in the specific feedstock available.** The 1.4 × 10⁻⁶ figure is
      atmospheric; crustal well helium is generally lower. The number matters because it sets the
      floor for any direct product assay.
- [ ] **Detector dead time against the 100 Hz pulse structure.** Retargeted by the corrected rate: at
      4.29 × 10⁸ /s the instantaneous emission rate inside a pulse is ~4.3 × 10¹⁰ /s, so current mode
      is the primary channel and pulse counting the auxiliary one, not the other way round. The open
      question is how to reach an overlap where the two cross-calibrate, given that lowering the
      repetition rate reduces the average rate without touching the within-pulse pile-up.
- [ ] **Which source term actually sizes the facility, the target photoneutrons or the electron beam
      dump?** §7 puts the target at 4.29 × 10⁸ n/s, needing roughly 0.8 m of concrete at a metre. The
      10 W spent electron beam at 1.0 GeV a few metres upstream has not been costed as a source at all,
      and it is the likelier driver of the shielding, the activation inventory and the hall layout.

---

*Previous: [05 Gamma Source](05-gamma-source.md) | Next: [07 AI Control](07-ai-control.md)*
