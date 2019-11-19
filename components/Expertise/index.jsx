// Components
import ExpertiseTabs from "../WebTabs";
import ExpertiseAccordion from "../Accordion";

// Data
import content from "../../content/expertise.md";

// Styles
import "../../styles/main.scss";
import styles from "./styles.scss";

export default class Expertise extends React.Component {
  render() {
    let {
      attributes: { expertise }
    } = content;
    return (
      <div className={styles.Expertise}>
        <div className={styles.expertiseTabs}>
          <ExpertiseTabs data={expertise} />
        </div>
        <div className={styles.expertiseAccordion}>
          <ExpertiseAccordion data={expertise} />
        </div>
      </div>
    );
  }
}
