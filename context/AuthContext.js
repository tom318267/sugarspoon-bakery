import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  // Rehydrate user state from local storage on initial load
  useEffect(() => {
    const token = localStorage.getItem("token");
    // Here, you might also want to verify the token's validity with your backend and fetch user details
    if (token) {
      setUser({ token }); // Adjust according to what information you decide to store/retrieve
    }
  }, []);

  const login = async (email, password) => {
    setError("");
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("token", data.token);
        setUser({ email, token: data.token }); // Store additional user details as needed
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      setError(error.message);
      console.error("Login error:", error.message);
    }
  };

  const signup = async (email, password, username) => {
    setError("");
    try {
      const signupResponse = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, username }),
      });

      const signupData = await signupResponse.json();

      if (signupResponse.ok) {
        // Automatically log in the user after successful signup
        await login(email, password);
        console.log("Signup successful", signupData);
      } else {
        throw new Error(signupData.message);
      }
    } catch (error) {
      setError(error.message);
      console.error("Signup error:", error.message);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    setError("");
  };

  const value = { user, login, logout, signup, error };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
