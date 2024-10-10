import React, { useState, useEffect } from "react";
import landsite from "../../assets/landsite.jpg"; 
import sui from "../../assets/sui.png"; 
import { useLocation, useNavigate } from "react-router-dom";
import { ConnectButton, useCurrentAccount } from "@mysten/dapp-kit";

export default function InvestmentPage({ data }) {
  const [isAvailable, setIsAvailable] = useState(false);
  const location = useLocation();
  const currentAccount = useCurrentAccount();
  const navigate = useNavigate();

  // Check if the previous route is the homepage
  const previousRoute = location.state?.from;  // Access the 'from' state passed during navigation
  const isHomePage = previousRoute === '/';

  useEffect(() => {
    if (currentAccount) {
      navigate("/app");
    }
  }, [currentAccount, navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 "> 
      <div className="bg-white p-8 rounded-lg shadow-lg w-[90%] max-w-md h-auto overflow-y-auto relative">
        <h2 className="text-xl font-bold mb-4">{data?.name || "Property Name"}</h2>
        <img src={landsite} alt="Property" className="w-full h-40 object-cover rounded-lg mb-4" />

        {/* Property Details */}
        <div className="space-y-2">
          <p className="text-gray-600">
            <strong>Location:</strong> {data?.location || "Sample Location"}
          </p>
          <p className="text-gray-600">
            <strong>Description:</strong> {data?.description || "Sample property description."}
          </p>
          <p className="text-gray-600">
            <strong>Targeted Raise:</strong> 200,000 SUI
          </p>
          <p className="text-gray-600">
            <strong>Min. Entry:</strong> 2.95 SUI
          </p>
        </div>

        {/* Reasons to Invest */}
        <div className="mt-6 space-y-3">
          <h3 className="font-bold text-lg">Why Invest?</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>High demand in the area for residential properties.</li>
            <li>Expected rise in property value over the next few years.</li>
            <li>Environmentally friendly construction with green energy systems.</li>
          </ul>
        </div>

        <span className="relative">
          <h1>Price:</h1>
          <input
            type="text"
            placeholder="Price"
            style={{
              width: "100%",
              backgroundColor: "#e5e7eb",
              padding: "10px 18px",
              borderRadius: "4px",
              outline: "none",
              border: "none",
              textAlign: "left"
            }}
          />
          <img src={sui} alt="Sui" className="w-[1.5rem] h-[1.5rem] absolute right-1 top-[2rem]" />
        </span>

        {/* Modal Actions */}
        <div className="mt-6 flex justify-between gap-4">
          <button
            className="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500"
            onClick={() => window.history.back()} // Navigate back to the previous page
          >
            Cancel
          </button>
          {!isHomePage ? (
            <button className="px-4 py-2 bg-[#24c2a5] text-white rounded-lg hover:bg-[#1da88d]" onClick={() => setIsAvailable(true)}>
              Confirm Investment
            </button>
          ) : (
            <div className="buttonInvest">
              <ConnectButton connectText="Confirm Investment" />
            </div>
          )}
        </div>

        {isAvailable && (
          <div className="w-[80%] h-[10rem] absolute top-[15rem] left-[10%] drop-shadow-md rounded-md z-50 bg-[#1da88d] text-white text-xl font-semibold p-4 text-center justify-center flex flex-col">
            <div
              className="w-[2rem] h-[2rem] rounded-full bg-red-700 text-white font-bold text-2xl flex justify-center items-center mb-[2rem] cursor-pointer"
              onClick={() => setIsAvailable(false)}
            >
              X
            </div>
            Investment still under construction 🏗️
          </div>
        )}
      </div>
    </div>
  );
}
