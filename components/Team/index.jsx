// Components
import TeamCards from "../TeamCards";

// Styles

import styles from "./styles.scss";

export default class Team extends React.Component {
  render() {
    const { team } = this.props;
    return (
      <div className={styles.Team}>
        <TeamCards team={team} />
      </div>
    );
  }
}
