import React from "react";

// Components
import Layout from "../components/Layout";
import SectionHeader from "../components/Common/SectionHeader";

// Resources
import Container from "@material-ui/core/Container";

export default function Terms() {
  return (
    <Layout
      title="Privacy Policy | Carmichael Kingham &amp; Co"
      description="Insert page description"
      keywords="Insert keywords"
    >
      <Container maxWidth="md">
        <SectionHeader text="Privacy Policy" image="/svg/contact.svg" />
      </Container>
    </Layout>
  );
}
