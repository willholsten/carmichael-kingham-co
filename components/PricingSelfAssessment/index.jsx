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

export default class PricingSelfAssessment extends React.Component {
  render() {
    const { pricing } = this.props;

    let {
      attributes: { gold, silver, bronze }
    } = content;
    let {
      attributes: { email }
    } = companyDetails;
    return (
      <div className={styles.PricingSelfAssessment}>
        <Grid container spacing={3} className={styles.packages}>
          <Grid item xs={12} md={8}>
            <Paper className={styles.tile}>
              <h3>{pricing.attributes.selfAssessmentText}</h3>
              <a
                className={styles.buttonContainer}
                href={`mailto:${email}?subject=Self Assessment Enquiry`}
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
      </div>
    );
  }
}
