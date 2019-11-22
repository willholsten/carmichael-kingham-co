import React, { Component } from "react";

// Components
import Layout from "../components/Layout";
import SectionHeader from "../components/Common/SectionHeader";
import Blog from "../components/Blog";
import IntroText from "../components/IntroText";

// Data
import content from "../content/blog.md";

export default class BlogPage extends Component {
  render() {
    let {
      attributes: { pageTitle, pageSummary }
    } = content;
    const { posts, sortPosts } = this.props;

    return (
      <Layout
        title={`${pageTitle} | Carmichael Kingham &amp; Co.`}
        description="Insert page description"
        keywords="Insert keywords"
      >
        <SectionHeader text={pageTitle} image="/svg/blog.svg" />
        <IntroText text={pageSummary} />
        <Blog posts={posts} sortPosts={sortPosts} />
      </Layout>
    );
  }
}
