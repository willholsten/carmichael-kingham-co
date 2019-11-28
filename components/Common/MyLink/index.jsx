// Resources
import Link from "next/link";

// Styles
import styles from "./styles.scss";

export default function MyLink({ href, text, type }) {
  return (
    <div className={styles.link} type={type}>
      <Link href={href}>
        <a>{text}</a>
      </Link>
    </div>
  );
}
