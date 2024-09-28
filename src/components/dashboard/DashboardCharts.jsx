function DashboardCharts() {
  return (
    <div className="flex justify-between ml-9 mr-20">
      <div>
        <div className="flex space-x-4">
          <h2>Revenue Analytics</h2>
          <select name="frequency" className="cursor-pointer">
            <option value="Yearly">Yearly</option>
            <option value="Montly">Monthly</option>
            <option value="Daily">Daily</option>
          </select>
        </div>
        <div>CHARTS</div>
      </div>

      <div className="mr-4">
        <div className="flex space-x-4">
          <h2>Sales Data</h2>
          <select name="frequency" className="cursor-pointer">
            <option value="Yearly">Yearly</option>
            <option value="Montly">Monthly</option>
            <option value="Daily">Daily</option>
          </select>
        </div>
        <div>
          <div>
            <div className="flex justify-between">
              <p>Via Website</p>
              <p>50%</p>
            </div>
            <progress max="10" value="5" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardCharts;
