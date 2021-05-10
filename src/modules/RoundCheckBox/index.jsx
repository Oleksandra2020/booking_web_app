import React from "react";
import styles from "./styles.module.css";

const RoundCheckBox = () => (
  <>
    <input
      className={styles.react_switch_checkbox}
      id="react-switch-new"
      type="checkbox"
    />
    <label className={styles.react_switch_label} htmlFor="react-switch-new">
      <span className={styles.react_switch_button} />
    </label>
  </>
);

export default RoundCheckBox;
