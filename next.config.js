const fs = require("fs");
const blogPostsFolder = "./content/blogPosts";
// const webpack = require("webpack");
const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");
const resourcesLoader = {
  loader: "sass-resources-loader",
  options: {
    resources: [
      "./styles/utils/variables/colours.scss",
      "./styles/utils/variables/breakpoints.scss",
      "./styles/utils/variables/fonts.scss",
      "./styles/utils/mixins/breakpoints.scss",
      "./styles/utils/mixins/card.scss",
      "./styles/utils/mixins/fonts.scss"
    ]
  }
};

const getPathsForPosts = () => {
  return fs
    .readdirSync(blogPostsFolder)
    .map(blogName => {
      const trimmedName = blogName.substring(0, blogName.length - 3);
      return {
        [`/blog/post/${trimmedName}`]: {
          page: "/blog/post/[slug]",
          query: {
            slug: trimmedName
          }
        }
      };
    })
    .reduce((acc, curr) => {
      return { ...acc, ...curr };
    }, {});
};

module.exports = withCSS(
  withSass({
    cssModules: true,
    cssLoaderOptions: {
      importLoaders: 1,
      localIdentName: "[name]__[local]___[hash:base64:5]"
    },
    webpack: (config, { webpack }) => {
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
      config.module.rules.push({
        test: /\.md$/,
        use: "frontmatter-markdown-loader"
      });

      return config;
    },
    async exportPathMap(defaultPathMap) {
      return {
        ...defaultPathMap,
        ...getPathsForPosts()
      };
    }
  })
);
