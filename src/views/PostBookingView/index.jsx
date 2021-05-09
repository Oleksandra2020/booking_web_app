import { Container, Row, Col } from "react-bootstrap";
import styles from "./styles.module.css";
import Header from "../../modules/Header/index";
import PostBooking from "../../modules/PostBooking/index";

const PostBookingView = () => (
  <Container>
    <Header />
    <Row className={styles.input__container}>
      <Col>
        <h2 className={styles.headline_small}>Вітаю!</h2>
        <h3 className={styles.headline_big}>Квитки Київ - Львів</h3>
        <div className={styles.hyperlink}>
          <a href="/">у твоєму кабінеті</a>
        </div>
        <PostBooking />
      </Col>
    </Row>
  </Container>
);

export default PostBookingView;
