// Components
import MyButton from "../Common/MyButton";

// Resources
import { Grid } from "@material-ui/core";

// Styles
import "../../styles/main.scss";
import styles from "./styles.scss";

export default class ContactForm extends React.Component {
  render() {
    return (
      <div className={styles.ContactForm}>
        <form name="Contact Us" method="POST" data-netlify="true">
          <Grid container spacing={2}>
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
                placeholder="Message..."
                onFocus={e => (e.target.placeholder = "")}
                onBlur={e => (e.target.placeholder = "Message...")}
              ></textarea>
            </Grid>

            <Grid item xs={12} md={4}>
              <div>
                <MyButton
                  style="Primary"
                  href=""
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
