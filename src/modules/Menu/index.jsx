import styles from "./styles.module.css";

import Header from "../Header/index";

const Menu = () => (
  <div className={styles.menu}>
    <Header />
    <ul className={styles.list}>
      <li className={styles.list__item}>Мій кабінет</li>
      <li className={styles.list__item}>Повернення квитків</li>
      <li className={styles.list__item}>Договір оферти</li>
      <li className={styles.list__item}>Контакти</li>
    </ul>
  </div>
);

export default Menu;
