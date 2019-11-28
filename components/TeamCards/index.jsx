// Resources
import Link from "next/link";
import { Grid, Card, CardContent, CardMedia } from "@material-ui/core";

// Styles
import styles from "./styles.scss";
import { Component } from "react";

export default class teamCards extends Component {
  render() {
    const { team } = this.props;
    return (
      <Grid container spacing={3} className={styles.teamCards}>
        {team
          .slice(0)
          .reverse()
          .map(team => (
            <Grid key={team.attributes.name} item xs={12} sm={6}>
              <Link href={`team/${team.slug}`}>
                <a>
                  <Card className={styles.card}>
                    <CardMedia
                      className={styles.image}
                      image={team.attributes.image}
                      src={team.attributes.name}
                    />
                    <CardContent className={styles.content}>
                      <h4>{team.attributes.name}</h4>
                    </CardContent>
                  </Card>
                </a>
              </Link>
            </Grid>
          ))}
      </Grid>
    );
  }
}
