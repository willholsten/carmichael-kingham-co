// Components
import NavList from "../NavList";
import ContactButtons from "../Common/ContactButtons";

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
            <a>
              <img className={styles.logo} src="/svg/logo-blue.svg" />
            </a>
          </Link>
          <Button
            className={styles.buttonClose}
            onClick={toggleDrawer("right", true)}
          >
            <i className="fas fa-times"></i>
          </Button>
        </div>
        <Grid item xs={12}>
          <NavList />
        </Grid>
        <div className={styles.contactButtons}>
          <ContactButtons buttonType="primary" />
        </div>
      </div>
      <div className={styles.footer}>
        <Divider />
        <div className={styles.connect}>
          <a
            href="https://www.linkedin.com/company/carmichael-kingham-co/about/ "
            target="_blank"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://twitter.com/CarmiKingham" target="_blank">
            <i className="fab fa-twitter"></i>
          </a>
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
        className={styles.buttonBars}
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
