import React, { useEffect, useState } from "react";
import "./Home.css";
import video1 from "/assets/video1.mp4";
import video2 from "/assets/video2.mp4";
import PV from "/assets/PV.svg";
import client1 from "/assets/client1.png";
import client3 from "/assets/client3.png";
import client4 from "/assets/client4.png";
import client5 from "/assets/client5.png";
import client6 from "/assets/client6.png";
import client7 from "/assets/client7.png";
import client9 from "/assets/client9.png";
import client10 from "/assets/client10.png";
import client11 from "/assets/client11.png";
import client12 from "/assets/client12.png";
import client13 from "/assets/client13.png";

import review1 from "/assets/review1.png";
import review2 from "/assets/review2.png";
import review3 from "/assets/review3.png";

import blog1 from "/assets/Blog1.png";
import blog2 from "/assets/Blog2.png";
import blog3 from "/assets/Blog3.png";

import speaker from "/assets/speaker.png";
import like from "/assets/like.png";

import service1 from "/assets/service1.png";
import service2 from "/assets/service2.png";

import project1 from "/assets/project1.png";
import project2 from "/assets/project2.png";
import project3 from "/assets/project3.png";
import project4 from "/assets/project4.png";

import { FiArrowUpRight } from "react-icons/fi";
import { HiArrowLongRight } from "react-icons/hi2";

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

  const reviews = [
    review1,
    review3,
    review2,
    review1,
    review3,
    review2,
    review1,
    review3,
    review2,
    review1,
    review3,
    review2,
    review1,
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

        <div className="project-list">
          <div className="project-item">
            <img src={project1} alt="Project 1" />
            <div className="project-data">
              <h1 className="project-name">Rajkosh</h1>
              <h1 className="project-details">Website | Domain | Server</h1>
            </div>
          </div>
          <div className="project-item">
            <img src={project2} alt="Project 2" />
            <div className="project-data">
              <h1 className="project-name">SKYLARK</h1>
              <h1 className="project-details">Website | Domain | Server</h1>
            </div>
          </div>
          <div className="project-item">
            <img src={project3} alt="Project 3" />
            <div className="project-data">
              <h1 className="project-name">Iconic Students Academy</h1>
              <h1 className="project-details">Website | Domain | Server</h1>
            </div>
          </div>
          <div className="project-item">
            <img src={project4} alt="Project 4" />
            <div className="project-data">
              <h1 className="project-name">Real Homes</h1>
              <h1 className="project-details">Website | Domain | Server</h1>
            </div>
          </div>
        </div>

        <button className="project-button">
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

          <form action="#" method="post" className="form">
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

      <div className="services">
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
        </div>

        <div className="blogs">
          {[blog1, blog2, blog3, blog1].map((blog, index) => (
            <div key={index} className="blog-card">
              <img
                src={blog}
                alt={`Blog ${index + 1}`}
                className="blog-image"
              />
            </div>
          ))}
        </div>
        <button className="project-button">
          <span>View More</span>
          <div className="project-arrow">
            <HiArrowLongRight />
          </div>
        </button>
      </div>

      <div className="newsletter">
        <h1 className="newsletter-title">SUBSCRIBE OUR NEWSLETTER</h1>
        <p className="newsletter-subtitle">
          Join Our Newsletter: Stay Updated, Exclusive Content, Sign Up
        </p>
        <div className="newsletter-form">
          <input
            type="email"
            placeholder="Enter your Email Address"
            className="newsletter-input"
          />
          <button className="newsletter-button">SUBSCRIBE</button>
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
