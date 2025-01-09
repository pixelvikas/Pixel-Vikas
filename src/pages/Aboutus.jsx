import React from "react";
import "./Aboutus.css";

const Aboutus = () => {
  return (
    <>
      <div className="hero-section">
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
    </>
  );
};

export default Aboutus;
