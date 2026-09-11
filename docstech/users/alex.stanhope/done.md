# Done


### Draw the He-3 system diagrams [](?id=he3-diagrams)

`he3/diagrams/` is empty. The corrected architecture is the thing most likely to be misunderstood from
prose alone, particularly that the gamma conversion stage is a GeV accelerator rather than an optic.

+ [X] system block diagram: array, combining, wakefield stage, ICS, target, separation
+ [X] the two-arm split and the femtosecond synchronisation requirement between drive and scattering pulses
+ [X] an energy-flow sheet carrying the conversion efficiencies, since that is where the programme is lost
+ [X] extend `vhtr/diagrams/HOUSE-STYLE.md` or write a He-3 companion covering what the two sets share
+ note: sheets are `he3/diagrams/system-architecture.svg`, `two-arm-synchronisation.svg`, `energy-flow.svg`
+ note: the companion house style is `he3/diagrams/HOUSE-STYLE.md`; it inherits VHTR typography and panels and defines its own photon-energy ramp
+ note: sheet C carries the inversion that the 10⁻⁴ stage is the product rather than a loss, which is the argument `14-surviving-mission.md` is built on


### Upgrade NPM packages for mistergy (2026-09-11 minor/patch + pnpm 12) [](?time_taken=15)

+ [X] run npm-check-updates
+ [X] revisit prior pins (first wave: classify every hold and record it)
+ [X] pnpm install
+ [X] move packageManager to pnpm 12
+ [X] regenerate the lockfile under the final toolchain
+ [X] verify lint passes
+ [X] verify jest tests pass
+ note: minor/patch took `jest` and `@jest/globals` ^30.5.1 and `@types/node` ^26.5.1; no majors taken
+ note: `packageManager` went pnpm 11.25.0 -> 11.26.0 -> 12.3.4, both steps via ncu `--cooldown 24h`
+ note: pnpm 12 accepted `pnpm-workspace.yaml` unchanged, so no keys were removed; `allowBuilds` is recognised
+ note: the repo has no Dockerfile, CI workflow or pnpm version text, so `package.json` is the only pin site
+ note: the regenerated lockfile gains a leading document recording pnpm 12.3.4 and its eight platform binaries
+ note: lockfile regenerated from scratch under pnpm 12.3.4, with no transitive major jumps
+ note: lint clean, 45 jest, `install --frozen-lockfile --ignore-scripts` passes; version 0.0.6 -> 0.0.7

Pins in effect after this wave (snapshot):
- typescript @^6.0.3 - structural - TS 7.0.2 is a major not approved this run, and `ts-jest`@29.4.12 peers `typescript <7`; held by `--target minor`, no `.ncurc.json` reject; clears when ts-jest accepts TS 7 and the operator schedules the migration
- glob @10.5.0 (transitive, deprecated) - structural - `test-exclude`@7.0.2 under `babel-plugin-istanbul`@8.0.0 declares `glob ^10`, so regeneration cannot move it; coverage is not run here; clears when jest's istanbul chain moves to a newer glob
Unpinned this wave:
- none (first upgrade story for this project, no prior pins)
