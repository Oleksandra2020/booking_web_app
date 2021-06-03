import { Button, Container, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import main from "../../modules/_shared/main.module.css";
import Header from "../../modules/Header/index";
import Content from "../../modules/Ordering/Content";
// import PostOrderingFooter from "../../modules/Footers/PostOrderingFooter";

const OrderingView = () => {
  const dispatch = useDispatch();
  const selectedTickets = useSelector((state) => state.selectedTickets);

  let sum = 0;
  selectedTickets.forEach((ticket) => {
    sum += ticket.price;
  });

  const handleSubmit = () => {
    selectedTickets.forEach((ticket) => {
      dispatch({ type: "cart/addTicket", payload: ticket });
    });
  };

  return (
    <Container>
      <Header />
      <Row className={styles.input__container}>
        <Col>
          <h2 className={main.header_1}>Київ - Львів</h2>
          <h3 className={main.header_2}>Квитки на лютий, 24</h3>
          <Content />
        </Col>
      </Row>
      <Row>
        <h1 className={styles.summ}>Сума: {sum}</h1>
      </Row>
      <Row>
        <p className={main.plain_text_bold} style={{ color: "#828282" }}>
          Зміна прізвища та імені після здійснення оплати проїзних документів
          буде неможливою
        </p>
      </Row>
      <Row>
        <Link to="/basket">
          <Button
            variant="primary"
            className={main.button}
            size="lg"
            onClick={handleSubmit}
            block
          >
            Оформити квитки
          </Button>
        </Link>
      </Row>
    </Container>
  );
};

export default OrderingView;
