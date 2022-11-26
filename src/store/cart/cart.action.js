import { createAction } from "../../utils/reducer/reducer.utils";
import { CART_ACTION_TYPES } from "./cart.types";

export const updateCartItemsReducer = (cartItems) => {
  const countItems = cartItems.reduce((acc, current) => acc + current.quantity, 0);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {cartItems, countItems});
};

export const isOpenMenu = (isOpen) => {
  return createAction(CART_ACTION_TYPES.IS_OPEN, isOpen);
}
