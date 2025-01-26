import React from "react";

const DetailSection = ({ image, heading, description }) => {
  return (
    <section className="py-16 bg-white text-gray-800">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 transition-transform transform hover:scale-105">
        {/* Left Image */}
        <div className="flex-1 overflow-hidden rounded-lg shadow-lg transition-all duration-500 hover:scale-105">
          <img
            src={image}
            alt={heading}
            className="w-full h-full object-cover transition-all duration-500 transform hover:scale-110"
          />
        </div>

        {/* Right Text */}
        <div className="flex-1 text-gray-700">
          <h2 className="text-4xl font-semibold mb-6 text-blue-600 transition-all duration-500 ease-in-out transform hover:translate-x-4">
            {heading}
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed transition-all duration-500 hover:text-gray-800">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default DetailSection;
