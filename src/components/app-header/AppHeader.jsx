import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FiAlignCenter, FaBell, FaUser } from "../../utils/icons";
import { ConnectButton, useCurrentAccount } from "@mysten/dapp-kit";
import sui from "../../assets/sui.png";

import "./AppHeader.css";

function Header({ setIsOpen }) {
  const currentAccount = useCurrentAccount();
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentAccount) {
      console.log("Success!");
      // navigate("/");
    }
  }, [currentAccount, navigate]);

  return (
    <div className="flex items-center justify-between p-4 shadow-md">
      <div className="small-box hidden max-md:block">
        <FiAlignCenter size={30} onClick={() => setIsOpen(true)} />
      </div>

      <div className="flex-grow mx-4">
        <input
          type="text"
          placeholder="Search..."
          className="w-full p-2 border border-gray-300 rounded-lg max-sm:hidden"
        />
      </div>

      <div className="small-box mx-2">
        <img src={sui} alt="Sui" className="w-8 h-8 rounded-full" />
      </div>

      <div className="mx-4">
        <ConnectButton />
      </div>

      <div className="small-box mx-2">
        <FaBell size={20} />
      </div>

      <div className="small-box mx-2">
        <FaUser size={20} />
      </div>
    </div>
  );
}

export default Header;
