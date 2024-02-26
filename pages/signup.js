import React, { useState } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../context/AuthContext";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const router = useRouter();

  const { signup, error } = useAuth(); // Destructure the signup function and potential error state from useAuth

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await signup(email, password, username); // Use the signup function from AuthContext
      router.push("/"); // Redirect to the homepage or dashboard after successful signup
    } catch (error) {
      console.error("Registration failed:", error.message);
      // Optionally handle errors, e.g., showing an error message from the AuthContext
    }
  };

  return (
    <form onSubmit={handleSignUp}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Sign Up</button>
      {error && <p>{error}</p>}{" "}
      {/* Display error message if there is an error */}
    </form>
  );
};

export default SignUp;
