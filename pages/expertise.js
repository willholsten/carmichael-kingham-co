import React from "react";

// Components
import Layout from "../components/Layout";
import SectionHeader from "../components/Common/SectionHeader";
import Expertise from "../components/Expertise";

export default function ExpertisePage() {
  return (
    <Layout
      title="Expertise | Carmichael Kingham &amp; Co"
      description="Insert page description"
      keywords="Insert keywords"
    >
      <SectionHeader text="Expertise" image="/svg/services.svg" />
      <Expertise />
    </Layout>
  );
}
