# Todo


### Decide the reaction channel, now that neutron-free routes exist [](?id=neutron-free-reaction-channel)

`he3/design/13-neutron-free-routes.md` finds that ⁴He(γ,n)³He cannot be operated without producing a
free neutron per reaction, and that two alternatives can. ⁶Li(p,α)³He is exothermic, neutron-free,
tritium-free, roughly 180x the cross-section, 364x the canonical rate, and needs no GeV accelerator at
all. That makes it a candidate to replace the reaction channel, which is a Key Decision, so the choice
is the operator's rather than an edit.

+ [ ] read the measured ⁶Li(p,α)³He excitation function from EXFOR and replace the S-factor extrapolation in §4.2
+ [ ] establish the ⁷Li(γ,t)⁴He cross-section in the 2.468-7.251 MeV window, which section 13 does not have
+ [ ] compute the neutron floor set by residual ⁷Li, given ⁷Li(p,n)⁷Be at 1.880 MeV
+ [ ] establish whether TNSA conversion efficiency survives a 1 kHz renewable-foil target
+ [ ] establish TNSA conversion efficiency at 6.2 x 10¹⁹ W/cm², which §4.5 shows the neutron window requires
+ [ ] assess whether a conventional proton accelerator replaces the laser as the source, per §4.6
+ [ ] decide the channel, then restage 02, 04, 05, 06, 07 and 09 against it, or record why the current channel stands
+ [ ] update the key-decisions tables in `00-summary.md` §11 and `he3/README.md` either way
+ note: adopting the proton route deletes `05-gamma-source.md` as a required subsystem and, per §4.6, removes the He-3 mission as a justification for the coherent combining of `04` and the phase control of `07`; that is the largest structural change available to this programme
+ note: the production verdict does not move - 7.4e7 short at best - so this decides the instrument, not the mission


### Price the commercial thin-disk array [](?id=commercial-array-quotation)

`he3/design/12-intensity-limits.md` finds that 100 catalogue thin-disk amplifiers, coherently
combined, reach 3.7 x 10²¹ W/cm² and 50 kW average power inside a 36-53 cm aperture. That is
`04-laser-array.md` route (b) made concrete, and it is a live alternative to the ~10⁴-channel fibre
route in [[he3-array-channel-count]]. The one number that decides between them is capital cost, and
nobody has asked.

+ [ ] request quotations from TRUMPF, Light Conversion and Amplitude at N = 1, 10 and 100 [](?work=manual)
+ [ ] establish the volume discount slope, which is the figure that actually decides the architecture
+ [ ] recompute the combining efficiency for 1.5 cm thin-disk beamlets rather than inheriting 0.6 from the fibre case
+ [ ] establish whether thin-disk amplifiers can be phase-locked at all; every demonstration in the record is fibre
+ [ ] fold the answer into `10-economics.md` stage 3, which is currently staged on the fibre case
+ note: the shortfall verdict does not move either way, so this is an architecture and cost decision only


### Decide whether the bremsstrahlung route replaces inverse Compton [](?id=bremsstrahlung-vs-ics)

`he3/design/12-intensity-limits.md` §6 costs direct laser-driven bremsstrahlung for the first time and
finds it roughly 260x more efficient than the inverse Compton route the set designs around, because it
skips the wakefield stage entirely. It also produces a continuum rather than a quasi-monochromatic
beam, which disqualifies it for the cross-section measurement that is the programme's best surviving
justification.

+ [ ] compute the geometric collection factor properly, for a converter target and a 1 m cryogenic helium column
+ [ ] estimate the tritium-to-helium-3 branching under a bremsstrahlung continuum rather than a 26 MeV line
+ [ ] decide whether the set carries both routes or picks one, and record it in the key-decisions table
+ [ ] if both are carried, say in `05-gamma-source.md` which mission each serves
+ note: production is short by 1e9 on the better of the two routes, so this decides the instrument, not the verdict


### Settle the He-3 array channel count [](?id=he3-array-channel-count)

`he3/design/04-laser-array.md` §2.4 concludes the originating 100-500 channels at 0.10 J each is not
buildable as fibre: the B-integral and facet-damage limits independently land near a 0.6 mJ ceiling,
about 100x short. It recommends route (a), roughly 10,000 channels at ~1 mJ. The roadmap and economics
are still staged on the reference case, and `he3/design/00-summary.md` §3 carries both side by side.

+ [ ] decide whether to adopt route (a) as the specification or keep the reference case pending costing
+ [ ] if adopting, restage `09-roadmap.md` so the ladder is no longer 100-then-500 channels
+ [ ] if adopting, recost `10-economics.md` stages 3 and 4, where capital is dominated by channel count
+ [ ] collapse 00-summary §3 to a single case once the decision is taken
+ note: no rate or feasibility figure moves either way - total average power is 1-5 kW in both cases
+ note: this is a scope decision, not a correction, which is why it is a story rather than an edit


### Measure the He-4 photodisintegration cross-section spread [](?id=he4-cross-section-spread)

The He-3 feasibility assessment leans on a peak (γ,n) cross-section of ~1.3 mb near 26-28 MeV, but the
experimental record disagrees by roughly a factor of two and has done for decades. Every rate figure in
the He-3 set inherits that uncertainty.

+ [ ] pull the He-4 photonuclear entries from IAEA EXFOR and plot the measurement spread
+ [ ] establish which measurements are independent and which share a normalisation
+ [ ] record the honest range in `he3/design/00-summary.md`, replacing the single 1.3 mb figure
+ [ ] state in `he3/design/03-feasibility.md` whether the upper end of the range changes the verdict
+ note: it should not - the shortfall is ~1e9 and the disputed factor is ~2 - but that has to be shown, not assumed


### Resolve the lithium tension between the two programmes [](?id=lithium-tension)

`he3/design/11-alternative-routes.md` recommends Li-6 breeding in a VHTR-sized core as the only viable
He-3 route in this repository. `vhtr/design/06-materials.md` specifies low-lithium graphite to suppress
tritium. Both cannot stand unqualified.

+ [ ] quantify the neutron economy cost of a separable Li-6 target at 1% and 5% capture
+ [ ] establish whether the VHTR's reactivity margin absorbs it, using the figures in `vhtr/design/04-neutronics.md`
+ [ ] specify the target form and where in the core it sits, or record why it cannot go there
+ [ ] state the tritium containment requirement this adds to a reactor designed not to need one
+ [ ] update the VHTR key-decisions table with the outcome either way


### Build the alignment proof-of-concept bench [](?id=alignment-poc-bench)

The one strand of the He-3 programme that survives the feasibility assessment untouched, and the
cheapest way to learn whether the central control hypothesis holds. Scoped in
`he3/design/08-proof-of-concept.md`.

+ [ ] build the multi-beam interference simulator and verify it sums fields rather than intensities
+ [ ] generate the synthetic training set and train the phase-prediction network on it
+ [ ] finalise the bill of materials, including the piezo stage the original concept note omitted
+ [ ] assemble the bench and establish the manual alignment baseline
+ [ ] close the loop and measure against the Phase 3 success criteria
+ manual: procurement and physical assembly


### Draw the He-3 system diagrams [](?id=he3-diagrams)

`he3/diagrams/` is empty. The corrected architecture is the thing most likely to be misunderstood from
prose alone, particularly that the gamma conversion stage is a GeV accelerator rather than an optic.

+ [ ] system block diagram: array, combining, wakefield stage, ICS, target, separation
+ [ ] the two-arm split and the femtosecond synchronisation requirement between drive and scattering pulses
+ [ ] an energy-flow sheet carrying the conversion efficiencies, since that is where the programme is lost
+ [ ] extend `vhtr/diagrams/HOUSE-STYLE.md` or write a He-3 companion covering what the two sets share


### Reconcile the VHTR design against a neutronics code [](?id=vhtr-neutronics-validation)

Every VHTR number is an estimate awaiting calculation and has been since the set was written. The
C/U ratio, reactivity coefficients and burnup targets in `vhtr/design/04-neutronics.md` are the ones
that would move the most if they are wrong.

+ [ ] choose a code and establish whether an accessible licence exists
+ [ ] model the annular prismatic geometry at the stated enrichment
+ [ ] check the helium void coefficient claim, which the set treats as a safety argument
+ [ ] record results against the existing estimates in `vhtr/design/00-summary.md` rather than overwriting them
