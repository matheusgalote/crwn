import "./index.styles.scss";
import {
  faAngleLeft,
  faAngleRight,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import { addItemToCart, deleteItemToCart, removeItemToCart} from "../../store/cart/cart.action";

const CheckoutItem = ({ item } ) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const addingItemToCart = () => {
    dispatch(addItemToCart(cartItems, item));
  };

  const removeItem = () => {
    dispatch(removeItemToCart(cartItems, item));
  };

  const deleteItem = () => {
    dispatch(deleteItemToCart(cartItems, item));
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
          onClick={addingItemToCart}
        />
      </div>
      <span className="item-price">{item.price}</span>
      <button className="item-delete">
        <FontAwesomeIcon icon={faTrash} onClick={deleteItem} />
      </button>
    </div>
  );
};

export default CheckoutItem;
