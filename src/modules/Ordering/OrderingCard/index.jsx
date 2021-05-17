import { Card, Container, Col, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import styles from "./styles.module.css";
import Switch from "../../Switch/index";
import NameInput from "../NameInput/index";
import SurnameInput from "../SurnameInput/index";

function OrderingCard({ trainNumber, place, price }) {
  return (
    <div>
      <Card className="card border-light bg-light mb-3">
        <Container>
          <Row>
            <Col>
              <Card.Title>142П Бахмут-Львів</Card.Title>
              <Card.Text class="text-muted" style={{ margin: "2px" }}>
                Київ-Пасажирський Пн, 24.02 13:34
              </Card.Text>
              <Card.Text class="text-muted">Львів Вт, 24.02 04:30</Card.Text>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card.Text>Вагон: {trainNumber}</Card.Text>
            </Col>
            <Col>
              <Card.Text>Місце: {place}</Card.Text>
            </Col>
          </Row>
          <Row>
            <Card.Text class="text-muted">Плацкарт</Card.Text>
          </Row>
          <Row>
            <div className={styles.checkBox_elem}>
              <Col class="md-6 col-md-offset-2">
                <Switch />
                <span className={styles.checkBox__text}>Без напою</span>
              </Col>
              <Col class="md-6 col-md-offset-2">
                <Switch />
                <span className={styles.checkBox__text}>1 чай</span>
              </Col>
              <Col class="md-6 col-md-offset-2">
                <Switch />
                <span className={styles.checkBox__text}>2 чая</span>
              </Col>
            </div>
          </Row>
          <Row>
            <Col class="md-6 col-md-offset-2">
              <Switch />
              <span className={styles.checkBox__text}>Постільна білизна</span>
            </Col>
          </Row>
          <Row>
            <SurnameInput />
          </Row>
          <Row>
            <NameInput />
          </Row>
          <Row>
            <Col class="md-6 col-md-offset-2">
              <Switch />
              <span className={styles.checkBox__text}>Без пільг</span>
              <Switch />
              <span className={styles.checkBox__text}>Дитячий</span>
            </Col>
          </Row>
          <Row>
            <Col class="md-6 col-md-offset-2">
              <Switch />
              <span className={styles.checkBox__text}>Пільговий</span>
              <Switch />
              <span className={styles.checkBox__text}>Студентський</span>
            </Col>
          </Row>
          <Row>
            <h1 className={styles.summ}>Ціна: {price}</h1>
          </Row>
        </Container>
      </Card>
    </div>
  );
}

OrderingCard.propTypes = {
  trainNumber: PropTypes.string.isRequired,
  place: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default OrderingCard;
