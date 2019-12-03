// Resources
import Link from "next/link";

// Styles
import styles from "./styles.scss";

export default function MyLink({ href, text, buttonType }) {
  return (
    <div className={styles.link} buttonType={buttonType}>
      <Link href={href}>
        <a>{text}</a>
      </Link>
    </div>
  );
}
