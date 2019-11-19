// Resources
import { Grid } from "@material-ui/core";
import { Tab, TabPanel, Tabs, TabList } from "react-web-tabs";

// Styles
import "../../styles/main.scss";
import styles from "./styles.scss";

export default class WebTabs extends React.PureComponent {
  render() {
    const { data } = this.props;
    return (
      <Tabs
        defaultTab="vertical-tab-1"
        vertical
        className={styles.VerticalTabs}
      >
        <Grid container spacing={3}>
          <Grid item sm={4}>
            <TabList className={styles.tabList}>
              {data.map(data => (
                <Tab
                  className={styles.tab}
                  tabFor={`vertical-tab-${data.id}`}
                  key={data.id}
                >
                  {data.title}
                </Tab>
              ))}
            </TabList>
          </Grid>
          <Grid item sm={4}>
            {data.map(data => (
              <TabPanel
                className={styles.tabPanel}
                tabId={`vertical-tab-${data.id}`}
                key={data.id}
              >
                {data.content}
              </TabPanel>
            ))}
          </Grid>
        </Grid>
      </Tabs>
    );
  }
}
