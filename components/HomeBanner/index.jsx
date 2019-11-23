// Resources
import Container from "@material-ui/core/Container";

// Data
import content from "../../content/home.md";
import companyDetails from "../../content/companyDetails.md";

// Styles
import "../../styles/main.scss";
import styles from "./styles.scss";

export default class HomeBanner extends React.Component {
  render() {
    let {
      attributes: { bannerText, bannerImageMobile, bannerImageWeb }
    } = content;
    let {
      attributes: { companyName }
    } = companyDetails;

    return (
      <div className={styles.HomeBanner}>
        <img className={styles.banner_web} src={bannerImageWeb} />
        <img className={styles.banner_mobile} src={bannerImageMobile} />
        <div className={styles.content}>
          <h4>{companyName}</h4>
          <h1>{bannerText}</h1>
        </div>
      </div>
    );
  }
}
