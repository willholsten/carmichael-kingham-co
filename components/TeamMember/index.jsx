// Components
import SectionHeader from "../Common/SectionHeader";
import MyLink from "../Common/MyLink";

// Resources
import { Divider, Grid } from "@material-ui/core";

// Styles
import styles from "./styles.scss";

export default function TeamMember({ html, name, image }) {
  return (
    <div className={styles.TeamMember}>
      <SectionHeader text={name} image="" />
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <img className={styles.featuredImage} src={image} alt={name} />
        </Grid>
        <Grid item xs={12} sm={8}>
          <div
            className={styles.markdown}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </Grid>
      </Grid>
      <Divider className={styles.divider} />
      <MyLink href="/team" text="Back to team" />
    </div>
  );
}
