import React from 'react';

// Components
import MyLink from '../components/Common/MyLink';
import Layout from '../components/Layout';
import HomeBanner from '../components/HomeBanner';
import SectionHeader from '../components/Common/SectionHeader';
import AboutCard from '../components/AboutCard';
import ExpertiseCards from '../components/ExpertiseCards';
import TeamCards from '../components/TeamCards';
import BlogPosts from '../components/BlogPosts';
import Blog from '../components/Blog';

// Resources
import { Container } from '@material-ui/core';

export default class Home extends React.Component {
  render() {
    const {
      about,
      blog,
      posts,
      expertise,
      expertiseCards,
      home,
      team,
      teamMembers,
    } = this.props;
    return (
      <Layout
        title="Carmichael Kingham & Co."
        description={home.attributes.seoDescription}
      >
        <div className="Home">
          <Container maxWidth="lg">
            <HomeBanner />
          </Container>
          <section>
            <Container maxWidth="md">
              <SectionHeader text={about.attributes.pageTitle} />
              <AboutCard />
              <MyLink href="/about-us" text="Read more" />
            </Container>
          </section>
          <section>
            <Container maxWidth="md">
              <SectionHeader text={expertise.attributes.pageTitle} />
              <ExpertiseCards expertise={expertiseCards} numOfServices="3" />
              <MyLink href="/expertise" text="View all" />
            </Container>
          </section>
          <section>
            <Container maxWidth="md">
              <SectionHeader text={team.attributes.pageTitle} />
              <TeamCards team={teamMembers} />
            </Container>
          </section>
          <section>
            <Container maxWidth="md">
              <SectionHeader
                text={`Latest from the ${blog.attributes.pageTitle}`}
              />
              {/* <BlogPosts posts={posts} numOfPosts="3" /> */}
              <Blog posts={posts} sortPosts="latest" numOfPosts="3" />
            </Container>
          </section>
        </div>
      </Layout>
    );
  }
}
