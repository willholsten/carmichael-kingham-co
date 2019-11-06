import React from "react";

// Components
import Layout from "../components/Layout";
import SectionHeader from "../components/SectionHeader";

// Resources
import Container from "@material-ui/core/Container";

export default function AboutUs() {
  return (
    <Layout
      title="About Us | Carmichael Kingham &amp; Co"
      description="Insert page description"
      keywords="Insert keywords"
    >
      <Container maxWidth="md">
        <SectionHeader text="About us" image="/svg/about-us.svg" />
      </Container>
    </Layout>
  );
}
