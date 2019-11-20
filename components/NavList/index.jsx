// Components
import Link from "../../utils/ActiveLink";

// Data
import content from "../../content/navigation.md";

// Styles
import "../../styles/main.scss";
import styles from "./styles.scss";

export default function NavList() {
  let {
    attributes: { navigation }
  } = content;
  return (
    <div className={styles.NavList}>
      {navigation.map(nav => (
        <Link activeClassName="active" href={nav.href} key={nav.href}>
          <a>
            <img className={styles.NavMobileIcon} src={nav.icon} />
            {nav.label}
          </a>
        </Link>
      ))}
    </div>
  );
}
