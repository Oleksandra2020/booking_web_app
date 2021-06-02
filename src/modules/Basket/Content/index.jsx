/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";
import OrderingCard from "../OrderingCard/index";

const Content = ({ tickets, train }) => {
  const ticketsCards = tickets.map((ticket) => (
    <li key={`${ticket.carriage}-${ticket.seat}-${train}`}>
      <OrderingCard
        trainNumber={ticket.carriage}
        place={ticket.seat}
        name={ticket.fullName}
      />
    </li>
  ));

  return <ul style={{ margin: "0", padding: "0" }}>{ticketsCards}</ul>;
};

Content.propTypes = {
  tickets: PropTypes.arrayOf(PropTypes.object).isRequired,
  train: PropTypes.string.isRequired,
};

export default Content;
