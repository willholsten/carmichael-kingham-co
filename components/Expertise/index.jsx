// Components
import VerticalTabs from "../VerticalTabs";
import Accordion from "../Accordion";
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
        <SectionHeader text={pageTitle} />
        <IntroText text={pageSummary} />
        <div className={styles.expertiseTabs}>
          <VerticalTabs data={expertise.slice(0, -1)} />
        </div>
        <div className={styles.expertiseAccordion}>
          <Accordion data={expertise.slice(0, -1)} />
        </div>
      </div>
    );
  }
}
