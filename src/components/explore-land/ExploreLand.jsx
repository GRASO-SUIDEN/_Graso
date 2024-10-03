import ExploreCard from "../explore/ExploreCard";
import { exploreData } from "../../../data/exploreData";

function ExploreLand() {
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
        {exploreData.map((data) => (
          <ExploreCard data={data} key={data.id} />
        ))}
      </div>
    </div>
  );
}

export default ExploreLand;
