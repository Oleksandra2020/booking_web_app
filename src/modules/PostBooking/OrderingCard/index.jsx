import { Card, Container, Col, Row } from "react-bootstrap";
import PropTypes from "prop-types";

function OrderingCard({ name, place, trainNumber }) {
  return (
    <div>
      <Card>
        <Container>
          <Row>
            <Col>
              <Card.Img
                src="qr.png"
                style={{ width: "100px", height: "100px" }}
              />
            </Col>
            <Col>
              <Card.Title>{name}</Card.Title>
              <Card.Text style={{ fontSize: "12px" }}>
                142П Бахмут-Львів
              </Card.Text>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card.Text class="text-muted" style={{ fontSize: "12px" }}>
                Пн, 24.02 13:34
              </Card.Text>
            </Col>
            <Col>
              <Card.Text class="text-muted" style={{ fontSize: "12px" }}>
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
