import { Card } from "@material-ui/core";
// import { Container, Row, Col } from "react-bootstrap";
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
    paddingTop: "80%",
  },
});

function PostBooking() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Content />
    </Card>
  );
}

export default PostBooking;
