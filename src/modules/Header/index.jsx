import MenuIcon from "@material-ui/icons/Menu";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import styles from "./styles.module.css";
import logo from "./logo.svg";

const Header = () => (
  <div className={styles.header}>
    <MenuIcon className={styles.burger} />
    <img src={logo} className="logo" alt="logo" />
    <ShoppingCartIcon className={styles.cart} />
  </div>
);

export default Header;
