import React, { useState } from "react";
import "./AdminNavbar.scss";
import { MdMenu, MdClose } from "react-icons/md";

import logo from "../../images/FINOXEN STRATAGEM.png";
import { Link } from "react-router-dom";

export const AdminNavbar = () => {
  const [nav, setnav] = useState("t");

  function myFunction() {
    window.scrollTo(0, 0);
    nav === "t" ? setnav("tr") : setnav("t");
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
    <div className="AdminNavbar">
      <div
        className={nav === "t" ? "topnav" : "topnav responsive"}
        id="myTopnav"
      >
        <Link to="/" className="home">
          <div className="company">
            <img
              className="rotate-center"
              src={logo}
              alt="logoround"
              width="30px"
            />
            <span>Finoxen Stratagem</span>
            {/* <img src={logotext} alt="OORALI" width="auto" height="30px" /> */}
          </div>
        </Link>
        <div className="right-sec">
          {/* <a href="#aboutus" onClick={myFunction}>
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
          </a> */}

          <Link
            to="/"
            onClick={() => {
              localStorage.removeItem("finoxen");
            }}
          >
            <span>LOGOUT</span>
          </Link>
        </div>
        <div className="icon">
          {/* <img src={MdMenu} alt="menu" onClick={myFunction} width="25px" /> */}

          {nav === "t" ? (
            <MdMenu
              onClick={myFunction}
              style={{ color: "white", fontSize: "2rem" }}
              className="hamburger"
            />
          ) : (
            <MdClose
              onClick={myFunction}
              style={{ color: "white", fontSize: "2rem" }}
              className="hamburger"
            />
          )}
        </div>
      </div>
    </div>
  );
};
