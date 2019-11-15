// Components
import ExpertiseTabs from "../ExpertiseTabs";
import ExpertiseAccordion from "../ExpertiseAccordion";

// Styles
import "../../styles/main.scss";
import styles from "./styles.scss";

export default class Expertise extends React.Component {
  render() {
    return (
      <div className={styles.Expertise}>
        <div className={styles.expertiseTabs}>
          <ExpertiseTabs />
        </div>
        <div className={styles.expertiseAccordion}>
          <ExpertiseAccordion />
        </div>
      </div>
    );
  }
}
