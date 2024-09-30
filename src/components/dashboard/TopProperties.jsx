import house1 from "../../assets/house1.webp";

function TopProperties() {
  return (
    <div className="flex justify-between p-5">
      <img src={house1} alt="" />
      <div>
        <h3>House</h3>
        <p>Baton Rouge, USA</p>
      </div>
      <p>11%</p>
    </div>
  );
}

export default TopProperties;
