// Components
import MyButton from "../Common/MyButton";
import DropZone from "../DropZone";

// Resources
import { Grid } from "@material-ui/core";

// Styles

import styles from "./styles.scss";

export default function CareersForm(props) {
  return (
    <div className={styles.CareersForm}>
      <form name="Careers" method="POST" data-netlify="true">
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <DropZone />
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <h4>Your Details</h4>
              </Grid>
              <Grid item xs={12} md={6}>
                <input
                  type="text"
                  name="name"
                  placeholder="First Name"
                  onFocus={e => (e.target.placeholder = "")}
                  onBlur={e => (e.target.placeholder = "First name")}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <input
                  type="text"
                  name="name"
                  placeholder="Last Name"
                  onFocus={e => (e.target.placeholder = "")}
                  onBlur={e => (e.target.placeholder = "Last name")}
                />
              </Grid>
              <Grid item xs={12}>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  onFocus={e => (e.target.placeholder = "")}
                  onBlur={e => (e.target.placeholder = "Email")}
                />
              </Grid>
              <Grid item xs={12}>
                <textarea
                  name="message"
                  placeholder="Cover letter..."
                  onFocus={e => (e.target.placeholder = "")}
                  onBlur={e => (e.target.placeholder = "Message...")}
                ></textarea>
              </Grid>

              <Grid item xs={12} md={4}>
                <div>
                  <MyButton
                    buttonType="primary"
                    href=""
                    text="send"
                    icon="fab fa-telegram-plane"
                    type="submit"
                  />
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}
