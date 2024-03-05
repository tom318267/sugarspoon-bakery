import React, { useState } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../context/AuthContext";
import Image from "next/image";
import Link from "next/link";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const router = useRouter();
  const { signup, error } = useAuth();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await signup(email, password, username);
      router.push("/dashboard"); // Redirect to a post-signup page, e.g., a dashboard
    } catch (error) {
      console.error("Signup failed:", error.message);
    }
  };

  return (
    <>
      <div className="flex h-screen flex-1 bg-white montserrat-med">
        <div className="relative w-0 flex-1 hidden lg:block">
          <Image
            src="/choccupcake.jpg"
            alt="Signup background"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <h2 className="text-3xl playfair-display font-bold leading-9 tracking-tight text-gray-900">
              Create your account
            </h2>
            <form onSubmit={handleSignUp} className="mt-10 space-y-6">
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  required
                  className="block w-full mt-2 rounded-md border-0 px-2 py-1.5 shadow-sm ring-1 focus:outline-none focus:ring-2 focus:ring-blue-500 ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full mt-2 rounded-md border-0 px-2 py-1.5 shadow-sm ring-1 focus:outline-none focus:ring-2 focus:ring-blue-500 ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  className="block w-full mt-2 rounded-md border-0 px-2 py-1.5 shadow-sm ring-1 focus:outline-none focus:ring-2 focus:ring-blue-500 ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-accent px-4 py-2 text-white shadow-sm hover:bg-[#D1775D] focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Sign Up
              </button>
              <p className="text-center mt-8">
                Already a member?{" "}
                <Link className="text-accent" href="/login">
                  Sign In
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
