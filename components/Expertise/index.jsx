// Components
import ExpertiseCards from "../ExpertiseCards";

// Styles

import styles from "./styles.scss";

export default class Expertise extends React.Component {
  render() {
    const { expertise } = this.props;
    return (
      <div className={styles.Expertise}>
        <ExpertiseCards expertise={expertise} numOfServices="99" />
      </div>
    );
  }
}
