// Components
import SectionHeader from "../Common/SectionHeader";
import MyLink from "../Common/MyLink";
import ExpertiseList from "../ExpertiseList";

// Resources
import { Divider, Grid } from "@material-ui/core";

// Styles
import styles from "./styles.scss";

export default function ExpertiseSingle({ html, title, expertise }) {
  return (
    <div className={styles.TeamMember}>
      <SectionHeader text={title} image="" />
      <Grid container spacing={10}>
        <Grid item sm={12} md={8}>
          <div
            className={styles.markdown}
            dangerouslySetInnerHTML={{ __html: html }}
          />
          <Divider className={styles.divider} />
          <MyLink href="/expertise" text="Back to expertise" />
        </Grid>
        <Grid item sm={12} md={4}>
          <ExpertiseList expertise={expertise} />
        </Grid>
      </Grid>
    </div>
  );
}
