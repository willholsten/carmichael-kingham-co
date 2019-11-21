// Styles
import "../../../styles/main.scss";
import styles from "./styles.scss";

export default class SectionHeader extends React.Component {
  render() {
    const { image, text } = this.props;
    return (
      <div className={styles.SectionHeader}>
        <h1>{text}</h1>
      </div>
    );
  }
}
