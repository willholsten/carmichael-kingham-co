// Components
import Header from "../Header";
import Footer from "../Footer";

// Resources
import Head from "next/head";
import Link from "next/link";
import Container from "@material-ui/core/Container";
import CookieConsent, { Cookies } from "react-cookie-consent";

// Styles
import styles from "./styles.scss";

export default class Layout extends React.Component {
  render() {
    const { children, title, description, keywords } = this.props;
    return (
      <div className={styles.site}>
        <Head>
          <title key="MetaTitle">{title}</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta
            key="MetaTitle.opengraph"
            property="og:title"
            content="Carmichael Kingham & Co"
          />
          <meta
            key="MetaDescription"
            name="description"
            content={description}
          />
          <meta key="MetaKeywords" name="keywords" content={keywords} />
          <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <CookieConsent
          location="top"
          buttonText="Okay got it!"
          style={{
            background: "#F2F4F9",
            color: "#7e88ab",
            position: "relative"
          }}
          buttonStyle={{
            color: "#6adbbd",
            textTransform: "uppercase",
            fontWeight: "bold",
            fontSize: "12px",
            fontSize: "13px",
            borderRadius: "10px",
            padding: "8px 12px",
            backgroundColor: "rgba(106, 219, 189, 0.2)"
          }}
          expires={150}
        >
          This website uses cookies to enhance the user experience. View our
          <Link href="privacy-policy">
            <a> Privacy Policy</a>
          </Link>
        </CookieConsent>
        <Header />

        <div className={styles.content}>
          <section>
            <Container maxWidth="md">{children}</Container>
          </section>
        </div>

        <Footer />
        <script src="https://kit.fontawesome.com/d54483515e.js" />
      </div>
    );
  }
}
