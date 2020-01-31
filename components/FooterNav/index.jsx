// Resources
import Link from "next/link";
import Grid from "@material-ui/core/Grid";

// Styles

import styles from "./styles.scss";

// Data
import content from "../../content/navigation.md";

export default class FooterNav extends React.Component {
  render() {
    let {
      attributes: { navigation }
    } = content;
    return (
      <div className={styles.FooterNav}>
        <h4>Site</h4>
        {navigation.map(nav => (
          <Link key={nav.label} href={nav.href}>
            <a>{nav.label}</a>
          </Link>
        ))}
      </div>
    );
  }
}
