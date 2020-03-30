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

export default class PricingAddOns extends React.Component {
  render() {
    const { pricing } = this.props;

    let {
      attributes: { addOns }
    } = content;
    let {
      attributes: { email }
    } = companyDetails;
    return (
      <div className={styles.AddOns}>
        <Grid container spacing={3} className={styles.packages}>
          <Grid item xs={12} md={6}>
            <Paper className={styles.tile}>
              <ul className={`fa-ul ${styles.addOns}`}>
                {addOns.map(addOn => (
                  <li key={addOn.label}>
                    <span className={`fa-li ${styles.iconContainer}`}>
                      <i className="fas fa-check-circle"></i>
                    </span>
                    {addOn.label}
                    {addOn.subtext && <small>{addOn.subtext}</small>}
                  </li>
                ))}
              </ul>
            </Paper>
          </Grid>
        </Grid>
        <div className={styles.buttonContainer}>
          <a href={`mailto:${email}?subject=Gold Package Enquiry`}>
            <Button
              buttontype="primary"
              text="Enquire Now"
              icon="fab fa-telegram-plane"
              type="submit"
            />
          </a>
        </div>
      </div>
    );
  }
}
