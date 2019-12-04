// Components
import Button from "../Common/MyButton";

// Resources
import { Grid } from "@material-ui/core";

// Styles
import styles from "./styles.scss";

export default class ContactForm extends React.Component {
  render() {
    return (
      <div className={styles.ContactForm}>
        <form name="Contact" method="POST" data-netlify="true">
          <input type="hidden" name="form-name" value="Contact" />
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <h4>Get in touch</h4>
            </Grid>
            <Grid item xs={12} md={6}>
              <input
                type="text"
                name="fname"
                placeholder="First Name"
                onFocus={e => (e.target.placeholder = "")}
                onBlur={e => (e.target.placeholder = "First name")}
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <input
                type="text"
                name="lname"
                placeholder="Last Name"
                onFocus={e => (e.target.placeholder = "")}
                onBlur={e => (e.target.placeholder = "Last name")}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <input
                type="email"
                name="email"
                placeholder="Email"
                onFocus={e => (e.target.placeholder = "")}
                onBlur={e => (e.target.placeholder = "Email")}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <textarea
                name="message"
                placeholder="Message..."
                onFocus={e => (e.target.placeholder = "")}
                onBlur={e => (e.target.placeholder = "Message...")}
                required
              ></textarea>
            </Grid>

            <Grid item xs={12} md={4}>
              <div>
                <Button
                  buttonType="primary"
                  text="send"
                  icon="fab fa-telegram-plane"
                  type="submit"
                />
              </div>
            </Grid>
          </Grid>
        </form>
      </div>
    );
  }
}
