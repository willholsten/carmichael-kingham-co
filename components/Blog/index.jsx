import React, { Component } from "react";
import Link from "next/link";

// Components
import BlogPosts from "../BlogPosts";
import BlogFilter from "../BlogFilter";

// Styles
import "../../styles/main.scss";
import styles from "./styles.scss";

export default class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: this.props.posts,
      sortPosts: this.props.sortPosts
    };

    this.handleSortPosts = this.handleSortPosts.bind(this);
    this.renderPosts = this.renderPosts.bind(this);

    this.renderPosts(this.state.sortPosts);
  }
  handleSortPosts(arg) {
    this.setState({ sortPosts: arg });
    this.renderPosts(arg);
  }

  renderPosts(sortBy) {
    const posts = this.state.posts;
    let state = this.state;
    let expr = sortBy;
    switch (expr) {
      case "A-Z":
        return {
          ...state,
          posts: posts.sort((a, b) =>
            a.attributes.title.localeCompare(b.attributes.title)
          )
        };
      case "Z-A":
        return {
          ...state,
          posts: posts.sort((a, b) =>
            b.attributes.title.localeCompare(a.attributes.title)
          )
        };
      case "newest":
        return {
          ...state,
          posts: posts.sort(function(a, b) {
            return new Date(b.attributes.date) - new Date(a.attributes.date);
          })
        };
      case "oldest":
        return {
          ...state,
          posts: posts.sort(function(a, b) {
            return new Date(a.attributes.date) - new Date(b.attributes.date);
          })
        };
      default:
        console.log(`${expr} doesn't exist`);
    }
  }

  render() {
    let { posts } = this.props;
    return (
      <div>
        <BlogFilter handleSortPosts={this.handleSortPosts} />
        <BlogPosts posts={posts} numOfPosts="999" />
      </div>
    );
  }
}
