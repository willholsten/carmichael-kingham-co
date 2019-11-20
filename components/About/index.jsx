// Components
import SectionHeader from "../Common/SectionHeader";

// Resources
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

// Data
import content from "../../content/about.md";

// Styles
import "../../styles/main.scss";
import styles from "./styles.scss";

export default class About extends React.Component {
  render() {
    let {
      html,
      attributes: { pageTitle, quote }
    } = content;
    return (
      <div className={styles.About}>
        <SectionHeader text={pageTitle} image="/svg/about.svg" />
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Paper className={styles.quoteTile}>
              <h1 className={styles.quote}>
                <span>"</span>
                {quote}
                <span>"</span>
              </h1>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={8}>
            <Paper className={styles.textTile}>
              <div
                className={styles.markdown}
                dangerouslySetInnerHTML={{ __html: html }}
              />
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}
