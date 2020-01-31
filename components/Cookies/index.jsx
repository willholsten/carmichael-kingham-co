// Resources
import CookieConsent from "react-cookie-consent";

// Resources
import Link from "next/link";

// Styles
import styles from "./styles.scss";

export default class Cookies extends React.Component {
  render() {
    const { text } = this.props;
    return (
      <CookieConsent
        location="bottom"
        buttonText="Okay!"
        className={styles.CookieConsent}
        expires={150}
      >
        This website uses cookies to enhance the user experience. View our
        <Link href="privacy-policy">
          <a
            style={{
              color: "#041C69",
              fontWeight: "700",
              marginLeft: "5px"
            }}
          >
            Privacy Policy.
          </a>
        </Link>
      </CookieConsent>
    );
  }
}
