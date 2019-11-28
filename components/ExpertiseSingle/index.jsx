// Components
import SectionHeader from "../Common/SectionHeader";
import MyLink from "../Common/MyLink";

// Resources
import { Divider, Grid } from "@material-ui/core";

// Styles
import styles from "./styles.scss";

export default function ExpertiseSingle({ html, title }) {
  return (
    <div className={styles.TeamMember}>
      <SectionHeader text={title} image="" />
      <Grid container spacing={3}>
        <Grid item xs={12} sm={8}>
          <div
            className={styles.markdown}
            dangerouslySetInnerHTML={{ __html: html }}
          />
          <Divider className={styles.divider} />
          <MyLink href="/expertise" text="Back to expertise" />
        </Grid>
      </Grid>
    </div>
  );
}
