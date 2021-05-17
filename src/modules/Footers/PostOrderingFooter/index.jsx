import { Grid, List, ListItem } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import styles from "../styles.module.css";

const PostOrderingFooter = () => (
  <div>
    <Grid container spacing={0} alignItems="center" direction="column">
      <h1 className={styles.summ}>Сума: 361.74</h1>
      <h3 className={styles.note}>
        Зміна прізвища та імені після здійснення оплати проїзних документів буде
        неможливою
      </h3>
      <List>
        <ListItem
          button
          style={{ backgroundColor: "rgb(61, 2, 255)", color: "white" }}
        >
          <Link to="/basket">
            <Button size="small">Оформити квитки</Button>
          </Link>
        </ListItem>
      </List>
    </Grid>
  </div>
);

export default PostOrderingFooter;
