import { Component } from "react";

// Components
import Map from "../Map";
import ContactForm from "../ContactForm";
import IntroText from "../IntroText";

// Resources
import { Grid } from "@material-ui/core";

// Data
import content from "../../content/companyDetails.md";
import contactContent from "../../content/contactUs.md";

// Styles
import "../../styles/main.scss";
import styles from "./styles.scss";

export default class Contact extends Component {
  render() {
    let {
      attributes: { address, phone, email }
    } = content;
    let {
      attributes: { pageSummary }
    } = contactContent;
    return (
      <div className={styles.Contact}>
        <IntroText text={pageSummary} />
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} className={styles.map}>
            <Map />
            <div>
              <i className="fas fa-home"></i>
              <span>{address}</span>
            </div>
            <div>
              <span>
                <i className="fas fa-phone"></i>
                <a href="">{phone}</a>
              </span>
              <span>
                <i className="fas fa-envelope"></i>
                <a href="mailto:info@carmichaelkingham.com">{email}</a>
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
