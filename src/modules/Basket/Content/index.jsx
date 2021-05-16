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
        <Card className="card border-light bg-light mb-3">
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
        {/* <Grid container spacing={0} alignItems="center" direction="column"> */}

        {/* </Grid> */}
      </div>
    </>
  );
};

export default Content;
