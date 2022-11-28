import React from "react";
import { useSelector } from "react-redux";
import { selectCartTotal } from "../../store/cart/cart.selector";
import "./index.styles.scss";

const CheckoutTotal = (items: any) => {
  const total = useSelector(selectCartTotal);

  return (
    <div className="total">
      <span>
        TOTAL: <span className="price">${total.toFixed(2)}</span>
      </span>
    </div>
  );
};

export default CheckoutTotal;
