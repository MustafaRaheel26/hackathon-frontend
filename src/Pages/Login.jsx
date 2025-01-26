import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import PrimaryBtn from "../Components/PrimaryBtn";
import { motion } from "framer-motion"; // Import framer-motion for animations

const LoginScreen = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState(""); // For feedback messages
  const [loading, setLoading] = useState(false); // Loading state
  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(""); // Clear any previous messages

    try {
      const response = await fetch(
        "https://related-philis-muhammmad-mustafa-97182c5e.koyeb.app/api/users/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();
      setLoading(false);

      if (response.ok) {
        setMessage("Login successful! Redirecting to home...");
        console.log("Login successful:", result);

        // Navigate to the Home page after a small delay
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        setMessage(result.message || "Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("Error during API call:", error);
      setLoading(false);
      setMessage("An error occurred. Please try again.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen bg-gradient-to-r from-blue-400 to-white flex items-center justify-center"
    >
      <motion.div
        className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96 max-w-md"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl font-semibold text-center text-blue-600 mb-6">
          Login
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <motion.input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-2 block w-full px-4 py-3 border-2 border-blue-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
            />
          </div>

          {/* Password Input */}
          <div className="mb-5">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <motion.input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-2 block w-full px-4 py-3 border-2 border-blue-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center items-center">
            <PrimaryBtn
              BtnText={loading ? "Logging In..." : "Login"}
              additinalClasses={`duration-300 hover:scale-105 ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-700"}`}
              handleBtn={handleSubmit}
              disabled={loading}
            />
          </div>
        </form>

        {/* Feedback Message */}
        {message && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            className={`mt-4 p-2 text-center text-sm font-semibold rounded ${message.includes("successful") ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}
          >
            {message}
          </motion.div>
        )}

        {/* Additional Links */}
        <div className="mt-4 text-sm text-center text-gray-600">
          <p>
            Don't have an account?{" "}
            <a href="/sign-up" className="text-blue-500 hover:underline">
              Sign Up
            </a>
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default LoginScreen;
