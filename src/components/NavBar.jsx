import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 px-5 py-1 fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">Brand</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <a href="#home" className="text-white hover:text-gray-300">
            Home
          </a>
          <a href="#about" className="text-white hover:text-gray-300">
            Explore
          </a>
          <a href="#services" className="text-white hover:text-gray-300">
            Portfolio
          </a>
          <a href="#contact" className="text-white hover:text-gray-300">
            Whitepaper
          </a>
          <a href="#about" className="text-white hover:text-gray-300">
            About us
          </a>
        </div>

        {/* Button */}
        <div className="py-2">
          <button className="bg-[#24C2A5] text-white px-4 py-2 rounded-md font-semibold w-full">
            Get started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-blue-500 overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-60" : "max-h-0"
        }`}
      >
        <a href="#home" className="block text-white py-2">
          Home
        </a>
        <a href="#about" className="block text-white py-2">
          About
        </a>
        <a href="#services" className="block text-white py-2">
          Services
        </a>
        <a href="#contact" className="block text-white py-2">
          Contact
        </a>
        <a href="#about" className="text-white hover:text-gray-300">
          About us
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
