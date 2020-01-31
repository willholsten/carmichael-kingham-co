import React, { Component } from "react";

// Components
import Layout from "../../../components/Layout";
import BlogPost from "../../../components/BlogPost";

// Resources
import { Container } from "@material-ui/core";

class Post extends Component {
  static async getInitialProps({ query }) {
    const { slug } = query;
    const blogpost = await import(
      `../../../content/blogPosts/${slug}.md`
    ).catch(error => null);

    return { blogpost };
  }
  render() {
    if (!this.props.blogpost) return <div>not found</div>;

    const {
      html,
      attributes: { image, title, date }
    } = this.props.blogpost.default;

    return (
      <Layout
        title={`${title} | Carmichael Kingham &amp; Co`}
        description="Insert page description"
        keywords="Insert keywords"
      >
        <Container maxWidth="md">
          <BlogPost title={title} image={image} html={html} date={date} />
        </Container>
      </Layout>
    );
  }
}

export default Post;
