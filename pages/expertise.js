import React, { Component } from "react";

// Components
import Layout from "../components/Layout";
import SectionHeader from "../components/Common/SectionHeader";
import Expertise from "../components/Expertise";

// Resources
import Container from "@material-ui/core/Container";

export default class ExpertisePage extends Component {
  render() {
    const { expertise } = this.props;
    return (
      <Layout
        title={`${expertise.attributes.pageTitle} | Carmichael Kingham &amp; Co.`}
        description="Insert page description"
        keywords="Insert keywords"
      >
        <Container maxWidth="md">
          <SectionHeader text={expertise.attributes.pageTitle} />
          <Expertise expertise={expertise.attributes} />
        </Container>
      </Layout>
    );
  }
}
