#!/usr/bin/env sh

# abort on errors
set -e

git init
git add -A
git commit -m "$1"
git push

# build
npm run docs:build
# navigate into the build output directory
cd docs/.vuepress/dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m "$1 with vuepress"

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
#git push -f git@github.com:seungjae-yu/TIL.git master:gh-pages
git push -f https://github.com/seungjae-yu/TIL.git master:gh-pages

cd -