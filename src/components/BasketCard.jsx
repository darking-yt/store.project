import { BsTrash3 } from "react-icons/bs";
import { shortenText } from "../helper/helper";

import styles from "./BasketCard.module.css";

function BasketCard({ data, clickHandler }) {
  const { image, title, quantity } = data;
  return (
    <div className={styles.card}>
      <img src={image} alt={title} />
      <p>{shortenText(title)}</p>
      <div className={styles.actions}>
        {quantity === 1 && (
          <button onClick={() => clickHandler("REMOVE_ITEM", data)}>
            <BsTrash3 />
          </button>
        )}
        {quantity > 1 && (
          <button onClick={() => clickHandler("DEACRESE", data)}>-</button>
        )}
        <span>{quantity}</span>
        <button onClick={() => clickHandler("INCREASE", data)}>+</button>
      </div>
    </div>
  );
}

export default BasketCard;
