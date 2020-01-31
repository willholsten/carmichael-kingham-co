// Components
import Button from "../MyButton";

// Resources
import { Grid } from "@material-ui/core";

// Data
import content from "../../../content/companyDetails.md";

// Styles
import styles from "./styles.scss";

export default function ContactButtons({ buttontype }) {
  let {
    attributes: { phone, email }
  } = content;
  return (
    <div className={styles.contactButtons}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <a href={`tel:${phone}`}>
            <Button
              buttontype={buttontype}
              text="Phone"
              icon="fas fa-phone"
              type="submit"
            />
          </a>
        </Grid>
        <Grid item xs={6}>
          <a href={`mailto:${email}`}>
            <Button
              buttontype={buttontype}
              text="Email"
              icon="fas fa-envelope"
              type="submit"
            />
          </a>
        </Grid>
      </Grid>
    </div>
  );
}
