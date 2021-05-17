import { Container, Row, Col } from "react-bootstrap";
import styles from "./styles.module.css";
import Header from "../../modules/Header/index";
import PostBooking from "../../modules/PostBooking/index";
import main from "../../modules/_shared/main.module.css";

const PostBookingView = () => (
  <Container>
    <Header />
    <Row className={styles.input__container}>
      <Col>
        <h2 className={main.header_1}>Вітаю!</h2>
        <h3 className={main.header_2}>Квитки Київ - Львів</h3>
        <Row style={{ margin: "0 0 50px 0" }}>
          <a href="/" className={styles.hyperlink}>
            у твоєму кабінеті
          </a>
        </Row>
        <PostBooking />
      </Col>
    </Row>
  </Container>
);

export default PostBookingView;
