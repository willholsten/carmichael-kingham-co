import React, { Component } from "react";

// Components
import Layout from "../../components/Layout";
import SectionHeader from "../../components/Common/SectionHeader";
import BlogCard from "../../components/BlogCard";
import IntroText from "../../components/IntroText";
import BlogPosts from "../../components/BlogPosts";

// Data
import content from "../../content/blog.md";

export default class Blog extends Component {
  render() {
    let {
      attributes: { pageTitle, pageSummary }
    } = content;
    return (
      <Layout
        title={`${pageTitle} | Carmichael Kingham &amp; Co.`}
        description="Insert page description"
        keywords="Insert keywords"
      >
        <SectionHeader text={pageTitle} image="/svg/blog.svg" />
        <IntroText text={pageSummary} />
        <BlogPosts />
      </Layout>
    );
  }
}
