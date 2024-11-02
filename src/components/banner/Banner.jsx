import { ConnectButton, useCurrentAccount } from "@mysten/dapp-kit";
import {  Link, useNavigate } from "react-router-dom";
import "./banner.css";
import { useEffect } from "react";
import { image } from "../images";

const Banner = () => {
  const currentAccount = useCurrentAccount();
  const navigate = useNavigate();

    useEffect(() => {
      if (currentAccount) {
        navigate("/app");
      }
    }, [currentAccount, navigate]);
  return (
    <div className="mt-10 banner">
      <div className="hero">
        <div className="text">
          <h1>Making Real Estate More Accessible to All</h1>
          <p>
            Bringing a better and faster means for developers to raise funds,
            while giving individuals investors fractional ownership of real
            world assets.
          </p>
          <div className="button-holder ">
          <div className="custom-connect-button">
              <ConnectButton connectText="Invest" />
            </div>

              <Link to="https://tnusbr02aa8.typeform.com/to/jcm0VFBm">
            <button>
              Develop
            </button>
              </Link>
        
          </div>
        </div>
        <div className="main-img">
          <img src={image.MainImage} alt="" />
          <div className="label">
            <h4>STREAM</h4>
            <p>Lagos, Nigeria</p>
          </div>
        </div>

        <div className="asset-card assetcard1">
          <img
            src={image.bannerimg2}
            alt="asset-card"
          />
          <h4>JOS ESTATE</h4>
          <h5>Port Harcourt, Nigeria</h5>
        </div>
        <div className="asset-card assetcard2">
          <img
            src={image.bannerimg3}
            alt="asset-card"
          />
          <h4>MONEYLAND</h4>
          <h5>Calabar, Nigeria</h5>
        </div>
        <div className="asset-card assetcard3">
          <img
            src={image.bannerimg1}
            alt="asset-card"
          />
          <h4>EVERCLEAR</h4>
          <h5>Delta, Nigeria</h5>
        </div>
        <div className="asset-card assetcard4">
          <img
            src={image.bannerimg4}
            alt="asset-card"
          />
          <h4>HOLA</h4>
          <h5>Lagos, Nigeria.</h5>
        </div>
      </div>
    </div>
  );
};

export default Banner;
