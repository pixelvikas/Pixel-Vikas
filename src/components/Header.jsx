import React, { useState, useEffect, useRef } from "react";
import { FaHome } from "react-icons/fa";
import { MdPeople, MdDesignServices } from "react-icons/md";
import { FaHandshake } from "react-icons/fa";
import { RiArticleFill } from "react-icons/ri";

const Header = () => {
  const [activeLink, setActiveLink] = useState("#home");
  const [scrollHeader, setScrollHeader] = useState(false);
  const sectionsRef = useRef([]);

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
    { id: "home", name: "Home", icon: <FaHome /> },
    { id: "about", name: "About us", icon: <MdPeople /> },
    { id: "services", name: "Services", icon: <MdDesignServices /> },
    { id: "projects", name: "Projects", icon: <FaHandshake /> },
    { id: "blogs", name: "Blogs", icon: <RiArticleFill /> },
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
            src="assets/img/perfil.png"
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
                  <a
                    href={`#${item.id}`}
                    className={`nav__link ${
                      activeLink === `#${item.id}` ? "active-link" : ""
                    }`}
                  >
                    <i className="nav__icon">{item.icon}</i>
                    <span className="nav__name">{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Logo */}
          <a href="#" className="nav__logo" aria-label="Logo">
            Marlon
          </a>
        </nav>
      </header>
    </>
  );
};

export default Header;
