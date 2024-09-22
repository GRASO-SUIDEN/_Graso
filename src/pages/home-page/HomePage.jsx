import "./HomePage.css";
import Navbar from "../../components/NavBar";
import Banner from "../../components/banner/Banner";
import Sparkle from "../../assets/sparkle.png";
import spring from "../../assets/image3.png";
import ForSale from "../../assets/image (1).png";
import stream from "../../assets/image (2).png";
import Features from "../../components/features/Features";
import Footer from "../../components/Footer";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <div className="about">
        <div className="Image-box">
          <span>
            <img src={spring} alt="spring" />
          </span>
          <span>
            <img src={ForSale} alt="sale" />
            <img src="" alt="" />
          </span>
          <span>
            <img src={stream} alt="stream" />
          </span>
          <img src={Sparkle} alt="sparkle" className="sparkle" />
        </div>
        <div className="text-box">
          <small>ABOUT THE PLATFORM</small>
          <h2>
            Graso is the Leading Decentralized Platform Empowering Real Estate
          </h2>
          <p>
            Empowering real estate projects to secure funds from Investors using
            our decentralized secured system. Enabling Investors to secure early
            fractional ownership in Real estates around the globe in a secure
            and compliant environment.
          </p>
          <button>Learn more </button>
        </div>
      </div>

      <Features />
      <Footer />
    </div>
  );
};

export default HomePage;
