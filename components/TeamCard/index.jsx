// Resources
import Link from "next/link";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

// Styles
import "../../styles/main.scss";
import styles from "./styles.scss";

export default class TeamCard extends React.Component {
  render() {
    const { team } = this.props;
    return (
      <Grid container spacing={3} className={styles.TeamCard}>
        {team.team.map(team => (
          <Grid key={team.title} item xs={12} sm={6}>
            <Link href={team.href}>
              <a>
                <Paper className={styles.tile}>
                  <img className={styles.avatar} src={team.image} />
                  <div className={styles.text}>
                    <h2>{team.title}</h2>
                    <h4>{team.credentials}</h4>
                  </div>
                </Paper>
              </a>
            </Link>
          </Grid>
        ))}
      </Grid>
    );
  }
}
