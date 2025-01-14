import React from "react";
import "./Services.css";

import service1 from "/assets/Services/service1.png";
import service2 from "/assets/Services/service2.png";
import service3 from "/assets/Services/service3.png";
import service4 from "/assets/Services/service4.png";
import service5 from "/assets/Services/service5.png";
import service6 from "/assets/Services/service6.png";
import service7 from "/assets/Services/service7.png";
import service8 from "/assets/Services/service8.png";
const Services = () => {
  const services = [
    { id: 1, src: service1, alt: "Service 1" },
    { id: 2, src: service2, alt: "Service 2" },
    { id: 3, src: service3, alt: "Service 3" },
    { id: 4, src: service4, alt: "Service 4" },
    { id: 5, src: service5, alt: "Service 5" },
    { id: 6, src: service6, alt: "Service 6" },
    { id: 7, src: service7, alt: "Service 7" },
    { id: 8, src: service8, alt: "Service 8" },
  ];
  return (
    <>
      <div className="section-hero">
        <h1 className="hero-title">SERVICES</h1>
      </div>
      <div className="services">
        <div className="services-header">
          <p className="services-description">
            We Provide Efficient, <br />
            Digital & IT Solution
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
          {services.map((service) => (
            <div key={service.id} className="folder">
              <img
                src={service.src}
                alt={service.alt}
                className="folder-image"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
