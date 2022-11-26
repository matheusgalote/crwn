import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../helpers/button";
import CartItem from "../cart-item";
import "./index.styles.scss";
import { cartSelector } from "../../store/cart/cart.selector";

const CardDropdown = () => {
  const { cartItems } = useSelector(cartSelector);
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
