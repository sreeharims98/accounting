import React from "react";
import "./HomeBg.scss";
import bg1 from "../images/1.jpg";

export const HomeBg = () => {
  return (
    <div className="HomeBg">
      {/* <img src={bg1} alt="background" /> */}
      <div className="text-above">
        <div className="title">ENTER YOUR TITLE</div>
        <div className="sub-title">ENTER YOUR SUB TITLE</div>
        <button className="button">BUTTON</button>
      </div>
    </div>
  );
};
