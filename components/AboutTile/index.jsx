// Resources
import Link from "next/link";

// Data
import content from "../../content/home.md";

// Styles
import "../../styles/main.scss";
import styles from "./styles.scss";

export default class AboutTile extends React.Component {
  render() {
    let {
      attributes: { aboutText }
    } = content;
    return (
      <div className={styles.AboutTile}>
        <p className={styles.text}>
          {aboutText}
          <Link href="/about-us">
            <a className={styles.link}>Read more</a>
          </Link>
        </p>
      </div>
    );
  }
}
