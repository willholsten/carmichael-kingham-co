import React from "react";

// Components
import Layout from "../components/Layout";
import SectionHeader from "../components/Common/SectionHeader";
import About from "../components/About";

export default function AboutUsPage() {
  return (
    <Layout
      title="About Us | Carmichael Kingham &amp; Co"
      description="Insert page description"
      keywords="Insert keywords"
    >
      <SectionHeader text="About us" image="/svg/about-us.svg" />
      <About />
    </Layout>
  );
}
