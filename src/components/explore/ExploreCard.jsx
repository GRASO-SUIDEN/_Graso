import { useState, useEffect, useRef } from "react";
import Timer from "../Timer";
import landsite from "../../assets/landsite.jpg";
import sui from "../../assets/sui.png";

export default function ExploreCard({ data }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);

  
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  
  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setIsModalOpen(false);
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.pointerEvents = "none"; 
      document.body.style.overflow = "hidden"; 
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.pointerEvents = ""; 
      document.body.style.overflow = ""; 
    }
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen]);

  return (
    <div className="flex flex-col justify-between rounded-t-[2.1rem] rounded-b-3xl bg-[#24C2A5] w-[20rem] h2rem] space-y-1 min-w-[250px]">
      <div className="bg-white rounded-b-3xl rounded-t-[2rem] flex-grow overflow-hidden">
        <div className="p-4 w-full h-full flex flex-col justify-between">
          <img src={landsite} className="w-full h-40 object-cover" />
          <div className="flex-grow">
            <h1 className="font-bold pt-4 text-2xl">{data?.name}</h1>
            <h2 className="text-gray-400">{data?.location}</h2>
            <small className="font-sans leading-1 text-xs font-small">
              {data?.description}
            </small>
          </div>

          <div className="mt-3">
            <div className="flex justify-between items-center">
              <small>Targeted Raise</small>
              <div className="flex mb-2 items-center gap-x-2">
                <img src={sui} alt="Sui" className="w-[1rem] h-[1rem]" />
                <h2>200,000</h2>
              </div>
            </div>
            <progress max="15" value="7.5" />
          </div>

          <div className="flex justify-between items-center gap-4 pt-4">
            <div>
              <small className="font-semibold">Min.Entry</small>
              <h1 className="text-teal-500 font-semibold">2.95 SUI</h1>
            </div>
            {/* Invest button triggers modal */}
            <button
              className="bg-[#24c2a5] w-auto px-4 py-2 rounded-full text-white hover:border-solid hover:bg-white hover:text-[#24C2A5] transition-all duration-300"
              onClick={toggleModal}
            >
              INVEST
            </button>
          </div>
        </div>
      </div>
      <Timer />

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div
            ref={modalRef}
            className="bg-white p-8 rounded-lg shadow-lg w-[90%] max-w-md h-[90%] overflow-y-auto"
            style={{ pointerEvents: "auto" }}
          >
            <h2 className="text-xl font-bold mb-4">{data?.name} - Investment</h2>
            <img src={landsite} alt="Property" className="w-full h-40 object-cover rounded-lg mb-4" />

            {/* Property Details */}
            <div className="space-y-2">
              <p className="text-gray-600">
                <strong>Location:</strong> {data?.location}
              </p>
              <p className="text-gray-600">
                <strong>Description:</strong> {data?.description}
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
                onClick={toggleModal}
              >
                Cancel
              </button>
              <button className="px-4 py-2 bg-[#24c2a5] text-white rounded-lg hover:bg-[#1da88d]">
                Confirm Investment
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
