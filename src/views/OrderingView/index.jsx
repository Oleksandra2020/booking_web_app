import { Container, Row, Col } from "react-bootstrap";

import styles from "./styles.module.css";
import Header from "../../modules/Header/index";
import Content from "../../modules/Ordering/Content";
import Footer from "../../modules/Footer";

const OrderingView = () => (
  <Container>
    <Header />
    <Row className={styles.input__container}>
      <Col>
        <h2 className={styles.headline_small}>Квитки Київ - Львів</h2>
        <h3 className={styles.headline_big}>Квитки на лютий, 24</h3>
        <Content />
        <Footer />
      </Col>
    </Row>
  </Container>
);

export default OrderingView;
