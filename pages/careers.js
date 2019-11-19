import React from "react";

// Components
import Layout from "../components/Layout";
import SectionHeader from "../components/Common/SectionHeader";
import Careers from "../components/Careers";

export default function CareersPage() {
  return (
    <Layout
      title="Careers | Carmichael Kingham &amp; Co"
      description="Insert page description"
      keywords="Insert keywords"
    >
      <SectionHeader text="Careers" image="/svg/blog.svg" />
      <Careers />
    </Layout>
  );
}
