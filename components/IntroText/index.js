// Data
import content from "../../content/expertise.md";

// Styles
import "../../styles/main.scss";
import styles from "./styles.scss";

export default class IntroText extends React.PureComponent {
  render() {
    const { text } = this.props;
    return (
      <div className={styles.IntroText}>
        <p>{text}</p>
      </div>
    );
  }
}
