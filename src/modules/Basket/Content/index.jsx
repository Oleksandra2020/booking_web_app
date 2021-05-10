import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import OrderingCard from "../OrderingCard/index";

const initState = [
  {
    trainNumber: "3",
    place: "41",
    name: "Іванов Іван",
  },
  {
    trainNumber: "3",
    place: "42",
    name: "Іванова Іванна",
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
              name={item.name}
            />
          ))}
        </Grid>
      </div>
    </>
  );
};

export default Content;
