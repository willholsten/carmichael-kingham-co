import { Component } from "react";

// Components
import SectionHeader from "../Common/SectionHeader";
import IntroText from "../IntroText";
import Map from "../Map";
import ContactForm from "../ContactForm";

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
      attributes: { pageTitle, pageSummary }
    } = contactContent;
    return (
      <div className={styles.Contact}>
        <SectionHeader text={pageTitle} />
        <IntroText text={pageSummary} />
        <Grid container spacing={6}>
          <Grid item xs={12} md={6} className={styles.map}>
            <Map />
            <div className={styles.companyInfo}>
              <div>
                <i className="fas fa-home"></i>
                <span>{address}</span>
                <span className={styles.appointment}>
                  (By appointment only)
                </span>
              </div>
              <div>
                <a href={`tel:${phone}`}>
                  <i className="fas fa-phone"></i>
                  <span>{phone}</span>
                </a>
              </div>
              <div>
                <a href={`tel:${email}`}>
                  <i className="fas fa-envelope"></i>
                  <span>{email}</span>
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
