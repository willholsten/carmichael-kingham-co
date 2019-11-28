import React, { Component } from "react";

// Components
import Layout from "../../components/Layout";
import TeamMember from "../../components/TeamMember";

// Resources
import { Container } from "@material-ui/core";

export default class Person extends Component {
  static async getInitialProps({ query }) {
    const { slug } = query;
    const teammember = await import(`../../content/team/${slug}.md`).catch(
      error => null
    );

    return { teammember };
  }
  render() {
    if (!this.props.teammember) return <div>not found</div>;

    const {
      html,
      attributes: { name, image }
    } = this.props.teammember.default;

    return (
      <Layout
        title={`${name} | Carmichael Kingham &amp; Co`}
        description="Insert page description"
        keywords="Insert keywords"
      >
        <Container maxWidth="md">
          <TeamMember name={name} image={image} html={html} />
        </Container>
      </Layout>
    );
  }
}
