import React, { useState } from "react";
import "../css-component/navbar.css";
import navlogo from "../assets/movie-logo.png";
import magnifying from "../assets/magnifying-glass.png";
import bell from "../assets/bell.png";
import user from "../assets/user.png";
import sun from "../assets/sun.png";
import menuIcon from "../assets/menu-line.png"; // Add a hamburger icon
import closeIcon from "../assets/close-large-line.png"; // Add a close icon

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="harm">
        {/* Hamburger Button for Mobile */}
        <button className="hamburger" onClick={toggleMenu}>
          <div className="nav-bar-logo">
            <img src={navlogo} alt="Logo" />
          </div>
          <img src={isOpen ? closeIcon : menuIcon} alt="menu" />
        </button>
      </div>
      <div className="nav-bar-container">
        {/* Navbar Content */}

        <div className={`nav-logo-child ${isOpen ? "open" : ""}`}>
          {/* Logo */}
          <div className="nav-bar-logo">
            <img src={navlogo} alt="Logo" />
          </div>

          {/* Navigation Links */}
          <div className="Nav-link">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Movies</a>
              </li>
              <li>
                <a href="#">Series</a>
              </li>
              <li>
                <a href="#">Collection</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
            </ul>
          </div>

          {/* Icons Section */}
          <div className="nav-left">
            <div className="left-1">
              <img src={magnifying} alt="search" />
            </div>
            <div className="left-1">
              <img src={bell} alt="notifications" />
            </div>
            <div className="left-1">
              <img src={user} alt="user" />
            </div>
            <div className="left-1">
              <img src={sun} alt="theme" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
