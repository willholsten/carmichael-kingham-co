import React from "react";

// Components
import Layout from "../components/Layout";
import HomeBanner from "../components/HomeBanner";
import SectionHeader from "../components/Common/SectionHeader";
import AboutCard from "../components/AboutCard";
import ExpertiseCard from "../components/ExpertiseCard";
import TeamCard from "../components/TeamCard";
import BlogPosts from "../components/BlogPosts";

// Resources
import { Container } from "@material-ui/core";

export default class Home extends React.Component {
  render() {
    const { posts, expertise, team } = this.props;
    return (
      <Layout
        title="Carmichael Kingham &amp; Co."
        description="Insert page description"
        keywords="Insert keywords"
      >
        <Container maxWidth="lg">
          <section>
            <HomeBanner />
          </section>
        </Container>
        <Container maxWidth="md">
          <section>
            <SectionHeader text="About us" image="/svg/about.svg" />
            <AboutCard />
          </section>
          <section>
            <SectionHeader text="Expertise" image="/svg/expertise.svg" />
            <ExpertiseCard expertise={expertise.attributes} />
          </section>
          <section>
            <SectionHeader text="Our people" image="/svg/team.svg" />
            <TeamCard team={team.attributes} />
          </section>
          <section>
            <SectionHeader text="Latest from the blog" image="/svg/blog.svg" />
            <BlogPosts posts={posts} numOfPosts="3" />
          </section>
        </Container>
      </Layout>
    );
  }
}
