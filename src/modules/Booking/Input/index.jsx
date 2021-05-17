import styles from "../../_shared/_input_styles/styles.module.css";

const CityInput = () => (
  <input
    id="origin_selector"
    className={styles.selector}
    type="text"
    placeholder="Оберіть місто"
  />
);

export default CityInput;
