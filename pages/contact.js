import React from "react";

// Components
import Layout from "../components/Layout";
import SectionHeader from "../components/Common/SectionHeader";
import Contact from "../components/Contact";

export default function ContactPage() {
  return (
    <Layout
      title="Contact | Carmichael Kingham &amp; Co"
      description="Insert page description"
      keywords="Insert keywords"
    >
      <SectionHeader text="Contact" image="/svg/contact.svg" />
      <Contact />
    </Layout>
  );
}
