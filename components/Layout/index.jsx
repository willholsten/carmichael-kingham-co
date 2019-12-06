// Components
import Header from "../Header";
import Footer from "../Footer";
import Cookies from "../Cookies";

// Resources
import Head from "next/head";
import { NextSeo } from "next-seo";

// Styles
import "../../styles/main.scss";
import styles from "./styles.scss";

export default class Layout extends React.Component {
  render() {
    const { children, title, description, keywords } = this.props;
    return (
      <div className={styles.site}>
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <NextSeo
          title={title}
          description={description}
          canonical="https://www.carmichaelkingham.com"
          openGraph={{
            type: "website",
            locale: "en_GB",
            url: "https://www.carmichaelkingham.com",
            title: title,
            description: "Corporate Accounting + Advisory Services",
            site_name: title,
            images: [
              {
                url: "https://www.carmichaelkingham.com/logo-blue.svg",
                width: 136,
                height: 34,
                alt: title
              }
            ]
          }}
          twitter={{
            handle: "@CarmiKingham",
            site: "@CarmiKingham",
            cardType: "summary_large_image"
          }}
        />
        <Cookies />
        <Header />
        <div className={styles.content}>
          <section>{children}</section>
        </div>

        <Footer />
        <script src="https://kit.fontawesome.com/d54483515e.js" />
      </div>
    );
  }
}
