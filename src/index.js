import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { createStore } from "redux";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

// import Menu from "./modules/Menu/index";
import BookingView from "./views/BookingView";
import PostBookingView from "./views/PostBookingView";
import BasketView from "./views/BasketView";
import OrderingView from "./views/OrderingView";

const initialStore = {
  selectedTickets: [],
  ticketsInCart: [],
  allTickets: [],
  search: {
    where: "",
    from: "",
    date: Date.now(),
  },
};

const storeReducer = (state = initialStore, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const store = createStore(storeReducer);

store.subscribe(() => console.log(store.getState()));

const App = () => (
  <BrowserRouter>
    <Route exact path="/" render={() => <BookingView state={store} />} />
    <Route component={OrderingView} exact path="/order" state={store} />
    <Route component={BasketView} path="/basket" state={store} />
    <Route component={PostBookingView} path="/postbooking" state={store} />
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById("root"));
