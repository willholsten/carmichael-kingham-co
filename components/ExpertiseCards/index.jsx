import { Component } from "react";

// Components
import MyLink from "../Common/MyLink";

// Resources
import Link from "next/link";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

// Styles
import styles from "./styles.scss";

export default class ExpertiseCards extends Component {
  render() {
    const { expertise, numOfServices } = this.props;
    return (
      <div className={styles.ExpertiseCards}>
        <Grid container spacing={3}>
          {expertise.slice(0, numOfServices).map(expertise => (
            <Grid key={expertise.attributes.title} item xs={12} sm={4}>
              <Paper className={styles.tile}>
                <h4>{expertise.attributes.title}</h4>
                <p>
                  {expertise.summary &&
                    `${expertise.summary.substring(0, 150)}`}
                </p>
                <MyLink
                  href={`expertise/${expertise.slug}`}
                  text="Read more"
                  buttonType="secondary"
                />
              </Paper>
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}
