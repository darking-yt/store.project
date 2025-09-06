import { Link } from "react-router";

import { TbListDetails } from "react-icons/tb";
import { productQuantity, shortenText } from "../helper/helper";

import styles from "./Card.module.css";
import { CiShop } from "react-icons/ci";
import { useCart } from "../context/CartContext";
import { BsTrash3 } from "react-icons/bs";

function Card({ data }) {
  const { id, image, title, price } = data;

  const [state, dispatch] = useCart();

  const quantity = productQuantity(state, id);

  const clickHandler = (type) => {
    dispatch({ type, payload: data });
  };

  return (
    <div className={styles.card}>
      <div>
        <img src={image} alt={title} />
        <h3>{shortenText(title)}</h3>
        <p>{price} $</p>
      </div>
      <div className={styles.actions}>
        <div>
          <Link to={`/products/${id}`}>
            <TbListDetails />
          </Link>
        </div>
        <div>
          {quantity === 1 && (
            <button onClick={() => clickHandler("REMOVE_ITEM")}>
              <BsTrash3 />
            </button>
          )}
          {quantity > 1 && (
            <button onClick={() => clickHandler("DEACRESE")}>-</button>
          )}
          {!!quantity && <span>{quantity}</span>}

          {quantity === 0 ? (
            <button onClick={() => clickHandler("ADD_ITEM")}>
              <CiShop />
            </button>
          ) : (
            <button onClick={() => clickHandler("INCREASE")}>+</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
