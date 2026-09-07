#!/usr/bin/env bash
# Lint for a repository of documents: type-check the test suite, then parse every diagram.
#
# The SVG parse is the part that earns its place. The drawings are hand-authored with no build step,
# so nothing else in the workspace would ever notice an unclosed tag or a stray ampersand - the file
# simply renders as a blank rectangle in whatever opens it next. Everything about the CONTENT of the
# diagrams (colours, typography, terminology) is governed by vhtr/diagrams/HOUSE-STYLE.md and read by
# a human; this only asserts the file is XML at all.
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
REPO_DIR="$SCRIPT_DIR/.."

echo "tsc: type-checking the document checks"
pnpm -C "$REPO_DIR" exec tsc --noEmit

echo "xml: parsing every SVG"
python3 - "$REPO_DIR" <<'PY'
import os, sys, xml.etree.ElementTree as ET

repo = sys.argv[1]
excluded = {'node_modules', '.git', 'test-results'}
failures = []
count = 0

for root, dirs, files in os.walk(repo):
    dirs[:] = [d for d in dirs if d not in excluded]
    for name in sorted(files):
        if not name.endswith('.svg'):
            continue
        path = os.path.relpath(os.path.join(root, name), repo)
        count += 1
        try:
            ET.parse(os.path.join(repo, path))
        except ET.ParseError as error:
            failures.append(f"  {path}: {error}")

if failures:
    print(f"FAILED: {len(failures)} of {count} SVG files are not well-formed")
    print("\n".join(failures))
    sys.exit(1)

print(f"ok: {count} SVG files parse")
PY
