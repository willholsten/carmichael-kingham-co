// Resources
import Link from "next/link";

// Styles
import styles from "./styles.scss";

export default function Logo() {
  return (
    <Link href="/">
      <a className={styles.Logo}>
        <img className={styles.logoWeb} src="/svg/logo-web.svg" />
        <img className={styles.logoMobile} src="/svg/logo-mobile.svg" />
      </a>
    </Link>
  );
}
