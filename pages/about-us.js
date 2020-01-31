import React, { Component } from 'react';

// Components
import Layout from '../components/Layout';
import SectionHeader from '../components/Common/SectionHeader';
import About from '../components/About';

// Resources
import { Container } from '@material-ui/core';

export default class AboutUsPage extends Component {
  render() {
    const { about } = this.props;
    return (
      <Layout
        title={`${about.attributes.pageTitle} | Carmichael Kingham & Co.`}
        description="Carmichael Kingham & Co. provides corporate accounting and advisory services to help businesses grow."
      >
        <Container maxWidth="md">
          <SectionHeader text={about.attributes.pageTitle} />
          <About about={about} />
        </Container>
      </Layout>
    );
  }
}
