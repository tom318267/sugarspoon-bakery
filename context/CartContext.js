import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

export const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Directly read from localStorage on mount
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setItems(JSON.parse(storedCart));
      console.log("Loaded items from localStorage:", JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    // Directly save to localStorage on items change
    if (items.length > 0) {
      localStorage.setItem("cart", JSON.stringify(items));
      console.log("Saved items to localStorage:", items);
    }
  }, [items]);

  const addToCart = (productToAdd) => {
    setItems((prevItems) => {
      const foundIndex = prevItems.findIndex(
        (item) => item._id === productToAdd._id
      );
      if (foundIndex < 0) {
        return [...prevItems, { ...productToAdd, quantity: 1 }];
      } else {
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
        return prevItems.map((item, index) =>
          index === foundIndex ? { ...item, quantity: item.quantity - 1 } : item
        );
      } else {
        return prevItems.filter((item) => item._id !== productId);
      }
    });
  };

  const removeFromCart = (productId) => {
    setItems((currentItems) =>
      currentItems.filter((item) => item._id !== productId)
    );
  };

  const updateQuantity = (productId, quantity) => {
    setItems((currentItems) =>
      currentItems
        .map((item) => {
          const itemId = item._id || item.id;
          if (itemId === productId) {
            return { ...item, quantity };
          }
          return item;
        })
        .filter((item) => item.quantity > 0)
    );
  };

  const clearCart = useCallback(() => {
    setItems([]);
    localStorage.clear("cart");
  }, []);

  const value = {
    items,
    addToCart,
    reduceQuantity,
    removeFromCart,
    updateQuantity,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
