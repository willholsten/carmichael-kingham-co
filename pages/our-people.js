import React, { Component } from "react";

// Components
import Layout from "../components/Layout";
import Team from "../components/Team";
import SectionHeader from "../components/Common/SectionHeader";

// Resources
import { Container } from "@material-ui/core";

export default class OurPeople extends Component {
  render() {
    const { team } = this.props;
    return (
      <Layout
        title={`${team.attributes.pageTitle} | Carmichael Kingham &amp; Co.`}
        description="Insert page description"
        keywords="Insert keywords"
      >
        <Container maxWidth="md">
          <SectionHeader text={team.attributes.pageTitle} />
          <Team team={team.attributes} />
        </Container>
      </Layout>
    );
  }
}
