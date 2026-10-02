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
+ note: `759f1a6` removed this toolchain when the checks went dependency-free, so the pin list above is historical only


### Make the document checks dependency-free

The checks are 45 tests and an SVG parse, but they ran on seven npm packages that need a dependency wave every few weeks.

+ background
  + the seven packages resolved to ~555 lockfile entries and 101 MB of `node_modules`, two with native build scripts
  + Jest caused both standing holds: typescript at 6 (ts-jest peers `<7`) and deprecated `glob@10.5.0` via its coverage chain
  + Node 24 runs the `.ts` suite natively: 45/45 under `node --test` on a scratch copy with no `node_modules` (2026-10-02)
  + replaces the 2026-09-30 minor/patch upgrade story, discarded uncommitted (operator decision); this change deletes the committed 0.0.8 lockfile and devDependencies
+ decisions
  + drop `tsc` type-checking rather than keep typescript as the only dependency (operator decision)
  + keep the `test-jest` script name, which the workspace tooling looks up (operator decision)
  + no PATTERNS.md entry; new pattern: a checks-only repo runs its suite on `node:test` with zero dependencies
+ [X] port the four suites to `node:test` and `node:assert`
  + `helpers.ts` takes `REPO_ROOT` from `import.meta.dirname`; `describe.each` became a loop over `PROGRAMMES`
+ [X] remove every devDependency, `packageManager` and the `check-updates` script
  + `package.json` gains `"type": "module"`; `test-jest` runs `node --test --test-reporter=spec`
+ [X] delete `pnpm-lock.yaml`, `pnpm-workspace.yaml`, `jest.config.mjs`, `tsconfig.json` and `.ncurc.json`
+ [X] drop the `tsc` step from `sh/lint.sh`
+ [X] update the mistergy docs that describe the toolchain
  + `AGENTS.md` records the no-dependency rule and the type-stripping authoring rules; `README.md` and `CODING_STANDARDS.md` name only `pnpm run test-jest`, still correct
+ [X] update the workspace `AGENTS.md` lines naming mistergy's scripts and dependency waves
  + the shared workspace rules and testing standard record mistergy as dependency-free
+ [X] update any skill table that names mistergy's toolchain
  + the pre-commit gate reads `node --test`'s `ℹ tests` / `ℹ pass` counts as well as Jest's summary line
  + dependency waves find packages by their `check-updates` script, so they drop mistergy with no edit
  + the standards checker no longer requires `check-updates` or `.ncurc.json` of mistergy; it scores 100% on every dimension
+ [X] verify lint and the 45 checks pass with no `node_modules`
  + 45/45 in ~0.2s; lint parses 16 SVGs; a broken link in a scratch copy fails with exit 1 naming `README.md:12`
