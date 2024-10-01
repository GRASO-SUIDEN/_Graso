import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../../components/navbar/NavBar";
import JoinUs from "../../components/JoinUs";
import Footer from "../../components/Footer";
import "./about-us.css";
import TeamCard from "../../components/team-card/TeamCard";
import { FaArrowRight } from "react-icons/fa";

const AboutUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  
  const teamMembers = [
    {
      name: "Chidile Ozoemena",
      role: "Team Lead",
      image: "https://github.com/chiscookeke11/Test-pagea/blob/main/chidile.jpg?raw=true",
      linkedin: "https://linkedin.com/in/chidile-ozoemena-293688231/",
      twitter: "https://x.com/0xAfroTechBoss",
      github: "https://github.com/AfroTechBoss",
    },
    {
      name: " Nwachukwu Daniel Chigozirim ",
      role: "Smart Contract Developer",
      image: "https://github.com/chiscookeke11/Test-pagea/blob/main/danny.jpg?raw=true",
      linkedin: "https://www.linkedin.com/in/devdanny0",
      twitter: "https://x.com/0xAfroTechBoss",
      github: "https://github.com/Verifieddanny",
    },
    {
      name: " Uzoma Favour Uchechukwumere",
      role: "Community Manager",
      image: "https://github.com/chiscookeke11/Test-pagea/blob/main/cop.jpg?raw=true",
      linkedin: "https://www.linkedin.com/in/uzomafavour",
      twitter: "https://x.com/phavezizzy",
      github: "https://github.com/nnamdi84",
    },
    {
      name: "Ogaziechi Jonathan",
      role: "Project Manager",
      image: "https://github.com/chiscookeke11/Test-pagea/blob/main/dr%20jo.jpg?raw=true",
      linkedin: "https://www.linkedin.com/in/jonathan-ogaziechi-a4b027250?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      twitter: "https://x.com/jonathan_ify?t=Daab5uN71i3RdBv3rHKPAw&s=09",
      github: "https://github.com/datadudejon",
    },
    {
      name: "Okorie Victor Onyekachi ",
      role: "Graphic Designer",
      image: "https://github.com/chiscookeke11/Test-pagea/blob/main/victor.jpg?raw=true",
      linkedin: "http://www.linkedin.com/in/victor-okorie-49a3081a3",
      twitter: "https://x.com/artovivo",
      github: "https://github.com/artovivo",
    },
    {
      name: "Okeke Chinedu Emmanuel ",
      role: "Frontend Developer",
      image: "https://github.com/chiscookeke11/Test-pagea/blob/main/nedu.jpg?raw=true",
      linkedin: "https://github.com/chiscookeke11",
      twitter: "https://x.com/ChiscoDbg69906",
      github: "https://github.com/chiscookeke11",
    },
    {
      name: " Ene Paschaline Chimeremma  ",
      role: "Social Media Manager",
      image: "https://github.com/chiscookeke11/Test-pagea/blob/main/paschaline.jpg?raw=true",
      linkedin: "https://github.com/Alex-dev63",
      twitter: "https://x.com/Xan_dra27?t=h9KVYDU5luuZdZEeOSfViA&s=08",
      github: "https://github.com/Alex-dev63",
    },
    {
      name: " Nebolisa Ugochukwu Benedict  ",
      role: "Frontend Developer",
      image: "https://github.com/chiscookeke11/Test-pagea/blob/main/nebolisa.jpg?raw=true",
      linkedin: "https://www.linkedin.com/in/ugochukwu-nebolisa-a818b6302",
      twitter: "https://x.com/i_am_nebolisa",
      github: "https://github.com/benedictfred",
    },
    {
      name: " Ugbeda Genesis wisdom  ",
      role: "Frontend Developer",
      image: "https://github.com/chiscookeke11/Test-pagea/blob/main/genesis.jpg?raw=true",
      linkedin: "https://www.linkedin.com/in/wisdom-genesis-frontend-web-developer",
      twitter: "https://x.com/dev_genesi?t=9BtzgF9YZM8jg9G_Xzibzg&s=08",
      github: "https://github.com/Genesisufedo",
    },
  ];

  return (
    <div className="about-us-page">
      <Navbar />
      <div className="section mt-16">
        {/* About Us Banner */}
        <div className="about-us-banner">
          <div className="about-us-banner-text">
            <h1 data-aos="fade-down">Making Real Estate More Accessible to All</h1>
            <p>
              Bringing a better and faster means for developers to raise funds,
              while giving individual investors fractional ownership of real world assets.
            </p>
          </div>
          <div className="about-us-banner-img">
            <div className="image2">
              <div className="shadow top">
                <img
                  src="https://github.com/chiscookeke11/Test-pagea/blob/main/rs-bg-elem%20(1).png?raw=true"
                  alt="image"
                />
              </div>
              <div className="shadow bottom">
                <img
                  src="https://github.com/chiscookeke11/Test-pagea/blob/main/rs-bg-elem.png?raw=true"
                  alt="image"
                />
              </div>
            </div>
            <div className="image1">
              <div className="shadow top">
                <img
                  src="https://github.com/chiscookeke11/Test-pagea/blob/main/Graso%20(4)/rs-bg-elem.png?raw=true"
                  alt="image"
                />
              </div>
              <div className="shadow bottom">
                <img
                  src="https://github.com/chiscookeke11/Test-pagea/blob/main/Graso%20(5)/rs-bg-elem.png?raw=true"
                  alt="image"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mission Section */}
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

        {/* Info Box */}
        <div className="info-box-text">
          <h2 data-aos="fade-up">Providing the best future for your best living</h2>
          <p data-aos="fade-up" data-aos-delay="300">
            To revolutionize the global real estate market by making property ownership and investment opportunities available to everyone, regardless of financial background. We envision a world where anyone can build wealth through fractional real estate ownership, while contributing to a more sustainable and equitable future.
          </p>
        </div>

        {/* Team Section */}
        <div className="teams">
          <div className="team-text">
            <h5><span>Team</span></h5>
            <h2>The Experts You Can Trust</h2>
          </div>

          <div className="team-card-container">
            {teamMembers.map((member, index) => (
              <TeamCard
                key={index}
                name={member.name}
                role={member.role}
                image={member.image}
                linkedin={member.linkedin}
                twitter={member.twitter}
                github={member.github}
              />
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="contact">
          <form>
            <h4># CONTACT</h4>
            <h2>Contact  Us</h2>
            <div className="form-details">
              <input type="text" placeholder="Name" required />
              <input type="text" placeholder="Email" required />
              <input type="tel" placeholder="Phone" required />
              <input type="text" placeholder="Subject" required />
            </div>
            <input type="text" placeholder="Message" className="message" required />
            <button>
              Send Message <FaArrowRight className="right-arrow" size={17} color="white" />
            </button>
          </form>
        </div>
      </div>
      <JoinUs />
      <Footer />
    </div>
  );
};

export default AboutUs;
