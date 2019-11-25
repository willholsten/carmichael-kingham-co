import React from "react";
import App from "next/app";

// Data
import about from "../content/about.md";
import team from "../content/ourPeople.md";
import expertise from "../content/expertise.md";
import blog from "../content/blog.md";
import contact from "../content/contactUs.md";
import privacy from "../content/privacyPolicy.md";
import careers from "../content/careers.md";
import companyDetails from "../content/companyDetails.md";

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
    about,
    team,
    expertise,
    blog,
    posts: this.props.postsList,
    sortPosts: "latest",
    contact,
    privacy,
    careers,
    companyDetails
  };

  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} {...this.state} />;
  }
}
