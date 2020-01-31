import React, { Component } from 'react';

// Components
import Layout from '../components/Layout';
import SectionHeader from '../components/Common/SectionHeader';
import Contact from '../components/Contact';
import IntroText from '../components/IntroText';

// Resources
import Container from '@material-ui/core/Container';

export default class ContactPage extends Component {
  render() {
    const { contact, companyDetails } = this.props;

    return (
      <Layout
        title={`${contact.attributes.pageTitle} | Carmichael Kingham & Co.`}
        description="Carmichael Kingham & Co. provides corporate accounting and advisory services to help businesses grow."
      >
        <Container maxWidth="md">
          <SectionHeader text={contact.attributes.pageTitle} />
          <IntroText text={contact.attributes.pageSummary} />
          <Contact companyDetails={companyDetails} />
        </Container>
      </Layout>
    );
  }
}
