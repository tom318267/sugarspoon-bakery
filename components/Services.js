import Image from "next/image";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import services from "/services.json";

const serviceVariant = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  hidden: { opacity: 0, y: 50 },
};

const Services = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <section className="services">
      <div className="px-6 flex flex-col items-center py-[7.063rem]">
        <h2 className="text-[2.8rem] md:text-[3.5rem] text-white font-bold text-center playfair-display">
          Our Services
        </h2>
        <p className="text-white montserrat-light text-[1rem] py-[1rem] leading-[2.75rem] max-w-[48rem] text-center">
          Discover a suite of personalized services tailored to sweeten all your
          special moments.
        </p>

        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-[2rem] mt-[4.375rem]"
          ref={ref}
        >
          {services.map((service, index) => (
            <motion.div
              className="bg-white w-[20rem] md:w-[24rem] h-[auto] rounded"
              key={index}
              variants={serviceVariant}
              initial="hidden"
              animate={controls}
            >
              <div className="flex flex-col justify-center items-center p-6">
                <Image
                  src={service.src}
                  width={65}
                  height={61}
                  alt={service.title}
                />
                <div className="flex flex-col justify-center text-text_color items-center gap-[0.5rem] py-[0.625rem]">
                  <h3 className="text-[1.25rem] montserrat-med">
                    {service.title}
                  </h3>
                  <p className="text-center leading-[1.5rem] text-text_color montserrat-light pb-[0.625rem]">
                    {service.description}
                  </p>
                </div>
                <Link href={service.href}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-accent w-[18rem] md:w-[20.875rem] py-3 px-4 flex justify-center items-center rounded text-[1.125rem] montserrat-med hover:bg-[#D1775D] text-white btn-shadow"
                  >
                    Learn More
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
