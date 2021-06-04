// import React, { useState } from "react";
import { useSelector } from "react-redux";
import TicketCard from "../TicketCard/index";

const Content = () => {
  const selectedTickets = useSelector((state) => state.selectedTickets);

  return (
    <>
      <div>
        {selectedTickets.map((item) => (
          <TicketCard
            trainNumber={item.trainNumber}
            from="Київ"
            to="Львів"
            price="180.87"
          />
        ))}
      </div>
    </>
  );
};

export default Content;
