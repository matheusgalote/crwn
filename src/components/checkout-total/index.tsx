import React, { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import "./index.styles.scss";

const CheckoutTotal = (items: any) => {
  const { cartItems } = useContext(CartContext);

  const total = cartItems.reduce(
    (total, item: any) => total + item.quantity * item.price,
    0
  );

  return (
    <div className="total">
      <span>TOTAL: <span className="price">${total.toFixed(2)}</span></span>
    </div>
  );
};

export default CheckoutTotal;
