// Resources
import Link from "next/link";

// Styles
import styles from "./styles.scss";

export default function PrimaryButton({ href, text, icon }) {
  return (
    <div className={styles.Button}>
      <Link href={href}>
        <a className={styles.Button}>
          {icon && <i className={`${icon} ${styles.buttonIcon}`}></i>}
          {text}
        </a>
      </Link>
    </div>
  );
}
