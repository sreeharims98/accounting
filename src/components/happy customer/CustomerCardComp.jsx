import React from "react";
import "./CustomerCardComp.scss";
import { FaQuoteLeft } from "react-icons/fa";

export const CustomerCardComp = () => {
  return (
    <div className="CustomerCardComp">
      <FaQuoteLeft style={{ color: "#80808050", fontSize: "2rem" }} />
      <div className="about">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis alias
        cupiditate veniam modi consectetur perferendis id mollitia, laborum
        impedit quis voluptate tempora magni consequuntur ab tenetur, quos et
        natus repudiandae.
      </div>
      <div className="customer-sec">
        <img
          src="http://themes.audemedia.com/html/goodgrowth/images/testimonial5.jpg"
          alt="customerimage"
        />
        <div className="right-sec">
          <div className="name">NAME</div>
          <div className="company-name">COMPANY NAME</div>
        </div>
      </div>
    </div>
  );
};
