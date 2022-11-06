import { createContext, useReducer } from "react";
import { createAction } from '../utils/reducer/reducer.utils';

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

// Reducer Logic
const INITIAL_STATE = {
  cartItems: [],
  countItems: 0,
  isOpen: false
};

export const CART_ACTION_TYPES = {
  SET_CART_ITEMS: 'SET_CART_ITEMS',
  IS_OPEN: "IS_OPEN"
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload
      };
    case CART_ACTION_TYPES.IS_OPEN:
      return {
        ...state,
        isOpen: payload
      }
    default:
      throw new Error(`Unhandled type of ${type} in cartReducer`);
  }
};



export const CartContext = createContext({
  isOpen: false,
  setIsOpen: (value) => null,
  cartItems: [],
  addItemToCart: (item) => null,
  removeItemToCart: (item) => null,
  countItems: 0,
  deleteItemToCart: (item) => null,
});

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);

  const { cartItems, countItems, isOpen} = state;

  const updateCartItemsReducer = (cartItems) => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );

    const payload = {
      cartItems,
      countItems: newCartCount
    };

    dispatch(createAction(CART_ACTION_TYPES.SET_CART_ITEMS, payload));
  };

  const addItemToCart = (productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd)
    updateCartItemsReducer(newCartItems)
  };

  const removeItemToCart = (productToRemove) => {
    const newCartItems = removeCartItem(cartItems, productToRemove)
    updateCartItemsReducer(newCartItems)
  };

  const deleteItemToCart = (productToDelete) => {
    const newCartItems = deleteCartItem(cartItems, productToDelete)
    updateCartItemsReducer(newCartItems)
  };

  const setIsOpen = (bool) => {
    dispatch(createAction(CART_ACTION_TYPES.IS_OPEN, bool));
  }

  const value = {
    isOpen,
    setIsOpen,
    addItemToCart,
    cartItems,
    countItems,
    removeItemToCart,
    deleteItemToCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
