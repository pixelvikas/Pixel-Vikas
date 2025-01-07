import React from "react";
import "./Home.css";
import graphics from "/assets/graphics.png";
import coding from "/assets/coding.png";
import video1 from "/assets/video1.mp4";
import video2 from "/assets/video2.mp4";

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
import { MdArrowOutward } from "react-icons/md";

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
                <MdArrowOutward />
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
    </>
  );
};

export default Home;
