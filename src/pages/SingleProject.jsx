import React from "react";
import Mockup from "/assets/devicemockup.png";
import "./SingleProject.css";

const SingleProject = () => {
  return (
    <>
      <div className="singleproject-hero">
        <div className="singleproject-content">
          <h1 className="singleproject-title">Rajkosh</h1>
          <div className="singleproject-services">
            <h1 className="singleproject-services-header">Services:</h1>
            <h2 className="singleproject-details">
              UX / UI | Social Media | Server
            </h2>
          </div>
        </div>
        <div className="singleproject-mockup">
          <img src={Mockup} alt="Rajkosh Mockup" />
        </div>
      </div>
    </>
  );
};

export default SingleProject;
