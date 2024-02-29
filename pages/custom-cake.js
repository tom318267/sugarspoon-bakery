import Image from "next/image";
import { motion } from "framer-motion";

const CustomCake = () => {
  // Container animation for the entire section
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
        when: "beforeChildren",
      },
    },
  };

  // Animation for the image to slide up
  const imageVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  // Animation for text content to fade in
  const textVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <motion.div
      className="bg-white py-24 sm:py-32"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="mx-auto max-w-7xl pb-8 px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <motion.div className="lg:pr-4" variants={imageVariants}>
            <Image
              className="rounded-md"
              src="/custom-cake.jpg"
              alt=""
              width={600}
              height={300}
              layout="responsive"
            />
          </motion.div>
          <motion.div variants={textVariants}>
            <div className="text-base leading-7 text-gray-700 lg:max-w-lg">
              <h3 className="mt-2 text-3xl playfair-display text-gray-900 sm:text-4xl">
                Custom Cake Design
              </h3>
              <div className="max-w-xl">
                <p className="mt-6 text-[1rem] montserrat-light leading-[1.875rem]">
                  Celebrate life's sweetest moments with a custom cake from
                  Sugar Spoon Bakery. Whether you're marking a milestone
                  birthday, commemorating a special anniversary, or simply
                  indulging in a well-deserved treat, our custom cakes are the
                  perfect way to add a touch of sweetness to any occasion. With
                  their impeccable craftsmanship, exquisite flavors, and
                  personalized designs, our custom cakes are sure to leave a
                  lasting impression and create memories that will be cherished
                  for years to come.
                </p>
                <h4 className="montserrat-bold text-accent mt-6">
                  Your Vision, Our Expertise
                </h4>
                <p className="mt-4 text-[1rem] montserrat-light">
                  At Sugar Spoon Bakery, we believe that every cake should be as
                  unique as the person it's made for. That's why we work closely
                  with each of our customers to bring their vision to life, from
                  concept to creation. Whether you have a specific theme in
                  mind, a favorite flavor combination, or a special design
                  request, our talented team of bakers and decorators will work
                  tirelessly to ensure that your custom cake exceeds your
                  expectations and reflects your individual style and taste.
                </p>
                <h4 className="montserrat-bold text-accent mt-6">
                  Order Your Custom Cake Today
                </h4>
                <p className="mt-4 text-[1rem] montserrat-light">
                  Ready to make your cake dreams a reality? Contact us today to
                  schedule your consultation and begin the journey to your
                  perfect custom cake. Whether you're celebrating a wedding, a
                  birthday, a baby shower, or any other special occasion, our
                  custom cakes are the perfect way to add a touch of sweetness
                  and sophistication to your event. Order your custom cake from
                  Sugar Spoon Bakery today and let us help you create memories
                  that will last a lifetime.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default CustomCake;
