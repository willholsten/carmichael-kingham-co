// Components
import SectionHeader from "../Common/SectionHeader";

// Resources
import { Container } from "@material-ui/core";
import Link from "next/link";

// Styles
import "../../styles/main.scss";
import styles from "./styles.scss";

export default function BlogPost({ html, title, image, date }) {
  return (
    <div className={styles.BlogPost}>
      <Container maxWidth="md">
        <SectionHeader text={title} image="/svg/blog.svg" />
        <Link href="/blog">
          <a>Back to Blogs</a>
        </Link>
        <span>{date}</span>
        <img className={styles.image} src={image} />
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </Container>
    </div>
  );
}
