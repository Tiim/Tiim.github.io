#!/usr/bin/env sh

# abort on errors
set -e

export DOMAIN="tiim.ch"

# build
echo Linting..
npm run lint
echo Building. this may take a minute...
npm run build

# navigate into the build output directory
cd build

# if you are deploying to a custom domain
rm -f CNAME
echo "Setting CNAME file with content $DOMAIN"
echo $DOMAIN > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://tiim.github.io
git push -f git@github.com:Tiim/Tiim.github.io.git master

cd -