// Resources
import Link from "next/link";

// Styles
import styles from "./styles.scss";

export default function MyButton({ style, link, href, text, icon }) {
  return (
    <div className={styles.Button} type={style}>
      <a href={href}>
        {icon && <i className={`${icon} ${styles.buttonIcon}`}></i>}
        {text}
      </a>
    </div>
  );
}
