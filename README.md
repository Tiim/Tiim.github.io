### Big credits to Tim Bachmann for providing the source code for this project!

I love the simplicity of Vue and wanted to match the look and feel of your personal site

Here's the original README.md ...

# Default starter for Gridsome

This is the project you get when you run `gridsome create new-project`.

### 1. Install Gridsome CLI tool if you don't have

`npm install --global @gridsome/cli`

### 2. Create a Gridsome project

1. `gridsome create my-gridsome-site` to install default starter
2. `cd my-gridsome-site` to open the folder
3. `gridsome develop` to start a local dev server at `http://localhost:8080`
4. Happy coding 🎉🙌


### How to Deploy

Note: the branch 'guy' is the main branch of this application. The branch 'gh-pages' is the branch holding the contents requires for hosting using github pages. 

**Work on a seperate branch!!!**
This saves many headaches in terms of history management.

1. Branch off
2. Make your changes
3. `git add ...`
4. `git commit -m ...`
5. `git push -u origin guy` (you may need to start the ssh agent in which case use: ``eval `ssh-agent -s`; ssh-add ~/.ssh/cv; git push -f git@github.com:<github-username>/cv.git <mainbranch>``)
6. Now you code is saved to git, time to deploy : `npm run deploy`
7. wait a couple of minutes since Github pages takes time to update