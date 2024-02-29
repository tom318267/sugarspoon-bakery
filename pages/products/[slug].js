import { StarIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import { motion } from "framer-motion";
import { useCart } from "../../context/CartContext";
import dbConnect from "../../lib/mongodb";
import Product from "../../models/Product";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export async function getServerSideProps(context) {
  const { slug } = context.params;

  await dbConnect();

  const product = await Product.findOne({ slug }).lean();
  product._id = product._id.toString();

  return { props: { product: JSON.parse(JSON.stringify(product)) } };
}

export default function ProductPage({ product }) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    console.log("Adding product to cart:", product);

    addToCart(product);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delay: 0.2, when: "beforeChildren", staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 120 },
    },
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
          <div className="flex justify-center items-center h-[25rem] relative">
            <Image
              src={product.image}
              alt={product.name}
              layout="fill"
              objectFit="contain"
              className="rounded-md"
            />
          </div>
          <motion.div
            className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0 montserrat-med"
            variants={itemVariants}
          >
            <h1 className="text-3xl montserrat-bold tracking-tight text-gray-900">
              {product.name}
            </h1>
            <p className="text-3xl tracking-tight text-gray-900">
              ${product.price}
            </p>
            <div className="flex items-center my-3">
              {[0, 1, 2, 3, 4].map((index) => (
                <StarIcon
                  key={index}
                  className={`h-8 w-8 ${
                    product.rating > index ? "text-yellow-400" : "text-gray-300"
                  }`}
                  aria-hidden="true"
                />
              ))}
              <span className="ml-2 text-sm text-gray-500">
                {product.rating} out of 5 stars
              </span>
            </div>
            <div
              className="space-y-6 text-[1rem] montserrat-light"
              dangerouslySetInnerHTML={{ __html: product.longDesc }}
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleAddToCart}
              className="mt-4 bg-accent text-white text-[1.125rem] w-full py-3 px-4 rounded hover:bg-[#D1775D] montserrat-med btn-shadow"
            >
              Add to Cart
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
