import styles from "./styles.module.css";

const NameInput = () => (
  <input
    id="origin_selector"
    className={styles.name_selector}
    type="text"
    placeholder="Ім'я"
  />
);

export default NameInput;
