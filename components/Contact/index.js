// Components
import Map from "../Map";
import ContactForm from "../ContactForm";

// Resources
import { Grid } from "@material-ui/core";

// Data
import content from "../../content/expertise.md";

// Styles
import "../../styles/main.scss";
import styles from "./styles.scss";

export default class Contact extends React.PureComponent {
  render() {
    let {
      attributes: { expertise }
    } = content;
    return (
      <div className={styles.Contact}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} className={styles.map}>
            <Map />
          </Grid>
          <Grid item xs={12} md={6}>
            <ContactForm />
          </Grid>
        </Grid>
      </div>
    );
  }
}
