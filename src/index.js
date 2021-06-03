import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
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
const initialSelectedTickets = [
  {
    trainId: "144П",
    trainDest: "Бахмут-Львів",
    departureTime: "Пн, 24.02, 13:34",
    carriage: 3,
    seat: 42,
    fullName: "Іванова Іванна",
    price: 180.87,
  },
];
const selectedTicketsReducer = (
  selectedTickets = initialSelectedTickets,
  action
) => {
  switch (action.type) {
    case "selectedTickets/addTicket":
      return [...selectedTickets, action.payload];
    case "selectedTickets/removeTicket":
      return selectedTickets.filter(
        (ticket, index) => index !== action.payload.id
      );
    case "selectedTickets/setName":
      return selectedTickets.map((ticket, index) => {
        if (index === action.payload.id)
          return {
            ...ticket,
            fullName: action.payload.fullName,
          };
        return ticket;
      });
    default:
      return selectedTickets;
  }
};

/* {
    trainId: "144П",
    trainDest: "Бахмут-Львів",
    departureTime: "Пн, 24.02, 13:34",
    sum: 361.74,
    tickets: [
      {
        carriage: 3,
        seat: 41,
        fullName: "Іванов Іван",
        price: 180.87
      },
      {
        carriage: 3,
        seat: 42,
        fullName: "Іванова Іванна",
        price: 180.87
      },
    ],
  }, */

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
    cart: cartReducer,
    allTickets: allTicketsReducer,
    search: searchReducer,
  })
);

const App = () => (
  <BrowserRouter>
    <Route component={BookingView} exact path="/" />
    <Route component={OrderingView} exact path="/order" />
    <Route component={BasketView} exact path="/basket" />
    <Route component={PostBookingView} exact path="/postbooking" />
  </BrowserRouter>
);

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );
};
render();

store.subscribe(render);
