// Components
import Logo from "../Logo";
import Nav from "../NavWeb";
import NavMobile from "../NavMobile";

// Resources
import Container from "@material-ui/core/Container";

// Styles
import "../../styles/main.scss";
import styles from "./styles.scss";

export default function Header() {
  return (
    <header className={styles.Header}>
      <div className={styles.header_snippet}>
        <Container className={styles.snippet_container}>
          <a href="">
            <i className="fas fa-phone"></i>
            +44 (0) 20 3468 2472
          </a>
          <a href="mailto:info@carmichaelkingham.com">
            <i className="fas fa-envelope"></i>
            info@carmichaelkingham.com
          </a>
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
