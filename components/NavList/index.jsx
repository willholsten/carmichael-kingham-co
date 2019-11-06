// Components
import Link from "../../utils/ActiveLink";

// Styles
import "../../styles/main.scss";
import styles from "./styles.scss";

export default function NavList() {
  return (
    <ul className={styles.NavList}>
      <Link activeClassName="active" href="/about-us">
        <a>
          <li>
            <img className={styles.NavMobile_icon} src="/svg/about-us.svg" />
            About Us
          </li>
        </a>
      </Link>
      <Link activeClassName="active" href="/our-people">
        <a>
          <li>
            <img className={styles.NavMobile_icon} src="/svg/our-people.svg" />
            Our People
          </li>
        </a>
      </Link>
      <Link activeClassName="active" href="/services">
        <a>
          <li>
            <img className={styles.NavMobile_icon} src="/svg/services.svg" />
            Services
          </li>
        </a>
      </Link>
      <Link activeClassName="active" href="/blog">
        <a>
          <li>
            <img className={styles.NavMobile_icon} src="/svg/blog.svg" />
            Blog
          </li>
        </a>
      </Link>
      <Link activeClassName="active" href="/contact">
        <a>
          <li>
            <img className={styles.NavMobile_icon} src="/svg/contact.svg" />
            Contact
          </li>
        </a>
      </Link>
    </ul>
  );
}
