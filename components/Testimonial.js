import Image from "next/image";
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Testimonial = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5, // Adjusts at what percentage of the component's visibility the animation triggers
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    hidden: { opacity: 0, y: 20 },
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className="bg-white"
    >
      <div className="flex flex-col justify-center items-center px-[5rem] py-[6rem]">
        <motion.h2
          variants={variants}
          className="montserrat-med text-[2.625rem] text-center leading-[3.75rem]"
        >
          "Sugar Spoon Bakery is my morning haven. Their fresh coffee and
          cinnamon rolls are the perfect start to my day. It’s a little place of
          joy and deliciousness that I can’t recommend enough!"
        </motion.h2>

        <motion.div
          variants={variants}
          className="flex flex-col justify-center items-center mt-[2rem]"
        >
          <Image src="/avatarimg.svg" width={103} height={103} alt="Avatar" />
          <h3 className="text-[1.125rem] pt-[1rem] montserrat-bold">
            Sandy Wilkins
          </h3>
          <h4 className="text-[1rem] text-[#667085] montserrat-med mt-[0.25rem]">
            Customer
          </h4>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Testimonial;
