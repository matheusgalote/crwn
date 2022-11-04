import { useContext } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../context/cart.context";

import "./index.styles.scss";

const CartIcon = () => {
  const { isOpen, setIsOpen, countItems } = useContext(CartContext);

  const handleClick = (event: any) => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="cart-icon-container">
      <ShoppingIcon onClick={handleClick} className="shopping-icon" />
      <span className="item-count">{countItems}</span>
    </div>
  );
};

export default CartIcon;
