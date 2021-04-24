import React from "react";
import "./HomeBg.scss";
import bg1 from "../images/1.jpg";

export const HomeBg = () => {
  return (
    <div className="HomeBg" id="home">
      {/* <img src={bg1} alt="background" /> */}
      <div className="text-above">
        <div className="title">Finoxen Stratagem</div>
        <div className="sub-title">
          Financial Strategists & Accounting Experts
        </div>
        <div className="sub-sub-title">
          Get your complete business compliance solution with us !
        </div>
        <a href="#contactus">
          <button className="button"> GET QUOTE</button>
        </a>
      </div>
    </div>
  );
};
