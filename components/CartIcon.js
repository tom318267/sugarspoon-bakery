import React, { useContext } from "react";
import { CartContext } from "../context/CartContext"; // Adjust the import path according to your file structure
import Image from "next/image";

const CartIcon = () => {
  const { items } = useContext(CartContext); // Use the CartContext to access cart items

  // Calculate cart count directly from the cart items state
  const cartCount = items.reduce(
    (accumulator, currentItem) => accumulator + currentItem.quantity,
    0
  );

  return (
    <div className="relative flex items-center">
      <div className="relative w-[2rem] h-[2rem]">
        <Image
          src="/carticon.svg"
          alt="Cart"
          layout="fill"
          objectFit="contain"
        />
      </div>
      {cartCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2 py-1">
          {cartCount}
        </span>
      )}
    </div>
  );
};

export default CartIcon;
