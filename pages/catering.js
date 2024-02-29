import { motion } from "framer-motion";
import Image from "next/image";

const Catering = () => {
  // Animation variants for the text and image
  const textVariants = {
    offscreen: { x: -100, opacity: 0 },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", bounce: 0.1, duration: 1.2 },
    },
  };

  const imageVariants = {
    offscreen: { x: 100, opacity: 0 },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", bounce: 0.1, duration: 1.2 },
    },
  };
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <motion.div
            className="lg:pr-8 lg:pt-4"
            initial="offscreen"
            whileInView="onscreen"
            variants={textVariants}
          >
            <div className="lg:max-w-lg">
              <h3 className="mt-2 text-3xl playfair-display text-gray-900 sm:text-4xl">
                Catering Services
              </h3>
              <p className="mt-6 text-[1rem] montserrat-light leading-[1.875rem]">
                Elevate your next event with catering services from Sugar Spoon
                Bakery. Whether you're planning a corporate luncheon, a wedding
                reception, a birthday party, or any other special occasion, our
                expert team is here to make your event truly unforgettable. With
                our delectable array of sweet and savory treats, impeccable
                presentation, and personalized service, we'll ensure that your
                guests are treated to a culinary experience that delights the
                senses and leaves a lasting impression.
              </p>

              <br />

              <h4 className="montserrat-bold text-accent">Our Offerings</h4>

              <p className="mt-6 text-[1rem] montserrat-light leading-[1.875rem]">
                From elegant dessert displays to custom-designed cakes and
                pastries, our catering menu is brimming with irresistible
                options to suit every taste and occasion. Indulge in our
                decadent cupcakes, artisanal pies, and gourmet cookies, or opt
                for a show-stopping tiered cake that's as beautiful as it is
                delicious. Whatever your preferences, dietary restrictions, or
                budget, our team will work closely with you to create a custom
                catering package that perfectly suits your needs and exceeds
                your expectations.
              </p>

              <br />

              <h4 className="montserrat-bold text-accent">
                Quality and Freshness Guaranteed
              </h4>

              <p className="mt-6 text-[1rem] montserrat-light leading-[1.875rem]">
                At Sugar Spoon Bakery, quality and freshness are our top
                priorities. That's why we use only the finest ingredients in our
                baked goods, from locally sourced dairy and eggs to premium
                chocolates and fresh fruits. Each item is made from scratch with
                care and attention to detail, ensuring that every bite is a true
                delight. Plus, with our commitment to sustainability and
                eco-friendly practices, you can feel good knowing that your
                catering choices are making a positive impact on the
                environment.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            variants={imageVariants}
          >
            <Image
              src="/catering2.png"
              alt="Catering service"
              className="max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 w-[63rem] md:-ml-4 lg:-ml-0"
              width={2432}
              height={1442}
              objectFit="contain"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Catering;
