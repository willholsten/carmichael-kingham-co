// Resources
import Container from "@material-ui/core/Container";

// Data
import content from "../../content/home.md";

// Styles
import "../../styles/main.scss";
import styles from "./styles.scss";

export default class HomeBanner extends React.Component {
  render() {
    let {
      attributes: { bannerText }
    } = content;

    return (
      <div className={styles.HomeBanner}>
        <img className={styles.banner_web} src="/homepage-banner-web.jpg" />
        <img
          className={styles.banner_mobile}
          src="/homepage-banner-mobile.jpg"
        />
        <div className={styles.content}>
          <h4>Carmichael Kingham &amp; Co</h4>
          <h1>{bannerText}</h1>
        </div>
      </div>
    );
  }
}
