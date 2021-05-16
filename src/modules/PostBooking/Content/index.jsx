import React, { useState } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import OrderingCard from "../OrderingCard/index";

const initState = [
  {
    trainNumber: "3",
    place: "41",
    name: "Іванов Іван",
  },
  {
    trainNumber: "3",
    place: "42",
    name: "Іванова Іванна",
  },
];

const Content = () => {
  const [items] = useState(initState);

  return (
    <>
      <div>
        <Card>
          <Container>
            <Row>
              <Col>
                {items.map((item) => (
                  <OrderingCard
                    trainNumber={item.trainNumber}
                    place={item.place}
                    name={item.name}
                  />
                ))}
              </Col>
            </Row>
          </Container>
        </Card>
      </div>
    </>
  );
};

export default Content;
