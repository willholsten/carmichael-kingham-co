// Components
import ContactButton from "../ContactButton";

// Data
import content from "../../../content/companyDetails.md";

// Styles
import styles from "./styles.scss";

export default function ContactButtons() {
  let {
    attributes: { phone, email }
  } = content;
  return (
    <div className={styles.contactButtons}>
      <ContactButton
        style="Secondary"
        href={`tel:${phone}`}
        text="Phone"
        icon="fas fa-phone"
        type="submit"
      />
      <ContactButton
        style="Secondary"
        href={`mailto:${email}`}
        text="Email"
        icon="fas fa-envelope"
        type="submit"
      />
    </div>
  );
}
