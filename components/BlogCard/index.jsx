// Components
import MyLink from "../Common/MyLink";

// Resources
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  CardActionArea
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import moment from "moment";

// Styles
import "../../styles/main.scss";
import styles from "./styles.scss";

const useStyles = makeStyles({
  content: {
    flex: "1 0 auto"
  },
  actionArea: {
    "&:hover $focusHighlight": {
      opacity: 0
    }
  },
  focusHighlight: {}
});

export default function BlogCard({ title, image, summary, href, date }) {
  const classes = useStyles();

  return (
    <div className={styles.BlogCard}>
      <Card className={classes.card}>
        <CardActionArea
          classes={{
            root: classes.actionArea,
            focusHighlight: classes.focusHighlight
          }}
        >
          <CardMedia className={styles.image} image={image} />
          <CardContent>
            <h4 className={styles.title}>{title}</h4>
            <div className={styles.date}>
              <i className="fas fa-clock"></i>
              {moment(date).format("Do MMMM YYYY")}
            </div>
            <p>{summary}</p>
          </CardContent>
        </CardActionArea>
        <CardActions className={styles.cardActions}>
          <MyLink href={href} text="Read more" />
        </CardActions>
      </Card>
    </div>
  );
}
