import React, { Component } from 'react';

// Components
import Layout from '../components/Layout';
import MyLink from '../components/Common/MyLink';

// Resources
import Container from '@material-ui/core/Container';

export default function Custom404() {
  return (
    <Layout
      title={`404 | Carmichael Kingham & Co.`}
      description="Carmichael Kingham & Co. provides corporate accounting and advisory services to help businesses grow."
    >
      <Container maxWidth="md">
        <h1>This page cannot be found</h1>
        <MyLink href="/" text="Go Home" buttontype="secondary" />
      </Container>
    </Layout>
  );
}
