// Styles
import styles from "./styles.scss";

export default function MyButton({ buttonType, text, icon, type }) {
  return (
    <button className={styles.Button} buttonType={buttonType} type={type}>
      <span>
        {icon && <i className={`${icon} ${styles.buttonIcon}`}></i>}
        {text}
      </span>
    </button>
  );
}
