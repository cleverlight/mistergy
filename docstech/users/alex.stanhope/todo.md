# Todo


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
