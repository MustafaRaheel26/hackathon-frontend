import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const loanCategories = {
  "Wedding Loans": {
    subcategories: ["Valima", "Furniture", "Valima Food", "Jahez"],
    maxLoan: 500000,
    loanPeriod: "3 years",
  },
  "Home Construction Loans": {
    subcategories: ["Structure", "Finishing", "Furnishing"],
    maxLoan: 1000000,
    loanPeriod: "5 years",
  },
  "Business Startup Loans": {
    subcategories: [
      "Buy Stall",
      "Advance Rent for Shop",
      "Shop Assets",
      "Shop Machinery",
    ],
    maxLoan: 1000000,
    loanPeriod: "5 years",
  },
  "Education Loans": {
    subcategories: ["University Fees", "Child Fees Loan"],
    maxLoan: "Based on requirement",
    loanPeriod: "4 years",
  },
};

const DynamicLoanForm = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    cnic: "",
    subcategory: "",
    amount: "",
    guarantors: [{ name: "", cnic: "" }],
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isCnicValid, setIsCnicValid] = useState(true);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Function to check if the CNIC has already been used for a loan application
  const checkExistingLoan = async (cnic) => {
    try {
      const response = await fetch(
        `https://related-philis-muhammmad-mustafa-97182c5e.koyeb.app/api/loans/check-existing-loan/${cnic}`
      );
      const result = await response.json();
      return response.ok && result.exists;
    } catch (error) {
      console.error("Error checking CNIC:", error);
      return false;
    }
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setFormData((prev) => ({
      ...prev,
      subcategory: "",
      amount: "",
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleGuarantorChange = (index, field, value) => {
    const updatedGuarantors = [...formData.guarantors];
    updatedGuarantors[index][field] = value;
    setFormData((prev) => ({ ...prev, guarantors: updatedGuarantors }));
  };

  const addGuarantor = () => {
    if (formData.guarantors.length < 2) {
      setFormData((prev) => ({
        ...prev,
        guarantors: [...prev.guarantors, { name: "", cnic: "" }],
      }));
    }
  };

  const removeGuarantor = () => {
    if (formData.guarantors.length > 1) {
      setFormData((prev) => ({
        ...prev,
        guarantors: prev.guarantors.slice(0, -1),
      }));
    }
  };

  // Effect to check CNIC before form submission
  useEffect(() => {
    const checkCnicEligibility = async () => {
      if (formData.cnic) {
        const isEligible = await checkExistingLoan(formData.cnic);
        if (isEligible) {
          setIsCnicValid(false);
          setMessage("You are not eligible for a loan, as you already have an existing loan.");
        } else {
          setIsCnicValid(true);
          setMessage(""); // Clear the message when CNIC is valid
        }
      }
    };

    checkCnicEligibility();
  }, [formData.cnic]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    if (!isCnicValid) {
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(
        "https://related-philis-muhammmad-mustafa-97182c5e.koyeb.app/api/loans/submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();

      if (response.ok) {
        setMessage("Your loan application has been successfully submitted!");
        setFormData({
          name: "",
          cnic: "",
          subcategory: "",
          amount: "",
          guarantors: [{ name: "", cnic: "" }],
        });
        setFormSubmitted(true); // Mark form as submitted
        console.log("Form Data Submitted:", formData); // Log submitted data to console
      } else {
        setMessage(result.message || "Failed to submit the application.");
        console.error("Submission failed:", result);
      }
    } catch (error) {
      console.error("Error submitting loan application:", error);
      setMessage("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const selectedLoanDetails = loanCategories[selectedCategory] || {};

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="min-h-screen bg-gradient-to-r from-blue-400 to-white w-full flex items-center justify-center"
    >
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">
          Dynamic Loan Application
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Category Select */}
          <div className="mb-5">
            <label
              htmlFor="category"
              className="block text-sm font-semibold text-gray-700"
            >
              Select Loan Category
            </label>
            <motion.select
              id="category"
              name="category"
              value={selectedCategory}
              onChange={handleCategoryChange}
              className="mt-2 block w-full px-5 py-3 border-2 border-blue-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              <option value="">Select a category</option>
              {Object.keys(loanCategories).map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </motion.select>
          </div>

          {selectedCategory && (
            <>
              {/* Subcategories */}
              <div className="mb-5">
                <label
                  htmlFor="subcategory"
                  className="block text-sm font-semibold text-gray-700"
                >
                  Loan Subcategory
                </label>
                <motion.select
                  id="subcategory"
                  name="subcategory"
                  value={formData.subcategory}
                  onChange={handleChange}
                  className="mt-2 block w-full px-5 py-3 border-2 border-blue-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.7 }}
                >
                  <option value="">Select a subcategory</option>
                  {selectedLoanDetails.subcategories?.map((subcategory) => (
                    <option key={subcategory} value={subcategory}>
                      {subcategory}
                    </option>
                  ))}
                </motion.select>
              </div>

              {/* Loan Amount */}
              <div className="mb-5">
                <label
                  htmlFor="amount"
                  className="block text-sm font-semibold text-gray-700"
                >
                  Loan Amount (
                  {selectedLoanDetails.maxLoan !== "Based on requirement"
                    ? `Max: PKR ${selectedLoanDetails.maxLoan.toLocaleString()}`
                    : "Based on requirement"
                  })
                </label>
                <motion.input
                  type="number"
                  id="amount"
                  name="amount"
                  value={formData.amount}
                  onChange={handleChange}
                  max={
                    selectedLoanDetails.maxLoan !== "Based on requirement"
                      ? selectedLoanDetails.maxLoan
                      : undefined
                  }
                  className="mt-2 block w-full px-5 py-3 border-2 border-blue-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter loan amount"
                  required
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.7 }}
                />
              </div>

              {/* Guarantors */}
              <div className="mb-5">
                <h3 className="text-xl font-semibold text-gray-700">Guarantor Information</h3>
                {formData.guarantors.map((guarantor, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mb-4"
                  >
                    <label
                      htmlFor={`guarantorName-${index}`}
                      className="block text-sm font-semibold text-gray-700"
                    >
                      Guarantor {index + 1} Name
                    </label>
                    <input
                      type="text"
                      id={`guarantorName-${index}`}
                      value={guarantor.name}
                      onChange={(e) =>
                        handleGuarantorChange(index, "name", e.target.value)
                      }
                      className="mt-2 block w-full px-5 py-3 border-2 border-blue-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                    <label
                      htmlFor={`guarantorCnic-${index}`}
                      className="block text-sm font-semibold text-gray-700 mt-3"
                    >
                      Guarantor {index + 1} CNIC
                    </label>
                    <input
                      type="text"
                      id={`guarantorCnic-${index}`}
                      value={guarantor.cnic}
                      onChange={(e) =>
                        handleGuarantorChange(index, "cnic", e.target.value)
                      }
                      className="mt-2 block w-full px-5 py-3 border-2 border-blue-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </motion.div>
                ))}
                <div className="flex gap-4">
                  <motion.button
                    type="button"
                    onClick={addGuarantor}
                    disabled={formData.guarantors.length >= 2}
                    className="py-2 px-5 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:opacity-50"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Add Guarantor
                  </motion.button>
                  <motion.button
                    type="button"
                    onClick={removeGuarantor}
                    disabled={formData.guarantors.length <= 1}
                    className="py-2 px-5 bg-red-500 text-white rounded-md hover:bg-red-600 disabled:opacity-50"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Remove Guarantor
                  </motion.button>
                </div>
              </div>

              {/* Loan Period */}
              <div className="mb-5">
                <label
                  htmlFor="period"
                  className="block text-sm font-semibold text-gray-700"
                >
                  Loan Period: {selectedLoanDetails.loanPeriod}
                </label>
              </div>
            </>
          )}

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={loading || !isCnicValid || formSubmitted}
            className="w-full py-3 px-6 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 disabled:opacity-50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {loading ? "Submitting..." : "Apply"}
          </motion.button>
        </form>

        {/* Message */}
        {message && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`mt-6 text-center ${
              message.includes("success") ? "text-green-600" : "text-red-600"
            }`}
          >
            {message}
          </motion.p>
        )}
      </div>
    </motion.div>
  );
};

export default DynamicLoanForm;
