import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { createStore, combineReducers } from "redux";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

// import Menu from "./modules/Menu/index";
import BookingView from "./views/BookingView";
import PostBookingView from "./views/PostBookingView";
import BasketView from "./views/BasketView";
import OrderingView from "./views/OrderingView";

// const initialStore = {
//   selectedTickets: [],
//   cart: [],
//   allTickets: [],
//   search: {
//     where: "",
//     from: "",
//     date: Date.now(),
//   },
// };

const initialSelectedTickets = [];
const selectedTicketsReducer = (
  selectedTickets = initialSelectedTickets,
  action
) => {
  switch (action.type) {
    case "selectedTickets/addTicket":
      return [...selectedTickets, action.payload];
    default:
      return selectedTickets;
  }
};

const initialCart = [];
const cartReducer = (cart = initialCart, action) => {
  switch (action.type) {
    case "cart/addTicket":
      return [...cart, action.payload];
    case "cart/removeTicket":
      return cart.filter((ticket) => ticket.id !== action.payload.id);
    default:
      return cart;
  }
};

const initialAllTickets = [];
const allTicketsReducer = (allTickets = initialAllTickets, action) => {
  switch (action.type) {
    case "allTickets/loadData":
      return [];
    default:
      return allTickets;
  }
};

const initialSearch = "";
const searchReducer = (search = initialSearch, action) => {
  switch (action.type) {
    default:
      return search;
  }
};

const store = createStore(
  combineReducers({
    selectedTickets: selectedTicketsReducer,
    ticketsInCart: cartReducer,
    allTickets: allTicketsReducer,
    search: searchReducer,
  })
);

const App = () => (
  <BrowserRouter>
    <Route
      exact
      path="/"
      render={() => (
        <BookingView state={store.getState()} dispatch={store.dispatch} />
      )}
    />
    <Route component={OrderingView} exact path="/order" state={store} />
    <Route component={BasketView} path="/basket" state={store} />
    <Route component={PostBookingView} path="/postbooking" state={store} />
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById("root"));
