import { Card, Container, Col, Row } from "react-bootstrap";
import PropTypes from "prop-types";

function OrderingCard({ name, place, trainNumber }) {
  return (
    <div>
      <Card>
        <Container>
          <Row>
            <Col>
              <Card.Title>{name}</Card.Title>
              <Card.Text class="text-muted">
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
