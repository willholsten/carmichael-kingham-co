// Resources
import Link from "next/link";

// Styles
import styles from "./styles.scss";

export default function MyButton({ style, href, text, icon }) {
  return (
    <button className={styles.Button} type={style}>
      <Link href={href}>
        <a>
          {icon && <i className={`${icon} ${styles.buttonIcon}`}></i>}
          {text}
        </a>
      </Link>
    </button>
  );
}
