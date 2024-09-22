import { FiAlignCenter } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center fixed top-0 left-0 justify-between px-8 py-4 w-full bg-white bg-opacity-70 backdrop-blur-md z-50 font-[Montserrat]">
      <div className="flex-shrink-0">
        <h1 className="text-2xl text-[#24C2A5] font-bold">Graso</h1>
      </div>

      <div
        className={`h-full flex-grow flex justify-center max-md:fixed max-md:top-0 max-md:left-0 w-full max-md:h-[50vh] max-md:bg-white max-sm:h-full max-md:transform max-md:transition-transform max-md:duration-300 max-md:-z-[5] ${
          isOpen ? "translate-y-0 opacity-100" : "max-md:-translate-y-full"
        }`}
      >
        <ul className="flex space-x-8 text-lg max-md:flex max-md:flex-col max-md:justify-center max-md:items-center max-md:w-full max-md:space-x-0 max-md:space-y-4 max-md:mt-10">
          {["Home", "Explore", "Portfolio", "Whitepaper", "About Us"].map(
            (item) => (
              <li
                key={item}
                className="relative  cursor-pointer group select-none max-md:w-[7rem] max-md:text-center max-md:hover:bg-[#24C2A5] max-md:hover:text-white max-md:hover:rounded-md"
              >
                {item}
                <span className="max-md:hidden absolute left-0 bottom-0 w-0 h-[3px] bg-[#24C2A5] transition-all duration-300 group-hover:w-full" />
              </li>
            )
          )}
        </ul>
      </div>

      <div className="max-md:flex max-md:-space-x-4">
        <button className="bg-[#24C2A5] text-white px-4 py-2 rounded-md font-semibold max-md:ml-10 active:scale-90 hover:border-solid hover:bg-white hover:text-[#24C2A5] transition-all duration-300">
          Get started
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
