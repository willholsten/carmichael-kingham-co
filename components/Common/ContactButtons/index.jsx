// Components
import ContactButton from "../ContactButton";

// Resources
import { Grid } from "@material-ui/core";

// Data
import content from "../../../content/companyDetails.md";

// Styles
import styles from "./styles.scss";

export default function ContactButtons() {
  let {
    attributes: { phone, email }
  } = content;
  return (
    <div className={styles.contactButtons}>
      <Grid container spacing="3">
        <Grid item xs="6">
          <ContactButton
            style="Secondary"
            href={`tel:${phone}`}
            text="Phone"
            icon="fas fa-phone"
            type="submit"
          />
        </Grid>
        <Grid item xs="6">
          <ContactButton
            style="Secondary"
            href={`mailto:${email}`}
            text="Email"
            icon="fas fa-envelope"
            type="submit"
          />
        </Grid>
      </Grid>
    </div>
  );
}
