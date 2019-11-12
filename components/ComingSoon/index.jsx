// Components
import PrimaryButton from "../Common/PrimaryButton";

// Styles
import "../../styles/main.scss";
import styles from "./styles.scss";

export default function ComingSoon() {
  return (
    <div className={styles.ComingSoon}>
      <h1>Website coming soon...</h1>
      <PrimaryButton
        href="mailto:annabelle.carmichael@carmichaelkingham.com"
        text="Get in touch"
        icon="fas fa-envelope"
      />
    </div>
  );
}
