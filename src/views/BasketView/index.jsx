import { Container, Row, Col } from "react-bootstrap";
import Footer from "../../modules/Footer";
import Header from "../../modules/Header/index";
import Basket from "../../modules/Basket/index";
import styles from "./styles.module.css";

const BasketView = () => (
  <Container
    style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
  >
    <Header />
    <Row className={styles.input__container}>
      <Col>
        <h2 className={styles.headline}>Корзина</h2>
        <Basket />
        <Footer />
      </Col>
    </Row>
  </Container>
);

export default BasketView;
