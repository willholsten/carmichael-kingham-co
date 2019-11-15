// Components
import VerticalTabs from "../VerticalTabs";

// Styles
import "../../styles/main.scss";
import styles from "./styles.scss";

export default class Expertise extends React.Component {
  render() {
    return (
      <div className={styles.Expertise}>
        <VerticalTabs />
      </div>
    );
  }
}
