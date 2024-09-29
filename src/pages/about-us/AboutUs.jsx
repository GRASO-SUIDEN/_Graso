import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../../components/navbar/NavBar";
import JoinUs from "../../components/JoinUs";
import Footer from "../../components/Footer";
import "./about-us.css";
import TeamCard from "../../components/team-card/TeamCard";

const AboutUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);

  return (
    <div className="about-us-page">
      <Navbar />
      <div className="section mt-16">
        <div className="about-us-banner">
          <h1 data-aos="fade-down">About Us</h1>
        </div>
        <div className="mission">
          <div className="image">
            <div className="back-img">
              <img
                src="https://github.com/chiscookeke11/Test-pagea/blob/main/image%2021.png?raw=true"
                alt="image"
              />
            </div>
            <div className="top-image">
              <img
                src="https://github.com/chiscookeke11/Test-pagea/blob/main/Rectangle%206.png?raw=true"
                alt="image"
              />
            </div>
          </div>
          <div className="text">
            <h2 data-aos="fade-right">MISSION</h2>
            <p data-aos="fade-left">
              To democratize real estate investment by providing an accessible platform that empowers individuals to invest in properties with minimal capital, while enabling developers to quickly raise funds through innovative solutions. We aim to create a transparent, sustainable, and inclusive real estate ecosystem for all.
            </p>
          </div>
        </div>

        <div className="info-box-text">
          <h2 data-aos="fade-up">Providing the best future for your best living</h2>
          <p data-aos="fade-up" data-aos-delay="300">
            To revolutionize the global real estate market by making property ownership and investment opportunities available to everyone, regardless of financial background. We envision a world where anyone can build wealth through fractional real estate ownership, while contributing to a more sustainable and equitable future.
          </p>
        </div>

        <div className="teams">
          <div className="team-text">
            <h5>Team</h5>
            <h2>The  Experts You Can Trust</h2>
          </div>


          <div className="team-card-container">
            <TeamCard/>
          </div>


        </div>

        <div className="contact">
          <form>
            <h4># LET’S CONTACT</h4>
            <h2>Contact With Us</h2>
            <div className="form-details">
              <input type="text" placeholder="Name" required />
              <input type="text" placeholder="Email" required />
              <input type="number" placeholder="Phone" required />
              <input type="text" placeholder="Subject" required />
            </div>
            <input type="text" placeholder="icon" className="message" required />
            <button>Send Message</button>
          </form>
        </div>
      </div>
      <JoinUs />
      <Footer />
    </div>
  );
};

export default AboutUs;
