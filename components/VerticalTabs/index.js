// Resources
import { Grid } from "@material-ui/core";
import { Tab, TabPanel, Tabs, TabList } from "react-web-tabs";

// Data
import content from "../../content/expertise.md";

// Styles
import "../../styles/main.scss";
import styles from "./styles.scss";

export default class VerticalTabs extends React.PureComponent {
  render() {
    let {
      attributes: { expertise }
    } = content;
    return (
      <Tabs
        defaultTab="vertical-tab-one"
        vertical
        className={styles.VerticalTabs}
      >
        <Grid container spacing={3}>
          <Grid item sm={4}>
            <TabList className={styles.tabList}>
              {expertise.map(expertise => (
                <Tab
                  className={styles.tab}
                  tabFor={`vertical-tab-${expertise.id}`}
                  key={expertise.id}
                >
                  {expertise.title}
                </Tab>
              ))}
            </TabList>
          </Grid>
          <Grid item sm={4}>
            {expertise.map(expertise => (
              <TabPanel
                className={styles.tabPanel}
                tabId={`vertical-tab-${expertise.id}`}
                key={expertise.id}
              >
                {expertise.content}
              </TabPanel>
            ))}
          </Grid>
        </Grid>
      </Tabs>
    );
  }
}
