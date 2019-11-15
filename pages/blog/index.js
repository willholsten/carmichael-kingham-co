import React, { Component } from "react";

// Components
import Layout from "../../components/Layout";
import SectionHeader from "../../components/Common/SectionHeader";
import BlogTile from "../../components/BlogTile";

// Resources
import { Container } from "@material-ui/core";
import Link from "next/link";
import zIndex from "@material-ui/core/styles/zIndex";

const BLOG_POSTS_PATH = "../../content/blogPosts";

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
    const postsList = await importBlogPosts();

    return { postsList };
  }

  render() {
    const { postsList } = this.props;
    return (
      <Layout
        title="Blog | Carmichael Kingham &amp; Co"
        description="Insert page description"
        keywords="Insert keywords"
      >
        <section>
          <Container maxWidth="md">
            <SectionHeader text="Blog" image="/svg/blog.svg" />
            <i className="fas fa-sort-alpha-down"></i>
            <i className="fas fa-sort-alpha-down-alt"></i>
            {postsList.map(post => {
              return (
                <Link href={`blog/post/${post.slug}`} key={post.slug}>
                  <a>
                    <BlogTile
                      title={post.attributes.title}
                      image={post.attributes.image}
                      summary={post.attributes.summary}
                    />
                  </a>
                </Link>
              );
            })}
          </Container>
        </section>
      </Layout>
    );
  }
}
