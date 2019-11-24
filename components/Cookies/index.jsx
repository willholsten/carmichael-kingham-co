// Resources
import CookieConsent from "react-cookie-consent";

// Resources
import Link from "next/link";

// Styles
import "../../styles/main.scss";
import styles from "./styles.scss";

export default class Cookies extends React.Component {
  render() {
    const { text } = this.props;
    return (
      <CookieConsent
        location="bottom"
        buttonText="Okay!"
        style={{
          background: "#F2F4F9",
          color: "#7e88ab",
          padding: "0 50px",
          // position: "relative",
          justifyContent: "space-around;"
        }}
        buttonStyle={{
          color: "#fff",
          textTransform: "uppercase",
          letterSpacing: "1px",
          fontWeight: "bold",
          fontSize: "12px",
          fontSize: "13px",
          borderRadius: "10px",
          padding: "8px 12px",
          backgroundColor: "#6adbbd"
        }}
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
