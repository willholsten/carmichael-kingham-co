// Components
import SectionHeader from "../Common/SectionHeader";

// Resources
import { Container, CardMedia } from "@material-ui/core";
import Link from "next/link";
import moment from "moment";

// Styles
import "../../styles/main.scss";
import styles from "./styles.scss";

export default function BlogPost({ html, title, image, date }) {
  return (
    <div className={styles.BlogPost}>
      <div className={styles.header}>
        <SectionHeader text={title} image="" />
        <div className={styles.date}>
          <i className="fas fa-clock"></i>
          {moment(date).format("Do MMMM YYYY")}
        </div>
      </div>
      <CardMedia className={styles.featuredImage} image={image} />
      {/* <img className={styles.image} src={image} /> */}
      <div
        className={styles.markdown}
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <Link href="/blog">
        <a className={styles.backToBlogs}>
          <i className="fas fa-angle-left"></i>Back to Posts
        </a>
      </Link>
    </div>
  );
}
