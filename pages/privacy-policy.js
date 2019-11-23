import React, { Component } from "react";

// Components
import Layout from "../components/Layout";
import SectionHeader from "../components/Common/SectionHeader";
import PrivacyPolicy from "../components/PrivacyPolicy";

// Resources
import { Container } from "@material-ui/core";

export default class Terms extends Component {
  render() {
    const { privacy } = this.props;
    return (
      <Layout
        title={`${privacy.attributes.pageTitle} | Carmichael Kingham &amp; Co.`}
        description="Insert page description"
        keywords="Insert keywords"
      >
        <Container maxWidth="md">
          <SectionHeader text={privacy.attributes.pageTitle} />
          <PrivacyPolicy privacy={privacy} />
        </Container>
      </Layout>
    );
  }
}
