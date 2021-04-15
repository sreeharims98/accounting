import React from "react";
import "./Footer.scss";
import logo from "../images/FINOXEN STRATAGEM.png";
import logotext from "../images/FINOXEN STRATAGEM  text.png";

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import { GrMail } from "react-icons/gr";
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
          </div>
        </div>
        <div className="contact-use-sec">
          <span>Contact us</span>
          <div className="contact-sec">
            <div className="contact-point">
              <FaMapMarkerAlt
                style={{ color: "#1da0f2", fontSize: "1.4rem" }}
              />
              <div>1102 Saint Marys, Jackson Blvd, Chicago United State</div>
            </div>
            <div className="contact-point">
              <GrMail style={{ color: "#1da0f2", fontSize: "1.4rem" }} />
              <div>examplemail.com</div>
            </div>
            <div className="contact-point">
              <FaPhoneAlt style={{ color: "#1da0f2", fontSize: "1.4rem" }} />
              <div>+91 9876543210</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
