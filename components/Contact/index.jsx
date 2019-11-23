import { Component } from "react";

// Components

import Map from "../Map";
import ContactForm from "../ContactForm";

// Resources
import { Grid } from "@material-ui/core";

// Styles
import "../../styles/main.scss";
import styles from "./styles.scss";

export default class Contact extends Component {
  render() {
    const { companyDetails } = this.props;
    return (
      <div className={styles.Contact}>
        <Grid container spacing={6}>
          <Grid item xs={12} md={6} className={styles.map}>
            <Map />
            <div className={styles.companyInfo}>
              <div>
                <i className="fas fa-home"></i>
                <span>{companyDetails.attributes.address}</span>
                <span className={styles.appointment}>
                  (By appointment only)
                </span>
              </div>
              <div>
                <a href={`tel:${companyDetails.attributes.phone}`}>
                  <i className="fas fa-phone"></i>
                  <span>{companyDetails.attributes.phone}</span>
                </a>
              </div>
              <div>
                <a href={`tel:${companyDetails.attributes.email}`}>
                  <i className="fas fa-envelope"></i>
                  <span>{companyDetails.attributes.email}</span>
                </a>
              </div>
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
