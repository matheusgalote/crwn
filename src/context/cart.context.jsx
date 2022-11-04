import { createContext, useEffect, useState } from "react";

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
const deleteCartItem = (cartItems, productToRemove) => {
  return cartItems.filter((item) => item.id !== productToRemove.id);
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
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [countItems, setCountItems] = useState(0);

  useEffect(() => {
    const newCountItems = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCountItems(newCountItems);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemToCart = (productToRemove) => {
    setCartItems(removeCartItem(cartItems, productToRemove));
  };

  const deleteItemToCart = (productToDelete) => {
    setCartItems(deleteCartItem(cartItems, productToDelete));
  };

  const value = {
    isOpen,
    setIsOpen,
    addItemToCart,
    cartItems,
    countItems,
    removeItemToCart,
    deleteItemToCart
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
