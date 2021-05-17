import React, { useState } from "react";
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
        {items.map((item) => (
          <OrderingCard
            trainNumber={item.trainNumber}
            place={item.place}
            name={item.name}
          />
        ))}
      </div>
    </>
  );
};

export default Content;
