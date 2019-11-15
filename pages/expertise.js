import React from "react";

// Components
import Layout from "../components/Layout";
import SectionHeader from "../components/Common/SectionHeader";
import Expertise from "../components/Expertise";

// Resources
import Container from "@material-ui/core/Container";

export default function ExpertisePage() {
  return (
    <Layout
      title="Expertise | Carmichael Kingham &amp; Co"
      description="Insert page description"
      keywords="Insert keywords"
    >
      <section>
        <Container maxWidth="md">
          <SectionHeader text="Expertise" image="/svg/services.svg" />
          <Expertise />
        </Container>
      </section>
    </Layout>
  );
}
