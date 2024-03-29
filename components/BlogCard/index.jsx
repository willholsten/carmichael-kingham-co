// Components
import MyLink from '../Common/MyLink';

// Resources
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  CardActionArea
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import moment from 'moment';

// Styles

import styles from './styles.scss';

const useStyles = makeStyles({
  content: {
    flex: '1 0 auto'
  },
  actionArea: {
    pointerEvents: 'none',
    cursor: 'auto',
    '&:hover $focusHighlight': {
      opacity: 0
    }
  },
  focusHighlight: { opacity: 0 }
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
          <CardMedia className={styles.image} image={image} alt={title} />
          <CardContent>
            <div className={styles.date}>
              <i className="fas fa-clock"></i>
              {moment(date).format('D MMMM, YYYY')}
            </div>
            <h4 className={styles.title}>
              {`${title.substring(0, 50)}`}
              {title.length > 50 && '...'}
            </h4>
            <p>
              {`${summary.substring(0, 60)}`}
              {summary.length > 60 && '...'}
            </p>
          </CardContent>
        </CardActionArea>
        <CardActions className={styles.cardActions}>
          <MyLink href={href} text="Read more" buttontype="secondary" />
        </CardActions>
      </Card>
    </div>
  );
}
