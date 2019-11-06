import React from "react";

// Components
import Layout from "../components/Layout";
import SectionHeader from "../components/Common/SectionHeader";

// Resources
import Container from "@material-ui/core/Container";

export default function Services() {
  return (
    <Layout
      title="Services | Carmichael Kingham &amp; Co"
      description="Insert page description"
      keywords="Insert keywords"
    >
      <Container maxWidth="md">
        <SectionHeader text="Services" image="/svg/services.svg" />
      </Container>
    </Layout>
  );
}
