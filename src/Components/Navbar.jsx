import React, { useState, useEffect } from "react";
import logo from "../../public/Logo/logo.png";
import { Link, useNavigate } from "react-router-dom";
import PrimaryBtn from "./PrimaryBtn";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { motion } from "framer-motion";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem("user"));
    if (loggedUser) {
      setUser(loggedUser);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  return (
    <>
      {/* Topbar */}
      <div className="py-4 bg-black text-white">
        <div className="container mx-auto">
          <div className="flex justify-between">
            <div className="flex gap-4">
              <div className="flex gap-2 items-center text-sm">
                <MdOutlineEmail />
                <h1>info@SaylaniWelfareUSA.com</h1>
              </div>
              <div className="flex gap-2 items-center text-sm">
                <FaPhone />
                <h1>833-786-0999</h1>
              </div>
            </div>
            <div className="flex gap-2 items-center text-sm">
              <IoLogoWhatsapp />
              <h1>+923331201585</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <motion.div
        className="z-20 sticky top-0 h-20 w-full shadow-xl flex items-center justify-center bg-gradient-to-r from-blue-400 to-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo with Home Link */}
          <Link to="/">
            <img className="w-52 h-auto cursor-pointer" src={logo} alt="Saylani Logo" />
          </Link>

          {/* Navbar Links */}
          <ul className="flex gap-5">
            <Link to="/how-it-works">
              <li className="text-blue-500 hover:text-blue-700 transition duration-300">
                How It Works
              </li>
            </Link>
            <Link to="/services">
              <li className="text-blue-500 hover:text-blue-700 transition duration-300">
                Services
              </li>
            </Link>
            <Link to="/contact-us">
              <li className="text-blue-500 hover:text-blue-700 transition duration-300">
                Contact Us
              </li>
            </Link>
            <Link to="/about-us">
              <li className="text-blue-500 hover:text-blue-700 transition duration-300">
                About Us
              </li>
            </Link>
          </ul>

          {/* Login/Logout Button */}
          <div className="flex items-center gap-4">
            {user ? (
              <>
                <motion.div
                  className="text-blue-600 text-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {user.name}
                </motion.div>
                <PrimaryBtn
                  BtnText="Logout"
                  additinalClasses="bg-red-500 hover:bg-red-700 text-white duration-300 hover:scale-105"
                  handleBtn={handleLogout}
                />
              </>
            ) : (
              <PrimaryBtn
                routLink="/login"
                BtnText="Login"
                additinalClasses="bg-customGreen hover:bg-green-700 text-white duration-300 hover:scale-105"
              />
            )}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
