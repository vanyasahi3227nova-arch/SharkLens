#!/usr/bin/env bash
set -euo pipefail

TARGET_REMOTE_NAME="policyforge"
TARGET_REMOTE_URL="https://github.com/vanyasahi3227nova-arch/PolicyForge-AI.git"
TARGET_BRANCH="main"

if ! git remote | grep -qx "$TARGET_REMOTE_NAME"; then
  git remote add "$TARGET_REMOTE_NAME" "$TARGET_REMOTE_URL"
fi

echo "Pushing current HEAD to ${TARGET_REMOTE_NAME}/${TARGET_BRANCH} ..."
git push "$TARGET_REMOTE_NAME" HEAD:"$TARGET_BRANCH"

echo "Done."
