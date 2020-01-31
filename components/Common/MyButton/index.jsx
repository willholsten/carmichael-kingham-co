// Styles
import styles from "./styles.scss";

export default function MyButton({ buttontype, href, text, icon, type }) {
  return (
    <button className={styles.Button} buttontype={buttontype} type={type}>
      {icon && <i className={`${icon} ${styles.buttonIcon}`}></i>}
      {text}
    </button>
  );
}
