import { Container, Row, Col } from "react-bootstrap";
import BasketFooter from "../../modules/Footers/BasketFooter";
import Header from "../../modules/Header/index";
import Basket from "../../modules/Basket/index";
import styles from "./styles.module.css";
import main from "../../modules/_shared/main.module.css";

const BasketView = () => (
  <Container>
    <Header />
    <Row className={styles.input__container}>
      <Col>
        <h2 className={main.header_1}>Корзина</h2>
        <Basket />
        <BasketFooter />
      </Col>
    </Row>
  </Container>
);

export default BasketView;
