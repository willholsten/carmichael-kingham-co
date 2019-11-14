// Components
import PrimaryButton from "../Common/PrimaryButton";
import content from "../../content/home.md";

// Styles
import "../../styles/main.scss";
import styles from "./styles.scss";

export default class ComingSoon extends React.Component {
  render() {
    let {
      html,
      attributes: { title, cats }
    } = content;
    return (
      <div className={styles.ComingSoon}>
        <h1>{title}.</h1>
        <PrimaryButton
          href="mailto:annabelle.carmichael@carmichaelkingham.com"
          text="Get in touch"
          icon="fas fa-envelope"
        />
      </div>
    );
  }
}
