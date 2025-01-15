import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook

import "./Home.css";
import video1 from "/assets/video1.mp4";
import video2 from "/assets/video2.mp4";
import PV from "/assets/PV.svg";

import speaker from "/assets/speaker.png";
import like from "/assets/like.png";

import { FiArrowUpRight } from "react-icons/fi";
import { HiArrowLongRight } from "react-icons/hi2";

const Home = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleClick = () => {
    navigate("/projects"); // Navigate to /project when the button is clicked
  };

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "0f053934-fe51-4a86-9443-f600e8cd85c0");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  const [data, setData] = useState([]);
  const [clientLogos, setClientLogos] = useState([]);
  const [services, setServices] = useState([]);
  const [projects, setProjects] = useState([]);
  const [reviews, setReviews] = useState([]);

  // Fetch data from the JSON file
  useEffect(() => {
    fetch("/solutions.json")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error("Error loading data:", error));
  }, []);

  useEffect(() => {
    // Fetch the JSON data from the file
    fetch("/projects.json")
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) =>
        console.error("Error fetching the projects data:", error)
      );
  }, []);

  useEffect(() => {
    // Fetch the JSON data from the file
    fetch("/services.json")
      .then((response) => response.json())
      .then((data) => setServices(data))
      .catch((error) =>
        console.error("Error fetching the services data:", error)
      );
  }, []);

  // Fetch client logos from the JSON file
  useEffect(() => {
    const fetchLogos = async () => {
      try {
        const response = await fetch("/clientlogo.json"); // Adjust path to where your JSON is located
        const data = await response.json();
        setClientLogos(data);
      } catch (error) {
        console.error("Error fetching client logos:", error);
      }
    };

    fetchLogos();
  }, []);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch("/reviews.json"); // Adjust path to your JSON file
        const data = await response.json();
        setReviews(data.reviews); // Assuming the JSON structure contains a "reviews" array
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, []);

  const handleNavigation = () => {
    navigate("/contact-us"); // Navigate to the /contact-us route
  };
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
            <button className="cta-button" onClick={handleNavigation}>
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
              {clientLogos.concat(clientLogos).map((logo, index) => (
                <img
                  key={index}
                  src={logo.src}
                  className="logo-item"
                  alt={logo.alt}
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
            <Link to="/services">
              <button className="arrow-button">
                See all Services <HiArrowLongRight />
              </button>
            </Link>
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
          {services.slice(0, 4).map((service, index) => (
            <div className="folder" key={index}>
              <img
                src={service.image} // Dynamically set image source
                alt={service.alt_text} // Dynamically set alt text
                className="folder-image"
              />
            </div>
          ))}
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

        <div className="project-list">
          {projects.map((project, index) => (
            <Link to={project.link || "#"} key={index} className="project-item">
              <img src={project.image} alt={project.alt_text} />
              <div className="project-data">
                <h1 className="project-name">{project.project_name}</h1>
                <h1 className="project-details">{project.project_details}</h1>
              </div>
            </Link>
          ))}
        </div>

        <button className="project-button" onClick={handleClick}>
          <span>View More</span>
          <div className="project-arrow">
            <HiArrowLongRight />
          </div>
        </button>
      </div>

      <div className="contact-section">
        <div className="contact-form">
          <h1 className="contact-header">Let's Talk</h1>
          <h2 className="contact-subtitle">Consultation is free</h2>

          <form onSubmit={onSubmit} className="form">
            <input
              type="text"
              name="full-name"
              placeholder="Full Name / Company Name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
            />
            <input type="tel" name="phone" placeholder="Phone No." required />
            <textarea
              name="message"
              placeholder="Your Message"
              required
            ></textarea>
            <button type="submit" className="submit-btn">
              Book a Free Appointment
              <span className="contact-arrow">
                <FiArrowUpRight />
              </span>
            </button>
          </form>
        </div>

        <div className="contact-tagline">
          <h1>
            <span className="span-white">"</span>
            ELEVATE{" "}
            <span className="span-white">
              {" "}
              <br />
              YOUR{" "}
            </span>
            DIGITAL <br />
            PRESENCE <br />
            <span className="span-white">TO THE </span>
            <br />
            NEXT LEVEL
            <span className="span-white">!"</span>
          </h1>
        </div>
      </div>

      <div className="review">
        <div className="review-header">
          <div className="review-title">
            <h1 className="highlight-text">*SPOILER: THEY LOVE US!</h1>
            <h1>
              HERE'S WHAT{" "}
              <span className="span-yellow">
                PEOPLE <br /> SAY{" "}
              </span>
              ABOUT OUR <span className="span-yellow">WORK</span>
            </h1>
          </div>
        </div>

        <div className="review-card" id="clients">
          <div className="review-slider">
            <div className="review-logos">
              <div className="review-logos-slide">
                {reviews.concat(reviews).map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    className="review-item"
                    alt={`Client ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="services">
        <div className="services-header">
          <p className="services-description">
            "Our Blog: Fresh Insights and Valuable Content, Delivered Every
            Week"
          </p>
          <div className="services-title">
            <h1 className="highlight-text">*WE HAVE A HOBBY!</h1>
            <h1>
              STAY <span className="span-yellow">INFORMED</span> WITH <br /> OUR{" "}
              <span className="span-yellow">LATEST BLOGS</span>
            </h1>
          </div>
        </div> */}

      {/* <div className="blogs">
          {[blog1, blog2, blog3, blog1].map((blog, index) => (
            <div key={index} className="blog-card">
              <img
                src={blog}
                alt={`Blog ${index + 1}`}
                className="blog-image"
              />
            </div>
          ))}
        </div> */}
      {/* <button className="project-button">
          <span>View More</span>
          <div className="project-arrow">
            <HiArrowLongRight />
          </div>
        </button>
      </div> */}

      <div className="newsletter">
        <h1 className="newsletter-title">SUBSCRIBE OUR NEWSLETTER</h1>
        <p className="newsletter-subtitle">
          Join Our Newsletter: Stay Updated, Exclusive Content, Sign Up
        </p>
        <div className="newsletter-form">
          <form onSubmit={onSubmit} className="letter-form">
            <input
              type="email"
              name="email"
              placeholder="Enter your Email Address"
              className="newsletter-input"
            />
            <button type="submit" className="newsletter-button">
              SUBSCRIBE
            </button>
          </form>
        </div>
        <p className="newsletter-privacy">
          We care about your data in our{" "}
          <a href="/privacy-policy">privacy policy</a>.
        </p>
      </div>
    </>
  );
};

export default Home;
