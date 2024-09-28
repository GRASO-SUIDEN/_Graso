import "./dashboard.css";
import DashboardCharts from "./DashboardCharts";

const Dashboard = () => {
  return (
    <section>
      <div className="Dashboard-container">
        <div className="greeting mt-16 ml-9">
          <h2>Hello, Lemuel</h2>
          <p>Welcome back!</p>
        </div>

        <div className="stats">
          <div>
            <span>
              <p>Total Revenue</p>
              <h1>$ 45890</h1>
            </span>
            <span className="image">
              <img
                src="https://github.com/chiscookeke11/Test-pagea/blob/main/Vector.png?raw=true"
                alt=""
              />
            </span>
          </div>
          <div>
            <span>
              <p>Total Visitor</p>
              <h1>2197</h1>
            </span>
            <span className="image">
              <img
                src="https://github.com/chiscookeke11/Test-pagea/blob/main/Vector%20(1).png?raw=true"
                alt=""
              />
            </span>
          </div>
          <div>
            <span>
              <p>Total Properties</p>
              <h1>358</h1>
            </span>
            <span className="image">
              <img
                src="https://github.com/chiscookeke11/Test-pagea/blob/main/Vector.png?raw=true"
                alt=""
              />
            </span>
          </div>
          <div>
            <span>
              <p>Properties for Sell</p>
              <h1>243</h1>
            </span>
            <span className="image">
              <img
                src="https://github.com/chiscookeke11/Test-pagea/blob/main/Vector.png?raw=true"
                alt=""
              />
            </span>
          </div>
          <div>
            <span>
              <p>Properties for Rent</p>
              <h1>115</h1>
            </span>
            <span className="image">
              <img
                src="https://github.com/chiscookeke11/Test-pagea/blob/main/Vector.png?raw=true"
                alt=""
              />
            </span>
          </div>
        </div>
      </div>
      <DashboardCharts />
    </section>
  );
};

export default Dashboard;
