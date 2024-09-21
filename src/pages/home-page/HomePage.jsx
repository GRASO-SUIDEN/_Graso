import React from 'react'
import Navbar from '../../components/NavBar'
import Banner from '../../components/banner/Banner';
import './HomePage.css';
import Sparkle from '../../assets/Sparkle.png.png'

 const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <div className="about">
        <div className='Image-box'>
          <span></span>
          <span></span>
          <span></span>
          <img src={Sparkle} alt="sparkle" className='sparkle' />
        </div>
        <div className='text-box'>
          <small>About the platform</small>
          <h2>Graso is the Leading Decentralized Platform Empowering Real Estate</h2>
          <p>Empowering real estate projects to secure funds from Investors 
            using our decentralized secured system. Enabling Investors to secure early fractional 
            ownership in Real estates around the globe in a secure and compliant environment.</p>
            <button>Learn more</button>
        </div>
      </div>
    </div>
  )
}

export default HomePage;