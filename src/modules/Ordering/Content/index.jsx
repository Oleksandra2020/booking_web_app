import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import OrderingCard from "../OrderingCard/index";

const initState = [
  {
    trainNumber: "3",
    place: "41",
    price: "180.87",
  },
  {
    trainNumber: "3",
    place: "42",
    price: "180.87",
  },
];

const Content = () => {
  const [items] = useState(initState);

  return (
    <>
      <div>
        <Grid container spacing={0} alignItems="center" direction="column">
          {items.map((item) => (
            <OrderingCard
              trainNumber={item.trainNumber}
              place={item.place}
              price={item.price}
            />
          ))}
        </Grid>
      </div>
    </>
  );
};

export default Content;
