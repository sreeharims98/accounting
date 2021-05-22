import React from "react";
import "./Footer.scss";
import logo from "../images/FINOXEN STRATAGEM.png";
// import logotext from "../images/FINOXEN STRATAGEM  text.png";

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <div className="Footer">
      <div className="text-above">
        <div className="company-sec">
          <a href="#home" className="company-name">
            <img src={logo} alt="logo" width="60px" />
            {/* <img src={logotext} alt="logo" height="10px" /> */}

            <span>Finoxen Stratagem</span>
          </a>
          <div className="company-about">
            Let's make an achievement meeting new heights and adding value to
            the invested capital with "Finoxen Stratagem"
          </div>
          <div className="follow-us-sec">
            <span>Follow us</span>
            <div className="icons">
              <div className="icon fb">
                <FaFacebookF />
              </div>
              <div className="icon tw">
                <FaTwitter />
              </div>
              <div className="icon li">
                <FaLinkedinIn />
              </div>
              <div className="icon ig">
                <FaInstagram />
              </div>
            </div>
          </div>
        </div>
        <div className="useful-links-sec">
          <span>Usefull links</span>
          <div className="footer-links">
            <a href="#home">&gt; Home</a>
            <a href="#aboutus">&gt; About us</a>
            <a href="#services">&gt; Services</a>
            <a href="#customers">&gt; Customers</a>
            <a href="#contactus">&gt; Contact us</a>
            <Link to="/admin">&gt; Admin</Link>
          </div>
        </div>
        <div className="contact-use-sec">
          <span>Contact us</span>
          <div className="contact-sec">
            <div className="contact-point">
              <FaMapMarkerAlt
                style={{ color: "#1da0f2", fontSize: "1.4rem" }}
              />
              <div>
                CORPORATE OFFICE:
                <br /> VI/321 , IST FLOOR AMBALLUR , THRISSUR, KERALA - 680302
              </div>
            </div>
            <div className="contact-point">
              <FaMapMarkerAlt
                style={{ color: "#1da0f2", fontSize: "1.4rem" }}
              />
              <div>
                BRANCH OFFICE: <br /> DOOR NO.64/3141, IST FLOOR, PULLEPADY,
                THAMMANAM, ROAD, KATHRIKADAVU, ERNAKULAM, KERALA - 682071
              </div>
            </div>
            <div className="contact-point">
              <GrMail style={{ color: "#1da0f2", fontSize: "1.4rem" }} />
              <div>info@finoxenstratagem.in</div>
            </div>
            <div className="contact-point">
              <FaPhoneAlt style={{ color: "#1da0f2", fontSize: "1.4rem" }} />
              <div>+91 9746463717,</div>
              <div>+91 8075680501</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
