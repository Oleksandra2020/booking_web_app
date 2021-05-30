import { Container, Row, Col } from "react-bootstrap";
import styles from "./styles.module.css";
import main from "../../modules/_shared/main.module.css";
import Header from "../../modules/Header/index";
import Content from "../../modules/Ordering/Content";
import PostOrderingFooter from "../../modules/Footers/PostOrderingFooter";

const OrderingView = () => (
  <Container>
    <Header />
    <Row className={styles.input__container}>
      <Col>
        <h2 className={main.header_1}>Київ - Львів</h2>
        <h3 className={main.header_2}>Квитки на лютий, 24</h3>
        <Content />
        <PostOrderingFooter />
      </Col>
    </Row>
  </Container>
);

export default OrderingView;
