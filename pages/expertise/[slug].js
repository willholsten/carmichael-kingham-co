import React, { Component } from "react";

// Components
import Layout from "../../components/Layout";
import ExpertiseSingle from "../../components/ExpertiseSingle";

// Resources
import { Container } from "@material-ui/core";

export default class Service extends Component {
  static async getInitialProps({ query }) {
    const { slug } = query;
    const service = await import(`../../content/expertise/${slug}.md`).catch(
      error => null
    );

    return { service };
  }
  render() {
    if (!this.props.service) return <div>not found</div>;

    const {
      html,
      attributes: { title }
    } = this.props.service.default;

    const { expertiseCards } = this.props;

    return (
      <Layout
        title={`${title} | Carmichael Kingham &amp; Co`}
        description="Insert page description"
        keywords="Insert keywords"
      >
        <Container maxWidth="md">
          <ExpertiseSingle
            title={title}
            html={html}
            expertise={expertiseCards}
          />
        </Container>
      </Layout>
    );
  }
}
