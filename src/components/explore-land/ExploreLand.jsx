import ExploreCard from "../explore/ExploreCard";
import styles from "./ExploreLand.module.css";

function ExploreLand() {
  return (
    <div>
      {/* <ul className="text">
        <li>
          <h1>Explore land</h1>
        </li>
        <li className=" pl-10 ">
          Graso {">"} <span> properties</span>
        </li>
      </ul> */}

      <div className={styles.container}>
        <div className="">
          {" "}
          <ExploreCard />{" "}
        </div>
        <div className={styles.item}>
          {" "}
          <ExploreCard />{" "}
        </div>
        <div className={styles.item}>
          {" "}
          <ExploreCard />{" "}
        </div>
        <div className={styles.item}>
          {" "}
          <ExploreCard />{" "}
        </div>
        <div className={styles.item}>
          {" "}
          <ExploreCard />{" "}
        </div>
        <div className={styles.item}>
          {" "}
          <ExploreCard />{" "}
        </div>
      </div>
    </div>
  );
}

export default ExploreLand;
