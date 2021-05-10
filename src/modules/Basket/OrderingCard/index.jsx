import {
  Card,
  Typography,
  CardContent,
  // CardMedia,
  Grid,
} from "@material-ui/core";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
// import styles from "./styles.module.css";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  text: {
    color: "gray",
  },
  media: {
    paddingTop: "80%", // 16:9
  },
});

function OrderingCard({ name, place, trainNumber }) {
  const classes = useStyles();

  return (
    <div>
      <Grid>
        <Card className={classes.root}>
          <CardContent>
            <Typography variant="body3" component="h4">
              {name}
            </Typography>
            <Typography variant="body2" component="p" className={classes.text}>
              Вагон: {trainNumber} Місце: {place}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}

OrderingCard.propTypes = {
  trainNumber: PropTypes.string.isRequired,
  place: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default OrderingCard;
