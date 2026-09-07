#!/usr/bin/env bash
# Regenerate the em dash / en dash baseline that __tests__/formatting.test.ts ratchets against.
#
# The baseline records what was already in the tree when the check was introduced. Workspace
# AGENTS.md forbids sweeping the character out of existing content, so the test asserts the counts
# have not MOVED rather than that they are zero. Run this after an edit that legitimately changes a
# count - rewriting a paragraph that happened to contain one - and commit the result with the edit.
#
# Never run this to make a failing test pass on newly authored text. A count that went UP is the
# check working: use a plain hyphen instead.
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
REPO_DIR="$SCRIPT_DIR/.."

python3 - "$REPO_DIR" <<'PY'
import json, os, re, sys

repo = sys.argv[1]
excluded = {'node_modules', '.git', 'docstech', 'test-results'}
pattern = re.compile(r'[—–]|&mdash;|&ndash;')

baseline = {}
for root, dirs, files in os.walk(repo):
    dirs[:] = [d for d in dirs if d not in excluded]
    for name in sorted(files):
        if not (name.endswith('.md') or name.endswith('.svg')):
            continue
        path = os.path.relpath(os.path.join(root, name), repo)
        with open(os.path.join(repo, path), encoding='utf8') as handle:
            count = len(pattern.findall(handle.read()))
        if count:
            baseline[path] = count

target = os.path.join(repo, '__tests__/fixtures/dash-baseline.json')
with open(target, 'w', encoding='utf8') as handle:
    json.dump(dict(sorted(baseline.items())), handle, indent=4)
    handle.write('\n')
print(f"baseline: {len(baseline)} files, {sum(baseline.values())} occurrences")
PY
