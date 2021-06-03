import MenuIcon from "@material-ui/icons/Menu";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import logo from "./logo.svg";

const Header = () => {
  const cartAmount = useSelector((state) => state.cart.length);

  return (
    <div className={styles.header}>
      <MenuIcon className={styles.burger} />
      <Link to="/">
        <img src={logo} className="logo" alt="logo" />
      </Link>
      <Link to="/basket">
        <ShoppingCartIcon className={styles.cart} />
        {cartAmount > 0 && (
          <div className={styles.cart__amount}>{cartAmount}</div>
        )}
      </Link>
    </div>
  );
};

export default Header;
