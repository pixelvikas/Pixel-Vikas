import React from "react";
import "./Footer.css";
import PvLogo from "/assets/pvlogo.png";
import { FaInstagram, FaYoutube, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { TbBrandX } from "react-icons/tb"; // For the 'X' (Twitter alternative)
import { FiArrowUpRight } from "react-icons/fi";

const Footer = () => {
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
    <footer className="footer">
      {/* Top Section */}
      <div className="footer__top">
        <div className="footer__section">
          <h3>Find us</h3>
          <p>
            C-402/9, Chandivali
            <br />
            Mahada, Mumbai - 72
          </p>
        </div>
        <div className="footer__section">
          <h3>Mail us</h3>
          <p>
            <a href="mailto:info@pixelvikas.com" className="footer__email">
              info@pixelvikas.com
            </a>
          </p>
        </div>
        <div className="footer__section">
          <h3>Call us</h3>
          <p>
            <a href="tel:+919324389141" className="footer__phone">
              +91 9324389141
            </a>
          </p>
        </div>
      </div>

      {/* Middle Section */}
      <div className="footer__middle">
        {/* About Section */}
        <div className="footer__about">
          <img src={PvLogo} alt="Pixel Vikas Logo" className="footer__logo" />
          <p>
            "Stay connected! Follow us on social media for the latest tips,
            trends, and insights."
          </p>

          <h2 className="follow-title">Follow Us</h2>
          <div className="social-icons">
            <a
              href="https://www.instagram.com/pixelvikas/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.linkedin.com/company/pixel-vikas/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://x.com/Pixel_Vikas?t=TASFKKoRdR6WnSkblwr_kQ&s=09"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
            >
              <TbBrandX />
            </a>
            <a href="mailto:info@example.com" aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer__links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about-us">About us</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/projects">Projects</a>
            </li>
            <li>
              <a href="/contact-us">Contact us</a>
            </li>
            <li>
              <a href="/blogs">Blogs</a>
            </li>
          </ul>
        </div>

        {/* Subscription Section */}
        <div className="footer__subscribe">
          <h3>Subscribe</h3>
          <p>
            Don’t miss the latest news. Subscribe to our feeds by entering your
            email below.
          </p>
          <div className="footer-form">
            <form onSubmit={onSubmit} className="footer-news">
              <input
                type="email"
                name="email"
                placeholder="Enter your Email Address"
                className="footer__input"
              />
              <button type="submit" className="footer-submit-button">
                <div className="footer-submit">
                  <span className="footer-arrow-icon">
                    <FiArrowUpRight />
                  </span>
                </div>
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer__bottom">
        <p>© 2025 Pixel Vikas. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
