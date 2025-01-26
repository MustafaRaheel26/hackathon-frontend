import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import PrimaryBtn from "../Components/PrimaryBtn";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState(""); // To display success or error messages
  const [loading, setLoading] = useState(false); // Loading state
  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(""); // Clear previous messages

    try {
      const response = await fetch(
        "https://related-philis-muhammmad-mustafa-97182c5e.koyeb.app/api/users/register",
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
        setMessage("Sign-up successful! Redirecting to login...");
        console.log("Sign-up successful:", result);

        // Navigate to the login page after a small delay
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      } else {
        setMessage(result.message || "Sign-up failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during API call:", error);
      setLoading(false);
      setMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div className="py-10 flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full sm:w-96">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
          Sign Up
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Username Input */}
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center items-center">
            <PrimaryBtn
              BtnText={loading ? "Signing Up..." : "Sign Up"}
              additinalClasses={`duration-300 hover:scale-105 ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-customGreen hover:bg-green-700"
              }`}
              handleBtn={handleSubmit}
              disabled={loading}
            />
          </div>
        </form>

        {/* Feedback Message */}
        {message && (
          <div
            className={`mt-4 p-2 text-center text-sm font-semibold rounded ${
              message.includes("successful")
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {message}
          </div>
        )}

        {/* Additional Links */}
        <div className="mt-4 text-sm text-center text-gray-600">
          <p>
            Already have an account?{" "}
            <a href="/login" className="text-customGreen hover:underline">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
