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
    <div className="flex max-md:flex-col border border-gray-100">
      <div className="w-[60%] flex flex-col max-md:w-full">
        <div className="w-full flex justify-between space-x-4 mr-2 p-5 border border-gray-100 rounded-md">
          <h2 className="font-bold text-[1.2rem]">Revenue Analytics</h2>
          <select
            name="frequency"
            className="cursor-pointer border border-gray-100 font-semibold"
          >
            <option value="Yearly">Yearly</option>
            <option value="Montly">Monthly</option>
            <option value="Daily">Daily</option>
          </select>
        </div>
        <div className="flex-grow">
          <Line data={data} options={options} />
        </div>
      </div>

      <div className="w-[40%] flex flex-col space-y-8 max-md:w-full border border-gray-100">
        <div className="flex justify-between space-x-4 p-5 border border-b-gray-100 rounded-md">
          <h2 className="font-bold text-[1.2rem]">Sales Data</h2>
          <select
            name="frequency"
            className="cursor-pointer border border-gray-100 font-semibold"
          >
            <option value="Yearly">Yearly</option>
            <option value="Montly">Monthly</option>
            <option value="Daily">Daily</option>
          </select>
        </div>
        <div className="flex-grow [&_p]:text-[#94A3B8] pr-7 pl-7 space-y-3">
          <div>
            <div className="flex justify-between">
              <p>Via Website</p>
              <p>50%</p>
            </div>
            <progress max="10" value="5" className="h-2" />
          </div>
          <div>
            <div className="flex justify-between">
              <p>Via Team Member</p>
              <p>12%</p>
            </div>
            <progress max="10" value="1.2" className="h-2" />
          </div>
          <div>
            <div className="flex justify-between">
              <p>Via Agents</p>
              <p>6%</p>
            </div>
            <progress max="10" value="0.6" className="h-2" />
          </div>
          <div>
            <div className="flex justify-between">
              <p>Via Social Media</p>
              <p>15%</p>
            </div>
            <progress max="10" value="1.5" className="h-2" />
          </div>
          <div>
            <div className="flex justify-between">
              <p>Via Digital Marketing</p>
              <p>12%</p>
            </div>
            <progress max="10" value="1.2" className="h-2" />
          </div>
          <div>
            <div className="flex justify-between">
              <p>Via Others</p>
              <p>5%</p>
            </div>
            <progress max="10" value="0.5" className="h-2" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardCharts;
