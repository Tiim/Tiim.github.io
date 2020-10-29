// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const purgecss = require("@fullhuman/postcss-purgecss");
const metadata = require("./content/site-info.json");

const postcssPlugins = [];

if (process.env.NODE_ENV === "production")
  postcssPlugins.push(purgecss(require("./purgecss.config.js")));

module.exports = {
  siteName: "Guy Meyer",
  siteUrl: "https://guymeyer.me",
  metadata,
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "ProjectPost",
        path: "./content/project/**/*.md"
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "OutreachPost",
        path: "./content/outreach/**/*.md"
      }
    },
    {
      use: "gridsome-plugin-manifest",
      options: {
        background_color: "#000000",
        icon_path: "./src/favicon.png",
        name: "Guy Meyer",
        short_name: "Guy",
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
    }
  ],
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins
      }
    }
  },
  templates: {
    ProjectPost: [
      {
        path: "/project/:route",
        component: "./src/templates/ProjectPage.vue"
      }
    ],
    OutreachPost: [
      {
        path: "/outreach/:route",
        component: "./src/templates/OutreachPage.vue"
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
