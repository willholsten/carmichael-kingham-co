import React, { Component } from 'react';

// Components
import Layout from '../components/Layout';
import Team from '../components/Team';
import SectionHeader from '../components/Common/SectionHeader';

// Resources
import { Container } from '@material-ui/core';

export default class TeamPage extends Component {
  render() {
    const { team, teamMembers } = this.props;
    return (
      <Layout
        title={`${team.attributes.pageTitle} | Carmichael Kingham & Co.`}
        description="Carmichael Kingham & Co. provides corporate accounting and advisory services to help businesses grow."
      >
        <Container maxWidth="md">
          <SectionHeader text={team.attributes.pageTitle} />
          <Team team={teamMembers} />
        </Container>
      </Layout>
    );
  }
}
