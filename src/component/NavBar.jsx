// import React, { useState } from "react";
import "../css-component/navbar.css";
import React from "react";
import { FaSearch } from "react-icons/fa";
import logo from "../assets/download (2).png";
import line from "../assets/Frame 294.png";
import menu from "../assets/menu-line (1).png";
// import "./NavBar.css"; // Import the CSS file

const NavBar = () => {
  return (
    <nav className="navbar">
      {/* Logo Section */}
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
        <img src={line} alt="" className="line" />
        <span className="brand-name">Hex sean</span>
      </div>

      {/* Navigation Links */}
      <ul className="nav-links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/movies">Movies</a>
        </li>
        <li>
          <a href="/series">Series</a>
        </li>
        <li>
          <a href="/about">About Us</a>
        </li>
      </ul>

      {/* Search Bar */}
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <FaSearch className="search-icon" />
      </div>

      {/* Login / Signup Buttons */}
      <div className="auth-buttons">
        <button className="login-btn">Login</button>
        <button className="signup-btn">Sign Up</button>
      </div>
      <div className="harm">
        <img src={menu} alt="" />
      </div>
    </nav>
  );
};

export default NavBar;
