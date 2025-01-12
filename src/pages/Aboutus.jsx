import React, { useState, useEffect } from "react";
import PV from "/assets/PV.svg";
import { FiArrowUpRight } from "react-icons/fi";
import "./Aboutus.css";

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

import d1 from "/assets/techstack/figma.svg";
import d2 from "/assets/techstack/ps.svg";
import d3 from "/assets/techstack/ai.svg";
import d4 from "/assets/techstack/canva.svg";
import d5 from "/assets/techstack/coreldraw.svg";
import d6 from "/assets/techstack/webflow.svg";

import f1 from "/assets/techstack/angular.svg";
import f2 from "/assets/techstack/react.svg";
import f3 from "/assets/techstack/vue.svg";
import f4 from "/assets/techstack/tailwindcss.svg";
import f5 from "/assets/techstack/html.svg";
import f6 from "/assets/techstack/css.svg";
import f7 from "/assets/techstack/js.svg";
import f8 from "/assets/techstack/sass.svg";
import f9 from "/assets/techstack/threejs.svg";
import f10 from "/assets/techstack/bootstrap.svg";
import f11 from "/assets/techstack/redux.svg";
import f12 from "/assets/techstack/redis.svg";
import f13 from "/assets/techstack/gsap.svg";

import b1 from "/assets/techstack/aws.svg";
import b2 from "/assets/techstack/ruby.svg";
import b3 from "/assets/techstack/dj.svg";
import b4 from "/assets/techstack/express.svg";
import b5 from "/assets/techstack/laravel.svg";
import b6 from "/assets/techstack/docker.svg";
import b7 from "/assets/techstack/go.svg";
import b8 from "/assets/techstack/mongodb.svg";
import b9 from "/assets/techstack/mysql.svg";
import b10 from "/assets/techstack/nextjs.svg";
import b11 from "/assets/techstack/nodejs.svg";
import b12 from "/assets/techstack/deno.svg";
import b13 from "/assets/techstack/ci.svg";
import b14 from "/assets/techstack/reactnativefirebase.svg";
import b15 from "/assets/techstack/streamlit.svg";
import b16 from "/assets/techstack/flask.svg";
import b17 from "/assets/techstack/firebase.svg";
import b18 from "/assets/techstack/jupyter.svg";
import b19 from "/assets/techstack/php.svg";
import b20 from "/assets/techstack/psql.svg";

import m1 from "/assets/techstack/react.svg";
import m2 from "/assets/techstack/kotlin.svg";
import m3 from "/assets/techstack/android.svg";
import m4 from "/assets/techstack/swift.svg";
import m5 from "/assets/techstack/flutter.svg";

import s1 from "/assets/techstack/aws.svg";
import s2 from "/assets/techstack/gcloud.svg";
import s3 from "/assets/techstack/ubuntu.svg";
import s4 from "/assets/techstack/linux.svg";
import s5 from "/assets/techstack/nginx.svg";
import s6 from "/assets/techstack/redhat.svg";
import s7 from "/assets/techstack/kali.svg";

import n1 from "/assets/techstack/framer.svg";
import n2 from "/assets/techstack/wix.svg";
import n3 from "/assets/techstack/wpress.svg";
import n4 from "/assets/techstack/shopify.svg";
import n5 from "/assets/techstack/blogger.svg";

import p1 from "/assets/techstack/phonepe.svg";
import p2 from "/assets/techstack/razorpay.svg";
import p3 from "/assets/techstack/stripe.svg";

import do1 from "/assets/techstack/godaddy.svg";
import do2 from "/assets/techstack/hostinger.svg";
import do3 from "/assets/techstack/namecheap.svg";
import do4 from "/assets/techstack/cloudflare.svg";

import h1 from "/assets/techstack/vercel.svg";
import h2 from "/assets/techstack/digitalocean.svg";
import h3 from "/assets/techstack/hostinger.svg";
import h4 from "/assets/techstack/cpanel.svg";
import h5 from "/assets/techstack/netlify.svg";

import v1 from "/assets/techstack/git.svg";
import v2 from "/assets/techstack/github.svg";
import v3 from "/assets/techstack/gitlab.svg";

import so1 from "/assets/techstack/instagram.svg";
import so2 from "/assets/techstack/facebook.svg";
import so3 from "/assets/techstack/youtube.svg";
import so4 from "/assets/techstack/whatsappb.svg";
import so5 from "/assets/techstack/x.svg";
import so6 from "/assets/techstack/linkedin.svg";
import so7 from "/assets/techstack/gmail.svg";
import so8 from "/assets/techstack/gmap.svg";
import so9 from "/assets/techstack/googleads.svg";
import so10 from "/assets/techstack/meta.svg";

const Aboutus = () => {
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
      <div className="section-hero">
        <h1 className="hero-title">About Us</h1>
      </div>
      <div className="projects">
        <div className="projects-header">
          <div className="projects-title">
            <h1 className="highlight-text">*WHO ARE WE!?</h1>
            <h1>
              ABOUT <span className="span-yellow">US </span>
            </h1>
          </div>
          <p className="projects-description">
            We transform innovative ideas into captivating and memorable digital
            experiences that engage and inspire
          </p>
        </div>

        <div className="about-us-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </div>
      <div className="services">
        <div className="services-header">
          <div className="services-title">
            <h1 className="highlight-text">*WHAT DO WE AIM?!</h1>
            <h1>
              OUR <span className="span-yellow">VISION</span>
            </h1>
          </div>
        </div>
        <div className="vision-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </div>
      <div className="projects">
        <div className="projects-header">
          <div className="projects-title">
            <h1 className="highlight-text">*WHAT ARE OUR AMBITIONS!?</h1>
            <h1>
              OUR <span className="span-yellow">MISSION</span>
            </h1>
          </div>
        </div>

        <div className="about-us-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </div>
      <div className="aboutus-solution">
        <div className="aboutus-solution-header">
          <p className="aboutus-solution-description">
            We Provide Efficient,
            <br /> Digital & IT Solution{" "}
          </p>
          <div className="aboutus-solution-title">
            <h1 className="highlight-text">*YOU KNOW WHAT?!</h1>
            <h1>
              WE BUILD <span className="span-white">LASTING IMPACT</span> WITH{" "}
              <span className="span-white">DESIGN</span>,{" "}
              <span className="span-white">DEVELOPMENT</span>, AND DIGITAL{" "}
              <span className="span-white">SOLUTIONS </span>
            </h1>
          </div>
        </div>
      </div>

      <div className="solution-bar">
        {data.map((item) => (
          <div className="bar" key={item.id}>
            <div className="bar-content">
              <div className="bar-head">
                <img src={PV} alt="Icon" className="bar-icon" />
                <p className="bar-text">{item.text}</p>
                <div className="solution-arrow">
                  <FiArrowUpRight className="arrow-icon" />
                </div>
              </div>
              <div className="bar-desc">
                <ul>
                  {item.description
                    .split(".")
                    .filter((point) => point.trim() !== "") // Remove empty points
                    .map((point, index) => (
                      <li key={index}>{point.trim()}.</li> // Trim whitespace and re-add the dot
                    ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="ourclients">
        <div className="ourclients-header">
          <div className="ourclients-title">
            <h1 className="highlight-text">
              *CLIENT’S ARE STILL CONNECTED WITH US!
            </h1>
            <h1>
              EXPLORE <br />
              <span className="span-white"> OUR </span> CLIENT’S
            </h1>
          </div>
        </div>
      </div>

      <div className="client">
        <img src={client1} alt="Client 1" />
        <img src={client3} alt="Client 3" />
        <img src={client4} alt="Client 4" />
        <img src={client5} alt="Client 5" />
        <img src={client6} alt="Client 6" />
        <img src={client7} alt="Client 7" />
        <img src={client9} alt="Client 9" />
        <img src={client10} alt="Client 10" />
        <img src={client11} alt="Client 11" />
        <img src={client12} alt="Client 12" />
        <img src={client13} alt="Client 13" />
      </div>

      <div className="technology-stack">
        <div className="aboutus-solution-header">
          <div className="aboutus-solution-title">
            <h1 className="highlight-text">*DOMINATING WITH PRECISION!</h1>
            <h1>
              TECH{" "}
              <span className="span-white">STACK</span>
            </h1>
          </div>
        </div>

        <div className="stack-row">
          <div className="stack">
            <h1>Design</h1>
            <div className="stack-img">
              <img src={d1} alt="Design Tool 1" />
              <img src={d2} alt="Design Tool 2" />
              <img src={d3} alt="Design Tool 3" />
              <img src={d4} alt="Design Tool 4" />
              <img src={d5} alt="Design Tool 5" />
              <img src={d6} alt="Design Tool 6" />
            </div>
          </div>
          <div className="stack">
            <h1>Front End Development</h1>
            <div className="stack-img">
              <img src={f1} alt="" />
              <img src={f2} alt="" />
              <img src={f3} alt="" />
              <img src={f4} alt="" />
              <img src={f5} alt="" />
              <img src={f6} alt="" />
              <img src={f7} alt="" />
              <img src={f8} alt="" />
              <img src={f9} alt="" />
              <img src={f10} alt="" />
              <img src={f11} alt="" />
              <img src={f12} alt="" />
              <img src={f13} alt="" />
            </div>
          </div>
        </div>
        <div className="stack-row">
          <div className="stack">
            <h1>Back End Development</h1>
            <div className="stack-img">
              <img src={b1} alt="" />
              <img src={b2} alt="" />
              <img src={b3} alt="" />
              <img src={b4} alt="" />
              <img src={b5} alt="" />
              <img src={b6} alt="" />
              <img src={b7} alt="" />
              <img src={b8} alt="" />
              <img src={b9} alt="" />
              <img src={b10} alt="" />
              <img src={b11} alt="" />
              <img src={b12} alt="" />
              <img src={b13} alt="" />
              <img src={b14} alt="" />
              <img src={b15} alt="" />
              <img src={b16} alt="" />
              <img src={b17} alt="" />
              <img src={b18} alt="" />
              <img src={b19} alt="" />
              <img src={b20} alt="" />
            </div>
          </div>
          <div className="stack">
            <h1>Mobile App Development</h1>
            <div className="stack-img">
              <img src={m1} alt="" />
              <img src={m2} alt="" />
              <img src={m3} alt="" />
              <img src={m4} alt="" />
              <img src={m5} alt="" />
            </div>
          </div>
        </div>
        <div className="stack-row">
          <div className="stack">
            <h1>Server</h1>
            <div className="stack-img">
              <img src={s1} alt="" />
              <img src={s2} alt="" />
              <img src={s3} alt="" />
              <img src={s4} alt="" />
              <img src={s5} alt="" />
              <img src={s6} alt="" />
              <img src={s7} alt="" />
            </div>
          </div>
          <div className="stack">
            <h1>No Code</h1>
            <div className="stack-img">
              <img src={n1} alt="" />
              <img src={n2} alt="" />
              <img src={n3} alt="" />
              <img src={n4} alt="" />
              <img src={n5} alt="" />
            </div>
          </div>
        </div>
        <div className="stack-row">
          <div className="stack">
            <h1>Payement Gateway</h1>
            <div className="stack-img">
              <img src={p1} alt="" />
              <img src={p2} alt="" />
              <img src={p3} alt="" />
            </div>
          </div>
          <div className="stack">
            <h1>Domain</h1>
            <div className="stack-img">
              <img src={do1} alt="" />
              <img src={do2} alt="" />
              <img src={do3} alt="" />
              <img src={do4} alt="" />
            </div>
          </div>
        </div>
        <div className="stack-row">
          <div className="stack">
            <h1>Hosting</h1>
            <div className="stack-img">
              <img src={h1} alt="" />
              <img src={h2} alt="" />
              <img src={h3} alt="" />
              <img src={h4} alt="" />
              <img src={h5} alt="" />
            </div>
          </div>
          <div className="stack">
            <h1>Version Control</h1>
            <div className="stack-img">
              <img src={v1} alt="" />
              <img src={v2} alt="" />
              <img src={v3} alt="" />
            </div>
          </div>
        </div>

        <div className="stack-row">
          <div className="stack">
            <h1>Social Media</h1>
            <div className="stack-img">
              <img src={so1} alt="" />
              <img src={so2} alt="" />
              <img src={so3} alt="" />
              <img src={so4} alt="" />
              <img src={so5} alt="" />
              <img src={so6} alt="" />
              <img src={so7} alt="" />
              <img src={so8} alt="" />
              <img src={so9} alt="" />
              <img src={so10} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutus;
