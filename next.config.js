const webpack = require("webpack");
require("dotenv").config();
const withSass = require("@zeit/next-sass");
const resourcesLoader = {
  loader: "sass-resources-loader",
  options: {
    resources: [
      "./styles/utils/variables/colours.scss",
      "./styles/utils/variables/breakpoints.scss",
      "./styles/utils/variables/fonts.scss",
      "./styles/utils/mixins/breakpoints.scss"
    ]
  }
};

module.exports = withSass({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[name]__[local]___[hash:base64:5]"
  },
  webpack: (config, options) => {
    const env = Object.keys(process.env).reduce((acc, curr) => {
      acc[`process.env.${curr}`] = JSON.stringify(process.env[curr]);
      return acc;
    }, {});

    config.plugins.push(new webpack.DefinePlugin(env));

    config.module.rules.map(rule => {
      if (
        rule.test.source.includes("scss") ||
        rule.test.source.includes("sass")
      ) {
        rule.use.push(resourcesLoader);
      }
    });
    return config;
  }
});
