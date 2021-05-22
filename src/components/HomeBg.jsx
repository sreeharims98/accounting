import React from "react";
import "./HomeBg.scss";
import logo from "../images/FINOXEN STRATAGEM.png";

export const HomeBg = () => {
  return (
    <div className="HomeBg" id="home">
      {/* <img src={bg1} alt="background" /> */}
      <div className="text-above">
        <div className="logo">
          <img src={logo} alt="finoxen" />
        </div>
        <div className="title">FINOXEN STRATAGEM</div>
        <div className="sub-title">
          Financial Strategists & Accounting Experts
        </div>
        <div className="sub-sub-title">
          Let's make an achievement meeting new heights and adding value to the
          invested capital with <p>"FINOXEN STRATAGEM"</p>
        </div>
        <a href="#contactus">
          <button className="button">GET QUOTE</button>
        </a>
      </div>
    </div>
  );
};
