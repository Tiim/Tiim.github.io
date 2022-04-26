---
title: How I use Vue.js on GitHub Pages
published: true
description: How to properly deploy a Vue.js app on GitHub Pages
content_tags: [GitHub Pages, Vue.js, Javascript]
date: 2019-05-04
cover_image: "/assets/2019-05-vue-on-github-pages.png"
---

I recently read the Article [Serving Vue.js apps on GitHub Pages](https://blog.usmanity.com/serving-vue-js-apps-on-github-pages/) and it inspired me to write about what I'm doing differently.

If you want to see an example of this method in action, go check out my [personal website](https://tiimb.work) on [GitHub](https://github.com/Tiim/Tiim.github.io)

I won't be explaining how to setup a Vue project. If you're looking for a Tutorial on that go check out the awesome [Vue.js Guide](https://vuejs.org/v2/guide/).

So you have setup your awesome Vue project and want to host it on GitHub Pages. The way Muhammad explained it you would build the project using `npm run build`, commit the `dist/` folder along with your source files and point GitHub to the dist folder. This might get quite messy because you either have commit messages with the sole purpose of uploading the dist folder or you commit the code changes at the same time which makes it hard to find the relevant changes if you ever want to look at your commits again.

So what can you do about this?

Git to the rescue, let's use a branch that contains all the build files.

## Step 1 - keeping our working branch clean 🛀

To make sure that the branch we are working from stays clean of any build files we are gonna add a `.gitignore` file to the root.

```sh
# .gitignore
dist/
```

## Step 2 - adding a second branch 🌳

We are not goint to branch off master like how we would do it if we were to modify our code with the intention to merge it back to the main branch. Instead we are gonna create a squeaky clean new branch that will only ever hold the dist files. After all we will not ever need to merge these two branches together.

We do this by creating a new git repository inside the dist folder:

```sh
cd dist/
git init
git add .
git commit -m 'Deploying my awesome vue app'
```

## Step 3 - deploying 🚚

We are gonna force push our new git repository to a branch on GitHub. This might go against git best practices but since we won't ever checkout this branch we don't have to worry about that.

```sh
git push -f git@github.com:<username>/<repo>.git <branch>
```

⚠️ Make sure you double or tripple check your destination branch! You don't want to accidentally overwrite your working branch. Using the branch `gh-pages` will most likely be a good idea.

## Step 4 - pointing GitHub to the right place 👈

Now we are almost done. The only thing left is telling GitHub where our assets live.

Go to your repo, on the top right navigate to `Settings` and scroll down to GitHub pages. Enable it and set your source branch to the branch you force pushed to, for example `gh-pages`.

## Step 5 - automating everything 😴

If you don't mind doing this whole process (Step 2 and 3) every time you want to deploy you can stop now. If you're as lazy as me, here is the script I use to deploy with one command:

```sh
# deploy.sh

#!/usr/bin/env sh

# abort on errors
set -e

# build
echo Linting..
npm run lint
echo Building. this may take a minute...
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'example.com' > CNAME

echo Deploying..
git init
git add -A
git commit -m 'deploy'

# deploy
git push -f git@github.com:<username>/<repo>.git <branch>

cd -

```

If your on windows look into the Windows Subsystem for Linus (WSL) it will be worth it.

If you are still reading, thank you very much. This is actually my first article and I'm really happy to hear about any opinions and criticisms.
Happy Coding ♥
