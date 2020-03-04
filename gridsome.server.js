// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const projects = require("./content/projects.json");
const demos = require("./content/demos.json");
const socialMedia = require("./content/socialmedia.json");

module.exports = function(api) {
  api.loadSource(store => {
    addEach("Projects", projects, p => p.name, store);
    addEach("Demos", demos, d => d.name, store);
    addEach("SocialMedia", socialMedia, s => s.link, store);
  });

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  });
};

function addEach(typeName, array, getId, store) {
  const projectType = store.addCollection({
    typeName
  });
  array.forEach(e =>
    projectType.addNode({
      id: getId(e),
      ...e
    })
  );
}
