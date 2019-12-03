// Resources
import Link from "next/link";

// Styles
import styles from "./styles.scss";

export default function MyButton({ buttonType, href, text, icon, type }) {
  return (
    <button className={styles.Button} buttonType={buttonType} type={type}>
      <Link href={href}>
        <a>
          {icon && <i className={`${icon} ${styles.buttonIcon}`}></i>}
          {text}
        </a>
      </Link>
    </button>
  );
}
