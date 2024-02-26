import React from "react";
import handleCheckout from "../utils.js/handleCheckout";

const CheckoutButton = ({ userId }) => {
  const startCheckout = () => {
    handleCheckout(userId).catch((error) => {
      console.error("Checkout failed:", error);
    });
  };

  return <button onClick={startCheckout}>Checkout</button>;
};

export default CheckoutButton;
