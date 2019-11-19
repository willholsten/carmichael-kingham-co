import React from "react";

// Components
import Layout from "../components/Layout";
import HomeBanner from "../components/HomeBanner";
import SectionHeader from "../components/Common/SectionHeader";
import AboutTile from "../components/AboutTile";
import ExpertiseTile from "../components/ExpertiseTile";
import TeamTile from "../components/TeamTile";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout
        title="Carmichael Kingham &amp; Co"
        description="Insert page description"
        keywords="Insert keywords"
      >
        <section>
          <HomeBanner />
        </section>
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
      </Layout>
    );
  }
}
