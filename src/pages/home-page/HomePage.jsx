import { useEffect } from "react";
import "./HomePage.css";
import Navbar from "../../components/navbar/NavBar";
import Banner from "../../components/banner/Banner";
import Sparkle from "../../assets/sparkle.png";
import Features from "../../components/features/Features";
import Footer from "../../components/Footer";
import Explore from "../../components/explore/Explore";
import JoinUs from "../../components/JoinUs";
import { FaArrowRight } from "../../utils/icons";
import AOS from "aos";
import "aos/dist/aos.css";
import { image } from "../../components/images";

const HomePage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="homepage">
      <Navbar />
      <Banner />
      <div className="about" data-aos="slide-right">
        <div className="Image-box">
          <span className="spring">
            <img
              src="https://raw.githubusercontent.com/chiscookeke11/Test-pagea/refs/heads/main/spring.png"
              alt="spring"
            />
          </span>
          <span className="top-card">
            <img
              src={image.topimg}
              alt="top-card"
            />
            <h2>HOLA</h2>
            <h5>Lagos, Nigeria</h5>
          </span>
          <span className="bottom-card">
            <img
              src={image.bottomimg}              alt="bottom-card"
            />
            <h2>STREAM</h2>
            <h5>Delta, Nigeria</h5>
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
          <a
            href="https://graso.gitbook.io/graso"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button style={{padding: 10}}>
              Learn more{" "}
              <FaArrowRight className="right-arrow" size={20} color="black" />
            </button>
          </a>
        </div>
      </div>
      <Features />
      <Explore />
      <JoinUs />
      <Footer />
    </div>
  );
};

export default HomePage;
