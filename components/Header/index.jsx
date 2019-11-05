// Components
import Logo from "../Logo";
import Nav from "../NavWeb";
import NavMobile from "../NavMobile";

// Resources
import Container from "@material-ui/core/Container";
import Link from "next/link";

// Styles
import "../../styles/main.scss";
import styles from "./styles.scss";

export default function Header() {
  return (
    <header className={styles.Header}>
      <div className={styles.header_snippet}>
        <Container className={styles.snippet_container}>
          <div>
            <i class="fas fa-phone"></i>
            <a href="">+44 (0) 20 3468 2472</a>
          </div>
          <div>
            <i class="fas fa-envelope"></i>
            <a href="mailto:info@carmichaelkingham.com">
              info@carmichaelkingham.com
            </a>
          </div>
        </Container>
      </div>
      <div className={styles.header_main}>
        <Container className={styles.main_container}>
          <Logo />
          <Nav />
          <NavMobile />
        </Container>
      </div>
    </header>
  );
}
