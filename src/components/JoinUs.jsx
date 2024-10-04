import { useEffect, useState } from "react";
import { ConnectButton, useCurrentAccount } from "@mysten/dapp-kit";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "../components/banner/Banner";

const JoinUs = () => {

  const currentAccount = useCurrentAccount();
  const navigate = useNavigate();

  useEffect(() => {
    if (currentAccount) {
      console.log("Success!");
      navigate("/app");
    }
  }, [currentAccount, navigate]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 200,
      once: true,
    });
  }, []);

  return (
    <div className="join-us" data-aos="fade-up">
      <div className="text" data-aos="fade-right">
        <h1>Join us now</h1>
        <p>Invest and Develop</p>
        {/* <button className="join-us-btn" data-aos="zoom-in">
          Get started
        </button> */}
        <div className="join-us-btn " data-aos="zoom-in">
          <ConnectButton connectText="Get started" />
        </div>
        <img
          src="https://github.com/chiscookeke11/Test-pagea/blob/main/sparkle.png.png?raw=true"
          alt="star"
          className="star-1"
          data-aos="fade-left"
        />
        <img
          src="https://github.com/chiscookeke11/Test-pagea/blob/main/sparkle.png.png?raw=true"
          alt="star"
          className="star-2"
          data-aos="fade-right"
        />
      </div>
    </div>
  );
};

export default JoinUs;
