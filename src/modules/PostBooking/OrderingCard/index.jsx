import {
  Card,
  Typography,
  CardContent,
  CardMedia,
  Grid,
} from "@material-ui/core";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

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
          <CardMedia
            className={classes.media}
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png"
            title="QR code"
          />
          <CardContent>
            <Typography variant="h5" component="h3">
              {name}
            </Typography>
            <Typography variant="body3">142П Бахмут-Львів</Typography>
            <Typography variant="body2" component="p" className={classes.text}>
              Пн, 24.02 13:34 Вагон: {trainNumber} Місце: {place}
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
