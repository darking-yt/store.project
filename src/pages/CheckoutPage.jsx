import BasketCard from "../components/BasketCard";
import BasketSidebar from "../components/BasketSidebar";
import { useCart } from "../context/CartContext";

import styles from "./CheckoutPages.module.css";

import image from "../images/Screenshot 2025-09-04 234559.png";

function CheckoutPage() {
  const [state, dispatch] = useCart();

  const clickHandler = (type, payload) => {
    dispatch({ type, payload });
  };

  if (!state.itemsCounter) {
    return (
      <div className={styles.container}>
        <img src={image} alt="empty" />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div>
        <BasketSidebar state={state} clickHandler={clickHandler} />
      </div>
      <div className={styles.products}>
        {state.selectedItems.map((product) => (
          <BasketCard
            key={product.id}
            data={product}
            clickHandler={clickHandler}
          />
        ))}
      </div>
    </div>
  );
}

export default CheckoutPage;
