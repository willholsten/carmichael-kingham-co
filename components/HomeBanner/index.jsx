// Resources
import Container from "@material-ui/core/Container";

// Styles
import "../../styles/main.scss";
import styles from "./styles.scss";

export default function HomeBanner() {
  return (
    <Container>
      <div className={styles.HomeBanner}>
        <img className={styles.banner_web} src="/homepage-banner-web.jpg" />
        <img
          className={styles.banner_mobile}
          src="/homepage-banner-mobile.jpg"
        />
        <div className={styles.content}>
          <h4>Carmichael Kingham &amp; Co</h4>
          <h1>
            Corporate accounting
            <br />+ financial services
          </h1>
        </div>
      </div>
    </Container>
  );
}
