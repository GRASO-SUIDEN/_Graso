import { ExploreCard } from "../explore/Explore";
import "./Explore-land.css"

function ExploreLand() {
  return (
    <div>
      {/* <ul className="text">
        <li><h1>Explore land</h1></li>
        <li className=" pl-10 " >Graso {">"} <span> properties</span></li>
      </ul> */}

      <div className="container ">
        <div className="   ">
          {" "}
          <ExploreCard />{" "}
        </div>
        <div className="item">
          {" "}
          <ExploreCard />{" "}
        </div>
        <div className="item">
          {" "}
          <ExploreCard />{" "}
        </div>
        <div className="item">
          {" "}
          <ExploreCard />{" "}
        </div>
        <div className="item">
          {" "}
          <ExploreCard />{" "}
        </div>
        <div className="item">
          {" "}
          <ExploreCard />{" "}
        </div>
      </div>
    </div>
  );
}

export default ExploreLand;
