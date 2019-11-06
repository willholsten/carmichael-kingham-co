import React from "react";

// Components
import Layout from "../components/Layout";
import SectionHeader from "../components/SectionHeader";
import TermsTabs from "../components/TermsTabs";

// Resources
import Container from "@material-ui/core/Container";

export default function Terms() {
  return (
    <Layout
      title="Terms | Carmichael Kingham &amp; Co"
      description="Insert page description"
      keywords="Insert keywords"
    >
      <Container maxWidth="md">
        <SectionHeader text="Terms" image="/svg/contact.svg" />
        <TermsTabs />
      </Container>
    </Layout>
  );
}
