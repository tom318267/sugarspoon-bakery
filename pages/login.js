import React, { useState } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { login, error } = useAuth(); // Destructure login function and potentially error state from useAuth

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(email, password); // Use login function from context
      router.push("/"); // Redirect on successful login
    } catch (error) {
      // Optionally handle errors, e.g., showing an error message
      // Error handling could be implemented using the error state from useAuth
      console.error("Login failed:", error.message);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit">Login</button>
      {error && <p>{error}</p>} {/* Display error message if login fails */}
    </form>
  );
};

export default Login;
