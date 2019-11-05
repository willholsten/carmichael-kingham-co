// Resources
import Link from "next/link";

// Styles
import styles from "./styles.scss";

export default function Logo() {
  return (
    <Link href="/">
      <div className={styles.Logo}>
        <img className={styles.logo_web} src="/svg/logo-web.svg" />
        <img className={styles.logo_mobile} src="/svg/logo-mobile.svg" />
      </div>
    </Link>
  );
}
