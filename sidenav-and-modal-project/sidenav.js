import React, { useState } from "react";
import { links, social } from "./data";
import { FaBars, FaTimes } from "react-icons/fa";

const Sidenav = () => {
  const [isSidenavOpen, setIsSidenavOpen] = useState(false);
  const [inSiteLinks, setInSiteLinks] = useState(links);
  const [socialLinks, setSocialLinks] = useState(social);

  return (
    <>
      <button className="open-sidenav" onClick={() => setIsSidenavOpen(true)}>
        <FaBars />
      </button>
      <div className={isSidenavOpen ? "sidenav show-sidenav" : "sidenav"}>
        <section className="sidenav-header-section">
          <img
            src="https://react-projects-12-sidebar-modal.netlify.app/static/media/logo.2bb7da65.svg"
            alt="logo"
            width="220px"
            style={{ marginLeft: "15px" }}
          />
          <button onClick={() => setIsSidenavOpen(false)}>
            <FaTimes />
          </button>
        </section>
        <section className="sidenav-body-section">
          {inSiteLinks.map((link) => {
            return (
              <a href={link.url} className="link">
                <li key={link.id} className="in-site-links">
                  <span className="link-icon">{link.icon}</span>
                  {link.text}
                </li>
              </a>
            );
          })}
        </section>
        <section className="sidenav-bottom-section">
          {socialLinks.map((link) => {
            return (
              <li key={link.id} className="social-links">
                <a className="link" href={link.url}>
                  {link.icon}
                </a>
              </li>
            );
          })}
        </section>
      </div>
    </>
  );
};

export default Sidenav;
