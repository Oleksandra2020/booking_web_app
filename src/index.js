import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

// import Header from "./modules/Header/index";
import BookingView from "./views/BookingView";
// import Menu from "./modules/Menu/index";

ReactDOM.render(
  <BookingView />,
  // eslint-disable-next-line no-undef
  document.getElementById("root")
);
