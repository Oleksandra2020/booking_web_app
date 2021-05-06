import { Container, Row, Col } from "react-bootstrap";
import styles from "./styles.module.css";

import Header from "../../modules/Header/index";

const BookingView = () => (
  <Container>
    <Header />
    <Row>
      <Col>
        <h2 className={styles.headline_small}>Звідки:</h2>
        <input id="origin_selector" type="text" placeholder="Київ" />
      </Col>
      <Col>
        <h2 className={styles.headline_small}>Куди:</h2>
        <input
          id="destinition_selector"
          type="text"
          placeholder="Оберіть місто"
        />
      </Col>
    </Row>
  </Container>
);

export default BookingView;
