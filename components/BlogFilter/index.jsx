import React, { Component } from "react";

// Styles
import "../../styles/main.scss";
import styles from "./styles.scss";

export default class BlogFilter extends Component {
  render() {
    const { handleSortPosts, sortPosts } = this.props;
    return (
      <ul className={styles.BlogFilter}>
        <li
          onClick={() => handleSortPosts("latest")}
          className={"latest" === sortPosts ? styles.active : null}
        >
          Latest
        </li>
        <li
          onClick={() => handleSortPosts("oldest")}
          className={"oldest" === sortPosts ? styles.active : null}
        >
          Oldest
        </li>
        <li
          onClick={() => handleSortPosts("A-Z")}
          className={"A-Z" === sortPosts ? styles.active : null}
        >
          <i className="fas fa-sort-alpha-down"></i>
        </li>
        <li
          onClick={() => handleSortPosts("Z-A")}
          className={"Z-A" === sortPosts ? styles.active : null}
        >
          <i class="fas fa-sort-alpha-down-alt"></i>
        </li>
      </ul>
    );
  }
}
