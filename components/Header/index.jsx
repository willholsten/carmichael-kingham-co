// Components
import Logo from "../Logo";
import Nav from "../NavWeb";
import NavMobile from "../NavMobile";

// Resources
import Container from "@material-ui/core/Container";

// Data
import content from "../../content/companyDetails.md";

// Styles
import "../../styles/main.scss";
import styles from "./styles.scss";

export default function Header() {
  let {
    attributes: { phone, email }
  } = content;
  return (
    <header className={styles.Header}>
      <div className={styles.header_snippet}>
        <Container className={styles.snippet_container}>
          <a href={`tel:${phone}`}>
            <i className="fas fa-phone"></i>
            {phone}
          </a>
          <a href={`mailto:${email}`}>
            <i className="fas fa-envelope"></i>
            {email}
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
