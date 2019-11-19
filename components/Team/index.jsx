// Components
import WebTabs from "../WebTabs";
import Accordion from "../Accordion";

// Data
import content from "../../content/team.md";

// Styles
import "../../styles/main.scss";
import styles from "./styles.scss";

export default class Team extends React.Component {
  render() {
    let {
      attributes: { team }
    } = content;
    return (
      <div className={styles.Team}>
        <div className={styles.expertiseTabs}>
          <WebTabs data={team} />
        </div>
        <div className={styles.expertiseAccordion}>
          <Accordion data={team} />
        </div>
      </div>
    );
  }
}
