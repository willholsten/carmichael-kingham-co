// Components
import WebTabs from "../WebTabs";
import Accordion from "../Accordion";
import SectionHeader from "../Common/SectionHeader";

// Data
import content from "../../content/ourPeople.md";

// Styles
import "../../styles/main.scss";
import styles from "./styles.scss";

export default class Team extends React.Component {
  render() {
    let {
      attributes: { pageTitle, team }
    } = content;
    return (
      <div className={styles.Team}>
        <SectionHeader text={pageTitle} image="/svg/our-people.svg" />
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
