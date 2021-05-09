import { Container, Row, Col } from "react-bootstrap";
import {
  // Drawer,
  List,
  ListItem,
  // ListItemIcon,
  // ListItemText,
} from "@material-ui/core";
import {
  BrowserRouter as RouterLink,
  // Link,
} from "react-router-dom";
import Button from "@material-ui/core/Button";
import Header from "../../modules/Header/index";
import Basket from "../../modules/Basket/index";
import styles from "./styles.module.css";

const BasketView = () => (
  <Container>
    <Header />
    <Row className={styles.input__container}>
      <Col>
        <h2 className={styles.headline}>Корзина</h2>
        <Basket />
        <h1 className={styles.summ}>Сума: 361.74</h1>
        <h3 className={styles.note}>
          Зміна прізвища та імені після здійснення оплати проїзних документів
          буде неможливою
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
      </Col>
    </Row>
  </Container>
);

export default BasketView;
