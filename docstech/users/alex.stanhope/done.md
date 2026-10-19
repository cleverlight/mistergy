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


### Wrap mistergy's lint and test-jest with green-stamp.sh [](?id=mistergy-green-stamp-wrap)

mistergy ran its SVG lint and the full node:test suite unconditionally on every invocation, even when nothing in the tree had changed since the last green run, rerunning identical trees and wasting session time.

+ SOW item G1 (standards review 2026-10-15, https://claude.ai/artifact/4fDi2V43c7YhXf5TS1T8Nt); decision g1-first-everywhere: run G1 first in every lane so later gates in the lane reuse the stamp; this entry is the item's own canary, not a follower
+ mistergy is public (measured: `public_repo_scan.py visibility`), so the sibling lanes' literal shape (`bash <green-stamp.sh's path under the operator's tooling directory> run . <check> '<command>'` inline in `package.json`) is unsafe here too, for the same reason notethink's lane found: it names an operator-machine path in a published file and breaks the script for anyone without that exact tooling. Reused notethink's `sh/run-checked.sh` shape: execs through `green-stamp.sh` only when it can find it, the plain command otherwise
+ green-stamp.sh's `run` execs its command array directly rather than through a shell, so test-jest's quoted glob (`"__tests__/*.test.ts"`) cannot be passed to it as part of one literal argument - the quote characters would reach `node` literally; moved into new `sh/test-jest.sh`. lint's existing `bash sh/lint.sh` was already a single program, so it needed no new script
+ neither new script is `chmod +x`: both are run only as `bash <path>`, like `green-stamp.sh` itself, so `__tests__/structure.test.ts`'s "keeps the merge script the only executable it ships" assertion needed no change
+ no dependency added; `sh/run-checked.sh` and `sh/test-jest.sh` are plain scripts, consistent with the no-dependencies rule (AGENTS.md > mistergy carries a checks-only package)
+ [X] wrap lint: `package.json`'s `lint` now runs `bash sh/run-checked.sh lint 'bash sh/lint.sh'`
+ [X] wrap test-jest: `bash sh/run-checked.sh test-jest 'bash sh/test-jest.sh'`
+ [X] verify `pnpm run lint` and `pnpm run test-jest` both exit 0 and stamp correctly with the helper present
  + measured 2026-10-17: lint exit 0, fresh `test-results/green-lint`; test-jest exit 0, 15 suites / 45 tests passed, fresh `test-results/green-test-jest`
+ [X] verify both checks still exit 0, with the real checks run, when the helper is unreachable
  + measured 2026-10-17: `HOME=<empty dir> pnpm run lint` and `run test-jest` both exit 0 via the fallback branch, leaving both stamps' mtimes untouched


### Pare mistergy's agent docs to what cannot be inspected [](?id=pare-mistergy-docs)

mistergy/AGENTS.md opened by restating facts root AGENTS.md already states about this checks-only package (no application, no playwright, no dev script, no port, no dependencies), instead of starting from how far the checks reach, which root AGENTS.md says this file is authoritative on. mistergy/CODING_STANDARDS.md separately restated the dash ban and its grandfather clause in a prose-conventions bullet, even though the top of the same file already points at workspace AGENTS.md for it.

+ [X] open AGENTS.md's "What this repository is, and what it is not" section with a pointer to root AGENTS.md's mistergy paragraph, keeping only the genuinely new content (the /prod-ready and /push-prod gate behaviour, the /fleet-check-updates detail, the no-dependencies authoring rules)
  + mistergy/AGENTS.md > What this repository is, and what it is not
+ [X] replace CODING_STANDARDS.md's restated dash-ban bullet with a pointer to workspace AGENTS.md > Dashes
  + mistergy/CODING_STANDARDS.md > Prose conventions
+ [X] regenerate the dash baseline via `sh/dash-baseline.sh`, since the edit above removed its two literal `&mdash;`/`&ndash;` example mentions, and confirmed `pnpm run test-jest` green
  + __tests__/fixtures/dash-baseline.json, 45 pass / 0 fail
+ acceptance: both docs shorter (`wc -w`: AGENTS.md 1105 -> 1072, CODING_STANDARDS.md 923 -> 906, combined 2028 -> 1978 words), the workspace standards checker for mistergy reports 100% coherence/accuracy/compliance/uniformity with 0 doc-contract issues, and `pnpm -C mistergy run test-jest` passes 45/45
