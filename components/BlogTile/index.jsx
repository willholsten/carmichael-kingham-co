// Resources
import { Grid, Card, CardMedia, CardContent } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// Styles
import "../../styles/main.scss";
import styles from "./styles.scss";

const useStyles = makeStyles({
  card: {
    display: "flex",
    padding: "34px"
  },
  content: {
    flex: "1 0 auto"
  }
});

export default function BlogTile({ title, image, summary }) {
  const classes = useStyles();

  return (
    <div className={styles.BlogTile}>
      <Card className={classes.card}>
        <Grid xs={12} xs={5}>
          <CardMedia className={styles.image} image={image} />
        </Grid>
        <Grid xs={12} xs={7}>
          <CardContent className={styles.content}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.summary}>{`${summary.substring(
              0,
              150
            )}...`}</p>
            Read More
          </CardContent>
        </Grid>
      </Card>
    </div>
  );
}
