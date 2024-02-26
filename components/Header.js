import { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useAuth } from "../context/AuthContext";
import CartIcon from "./CartIcon";
import Image from "next/image";
import { motion } from "framer-motion";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Header = () => {
  const { user, logout } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const isLoggedIn = !!user; // Correctly assess the login state

  // Toggle dropdown menu
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <Disclosure as="nav" className="bg-transparent">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-6">
            <div className="relative flex h-24 justify-between items-center">
              {/* Logo on the left */}
              <div className="flex-shrink-0 flex items-center">
                <Link href="/">
                  <Image
                    className="hidden w-auto"
                    src="/sugarspoon.svg"
                    alt="Logo"
                    width={129}
                    height={83}
                    priority
                  />
                </Link>

                <Link href="/">
                  <Image
                    className="hidden md:block w-auto"
                    src="/sugarspoon.svg"
                    alt="Logo"
                    width={129}
                    height={83}
                    priority
                  />
                </Link>
              </div>

              {/* Mobile menu button */}
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              {/* Navigation links */}
              <div className="hidden sm:block sm:ml-6 sm:space-x-12">
                <Link
                  href="/"
                  className="border-transparent montserrat-med text-text_color uppercase inline-flex items-center px-1 pt-1 text-[1rem]"
                >
                  Home
                </Link>

                <Link
                  href="/products"
                  className="border-transparent montserrat-med uppercase text-text_color  inline-flex items-center px-1 pt-1 text-[1rem]"
                >
                  Products
                </Link>

                <Link
                  href="#"
                  className="border-transparent montserrat-med uppercase text-text_color inline-flex items-center px-1 pt-1 text-[1rem]"
                >
                  Contact Us
                </Link>
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center gap-[3.125rem] pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <Link href="/your-cart">
                  <CartIcon />
                </Link>

                <div className="flex items-center">
                  {isLoggedIn ? (
                    <button
                      onClick={() => logout()}
                      className="bg-accent py-2 px-4 flex rounded text-[1rem] montserrat-med hover:bg-[#D1775D] text-white btn-shadow"
                    >
                      Sign Out
                    </button>
                  ) : (
                    <>
                      <div>
                        <Link href="/login">
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-accent py-2 px-4 flex rounded text-[1rem] montserrat-med hover:bg-[#D1775D] text-white btn-shadow"
                          >
                            Log In
                          </motion.button>
                        </Link>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Disclosure.Button
                as="a"
                href="/"
                className="block px-3 py-2 rounded-md montserrat-med text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              >
                HOME
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/products"
                className="block px-3 py-2 rounded-md montserrat-med  text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              >
                PRODUCTS
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/contact"
                className="block px-3 py-2 rounded-md montserrat-med  text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              >
                CONTACT US
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Header;

// import React, { useState } from "react";
// import Link from "next/link";
// import { useAuth } from "../context/AuthContext";
// import CartIcon from "./CartIcon";
// import Image from "next/image";

// const Header = () => {
//   const { user, logout } = useAuth();
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const isLoggedIn = !!user; // Correctly assess the login state

//   // Toggle dropdown menu
//   const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

//   return (
//     <header className="bg-beige-100 text-brown-700 py-4">
//       <nav className="flex justify-between items-center container mx-auto px-4">
//         {/* Logo on the left */}
//         <Link href="/">
//           <Image
//             src="/sugarspoon.svg"
//             alt="Logo"
//             width={129}
//             height={83}
//             priority
//           />
//         </Link>

//         {/* Hamburger menu for medium screens */}
//         <div className="md:hidden">
//           <button onClick={toggleDropdown}>
//             {/* Icon or text for menu toggle */}
//             Menu
//           </button>
//         </div>

//         {/* Conditional rendering for navigation items and login/logout based on screen size and dropdown state */}
//         <div
//           className={`${
//             isDropdownOpen ? "flex" : "hidden"
//           } flex-col md:flex-row md:flex items-center gap-[70px]`}
//         >
//           <div className="flex flex-col md:flex-row justify-center gap-[70px] montserrat-med uppercase">
//             <Link href="/">Home</Link>
//             <Link href="/about">About Us</Link>
//             <Link href="/products">Products</Link>
//           </div>
//           <div className="flex items-center">
//             {isLoggedIn ? (
//               <a
//                 onClick={() => logout()}
//                 className="hover:text-red-500 cursor-pointer"
//               >
//                 Sign Out
//               </a>
//             ) : (
//               <>
//                 <Link href="/your-cart">
//                   <CartIcon />
//                 </Link>
//                 <Link href="/login">Login</Link>
//                 {/* Uncomment or add as needed */}
//                 {/* <Link href="/signup"><a>Signup</a></Link> */}
//               </>
//             )}
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;
