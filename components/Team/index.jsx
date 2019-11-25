// Components
import VerticalTabs from "../VerticalTabs";
import Accordion from "../Accordion";

// Styles
import "../../styles/main.scss";
import styles from "./styles.scss";

export default class Team extends React.Component {
  render() {
    const { team } = this.props;
    return (
      <div className={styles.Team}>
        <div className={styles.expertiseTabs}>
          <VerticalTabs data={team.team} />
        </div>
        <div className={styles.expertiseAccordion}>
          <Accordion data={team.team} />
        </div>
      </div>
    );
  }
}
