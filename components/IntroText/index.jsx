// Styles

import styles from "./styles.scss";

export default class IntroText extends React.Component {
  render() {
    const { text } = this.props;
    return (
      <div className={styles.IntroText}>
        <p>{text}</p>
      </div>
    );
  }
}
