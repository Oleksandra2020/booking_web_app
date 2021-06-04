// import React, { useState } from "react";
import { useSelector } from "react-redux";
import OrderingCard from "../OrderingCard/index";

const Content = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <>
      <div>
        {cart.map((item) => (
          <OrderingCard
            trainNumber={item.trainNumber}
            place={item.seat}
            name={item.fullName}
          />
        ))}
      </div>
    </>
  );
};

export default Content;
