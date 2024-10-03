import Navbar from "../../components/navbar/NavBar";
import { tempData } from "../../../data/tempData";
import ExploreCard from "../../components/explore/ExploreCard";
import Slider from "../../components/explore/Slider";
import Footer from "../../components/Footer";

function ExplorePage() {
  return (
    <div className="w-full h-[]">
      <Navbar />
      <div className="p-20 w-full bg-gradient-to-b from-[#effdf1] to-[#f8f3ff] flex flex-col space-y-2">
        <div className="flex flex-col mt-6 space-y-3 font-sans max-md:-ml-9 max-md:mb-2">
          <div className="text-[1.5rem] font-bold">
            <h1>Explore</h1>
          </div>
          <div className="flex space-x-3 max-md:space-x-2">
            <p className="font-bold">Live & Upcoming</p>
            <div className="w-[0.05rem] h-5 mt-1 bg-black"></div>
            <p className="text-gray-500">Completed</p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="max-w-[1500px] min-w-[800px] grid grid-cols-3 gap-10 justify-items-center max-md:hidden">
            {tempData.map((data) => (
              <ExploreCard data={data} key={data.id} />
            ))}
          </div>
          <Slider />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ExplorePage;
