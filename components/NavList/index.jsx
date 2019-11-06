// Components
import Link from "../../utils/ActiveLink";

// Styles
import "../../styles/main.scss";
import styles from "./styles.scss";

export default function NavList() {
  return (
    <div className={styles.NavList}>
      <Link activeClassName="active" href="/about-us">
        <a>
          <img className={styles.NavMobile_icon} src="/svg/about-us.svg" />
          About Us
        </a>
      </Link>
      <Link activeClassName="active" href="/our-people">
        <a>
          <img className={styles.NavMobile_icon} src="/svg/our-people.svg" />
          Our People
        </a>
      </Link>
      <Link activeClassName="active" href="/expertise">
        <a>
          <img className={styles.NavMobile_icon} src="/svg/services.svg" />
          Expertise
        </a>
      </Link>
      <Link activeClassName="active" href="/blog">
        <a>
          <img className={styles.NavMobile_icon} src="/svg/blog.svg" />
          Blog
        </a>
      </Link>
      <Link activeClassName="active" href="/contact">
        <a>
          <img className={styles.NavMobile_icon} src="/svg/contact.svg" />
          Contact
        </a>
      </Link>
    </div>
  );
}
