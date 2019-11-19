// Components
import SectionHeader from "../Common/SectionHeader";
import IntroText from "../IntroText";
import CareersForm from "../CareersForm";

// Data
import content from "../../content/careers.md";

// Styles
import "../../styles/main.scss";
import styles from "./styles.scss";

export default class Careers extends React.Component {
  render() {
    let {
      attributes: { pageTitle, pageSummary }
    } = content;
    return (
      <div className={styles.Careers}>
        <SectionHeader text={pageTitle} image="/svg/blog.svg" />
        <IntroText text={pageSummary} />
        <CareersForm />
      </div>
    );
  }
}
