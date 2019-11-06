import Head from "next/head";
import Header from "../Header";
import Footer from "../Footer";

export default class Layout extends React.Component {
  render(props) {
    const { children, title, description, keywords } = this.props;
    return (
      <div>
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
          <link
            rel="shortcut icon"
            type="image/x-icon"
            href="/static/favicon.ico"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Header />
        {children}
        <Footer />
        <script src="https://kit.fontawesome.com/d54483515e.js" />
      </div>
    );
  }
}
