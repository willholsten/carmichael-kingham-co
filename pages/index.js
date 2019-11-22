import React from "react";

// Components
import Layout from "../components/Layout";
import HomeBanner from "../components/HomeBanner";
import SectionHeader from "../components/Common/SectionHeader";
import AboutCard from "../components/AboutCard";
import ExpertiseCard from "../components/ExpertiseCard";
import TeamCard from "../components/TeamCard";
import BlogPosts from "../components/BlogPosts";

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

export default class Home extends React.Component {
  static async getInitialProps() {
    let postsList = await importBlogPosts();

    return { postsList };
  }

  render() {
    let { postsList } = this.props;
    return (
      <Layout
        title="Carmichael Kingham &amp; Co."
        description="Insert page description"
        keywords="Insert keywords"
      >
        <section>
          <HomeBanner />
        </section>
        <section>
          <SectionHeader text="About us" image="/svg/about.svg" />
          <AboutCard />
        </section>
        <section>
          <SectionHeader text="Expertise" image="/svg/expertise.svg" />
          <ExpertiseCard />
        </section>
        <section>
          <SectionHeader text="Our people" image="/svg/team.svg" />
          <TeamCard />
        </section>
        <section>
          <SectionHeader text="Latest from the blog" image="/svg/blog.svg" />
          <BlogPosts numOfPosts="3" />
        </section>
      </Layout>
    );
  }
}
