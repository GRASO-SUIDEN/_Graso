import house1 from "../../assets/house1.webp";
import { FiArrowDownRight } from "../../utils/icons";

function TopProperties() {
  return (
    <div className="flex justify-between p-5">
      <img src={house1} alt="" />
      <div className="[&_p]:text-[#94A3B8]">
        <h3>House</h3>
        <p>Baton Rouge, USA</p>
      </div>
      <p className="text-red-600 flex justify-center items-center">
        <FiArrowDownRight />
        11%
      </p>
    </div>
  );
}

export default TopProperties;
