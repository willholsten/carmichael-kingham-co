import React from "react";

// Components
import Layout from "../components/Layout";
import HomeBanner from "../components/HomeBanner";
import SectionHeader from "../components/Common/SectionHeader";
import AboutTile from "../components/AboutTile";
import ExpertiseTile from "../components/ExpertiseTile";
import TeamTile from "../components/TeamTile";

// Resources
import { Container } from "@material-ui/core";

// Data
import content from "../content/home.md";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {
      html,
      attributes: { title, cats }
    } = content;
    return (
      <Layout
        title="Carmichael Kingham &amp; Co"
        description="Insert page description"
        keywords="Insert keywords"
      >
        <section>
          <HomeBanner />
          <h1>{title}</h1>
        </section>
        <Container maxWidth="md">
          <section>
            <SectionHeader text="About us" image="/svg/about-us.svg" />
            <AboutTile />
          </section>
          <section>
            <SectionHeader text="Expertise" image="/svg/services.svg" />
            <ExpertiseTile />
          </section>
          <section>
            <SectionHeader text="Our people" image="/svg/our-people.svg" />
            <TeamTile />
          </section>
        </Container>
      </Layout>
    );
  }
}
