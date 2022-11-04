import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../../context/cart.context";
import Button from "../../helpers/button";
import CartItem from "../cart-item";
import "./index.styles.scss";

const CardDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item: any) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
        <Button submitHandle={goToCheckout}>Checkout</Button>
      </div>
    </div>
  );
};

export default CardDropdown;
