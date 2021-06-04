// import React, { useState } from "react";
import { useSelector } from "react-redux";
import TicketCard from "../TicketCard/index";

const Content = () => {
  //   async function getTickets() {
  //     const tickets = await fetch("127.0.0.1:5001/load_all_data")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log(data);
  //       });
  //     return tickets;
  //   }

  // const tickets = getTickets();
  const selectedTickets = useSelector((state) => state.selectedTickets);
  return (
    <>
      <div>
        {selectedTickets.map((item) => (
          <TicketCard
            trainNumber={item.trainNumber}
            trainName={item.trainName}
            price="180.87"
          />
        ))}
      </div>
    </>
  );
};

export default Content;
