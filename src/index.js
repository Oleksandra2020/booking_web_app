import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

// import Header from "./modules/Header/index";
// import BookingView from "./views/BookingView";
// import Menu from "./modules/Menu/index";
// import PostBookingView from "./views/PostBookingView";
import BasketView from "./views/BasketView";

ReactDOM.render(
  // <BookingView />,
  // <PostBookingView />,
  <BasketView />,
  // eslint-disable-next-line no-undef
  document.getElementById("root")
);
