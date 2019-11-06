// Comnponents
import ContactButtons from "../Common/ContactButtons";

// Resources
import Link from "next/link";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

// Styles
import "../../styles/main.scss";
import styles from "./styles.scss";

// Data
import site from "./../../data/site.json";
import company from "./../../data/company.json";
import partners from "./../../data/partners.json";

export default function Footer() {
  return (
    <footer className={styles.Footer}>
      <Container maxWidth="md" className={styles.FooterLinks}>
        <Grid container spacing={3} className={styles.listContainer}>
          <Grid item xs={3} md={3} className={styles.column}>
            <h4>Site</h4>
            {site.map(({ label, href }) => (
              <Link key={label} href={href}>
                <a>{label}</a>
              </Link>
            ))}
          </Grid>
          <Grid item xs={3} md={3} className={styles.column}>
            <h4>Company</h4>
            {company.map(({ label, href }) => (
              <Link key={label} href={href}>
                <a>{label}</a>
              </Link>
            ))}
          </Grid>
          <Grid item xs={3} md={3} className={styles.column}>
            <h4>Partners</h4>
            {partners.map(({ src, href }) => (
              <Link key={src} href={href}>
                <a>
                  <img src={src} />
                </a>
              </Link>
            ))}
          </Grid>
          <Grid item xs={3} md={3} className={styles.column}>
            <h4>Connect</h4>
            <Link href="">
              <a>
                <i className="fab fa-linkedin"></i>
              </a>
            </Link>
          </Grid>
        </Grid>
      </Container>
      <div className={styles.contactButtons}>
        <ContactButtons />
      </div>
      <div className={styles.FooterSnippet}>
        <Container maxWidth="md">
          <span>
            &copy; {new Date().getFullYear()}. Carmichael Kingham &amp; Co
          </span>
          <span className={styles.companyInfo}>
            Registered in England and Wales No. 11585739 | VAT Reg No. 32 8609
            289
          </span>
        </Container>
      </div>
    </footer>
  );
}
