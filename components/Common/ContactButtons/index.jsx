// Components
import MyButton from "../MyButton";

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
      <MyButton
        style="Secondary"
        href={`tel:${phone}`}
        text="Phone"
        icon="fas fa-phone"
        type="submit"
      />
      <MyButton
        style="Secondary"
        href={`mailto:${email}`}
        text="Email"
        icon="fas fa-envelope"
        type="submit"
      />
    </div>
  );
}
