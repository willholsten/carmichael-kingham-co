// Components
import LogoLarge from '../LogoLarge';
import LogoSmall from '../LogoSmall';
import Nav from '../NavWeb';
import NavMobile from '../NavMobile';

// Resources
import Container from '@material-ui/core/Container';

// Data
import content from '../../content/companyDetails.md';

// Styles

import styles from './styles.scss';

export default function Header() {
  let {
    attributes: { phone, email }
  } = content;
  return (
    <header className={styles.Header}>
      <div className={styles.headerSnippet}>
        <Container maxWidth="lg" className={styles.snippetContainer}>
          <LogoLarge />
          <div>
            <a href={`tel:${phone}`}>
              <i className="fas fa-phone"></i>
              {phone}
            </a>
            <a href={`mailto:${email}`}>
              <i className="fas fa-envelope"></i>
              {email}
            </a>
          </div>
        </Container>
      </div>
      <div className={styles.headerMain}>
        <Container maxWidth="lg" className={styles.mainContainer}>
          <LogoSmall />
          <Nav />
          <NavMobile />
        </Container>
      </div>
    </header>
  );
}
