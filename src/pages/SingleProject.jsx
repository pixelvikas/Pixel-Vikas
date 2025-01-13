import React from "react";
import Mockup from "/assets/devicemockup.png";

import p1a from "/assets/project1a.png";
import p1b from "/assets/project1b.png";
import p1c from "/assets/project1c.png";
import p1d from "/assets/project1d.png";
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
      <div className="singleproject-detail">
        <div className="singleproject-detail-header">
          <div className="singleproject-detail-title">
            <h1>
              PROJECT <br /> <span className="span-white">INFORMATION </span>
            </h1>
            <h1 className="highlight-text">
              *FULL-STACK WEB E-COMMERCE APPLICATION FOR JEWELRY
            </h1>
          </div>
        </div>

        <div className="project-folder">
          <div className="project-folder-content">
            <img src={p1a} alt="Service 1" className="folder-image" />
          </div>
          <div className="folder">
            <img src={p1b} alt="Service 2" className="folder-image" />
          </div>
        </div>
      </div>
      <div className="singleproject-detail">
        <div className="singleproject-detail-header-right">
          <div className="singleproject-detail-title-right">
            <h1>
              THE <br /> <span className="span-white">CHALLENGE </span> &{" "}
              <span className="span-white">SOLUTION</span>
            </h1>
            <h1 className="highlight-text">
              *CHALLENGES FACED BY CLIENT & IT'S SOLUTION
            </h1>
          </div>
        </div>
        <div className="project-folder">
          <div className="project-folder-content">
            <img src={p1a} alt="Service 1" className="folder-image" />
          </div>
          <div className="folder">
            <img src={p1b} alt="Service 2" className="folder-image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProject;
