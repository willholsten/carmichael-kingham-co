import React from "react";
import App from "next/app";

const importBlogPosts = async () => {
  const markdownFiles = require
    .context("../content/blogPosts", false, /\.md$/)
    .keys()
    .map(relativePath => relativePath.substring(2));
  return Promise.all(
    markdownFiles.map(async path => {
      const markdown = await import(`../content/blogPosts/${path}`);
      return { ...markdown, slug: path.substring(0, path.length - 3) };
    })
  );
};

export default class MyApp extends App {
  static async getInitialProps(appContext) {
    const postsList = await importBlogPosts();
    const appProps = await App.getInitialProps(appContext);

    return { ...appProps, postsList };
  }

  state = {
    posts: this.props.postsList,
    sortPosts: "newest"
  };

  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} {...this.state} />;
  }
}
