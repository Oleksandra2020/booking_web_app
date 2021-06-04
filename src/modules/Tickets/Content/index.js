// import React, { useState } from "react";
// import { useSelector } from "react-redux";
import TicketCard from "../TicketCard/index";

const Content = () => {
  async function getTickets() {
    const tickets = await fetch("127.0.0.1:5001/load_all_data")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
    return tickets;
  }

  const tickets = getTickets();
  return (
    <>
      <div>
        {tickets.map((item) => (
          <TicketCard
            trainNumber={item.trainId}
            trainName={item.Name}
            price="180.87"
          />
        ))}
      </div>
    </>
  );
};

export default Content;
