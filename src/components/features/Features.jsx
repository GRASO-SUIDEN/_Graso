import "./Features.css";
import round from "../../assets/round-img.png";

const Features = () => {
  return (
    <div className="features">
      <div className="text">
        <small>Features</small>
        <h1>Secure funds for your project with Graso</h1>
        <p>
          Leverage our extensive experience, gain investments and build a
          community in the process
        </p>
        <div className="grid-container">
          <div className="grid-item">
            <h2>$400k</h2>
            <h5>AVERAGE RAISE</h5>
          </div>
          <div className="grid-item">
            <h2>1M+</h2>
            <h5>PROJECT LAUNCH</h5>
          </div>
          <div className="grid-item">
            <h2>$4.6M</h2>
            <h5>RAISED CAPITAL</h5>
          </div>
          <div className="grid-item">
            <h2>1M+</h2>
            <h5>UNIQUE INVESTORS</h5>
          </div>
        </div>
      </div>
      <div className="features-img">
        <img src={round} alt="" />
      </div>
    </div>
  );
};

export default Features;
