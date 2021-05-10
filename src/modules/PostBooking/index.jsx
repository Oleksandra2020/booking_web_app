import { Card, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Content from "./Content/index";

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
      <Grid container spacing={0} alignItems="center" direction="column">
        <Card className={classes.root}>
          <Content />
        </Card>
      </Grid>
    </div>
  );
}

export default PostBooking;
