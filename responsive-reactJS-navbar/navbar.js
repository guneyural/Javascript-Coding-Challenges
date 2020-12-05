import React, { useState, useEffect, useRef } from "react";
import { websiteLinks, social } from "./data";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [links, setLinks] = useState(websiteLinks);
  const [socialLinks, setSocialLinks] = useState(social);
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const navRef = useRef(null);

  useEffect(() => {
    const getWidth = () => {
      setWindowSize(window.innerWidth);
    };
    window.addEventListener("resize", getWidth);
    return function cleanupListener() {
      window.removeEventListener("resize", getWidth);
    };
  }, [windowSize]);

  const collapse = () => {
    setIsCollapsed((prev) => !prev);
    if (isCollapsed) {
      navRef.current.className += " top-nav-responsive";
    } else {
      navRef.current.className = "top-nav";
    }
  };

  return (
    <div className="top-nav" ref={navRef}>
      <div className="wrapper">
        <img
          src="https://react-projects-11-navbar.netlify.app/static/media/logo.2bb7da65.svg"
          alt="logo"
        />
        <div id="nav-links-section">
          <section className="relative-section">
            {links.map((link) => {
              return (
                <li key={link.id} id="nav-links">
                  <a href={link.url}>{link.text}</a>
                </li>
              );
            })}
          </section>
        </div>
        {windowSize <= 640 ? (
          <button id="burger-icon" onClick={() => collapse()}>
            <FaBars />
          </button>
        ) : (
          <div id="social-links">
            {socialLinks.map((link) => {
              return (
                <li key={link.id}>
                  <a href={link.url}>{link.icon}</a>
                </li>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
