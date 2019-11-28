// Components
import Link from "next/link";

// Data
import content from "../../content/navigation.md";

// Styles
import styles from "./styles.scss";

export default function NavList() {
  let {
    attributes: { navigation }
  } = content;
  return (
    <div className={styles.NavList}>
      {navigation.map(nav => (
        <Link href={nav.href} key={nav.href}>
          <a>
            <img className={styles.NavMobileIcon} src={nav.icon} />
            {nav.label}
          </a>
        </Link>
      ))}
    </div>
  );
}
