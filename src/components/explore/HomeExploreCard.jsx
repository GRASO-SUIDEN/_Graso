import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import sui from "../../../src/assets/sui.png";
import Timer from "../Timer";
import { ConnectButton } from "@mysten/dapp-kit";

const truncateDescription = (text, limit = 100) => {
  if (!text) return "";
  return text.length > limit ? text.substring(0, limit) + "..." : text;
};

const HomeExploreCard = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMapModalOpen, setIsMapModalOpen] = useState(false);
  const [isShowingFullDescription, setIsShowingFullDescription] = useState(false);
  const [contributionAmount, setContributionAmount] = useState("");
  const [isAvailable, setIsAvailable] = useState(false);

  const modalRef = useRef(null);
  const isHome = true;

  const toggleModal = () => setIsModalOpen(!isModalOpen);
  const toggleMapModal = () => setIsMapModalOpen(!isMapModalOpen);


  return (
    <div className="flex flex-col justify-between rounded-t-[2.1rem] rounded-b-3xl bg-[#24C2A5] w-[20rem] h-[32rem] space-y-1 min-w-[250px]">
      <div className="bg-white rounded-b-3xl rounded-t-[2rem] flex-grow overflow-hidden">
        <div className="p-4 w-full h-full flex flex-col justify-between">
          <img
            src={"../../src/assets/exploreCardImg.svg"}
            className="w-full h-40 object-cover rounded-[30px] "
            alt={data.name}
          />
          <div className="flex-grow">
            <h1 className="font-bold pt-4 text-2xl">{data.name}</h1>
                 <h2 className="text-gray-400 text-xs ">{`Longitude: ${data.coordinates.lng}`}</h2>
            <h2 className="text-gray-400 text-xs">{`Latitude: ${data.coordinates.lat}`}</h2>

            <div className="relative mt-2">
              <div className={`relative ${isShowingFullDescription ? '' : 'h-[90px]'} overflow-hidden`}>
                <small className="text-xs">
                  {truncateDescription(data.description)}
                </small>
              </div>
            </div>
          </div>

          <div className="mt-3">
            <div className="flex justify-between items-center">
              <small>Targeted Raise</small>
              <div className="flex items-center gap-x-2">
                <img src={sui} alt="Sui" className="w-4 h-4" />
                <h2>{data.target.toLocaleString()} </h2>
              </div>
            </div>
            <progress
              max="1"
              value={data.currentAmount && data.target ? (Number(data.currentAmount) / Number(data.target)).toFixed(2) : 0}
              className="w-full"
            />
          </div>

          <button
            className="mt-4 hidden md:block bg-[#24c2a5] w-full px-4 py-2 rounded-full text-white hover:bg-white hover:text-[#24C2A5] transition-all duration-300"
            onClick={toggleMapModal}
          >
            View on Map
          </button>
          <Link
            to={`/map/${data.id}`}
            className="mt-4 md:hidden block"
            state={{ mapData: data }}
          >
            <button className="w-full bg-[#24c2a5] px-4 py-2 rounded-full text-white hover:bg-white hover:text-[#24C2A5] transition-all duration-300">
              View on Map
            </button>
          </Link>

          <div className="flex justify-between items-center gap-4 pt-4">
            <div>
              <small className="font-semibold">Min.Entry</small>
              <h1 className="text-teal-500 font-semibold">2.95 SUI</h1>
            </div>
            <button
              className="hidden md:block bg-[#24c2a5] px-4 py-2 rounded-full text-white hover:bg-white hover:text-[#24C2A5] transition-all duration-300"
              onClick={toggleModal}
            >
              INVEST
            </button>
            <Link to="/demo" className="md:hidden block">
              <button className="bg-[#24c2a5] px-4 py-2 rounded-full text-white hover:bg-white hover:text-[#24C2A5] transition-all duration-300">
                INVEST
              </button>
            </Link>
          </div>
        </div>
      </div>

      <Timer dateTimestamp={Number(data.deadline) || Date.now() + 86400000} />

      {/** MODALS */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div ref={modalRef} className="bg-white p-6 rounded-lg w-[90%] max-w-md h-[90%] overflow-y-auto">
            <h2 className="text-xl font-bold mb-4">{data.name} - Investment</h2>
            <img
              src={`https://gateway.pinata.cloud/ipfs/${data.image || ""}?pinataGatewayToken=${import.meta.env.VITE_GATEWAY_TOKEN}`}
              alt="Property"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <div className="space-y-2 text-gray-600">
              <p><strong>Location:</strong> {data.location}</p>
              <p><strong>Description:</strong> {data.description}</p>
              <p><strong>Targeted Raise:</strong> 200,000 SUI</p>
              <p><strong>Min. Entry:</strong> 2.95 SUI</p>
            </div>

            <div className="mt-6 space-y-3">
              <h3 className="font-bold text-lg">Why Invest?</h3>
              <ul className="list-disc list-inside text-gray-600">
                <li>High demand in the area</li>
                <li>Expected property value increase</li>
                <li>Eco-friendly infrastructure</li>
              </ul>
            </div>



            <div className="mt-6 flex justify-between">
              <button
                onClick={toggleModal}
                className="px-4 py-2 bg-gray-400 text-white rounded-lg"
              >
                Cancel
              </button>


                          <ConnectButton className="!bg-[#24c2a5] !hover:bg-[#1da88d] !px-4 !py-2  !text-white !rounded-lg   " connectText=" Confirm Investment" />
            </div>

            {isAvailable && (
              <div className="absolute top-[15rem] left-[10%] w-[80%] p-4 bg-[#1da88d] text-white text-center rounded-md">
                {isHome ? "Please connect wallet" : "Investment page under construction 🏗️"}
                <div
                  className="mt-2 text-lg cursor-pointer"
                  onClick={() => setIsAvailable(false)}
                >
                  X
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {isMapModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div ref={modalRef} className="bg-white p-6 rounded-lg max-w-md w-[90%]">
            <h2 className="text-xl font-bold mb-4">{data.name} - Location</h2>
            <div className="h-[400px] w-full mb-4">
              <MapContainer
                center={[data.coordinates?.lat || 0, data.coordinates?.lng || 0]}
                zoom={13}
                scrollWheelZoom={false}
                style={{ height: "100%", width: "100%" }}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org">OpenStreetMap</a>'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[data.coordinates?.lat || 0, data.coordinates?.lng || 0]}>
                  <Popup>
                    {data.name}
                    <br />
                    {data.coordinates?.lat}, {data.coordinates?.lng}
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
            <button
              className="px-4 py-2 bg-[#24c2a5] text-white rounded-lg w-full hover:bg-[#1da88d]"
              onClick={toggleMapModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeExploreCard;
