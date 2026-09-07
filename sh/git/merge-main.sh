#!/usr/bin/env bash
# merge staging -> main. this is the whole deployment for this repository.
#
# every other project in the workspace gates this script on something before it advances the ref: a
# staging healthcheck (a deployed app that can be unhealthy) and, where the project owns a database,
# a `prisma migrate deploy` against prod. mistergy has neither. there is no app, no database, no
# build and nothing deployed - it is markdown and SVG - so the script is the shared core alone and
# the absence of those gates is correct rather than an omission to be filled in later.
#
# main MUST stay a fast-forward of staging - the ref update below fast-forwards main to staging in
# place and can never create a merge commit or prompt for a message. if it aborts with a non-fast-
# forward rejection, main has diverged (it carries a commit staging lacks, e.g. an old merge commit
# or a direct push); realign once with:
#   git checkout main && git reset --hard origin/staging && git push --force-with-lease origin main && git checkout staging
# then re-run. never "fix" a non-ff by forcing the update.
set -euo pipefail

SOURCE_ENV="staging"
TARGET_ENV="main"
# resolve the repo from the script's own location so the git commands work from any cwd - invoked via
# ssh or `/push-prod`, the process cwd is often not this repo, and bare `git` then fails "not a git
# repository"
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
REPO_DIR="$SCRIPT_DIR/../.."

git -C "$REPO_DIR" fetch --all
# advance the target branch to the source and push WITHOUT checking out the target. checking it out
# lets git overwrite or delete working-tree files that are gitignored but still tracked on the target.
# fetch . source:target fast-forwards the local target ref in place and exits nonzero if it is not a
# fast-forward (the same guard as merge --ff-only); the working tree never leaves the source branch.
git -C "$REPO_DIR" fetch . "$SOURCE_ENV:$TARGET_ENV"
git -C "$REPO_DIR" push origin "$TARGET_ENV"
