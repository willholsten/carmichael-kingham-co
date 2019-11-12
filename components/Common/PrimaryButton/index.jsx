// Resources
import Link from "next/link";

// Styles
import styles from "./styles.scss";

export default class PrimaryButton extends React.Component {
  render() {
    const { href, text, icon } = this.props;
    return (
      <div className={styles.Button}>
        <Link href={href}>
          <a>
            {icon && <i className={`${icon} ${styles.buttonIcon}`}></i>}
            {text}
          </a>
        </Link>
      </div>
    );
  }
}
