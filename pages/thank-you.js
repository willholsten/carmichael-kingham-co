import React, { Component } from 'react';

// Components
import Layout from '../components/Layout';
import SectionHeader from '../components/Common/SectionHeader';
import MyLink from '../components/Common/MyLink';

// Resources
import { Container } from '@material-ui/core';

export default class CareersPage extends Component {
  render() {
    const { careers } = this.props;
    return (
      <Layout
        title={`${careers.attributes.pageTitle} | Carmichael Kingham & Co.`}
        description="Carmichael Kingham & Co. provides corporate accounting and advisory services to help businesses grow."
      >
        <Container maxWidth="md">
          <SectionHeader text="Thank You" />
          <p>Your application has now been submitted.</p>
          <MyLink href="/" text="Back to site" />
        </Container>
      </Layout>
    );
  }
}
