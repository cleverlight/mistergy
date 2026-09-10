# References

**This is a reading map, not a formal bibliography.** Entries are given as programmes, facilities,
databases and bodies of work rather than as formatted citations, deliberately: a reference with an
invented author, volume or DOI is worse than no reference at all, because it looks checkable and is not.
Where a specific result matters, this file says what to look for and where the authoritative version of
it lives, and leaves the reader to retrieve the primary source themselves.

Two standing cautions apply to everything below.

- **Every figure quoted anywhere in `he3/design/` should be traceable to
  [`design/00-summary.md`](design/00-summary.md), and checked against primary data before it is relied
  on.** Nothing in this set has been simulated, measured or built.
- **The ⁴He(γ,n)³He cross-section is genuinely disputed**, at roughly a factor of two. Do not treat the
  ~1.3 mb peak used throughout this set as settled. The nuclear data group below says where to see the
  spread for yourself.

## Nuclear data and evaluated files

This is the only group in this file that carries authority rather than context. The reaction thresholds
used throughout the set are derived from evaluated mass and level data, not from any paper cited here,
and they are the one class of number in the programme that is not an estimate awaiting calculation.
Anyone checking this work should start here and work outwards.

- **ENSDF** (Evaluated Nuclear Structure Data File), maintained by the National Nuclear Data Center at
  Brookhaven National Laboratory. The authority for level schemes, separation energies and half-lives,
  including the tritium half-life of 12.32 yr used in [11-alternative-routes](design/11-alternative-routes.md)
  and the position of the helium-4 0⁺₂ resonance near 20.21 MeV that
  [02-nuclear-physics](design/02-nuclear-physics.md) turns on.
- **AME2020**, the 2020 Atomic Mass Evaluation. The mass excesses from which the 20.578 MeV (γ,n),
  19.814 MeV (γ,p) and 23.847 MeV (γ,d) thresholds follow by arithmetic. If a threshold in this set is
  wrong, it is wrong here first and everything downstream inherits the error.
- **ENDF/B**, the US evaluated nuclear data library, and the NNDC's Sigma retrieval interface over it.
  The source for the Li-6(n,α)T cross-section behind the breeding estimate in section 11.
- **EXFOR**, the IAEA Nuclear Data Section's database of experimental reaction data, compiled by the
  international NRDC network. **This is where to look at the helium-4 photodisintegration disagreement
  directly.** Retrieve every ⁴He(γ,n) dataset and plot them together: the spread between measurement
  campaigns is visible without any interpretation, and it is why section 02 states a cross-section with
  a factor-of-two caveat rather than a number.
- **The IAEA Photonuclear Data Library**, first issued as a handbook of photonuclear cross-sections and
  spectra in 2000 and revised roughly two decades later. The evaluated counterpart to the EXFOR
  compilation, and the practical starting point for giant dipole resonance parameters.
- **The Centre for Photonuclear Experiments Data (CDFE)** at the Skobeltsyn Institute, Moscow State
  University. Maintains photonuclear compilations and giant dipole resonance parameter systematics that
  are useful for cross-checking the IAEA library.

**On the helium-4 disagreement specifically.** Several measurement campaigns from the 1960s onwards
report ⁴He(γ,n)³He peak cross-sections that differ by about a factor of two, and a laser-Compton
photon-beam measurement in the mid-2000s came in substantially below much of the earlier data. The
disagreement has not been closed. Resolving it is item 3 in the rescoped programme's list of things
worth doing, and it is one of the few contributions this programme could make that nobody has made
already.

## Photonuclear physics and the giant dipole resonance

Context for why helium-4 behaves as it does. The giant dipole resonance is the collective oscillation of
protons against neutrons that dominates photoabsorption for most nuclei in the 10-30 MeV band, and the
Thomas-Reiche-Kuhn sum rule sets the total integrated strength available to it. The reason helium-4 is
a poor photonuclear target is not obscure - it is the most tightly bound nucleus per nucleon in the light
mass region, it has no bound excited state at all, and its dipole strength is spread thinly above a high
threshold rather than concentrated in a strong resonance.

- Standard graduate nuclear structure texts covering collective excitations, the giant dipole resonance
  and the dipole sum rule. Any of the established ones will do; this set does not depend on a particular
  treatment.
- Few-body and ab initio calculations of the helium-4 photoabsorption cross-section. This is an active
  theoretical area precisely because helium-4 is small enough to compute from a nucleon-nucleon
  interaction and awkward enough that the answers have historically disagreed with each other and with
  experiment. Search on helium-4 photodisintegration alongside the method names used in the field.
- Nuclear resonance fluorescence assay literature, as the application area that makes a
  quasi-monochromatic MeV gamma source useful for something other than this programme's original purpose.

## Compton gamma sources

The prior art that makes the rescoped programme credible. Every existing facility that produces
quasi-monochromatic photons in the 1-30 MeV band does it by scattering laser light off a relativistic
electron beam, which is the step the originating concept note drew as a single block labelled
"Compton backscatter converter". These are the machines to compare against.

| Facility | Location | Electron source | What it demonstrates |
|---|---|---|---|
| **HIgS** | Duke University / TUNL, USA | Storage ring with free-electron laser | Long-running photonuclear physics programme on a Compton source; the reference for what such a beam is actually used for |
| **ELI-NP** | Magurele, Romania | Conventional warm linac | Purpose-built gamma beam system at high spectral density; the reference for cost, footprint and complexity of a serious facility |
| **NewSUBARU** | SPring-8 campus, Japan | Storage ring | Laser-Compton photon beams used for photonuclear cross-section measurement, including light-nucleus work |

- The general body of inverse Compton scattering source work, covering the ~4γ²E_laser scaling, the
  bandwidth-versus-flux trade against collimation angle, and the spectral density figures of merit these
  facilities are compared on. [05-gamma-source](design/05-gamma-source.md) uses that scaling to get the
  1.06 GeV electron energy for a 20.578 MeV photon off 1.03 µm light.
- Facility design reports and technical design reports for the machines above, which are the realistic
  place to find engineering numbers rather than physics scaling laws.

## Laser-wakefield acceleration

The step that would let this programme reach GeV electrons without a conventional accelerator, and the
reason the array is the right driver rather than an incidental power source. The scaling literature here
is mature enough to sanity-check a design and immature enough that nobody should assume a quoted result
transfers to a different laser.

- **BELLA**, the Berkeley Lab Laser Accelerator at Lawrence Berkeley National Laboratory. Multi-GeV
  electron beams from centimetre-scale capillary discharge plasma channels, and the staged-acceleration
  work that follows from them. This is the closest existing demonstration of the accelerator stage this
  programme needs.
- The original laser-wakefield proposal (Tajima and Dawson, 1979) and the body of scaling work that
  followed it, covering the bubble or blowout regime, dephasing and depletion limits, the a₀ parameter
  and matched-spot conditions. These are the relations [05-gamma-source](design/05-gamma-source.md) uses
  to argue that 100-500 TW is in wakefield territory.
- The 2004 experiments that first produced quasi-monoenergetic wakefield beams, and the review
  literature that consolidated them. Worth reading for how quickly the field moved and how much of the
  early promise turned into engineering difficulty.
- **Apollon** (France) and the other multi-petawatt user facilities, as the class of machine wakefield
  work is currently done on, and therefore as the thing a fibre-array driver would have to compete with
  on repetition rate and wall-plug efficiency rather than on peak power.

## Coherent beam combining

**The most directly relevant prior art in this file.** The array architecture in
[04-laser-array](design/04-laser-array.md) is not a new idea; it is a specific instance of a concept that
has been argued for, funded and prototyped in Europe for over a decade, and the argument made for it
there is the same one this programme makes: fibre lasers have the wall-plug efficiency and repetition
rate that accelerator drivers need, and the only way to get useful pulse energy out of them is to combine
many of them coherently.

- **ICAN**, the International Coherent Amplification Network, a European collaboration led from Ecole
  Polytechnique that set out the case for large coherently combined fibre arrays as the drivers for
  laser-plasma accelerators. Its concept paper is the origin of the framing this programme has arrived at
  independently, and reading it is the fastest way to see which problems are already understood.
- **XCAN**, the ICAN successor programme at Ecole Polytechnique with Thales, which built the actual
  demonstrator: a tiled-aperture array of tens of fibre amplifiers, actively phase-locked, with the
  combining efficiency measured rather than asserted. The engineering constraints reported there apply
  directly to sections 04 and 08.
- The general body of work on phase-locked fibre arrays, covering tiled versus filled aperture, the
  stochastic parallel gradient descent and LOCSET phase-locking approaches, combining efficiency versus
  element count, and the residual phase error budget that determines it. Search on coherent beam
  combining of fibre lasers; there are several well-established review articles.
- The femtosecond coherent combining literature specifically, which is a harder problem than
  continuous-wave combining because it requires matching spectral phase and pulse timing as well as
  optical phase. This is where the constraint behind the 0.10 J per-laser pulse energy problem lives:
  fibre chirped-pulse amplification is limited to the millijoule scale per channel by nonlinearity and
  damage, and no combining scheme relaxes that per-channel limit.

## Focused intensity, records and the commercial catalogue

Added with [12-intensity-limits](design/12-intensity-limits.md), which is the only section that leans
on vendor literature. Catalogue specifications change without notice, so every figure in that section
should be re-checked against a current datasheet before it is relied on, and none of them has been
confirmed by quotation.

- **J. W. Yoon, Y. G. Kim, I. W. Choi, J. H. Sung, H. W. Lee, S. K. Lee and C. H. Nam, "Realization of
  laser intensity over 10^23 W/cm^2", Optica 8(5), 630-635 (2021), doi:10.1364/OPTICA.420520.** The
  standing world record for focused laser intensity and the benchmark section 12 validates its
  focusing arithmetic against. Read it for the two-stage adaptive optics and the f/1.1 off-axis
  parabola, and note the 0.1 Hz shot rate, which is the comparison that matters to an array.
- **"First experimental demonstration of coherent beam combining of more than 100 beams", Photonics
  Research 8(12), 1943 (2020).** The channel-count record for coherent combining, at 107 phase
  modulators with fringe contrast above 96%. It is a continuous-wave fibre result, not femtosecond and
  not thin-disk, which is exactly the gap section 12's open questions record.
- **Manufacturer datasheets** for the systems tabulated in section 12 section 3.1: TRUMPF Scientific
  Lasers (Dira series, thin-disk, to 1 J), Light Conversion (PHAROS and CARBIDE, to 5 mJ), Amplitude
  (Satsuma and Tangor, fibre, to 1 mJ). All three publish specification tables and none publishes a
  price.
- **The high-average-power coherent combining literature from Jena and its collaborators**, covering
  10.4 kW from twelve coherently combined step-index fibre amplifiers at 254 fs, and 10 mJ at 1 kW and
  120 fs from sixteen rod-type amplifiers. These are the measured data points behind section 04's
  claim that the millijoule per channel ceiling is physical rather than an effort problem, and they are
  the closest thing in the record to the array this programme describes.

## Machine learning for adaptive optics and beam control

An active field rather than a settled one, which is exactly why item 1 in the rescoped programme is worth
doing. The concept note cited several items in this area that could not be verified as real publications,
so they are deliberately not reproduced here; what follows describes where the field is instead.

- **Wavefront-sensorless adaptive optics using learned controllers.** Reinforcement learning and
  supervised approaches that optimise a metric read off a camera rather than reconstructing a wavefront
  from a Shack-Hartmann sensor. This is the shape of the control problem at proof-of-concept scale in
  [07-ai-control](design/07-ai-control.md) and the reason the proof-of-concept bench in
  [08-proof-of-concept](design/08-proof-of-concept.md) can omit a wavefront sensor entirely. It is not
  the full-scale formulation: §9 of that section replaces the camera metric with pairwise pick-off
  sensing, so this literature covers the bench rather than the array.
- **Deep learning applied to coherent beam combining phase control**, which has been an actively
  published topic in the optics literature over the last several years. Search on deep learning or
  reinforcement learning together with coherent beam combining and phase locking; results appear across
  the main optics journals rather than concentrated in one venue.
- **Astronomical adaptive optics** as the mature parent field, whose predictive control and
  sensorless-optimisation work predates the machine learning framing and is where the well-characterised
  benchmarks live.
- Standard reinforcement learning and Bayesian optimisation references for the algorithms themselves.
  Section 07 treats the algorithm choice as a design decision with three named options rather than as a
  research contribution, so any current textbook treatment is sufficient.

## Helium-3 supply, demand and the fusion fuel cycle

Why anyone wants helium-3 at all, and what the actual supply position is. The demand case rests on
private fusion companies whose published fuel-cycle claims should be read as company positions rather
than as settled engineering; the supply figures rest on a US government programme that publishes them.

- **Helion Energy** (Everett, Washington). A pulsed non-ignition fusion concept with direct electrical
  recovery, targeting a deuterium-helium-3 cycle and breeding its own helium-3 from deuterium-deuterium
  reactions rather than sourcing it. Their public material is the clearest statement of why a
  low-neutron-yield cycle is attractive and what it would take to fuel one.
- **TAE Technologies** (Foothill Ranch, California). A field-reversed configuration programme whose
  long-term target is proton-boron-11, with deuterium-helium-3 as a staging point. Relevant here as the
  second commercial actor whose roadmap creates helium-3 demand.
- **The US DOE Isotope Program** and its National Isotope Development Center, which is the reference for
  actual helium-3 availability and pricing rather than for aspirational demand. Current supply comes
  almost entirely from tritium decay in the weapons complex.
- **US Government Accountability Office reporting on the helium-3 shortage** (early 2010s), which
  documents how the supply constraint emerged when neutron-detector demand for homeland security
  applications collided with a stockpile-decay supply that cannot be scaled on demand. This is the
  clearest public account of why the supply curve is inelastic, and it underwrites the framing in
  [10-economics](design/10-economics.md).
- **The University of Wisconsin Fusion Technology Institute's body of work on lunar helium-3**, from the
  1980s onwards. The origin of the lunar regolith mining proposals assessed and set aside in
  [11-alternative-routes](design/11-alternative-routes.md); worth reading for the regolith concentration
  figures, which are the part of that argument that does not depend on the launch economics.

## Lithium-6 breeding and tritium handling

The route the production mission is actually assigned to, in
[11-alternative-routes](design/11-alternative-routes.md). Unlike everything else in this file, this is
not a research frontier: Li-6(n,α)T is a large, well-measured thermal cross-section, and tritium has been
produced deliberately in reactors for decades. The open questions are engineering ones about target form,
neutron economy and containment, not physics ones.

- **ENDF/B evaluated cross-sections for Li-6(n,α)T**, retrieved through the NNDC. The thermal capture
  cross-section is large and well characterised, and it is the input the 12-60 g/yr estimate rests on.
- **The ITER tritium breeding blanket programme** and the wider fusion blanket literature, covering solid
  lithium ceramic breeders, liquid lithium-lead, tritium release and recovery from breeder materials, and
  achievable tritium breeding ratios. This is the mature source for target form-factor decisions.
- **The US tritium production programme at TVA Watts Bar**, which produces tritium in a commercial light
  water reactor using tritium-producing burnable absorber rods. The working demonstration that
  lithium-bearing targets can be irradiated in an operating power reactor and the tritium recovered,
  which is the closest existing analogue to what section 11 proposes for the VHTR.
- **Tritium permeation and containment literature for helium-cooled systems**, which is the specific
  reason the VHTR set specifies low-lithium graphite in the first place. See
  [`../vhtr/design/06-materials.md`](../vhtr/design/06-materials.md) and the tritium entries in
  [`../vhtr/references.md`](../vhtr/references.md), which cover HTTR tritium measurements and helium
  circuit chemistry directly.

## On the originating concept note's reference list

The originating concept note is retained, superseded and clearly marked as such, at
[`origin-note.md`](origin-note.md), so that the corrections this set makes to it stay checkable against
the source rather than against a paraphrase. It carries a short reference list in its Appendix C. Several entries in it could not be verified as real,
specifically-identified publications: some name a journal or repository without an article, one names a
web publisher rather than a research source, and one cites a university department rather than a paper.
They have not been carried over. Where the underlying topic is real and relevant - deep learning for
coherent beam combining, sensorless adaptive optics, helium-4 photodisintegration measurements, the
Helion and TAE fuel cycles - it is covered generically in the groups above, which is the honest form for
material nobody in this programme has read in the original.
