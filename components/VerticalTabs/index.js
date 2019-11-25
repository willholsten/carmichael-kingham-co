// Resources
import { Grid } from "@material-ui/core";
import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import Sticky from "react-sticky-el";
import Link from "next/link";

// Styles
import "../../styles/main.scss";
import styles from "./styles.scss";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    display: "flex"
  },
  bigIndicator: {
    borderRadius: "0 10px 10px 0",
    width: "5px",
    marginRight: "3px",
    backgroundColor: "#041C69"
  }
}));

export default function VerticalTabs({ data }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={styles.VerticalTabs}>
      <Grid container spacing={6}>
        <Grid item sm={4}>
          <Sticky style={{}}>
            <Tabs
              orientation="vertical"
              variant="scrollable"
              value={value}
              onChange={handleChange}
              aria-label="Vertical tabs example"
              className={styles.tabList}
              classes={{ indicator: classes.bigIndicator }}
            >
              {data.map(data => (
                <Link
                  href={`/expertise ${data.title
                    .toLowerCase()
                    .replace(/ /g, "-")}`}
                >
                  <Tab
                    label={data.title}
                    className={styles.tab}
                    key={data.id}
                    {...a11yProps(data.id)}
                    to={data.title.toLowerCase().replace(/ /g, "-")}
                  />
                </Link>
              ))}
            </Tabs>
          </Sticky>
        </Grid>
        <Grid item sm={8}>
          {data.map(data => (
            <TabPanel
              className={styles.tabPanel}
              key={data.id}
              value={value}
              index={data.id}
            >
              <h2>{data.title}</h2>
              <div dangerouslySetInnerHTML={{ __html: data.content }} />
            </TabPanel>
          ))}
        </Grid>
      </Grid>
    </div>
  );
}
