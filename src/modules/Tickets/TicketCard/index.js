import { Card, Container, Col, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import main from "../../_shared/main.module.css";

function TicketCard({ from, to, price, trainNumber }) {
  return (
    <div>
      <Card>
        <Container style={{ padding: "15px 15px 20px 15px" }}>
          <Row xs={3}>
            <Col>
              <Card.Text className={main.muted_text}> 14Г. 56ХВ. </Card.Text>
              <Card.Text className={main.plain_text_super_bold}>
                {trainNumber} Бахмут-Львів
              </Card.Text>
            </Col>
          </Row>
          <Row xs={3}>
            <Col>
              <Card.Text
                className={main.plain_text_bold}
                style={{ color: "#828282" }}
              >
                {from}
              </Card.Text>
              <Card.Text
                className={main.plain_text_bold}
                style={{ color: "#828282" }}
              >
                {to}
              </Card.Text>
              <Card.Text
                className={main.muted_text}
                style={{ color: "#828282" }}
              >
                Люкс Вільних місць: 14
              </Card.Text>
              <Button
                variant="primary"
                className={main.button}
                style={{ backgroundColor: "#00FFFF" }}
                size="lg"
                block
              >
                {price}
              </Button>
            </Col>
            <Col xs={8}>
              <Card.Text
                className={main.plain_text_bold}
                style={{ color: "#828282" }}
              >
                Пн, 24.02 13:34
              </Card.Text>
              <Card.Text
                className={main.plain_text_bold}
                style={{ color: "#828282" }}
              >
                Вт, 24.02 04:30
              </Card.Text>
              <Card.Text
                className={main.muted_text}
                style={{ color: "#828282" }}
              >
                Купе Вільних місць: 36
              </Card.Text>
              <Button
                variant="primary"
                className={main.button}
                style={{ backgroundColor: "#00FFFF" }}
                size="lg"
                block
              >
                {price}
              </Button>
            </Col>
            <Col xs={8}>
              <Link to="/order">
                <Button
                  variant="primary"
                  className={main.button}
                  size="lg"
                  block
                >
                  {price} | Плацкарт Вільних місць: 23
                </Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </Card>
    </div>
  );
}

TicketCard.propTypes = {
  trainNumber: PropTypes.string.isRequired,
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default TicketCard;
