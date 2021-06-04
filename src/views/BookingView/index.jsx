import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import main from "../../modules/_shared/main.module.css";

import Header from "../../modules/Header/index";
import CityInput from "../../modules/Booking/Input/index";
import CheckBoxMenu from "../../modules/Booking/CheckBoxMenu";
import Calendar from "../../modules/Booking/Calendar";

const BookingView = () => (
  <Container>
    <Header />
    <Row className={styles.input__container} xs={2}>
      <Col>
        <h2 className={styles.headline_small}>Звідки:</h2>
        <CityInput dest="from" />
      </Col>
      <Col>
        <h2 className={styles.headline_small}>Куди:</h2>
        <CityInput dest="where" />
      </Col>
    </Row>
    <CheckBoxMenu />
    <Row className={styles.calendar_row}>
      <h2 className={styles.headline_small}>Дата виїзду:</h2>
      <Calendar />
    </Row>
    <Row className={main.button__container}>
      <Col>
        <Link to="/tickets">
          <Button variant="primary" className={main.button} size="lg" block>
            Знайти поїзд
          </Button>
        </Link>
      </Col>
    </Row>
  </Container>
);

export default BookingView;
