import ExploreCard from "../explore/ExploreCard";
// import styles from "./ExploreLand.module.css";
import { ExploreData } from "../../../data/ExploreData";

function ExploreLand() {
  return (
    <div className="h-full w-full overflow-auto pl-2">
      {/* <ul className="text">
        <li>
          <h1>Explore land</h1>
        </li>
        <li className=" pl-10 ">
          Graso {">"} <span> properties</span>
        </li>
      </ul> */}

      <div className="flex flex-wrap gap-3">
        {ExploreData.map((data) => (
          <div className="" key={data.id}>
            {" "}
            <ExploreCard data={data} />{" "}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExploreLand;
