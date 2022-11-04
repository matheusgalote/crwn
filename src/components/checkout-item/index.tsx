import "./index.styles.scss";
import {
  faAngleLeft,
  faAngleRight,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

const CheckoutItem = ({ item }: any) => {
  const { addItemToCart, removeItemToCart, deleteItemToCart } =
    useContext(CartContext);

  const addItem = () => {
    addItemToCart(item);
  };

  const removeItem = () => {
    removeItemToCart(item);
  };

  const deleteItem = () => {
    deleteItemToCart(item);
  };

  return (
    <div className="item-container">
      <img className="item-image" src={item.imageUrl} alt={`${item.name}`} />
      <span className="item-description">{item.name}</span>
      <div>
        <FontAwesomeIcon
          className="angle"
          icon={faAngleLeft}
          onClick={removeItem}
        />
        <span className="item-quantity">{item.quantity}x</span>
        <FontAwesomeIcon
          className="angle"
          icon={faAngleRight}
          onClick={addItem}
        />
      </div>
      <span className="item-price">{item.price.toFixed(2)}</span>
      <button className="item-delete">
        <FontAwesomeIcon icon={faTrash} onClick={deleteItem} />
      </button>
    </div>
  );
};

export default CheckoutItem;
