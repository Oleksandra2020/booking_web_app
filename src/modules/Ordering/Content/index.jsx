import React, { useState } from "react";
import { Container } from "react-bootstrap";
import OrderingCard from "../OrderingCard/index";

const initState = [
  {
    trainNumber: "3",
    place: "41",
    price: "180.87",
  },
  {
    trainNumber: "3",
    place: "42",
    price: "180.87",
  },
];

const Content = () => {
  const [items] = useState(initState);

  return (
    <>
      <Container>
        {items.map((item) => (
          <OrderingCard
            trainNumber={item.trainNumber}
            place={item.place}
            price={item.price}
          />
        ))}
      </Container>
    </>
  );
};

export default Content;
