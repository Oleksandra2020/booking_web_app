import { Row, Col } from "react-bootstrap";
import styles from "../../_shared/_checkbox_styles/styles.module.css";
import Switch from "../../_shared/Switch/index";

const CheckBoxMenu = () => (
  <div className={styles.checkBox}>
    <Row>
      <Col>
        <div className={styles.checkBox_elem}>
          <Switch switchId="one_way" />
          <span className={styles.checkBox__text}>В обидві сторони</span>
        </div>
      </Col>
      <Col>
        <div className={styles.checkBox_elem}>
          <Switch switchId="seats_near" />
          <span className={styles.checkBox__text}>Два місця поряд</span>
        </div>
      </Col>
    </Row>
  </div>
);

export default CheckBoxMenu;
