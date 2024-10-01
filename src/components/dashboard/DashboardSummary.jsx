import Transactions from "./Transactions";
import house1 from "../../assets/house1.webp";
import house2 from "../../assets/house2.webp";
import house3 from "../../assets/house3.webp";

function DashboardSummary() {
  return (
    <div className="flex space-x-5 [&_h2]:text-[1.2rem] [&_h2]:font-bold [&_p]:text-[#94A3B8] max-md:flex-col">
      <div className="w-[25%]">
        <div className="flex justify-between">
          <h2>Area Map</h2>
          <p>Last update 5 days ago</p>
        </div>
        <div>Map</div>
      </div>

      <div className="w-[50%]">
        <div className="flex justify-between">
          <h2>Recent Transactions</h2>
          <p>View orders = </p>
        </div>
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="text-left">Date</th>
              <th className="text-left">Name</th>
              <th className="text-left">Price</th>
              <th className="text-left">Type</th>
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

      <div className="w-[25%]">
        <div className="flex justify-between">
          <h2>Top Properties</h2>
          <p>See More = </p>
        </div>
        <div>something</div>
      </div>
    </div>
  );
}

export default DashboardSummary;
