import { Line } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function DashboardCharts() {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Dotted",
        data: [100, 150, 200, 170, 220, 260, 300, 250, 220, 190, 180, 150],
        borderColor: "#24C2A5",
        borderWidth: 2,
        borderDash: [5, 5],
        fill: false,
        tension: 0.4,
      },
      {
        label: "Solid",
        data: [80, 130, 170, 160, 180, 240, 290, 240, 210, 160, 140, 120],
        borderColor: "#94A3B8",
        borderWidth: 2,
        fill: false,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: "Months",
        },
      },
      y: {
        title: {
          display: true,
          text: "Values",
        },
        min: 50,
        max: 300,
      },
    },
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <div className="flex justify-center">
      <div className=" w-[60%] mr-10 flex flex-col">
        <div className="flex justify-between space-x-4 mr-2">
          <h2>Revenue Analytics</h2>
          <select name="frequency" className="cursor-pointer">
            <option value="Yearly">Yearly</option>
            <option value="Montly">Monthly</option>
            <option value="Daily">Daily</option>
          </select>
        </div>
        <div className="flex-grow">
          <Line data={data} options={options} />
        </div>
      </div>

      <div className="w-[40%] flex flex-col space-y-2">
        <div className="flex justify-between space-x-4">
          <h2>Sales Data</h2>
          <select name="frequency" className="cursor-pointer">
            <option value="Yearly">Yearly</option>
            <option value="Montly">Monthly</option>
            <option value="Daily">Daily</option>
          </select>
        </div>
        <div className="flex-grow [&_p]:text-[#94A3B8] mt-5">
          <div>
            <div className="flex justify-between">
              <p>Via Website</p>
              <p>50%</p>
            </div>
            <progress max="10" value="5" className="h-2" />
          </div>
          <div>
            <div className="flex justify-between">
              <p>Via Website</p>
              <p>50%</p>
            </div>
            <progress max="10" value="5" className="h-2" />
          </div>
          <div>
            <div className="flex justify-between">
              <p>Via Website</p>
              <p>50%</p>
            </div>
            <progress max="10" value="5" className="h-2" />
          </div>
          <div>
            <div className="flex justify-between">
              <p>Via Website</p>
              <p>50%</p>
            </div>
            <progress max="10" value="5" className="h-2" />
          </div>
          <div>
            <div className="flex justify-between">
              <p>Via Website</p>
              <p>50%</p>
            </div>
            <progress max="10" value="5" className="h-2" />
          </div>
          <div>
            <div className="flex justify-between">
              <p>Via Website</p>
              <p>50%</p>
            </div>
            <progress max="10" value="5" className="h-2" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardCharts;
