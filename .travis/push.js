#!/bin/sh
git config --global user.email "travis@travis-ci.org"
git config --global user.name "Travis CI"

git remote add origin "https://${GH_TOKEN}@github.com/northerncoalition/northerncoalition.github.io.git" > /dev/null 2>&1

git diff --quiet HEAD
if [ $? -ne 0 ]; then
  echo 'Writeups changed.'
  git add data/writeups.json
  git status
  git commit --message "[Travis] Update data/writeups.json file."
  git push --quiet origin master
else
  echo 'Writeups not changed.'
fi
