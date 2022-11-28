import "./index.styles.scss";

import { useDispatch } from "react-redux";
import Button from "../../helpers/button";
import { useSelector } from "react-redux";

import { selectCartItems } from "../../store/cart/cart.selector";

import { addItemToCart } from "../../store/cart/cart.action";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;

  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  console.log(cartItems, 'ÇÇÇÇ');

  function addProductToCart() {
    dispatch(addItemToCart(cartItems, product));
  }

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
        submitHandle={addProductToCart}
      />
    </div>
  );
};

export default ProductCard;
