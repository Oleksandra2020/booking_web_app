/* eslint-disable prettier/prettier */
import { Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "../styles.module.css";
import main from "../../_shared/main.module.css";

const BasketFooter = () => (
  <div>
    <Container style={{ padding: "0" }}>
      <Row>
        <h1 className={styles.summ}>
          Сума: 361.74
        </h1>
      </Row>
      <Row>
        <h3 className={styles.note}>
          Зміна прізвища та імені після здійснення оплати проїзних документів
          буде неможливою
        </h3>
      </Row>
      <Link to="/postbooking">
        <Button size="lg" className={main.button} block>
          Оформити квитки
        </Button>
      </Link>
    </Container>
  </div>
);

export default BasketFooter;
