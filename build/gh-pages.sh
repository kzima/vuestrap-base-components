#! /bin/bash
br=$(git rev-parse --abbrev-ref HEAD)
git checkout gh-pages && \
git pull --rebase || exit 1

if ! git config user.email || ! git config user.name; then
  git config user.email "kris@mosquito.ie"
  git config user.name "kzima"
fi

git pull --rebase && \
git merge -X theirs --no-edit $br && \
git commit -a --amend --no-edit && \
git push origin gh-pages && \
git checkout $br || exit 1