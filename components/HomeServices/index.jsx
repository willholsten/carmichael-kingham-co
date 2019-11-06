// Components
import SectionHeader from "../SectionHeader";

// Resources
import Link from "next/link";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

// Styles
import "../../styles/main.scss";
import styles from "./styles.scss";

export default function HomeServices(props) {
  const services = [
    {
      title: "Bookkeeping",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
      link: "/about-us#bookkeeping"
    },
    {
      title: "Management & Financial Reporting",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
      link: "/about-us#management-financial-reporting"
    },
    {
      title: "VAT & Corporation Tax",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
      link: "/about-us#vat-corporation-tax"
    },
    {
      title: "Budgeting & Forecasting",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
      link: "/about-us#budgeting-forecasting"
    },
    {
      title: "Ad Hoc Projects & Analysis",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
      link: "/about-us#ad-hoc-projects-analysis"
    },
    {
      title: "View all our services",
      text: "",
      link: "/about-us"
    }
  ];

  return (
    <Container maxWidth="md">
      <div className={styles.HomeServices}>
        <SectionHeader text="Services" image="/svg/services.svg" />
        <Grid container spacing={3} className={styles.tileContainer}>
          {services.map(service => (
            <Grid key={service.title} item xs={12} sm={6}>
              <Link href={service.link}>
                <a>
                  <Paper className={styles.tile}>
                    <h4>{service.title}</h4>
                    <p>{service.text}</p>
                  </Paper>
                </a>
              </Link>
            </Grid>
          ))}
        </Grid>
      </div>
    </Container>
  );
}
