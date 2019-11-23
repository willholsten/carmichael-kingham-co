import React, { Component } from "react";

// Styles
import "../../styles/main.scss";
import styles from "./styles.scss";

export default class BlogFilter extends Component {
  render() {
    const { handleSortPosts } = this.props;
    return (
      <div>
        <ul className={styles.BlogFilter}>
          <li onClick={() => handleSortPosts("A-Z")}>
            <i className="fas fa-sort-alpha-down"></i>
          </li>
          <li onClick={() => handleSortPosts("Z-A")}>
            <i class="fas fa-sort-alpha-up"></i>
          </li>
          <li onClick={() => handleSortPosts("newest")}>Latest</li>
          <li onClick={() => handleSortPosts("oldest")}>Oldest</li>
        </ul>
      </div>
    );
  }
}
