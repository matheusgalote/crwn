import "./index.styles.scss";

import { useDispatch } from "react-redux";
import Button from "../../helpers/button";
import { useSelector } from "react-redux";

import { cartSelector } from "../../store/cart/cart.selector";

import { updateCartItemsReducer } from "../../store/cart/cart.action";
import { addItem } from "../../utils/reducer/cartItemsLogic";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;

  const { cartItems } = useSelector(cartSelector);
  const dispatch = useDispatch();

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button
        children="ADD TO"
        buttonType="inverted"
        type=""
        submitHandle={() =>
          dispatch(updateCartItemsReducer(addItem(cartItems, product)))
        }
      />
    </div>
  );
};

export default ProductCard;
