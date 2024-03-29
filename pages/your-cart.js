import React from "react";
import { useCart } from "../context/CartContext";
import { CheckIcon, ClockIcon, XMarkIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function YourCart() {
  const { items, removeFromCart, updateQuantity } = useCart();

  const subtotal = items.reduce((acc, item) => {
    const price =
      typeof item.price === "number"
        ? item.price
        : parseFloat(item.price.replace("$", ""));
    return acc + price * item.quantity;
  }, 0);

  const taxRate = 0.08;
  const tax = subtotal * taxRate;
  const total = subtotal + tax;

  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  if (items.length === 0) {
    return (
      <div className="bg-white py-20 text-center montserrat-med">
        <h2 className="text-2xl font-semibold">Your cart is empty</h2>
        <p className="mt-4 text-lg text-gray-600">
          Looks like you haven't added anything to your cart yet.
        </p>
        <Link href="/products">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 relative top-6 bg-accent text-white text-[1.125rem] w-[14rem] py-3 px-4 rounded hover:bg-[#D1775D] montserrat-med btn-shadow"
          >
            Start Shopping
          </motion.button>
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="text-3xl playfair-display text-gray-900 sm:text-4xl">
          Shopping Cart
        </h1>
        <motion.form
          className="mt-12 montserrat-med lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16"
          initial="hidden"
          animate="visible"
        >
          <motion.section
            aria-labelledby="cart-heading"
            className="lg:col-span-7"
            variants={listVariants}
          >
            <h2 id="cart-heading" className="sr-only">
              Items in your shopping cart
            </h2>

            <motion.ul
              role="list"
              className="divide-y divide-gray-200 border-b border-t border-gray-200"
              variants={listVariants}
            >
              {items.map((item, index) => (
                <motion.li
                  key={item._id}
                  className="flex py-6 sm:py-10"
                  variants={itemVariants}
                >
                  <div className="flex-shrink-0">
                    <Image
                      className="rounded-md"
                      src={item.image}
                      alt={item.name}
                      width={200} // Specify a width
                      height={200} // And a height
                      objectFit="cover" // Apply object-fit as a prop
                    />
                  </div>

                  <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                    <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                      <div>
                        <div className="flex justify-between">
                          <h3 className="text-sm">
                            <p className="font-medium text-gray-700 hover:text-gray-800">
                              {item.name}
                            </p>
                          </h3>
                        </div>
                        <p className="mt-1 text-sm font-medium text-gray-900">
                          {item.price}
                        </p>
                      </div>

                      <div className="mt-4 sm:mt-0 sm:pr-9">
                        <label
                          htmlFor={`quantity-${index}`}
                          className="sr-only"
                        >
                          Quantity, {item.name}
                        </label>
                        <select
                          id={`quantity-${item._id}`}
                          name={`quantity-${item._id}`}
                          value={item.quantity}
                          onChange={(e) =>
                            updateQuantity(item._id, parseInt(e.target.value))
                          }
                          className="max-w-full rounded-md border border-gray-300 py-1.5 text-left text-base font-medium leading-5 text-gray-700 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm"
                        >
                          {[...Array(10).keys()].map((value) => (
                            <option key={value} value={value + 1}>
                              {value + 1}
                            </option>
                          ))}
                        </select>

                        <button
                          type="button"
                          onClick={() => removeFromCart(item._id)}
                          className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                        >
                          <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </motion.section>

          {/* Order summary with animation */}
          <motion.section
            aria-labelledby="summary-heading"
            className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
            variants={itemVariants}
          >
            {/* Summary content */}

            <section
              aria-labelledby="summary-heading"
              className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
            >
              <h2
                id="summary-heading"
                className="text-lg font-medium text-gray-900"
              >
                Order summary
              </h2>

              <dl className="mt-6 space-y-4">
                <div className="flex items-center justify-between">
                  <dt className="text-sm text-gray-600">Subtotal</dt>
                  <dd className="text-sm font-medium text-gray-900">
                    ${subtotal.toFixed(2)}
                  </dd>
                </div>
                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                  <dt className="text-sm text-gray-600">Tax (estimated)</dt>
                  <dd className="text-sm font-medium text-gray-900">
                    ${tax.toFixed(2)}
                  </dd>
                </div>
                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                  <dt className="text-base font-medium text-gray-900">Total</dt>
                  <dd className="text-base font-medium text-gray-900">
                    ${total.toFixed(2)}
                  </dd>
                </div>
              </dl>

              <div className="mt-6">
                <Link href="/checkout">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="mt-4 bg-accent w-full text-white py-3 px-4 rounded hover:bg-[#D1775D] montserrat-med btn-shadow"
                  >
                    Checkout
                  </motion.button>
                </Link>
              </div>
            </section>
          </motion.section>
        </motion.form>
      </div>
    </div>
  );
}
