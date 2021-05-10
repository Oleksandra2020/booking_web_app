import { Card, Typography, CardContent, Grid } from "@material-ui/core";
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

function Basket() {
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={0} alignItems="center" direction="column">
        <Card className={classes.root}>
          <CardContent>
            <Typography variant="body3" component="h4">
              142П
            </Typography>
            <Typography variant="body3" component="h4">
              142П Бахмут-Львів
            </Typography>
            <Typography variant="body2" component="p" className={classes.text}>
              Пн, 24.02 13:34
            </Typography>
          </CardContent>
        </Card>
        <Card className={classes.root}>
          <CardContent>
            <Typography variant="body3" component="h4">
              Іванов Іван
            </Typography>
            <Typography variant="body2" component="p" className={classes.text}>
              Вагон: 2 Місце: 41
            </Typography>
          </CardContent>
        </Card>
        <Card className={classes.root}>
          <CardContent>
            <Typography variant="body3" component="h4">
              Іванова Іванна
            </Typography>
            <Typography variant="body2" component="p" className={classes.text}>
              Вагон: 2 Місце: 42
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}

export default Basket;
