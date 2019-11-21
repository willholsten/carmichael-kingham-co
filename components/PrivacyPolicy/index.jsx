// Components
import SectionHeader from "../Common/SectionHeader";

// Data
import content from "../../content/privacyPolicy.md";

// Styles
import "../../styles/main.scss";
import styles from "./styles.scss";

export default class PrivacyPolicy extends React.Component {
  render() {
    let {
      html,
      attributes: { pageTitle }
    } = content;
    return (
      <div className={styles.PivacyPolicy}>
        <SectionHeader text={pageTitle} />
        <div
          className={styles.markdown}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    );
  }
}
