import styles from "./styles.module.css";

const CityInput = () => (
  <input
    id="origin_selector"
    className={styles.city_selector}
    type="text"
    placeholder="Оберіть місто"
  />
);

export default CityInput;
