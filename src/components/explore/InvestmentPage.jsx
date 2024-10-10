import React from "react";
import landsite from "../../assets/landsite.jpg"; 
import sui from "../../assets/sui.png"; 

export default function InvestmentPage({ data }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4"> 
      <div className="bg-white p-8 rounded-lg shadow-lg w-[90%] max-w-md h-auto overflow-y-auto">
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

        {/* Modal Actions */}
        <div className="mt-6 flex justify-between gap-4">
          <button
            className="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500"
            onClick={() => window.history.back()} // Navigate back to the previous page
          >
            Cancel
          </button>
          <button className="px-4 py-2 bg-[#24c2a5] text-white rounded-lg hover:bg-[#1da88d]">
            Confirm Investment
          </button>
        </div>
      </div>
    </div>
  );
}
