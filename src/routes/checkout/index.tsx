import React, { useContext } from "react";
import CheckoutItem from "../../components/checkout-item";
import Table from "../../components/checkout-table";
import CheckoutTotal from "../../components/checkout-total";
import { CartContext } from "../../context/cart.context";
import "./index.styles.scss";

const Checkout = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="checkout-container">
      <Table />
      <div>
        {cartItems.length ? (
          cartItems.map((item: any) => (
            <CheckoutItem key={item.id} item={item} />
          ))
        ) : (
          <div className="not-found">No items</div>
        )}
      </div>
      {cartItems.length ? <CheckoutTotal /> : ""}
    </div>
  );
};

export default Checkout;
