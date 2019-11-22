import React, { Component } from "react";

// Components
import BlogCard from "../../components/BlogCard";
import BlogFilter from "../../components/BlogFilter";

// Resources
import Link from "next/link";
import { Grid } from "@material-ui/core";

// console.log(markdownFiles);

export default class BlogPosts extends Component {
  render() {
    const { posts, numOfPosts } = this.props;
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
                      date={post.attributes.date}
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
