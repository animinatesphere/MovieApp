import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa";
import "../css-component/RealFooter.css"; // Import the CSS file
import frame30 from "../assets/Frame 30.png";
import Rec from "../assets/Rectangle 101.png";

const RealFooter = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Footer Sections */}

        <div className="footer-section">
          <div className="first-row">
            <h3>Privacy Support</h3>
            <ul>
              <li>
                <p>
                  Terms & <br /> Conditions
                </p>
              </li>
              <li>
                <p>Help & Support</p>
              </li>
            </ul>
          </div>
          <div className="first-row2">
            <h3>Download</h3>
            <ul>
              <li>Movie</li>
              <li>Series</li>
              <li>Animation</li>
              <li>Search</li>
              <li>Category</li>
              <li>Category</li>
            </ul>
          </div>
          <div className="first-row2">
            <h3>Download</h3>
            <ul>
              <li>Film</li>
              <li>Series</li>
              <li>Animation</li>
              <li>Search</li>
              <li>Category</li>
              <li>Category</li>
            </ul>
          </div>
          <div className="first-row2">
            <h3>Download</h3>
            <ul>
              <li>Movie</li>
              <li>Series</li>
              <li>Animation</li>
              <li>Search</li>
              <li>Category</li>
              <li>Category</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-logo">
            <button>
              <span className="logo-text">
                Cinema City, a media for everyone
              </span>

              <span className="logo">logo</span>
            </button>
          </div>

          <p className="footer-description">
            The +++++ website started its activity in 2017 and has been
            professionally providing uncensored movie and series downloads. On
            this website, you can watch and download any movie, series, or
            animation of your choice online. Additionally, exclusive subtitles
            and dubbing have been provided for all movies and series.
          </p>

          {/* Social Media Icons */}
          <div className="last">
            <div className="support-phone">Support Phone: 15*****0912</div>
            <div className="social-icons">
              <img src={frame30} alt="" />
            </div>
            {/* Support Phone */}
          </div>
        </div>
      </div>
      <div className="half">
        <img src={Rec} alt="" />
      </div>
    </footer>
  );
};

export default RealFooter;
