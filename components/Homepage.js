import Link from "next/link";
import React from "react";
import OurSpecialties from "./OurSpecialties";
import Testimonial from "./Testimonial";
import Image from "next/image";
import { motion } from "framer-motion";
import Services from "./Services";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 },
  },
};

const Homepage = () => {
  return (
    <motion.div initial="hidden" animate="visible" variants={containerVariants}>
      <section className="px-[6rem] py-[2.9rem] flex flex-col lg:flex-row justify-between md:gap-[4rem] items-center pb-[8.3rem]">
        <div className="max-w-[531px]">
          <motion.h1
            variants={itemVariants}
            className="text-[5rem] leading-[6rem] font-bold playfair-display text-text_color"
          >
            Freshly Baked Delights Awaiting You!
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-text_color mt-4 montserrat-light text-[1rem] py-[1rem] leading-[1.875rem]"
          >
            Indulge in our wide selection of artisan breads, decadent pastries,
            and sweet treats, all crafted with the finest ingredients and a dash
            of love – where every bite tells a story of culinary craftsmanship.
          </motion.p>
          <Link href="/products">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={itemVariants}
              className="mt-4 bg-accent text-white text-[1.125rem] w-[14rem] py-3 px-4 rounded hover:bg-[#D1775D] montserrat-med btn-shadow"
            >
              Explore Our Menu
            </motion.button>
          </Link>
        </div>

        <motion.div
          variants={itemVariants}
          className="w-full max-w-[668px] h-auto relative"
        >
          <Image
            className="pt-[4rem] md:pt-0"
            src="/cookiehome.png"
            alt="Cookie"
            layout="responsive"
            width={668}
            height={668}
          />
        </motion.div>
      </section>

      <motion.div variants={itemVariants}>
        <OurSpecialties />
      </motion.div>

      <motion.div variants={itemVariants}>
        <Testimonial />
      </motion.div>

      <motion.div variants={itemVariants}>
        <Services />
      </motion.div>
    </motion.div>
  );
};

export default Homepage;
