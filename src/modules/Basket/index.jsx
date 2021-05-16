import { Card, Container, Row, Col } from "react-bootstrap";
import Content from "./Content";

function Basket() {
  return (
    <div>
      <Card className="card border-light bg-light mb-3">
        <Container>
          <Row>
            <Col>
              <Card.Title>142П</Card.Title>
              <Card.Title>142П Бахмут-Львів</Card.Title>
              <Card.Text class="text-muted">Пн, 24.02 13:34</Card.Text>
            </Col>
          </Row>
        </Container>
        <Content />
      </Card>
    </div>
  );
}

export default Basket;
