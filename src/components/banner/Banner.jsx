import React from 'react'
import './banner.css'
import Asset_img from '../../assets/image (2).png'

 const Banner = () => {
  return (
    <div className="mt-16 banner"> 
    <div className="title-text">
      <h1>
      Making Real Estate More Accessible to All
      </h1>
    </div>
    <div className="text_pics">
      <p>Bringing a better and faster means for developers to raise funds, while giving individual investor fractional ownership of real world assets.</p>
      <div className="asset-img">
        <img src={Asset_img} alt="" />
      </div>
    </div>

  </div>
  
  )
}
export default Banner;
