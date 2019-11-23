// Components
import IntroText from "../IntroText";
import CareersForm from "../CareersForm";

// Styles
import "../../styles/main.scss";
import styles from "./styles.scss";

export default class Careers extends React.Component {
  render() {
    const { careers } = this.props;
    return (
      <div className={styles.Careers}>
        <IntroText text={careers.attributes.pageSummary} />
        <CareersForm />
      </div>
    );
  }
}
