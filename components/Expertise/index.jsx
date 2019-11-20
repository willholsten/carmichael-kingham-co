// Components
import ExpertiseTabs from "../WebTabs";
import ExpertiseAccordion from "../Accordion";
import IntroText from "../IntroText";
import SectionHeader from "../Common/SectionHeader";

// Data
import content from "../../content/expertise.md";

// Styles
import "../../styles/main.scss";
import styles from "./styles.scss";

export default class Expertise extends React.Component {
  render() {
    let {
      attributes: { pageTitle, pageSummary, expertise }
    } = content;
    return (
      <div className={styles.Expertise}>
        <SectionHeader text={pageTitle} image="/svg/expertise.svg" />
        <IntroText text={pageSummary} />
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
