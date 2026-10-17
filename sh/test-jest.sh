#!/usr/bin/env bash
# test-jest for mistergy: node's built-in test runner over the document and drawing checks.
#
# green-stamp.sh's `run` execs its command array directly rather than through a shell, so the
# quoted glob (`"__tests__/*.test.ts"`) cannot be passed to it as part of one literal argument -
# the quote characters would reach node literally instead of being stripped by a shell. This
# script holds the real invocation, so green-stamp.sh only ever execs one program.
set -euo pipefail

node --test --test-reporter=spec "__tests__/*.test.ts"
