import { Container, Row, Col } from "react-bootstrap";
import styles from "./styles.module.css";
import Header from "../../modules/Header/index";
import Content from "../../modules/Tickets/Content/index";
import main from "../../modules/_shared/main.module.css";

const PostBookingView = () => (
  <Container>
    <Header />
    <Row className={styles.input__container}>
      <Col>
        <h2 className={main.header_1}>Київ - Львів</h2>
        <h3 className={main.header_2}>Квитки на Лютий, 24</h3>
        <Row style={{ margin: "0 0 50px 0" }}>
          <a href="/" className={styles.hyperlink}>
            від дешевих
          </a>
        </Row>
        <Content />
      </Col>
    </Row>
  </Container>
);

export default PostBookingView;
