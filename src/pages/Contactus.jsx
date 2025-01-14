// Contactus.js
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { FaInstagram, FaYoutube, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { TbBrandX } from "react-icons/tb"; // For the 'X' (Twitter alternative)

import "./Contactus.css";

const Contactus = () => {
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
  return (
    <>
      {/* Hero Section */}
      <div className="section-hero">
        <h1 className="hero-title">CONTACT US</h1>
      </div>

      {/* Contact Division */}
      <div className="contact-division">
        {/* Contact Content */}
        <div className="contact-content">
          <div className="contact-heading">
            <h1>
              CONTACT <br /> <span className="span-yellow">INFORMATION</span>
            </h1>
            <p>
              Reach out to us for any inquiries or support. We are here to
              assist you with your needs and ensure a seamless experience.
            </p>
          </div>

          {/* Social Icons */}
          <div className="contact-socials">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <FaYoutube />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
            >
              <TbBrandX />
            </a>
            <a href="mailto:info@pixelvikas.com" aria-label="Email">
              <FaEnvelope />
            </a>
          </div>

          {/* Contact Details */}
          <div className="contact-details">
            <h1>Email</h1>
            <p>info@pixelvikas.com</p>
            <h1>Phone</h1>
            <p>+91 9324389141</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form">
          <h1 className="contact-form-header">
            LET'S <span className="span-purple"> TALK</span>{" "}
          </h1>
          <h2 className="contact-form-subtitle">Consultation is free</h2>
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
              rows="5"
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
      </div>
    </>
  );
};

export default Contactus;
