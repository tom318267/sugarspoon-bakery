import Image from "next/image";
import { motion } from "framer-motion";

const ContactUs = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.2, duration: 0.6 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      className="relative bg-white montserrat-med"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="lg:absolute lg:inset-0 lg:left-1/2 h-[50rem] sm:h-80 lg:h-full lg:w-[50%] relative">
        <Image
          src="/service.jpg"
          alt="Service Image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="bg-gray-50"
          priority
        />
      </div>
      <div className="pb-24 pt-16 sm:pb-32 sm:pt-24 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:pt-32">
        <div className="px-6 lg:px-8">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <motion.h2
              className="text-3xl playfair-display text-gray-900 sm:text-4xl"
              variants={itemVariants}
            >
              Get in Touch
            </motion.h2>
            <motion.p
              className="mt-6 text-[1rem] montserrat-light leading-[1.875rem]"
              variants={itemVariants}
            >
              Whether you have a question, feedback, or are dreaming of a custom
              cake for your next special occasion, we're here to help. Sweet
              Treats Bakery is committed to providing exceptional service and
              exquisite baked goods, including personalized custom cakes for
              weddings, birthdays, anniversaries, and more.
            </motion.p>
            <motion.form
              action="#"
              method="POST"
              className="mt-16"
              variants={containerVariants}
            >
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <motion.div variants={itemVariants}>
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    First name
                  </label>
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full h-10 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Last name
                  </label>
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full h-10 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </motion.div>

                <motion.div variants={itemVariants} className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="block w-full h-10 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </motion.div>

                <motion.div variants={itemVariants} className="sm:col-span-2">
                  <label
                    htmlFor="company"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    id="company"
                    autoComplete="organization"
                    className="block w-full h-10 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </motion.div>

                <motion.div variants={itemVariants} className="sm:col-span-2">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Phone <span className="text-gray-400">(Optional)</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    autoComplete="tel"
                    className="block w-full h-10 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </motion.div>

                <motion.div variants={itemVariants} className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    How can we help you?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={8}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Your message"
                  ></textarea>
                </motion.div>
              </div>
              <motion.div
                className="mt-10 flex justify-end border-t border-gray-900/10 pt-8"
                variants={itemVariants}
              >
                <button
                  type="submit"
                  className="mt-4 bg-accent text-white text-[1.125rem] w-full py-3 px-4 rounded hover:bg-[#D1775D]"
                >
                  Send message
                </button>
              </motion.div>
            </motion.form>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactUs;
