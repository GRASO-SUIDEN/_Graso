import Timer from "../Timer";
import landsite from "../../assets/landsite.jpg";
import sui from "../../assets/sui.png";

export default function ExploreCard({ data }) {
  return (
    <div className="flex flex-col justify-between rounded-t-[2.1rem] rounded-b-3xl bg-[#24C2A5] w-[20rem] h-[32rem] space-y-1 min-w-[250px]">
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
            <button className="bg-[#24c2a5] w-auto px-4 py-2 rounded-full text-white hover:border-solid hover:bg-white hover:text-[#24C2A5] transition-all duration-300">
              INVEST
            </button>
          </div>
        </div>
      </div>
      <Timer />
    </div>
  );
}
