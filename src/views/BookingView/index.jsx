import { Container, Row, Col } from "react-bootstrap";
// import { useState } from "react";
import styles from "./styles.module.css";

import Header from "../../modules/Header/index";
import CityInput from "../../modules/Booking/Input/index";
import CheckBoxMenu from "../../modules/Booking/CheckBoxMenu";
import Calendar from "../../modules/Booking/Calendar";

export default function BookingView() {
  return (
    <Container>
      <Header />
      <Row className={styles.input__container}>
        <Col>
          <h2 className={styles.headline_small}>Звідки:</h2>
          <CityInput />
        </Col>
        <Col>
          <h2 className={styles.headline_small}>Куди:</h2>
          <CityInput />
        </Col>
      </Row>
      <CheckBoxMenu />
      <Row className={styles.calendar_row}>
        <h2 className={styles.headline_small}>Дата виїзду:</h2>
        <Calendar />
      </Row>
    </Container>
  );
}
