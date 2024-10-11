import { useEffect, useState } from "react";
import { ConnectButton, useCurrentAccount } from "@mysten/dapp-kit";
import { useNavigate } from "react-router-dom";
import { FiX, FiAlignCenter } from "../../utils/icons";
import NavList from "./NavList";
import grasoLogo from "../../assets/grasoLogo.png";

function Navbar() {
  const currentAccount = useCurrentAccount();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (currentAccount) {
      navigate("/app");
    }
  }, [currentAccount, navigate]);

  useEffect(() => {
    async function sign() {
      const dats = {
        wallet:
          "0x7b299e438e7312e14507a2dbda2bee64231755e3fbb6a218ba7d26f2751a83d2",
        nonce:
          "8c56081b2c2f6dfb11d8c1f45ad9753bc2ad72f3d0263f7d7320266166dc1520",
        signature:
          "0x7b299e438e7312e14507a2dbda2bee64231755e3fbb6a218ba7d26f2751a83d2",
      };
      const res = await fetch(
        "https://web-production-6417.up.railway.app/verify_signature",
        {
          method: "POST",
          body: JSON.stringify(dats),
        }
      );
      const data = await res.json();
      console.log(data);
    }
    sign();
  }, []);

  useEffect(() => {
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
  }, [isOpen]);

  return (
    <nav className="flex items-center fixed top-0 left-0 justify-between px-8 py-4 w-full bg-white bg-opacity-70 backdrop-blur-md z-50 font-[Montserrat]">
      <div className="logo w-[150px]">
        <img
          src={grasoLogo}
          alt="Graso Logo"
          style={{ width: 100, height: 45 }}
        />
      </div>
      <div
        className={`h-full flex-grow flex justify-center max-md:fixed max-md:top-0 max-md:left-0 w-full max-md:h-[50vh] max-md:bg-[#f5f5f5] max-sm:h-full max-md:transform max-md:transition-transform max-md:duration-300 max-md:-z-[5] ${
          isOpen
            ? "translate-y-0 opacity-100 max-md:backdrop-blur-md max-md:bg-opacity-90"
            : "max-md:-translate-y-[1000%]"
        }`}
      >
        <ul className="flex space-x-8 text-lg max-md:flex max-md:flex-col max-md:justify-center max-md:items-center max-md:w-full max-md:space-x-0 max-md:space-y-4 max-md:mt-10">
          <NavList navLink="Home" path="/" />
          <NavList navLink="Explore" path="/explore" />
          <NavList navLink="Portfolio" path="/portfolio" />
          <NavList navLink="Whitepaper" path="https://graso.gitbook.io/graso" />
          <NavList navLink="About Us" path="/about-us" />
          <div className="custom-connect-button hidden max-sm:block">
            <ConnectButton connectText="Get started" />
          </div>
        </ul>
      </div>
      <div className="max-md:flex max-sm:justify-end max-md:space-x-5">
        <div className="custom-connect-button max-sm:hidden">
          <ConnectButton connectText="Get started" />
        </div>
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
