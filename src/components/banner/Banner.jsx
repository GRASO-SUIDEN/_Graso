import { ConnectButton, useCurrentAccount } from "@mysten/dapp-kit";
import {  useNavigate } from "react-router-dom";
import "./banner.css";
import MainImage from "../../assets/image (2).webp";
import { useEffect } from "react";

const Banner = () => {
  const currentAccount = useCurrentAccount();
  const navigate = useNavigate();

    useEffect(() => {
      if (currentAccount) {
        console.log("Success!");
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
            <button>Invest</button>
            {/* <button>
              <Link to="/app">Develop</Link>
            </button> */}
            <div className="custom-connect-button">
              <ConnectButton connectText="Develop" />
            </div>
          </div>
        </div>
        <div className="main-img">
          <img src={MainImage} alt="" />
          <div className="label">
            <h4>STREAM</h4>
            <p>Lagos, Nigeria</p>
          </div>
        </div>

        <div className="asset-card assetcard1">
          <img
            src="https://github.com/chiscookeke11/Test-pagea/blob/main/IMG_20240923_045950_827.jpg?raw=true"
            alt="asset-card"
          />
          <h4>JOS ESTATE</h4>
          <h5>Port Harcourt, Nigeria</h5>
        </div>
        <div className="asset-card assetcard2">
          <img
            src="https://github.com/chiscookeke11/Test-pagea/blob/main/IMG_20240923_045950_985.jpg?raw=true"
            alt="asset-card"
          />
          <h4>MONEYLAND</h4>
          <h5>Calabar, Nigeria</h5>
        </div>
        <div className="asset-card assetcard3">
          <img
            src="https://github.com/chiscookeke11/Test-pagea/blob/main/IMG_20240923_045951_309.jpg?raw=true"
            alt="asset-card"
          />
          <h4>EVERCLEAR</h4>
          <h5>Delta, Nigeria</h5>
        </div>
        <div className="asset-card assetcard4">
          <img
            src="https://github.com/chiscookeke11/Test-pagea/blob/main/IMG_20240923_045950_912.jpg?raw=true"
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
