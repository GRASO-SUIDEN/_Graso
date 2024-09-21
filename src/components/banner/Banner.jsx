import React from 'react'
import './banner.css'
import MainImage from '../../assets/image (2).webp'

 const Banner = () => {
  return (
    <div className="mt-16 banner">
<div className="hero">
    <div className="text">
        <h1>Making Real Estate More Accessible to All</h1>
        <p>Bringing a better and faster means for developers to raise funds,
             while giving individuals investors fractional ownership of real world assets.</p>
        <div className="button-holder">
            <button>Invest</button>
            <button>Develop</button>
        </div>
    </div>
    <div className="main-img">
        <img src={MainImage} alt="" />
    </div>
</div>

</div>

  )
}

export default Banner;
