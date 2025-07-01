import { useEffect } from "react";
import AOS from "aos";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Mousewheel } from "swiper/modules";
import Navbar from "../../components/navbar/NavBar";
import JoinUs from "../../components/JoinUs";
import Footer from "../../components/Footer";
import TeamCard from "../../components/team-card/TeamCard";
import "./about-us.css";
import "aos/dist/aos.css";
import "swiper/css/bundle";
import { image } from "../../components/images";
import Contact from "../../components/contact/Contact";

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
      image:
        "https://github.com/chiscookeke11/Test-pagea/blob/main/chidile.jpg?raw=true",
      linkedin: "https://linkedin.com/in/chidile-ozoemena-293688231/",
      twitter: "https://x.com/0xAfroTechBoss",
      github: "https://github.com/AfroTechBoss",
    },
    {
      name: " Uzoma Favour Uchechukwumere",
      role: "Community Manager",
      image:
        "https://github.com/chiscookeke11/Test-pagea/blob/main/cop.jpg?raw=true",
      linkedin: "https://www.linkedin.com/in/uzomafavour",
      twitter: "https://x.com/phavezizzy",
      github: "https://github.com/nnamdi84",
    },
    {
      name: "Ogaziechi Jonathan",
      role: "Project Manager",
      image:
        "https://github.com/chiscookeke11/Test-pagea/blob/main/dr%20jo.jpg?raw=true",
      linkedin:
        "https://www.linkedin.com/in/jonathan-ogaziechi-a4b027250?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      twitter: "https://x.com/jonathan_ify?t=Daab5uN71i3RdBv3rHKPAw&s=09",
      github: "https://github.com/datadudejon",
    },

    {
      name: " Madukairo Enenike ",
      role: "Marketing Lead",
      image:
        "https://pbs.twimg.com/profile_images/1780602576334962688/e_Cn33Oo_400x400.jpg",
      linkedin: "https://linkedin.com/in/emenike-madukairo0511",
      twitter: "https://x.com/emenike_sage",
      github: "#",
    },

    {
      name: " Kosisochukwu Moronu ",
      role: " Research Analyst",
      image:
        "https://github.com/chiscookeke11/Test-pagea/blob/main/kosi.jpg?raw=true",
      linkedin:
        "https://www.linkedin.com/in/kosisochukwu-moronu-17722b303?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      twitter: "https://x.com/Kosiengine",
      github: "https://github.com/Kosisochukwu244",
    },

    {
      name: " Charles Lemuel   ",
      role: "UI/UX designer",
      image:
        "https://github.com/chiscookeke11/Test-pagea/blob/main/sui_logo.png?raw=true",
      // linkedin: "https://x.com/king_futures9?s=21",
      // twitter: "https://x.com/king_futures9?s=21",
      // github: "https://x.com/king_futures9?s=21",
    },

    {
      name: "Okeke Chinedu Emmanuel ",
      role: "Frontend Developer",
      image:
        "https://github.com/chiscookeke11/Test-pagea/blob/main/nedu.jpg?raw=true",
      linkedin: "https://github.com/chiscookeke11",
      twitter: "https://x.com/ChiscoDbg69906",
      github: "https://github.com/chiscookeke11",
    },
    {
      name: " Nebolisa Ugochukwu Benedict  ",
      role: "Frontend Developer",
      image:
        "https://github.com/chiscookeke11/Test-pagea/blob/main/nebolisa.jpg?raw=true",
      linkedin: "https://www.linkedin.com/in/ugochukwu-nebolisa-a818b6302",
      twitter: "https://x.com/i_am_nebolisa",
      github: "https://github.com/benedictfred",
    },

    {
      name: "  Egbo chikosolu Maryaugustina  ",
      role: "Social media manager",
      image:
        "https://github.com/chiscookeke11/Test-pagea/blob/main/chikosolu.jpg?raw=true",
      linkedin:
        "https://www.linkedin.com/in/egbo-chikosolu-mary-augustina-aba558251?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      twitter: "https://x.com/Augustina__egbo?t=40D9E2C9B9DCPjd7zUvvEg&s=09",
      github: "https://x.com/Augustina__egbo?t=40D9E2C9B9DCPjd7zUvvEg&s=09",
    },

    {
      name: " Nwachukwu Daniel Chigozirim ",
      role: "Smart Contract Developer",
      image:
        "https://github.com/chiscookeke11/Test-pagea/blob/main/danny.jpg?raw=true",
      linkedin: "https://www.linkedin.com/in/devdanny0",
      twitter: "https://x.com/dannyclassi_c",
      github: "https://github.com/Verifieddanny",
    },
    {
      name: "Somtochukwu Kelechi Onwuajuese",
      role: "Backend Developer",
      image:
        "https://pbs.twimg.com/profile_images/1907689552044544000/vVuen9NF_400x400.jpg",
      // linkedin: "https://www.linkedin.com/in/Anthonyslav1",
      twitter: "https://x.com/tweetSomto",
      github: "https://github.com/soomtochukwu/soomtochukwu",
    },
  ];

  return (
    <div className="about-us-page">
      <Navbar />
      <div className="section mt-16">
        {/* About Us Banner */}
        <div className="about-us-banner">
          <div className="about-us-banner-text">
            <h1 data-aos="fade-down">
              Making Real Estate More Accessible to All
            </h1>
            <p>
              Bringing a better and faster means for developers to raise funds,
              while giving individual investors fractional ownership of real
              world assets.
            </p>
          </div>
          <div className="about-us-banner-img">
            <div className="image2">
              <div className="shadow top">
                <img src={image.topimg1} alt="image" />
              </div>
              <div className="shadow bottom">
                <img src={image.bottomimg1} alt="image" />
              </div>
            </div>
            <div className="image1">
              <div className="shadow top">
                <img src={image.topimg2} alt="image" />
              </div>
              <div className="shadow bottom">
                <img src={image.bottomimg2} alt="image" />
              </div>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="mission">
          <div className="image">
            <div className="back-img">
              <img src={image.missionimgbig} alt="image" />
            </div>
            <div className="top-image">
              <img src={image.missionimgsml} alt="image" />
            </div>
          </div>
          <div className="text">
            <h2 data-aos="fade-right">MISSION</h2>
            <p data-aos="fade-left">
              To democratize real estate investment by providing an accessible
              platform that empowers individuals to invest in properties with
              minimal capital, while enabling developers to quickly raise funds
              through innovative solutions. We aim to create a transparent,
              sustainable, and inclusive real estate ecosystem for all.
            </p>
          </div>
        </div>

        {/* Info Box */}
        <div className="info-box-text">
          <h2 data-aos="fade-up">
            Providing the best future for your best living
          </h2>
          <p data-aos="fade-up" data-aos-delay="300">
            To revolutionize the global real estate market by making property
            ownership and investment opportunities available to everyone,
            regardless of financial background. We envision a world where anyone
            can build wealth through fractional real estate ownership, while
            contributing to a more sustainable and equitable future.
          </p>
        </div>

        {/* Team Section */}
        <div className="teams">
          <div className="team-text">
            <h5>
              <span>Team</span>
            </h5>
            <h2>The Experts You Can Trust</h2>
          </div>

          <div className="swiper-container mt-4">
            <Swiper
              modules={[Navigation, Autoplay, Mousewheel]}
              navigation={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              spaceBetween={30}
              breakpoints={{
                768: {
                  slidesPerView: 1,
                },
                1024: {
                  slidesPerView: 3,
                  navigation: true,
                },
              }}
              centeredSlides={true}
              grabCursor={true}
              mousewheel={false}
              loop={true}
            >
              {teamMembers.map((member, index) => (
                <SwiperSlide key={index} className="swiper-slide-centered">
                  <TeamCard
                    name={member.name}
                    role={member.role}
                    image={member.image}
                    linkedin={member.linkedin}
                    twitter={member.twitter}
                    github={member.github}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Contact Section */}
        <Contact />
      </div>
      <JoinUs />
      <Footer />
    </div>
  );
};

export default AboutUs;
