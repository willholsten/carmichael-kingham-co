// Resources
import Link from "next/link";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

// Styles
import "../../styles/main.scss";
import styles from "./styles.scss";

// Data
import expertise from "./../../data/expertise.json";

export default function ExpertiseCard(props) {
  return (
    <Grid container spacing={3} className={styles.ExpertiseCard}>
      {expertise.map(service => (
        <Grid key={service.title} item xs={12} sm={6}>
          <Link href={service.href}>
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
  );
}
