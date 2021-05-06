import { Row, Col } from "react-bootstrap";
import styles from "./styles.module.css";

import Switch from "../../Switch/index";

const CheckBoxMenu = () => (
  <div className={styles.checkBox}>
    <Row>
      <Col>
        <div className={styles.checkBox_elem}>
          <Switch />
          <span className={styles.checkBox__text}>В обидві сторони</span>
        </div>
      </Col>
      <Col>
        <div className={styles.checkBox_elem}>
          <Switch />
          <span className={styles.checkBox__text}>Два місця поряд</span>
        </div>
      </Col>
    </Row>
  </div>
);

export default CheckBoxMenu;
