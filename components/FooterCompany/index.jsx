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
      attributes: { company }
    } = content;
    return (
      <div className={styles.FooterCompany}>
        <h4>Company</h4>
        {company.map(company => (
          <Link key={company.label} href={company.href}>
            <a>{company.label}</a>
          </Link>
        ))}
      </div>
    );
  }
}
