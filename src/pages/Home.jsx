import React from "react";
import "./Home.css";
import graphics from "/assets/graphics.png";
import coding from "/assets/coding.png";
import video1 from "/assets/video1.mp4";
import video2 from "/assets/video2.mp4";

import speaker from "/assets/speaker.png";
import like from "/assets/like.png";
import { MdArrowOutward } from "react-icons/md";

const Home = () => {
  return (
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
  );
};

export default Home;
