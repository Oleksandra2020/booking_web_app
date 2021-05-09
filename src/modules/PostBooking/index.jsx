import {
  Card,
  Typography,
  CardContent,
  // CardMedia,
  Grid,
} from "@material-ui/core";
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

function PostBooking() {
  const classes = useStyles();

  return (
    <div>
      <Grid>
        <Card className={classes.root}>
          {/* <CardMedia
            className={classes.media}
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png"
            title="QR code"
          /> */}
          <CardContent>
            <Typography variant="h5" component="h3">
              Іванов Іван
            </Typography>
            <Typography variant="body3">142П Бахмут-Львів</Typography>
            <Typography variant="body2" component="p" className={classes.text}>
              Пн, 24.02 13:34 Вагон: 2 Місце: 41
            </Typography>
          </CardContent>
        </Card>
        <Card className={classes.root}>
          {/* <CardMedia
            className={classes.media}
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png"
            title="QR code"
          /> */}
          <CardContent>
            <Typography variant="h5" component="h3">
              Іванова Іванна
            </Typography>
            <Typography variant="body3">142П Бахмут-Львів</Typography>
            <Typography variant="body2" component="p" className={classes.text}>
              Пн, 24.02 13:34 Вагон: 2 Місце: 42
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}

export default PostBooking;
