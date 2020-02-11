// Components
import SectionHeader from '../Common/SectionHeader';
import MyLink from '../Common/MyLink';

// Resources
import { CardMedia, Divider } from '@material-ui/core';
import moment from 'moment';

// Styles

import styles from './styles.scss';

export default function BlogPost({ html, title, image, date }) {
  return (
    <div className={styles.BlogPost}>
      <div className={styles.header}>
        <SectionHeader text={title} image="" />
        <div className={styles.date}>
          <i className="fas fa-clock"></i>
          {moment(date).format('D MMMM, YYYY')}
        </div>
      </div>
      <CardMedia className={styles.featuredImage} image={image} alt={title} />
      <div
        className={styles.markdown}
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <Divider className={styles.divider} />
      <MyLink href="/blog" text="Back to posts" />
    </div>
  );
}
