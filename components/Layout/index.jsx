// Components
import Header from "../Header";
import Footer from "../Footer";
import Cookies from "../Cookies";

// Resources
import Head from "next/head";

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
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Head>
        <Cookies />
        <Header />

        <div className={styles.content}>
          <section>{children}</section>
        </div>

        <Footer />
        <script src="https://unpkg.com/netlify-cms@^2.0.0/dist/netlify-cms.js"></script>
        <script>
          CMS.registerPreviewStyle("/_next/static/css/styles.chunk.css");
        </script>
        <script src="https://kit.fontawesome.com/d54483515e.js" />
      </div>
    );
  }
}
