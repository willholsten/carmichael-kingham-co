// Resources
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  CardActionArea,
  Typography
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// Styles
import "../../styles/main.scss";
import styles from "./styles.scss";

const useStyles = makeStyles({
  card: {
    // display: "flex",
    // padding: "34px"
  },
  content: {
    flex: "1 0 auto"
  }
});

export default function BlogCard({ title, image, summary }) {
  const classes = useStyles();

  return (
    <div className={styles.BlogCard}>
      {/* <Card className={classes.card}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={5} className={styles.imageContainer}>
            <CardMedia className={styles.image} image={image} />
          </Grid>
          <Grid item xs={12} sm={7}>
            <CardContent className={styles.content}>
              <h2 className={styles.title}>{title}</h2>
              <p className={styles.summary}>{`${summary.substring(
                0,
                150
              )}...`}</p>
              <span className={styles.link}>Read More</span>
            </CardContent>
          </Grid>
        </Grid>
      </Card> */}

      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia className={styles.image} image={image} />
          <CardContent>
            <h4 className={styles.title}>{title}</h4>
            <Typography variant="body2" color="textSecondary" component="p">
              {`${summary.substring(0, 150)}...`}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button className={styles.link} size="small" color="primary">
            Read more
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
