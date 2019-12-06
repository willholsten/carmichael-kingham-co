// Resources
import Link from "next/link";

// Styles
import styles from "./styles.scss";

export default function LogoSmall() {
  return (
    <Link href="/">
      <a className={styles.LogoSmall}>
        <img src="/svg/logo-mobile.svg" alt="Mobile Logo" />
      </a>
    </Link>
  );
}
