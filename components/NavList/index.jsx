// Resources
import Link from "next/link";

// Styles
import "../../styles/main.scss";
import styles from "./styles.scss";

export default function NavList() {
  return (
    <ul className={styles.NavList}>
      <Link href="/about-us">
        <li>
          <img className={styles.NavMobile_icon} src="/svg/about-us.svg" />
          <a>About Us</a>
        </li>
      </Link>
      <Link href="/our-people">
        <li>
          <img className={styles.NavMobile_icon} src="/svg/our-people.svg" />
          <a>Our People</a>
        </li>
      </Link>
      <Link href="/services">
        <li>
          <img className={styles.NavMobile_icon} src="/svg/services.svg" />
          <a>Services</a>
        </li>
      </Link>
      <Link href="/blog">
        <li>
          <img className={styles.NavMobile_icon} src="/svg/blog.svg" />
          <a>Blog</a>
        </li>
      </Link>
      <Link href="/contact">
        <li>
          <img className={styles.NavMobile_icon} src="/svg/contact.svg" />
          <a>Contact</a>
        </li>
      </Link>
    </ul>
  );
}
