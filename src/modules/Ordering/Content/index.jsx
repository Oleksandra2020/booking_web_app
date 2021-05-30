import React, { useState } from "react";
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
    <div style={{ margin: "40px 0 0 0" }}>
      {items.map((item) => (
        <OrderingCard
          trainNumber={item.trainNumber}
          place={item.place}
          price={item.price}
        />
      ))}
    </div>
  );
};

export default Content;
