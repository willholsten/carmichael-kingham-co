import React from "react";

// Components
import Layout from "../components/Layout";
import SectionHeader from "../components/Common/SectionHeader";
import Team from "../components/Team";

export default function OurPeople() {
  return (
    <Layout
      title="Our People | Carmichael Kingham &amp; Co"
      description="Insert page description"
      keywords="Insert keywords"
    >
      <SectionHeader text="Our People" image="/svg/our-people.svg" />
      <Team />
    </Layout>
  );
}
