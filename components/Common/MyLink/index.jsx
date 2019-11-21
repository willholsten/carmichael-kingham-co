// Resources
import Link from "next/link";

// Styles
import styles from "./styles.scss";

export default function MyLink({ href }) {
  return (
    <div className={styles.link}>
      <Link href={href}>
        <a>Read more</a>
      </Link>
    </div>
  );
}
