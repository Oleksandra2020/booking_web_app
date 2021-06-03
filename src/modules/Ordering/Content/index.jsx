// import React, { useState } from "react";
import { useSelector } from "react-redux";
import OrderingCard from "../OrderingCard/index";

/* {
      trainId: "144П",
      trainDest: "Бахмут-Львів",
      departureTime: "Пн, 24.02, 13:34",
      carriage: 3,
      seat: 41,
      fullName: "Іванов Іван",
      price: 180.87
    },
    {
      trainId: "144П",
      trainDest: "Бахмут-Львів",
      departureTime: "Пн, 24.02, 13:34",
      carriage: 3,
      seat: 42,
      fullName: "Іванова Іванна",
      price: 180.87
      },
*/

const Content = () => {
  const selectedTickets = useSelector((state) => state.selectedTickets);

  return (
    <ul style={{ margin: "40px 0 0 0", padding: "0", listStyle: "none" }}>
      {selectedTickets &&
        selectedTickets.map((ticket, index) => (
          <li
            key={`OrderingCard-${selectedTickets.trainId}-${ticket.carriage}-${ticket.seat}`}
          >
            <OrderingCard
              trainNumber={selectedTickets.trainId}
              place={ticket.place}
              price={ticket.price}
              ticketId={index}
            />
          </li>
        ))}
    </ul>
  );
};

export default Content;
