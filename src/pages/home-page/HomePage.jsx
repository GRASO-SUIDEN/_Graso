import React, { useEffect } from 'react';
import './HomePage.css';
import Navbar from '../../components/NavBar';
import Banner from '../../components/banner/Banner';
import Sparkle from '../../assets/sparkle.png';
import ForSale from '../../assets/image (1).png';
import stream from '../../assets/image (2).png';
import Features from '../../components/features/Features';
import Footer from '../../components/Footer';
import { FaArrowRight } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HomePage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Animates only once when the element comes into view
    });
  }, []);

  return (
    <div className="homepage">
      <Navbar />
      <Banner />
      <div
        className="about"
        data-aos="slide-right"  // This triggers the AOS animation
      >
        <div className="Image-box">
          <span className="spring">
            <img src="https://raw.githubusercontent.com/chiscookeke11/Test-pagea/refs/heads/main/spring.png" alt="spring" />
          </span>
          <span>
            <img src={ForSale} alt="" />
            <h2>STREAM</h2>
            <h5>Delta, Nigeria</h5>
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
          <button>
            Learn more <FaArrowRight className="right-arrow" size={20} color="black" />
          </button>
        </div>
      </div>
      <Features />
      <Footer />
    </div>
  );
};

export default HomePage;
