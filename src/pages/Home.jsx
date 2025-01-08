import React, { useEffect, useState } from "react";
import "./Home.css";
import graphics from "/assets/graphics.png";
import coding from "/assets/coding.png";
import video1 from "/assets/video1.mp4";
import video2 from "/assets/video2.mp4";
import PV from "/assets/PV.svg";
import client1 from "/assets/client1.png";
// import client2 from "/assets/client2.png";
import client3 from "/assets/client3.png";
import client4 from "/assets/client4.png";
import client5 from "/assets/client5.png";
import client6 from "/assets/client6.png";
import client7 from "/assets/client7.png";
// import client8 from "/assets/client8.png";
import client9 from "/assets/client9.png";
import client10 from "/assets/client10.png";
import client11 from "/assets/client11.png";
import client12 from "/assets/client12.png";
import client13 from "/assets/client13.png";

import speaker from "/assets/speaker.png";
import like from "/assets/like.png";

import service1 from "/assets/service1.png";
import service2 from "/assets/service2.png";

import { FiArrowUpRight } from "react-icons/fi";
import { HiArrowLongRight } from "react-icons/hi2";
import { FaInstagram } from "react-icons/fa";

const Home = () => {
  const clientImages = [
    client1,
    // client2,  //these logo need to be small
    client3,
    client4,
    client5,
    client6,
    client7,
    // client8,//these logo need to be small
    client9,
    client10,
    client11,
    client12,
    client13,
  ];

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
      <div className="home-container">
        {/* Hero Section */}
        <div className="hero-section">
          <div className="hero-line">
            <h1 className="hero-text">YOU’RE</h1>
            <video
              className="hero-graphic"
              autoPlay
              muted
              loop
              playsInline
              src={video1}
              aria-label="Graphics"
            />
          </div>
          <div className="hero-line">
            <img className="hero-icon" src={speaker} alt="Speaker Icon" />
            <h1 className="hero-text">DIGITAL PRESENCE</h1>
          </div>
          <div className="hero-line">
            <h2 className="hero-text">MATTERS</h2>
            <video
              className="hero-coding"
              autoPlay
              muted
              loop
              playsInline
              src={video2}
              aria-label="Coding"
            />
          </div>
        </div>

        {/* Call-to-Action Section */}
        <div className="cta-section">
          <div className="cta-content">
            <button className="cta-button">
              Get Started
              <div className="arrow">
                <FiArrowUpRight />
              </div>
            </button>
            <img className="cta-icon" src={like} alt="Like Icon" />
          </div>
          <p className="cta-description">
            At Pixel Vikas, we empower businesses to thrive in the digital
            landscape by providing strategic digital marketing solutions and
            cutting-edge IT solutions.
          </p>
        </div>
      </div>

      <div className="clients" id="clients">
        <div className="slider">
          <div className="logos">
            <div className="logos-slide">
              {clientImages.concat(clientImages).map((image, index) => (
                <img
                  key={index}
                  src={image}
                  className="logo-item"
                  alt={`Client ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="solutions">
        <div className="solution-header">
          <div className="solution-title">
            <h1 className="highlight-text">*LET US SHOW YOU!</h1>
            <h1>
              ELEVATING{" "}
              <span className="span-white">
                YOUR PROJECTS <br />
                WITH{" "}
              </span>
              TAILORED SOLUTIONS
            </h1>
          </div>
          <p className="solution-description">
            We transform innovative ideas into captivating and memorable digital
            experiences that engage and inspire.
          </p>
        </div>

        <div className="solution-bar">
          {data.map((item) => (
            <div className="bar" key={item.id}>
              <img src={PV} alt="Icon" className="bar-icon" />
              <p className="bar-text">{item.text}</p>
              <div className="solution-arrow">
                <FiArrowUpRight className="arrow-icon" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="services">
        <div className="services-header">
          <p className="services-description">
            We Provide Efficient, Digital & IT Solution
            <button className="arrow-button">
              See all Services <HiArrowLongRight />
            </button>
          </p>
          <div className="services-title">
            <h1 className="highlight-text">*YOU KNOW WHAT?!</h1>
            <h1>
              WE BUILD <span className="span-yellow">LASTING IMPACT</span> WITH{" "}
              <span className="span-yellow">DESIGN</span>,{" "}
              <span className="span-yellow">DEVELOPMENT</span>, AND DIGITAL{" "}
              <span className="span-yellow">SOLUTIONS </span>
            </h1>
          </div>
        </div>
        <div className="services-folder">
          <div className="folder">
            <img src={service1} alt="Service 1" className="folder-image" />
          </div>
          <div className="folder">
            <img src={service2} alt="Service 2" className="folder-image" />
          </div>
          <div className="folder">
            <img src={service2} alt="Service 2" className="folder-image" />
          </div>
          <div className="folder">
            <img src={service1} alt="Service 1" className="folder-image" />
          </div>
        </div>
      </div>

      <div className="projects">
        <div className="projects-header">
          <div className="projects-title">
            <h1 className="highlight-text">
              *CURIOUS ABOUT WHAT WE’VE CREATED!
            </h1>
            <h1>
              EXPLORE <span className="span-yellow">OUR </span>
              MOST <br />
              RECENT <span className="span-yellow">PROJECTS</span>
            </h1>
          </div>
          <p className="projects-description">
            Our portfolio highlights successful projects driven by excellence,
            creativity, and client satisfaction.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
