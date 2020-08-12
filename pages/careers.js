import React, { Component } from 'react';

// Components
import Layout from '../components/Layout';
import SectionHeader from '../components/Common/SectionHeader';
import Careers from '../components/Careers';

// Resources
import { Container } from '@material-ui/core';

export default class CareersPage extends Component {
  render() {
    const { careers } = this.props;
    return (
      <Layout
        title={`${careers.attributes.pageTitle} | Carmichael Kingham & Co.`}
        description={careers.attributes.seoDescription}
        url={window.location.href}
      >
        <Container maxWidth="md">
          <SectionHeader text={careers.attributes.pageTitle} />
          <Careers careers={careers} />
        </Container>
      </Layout>
    );
  }
}
