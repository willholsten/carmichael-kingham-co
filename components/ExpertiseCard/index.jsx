// Resources
import Link from "next/link";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

// Data
import content from "../../content/expertise.md";

// Styles
import "../../styles/main.scss";
import styles from "./styles.scss";

export default function ExpertiseCard(props) {
  let {
    attributes: { expertise }
  } = content;
  return (
    <Grid container spacing={3} className={styles.ExpertiseCard}>
      {expertise.map(expertise => (
        <Grid key={expertise.title} item xs={12} sm={6}>
          <Link href={expertise.href}>
            <a>
              <Paper className={styles.tile}>
                <h4>{expertise.title}</h4>
                {/* <p>{expertise.summary}</p>
                {console.log(expertise.summary)} */}
                <p>
                  {expertise.summary &&
                    `${expertise.summary.substring(0, 150)}`}
                </p>
              </Paper>
            </a>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
}
