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
            <h3>دانلود</h3>
            <ul>
              <li>فیلم</li>
              <li>سریال</li>
              <li>انیمیشن</li>
              <li>جستجو</li>
              <li>دسته بندی</li>
              <li>دسته بندی</li>
            </ul>
          </div>
          <div className="first-row2">
            <h3>دانلود</h3>
            <ul>
              <li>فیلم</li>
              <li>سریال</li>
              <li>انیمیشن</li>
              <li>جستجو</li>
              <li>دسته بندی</li>
              <li>دسته بندی</li>
            </ul>
          </div>
          <div className="first-row2">
            <h3>دانلود</h3>
            <ul>
              <li>فیلم</li>
              <li>سریال</li>
              <li>انیمیشن</li>
              <li>جستجو</li>
              <li>دسته بندی</li>
              <li>دسته بندی</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-logo">
            <button>
              <span className="logo-text">سینما سیتی، رسانه‌ای برای همه</span>
              <span className="logo">logo</span>
            </button>
          </div>

          <p className="footer-description">
            وبسایت +++++ فعالیت خود را از سال 1396 شروع کرده است و به صورت
            حرفه‌ای به دانلود فیلم و سریال بدون سانسور پرداخته است. در این
            وبسایت شما میتوانید هر فیلم یا سرییا یا انیمیشن مورد علاقه ی خود را
            به صورت آنلاین مشاهده و دانلود کنید. همچنین زیرنویس ها و دوبله هایی
            اختصاصی ای برای تمام فیلم و سریال ها تعیین شده است.
          </p>

          {/* Social Media Icons */}
          <div className="last">
            <div className="support-phone">تلفن پشتیبانی: 15*****0912</div>
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
