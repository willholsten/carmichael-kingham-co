// Components
import SectionHeader from "../Common/SectionHeader";
import MyButton from "../Common/MyButton";

// Resources
import { Container, CardMedia } from "@material-ui/core";
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
      <MyButton
        style="Secondary"
        href="/blog"
        text="Back to posts"
        icon="fas fa-angle-left"
        type=""
      />
    </div>
  );
}
