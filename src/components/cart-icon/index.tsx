import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { isOpenMenu } from "../../store/cart/cart.action";
import { selectIsCartOpen, selectCartCount } from "../../store/cart/cart.selector";

import "./index.styles.scss";

const CartIcon = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectIsCartOpen);
  const countItems = useSelector(selectCartCount)

  const handleClick = (event: any) => {
    dispatch(isOpenMenu(!isOpen));
  };

  return (
    <div className="cart-icon-container">
      <ShoppingIcon onClick={handleClick} className="shopping-icon" />
      <span className="item-count">{countItems}</span>
    </div>
  );
};

export default CartIcon;
