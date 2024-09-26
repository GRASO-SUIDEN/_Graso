import React from "react";
import Landsite from "../../assets/landsite.jpg";
import Usdt from "../../assets/usdt-img.png";
import Timer from "./Timer";
import "./explore.css"
// import "./banner.css";
// import backgroundImg from "../../assets/bg-image.png";



const Explore = () => {
   
     //componentsDidMount
    //  useEffect(() => {
    //   startTimer
    //    return () => {
    //      clearInterval(interval.current)
    //    };
    //  }, );
  return (
  <div className="king">
     
     <h2 className=" text-center  font-bold text-2xl uppercase  text-teal-500  font-sans">Featured Collections</h2>
      <h1 className=" text-center  font-semibold capitalize text-3xl " >Discover the best live & upcoming land</h1>
      <p className=" text-center " >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    
    <div
      class=" cards flex flex-wrap w-[90%]  md: w[100%] mx-auto gap-[30px] justify-center
 "
    >
      <div className="  " >
      <div className="card-body md:w[30%] p-4 w-[300px] shadow-2xl rounded-3xl md:max-w-2xl  ">
        <img src={Landsite} />
        <h1 className=" font-bold pt-4 text-2xl ">HALO</h1>
        <h2 className=" text-gray-400 ">Lagos, Nigeria</h2>
        <small className=" font-sans  leading-1 text-xs font-small ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit.
        </small>

        <div>
          <div className=" flex items-center  ">
            <small className=" pr-[35%]">Targeted Raise</small>
            <img src={Usdt} />
            <h2 className=" pr-0 ">200 000</h2>
          </div>
        </div>
        <div class=" flex h-5   border border-teal-400  ">
          {" "}
          <div className=" bg-teal-500 w-[159.06px] rounded-xl "></div>
        </div>
        <div className=" flex gap-[30%] pt-10  ">
          <div className="  ">
          <small className=" font-semibold  ">Min.Entry</small>
          <h1 className="  text-teal-500 font-semibold " >5 USDT</h1>
          </div>
          <button className=" bg-blue-500 w-[123px] h-[20px] rounded-full text-white ">invest</button>
        </div>
      </div>
      <div className="  pt-0  ">
        <Timer />
      </div>
      </div>
      <div className=" " >
      <div className="card-body md: w[30%] p-4 w-[300px] shadow-2xl rounded-3xl ">
        <img src={Landsite} />
        <h1 className=" font-bold pt-4 text-2xl ">HALO</h1>
        <h2 className=" text-gray-400 ">Lagos, Nigeria</h2>
        <small className=" font-sans  leading-1 text-xs font-small ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit.
        </small>

        <div>
          <div className=" flex items-center  ">
            <small className=" pr-[35%]">Targeted Raise</small>
            <img src={Usdt} />
            <h2 className=" pr-0 ">200 000</h2>
          </div>
        </div>
        <div class=" flex h-5   border border-teal-400  ">
          {" "}
          <div className=" bg-teal-500 w-[159.06px] rounded-xl "></div>
        </div>
        <div className=" flex gap-[30%] pt-10  ">
          <div className="  ">
          <small className=" font-semibold  ">Min.Entry</small>
          <h1 className="  text-teal-500 font-semibold " >5 USDT</h1>
          </div>
          <button className=" bg-blue-500 w-[123px] h-[20px] rounded-full text-white ">invest</button>
        </div>
      </div>
      <div className="  pt-0  ">
        <Timer />
      </div>
      </div>
      <div className=" " >
      <div className="card-body md: w[30%] p-4 w-[300px] shadow-2xl rounded-3xl ">
        <img src={Landsite} />
        <h1 className=" font-bold pt-4 text-2xl ">HALO</h1>
        <h2 className=" text-gray-400 ">Lagos, Nigeria</h2>
        <small className=" font-sans  leading-1 text-xs font-small ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit.
        </small>

        <div>
          <div className=" flex items-center  ">
            <small className=" pr-[35%]">Targeted Raise</small>
            <img src={Usdt} />
            <h2 className=" pr-0 ">200 000</h2>
          </div>
        </div>
        <div class=" flex h-5   border border-teal-400  ">
          {" "}
          <div className=" bg-teal-500 w-[159.06px] rounded-xl "></div>
        </div>
        <div className=" flex gap-[30%] pt-10  ">
          <div className="  ">
          <small className=" font-semibold  ">Min.Entry</small>
          <h1 className="  text-teal-500 font-semibold " >5 USDT</h1>
          </div>
          <button className=" bg-blue-500 w-[123px] h-[20px] rounded-full text-white ">invest</button>
        </div>
      </div>
      <div className="  pt-0  ">
        <Timer />
      </div>
      </div>
      <div className=" " >
      <div className="card-body md: w[30%] p-4 w-[300px] shadow-2xl rounded-3xl ">
        <img src={Landsite} />
        <h1 className=" font-bold pt-4 text-2xl ">HALO</h1>
        <h2 className=" text-gray-400 ">Lagos, Nigeria</h2>
        <small className=" font-sans  leading-1 text-xs font-small ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit.
        </small>

        <div>
          <div className=" flex items-center  ">
            <small className=" pr-[35%]">Targeted Raise</small>
            <img src={Usdt} />
            <h2 className=" pr-0 ">200 000</h2>
          </div>
        </div>
        <div class=" flex h-5   border border-teal-400  ">
          {" "}
          <div className=" bg-teal-500 w-[159.06px] rounded-xl "></div>
        </div>
        <div className=" flex gap-[30%] pt-10  ">
          <div className="  ">
          <small className=" font-semibold  ">Min.Entry</small>
          <h1 className="  text-teal-500 font-semibold " >5 USDT</h1>
          </div>
          <button className=" bg-blue-500 w-[123px] h-[20px] rounded-full text-white ">invest</button>
        </div>
      </div>
      <div className="  pt-0  ">
        <Timer />
      </div>
      </div>
      <div className=" " >
      <div className="card-body md: w[30%] p-4 w-[300px] shadow-2xl rounded-3xl ">
        <img src={Landsite} />
        <h1 className=" font-bold pt-4 text-2xl ">HALO</h1>
        <h2 className=" text-gray-400 ">Lagos, Nigeria</h2>
        <small className=" font-sans  leading-1 text-xs font-small ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit.
        </small>

        <div>
          <div className=" flex items-center  ">
            <small className=" pr-[35%]">Targeted Raise</small>
            <img src={Usdt} />
            <h2 className=" pr-0 ">200 000</h2>
          </div>
        </div>
        <div class=" flex h-5   border border-teal-400  ">
          {" "}
          <div className=" bg-teal-500 w-[159.06px] rounded-xl "></div>
        </div>
        <div className=" flex gap-[30%] pt-10  ">
          <div className="  ">
          <small className=" font-semibold  ">Min.Entry</small>
          <h1 className="  text-teal-500 font-semibold " >5 USDT</h1>
          </div>
          <button className=" bg-blue-500 w-[123px] h-[20px] rounded-full text-white ">invest</button>
        </div>
      </div>
      <div className="  pt-0  ">
        <Timer />
      </div>
      </div>
      <div className=" " >
      <div className="card-body md: w[30%] p-4 w-[300px] shadow-2xl rounded-3xl ">
        <img src={Landsite} />
        <h1 className=" font-bold pt-4 text-2xl ">HALO</h1>
        <h2 className=" text-gray-400 ">Lagos, Nigeria</h2>
        <small className=" font-sans  leading-1 text-xs font-small ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit.
        </small>

        <div>
          <div className=" flex items-center  ">
            <small className=" pr-[35%]">Targeted Raise</small>
            <img src={Usdt} />
            <h2 className=" pr-0 ">200 000</h2>
          </div>
        </div>
        <div class=" flex h-5   border border-teal-400  ">
          {" "}
          <div className=" bg-teal-500 w-[159.06px] rounded-xl "></div>
        </div>
        <div className=" flex gap-[30%] pt-10  ">
          <div className="  ">
          <small className=" font-semibold  ">Min.Entry</small>
          <h1 className="  text-teal-500 font-semibold " >5 USDT</h1>
          </div>
          <button className=" bg-blue-500 w-[123px] h-[20px] rounded-full text-white ">invest</button>
        </div>
      </div>
      <div className="  pt-0  ">
        <Timer />
      </div>
      </div>
      <div className=" " >
      <div className="card-body md: w[30%] p-4 w-[300px] shadow-2xl rounded-3xl ">
        <img src={Landsite} />
        <h1 className=" font-bold pt-4 text-2xl ">HALO</h1>
        <h2 className=" text-gray-400 ">Lagos, Nigeria</h2>
        <small className=" font-sans  leading-1 text-xs font-small ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit.
        </small>

        <div>
          <div className=" flex items-center  ">
            <small className=" pr-[35%]">Targeted Raise</small>
            <img src={Usdt} />
            <h2 className=" pr-0 ">200 000</h2>
          </div>
        </div>
        <div class=" flex h-5   border border-teal-400  ">
          {" "}
          <div className=" bg-teal-500 w-[159.06px] rounded-xl "></div>
        </div>
        <div className=" flex gap-[30%] pt-10  ">
          <div className="  ">
          <small className=" font-semibold  ">Min.Entry</small>
          <h1 className="  text-teal-500 font-semibold " >5 USDT</h1>
          </div>
          <button className=" bg-blue-500 w-[123px] h-[20px] rounded-full text-white ">invest</button>
        </div>
      </div>
      <div className="  pt-0  ">
        <Timer />
      </div>
      </div>
      <div className=" " >
      <div className="card-body md: w[30%] p-4 w-[300px] shadow-2xl rounded-3xl ">
        <img src={Landsite} />
        <h1 className=" font-bold pt-4 text-2xl ">HALO</h1>
        <h2 className=" text-gray-400 ">Lagos, Nigeria</h2>
        <small className=" font-sans  leading-1 text-xs font-small ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit.
        </small>

        <div>
          <div className=" flex items-center  ">
            <small className=" pr-[35%]">Targeted Raise</small>
            <img src={Usdt} />
            <h2 className=" pr-0 ">200 000</h2>
          </div>
        </div>
        <div class=" flex h-5   border border-teal-400  ">
          {" "}
          <div className=" bg-teal-500 w-[159.06px] rounded-xl "></div>
        </div>
        <div className=" flex gap-[30%] pt-10  ">
          <div className="  ">
          <small className=" font-semibold  ">Min.Entry</small>
          <h1 className="  text-teal-500 font-semibold " >5 USDT</h1>
          </div>
          <button className=" bg-blue-500 w-[123px] h-[20px] rounded-full text-white ">invest</button>
        </div>
      </div>
      <div className="  pt-0  ">
        <Timer />
      </div>
      </div>
      
    </div>
    
    </div>
  );
};



export default Explore;
