// Resources
import Link from "next/link";

// Styles
import "../../../styles/main.scss";
import styles from "./styles.scss";

export default function MyLink({ href, text }) {
  return (
    <div className={styles.link}>
      <Link href={href}>
        <a>{text}</a>
      </Link>
    </div>
  );
}
