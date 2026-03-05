#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "${SCRIPT_DIR}/.." && pwd)"
cd "${REPO_ROOT}"

if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  echo "[error] Not inside a git repository."
  exit 1
fi

CURRENT_BRANCH="$(git rev-parse --abbrev-ref HEAD)"
if [[ "${CURRENT_BRANCH}" != "main" ]]; then
  echo "[error] Current branch is '${CURRENT_BRANCH}', expected 'main'."
  echo "[hint] Switch first: git checkout main"
  exit 1
fi

COMMIT_MSG="${1:-site update $(date '+%Y-%m-%d %H:%M:%S')}"

if [[ -z "$(git status --porcelain)" ]]; then
  echo "[info] No changes to push."
  exit 0
fi

echo "[step] Staging all changes..."
git add -A

if git diff --cached --quiet; then
  echo "[info] Nothing staged after git add."
  exit 0
fi

echo "[step] Committing..."
git commit -m "${COMMIT_MSG}"

echo "[step] Pushing to origin/main..."
git push origin main

echo "[done] Pushed successfully."
echo "[next] Check GitHub Actions: https://github.com/bowenphys/bowenphys.github.io/actions"
