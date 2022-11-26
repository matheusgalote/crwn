import React from "react";
import { useSelector } from "react-redux";
import { cartSelector } from "../../store/cart/cart.selector";
import "./index.styles.scss";

const CheckoutTotal = (items: any) => {
  const { cartItems } = useSelector(cartSelector);

  const total = cartItems.reduce(
    (total: any, item: any) => total + item.quantity * item.price,
    0
  );

  return (
    <div className="total">
      <span>
        TOTAL: <span className="price">${total.toFixed(2)}</span>
      </span>
    </div>
  );
};

export default CheckoutTotal;
