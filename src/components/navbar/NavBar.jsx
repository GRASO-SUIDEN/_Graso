import { useEffect, useState } from "react";
import { FiAlignCenter } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import NavList from "./NavList";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(
    function () {
      const handleScroll = () => {
        if (isOpen) {
          setIsOpen(false);
        }
      };

      const handleClickOutside = (e) => {
        if (e.target.closest("svg") || e.target.closest("nav")) return;
        setIsOpen(false);
      };
      window.addEventListener("scroll", handleScroll);
      window.addEventListener("click", handleClickOutside);

      return () => {
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("click", handleClickOutside);
      };
    },
    [isOpen]
  );

  return (
    <nav className="flex items-center fixed top-0 left-0 justify-between px-8 py-4 w-full bg-white bg-opacity-70 backdrop-blur-md z-50 font-[Montserrat]">
      <div className="flex-shrink-0">
        <h1 className="text-2xl text-[#24C2A5] font-bold">Graso</h1>
      </div>

      <div
        className={`h-full flex-grow flex justify-center max-md:fixed max-md:top-0 max-md:left-0 w-full max-md:h-[50vh] max-md:bg-[#f5f5f5] max-sm:h-full max-md:transform max-md:transition-transform max-md:duration-300 max-md:-z-[5]  ${
          isOpen
            ? "translate-y-0 opacity-100 max-md:backdrop-blur-md max-md:bg-opacity-90"
            : "max-md:-translate-y-[1000%]"
        }`}
      >
        <ul className="flex space-x-8 text-lg max-md:flex max-md:flex-col max-md:justify-center max-md:items-center max-md:w-full max-md:space-x-0 max-md:space-y-4 max-md:mt-10">
          <NavList navLink="Home" path="/" />
          <NavList navLink="Explore" path="/app" />
          <NavList navLink="Portfolio" path="/portfolio" />
          <NavList navLink="Whitepaper" path="/whitepaper" />
          <NavList navLink="About Us" path="/about-us" />
        </ul>
      </div>

      <div className="max-md:flex max-md:-space-x-4 max-sm:space-x-0 max-sm:justify-end max-sm:-mr-8">
        <button className="bg-[#24C2A5] text-white px-4 py-2 rounded-md font-semibold max-md:ml-10 active:scale-90 hover:border-solid hover:bg-white hover:text-[#24C2A5] transition-all duration-300 max-sm:hidden">
          <Link to="/app">Get started</Link>
        </button>

        <button
          className="z-10 text-center hidden max-md:flex max-md:justify-center max-md:items-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX size={30} /> : <FiAlignCenter size={30} />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
