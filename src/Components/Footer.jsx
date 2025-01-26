import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 mt-12">
      <div className="container mx-auto flex flex-wrap justify-between">
        {/* Footer Left */}
        <div className="w-full md:w-1/3 text-center md:text-left mb-6 md:mb-0">
          <h2 className="text-2xl font-extrabold text-blue-500">Saylani Welfare USA</h2>
          <p className="text-sm mt-2">
            Serving humanity through accessible healthcare, education, microfinance, and more.
          </p>
        </div>

        {/* Footer Links */}
        <div className="w-full md:w-1/3 text-center mb-6 md:mb-0">
          <ul>
            <li>
              <a href="/services" className="text-blue-500 hover:text-blue-700 duration-300">Services</a>
            </li>
            <li className="mt-2">
              <a href="/about" className="text-blue-500 hover:text-blue-700 duration-300">About Us</a>
            </li>
            <li className="mt-2">
              <a href="/contact" className="text-blue-500 hover:text-blue-700 duration-300">Contact Us</a>
            </li>
          </ul>
        </div>

        {/* Footer Social Icons */}
        <div className="w-full md:w-1/3 text-center">
          <ul className="flex justify-center gap-4">
            <li>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 duration-300">
                <FaFacebookF size={20} />
              </a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 duration-300">
                <FaTwitter size={20} />
              </a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 duration-300">
                <FaInstagram size={20} />
              </a>
            </li>
            <li>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 duration-300">
                <FaLinkedinIn size={20} />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-sm mt-6">
        <p>&copy; 2025 Saylani Welfare USA. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
