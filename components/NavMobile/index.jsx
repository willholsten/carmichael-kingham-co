// Components
import NavList from "../NavList";
import ContactButtons from "../Common/ContactButtons";
import ContactButton from "../Common/ContactButton";

// Resources
import Link from "next/link";
import Button from "@material-ui/core/Button";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import { Grid } from "@material-ui/core";

// Data
import content from "../../content/companyDetails.md";

// Styles

import styles from "./styles.scss";

export default function NavMobile() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  });

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  let {
    attributes: { phone, email }
  } = content;

  const sideList = side => (
    <div
      className={styles.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <div>
        <div className={styles.header}>
          <Link href="/">
            <img className={styles.logo} src="/svg/logo-blue.svg" />
          </Link>
          <i className="fab fa-linkedin"></i>
        </div>
        <Grid item xs={12}>
          <NavList />
        </Grid>
        <div className={styles.contactButtons}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <ContactButton
                style="Secondary"
                href={`tel:${phone}`}
                text="Phone"
                icon="fas fa-phone"
                type="submit"
              />
            </Grid>
            <Grid item xs={6}>
              <ContactButton
                style="Secondary"
                href={`mailto:${email}`}
                text="Email"
                icon="fas fa-envelope"
                type="submit"
              />
            </Grid>
          </Grid>
        </div>
      </div>
      <div className={styles.footer}>
        <Divider />
        <div className={styles.terms}>
          <Link href="/careers">
            <a>Careers</a>
          </Link>
          <Link href="/privacy-policy">
            <a>Privacy Policy</a>
          </Link>
        </div>
        <div className={styles.copyright}>
          &copy; {new Date().getFullYear()}. Carmichael Kingham &amp; Co
        </div>
      </div>
    </div>
  );

  return (
    <div className={styles.NavMobile}>
      <Button
        className={styles.button_bars}
        onClick={toggleDrawer("right", true)}
      >
        <i className="fas fa-bars"></i>
      </Button>
      <Drawer
        anchor="right"
        open={state.right}
        onClose={toggleDrawer("right", false)}
      >
        {sideList("right")}
      </Drawer>
    </div>
  );
}
