// Components
import NavList from "../NavList";

// Resources
import Link from "next/link";
import Button from "@material-ui/core/Button";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";

// Styles
import "../../styles/main.scss";
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
            <img className={styles.logo} src="/svg/logo-web.svg" />
          </Link>
          <i class="fab fa-linkedin"></i>
        </div>
        <NavList />
        <div className={styles.contact}>
          <Link href="/">
            <div className={styles.button_phone}>
              <i class="fas fa-phone"></i>
              Phone
            </div>
          </Link>
          <Link href="/">
            <div className={styles.button_email}>
              <i class="fas fa-envelope"></i>
              Email
            </div>
          </Link>
        </div>
      </div>
      <div className={styles.footer}>
        <Divider />
        <div className={styles.terms}>
          <Link href="/careers">Careers</Link>
          <span>
            <Link href="/careers">Privacy & Cookies</Link>
            <Link href="/careers"> | Ts&Cs</Link>
          </span>
        </div>
        <div className={styles.copyright}>
          &copy; {new Date().getFullYear()}. Carmichael Kingham & Co
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
        <i class="fas fa-bars"></i>
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
