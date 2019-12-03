import React, { Component } from "react";

// Components
import Layout from "../components/Layout";
import SectionHeader from "../components/Common/SectionHeader";
import Expertise from "../components/Expertise";
import IntroText from "../components/IntroText";

// Resources
import Container from "@material-ui/core/Container";

export default class ExpertisePage extends Component {
  render() {
    const { expertise, expertiseCards } = this.props;
    return (
      <Layout
        title={`${expertise.attributes.pageTitle} | Carmichael Kingham & Co.`}
        description="Insert page description"
        keywords="Insert keywords"
      >
        <Container maxWidth="md">
          <SectionHeader text={expertise.attributes.pageTitle} />
          <IntroText text={expertise.attributes.pageSummary} />
          <Expertise expertise={expertiseCards} />
        </Container>
      </Layout>
    );
  }
}
