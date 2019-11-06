// Resources
import Link from "next/link";
import Container from "@material-ui/core/Container";

// Styles
import "../../styles/main.scss";
import styles from "./styles.scss";

export default function HomeBanner() {
  return (
    <Container>
      <div className={styles.HomeBanner}>
        <img className={styles.banner} src="/homepage-banner.png" />
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
