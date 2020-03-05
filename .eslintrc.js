module.exports = {
  parser: "vue-eslint-parser",
  extends: ["eslint:recommended", "plugin:gridsome/recommended"],
  ignorePatterns: ["node_modules/", "dist/", "static/"],
  parserOptions: {
    parser: "babel-eslint",
    sourceType: "module",
    allowImportExportEverywhere: false
  },
  overrides: [
    {
      files: ["gridsome.config.js", "gridsome.server.js", "purgecss.config.js"],
      env: {
        node: true
      }
    }
  ]
};
