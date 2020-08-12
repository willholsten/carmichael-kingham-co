import React, { Component } from 'react';

// Components
import Layout from '../components/Layout';
import SectionHeader from '../components/Common/SectionHeader';
import PricingPackages from '../components/PricingPackages';
import PricingAddOns from '../components/PricingAddOns';
import PricingSelfAssessment from '../components/PricingSelfAssessment';

// Resources
import { Container } from '@material-ui/core';

export default class AboutUsPage extends Component {
  render() {
    const { pricing } = this.props;
    return (
      <Layout
        title={`${pricing.attributes.pageTitle} | Carmichael Kingham & Co.`}
        description={pricing.attributes.seoDescription}
        url={window.location.href}
      >
        <Container maxWidth="md">
          <SectionHeader text={pricing.attributes.pageTitle} />
          <PricingPackages pricing={pricing} />
          <SectionHeader text={pricing.attributes.selfAssessmentTitle} />
          <PricingSelfAssessment pricing={pricing} />
          <SectionHeader text={pricing.attributes.addOnsTitle} />
          <PricingAddOns pricing={pricing} />
        </Container>
      </Layout>
    );
  }
}
