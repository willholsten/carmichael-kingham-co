// Components
import NavList from "../NavList";

// Styles

import styles from "./styles.scss";

export default function NavWeb() {
  return (
    <nav className={styles.Nav}>
      <NavList />
    </nav>
  );
}
