import React from "react";

// Components
import Layout from "../components/Layout";
import HomeBanner from "../components/HomeBanner";
import SectionHeader from "../components/Common/SectionHeader";
import AboutCard from "../components/AboutCard";
import ExpertiseCard from "../components/ExpertiseCard";
import TeamCard from "../components/TeamCard";
import BlogPosts from "../components/BlogPosts";

export default class Home extends React.Component {
  render() {
    const { posts, sortPosts } = this.props;
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
          <BlogPosts posts={posts} numOfPosts="3" />
        </section>
      </Layout>
    );
  }
}
