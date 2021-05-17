import { Card, Container, Col, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import main from "../../_shared/main.module.css";

function OrderingCard({ name, place, trainNumber }) {
  return (
    <div>
      <Card>
        <Container style={{ padding: "15px 15px 20px 15px" }}>
          <Row xs={3}>
            <Col>
              <Card.Img
                src="qr.png"
                style={{ width: "100px", height: "100px" }}
              />
            </Col>
            <Col xs={8}>
              <Card.Title className={main.plain_text_super_bold}>
                {name}
              </Card.Title>
              <Card.Text className={main.plain_text_super_bold}>
                142П Бахмут-Львів
              </Card.Text>
            </Col>
          </Row>
          <Row xs={3}>
            <Col>
              <Card.Text
                className={main.plain_text_bold}
                style={{ color: "#828282" }}
              >
                Пн, 24.02 13:34
              </Card.Text>
            </Col>
            <Col xs={8}>
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
    </div>
  );
}

OrderingCard.propTypes = {
  trainNumber: PropTypes.string.isRequired,
  place: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default OrderingCard;
