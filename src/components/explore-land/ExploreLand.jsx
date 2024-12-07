import { useState, useEffect } from "react";
import { useCurrentAccount } from "@mysten/dapp-kit";
import LoadingPage from "../../pages/loading-page/LoadingPage";
import landsite from "../../assets/landsite.jpg";
import ExploreCard from "../explore/ExploreCard";
// import { exploreData } from "../../../data/exploreData";
import { getAllProperties } from "../../utils";

function ExploreLand() {
  const currentAccount = useCurrentAccount();
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      if (!currentAccount) {
        setLoading(false);
        return;
      }
      try {
        const data = await getAllProperties();
        setProperties(data);
      } catch (error) {
        console.log("error fetching projects", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, [currentAccount]);

  if(loading) {
    return (
      <LoadingPage />
    )
  }
  return (
    <div
      className="h-full w-full overflow-auto p-5 bg-gray-100 "
      style={{ animation: "rise 0.3s linear forwards" }}
    >
      <div className="w-full flex justify-between mr-10 mb-5 ">
        <h1 className="ml-10 font-bold">Explore land</h1>
        <p className="font-bold">
          Graso {">"} <span className="text-[#24C2A5]"> Properties</span>
        </p>
      </div>

      <div className="grid grid-cols-3 2xl:grid-cols-4 justify-items-center gap-3 max-sm:grid-cols-1">
        {properties?.map((data) => (
          <ExploreCard data={data} key={data.id} />
        ))}
      </div>
    </div>
  );
}

export default ExploreLand;
const ExploreCardModal = ({ data, onClose }) => {
  if (!data) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-[90%] max-w-md h-[90%] overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">{data?.name} - Investment</h2>
        <img
          src={landsite}
          alt="Property"
          className="w-full h-40 object-cover rounded-lg mb-4"
        />

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
            <li>
              Environmentally friendly construction with green energy systems.
            </li>
          </ul>
        </div>

        {/* Modal Actions */}
        <div className="mt-6 flex justify-between gap-4">
          <button
            className="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500"
            onClick={onClose}
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
};

// export default ExploreCardModal;
