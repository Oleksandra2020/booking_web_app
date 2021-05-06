import styles from "./styles.module.css";

const Calendar = () => (
  <div className={styles.calendar__contsiner}>
    <h3 className={styles.date}>Лютий, 10</h3>
    <div className={styles.calendar}>
      <ul className={styles.calendar__row}>
        <li>Пн</li>
        <li>Вт</li>
        <li>Ср</li>
        <li>Чт</li>
        <li>Пт</li>
        <li>Сб</li>
        <li>Нд</li>
      </ul>
      <ul className={styles.calendar__row}>
        <li> </li>
        <li> </li>
        <li> </li>
        <li> </li>
        <li> </li>
        <li className={styles.disactive}>1</li>
        <li className={styles.disactive}>2</li>
      </ul>
      <ul className={styles.calendar__row}>
        <li className={styles.disactive}>3</li>
        <li className={styles.disactive}>4</li>
        <li className={styles.disactive}>5</li>
        <li className={styles.disactive}>6</li>
        <li className={styles.disactive}>7</li>
        <li className={styles.disactive}>8</li>
        <li className={styles.disactive}>9</li>
      </ul>
      <ul className={styles.calendar__row}>
        <li className={styles.active}>10</li>
        <li className={styles.active}>11</li>
        <li className={styles.active}>12</li>
        <li className={styles.active}>13</li>
        <li className={styles.active}>14</li>
        <li className={styles.active}>15</li>
        <li className={styles.active}>16</li>
      </ul>
      <ul className={styles.calendar__row}>
        <li className={styles.active}>17</li>
        <li className={styles.active}>18</li>
        <li className={styles.active}>19</li>
        <li className={styles.active}>20</li>
        <li className={styles.active}>21</li>
        <li className={styles.active}>22</li>
        <li className={styles.active}>23</li>
      </ul>
      <ul className={styles.calendar__row}>
        <li className={styles.active}>24</li>
        <li className={styles.active}>25</li>
        <li className={styles.active}>26</li>
        <li className={styles.active}>27</li>
        <li className={styles.active}>29</li>
      </ul>
    </div>
  </div>
);

export default Calendar;
