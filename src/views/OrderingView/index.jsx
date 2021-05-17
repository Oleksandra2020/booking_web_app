import { Container, Row, Col } from "react-bootstrap";
import styles from "./styles.module.css";
import Header from "../../modules/Header/index";
import Content from "../../modules/Ordering/Content";
import PostOrderingFooter from "../../modules/Footers/PostOrderingFooter";

const OrderingView = () => (
  <Container>
    <Header />
    <Row className={styles.input__container}>
      <Col>
        <h2 className={styles.headline_small}>Квитки Київ - Львів</h2>
        <h3 className={styles.headline_big}>Квитки на лютий, 24</h3>
        <Content />
        <PostOrderingFooter />
      </Col>
    </Row>
  </Container>
);

export default OrderingView;
