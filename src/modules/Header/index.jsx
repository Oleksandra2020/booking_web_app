import MenuIcon from "@material-ui/icons/Menu";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import logo from "./logo.svg";

const Header = () => (
  <div className={styles.header}>
    <MenuIcon className={styles.burger} />
    <Link to="/">
      <img src={logo} className="logo" alt="logo" />
    </Link>
    <Link to="/basket">
      <ShoppingCartIcon className={styles.cart} />
    </Link>
  </div>
);

export default Header;
