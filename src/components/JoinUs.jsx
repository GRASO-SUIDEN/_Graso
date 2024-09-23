import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import '../components/banner/Banner';

const JoinUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      offset: 200, 
      once: true,
    });
  }, []);

  return (
    <div className='join-us' data-aos="fade-up">
      <div className="text" data-aos="fade-right">
        <h1>Join us now</h1>
        <p>Invest and Develop</p>
        <button className='join-us-btn' data-aos="zoom-in">Get started</button>
        <img src="https://github.com/chiscookeke11/Test-pagea/blob/main/sparkle.png.png?raw=true" alt="star" className='star-1' data-aos="fade-left" />
        <img src="https://github.com/chiscookeke11/Test-pagea/blob/main/sparkle.png.png?raw=true" alt="star" className='star-2' data-aos="fade-right" />
      </div>
    </div>
  );
};

export default JoinUs;
