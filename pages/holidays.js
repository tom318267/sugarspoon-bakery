import { motion } from "framer-motion";
import Image from "next/image";

const Holidays = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { x: -50, opacity: 0 },
    show: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } },
  };

  const imageItem = {
    hidden: { x: 50, opacity: 0 },
    show: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } },
  };

  return (
    <div className="bg-white py-24 sm:py-32">
      <motion.div
        className="mx-auto max-w-7xl pb-8 px-6 lg:px-8"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <motion.div className="lg:pr-4" variants={imageItem}>
            <Image
              className="rounded-md"
              src="/holiday-cookies.jpg"
              alt=""
              width={600}
              height={300}
              layout="responsive"
            />
          </motion.div>
          <motion.div variants={item}>
            <div className="text-base leading-7 text-gray-700 lg:max-w-lg">
              <h3 className="mt-2 text-3xl playfair-display text-gray-900 sm:text-4xl">
                Seasonal and Holiday Specialties
              </h3>
              <div className="max-w-xl">
                <p className="mt-6 text-[1rem] montserrat-light leading-[1.875rem]">
                  Celebrate the changing seasons and festive holidays with our
                  irresistible selection of seasonal and holiday specialties at
                  Sugar Spoon Bakery. From cozy autumn flavors to festive winter
                  treats, we're proud to offer a delectable array of baked goods
                  that capture the spirit of the season and bring joy to every
                  celebration. Whether you're craving a taste of nostalgia or
                  looking to create new traditions, our seasonal and holiday
                  specialties are sure to delight your taste buds and warm your
                  heart.
                </p>

                <h4 className="montserrat-bold text-accent mt-6">
                  Embrace the Flavors of the Season
                </h4>
                <p className="mt-4 text-[1rem] montserrat-light">
                  At Sugar Spoon Bakery, we're passionate about embracing the
                  flavors of each season and incorporating them into our baked
                  goods. From the crisp, refreshing taste of autumn apples to
                  the warm, comforting spices of winter, our seasonal
                  specialties are inspired by the bounty of nature and the
                  traditions of the season. Whether you're indulging in a slice
                  of our pumpkin spice pie, savoring a gingerbread cookie, or
                  enjoying a cup of our homemade hot cocoa, you'll taste the
                  essence of the season in every bite.
                </p>

                <h4 className="montserrat-bold text-accent mt-6">
                  Festive Treats for Every Holiday
                </h4>
                <p className="mt-4 text-[1rem] montserrat-light">
                  No holiday celebration is complete without a touch of
                  sweetness, and our holiday specialties are sure to delight
                  your senses and spread cheer to all who gather. From
                  Valentine's Day to Easter, Halloween to Christmas, we offer a
                  wide variety of festive treats to suit every occasion. Whether
                  you're celebrating with loved ones or hosting a party for
                  friends, our holiday specialties are the perfect way to add a
                  dash of magic to your festivities and create memories that
                  will last a lifetime.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Holidays;
