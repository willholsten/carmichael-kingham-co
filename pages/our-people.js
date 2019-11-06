import React from "react";

// Components
import Layout from "../components/Layout";
import SectionHeader from "../components/Common/SectionHeader";

// Resources
import Container from "@material-ui/core/Container";

export default function OurPeople() {
  return (
    <Layout
      title="Our People | Carmichael Kingham &amp; Co"
      description="Insert page description"
      keywords="Insert keywords"
    >
      <Container maxWidth="md">
        <SectionHeader text="Our People" image="/svg/our-people.svg" />
      </Container>
    </Layout>
  );
}
