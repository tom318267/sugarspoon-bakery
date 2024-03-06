import { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useAuth } from "../context/AuthContext";
import CartIcon from "./CartIcon";
import Image from "next/image";
import { motion } from "framer-motion";

const Header = () => {
  const { user, logout } = useAuth();
  const isLoggedIn = !!user; // Correctly assess the login state

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
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-text_color focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accent">
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
                  href="contact-us"
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
                className="block px-3 py-2 rounded-md montserrat-med text-base font-medium text-text_color hover:bg-accent hover:text-white"
              >
                HOME
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/products"
                className="block px-3 py-2 rounded-md montserrat-med text-base font-medium text-text_color hover:bg-accent hover:text-white"
              >
                PRODUCTS
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/contact-us"
                className="block px-3 py-2 rounded-md montserrat-med text-base font-medium text-text_color hover:bg-accent hover:text-white"
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
