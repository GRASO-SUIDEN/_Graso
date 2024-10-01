import { ExploreCard } from "../explore/Explore";
import "./Explore-land.css"

function ExploreLand() {
  return (
    <div className="profile-wrappe">
       <div className="sub-head">
          <h1>Explore land</h1>
          <h3>
            Graso <span className="arrow"></span> {" > "}{" "}
            <span>properties</span>
          </h3>
        </div>

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
