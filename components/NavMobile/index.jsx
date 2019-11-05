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
      <div className={styles.NavMobile_header}>
        <Link href="/">
          <img className={styles.logo} src="/svg/logo-web.svg" />
        </Link>
        <i class="fab fa-linkedin"></i>
      </div>
      <NavList />
      <Divider />
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
