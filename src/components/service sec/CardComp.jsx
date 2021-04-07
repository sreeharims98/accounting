import React from "react";
import "./CardComp.scss";
import logo from "../../images/logo.png";

export const CardComp = () => {
  return (
    <div className="CardComp">
      <img src={logo} alt="logo" />
      <div className="title-CardComp">TITLE</div>
      <div className="point-sec">
        <ul>
          <li>First point</li>
          <li>Second point</li>
          <li>Third point</li>
          <li>Fourth point</li>
          <li>Fifth point</li>
        </ul>
        {/* Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae
        nesciunt deserunt officia incidunt facere soluta, labore atque quae at
        sint! */}
      </div>
    </div>
  );
};
