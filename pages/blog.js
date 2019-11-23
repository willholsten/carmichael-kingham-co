import React, { Component } from "react";

// Components
import Layout from "../components/Layout";
import SectionHeader from "../components/Common/SectionHeader";
import Blog from "../components/Blog";
import IntroText from "../components/IntroText";

// Resources
import Container from "@material-ui/core/Container";

export default class BlogPage extends Component {
  render() {
    const { blog, posts, sortPosts } = this.props;

    return (
      <Layout
        title={`${blog.attributes.pageTitle} | Carmichael Kingham &amp; Co.`}
        description="Insert page description"
        keywords="Insert keywords"
      >
        <Container maxWidth="md">
          <SectionHeader text={blog.attributes.pageTitle} />
          <IntroText text={blog.attributes.pageSummary} />
        </Container>
        <Blog posts={posts} sortPosts={sortPosts} />
      </Layout>
    );
  }
}
