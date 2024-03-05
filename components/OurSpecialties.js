import Image from "next/image";
import React from "react";
import specialties from "/specialties.json"; // Ensure the path is correct for your project structure
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const OurSpecialties = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const itemVariants = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hidden: { opacity: 0, y: 20 },
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.1, delayChildren: 0.2 },
        },
        hidden: { opacity: 0 },
      }}
      id="about"
      className="px-[6rem] pt-[7.6rem] pb-[11.188rem] text-center bg-[#F3D8C7] md:px-12"
    >
      <motion.h2
        variants={itemVariants}
        className="text-[3.5rem] text-text_color font-bold text-center playfair-display"
      >
        Our Specialties
      </motion.h2>
      <motion.p
        variants={itemVariants}
        className="text-text_color montserrat-light text-[1rem] py-[1rem] leading-[1.875rem]"
      >
        Handpicked favorites from our oven to your table, bringing warmth and
        joy to every meal.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-[2.063rem] pt-[3.5rem]">
        {specialties.map((specialty, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="flex flex-col rounded overflow-hidden shadow-lg"
          >
            <div className="w-full h-64 relative">
              <Image
                src={specialty.images[0]}
                alt={specialty.alt}
                layout="fill"
                objectFit="cover"
                sizes="100vw"
              />
            </div>
            <div className="flex flex-col flex-1 p-6 bg-white">
              <h3 className="font-bold text-xl text-text_color mb-2 montserrat-bold">
                {specialty.name}
              </h3>
              <p className="flex-1 text-text_color text-base montserrat-light">
                {specialty.description}
              </p>
              <Link href={`/products/${specialty.slug}`}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 bg-accent w-full text-white py-3 px-4 rounded hover:bg-[#D1775D] montserrat-med btn-shadow"
                >
                  Order Now
                </motion.button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default OurSpecialties;
