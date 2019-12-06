// Resources
import Link from "next/link";

// Styles
import styles from "./styles.scss";

export default function LogoLarge() {
  return (
    <Link href="/">
      <a className={styles.logoLarge}>
        <img src="/svg/logo-web.svg" alt="Web Logo" />
      </a>
    </Link>
  );
}
