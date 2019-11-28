// Comnponents
import ContactButtons from "../Common/ContactButtons";
import FooterNav from "../FooterNav";
import FooterCompany from "../FooterCompany";
import FooterPartners from "../FooterPartners";

// Resources
import Link from "next/link";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

// Styles

import styles from "./styles.scss";

// Data
import content from "../../content/companyDetails.md";

export default class Footer extends React.Component {
  render() {
    let {
      attributes: { companyRegistration, companyName }
    } = content;
    return (
      <footer className={styles.Footer}>
        <Container maxWidth="md" className={styles.FooterLinks}>
          <Grid container spacing={3} className={styles.listContainer}>
            <Grid item xs={3} md={3} className={styles.column}>
              <FooterNav />
            </Grid>
            <Grid item xs={3} md={3} className={styles.column}>
              <FooterCompany />
            </Grid>
            <Grid item xs={3} md={3} className={styles.column}>
              <FooterPartners />
            </Grid>
            <Grid item xs={3} md={3} className={styles.column}>
              <h4>Connect</h4>
              <div>
                <a
                  href="https://www.linkedin.com/company/carmichael-kingham-co/about/ "
                  target="_blank"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://twitter.com/CarmiKingham" target="_blank">
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </Grid>
          </Grid>
        </Container>
        <div className={styles.contactButtons}>
          <ContactButtons />
        </div>
        <div className={styles.FooterSnippet}>
          <Container maxWidth="md">
            <span>
              &copy; {new Date().getFullYear()}. {companyName}
            </span>
            <span className={styles.companyInfo}>{companyRegistration}</span>
          </Container>
        </div>
      </footer>
    );
  }
}
