import "./index.styles.scss";
import {
  faAngleLeft,
  faAngleRight,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { cartSelector } from "../../store/cart/cart.selector";
import {
  addItem,
  deleteCartItem,
  removeCartItem,
} from "../../utils/reducer/cartItemsLogic";
import { updateCartItemsReducer } from "../../store/cart/cart.action";

const CheckoutItem = ({ item }: any) => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector(cartSelector);

  const addItemToCart = () => {
    dispatch(updateCartItemsReducer(addItem(cartItems, item)));
  };

  const removeItem = () => {
    dispatch(updateCartItemsReducer(removeCartItem(cartItems, item)));
  };

  const deleteItem = () => {
    dispatch(updateCartItemsReducer(deleteCartItem(cartItems, item)));
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
          onClick={addItemToCart}
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
