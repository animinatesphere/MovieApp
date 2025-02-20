import React from "react";
import "../css-component/FooterDetails.css";
import vector from "../assets/Vector 335 (Stroke).png";
import media1 from "../assets/Facebook.png";
import media2 from "../assets/Instagram.png";
import media3 from "../assets/LinkedIn.png";
import media4 from "../assets/YouTube.png";
import media5 from "../assets/Container.png";
const FooterDetails = () => {
  return (
    <>
      <div className="footer-details">
        <div className="footer-row-1">
          <p className="vec">
            Get the OMO App <img src={vector} alt="" />{" "}
          </p>
          <p className="vec">
            Help <img src={vector} alt="" />{" "}
          </p>
          <p className="vec">
            Site Index <img src={vector} alt="" />{" "}
          </p>
          <p className="vec">
            OMO Pro <img src={vector} alt="" />{" "}
          </p>
          <p className="vec">
            Advertising <img src={vector} alt="" />{" "}
          </p>
        </div>
        <div className="footer-row-1">
          <p className="vec">
            OMO Developer <img src={vector} alt="" />{" "}
          </p>
          <p className="vec">
            Jobs <img src={vector} alt="" />{" "}
          </p>
          <p className="vec">
            Privacy Policy <img src={vector} alt="" />{" "}
          </p>
        </div>
        <div className="social-media">
          <img src={media1} alt="" />
          <img src={media2} alt="" />
          <img src={media3} alt="" />
          <img src={media4} alt="" />
          <img src={media5} alt="" />
        </div>
      </div>
    </>
  );
};

export default FooterDetails;
