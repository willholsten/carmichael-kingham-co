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
        description="Carmichael Kingham & Co. provides corporate accounting and advisory services to help businesses grow."
      >
        <Container maxWidth="md">
          <SectionHeader text={pricing.attributes.pageTitle} />
          <PricingPackages pricing={pricing} />
          <SectionHeader text={pricing.attributes.addOnsTitle} />
          <PricingAddOns pricing={pricing} />
          <SectionHeader text={pricing.attributes.selfAssessmentTitle} />
          <PricingSelfAssessment pricing={pricing} />
        </Container>
      </Layout>
    );
  }
}
