import { CART_ACTION_TYPES } from "./cart.types";

const INITIAL_STATE = {
  cartItems: [],
  countItems: 0,
  isOpen: false,
};

export const cartReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        cartItems: payload.cartItems,
        countItems: payload.countItems,
      };
    case CART_ACTION_TYPES.IS_OPEN:
      return {
        ...state,
        isOpen: payload,
      };
    default:
      return state;
  }
};
