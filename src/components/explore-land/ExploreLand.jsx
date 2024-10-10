import landsite from "../../assets/landsite.jpg";

const ExploreCardModal = ({ data, onClose }) => {
  if (!data) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-[90%] max-w-md h-[90%] overflow-y-auto">
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

export default ExploreCardModal;
