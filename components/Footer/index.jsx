// Comnponents
import ContactButtons from '../Common/ContactButtons';
import FooterSignup from '../FooterSignup';
import FooterNav from '../FooterNav';
import FooterCompany from '../FooterCompany';
import FooterConnect from '../FooterConnect';
import FooterPartners from '../FooterPartners';
import SocialButtons from '../Common/SocialButtons';

// Resources
import Link from 'next/link';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

// Styles

import styles from './styles.scss';

// Data
import content from '../../content/companyDetails.md';

export default class Footer extends React.Component {
  render() {
    let {
      attributes: { companyRegistration, companyName },
    } = content;
    return (
      <footer className={styles.Footer}>
        <FooterSignup />
        <div className={styles.FooterMain}>
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
                <FooterConnect />
              </Grid>
            </Grid>
          </Container>

          <div className={styles.contactButtons}>
            <ContactButtons buttontype="secondary" />
          </div>
          <div className={styles.FooterSnippet}>
            <Container maxWidth="md">
              <div className={styles.mobileConnect}>
                <FooterConnect />
              </div>
              <span>
                &copy; {new Date().getFullYear()}. {companyName} All Rights
                Reserved.
              </span>
              <span className={styles.companyInfo}>{companyRegistration}</span>
            </Container>
          </div>
        </div>
      </footer>
    );
  }
}
