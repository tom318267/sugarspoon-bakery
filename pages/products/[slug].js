import { Tab } from "@headlessui/react";
import { StarIcon } from "@heroicons/react/20/solid";
import specialties from "/specialties.json";
import Image from "next/image";
import { motion } from "framer-motion";
import { useCart } from "../../context/CartContext";
import { useState } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export async function getStaticPaths() {
  // Get the paths we want to pre-render based on specialties
  const paths = specialties.map((item) => ({
    params: { slug: item.slug },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // Find the item by its slug
  const item = specialties.find((item) => item.slug === params.slug);

  // Pass the item data to the page via props
  return { props: { item } };
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delay: 0.2, when: "beforeChildren", staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 120 } },
};

export default function ProductPage({ item }) {
  const [selectedImage, setSelectedImage] = useState(item.images[0]); // Initialize with the first image

  const { addToCart } = useCart();

  const handleAddToCart = (event) => {
    event.preventDefault(); // Prevent form submission from reloading the page
    addToCart(item);
  };

  return (
    <motion.div
      className="bg-white"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
          <Tab.Group as="div" className="flex flex-col-reverse">
            {/* Thumbnails */}
            <div className="mx-auto mt-6 w-full max-w-2xl sm:block lg:max-w-none">
              <Tab.List className="grid grid-cols-4 gap-6">
                {item.images.map((imageSrc, index) => (
                  <Tab
                    key={index}
                    className="relative h-24 cursor-pointer rounded-md"
                  >
                    <Image
                      src={imageSrc}
                      alt={item.name}
                      layout="fill"
                      objectFit="cover"
                    />
                  </Tab>
                ))}
              </Tab.List>
            </div>

            {/* Main Image Display */}
            <Tab.Panels className="w-full">
              {item.images.map((imageSrc, index) => (
                <Tab.Panel
                  key={index}
                  className="flex justify-center items-center"
                >
                  <div className="inline-block sm:rounded-lg overflow-hidden">
                    {" "}
                    <Image
                      src={imageSrc}
                      alt={item.name}
                      layout="intrinsic"
                      width={700} // Your desired width
                      height={700} // Your desired height, adjust to maintain the aspect ratio
                      objectFit="cover"
                    />
                  </div>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>

          {/* Product info */}
          <motion.div
            className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0 montserrat-med"
            variants={itemVariants}
          >
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              {item.name}
            </h1>

            <div className="mt-3">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl tracking-tight text-gray-900">
                ${item.price}
              </p>
            </div>

            {/* Reviews */}
            <div className="mt-3">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        item.rating > rating ? "text-accent" : "text-gray-300",
                        "h-5 w-5 flex-shrink-0"
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="sr-only">{item.rating} out of 5 stars</p>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="sr-only">Description</h3>

              <div
                className="space-y-6 text-base text-gray-700"
                dangerouslySetInnerHTML={{ __html: item.longDesc }}
              />
            </div>

            <form onSubmit={handleAddToCart} className="mt-6">
              <div className="mt-3 flex">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex max-w-xl flex-1 items-center justify-center rounded-md border border-transparent bg-accent px-8 py-3 text-base font-medium text-white hover:bg-[#D1775D] sm:w-full"
                  type="submit"
                >
                  Add to cart
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
