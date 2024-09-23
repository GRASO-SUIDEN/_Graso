import React, { useEffect, useState, useRef } from "react";
import "./Features.css";
import round from "../../assets/round-img.png";

const Features = () => {
  const [averageRaise, setAverageRaise] = useState(0);
  const [projectLaunch, setProjectLaunch] = useState(0);
  const [raisedCapital, setRaisedCapital] = useState(0);
  const [uniqueInvestors, setUniqueInvestors] = useState(0);
  const featuresRef = useRef(null);

  
  const targetValues = {
    averageRaise: 400000,
    projectLaunch: 1000000,
    raisedCapital: 4600000,
    uniqueInvestors: 1000000,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startIncrementCounters();
            observer.unobserve(entry.target); 
          }
        });
      },
      { threshold: 0.5 } 
    );

    if (featuresRef.current) {
      observer.observe(featuresRef.current);
    }

    return () => {
      if (featuresRef.current) {
        observer.unobserve(featuresRef.current);
      }
    };
  }, []);

  const startIncrementCounters = () => {
    incrementCounter(setAverageRaise, targetValues.averageRaise, 20);
    incrementCounter(setProjectLaunch, targetValues.projectLaunch, 20);
    incrementCounter(setRaisedCapital, targetValues.raisedCapital, 20);
    incrementCounter(setUniqueInvestors, targetValues.uniqueInvestors, 20);
  };

  const incrementCounter = (setCounter, targetValue, step) => {
    let count = 0;
    const duration = 2000;
    const increment = Math.ceil(targetValue / (duration / step));

    const counterInterval = setInterval(() => {
      count += increment;
      if (count >= targetValue) {
        count = targetValue;
        clearInterval(counterInterval);
      }
      setCounter(count);
    }, step);
  };

  
  const formatValue = (value, label) => {
    if (value === targetValues.averageRaise) return "$400k";
    if (value === targetValues.projectLaunch) return "1M+";
    if (value === targetValues.raisedCapital) return "$4.6M";
    if (value === targetValues.uniqueInvestors) return "1M+";
    return `${value}${label}`;
  };

  return (
    <div className="features" ref={featuresRef}>
      <div className="text">
        <small>Features</small>
        <h1>Secure funds for your project with Graso</h1>
        <p>
          Leverage our extensive experience, gain investments, and build a
          community in the process.
        </p>
        <div className="grid-container">
          <div className="grid-item">
            <h2>{formatValue(averageRaise, "")}</h2>
            <h5>AVERAGE RAISE</h5>
          </div>
          <div className="grid-item">
            <h2>{formatValue(projectLaunch, "+")}</h2>
            <h5>PROJECT LAUNCH</h5>
          </div>
          <div className="grid-item">
            <h2>{formatValue(raisedCapital, "")}</h2>
            <h5>RAISED CAPITAL</h5>
          </div>
          <div className="grid-item">
            <h2>{formatValue(uniqueInvestors, "+")}</h2>
            <h5>UNIQUE INVESTORS</h5>
          </div>
        </div>
      </div>
      <div className="features-img">
        <img src={round} alt="" className="feature-image"/>
      </div>
    </div>
  );
};

export default Features;
