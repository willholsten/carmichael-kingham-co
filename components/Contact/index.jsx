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
        <SectionHeader text={pageTitle} image="/svg/contact.svg" />
        <IntroText text={pageSummary} />
        <Grid container spacing={3}>
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
                <span>
                  <i className="fas fa-phone"></i>
                  <a href="">{phone}</a>
                </span>
              </div>
              <div>
                <span>
                  <i className="fas fa-envelope"></i>
                  <a href="mailto:info@carmichaelkingham.com">{email}</a>
                </span>
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
