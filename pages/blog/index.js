import React, { Component } from "react";

// Components
import Layout from "../../components/Layout";
import SectionHeader from "../../components/Common/SectionHeader";
import BlogCard from "../../components/BlogCard";
import IntroText from "../../components/IntroText";
import BlogPosts from "../../components/BlogPosts";

// Resources
import Link from "next/link";
import { Grid } from "@material-ui/core";

// Data
import content from "../../content/blog.md";

const importBlogPosts = async () => {
  const markdownFiles = require
    .context("../../content/blogPosts", false, /\.md$/)
    .keys()
    .map(relativePath => relativePath.substring(2));
  return Promise.all(
    markdownFiles.map(async path => {
      const markdown = await import(`../../content/blogPosts/${path}`);
      return { ...markdown, slug: path.substring(0, path.length - 3) };
    })
  );
};

export default class Blog extends Component {
  static async getInitialProps() {
    let postsList = await importBlogPosts();

    return { postsList };
  }

  render() {
    let {
      attributes: { pageTitle, pageSummary }
    } = content;
    let { postsList } = this.props;
    return (
      <Layout
        title="Blog | Carmichael Kingham &amp; Co."
        description="Insert page description"
        keywords="Insert keywords"
      >
        <SectionHeader text={pageTitle} image="/svg/blog.svg" />
        <IntroText text={pageSummary} />
        <Grid container spacing={3}>
          {postsList.map(post => {
            return (
              <Grid item xs={12} sm={6} md={4} key={post.slug}>
                <Link href={`blog/post/${post.slug}`}>
                  <a>
                    <BlogCard
                      title={post.attributes.title}
                      image={post.attributes.image}
                      summary={post.attributes.summary}
                      href={`blog/post/${post.slug}`}
                    />
                  </a>
                </Link>
              </Grid>
            );
          })}
        </Grid>
      </Layout>
    );
  }
}
