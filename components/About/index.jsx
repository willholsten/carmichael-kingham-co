// Resources
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

// Styles
import styles from "./styles.scss";

export default class About extends React.Component {
  render() {
    const { about } = this.props;
    return (
      <div className={styles.About}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Paper className={styles.quoteTile}>
              <h1 className={styles.quote}>
                <span>"</span>
                {about.attributes.quote}
                <span>"</span>
              </h1>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={8}>
            <Paper className={styles.textTile}>
              <div
                className={styles.markdown}
                dangerouslySetInnerHTML={{ __html: about.html }}
              />
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}
