import React, { use } from "react";
// import { Link } from "react-router-dom";
import "../css-component/navbar.css";
import navlogo from "../assets/movie-logo.png";
import magnifying from "../assets/magnifying-glass.png";
import bell from "../assets/bell.png";
import user from "../assets/user.png";
import sun from "../assets/sun.png";

const NavBar = () => {
  return (
    <>
      {/* navbar container */}
      <div className="nav-bar-container">
        {/* nav-logo-child */}
        <div className="nav-logo-child">
          {/* nav-bar-logo */}
          <div className="nav-bar-logo">
            <img src={navlogo} alt="" />
          </div>
          {/*end of  nav-bar-logo */}
          {/* nav-link */}
          <div className="Nav-link">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="">Pricing</a>
              </li>
              <li>
                <a href="">Movies</a>
              </li>
              <li>
                <a href="">Series</a>
              </li>
              <li>
                <a href="">Collection</a>
              </li>
              <li>
                <a href="">FAQ</a>
              </li>
            </ul>
          </div>
          {/* end of nav-link */}
          <div className="nav-left">
            <div className="left-1">
              <img src={magnifying} alt="" />
            </div>
            <div className="left-1">
              <img src={bell} alt="" />
            </div>
            <div className="left-1">
              <img src={user} alt="" />
            </div>
            <div className="left-1">
              <img src={sun} alt="" />
            </div>
          </div>
        </div>
        {/* end of Nav-logo-child */}
      </div>
      {/* end of navbar container */}
    </>
  );
};

export default NavBar;
