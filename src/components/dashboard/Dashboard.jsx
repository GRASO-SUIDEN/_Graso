import DashboardCharts from "./DashboardCharts";
import DashboardSummary from "./DashboardSummary";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <section className="h-screen flex flex-col flex-grow p-6 space-y-2 font-spartan overflow-auto">
      <div className="Dashboard-container">
        <div className="greeting w-full">
          <h2 className="font-bold text-[1.2rem]">Hello, Lemuel</h2>
          <p className="text-gray-500">Welcome back!</p>
        </div>
        <div className="stats w-full flex flex-wrap [&_p]:text-gray-400 [&_h1]:font-bold [&_div]:border [&_div]:border-gray-100 [&_div]:rounded-lg mt-2">
          <div className="flex items-center justify-between p-4 bg-white w-52">
            <span>
              <p>Total Revenue</p>
              <h1>$ 45890</h1>
            </span>
            <span className="image ml-auto">
              <img
                src="https://github.com/chiscookeke11/Test-pagea/blob/main/Vector.png?raw=true"
                alt=""
              />
            </span>
          </div>
          <div className="flex items-center justify-between p-4 bg-white w-52">
            <span>
              <p>Total Visitor</p>
              <h1>2197</h1>
            </span>
            <span className="image ml-auto">
              <img
                src="https://github.com/chiscookeke11/Test-pagea/blob/main/Vector%20(1).png?raw=true"
                alt=""
              />
            </span>
          </div>
          <div className="flex items-center justify-between p-4 bg-white w-52">
            <span>
              <p>Total Properties</p>
              <h1>358</h1>
            </span>
            <span className="image ml-auto">
              <img
                src="https://github.com/chiscookeke11/Test-pagea/blob/main/Vector.png?raw=true"
                alt=""
              />
            </span>
          </div>
          <div className="flex items-center justify-between p-4 bg-white w-52">
            <span>
              <p>Properties for Sell</p>
              <h1>243</h1>
            </span>
            <span className="image ml-auto">
              <img
                src="https://github.com/chiscookeke11/Test-pagea/blob/main/Vector.png?raw=true"
                alt=""
              />
            </span>
          </div>
          <div className="flex items-center justify-between p-4 bg-white w-52">
            <span>
              <p>Properties for Rent</p>
              <h1>115</h1>
            </span>
            <span className="image ml-auto">
              <img
                src="https://github.com/chiscookeke11/Test-pagea/blob/main/Vector.png?raw=true"
                alt=""
              />
            </span>
          </div>
        </div>
      </div>

      <DashboardCharts />
      <DashboardSummary />
    </section>
  );
};

export default Dashboard;
