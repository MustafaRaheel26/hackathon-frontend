import React from "react";
import PrimaryBtn from "../Components/PrimaryBtn";
import { motion } from "framer-motion";

const HowItWorks = () => {
  return (
    <div className="container mx-auto py-16">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl font-bold text-blue-700 mb-4">How It Works</h2>
        <p className="text-lg text-gray-700">
          Learn about the simple process of how our microfinance program works to empower individuals and transform lives.
        </p>
      </motion.div>

      {/* Process Steps */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-6">
        <motion.div
          className="p-6 bg-white shadow-lg rounded-lg hover:shadow-2xl transition duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-xl font-semibold text-blue-700 mb-4">Step 1: Application</h3>
          <p className="text-gray-600">
            The first step is to apply for a loan through our easy-to-fill-out online form. We require basic details about the applicant and their business plan.
          </p>
        </motion.div>

        <motion.div
          className="p-6 bg-white shadow-lg rounded-lg hover:shadow-2xl transition duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-xl font-semibold text-blue-700 mb-4">Step 2: Evaluation</h3>
          <p className="text-gray-600">
            Once the application is submitted, our team evaluates the application to determine the feasibility of the business and the potential impact of the loan.
          </p>
        </motion.div>

        <motion.div
          className="p-6 bg-white shadow-lg rounded-lg hover:shadow-2xl transition duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-xl font-semibold text-blue-700 mb-4">Step 3: Approval & Disbursement</h3>
          <p className="text-gray-600">
            If approved, the loan amount is disbursed directly to the applicant. They can now use the funds to improve their business or education.
          </p>
        </motion.div>

        <motion.div
          className="p-6 bg-white shadow-lg rounded-lg hover:shadow-2xl transition duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-xl font-semibold text-blue-700 mb-4">Step 4: Repayment</h3>
          <p className="text-gray-600">
            The borrower repays the loan in easy installments over a period. The repayments help fund other loans for future borrowers, sustaining the cycle.
          </p>
        </motion.div>

        <motion.div
          className="p-6 bg-white shadow-lg rounded-lg hover:shadow-2xl transition duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-xl font-semibold text-blue-700 mb-4">Step 5: Impact</h3>
          <p className="text-gray-600">
            The loan helps the borrower improve their business, contribute to the community, and create more job opportunities. This cycle empowers more individuals in need.
          </p>
        </motion.div>
      </div>

      {/* Call to Action Button */}
      <div className="text-center mt-12">
        <PrimaryBtn
          routLink="/donate"
          BtnText="Donate Now"
          additinalClasses="bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-lg"
        />
      </div>
    </div>
  );
};

export default HowItWorks;
