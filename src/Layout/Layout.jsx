import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router";

import styles from "./Layout.module.css";
import { useCart } from "../context/CartContext";

function Layout({ children }) {
  const [state] = useCart();
  console.log(state);

  return (
    <>
      <header className={styles.header}>
        <Link to={"/products"}> Shop</Link>
        <div>
          <Link to={"/checkout"}>
            <FaShoppingCart />
            {!!state.itemsCounter && <span>{state.itemsCounter}</span>}
          </Link>
        </div>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>Developed by Mohammad Hosein with ♥️</p>
      </footer>
    </>
  );
}

export default Layout;
