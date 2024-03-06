// In SuccessPage.js or your equivalent success page component
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const PaymentCancelled = () => {
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { delay: 0.3, duration: 0.5 },
    },
  };

  const iconVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { delay: 0.5, duration: 0.5 },
    },
  };

  const textVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { delay: 0.7, duration: 0.5 },
    },
  };

  return (
    <motion.div
      className="flex h-screen items-center justify-center bg-white px-4 py-6 sm:px-6 lg:px-8 montserrat-med"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="text-center">
        <motion.h1
          className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl"
          variants={textVariants}
        >
          Payment Cancelled
        </motion.h1>
        <motion.p
          className="mt-6 text-base text-gray-600 max-w-[700px] leading-8"
          variants={textVariants}
        >
          Your payment process has been cancelled. You can return to your cart
          to complete the checkout or continue browsing our products.
        </motion.p>
        <motion.div className="mt-8" variants={textVariants}>
          <Link
            href="/products"
            className="inline-block bg-accent text-white text-[1.125rem] w-[14rem] py-3 px-4 rounded hover:bg-[#D1775D] montserrat-med btn-shadow"
          >
            Continue Shopping
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PaymentCancelled;
