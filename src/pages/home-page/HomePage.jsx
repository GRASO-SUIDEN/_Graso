import "./HomePage.css";
import Navbar from "../../components/NavBar";
import Banner from "../../components/banner/Banner";
import Sparkle from "../../assets/sparkle.png";
import ForSale from "../../assets/image (1).png";
import stream from "../../assets/image (2).png";
import Features from "../../components/features/Features";
import Footer from "../../components/Footer";

const HomePage = () => {
  return (
    <div className="homepage">
      <Navbar />
      <Banner />
      <div className="about">
        <div className="Image-box">
          <span>
          <img src="https://raw.githubusercontent.com/chiscookeke11/Test-pagea/refs/heads/main/spring.png" alt="spring" />
          </span>
           <span>
            <img src={ForSale} alt="" />
           </span>
          <span>
            <img src={stream} alt="stream" />
            <h2>HOLA</h2>
            <h5>Lagos, Nigeria</h5>
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
