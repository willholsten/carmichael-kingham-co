// Resources
import { Grid } from "@material-ui/core";
import { Tab, TabPanel, Tabs, TabList } from "react-web-tabs";

// Styles
import "../../styles/main.scss";
import styles from "./styles.scss";

export default class MyTabs extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <Tabs
        defaultTab="vertical-tab-1"
        vertical
        className={styles.VerticalTabs}
      >
        <Grid container spacing={6}>
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
          <Grid item sm={8}>
            {data.map(data => (
              <TabPanel
                className={styles.tabPanel}
                tabId={`vertical-tab-${data.id}`}
                key={data.id}
              >
                <h2>{data.title}</h2>
                <h4>{data.credentials}</h4>
                {data.content}
              </TabPanel>
            ))}
          </Grid>
        </Grid>
      </Tabs>
    );
  }
}
