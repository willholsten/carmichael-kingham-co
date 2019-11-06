// Components
import SectionHeader from "../SectionHeader";

// Resources
import Link from "next/link";
import Container from "@material-ui/core/Container";

// Styles
import "../../styles/main.scss";
import styles from "./styles.scss";

export default function HomeAbout() {
  return (
    <Container maxWidth="md">
      <div className={styles.HomeAbout}>
        <SectionHeader text="About us" image="/svg/about-us.svg" />
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
          <Link href="/about-us">
            <a className={styles.link}>Read more</a>
          </Link>
        </p>
      </div>
    </Container>
  );
}
