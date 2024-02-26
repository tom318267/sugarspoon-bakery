import React, { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addToCart = (productToAdd) => {
    setItems((prevItems) => {
      const foundIndex = prevItems.findIndex(
        (item) => item._id === productToAdd._id
      );
      if (foundIndex < 0) {
        // Item not found in cart, add as a new item
        return [...prevItems, { ...productToAdd, quantity: 1 }];
      } else {
        // Item found, update quantity
        return prevItems.map((item, index) =>
          index === foundIndex ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
    });
  };

  const reduceQuantity = (productId) => {
    setItems((prevItems) => {
      const foundIndex = prevItems.findIndex((item) => item._id === productId);
      if (foundIndex >= 0 && prevItems[foundIndex].quantity > 1) {
        // Reduce quantity if more than one
        return prevItems.map((item, index) =>
          index === foundIndex ? { ...item, quantity: item.quantity - 1 } : item
        );
      } else {
        // Remove item if quantity is 1 or less
        return prevItems.filter((item) => item._id !== productId);
      }
    });
  };

  const removeFromCart = (productId) => {
    console.log(productId);
    setItems((prevItems) => prevItems.filter((item) => item._id !== productId));
  };

  const clearCart = () => {
    setItems([]);
  };

  const value = { items, addToCart, reduceQuantity, removeFromCart, clearCart };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
