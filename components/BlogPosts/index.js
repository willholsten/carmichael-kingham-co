import React, { Component } from "react";

// Components
import BlogCard from "../../components/BlogCard";

// Resources
import Link from "next/link";
import { Grid } from "@material-ui/core";

// console.log(markdownFiles);
const markdownFiles = require
  .context("../../content/blogPosts", false, /\.md$/)
  .keys()
  .map(relativePath => relativePath.substring(2));

export default class BlogPosts extends Component {
  state = {
    posts: []
  };

  async componentDidMount() {
    const posts = await Promise.all(
      markdownFiles.map(async path => {
        const markdown = await import(`../../content/blogPosts/${path}`);
        return { ...markdown, slug: path.substring(0, path.length - 3) };
      })
    );
    this.setState(state => ({ ...state, posts }));
  }

  render(props) {
    const { posts } = this.state;
    const { numOfPosts } = this.props;
    return (
      <div>
        <Grid container spacing={3}>
          {posts.slice(0, numOfPosts).map((post, idx) => {
            return (
              <Grid item xs={12} sm={6} md={4} key={idx}>
                <Link href={`blog/post/${post.slug}`}>
                  <a>
                    <BlogCard
                      title={post.attributes.title}
                      image={post.attributes.image}
                      summary={post.attributes.summary}
                      href={`blog/post/${post.slug}`}
                    />
                  </a>
                </Link>
              </Grid>
            );
          })}
        </Grid>
      </div>
    );
  }
}
