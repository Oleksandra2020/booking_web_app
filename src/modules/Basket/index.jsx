import { Card, Container, Row, Col } from "react-bootstrap";
import main from "../_shared/main.module.css";
import Content from "./Content";

// const cardPaddings = {
//   margin: "50px 0 0 0",
//   padding: ""
// }

function Basket() {
  return (
    <div>
      <Card style={{ margin: "50px 0 0 0", padding: "30px 0 0 0" }}>
        <Container>
          <Row>
            <Col>
              <Card.Title
                className={main.header_2_bold_left}
                style={{ margin: "0 0 20px 0" }}
              >
                142П Бахмут-Львів
              </Card.Title>
              <Card.Text
                className={main.plain_text_bold}
                style={{ margin: "0 0 20px 0", color: "#828282" }}
              >
                Пн, 24.02 13:34
              </Card.Text>
            </Col>
          </Row>
        </Container>
        <Content />
      </Card>
    </div>
  );
}

export default Basket;
