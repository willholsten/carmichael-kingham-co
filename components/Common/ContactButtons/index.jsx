// Resources
import Link from "next/link";

// Styles
import styles from "./styles.scss";

export default function ContactButtons() {
  return (
    <div className={styles.contactButtons}>
      <Link href="/">
        <a className={styles.button_phone}>
          <i className="fas fa-phone"></i>
          Phone
        </a>
      </Link>
      <Link href="/">
        <a className={styles.button_email}>
          <i className="fas fa-envelope"></i>
          Email
        </a>
      </Link>
    </div>
  );
}
