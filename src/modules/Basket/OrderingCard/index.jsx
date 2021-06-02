import { Card, Container, Col, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import main from "../../_shared/main.module.css";

function OrderingCard({ name, place, trainNumber }) {
  return (
    <Card style={{ padding: "40px 0 30px 0" }}>
      <Container>
        <Row>
          <Col>
            <Card.Title
              className={main.header_2_bold_left}
              style={{ margin: "0 0 20px 0" }}
            >
              {name}
            </Card.Title>
            <Card.Text
              className={main.plain_text_bold}
              style={{ color: "#828282" }}
            >
              Вагон: {trainNumber} Місце: {place}
            </Card.Text>
          </Col>
        </Row>
      </Container>
    </Card>
  );
}

OrderingCard.propTypes = {
  trainNumber: PropTypes.number.isRequired,
  place: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export default OrderingCard;
