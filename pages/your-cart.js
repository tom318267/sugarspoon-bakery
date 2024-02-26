import Link from "next/link";
import React from "react";
import { useCart } from "../context/CartContext";

const YourCart = () => {
  const { items, addToCart, removeFromCart, reduceQuantity } = useCart();

  return (
    <div>
      <h2>Your Cart</h2>
      {items.length > 0 ? (
        <div>
          <ul>
            {items.map((item) => (
              <li key={item._id}>
                {item.name} - ${item.price} x {item.quantity}
                <button onClick={() => reduceQuantity(item._id)}>-</button>{" "}
                {/* Ensure consistent ID usage */}
                <button onClick={() => addToCart(item)}>+</button>
                <button onClick={() => removeFromCart(item._id)}>
                  Remove
                </button>{" "}
                {/* Ensure consistent ID usage */}
              </li>
            ))}
          </ul>
          <Link href="/checkout">
            <button>Go to Checkout</button>
          </Link>
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default YourCart;
