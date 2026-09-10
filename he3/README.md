# Helium-3 Programme

[![License: CC BY 4.0](https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)

A theoretical programme to produce **helium-3** by photodisintegrating helium-4, using a coherently
combined array of 100-500 phase-locked fibre lasers whose alignment is maintained by a learned
controller rather than a human on an optical bench.

One of the two programmes in this repository - see the [repository index](../README.md) for the other,
a Very High Temperature Reactor design, and for how the two connect.

## Status: read this before the rest

> **The laser array is sound. The helium-3 production claim attached to it is not.**
>
> The array itself - 100-500 coherently combined fibre lasers, actively phase-locked, aligned by a
> learned controller - is a real and worthwhile engineering programme. So is the gamma source it can
> drive. Neither of those conclusions is in doubt and neither is softened anywhere in this set.
>
> The production claim is a different matter. Photodisintegrating helium-4 at 20.578 MeV to make
> helium-3 works as physics, but the energy balance does not close: a 1-5 kW array falls short of the
> originating 50-100 g/day target by a factor of roughly 10⁵ **before** any efficiency is applied, and
> by 10⁹ to 10¹¹ once the real inverse-Compton conversion efficiency and target reacting fraction are
> chained in. That is a thermodynamic shortfall, not an engineering one, so no amount of better
> hardware closes it.
>
> The programme is therefore **rescoped, not abandoned**: it is now a gamma-ray source and photonuclear
> instrument, with the production mission handed to the lithium-6 breeding route in
> [11-alternative-routes](design/11-alternative-routes.md).
>
> **If you want to test whether the rest of this set is trustworthy, read
> [03-feasibility](design/03-feasibility.md) first.** It is the document that makes the negative case,
> in full, against the programme it belongs to. Everything else in the set is written on the
> assumption that you have.

## Concept

Helium-4 absorbs a single photon above 20.578 MeV and splits into helium-3 plus a free neutron. To make
photons of that energy from a 1.03 µm infrared laser you scatter the laser light off a relativistic
electron beam, which needs electrons at **1.06 GeV** for threshold and 1.21 GeV to reach the
cross-section peak near 27 MeV.

The array's 100-500 TW peak power is squarely in laser-wakefield-acceleration territory, so the beam
can be produced in centimetres of plasma rather than tens of metres of conventional linac. That makes
the coherently combined fibre array not an incidental power source but the correct driver for the
accelerator, which is exactly the argument the ICAN and XCAN programmes make. The nuclear endpoint is
wrong; the architecture underneath it is not.

Three corrections to the originating concept note run through the whole set. The helium-3 threshold is
20.578 MeV, not 19.814 MeV - that lower figure is the proton channel, which gives **tritium**. The peak
cross-section is about 1.3 mb, not 8 mb, because helium-4 is the most tightly bound light nucleus and is
anomalously weak in the giant dipole resonance region. And the focal intensity is 1.3 × 10²² W/cm², not
10²⁴: coherent combination multiplies peak intensity by N² relative to a single beam filling the same
aperture, but multiplies available power only by N, and only the second constrains an energy budget.

## Design Documents

| # | Section | Status | Summary |
|---|---|---|---|
| - | [Design Summary](design/00-summary.md) | Draft | All key numbers consolidated - start here |
| 01 | [Overview](design/01-overview.md) | Draft | Mission, architecture, what changed from the concept note |
| 02 | [Nuclear Physics](design/02-nuclear-physics.md) | Draft | Thresholds, cross-sections, why He-4 is uniquely hard |
| 03 | [Feasibility](design/03-feasibility.md) | Draft | The energy balance, the multi-photon assessment, the verdict |
| 04 | [Laser Array](design/04-laser-array.md) | Draft | Sources, coherent combining, thermal management, pulse energy |
| 05 | [Gamma Source](design/05-gamma-source.md) | Draft | Wakefield acceleration and inverse Compton scattering |
| 06 | [Target and Capture](design/06-target-and-capture.md) | Draft | Helium-4 target, product separation, neutron handling |
| 07 | [AI Control](design/07-ai-control.md) | Draft | Alignment as a learning problem; pairwise sampling at full scale |
| 08 | [Proof of Concept](design/08-proof-of-concept.md) | Draft | The $16,700 bench, phases, success criteria |
| 09 | [Roadmap](design/09-roadmap.md) | Draft | PoC to 20 to 100 to 500 beams |
| 10 | [Economics](design/10-economics.md) | Draft | Budget, cost per gram, why the gamma-source framing changes it |
| 11 | [Alternative Routes](design/11-alternative-routes.md) | Draft | Li-6 breeding, VHTR coupling, spallation, lunar regolith |
| 12 | [Intensity Limits](design/12-intensity-limits.md) | Draft | What superposition buys, the focusing ceiling, the commercial laser survey, the temperature question |
| 13 | [Neutron-Free Routes](design/13-neutron-free-routes.md) | Draft | Why the current route cannot be clean, the Li-7 window, and the proton route that needs no accelerator |
| 14 | [The Surviving Mission](design/14-surviving-mission.md) | Draft | What the gamma source is for, why inverse Compton, the applications and the market |
| - | [References](references.md) | Draft | Nuclear data, coherent combining, wakefield sources |
| - | [Origin Note](origin-note.md) | **Superseded** | The concept note this set restructures, kept only so its corrections stay checkable |

## Key Decisions Made

| Topic | Decision |
|---|---|
| Reaction channel | ⁴He(γ,n)³He at 20.578 MeV, single-photon, not multi-photon. **Under review**, see [13-neutron-free-routes](design/13-neutron-free-routes.md) |
| Multi-photon absorption | **Rejected.** He-4 has no bound excited state below breakup; there is no ladder to climb |
| Gamma generation | Inverse Compton scattering off a laser-wakefield electron beam |
| Electron energy | 1.06-1.21 GeV |
| Target | Superfluid He-II at ~2 K (2.18 × 10²² /cm³); gas targets are three orders of magnitude worse |
| Array architecture | Coherently combined, tiled aperture, actively phase-locked |
| Alignment control | Learned controller. Camera feedback and no wavefront sensor at PoC scale; **pairwise pick-off sensing on a two-tier graph at full scale**, because a global metric carries only a 1/N share of the information about any one channel. [07](design/07-ai-control.md) §9 |
| Primary mission | Gamma-ray source and photonuclear instrument |
| Production mission | Reassigned to the Li-6 route, hosted by the VHTR |

## What the programme is for, now

Ranked by confidence that the work is worth doing:

1. **AI-driven coherent beam alignment.** A real, unsolved control problem, demonstrable on a bench
   costing $16,700 in hardware, and valuable to every laser array regardless of what it is pointed at.
2. **A high-flux quasi-monochromatic gamma source** driven by a fibre-laser-driven wakefield stage,
   for photonuclear cross-section measurement, isotope work and nuclear resonance fluorescence assay.
3. **Measuring the ⁴He(γ,n)³He cross-section properly.** It is disputed at roughly a factor of two,
   and settling it is a legitimate contribution in its own right.
4. **Helium-3 production.** Not by this route.

## Relationship to the VHTR programme

The [VHTR programme](../vhtr/README.md) in this repository is a 100 MW(th) helium-cooled reactor, and it
is the natural host for the route that actually produces helium-3: lithium-6 targets irradiated in the
core breed tritium by Li-6(n,α)T, and that tritium beta-decays to helium-3 with a 12.32 year half-life.
At 1-5% neutron capture in the targets the estimate is **12-60 g/yr** of helium-3, which is two to three
orders of magnitude above the optimistic ceiling of the laser route and **eight to nine orders** above
its realistic figure of 6.78 × 10⁻⁸ g/yr.

This is a live tension with the reactor design rather than a settled feature of it. VHTR section 06
currently specifies **low-lithium graphite** precisely to suppress tritium generation, on the grounds
that tritium is a permeation and contamination problem in a helium circuit. Breeding helium-3 on purpose
means putting lithium back - in a separable irradiation target rather than in the moderator - and
accepting the tritium handling that follows. Nothing in the VHTR set has been changed to accommodate it.
The estimate, the neutron budget it would consume and the argument for keeping the moderator
lithium-free are in [11-alternative-routes](design/11-alternative-routes.md).

## Design Heritage

This programme draws on the following, none of which it has built on or been validated against:

- **ICAN** and its successor **XCAN** (Ecole Polytechnique) - coherently combined fibre laser arrays
  proposed and prototyped specifically as drivers for laser-plasma accelerators. This is the closest
  prior art to the array architecture here, and the reason the array is worth building even though the
  nuclear endpoint attached to it is not.
- **HIgS** (High Intensity Gamma-ray Source, Duke University) - a Compton gamma source, and the working
  demonstration that quasi-monochromatic MeV-class photons for photonuclear physics are produced this
  way rather than by piling up infrared photons.
- **ELI-NP** (Extreme Light Infrastructure - Nuclear Physics, Romania) - a gamma beam system built on
  inverse Compton scattering off a conventional accelerator; the reference point for what a serious
  photonuclear facility costs and contains.
- **BELLA** (Berkeley Lab Laser Accelerator) - GeV-class laser-wakefield acceleration in centimetre-scale
  plasma, which is the step this programme needs between its array and its gamma source.
- **Helion Energy** and **TAE Technologies** - the fusion companies whose fuel cycles create the demand
  for helium-3 in the first place, and therefore the reason the production question is being asked at all.

## Standing warning

Every number in this set is an estimate awaiting calculation, apart from the reaction thresholds, which
are nuclear data. Nothing here has been simulated, measured or built. Figures are given with their
derivation so a reader can check them; they have not yet been checked by anyone competent to do it.

Licensed CC BY 4.0. See [LICENSE](../LICENSE).
