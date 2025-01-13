import React from "react";
import { Link } from "react-router-dom";
import project1 from "/assets/project1.png";
import project2 from "/assets/project2.png";
import project3 from "/assets/project3.png";
import project4 from "/assets/project4.png";

const projectData = [
  {
    image: project1,
    name: "Rajkosh",
    details: "Website | Domain | Server",
    link: "/projects/1",
  },
  {
    image: project2,
    name: "SKYLARK",
    details: "Website | Domain | Server",
    link: "/projects/2",
  },
  {
    image: project3,
    name: "Iconic Students Academy",
    details: "Website | Domain | Server",
    link: "/projects/3",
  },
  {
    image: project4,
    name: "Real Homes",
    details: "Website | Domain | Server",
    link: "/projects/4",
  },
];

const Projects = () => {
  return (
    <>
      <div className="section-hero">
        <h1 className="hero-title">PROJECTS</h1>
      </div>
      <div className="projects">
        <div className="projects-header">
          <div className="projects-title">
            <h1 className="highlight-text">
              *CURIOUS ABOUT WHAT WE’VE CREATED!
            </h1>
            <h1>
              EXPLORE <span className="span-yellow">OUR </span>MOST <br />{" "}
              RECENT
              <span className="span-yellow"> PROJECTS</span>
            </h1>
          </div>
          <p className="projects-description">
            We transform innovative ideas into captivating and memorable digital
            experiences that engage and inspire
          </p>
        </div>

        <div className="project-list">
          {projectData.map((project, index) => (
            <Link to={project.link} key={index} className="project-item">
              <img src={project.image} alt={`Project ${index + 1}`} />
              <div className="project-data">
                <h1 className="project-name">{project.name}</h1>
                <h1 className="project-details">{project.details}</h1>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
