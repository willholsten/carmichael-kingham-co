import React from "react";

// Components
import Layout from "../components/Layout";
import SectionHeader from "../components/Common/SectionHeader";
import Blog from "../components/Blog";

// Resources
import Container from "@material-ui/core/Container";

export default function BlogPage() {
  return (
    <Layout
      title="Blog | Carmichael Kingham &amp; Co"
      description="Insert page description"
      keywords="Insert keywords"
    >
      <Container maxWidth="md">
        <SectionHeader text="Blog" image="/svg/blog.svg" />
        <Blog />
      </Container>
    </Layout>
  );
}
