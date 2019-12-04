// Resources
import Link from "next/link";

// Styles
import styles from "./styles.scss";

export default function MyLink({ href, text, buttontype }) {
  return (
    <div className={styles.link} buttontype={buttontype}>
      <Link href={href}>
        <a>{text}</a>
      </Link>
    </div>
  );
}
