// Resources
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

// Components
import Button from '../Common/MyButton';

// Styles
import styles from './styles.scss';

// Data
import content from '../../content/pricing.md';
import companyDetails from '../../content/companyDetails.md';

export default class PricingPackages extends React.Component {
  render() {
    const { pricing } = this.props;

    let {
      attributes: { gold, silver, bronze }
    } = content;
    let {
      attributes: { email }
    } = companyDetails;
    return (
      <div className={styles.Pricing}>
        <h3 className={styles.packagesTitle}>
          {pricing.attributes.packagesTitle}
        </h3>
        <Grid container spacing={3} className={styles.packages}>
          <Grid item xs={12} md={4}>
            <Paper className={styles.tile}>
              <div className={styles.medalContainer}>
                <img
                  className={styles.medal}
                  src="/svg/gold.svg"
                  alt="Gold Package"
                />
              </div>
              <h2 className={styles.packageTitleGold}>Gold</h2>
              <h3>{pricing.attributes.goldTitle}</h3>
              <p className={styles.packagePrice}>
                From &pound;{pricing.attributes.goldPrice}/ month + VAT
              </p>
              <ul className={`fa-ul ${styles.packageServices}`}>
                {gold.map(gold => (
                  <li key={gold.label}>
                    <span className={`fa-li ${styles.iconContainer}`}>
                      <i className="fas fa-check-circle"></i>
                    </span>
                    {gold.label}
                    {gold.subtext && <small>{gold.subtext}</small>}
                  </li>
                ))}
              </ul>
              <a
                className={styles.buttonContainer}
                href={`mailto:${email}?subject=Gold Package Enquiry`}
              >
                <Button
                  buttontype="primary"
                  text="Enquire Now"
                  icon="fab fa-telegram-plane"
                  type="submit"
                />
              </a>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper className={styles.tile}>
              <div className={styles.medalContainer}>
                <img
                  className={styles.medal}
                  src="/svg/silver.svg"
                  alt="Silver Package"
                />
              </div>
              <h2 className={styles.packageTitleSilver}>Silver</h2>
              <h3>{pricing.attributes.silverTitle}</h3>
              <p className={styles.packagePrice}>
                From &pound;{pricing.attributes.silverPrice}/ month + VAT
              </p>
              <ul className={`fa-ul ${styles.packageServices}`}>
                {silver.map(silver => (
                  <li key={silver.label}>
                    <span className={`fa-li ${styles.iconContainer}`}>
                      <i className="fas fa-check-circle"></i>
                    </span>
                    {silver.label}
                    {silver.subtext && <small>{silver.subtext}</small>}
                  </li>
                ))}
              </ul>
              <a
                className={styles.buttonContainer}
                href={`mailto:${email}?subject=Silver Package Enquiry`}
              >
                <Button
                  buttontype="primary"
                  text="Enquire Now"
                  icon="fab fa-telegram-plane"
                  type="submit"
                />
              </a>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper className={styles.tile}>
              <div className={styles.medalContainer}>
                <img
                  className={styles.medal}
                  src="/svg/bronze.svg"
                  alt="Bronze Package"
                />
              </div>
              <h2 className={styles.packageTitleBronze}>Bronze</h2>
              <h3>{pricing.attributes.bronzeTitle}</h3>
              <p className={styles.packagePrice}>
                From &pound;{pricing.attributes.bronzePrice}/ month + VAT
              </p>
              <ul className={`fa-ul ${styles.packageServices}`}>
                {bronze.map(bronze => (
                  <li key={bronze.label}>
                    <span className={`fa-li ${styles.iconContainer}`}>
                      <i className="fas fa-check-circle"></i>
                    </span>
                    {bronze.label}
                    {bronze.subtext && <small>{bronze.subtext}</small>}
                  </li>
                ))}
              </ul>
              <a
                className={styles.buttonContainer}
                href={`mailto:${email}?subject=Bronze Package Enquiry`}
              >
                <Button
                  buttontype="primary"
                  text="Enquire Now"
                  icon="fab fa-telegram-plane"
                  type="submit"
                />
              </a>
            </Paper>
          </Grid>
        </Grid>
        <p className={styles.pricingText}>{pricing.attributes.pricingText}</p>
      </div>
    );
  }
}
