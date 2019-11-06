import React from "react";

// Components
import Layout from "../components/Layout";
import SectionHeader from "../components/Common/SectionHeader";

// Resources
import Container from "@material-ui/core/Container";

export default function Expertise() {
  return (
    <Layout
      title="Expertise | Carmichael Kingham &amp; Co"
      description="Insert page description"
      keywords="Insert keywords"
    >
      <Container maxWidth="md">
        <SectionHeader text="Expertise" image="/svg/services.svg" />
      </Container>
    </Layout>
  );
}
