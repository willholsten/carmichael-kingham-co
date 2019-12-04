// Styles
import styles from "./styles.scss";

export default function MyButton({ buttonType, href, text, icon, type }) {
  return (
    <button className={styles.Button} buttonType={buttonType} type={type}>
      {icon && <i className={`${icon} ${styles.buttonIcon}`}></i>}
      {text}
    </button>
  );
}
