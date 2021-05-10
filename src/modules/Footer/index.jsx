import { List, ListItem, Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { BrowserRouter as RouterLink } from "react-router-dom";
import styles from "./styles.module.css";

const Footer = () => (
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
          <Button component={RouterLink} to="/postbookings" size="small">
            Оформити квитки
          </Button>
        </ListItem>
      </List>
    </Grid>
  </div>
);

export default Footer;
