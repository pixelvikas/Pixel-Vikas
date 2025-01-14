import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./SingleProject.css";

const SingleProject = () => {
  const { id } = useParams(); // Retrieve project ID from URL
  const [project, setProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // For animation
  const [fade, setFade] = useState(false); // For fade effect

  // Fetch project data based on ID
  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        const response = await fetch("/projects.json");
        if (!response.ok) {
          throw new Error("Failed to fetch project data");
        }
        const projects = await response.json();
        const selectedProject = projects.find((proj) => proj.id === id);
        setProject(selectedProject);
      } catch (error) {
        console.error(error);
        setProject(null); // Handle error and ensure project is null
      }
    };

    fetchProjectData();
  }, [id]);

  // Slideshow logic for gallery images
  useEffect(() => {
    if (project && project.gallery_images.length > 0) {
      const interval = setInterval(() => {
        setFade(true); // Trigger fade-out effect
        setTimeout(() => {
          setCurrentImageIndex(
            (prevIndex) => (prevIndex + 1) % project.gallery_images.length
          ); // Update the image index
          setFade(false); // Reset fade for fade-in effect
        }, 1000); // Sync fade-out with CSS transition duration
      }, 5000); // Change image every 5 seconds

      return () => clearInterval(interval); // Cleanup on component unmount
    }
  }, [project]);

  if (!project) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <>
      <div className="singleproject-hero">
        <div className="singleproject-content">
          <h1 className="singleproject-title">{project.project_name}</h1>
          <div className="singleproject-services">
            <h1 className="singleproject-services-header">Services:</h1>
            <h2 className="singleproject-details">
              {project.services.join(" | ")}
            </h2>
          </div>
        </div>
        <div className="singleproject-mockup">
          <img
            src={project.mockup_image}
            alt={`${project.project_name} Mockup`}
          />
        </div>
      </div>

      <div className="singleproject-detail">
        <div className="singleproject-detail-header">
          <div className="singleproject-detail-title">
            <h1>
              PROJECT <br /> <span className="span-white">INFORMATION</span>
            </h1>
            <h1 className="highlight-text">
              *FULL-STACK WEB E-COMMERCE APPLICATION FOR {project.project_name}
            </h1>
          </div>
        </div>

        <div className="project-folder">
          <div className="project-folder-content">
            <img
              src={project.project_folder_images[0]}
              alt="Service 1"
              className="folder-image"
            />
          </div>
          <div className="folder">
            <img
              src={project.project_folder_images[1]}
              alt="Service 2"
              className="folder-image"
            />
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
            <img
              src={project.challenge.image}
              alt="Challenge"
              className="folder-image"
            />
          </div>
          <div className="folder">
            <img
              src={project.solution.image}
              alt="Solution"
              className="folder-image"
            />
          </div>
        </div>

        <div className="singleproject-detail-header">
          <div className="singleproject-detail-title">
            <h1>
              PROJECT <br /> <span className="span-white">GLIMPSE</span>
            </h1>
          </div>
        </div>
      </div>

      <div className="homepage" id="home">
        {project.gallery_images.map((image, index) => (
          <img
            className={`homepage-img ${
              index === currentImageIndex ? "fade-in" : "fade-out"
            }`}
            key={index}
            src={image}
            alt={`Project ${index + 1}`}
            style={{ opacity: index === currentImageIndex ? 1 : 0 }}
          />
        ))}
      </div>
    </>
  );
};

export default SingleProject;
