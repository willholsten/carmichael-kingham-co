// Components
import MyLink from "../Common/MyLink";

// Data
import content from "../../content/home.md";

// Styles
import "../../styles/main.scss";
import styles from "./styles.scss";

export default class AboutCard extends React.Component {
  render() {
    let {
      attributes: { aboutText }
    } = content;
    return (
      <div className={styles.AboutCard}>
        <p className={styles.text}>
          {aboutText}
          <MyLink href="/about-us" />
        </p>
      </div>
    );
  }
}
