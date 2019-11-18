import React from "react";

// Components
import Layout from "../components/Layout";
import SectionHeader from "../components/Common/SectionHeader";
import Contact from "../components/Contact";
import IntroText from "../components/IntroText";

// Resources
import Container from "@material-ui/core/Container";

export default function ContactPage() {
  return (
    <Layout
      title="Contact | Carmichael Kingham &amp; Co"
      description="Insert page description"
      keywords="Insert keywords"
    >
      <section>
        <Container maxWidth="md">
          <SectionHeader text="Contact" image="/svg/contact.svg" />
          <IntroText text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
          <Contact />
        </Container>
      </section>
    </Layout>
  );
}
