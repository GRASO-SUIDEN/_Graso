import Transactions from "./Transactions";
import house1 from "../../assets/house1.webp";
import house2 from "../../assets/house2.webp";
import house3 from "../../assets/house3.webp";
import TopProperties from "./TopProperties";
import Map from "../../assets/Map.webp";

function DashboardSummary() {
  return (
    <div className="flex [&_h2]:text-[1.2rem] [&_h2]:font-bold [&_p]:text-[#94A3B8] border border-gray-100 h-full max-md:flex-col w-full">
      <div className="w-[25%] border border-gray-100 max-md:w-full">
        <div className="flex justify-between border-b border-gray-100 p-5">
          <h2>Area Map</h2>
          <p>Last update 5 days ago</p>
        </div>
        <div>
          <img src={Map} alt="Map" />
        </div>
      </div>

      <div className="w-[50%] max-md:w-full ">
        <div className="w-full flex justify-between border-b border-gray-200  p-5">
          <h2>Recent Transactions</h2>
          <p>View orders = </p>
        </div>
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="text-left pl-[6rem]">Date</th>
              <th className="text-left p-3">Name</th>
              <th className="text-left p-3">Price</th>
              <th className="text-left p-3">Type</th>
            </tr>
          </thead>
          <Transactions
            imgSrc={house1}
            name="Mr. Rocky"
            price="$1245/M"
            type="Rent"
          />
          <Transactions
            imgSrc={house2}
            name="Mr. Cristino"
            price="$12450"
            type="Sell"
          />
          <Transactions
            imgSrc={house3}
            name="Mr. Jack"
            price="$12450"
            type="Sell"
          />
        </table>
      </div>

      <div className="w-[25%] border border-gray-100 max-md:w-full">
        <div className="flex justify-between border-b border-gray-100  p-5">
          <h2>Top Properties</h2>
          <p>See More = </p>
        </div>
        <TopProperties />
        <TopProperties />
      </div>
    </div>
  );
}

export default DashboardSummary;
