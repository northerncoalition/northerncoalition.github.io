#!/bin/bash

function git_setup {
  git config --global user.email "travis@travis-ci.org"
  git config --global user.name "Travis CI"
  git remote rm origin
  git remote add origin "https://$GH_USERNAME:$GH_TOKEN@github.com/northerncoalition/northerncoalition.github.io.git"
}

function git_commit {
  git add data/writeups.json
  git commit --message "[Travis] Update data/writeups.json file."
}

function git_push {
  git push origin $TRAVIS_BRANCH
}

git diff --quiet HEAD
if [[ $? -ne 0 ]]; then
  echo 'Writeups changed.'
  if [[ $TRAVIS_BRANCH -eq 'master' ]]; then
    git_setup
    git status
    git_commit
    git log --pretty=oneline
    git_push
  fi
else
  echo 'Writeups not changed.'
fi
