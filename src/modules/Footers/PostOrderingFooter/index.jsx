import { Button, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "../styles.module.css";
import main from "../../_shared/main.module.css";

const PostOrderingFooter = () => (
  <div>
    <Container style={{ padding: "0" }}>
      <Row>
        <h1 className={styles.summ}>Сума: 361.74</h1>
      </Row>
      <Row>
        <h3 className={styles.note}>
          Зміна прізвища та імені після здійснення оплати проїзних документів
          буде неможливою
        </h3>
      </Row>
      <Row>
        <Link to="/basket">
          <Button variant="primary" className={main.button} size="lg" block>
            Оформити квитки
          </Button>
        </Link>
      </Row>
    </Container>
  </div>
);

export default PostOrderingFooter;
