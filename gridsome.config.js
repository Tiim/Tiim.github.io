// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const metadata = require("./content/site-info.json");

module.exports = {
  siteName: "Tim Bachmann",
  siteUrl: "tiim.ch",
  metadata,
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "BlogPost",
        path: "./content/blog/**/*.md"
      }
    },
    {
      use: "gridsome-plugin-manifest",
      options: {
        background_color: "#000000",
        icon_path: "./src/favicon.png",
        name: "Tim Bachmann",
        short_name: "Tim",
        theme_color: "#FFFFFF",
        lang: "en"
      }
    },
    {
      use: "gridsome-plugin-service-worker",
      options: {
        networkFirst: {
          cacheName: "nf-v1",
          routes: ["/", /\.(js|css|png|jpg|jpeg|svg|md|json)/]
        }
      }
    },
    // {
    //  use: 'gridsome-plugin-purgecss',
    //  // default options, the following will be included if you don't provide anything
    //  options: require('./purgecss.config.js'),
    // }
  ],
  templates: {
    BlogPost: [
      {
        path: "/blog/:title",
        component: "./src/templates/BlogPage.vue"
      }
    ]
  },
  transformers: {
    //Add markdown support to all file-system sources
    remark: {
      externalLinksTarget: "_blank",
      externalLinksRel: ["nofollow", "noopener", "noreferrer"],
      autolinkClassName: "heading-anchor",
      plugins: ["@gridsome/remark-prismjs"]
    }
  }
};
