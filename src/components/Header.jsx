import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { MdPeople, MdDesignServices } from "react-icons/md";
import { FaHandshake } from "react-icons/fa";
import { RiArticleFill } from "react-icons/ri";
import BlackLogo from "/assets/pvlogoblack.png";
import "./Header.css";

const Header = () => {
  const sectionsRef = useRef({});
  const [activeLink, setActiveLink] = useState("");
  const [scrollHeader, setScrollHeader] = useState(false);

  // Scroll event listener for active link and header background
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.pageYOffset;

      // Highlight active link
      sectionsRef.current.forEach((section) => {
        const sectionTop = section.offsetTop - 50;
        const sectionHeight = section.offsetHeight;

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveLink(`#${section.getAttribute("id")}`);
        }
      });

      // Add/remove background to header
      setScrollHeader(window.scrollY >= 80);
    };

    // Attach scroll listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigation items with React Icons
  const navItems = [
    { id: "home", link: "/", name: "Home", icon: <FaHome /> },
    { id: "about-us", link: "/about-us", name: "About Us", icon: <MdPeople /> },
    {
      id: "services",
      link: "/services",
      name: "Services",
      icon: <MdDesignServices />,
    },
    {
      id: "projects",
      link: "/projects",
      name: "Projects",
      icon: <FaHandshake />,
    },
    { id: "blogs", link: "/blogs", name: "Blogs", icon: <RiArticleFill /> },
  ];

  return (
    <>
      <header
        className={`header ${scrollHeader ? "scroll-header" : ""}`}
        id="header"
      >
        <nav className="nav container">
          {/* Profile Image */}
          <img
            src={BlackLogo}
            alt="Profile"
            className="nav__img"
            aria-label="Profile image"
          />

          {/* Navigation Menu */}
          <div className="nav__menu" id="nav-menu">
            <ul className="nav__list">
              {navItems.map((item) => (
                <li
                  className="nav__item"
                  key={item.id}
                  ref={(el) => (sectionsRef.current[item.id] = el)}
                >
                  <Link
                    to={item.link}
                    className={`nav__link ${
                      activeLink === `#${item.id}` ? "active-link" : ""
                    }`}
                    onClick={() => setActiveLink(`#${item.id}`)}
                  >
                    <i
                      className={`nav__icon ${
                        activeLink === `#${item.id}` ? "active-icon" : ""
                      }`}
                    >
                      {item.icon}
                    </i>
                    <span className="nav__name">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Logo */}
          <Link className="nav__logo">
            <div>Lets Talk</div>
          </Link>
        </nav>
      </header>
    </>
  );
};

export default Header;
