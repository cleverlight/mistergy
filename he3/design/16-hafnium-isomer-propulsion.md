# He-3 Programme - 16 Hafnium Isomer Propulsion

**Status: considered and disproved.** This section records an idea that was put to the programme and
worked through to a negative result, so that the question does not have to be worked through again.

The idea was a rocket engine powered by the nuclear isomer hafnium-178m2. The programme's coherently
combined laser array would charge the hafnium, then trigger it to release its stored energy as a beam
of gamma rays pointed out of the back of the vehicle. Each gamma passing an excited nucleus would
stimulate it to emit another in the same direction, so the release would amplify itself into a
directed exhaust. The inspiration was Project Orion, which pushed a vehicle with nuclear explosions
detonated behind a pusher plate, and the hope was to keep Orion's energy density while replacing its
crude, mostly wasted blast with a controlled, aimed one.

**The idea fails at three independent points, and the third would be fatal even if the first two were
solved:**

1. The laser array cannot charge the isomer (§3).
2. The stored energy cannot be triggered out, and cannot be made to come out in one direction (§4).
3. A perfectly directed gamma exhaust gives the specific impulse of a hydrogen-oxygen engine, about
   451 s, because photons carry the least momentum per joule of anything that could be exhausted (§5).

The useful lesson is the one Orion teaches, which points somewhere else entirely (§6), and the
version of a hafnium rocket that does work in principle needs neither lasers nor a trigger (§7). None
of this bears on the laser array, the coherent combining or the gamma source (§8).

---

## 1. The idea as proposed

| Step | What it was meant to do | Where it fails |
|---|---|---|
| Charge | multiple coherent lasers excite hafnium-178 into its long-lived isomer | §3: an energy gap of two million and a spin gap of 16 units |
| Trigger | a directed gamma beam from the array releases the stored energy on demand | §4.1: triggered release was claimed once and never reproduced |
| Amplify | each emitted gamma stimulates further emission in the same direction | §4.2: the graser dilemma; the stimulated cross-section is effectively zero |
| Thrust | the directed gamma beam leaves the vehicle as exhaust | §5: a photon exhaust gives 451 s at best |

---

## 2. The isomer

These are nuclear data, from the evaluated structure file (ENSDF), not estimates.

| Quantity | Value |
|---|---|
| Nuclide | ¹⁷⁸ᵐ²Hf, the second isomer of hafnium-178 |
| Excitation energy | 2.446 MeV above the ground state |
| Spin and parity | 16⁺, with a large K quantum number that makes its decay strongly hindered |
| Half-life | 31 yr, decaying entirely by internal transition to the hafnium-178 ground state |
| Decay | a cascade of many lower-energy gammas, not one 2.446 MeV line; the strongest are at 426, 326, 574, 213 and 495 keV |

Everything that makes the isomer attractive follows from these figures. The energy stored per gram:

```
  6.022 × 10²³ /mol / 177.94 g/mol = 3.384 × 10²¹ nuclei/g
  3.384 × 10²¹ × 2.446 MeV × 1.602 × 10⁻¹³ J/MeV = 1.326 × 10⁹ J
```

**1.33 GJ per gram**, the energy of about 317 kg of TNT at 4.184 MJ/kg. Against the roughly 13.3 MJ/kg
released by burning hydrogen with oxygen, that is about 10⁵ times more energy per kilogram. It is the
number that makes the isomer look like a propellant, and §5 shows why it is the wrong number to look at.

---

## 3. The laser array cannot charge the isomer

Two gaps separate an infrared laser photon from the isomer, and either alone is decisive.

**The energy gap.** The array's fibre lasers emit at 1.03 µm:

```
  1,239.84 eV nm / 1,030 nm = 1.204 eV per photon
  2.446 × 10⁶ eV / 1.204 eV = 2.03 × 10⁶
```

The isomer sits two million times higher than one laser photon. Piling up infrared photons does not
climb that height, for the reason [03-feasibility](03-feasibility.md) gives for helium-4: a nucleus
absorbs a photon only into a state that exists at that energy, and there is no ladder of nuclear
states spaced an electronvolt apart.

**The spin gap.** The isomer has spin 16 and the ground state spin 0. A photon carries one unit of
angular momentum in a dipole transition and two in a quadrupole one, and each further unit of
angular momentum a transition must carry suppresses it by orders of magnitude. So even a gamma
photon of exactly the right energy cannot place a ground-state nucleus into the isomer.

The array can make photons of the right energy: [05-gamma-source](05-gamma-source.md) produces MeV
gammas by inverse Compton scattering. That closes only the first gap. The second is closed by the
selection rules, not by the source.

**How the isomer is actually made.** It is populated in nuclear reactions that bring in large angular
momentum, such as ¹⁷⁶Yb(α,2n) or the spallation of tantalum by high-energy protons, and only a small
fraction of the products land in the isomer. The samples used in the triggering experiments of §4.1
were under a microgram, and the inventory has never been more than a laboratory quantity. Making
it costs far more energy than it stores, because the accelerator that drives the reaction is
inefficient and the isomer is a small branch of the reaction output, so it is an energy store that is
charged at a heavy loss before any question of release arises.

---

## 4. The release cannot be triggered, or directed

### 4.1 Triggering was claimed once and never reproduced

Spontaneous decay releases the energy over decades, which is useless for a pulsed engine, so the idea
needs a trigger. The record of attempts to find one:

| Year | Event | Outcome |
|---|---|---|
| 1999 | Collins and co-workers report that X-rays from a dental X-ray unit accelerated the decay of a sample under a microgram | an effect of a few percent in the gamma counts, under three standard deviations above background |
| 1999 | a JASON review is asked to assess the claim | judged the result "a priori implausible" and the experiment "inconclusive, at best"; also argued that a chain reaction would fizzle, because the photons escape faster than they can trigger |
| 2001 and 2003 | Ahmad and co-workers repeat the experiment at Argonne's Advanced Photon Source, with a white beam about five orders of magnitude more intense | no induced decay; upper limits on the integrated cross-section more than five orders of magnitude below the claim |
| 2002 | an Institute for Defense Analyses review | found the original paper flawed |
| 2004 | Congress declines to fund DARPA's Stimulated Isomer Energy Release programme | the House Armed Services Committee recommends termination |

The modern, credible version of isomer depletion is far weaker. Nuclear excitation by electron capture
was reported in 2018 to deplete the molybdenum-93 isomer with a probability of about 1%, and a 2022
repetition saw nothing, setting an upper limit of 2 × 10⁻⁵, about 500 times lower. Even taking the
1% figure, it is a depletion probability per isomer nucleus in a beam experiment, not a gain: the
energy spent creating the conditions far exceeds the energy released. **There is no known mechanism
that releases more isomer energy than it costs to trigger.** The sources are in
[`../references.md`](../references.md) > Nuclear isomers and gamma-ray lasers.

### 4.2 Directed emission is the graser problem, and it has no solution here

The self-amplifying, directed release in this idea is a gamma-ray laser, or graser: an emitted photon
stimulates an excited nucleus to emit a second, identical photon in the same direction. The physics
of that has been studied since the 1960s, and the obstacle is known as the graser dilemma.

Stimulated emission is only strong when the emission line is sharp. A long-lived state stores energy
well, but its natural line width is set by its lifetime and is extraordinarily narrow. For the isomer:

```
  mean life = 31 yr × 3.156 × 10⁷ s/yr / 0.6931 = 1.412 × 10⁹ s
  line width = 6.582 × 10⁻¹⁶ eV s / 1.412 × 10⁹ s = 4.66 × 10⁻²⁵ eV
```

Any real solid broadens a nuclear line, through chemical shifts, internal fields, lattice
inhomogeneity and nuclear recoil, by many orders of magnitude more than that. The stimulated-emission
cross-section falls in proportion to the ratio of natural to actual width, so for a 31-year state it
is effectively zero. A short-lived state has a usable line width but cannot be stored long enough, or
pumped fast enough, to build up a population. **States that store energy cannot lase, and states that
can lase cannot store energy.** Two further facts make the isomer an especially poor candidate even
by graser standards:

- **There is no single 2.446 MeV line to stimulate.** The energy comes out as a cascade of lower-energy
  gammas, so there is no one transition along which the release could amplify.
- **Spontaneous emission goes in every direction.** Without amplification, the decay is isotropic, and
  a nozzle cannot steer a photon.

---

## 5. A perfectly directed gamma exhaust is a chemical rocket

Suppose §3 and §4 were solved: the isomer charged cheaply, triggered at will, and every gamma emitted
straight backwards. The engine is then a photon rocket, and its performance is set by the fraction of
the fuel's mass that becomes exhaust energy.

```
  rest energy of a ¹⁷⁸Hf nucleus = 177.94 u × 931.494 MeV/u = 1.6575 × 10⁵ MeV
  fraction released = 2.446 MeV / 1.6575 × 10⁵ MeV = 1.476 × 10⁻⁵
```

A photon of energy E carries momentum E/c, so a nucleus releasing a fraction ε of its rest energy as
directed photons gives the vehicle the momentum that the same nucleus would give if thrown backwards
at ε c. That is the effective exhaust velocity:

```
  effective exhaust velocity = 1.476 × 10⁻⁵ × 2.998 × 10⁸ m/s = 4,425 m/s
  specific impulse = 4,425 m/s / 9.807 m/s² = 451 s
```

**451 s is the specific impulse of a hydrogen-oxygen engine.** The isomer holds about 10⁵ times more
energy per kilogram than hydrogen and oxygen (§2), and a photon exhaust gives that entire advantage
away. The spent hafnium is 99.9985% of the fuel mass and either rides along as dead weight or is
dropped with no thrust from it.

### 5.1 Why photons are the worst possible exhaust

For a fixed exhaust power P, thrust depends on what carries the power away:

```
  photons:                    thrust = P / c
  matter at exhaust speed v:  thrust = 2 P / v
```

So photons give 3.34 × 10⁻⁹ N per watt, which is 3.34 mN per megawatt. Matter exhausted at 10 km/s
gives:

```
  2 × 2.998 × 10⁸ m/s / 10,000 m/s = 59,960
```

**About 6.0 × 10⁴ times more thrust for the same power.** Photons maximise exhaust velocity and
minimise momentum per joule. A photon rocket only pays when the energy source is itself a large
fraction of the fuel's rest mass, as in matter-antimatter annihilation. A nuclear isomer releases
1.5 parts in 10⁵, so it is nowhere near that regime.

| Engine | Specific impulse | Why |
|---|---|---|
| Hydrogen-oxygen chemical | about 450 s | chemical energy into hot exhaust gas |
| **Hafnium isomer, ideal directed photon exhaust** | **451 s** | 1.476 × 10⁻⁵ of rest mass, carried away as photons |
| Solid-core nuclear thermal, NERVA XE-Prime | about 840 s | fission heat into hydrogen, limited by fuel temperature |
| Project Orion, 1958-1965 study | about 2,000 s to 6,000 s across the published designs | bomb energy into propellant mass hitting a pusher plate |

The canonical gamma source of this programme shows the same point at laboratory scale. At its
optimistic 0.5 W of gamma output ([00-summary](00-summary.md) §14), used as a thruster, it would push
with:

```
  0.5 W / 2.998 × 10⁸ m/s = 1.67 × 10⁻⁹ N
```

---

## 6. What Orion actually teaches

Orion did not work because its explosions were aimed. It worked because their energy was **put into
mass**: bomb debris and a slab of propellant packed around each charge struck the pusher plate, and
the plate turned that massive, relatively slow material into momentum. The radiation pattern of the
explosion barely mattered, because the plate did the steering.

That is the lesson for any nuclear energy source, and it inverts the hafnium idea. The goal is not to
make the energy leave in one direction. It is to deposit the energy in a working mass and let a nozzle
or plate direct the mass. §5.1 gives the reason in one line: at a given power, matter at 10 km/s
delivers 6.0 × 10⁴ times the thrust of light.

---

## 7. The version that works in principle, and why it is not worth building

Apply Orion's lesson to the isomer and the engine changes completely.

**The gammas are absorbed, not exhausted.** MeV gammas penetrate centimetres of tungsten, so they make
an excellent volumetric heat source for hydrogen flowing through an absorber. The direction they are
emitted in is irrelevant: the nozzle directs the hydrogen.

**No trigger is needed.** Spontaneous decay already delivers useful power:

```
  decay constant = 0.6931 / (31 yr × 3.156 × 10⁷ s/yr) = 7.084 × 10⁻¹⁰ /s
  power = 1.326 × 10⁹ J/g × 7.084 × 10⁻¹⁰ /s = 0.939 W/g
```

**0.939 W per gram**, about 1.6 times plutonium-238's 0.57 W per gram. A trigger would add only
throttling and the ability to store the energy without leaking it.

**The result is a radioisotope thermal rocket**, a known concept. Its exhaust speed is set by how hot
the absorber can run, so it cannot beat a solid-core nuclear thermal engine, about 840 s, and its
thrust is small. At an ideal exhaust speed of 8 km/s with every watt reaching the exhaust:

```
  0.939 W/g × 1,000 g/kg × 2 / 8,000 m/s = 0.235 N/kg
```

**About 0.23 N of thrust per kilogram of isomer**, at 100% conversion that no real engine reaches. It
is not worth building, for two reasons that do not depend on the engineering:

- **The fuel does not exist in quantity.** §3 records why it is made only in laboratory amounts and at
  a large energy loss.
- **A fission reactor heating hydrogen does the same job far better.** That is a nuclear thermal
  rocket, a close relative of this repository's own [VHTR](../../vhtr/README.md), and it has been
  built and ground-tested. Its fuel is mined rather than accelerator-made, and its power density is
  set by the reactor, not by a 31-year half-life.

---

## 8. What this does not touch

**The verdict is on the nuclear endpoint, not on the laser work.** It is the same distinction
[03-feasibility](03-feasibility.md) draws for helium-3 production. The coherently combined array, its
learned alignment control and the gamma source it drives are unaffected, and the gamma source does
have the property this idea wanted: it is naturally collimated into a cone of half-angle about 1/γ,
0.48 mrad at threshold ([14-surviving-mission](14-surviving-mission.md)). That makes it a good
instrument for photonuclear measurement, including measurement on isomers, and a negligible thruster
(§5.1).

---

## 9. Verdict

**A hafnium isomer rocket of the kind proposed cannot be built, and would not be worth building if it
could.**

| Question | Answer | Closed by |
|---|---|---|
| Can the array charge the isomer? | No | an energy gap of 2.03 × 10⁶ and a spin gap of 16 units |
| Can the stored energy be triggered out? | No credible evidence after independent repetition | §4.1 |
| Can the release be made directed and self-amplifying? | No | the graser dilemma; a 4.66 × 10⁻²⁵ eV line width |
| If all of that worked, how good is the engine? | 451 s, equal to hydrogen-oxygen | photons carry momentum E/c |
| Is there a hafnium rocket that works in principle? | Yes: gammas heating hydrogen, from spontaneous decay | not worth building; a fission reactor does it better |

---

## Open questions

- [ ] **The line broadening in §4.2 is argued qualitatively.** A figure for the narrowest nuclear line
      width achievable in a hafnium host, from Mössbauer practice, would turn "many orders of
      magnitude" into a number, though no plausible value changes the verdict.
- [ ] **The energy cost of producing the isomer in §3 is not calculated.** The best published
      production route, its isomer yield per incident particle and its accelerator efficiency would
      give an energy payback ratio, which this section asserts is far below one without deriving it.
- [ ] **The radioisotope thermal rocket figures in §7 use an assumed 8 km/s exhaust speed** rather
      than one derived from an absorber temperature limit, and ignore the shielding mass a
      kilogram-scale gamma source would need, which would lower the thrust per kilogram of vehicle
      further.
- [ ] **The comparison specific impulses in §5.1 for NERVA and Orion rest on secondary accounts.** The
      primary reports named in [`../references.md`](../references.md) should replace them; no
      plausible correction moves the 451 s figure, which is derived here from nuclear data.
