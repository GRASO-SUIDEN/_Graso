import "./Explore.css";
import Slider from "./Slider";
import { tempData } from "../../../data/tempData";
import ExploreCard from "./ExploreCard";

const Explore = () => {
  return (
    <div className="mb-10 p-16 w-full bg-gradient-to-b from-[#effdf1] to-[#f8f3ff] flex flex-col justify-center items-center space-y-2">
      <div className="space-y-4 mb-4">
        <h2 className="text-center font-bold uppercase text-[#36BB91] font-[inter] text-[1rem] ">
          Featured Collections
        </h2>
        <h2 className=" text-center font-semibold text-3xl font-[syne] ">
          Discover the best live & upcoming land
        </h2>
        <p className=" text-center ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="max-w-[1500px] min-w-[800px] grid grid-cols-3 gap-10 justify-center max-md:hidden">
        {tempData.map((data) => (
          <ExploreCard data={data} key={data.id} />
        ))}
      </div>
      <Slider />
    </div>
  );
};

export default Explore;
