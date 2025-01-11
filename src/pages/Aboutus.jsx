import React, { useState, useEffect } from "react";
import PV from "/assets/PV.svg";
import { FiArrowUpRight } from "react-icons/fi";
import "./Aboutus.css";

import client1 from "/assets/client1.png";
import client3 from "/assets/client3.png";
import client4 from "/assets/client4.png";
import client5 from "/assets/client5.png";
import client6 from "/assets/client6.png";
import client7 from "/assets/client7.png";
import client9 from "/assets/client9.png";
import client10 from "/assets/client10.png";
import client11 from "/assets/client11.png";
import client12 from "/assets/client12.png";
import client13 from "/assets/client13.png";

const Aboutus = () => {
  const [data, setData] = useState([]);

  // Fetch data from the JSON file
  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error("Error loading data:", error));
  }, []);

  return (
    <>
      <div className="section-hero">
        <h1 className="hero-title">About Us</h1>
      </div>
      <div className="projects">
        <div className="projects-header">
          <div className="projects-title">
            <h1 className="highlight-text">*WHO ARE WE!?</h1>
            <h1>
              ABOUT <span className="span-yellow">US </span>
            </h1>
          </div>
          <p className="projects-description">
            We transform innovative ideas into captivating and memorable digital
            experiences that engage and inspire
          </p>
        </div>

        <div className="about-us-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </div>
      <div className="services">
        <div className="services-header">
          <div className="services-title">
            <h1 className="highlight-text">*WHAT DO WE AIM?!</h1>
            <h1>
              OUR <span className="span-yellow">VISION</span>
            </h1>
          </div>
        </div>
        <div className="vision-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </div>
      <div className="projects">
        <div className="projects-header">
          <div className="projects-title">
            <h1 className="highlight-text">*WHAT ARE OUR AMBITIONS!?</h1>
            <h1>
              OUR <span className="span-yellow">MISSION</span>
            </h1>
          </div>
        </div>

        <div className="about-us-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </div>
      <div className="aboutus-solution">
        <div className="aboutus-solution-header">
          <p className="aboutus-solution-description">
            We Provide Efficient,
            <br /> Digital & IT Solution{" "}
          </p>
          <div className="aboutus-solution-title">
            <h1 className="highlight-text">*YOU KNOW WHAT?!</h1>
            <h1>
              WE BUILD <span className="span-white">LASTING IMPACT</span> WITH{" "}
              <span className="span-white">DESIGN</span>,{" "}
              <span className="span-white">DEVELOPMENT</span>, AND DIGITAL{" "}
              <span className="span-white">SOLUTIONS </span>
            </h1>
          </div>
        </div>
      </div>

      <div className="solution-bar">
        {data.map((item) => (
          <div className="bar" key={item.id}>
            <div className="bar-content">
              <div className="bar-head">
                <img src={PV} alt="Icon" className="bar-icon" />
                <p className="bar-text">{item.text}</p>
                <div className="solution-arrow">
                  <FiArrowUpRight className="arrow-icon" />
                </div>
              </div>
              <div className="bar-desc">
                <ul>
                  {item.description
                    .split(".")
                    .filter((point) => point.trim() !== "") // Remove empty points
                    .map((point, index) => (
                      <li key={index}>{point.trim()}.</li> // Trim whitespace and re-add the dot
                    ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="ourclients">
        <div className="ourclients-header">
          <div className="ourclients-title">
            <h1 className="highlight-text">
              *CLIENT’S ARE STILL CONNECTED WITH US!
            </h1>
            <h1>
              EXPLORE <br />
              <span className="span-white"> OUR </span> CLIENT’S
            </h1>
          </div>
        </div>
      </div>

      <div className="client">
        <img src={client1} alt="Client 1" />
        <img src={client3} alt="Client 3" />
        <img src={client4} alt="Client 4" />
        <img src={client5} alt="Client 5" />
        <img src={client6} alt="Client 6" />
        <img src={client7} alt="Client 7" />
        <img src={client9} alt="Client 9" />
        <img src={client10} alt="Client 10" />
        <img src={client11} alt="Client 11" />
        <img src={client12} alt="Client 12" />
        <img src={client13} alt="Client 13" />
      </div>
    </>
  );
};

export default Aboutus;
