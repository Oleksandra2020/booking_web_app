import styles from "../../_shared/_input_styles/styles.module.css";

const NameInput = () => (
  <input
    id="origin_selector"
    className={styles.selector}
    type="text"
    placeholder="Ім'я"
  />
);

export default NameInput;
