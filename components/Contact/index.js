// Components
import Map from "../Map";
import ContactForm from "../ContactForm";

// Resources
import { Grid } from "@material-ui/core";

// Data
import content from "../../content/companyDetails.md";

// Styles
import "../../styles/main.scss";
import styles from "./styles.scss";

export default class Contact extends React.PureComponent {
  render() {
    return (
      <div className={styles.Contact}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} className={styles.map}>
            <Map />
            <div>
              <i className="fas fa-home"></i>
              <span>20-22 Wenlock Rd, Hoxton, London N1 7GU.</span>
            </div>
            <div>
              <span>
                <i className="fas fa-phone"></i>
                <a href="">+44 (0) 20 3468 2472</a>
              </span>
              <span>
                <i className="fas fa-envelope"></i>
                <a href="mailto:info@carmichaelkingham.com">
                  info@carmichaelkingham.com
                </a>
              </span>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <ContactForm />
          </Grid>
        </Grid>
      </div>
    );
  }
}
