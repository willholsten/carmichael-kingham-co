import React from "react";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";

// Styles

import styles from "./styles.scss";

export default function Accordion({ data }) {
  return (
    <div className={styles.Accordion}>
      <div>
        {data.map(data => (
          <ExpansionPanel key={data.id}>
            <ExpansionPanelSummary
              expandIcon={<i className="fas fa-angle-down"></i>}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>{data.title}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>{data.content}</Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        ))}
      </div>
    </div>
  );
}
