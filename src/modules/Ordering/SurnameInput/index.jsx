import styles from "./styles.module.css";

const NameInput = () => (
  <input
    id="origin_selector"
    className={styles.surname_selector}
    type="text"
    placeholder="Прізвище"
  />
);

export default NameInput;
