// Components
import VerticalTabs from "../VerticalTabs";
import Accordion from "../Accordion";
import IntroText from "../IntroText";

// Styles
import "../../styles/main.scss";
import styles from "./styles.scss";

export default class Expertise extends React.Component {
  render() {
    const { expertise } = this.props;
    return (
      <div className={styles.Expertise}>
        <IntroText text={expertise.pageSummary} />
        <div className={styles.expertiseTabs}>
          <VerticalTabs data={expertise.expertise.slice(0, -1)} />
        </div>
        <div className={styles.expertiseAccordion}>
          <Accordion data={expertise.expertise.slice(0, -1)} />
        </div>
      </div>
    );
  }
}
