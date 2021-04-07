import React from "react";
import "./Navbar.scss";
import { MdMenu } from "react-icons/md";
import logo from "../images/logo.png";

export const Navbar = () => {
  function myFunction() {
    // window.scrollTo(0, 0);
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("myTopnav").style.top = "0";
    } else {
      document.getElementById("myTopnav").style.top = "-68px";
    }
    prevScrollpos = currentScrollPos;
  };
  return (
    <div className="Navbar">
      <div className="topnav" id="myTopnav">
        <a href="#home" className="home">
          <div className="company">
            <img
              className="rotate-center"
              src={logo}
              alt="logoround"
              width="30px"
            />
            <span>COMPANY NAME</span>
            {/* <img src={logotext} alt="OORALI" width="auto" height="30px" /> */}
          </div>
        </a>
        <div className="right-sec">
          <a href="#aboutus" onClick={myFunction}>
            ABOUT US
          </a>
          <a href="#services" onClick={myFunction}>
            SERVICES
          </a>
          <a href="#whyus" onClick={myFunction}>
            WHY US
          </a>
          <a href="#customers" onClick={myFunction}>
            CUSTOMERS
          </a>
          <a href="#contactus" onClick={myFunction}>
            CONTACT US
          </a>
        </div>
        <div className="icon">
          {/* <img src={MdMenu} alt="menu" onClick={myFunction} width="25px" /> */}
          <MdMenu
            onClick={myFunction}
            style={{ color: "white", fontSize: "2rem" }}
            className="hamburger"
          />
        </div>
      </div>
    </div>
  );
};
