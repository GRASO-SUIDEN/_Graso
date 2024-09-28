import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '../../components/NavBar';
import JoinUs from '../../components/JoinUs';
import Footer from '../../components/Footer';
import './about-us.css';

const AboutUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, 
      once: true,     
    });
  }, []);

  return (
    <div className='about-us-page'>
      <Navbar />
      <div className="section mt-16">
        <div className="info-box-text">
          <h2 data-aos="fade-up">Providing the best future for your best living</h2>
          <p data-aos="fade-up" data-aos-delay="300">
            To revolutionize the global real estate market by making property ownership 
            and investment opportunities available to everyone, regardless of financial background. 
            We envision a world where anyone can build wealth through fractional real estate ownership,
            while contributing to a more sustainable and equitable future.
          </p>
        </div>
      </div>
      <JoinUs />
      <Footer />
    </div>
  );
};

export default AboutUs;
