import React, { Component } from 'react';

// Components
import Layout from '../../../components/Layout';
import BlogPost from '../../../components/BlogPost';

// Resources
import { Container } from '@material-ui/core';

class Post extends Component {
  static async getInitialProps({ query }) {
    const { slug } = query;
    const blogpost = await import(
      `../../../content/blogPosts/${slug}.md`
    ).catch((error) => null);

    return { blogpost };
  }
  render() {
    if (!this.props.blogpost) return <div>not found</div>;

    const {
      html,
      attributes: { image, title, date },
    } = this.props.blogpost.default;

    return (
      <Layout
        title={`${title} | Carmichael Kingham &amp; Co`}
        description="Carmichael Kingham & Co. provides corporate accounting and advisory services to help businesses grow."
        image={image}
        type="article"
        url={
          'https://www.carmichaelkingham.com/blog/post/' +
          title.toLocaleLowerCase().split(' ').join('_')
        }
      >
        <Container maxWidth="md">
          <BlogPost title={title} image={image} html={html} date={date} />
        </Container>
      </Layout>
    );
  }
}

export default Post;
