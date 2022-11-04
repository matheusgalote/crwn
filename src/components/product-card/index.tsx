import "./index.styles.scss";

import Button from "../../helpers/button";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

const ProductCard = ({ product }: any) => {
  const { name, price, imageUrl } = product;

  const { addItemToCart } = useContext(CartContext);

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
        submitHandle={() => addItemToCart(product)}
      />
    </div>
  );
};

export default ProductCard;
