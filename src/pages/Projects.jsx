import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  const [projectData, setProjectData] = useState([]);

  // Fetching data from JSON file or API
  useEffect(() => {
    // Assuming the data is stored in a local JSON file
    const fetchData = async () => {
      const response = await fetch("/projects.json"); // Replace with your actual path
      const data = await response.json();
      setProjectData(data);
    };

    fetchData();
  }, []);
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
            <Link to={project.link || "#"} key={index} className="project-item">
              <img
                src={project.image}
                alt={project.alt_text || `Project ${index + 1}`}
              />
              <div className="project-data">
                <h1 className="project-name">{project.project_name}</h1>
                <h1 className="project-details">{project.project_details}</h1>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
