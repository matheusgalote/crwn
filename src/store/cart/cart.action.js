import { createAction } from "../../utils/reducer/reducer.utils";
import { CART_ACTION_TYPES } from "./cart.types";

const addCartItem = (cartItems, productToAdd) => {
  // Find if cartItems contains productToAdd
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((item) =>
      item.id === productToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

// delete object of the array
const deleteCartItem = (cartItems, productToDelete) => {
  return cartItems.filter((item) => item.id !== productToDelete.id);
};

// remove items to cart
const removeCartItem = (cartItems, productToRemove) => {
  // Find if cartItems contains productToAdd
  if (productToRemove.quantity > 1) {
    return cartItems.map((item, index) => {
      if (item.id === productToRemove.id) {
        if (item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        }
      }
      return item;
    });
  } else {
    return deleteCartItem(cartItems, productToRemove);
  }
};

// export const updateCartItemsReducer = (cartItems) => {
//   const countItems = cartItems.reduce(
//     (acc, current) => acc + current.quantity,
//     0
//   );
//   return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
//     cartItems,
//     countItems,
//   });
// };

export const isOpenMenu = (isOpen) => {
  return createAction(CART_ACTION_TYPES.IS_OPEN, isOpen);
};

export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const removeItemToCart = (cartItems, productToRemove) => {
  const newCartItems = removeCartItem(cartItems, productToRemove);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const deleteItemToCart = (cartItems, productToDelete) => {
  const newCartItems = deleteCartItem(cartItems, productToDelete);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
