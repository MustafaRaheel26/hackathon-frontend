import React from "react";
import { Link } from "react-router-dom";

const PrimaryBtn = ({ handleBtn, routLink, additinalClasses, BtnText }) => {
  return (
    <Link to={routLink}>
      <div
        onClick={handleBtn}
        className={`${
          additinalClasses
        } py-3 px-6 rounded-md text-white font-semibold transition-all duration-300 transform ease-in-out hover:scale-105 hover:bg-blue-700 hover:shadow-lg shadow-md focus:ring-4 focus:ring-blue-300`}
      >
        {BtnText}
      </div>
    </Link>
  );
};

export default PrimaryBtn;
