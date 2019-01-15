#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run lint
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
echo 'tiimb.work' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://tiim.github.io
git push -f git@github.com:Tiim/Tiim.github.io.git master

cd -