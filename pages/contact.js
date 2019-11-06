import React from "react";

// Components
import Layout from "../components/Layout";
import SectionHeader from "../components/SectionHeader";

// Resources
import Container from "@material-ui/core/Container";

export default function Contact() {
  return (
    <Layout
      title="Contact | Carmichael Kingham &amp; Co"
      description="Insert page description"
      keywords="Insert keywords"
    >
      <Container maxWidth="md">
        <SectionHeader text="Contact" image="/svg/contact.svg" />
      </Container>
    </Layout>
  );
}
