// Data
import content from "../../content/privacyPolicy.md";

// Styles

import styles from "./styles.scss";

export default class PrivacyPolicy extends React.Component {
  render() {
    const { privacy } = this.props;
    return (
      <div className={styles.PivacyPolicy}>
        <div
          className={styles.markdown}
          dangerouslySetInnerHTML={{ __html: privacy.html }}
        />
      </div>
    );
  }
}
