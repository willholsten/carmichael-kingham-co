// Resources
import Link from "next/link";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

// Styles
import "../../styles/main.scss";
import styles from "./styles.scss";

// Data
// import team from "../../data/team.json";
import content from "../../content/home.md";

export default class TeamTile extends React.Component {
  render() {
    let {
      attributes: { team }
    } = content;
    return (
      <Grid container spacing={3} className={styles.TeamTile}>
        {team.map(team => (
          <Grid key={team.name} item xs={12} sm={6}>
            <Link href={team.link}>
              <a>
                <Paper className={styles.tile}>
                  <img className={styles.avatar} src={team.image} />
                  <div className={styles.text}>
                    <h2>{team.name}</h2>
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
