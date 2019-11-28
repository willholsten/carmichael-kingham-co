import { Component } from "react";

// Resources
import Link from "next/link";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

// Styles

import styles from "./styles.scss";

export default class ExpertiseCards extends Component {
  render() {
    const { expertise } = this.props;
    return (
      <div className={styles.ExpertiseCards}>
        <Grid container spacing={3}>
          {expertise.map(expertise => (
            <Grid key={expertise.attributes.title} item xs={12} sm={4}>
              <Link
                href={`expertise/${expertise.attributes.title
                  .toLowerCase()
                  .replace(/ /g, "-")}`}
              >
                <a>
                  <Paper className={styles.tile}>
                    <h4>{expertise.attributes.title}</h4>
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
      </div>
    );
  }
}
