import React from "react";

// Components
import Layout from "../components/Layout";
import HomeAbout from "../components/HomeAbout";
import HomeBanner from "../components/HomeBanner";
import HomeServices from "../components/HomeServices";

// Resources
import Container from "@material-ui/core/Container";

export default function Home() {
  return (
    <Layout
      title="Carmichael Kingham &amp; Co"
      description="Insert page description"
      keywords="Insert keywords"
    >
      <section>
        <HomeBanner />
      </section>
      <section>
        <HomeAbout />
      </section>
      <section>
        <HomeServices />
      </section>
    </Layout>
  );
}
