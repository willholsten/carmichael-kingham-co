// Components
import Button from "../MyButton";

// Resources
import { Grid } from "@material-ui/core";

// Data
import content from "../../../content/companyDetails.md";

// Styles
import styles from "./styles.scss";

export default function ContactButtons({ buttonType }) {
  let {
    attributes: { phone, email }
  } = content;
  return (
    <div className={styles.contactButtons}>
      <Grid container spacing="3">
        <Grid item xs="6">
          <a href={`tel:${phone}`}>
            <Button
              buttonType={buttonType}
              text="Phone"
              icon="fas fa-phone"
              type="submit"
            />
          </a>
        </Grid>
        <Grid item xs="6">
          <a href={`mailto:${email}`}>
            <Button
              buttonType={buttonType}
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
