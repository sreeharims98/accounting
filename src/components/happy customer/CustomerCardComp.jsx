import React from "react";
import "./CustomerCardComp.scss";
import { FaQuoteLeft } from "react-icons/fa";

export const CustomerCardComp = ({ data }) => {
  return (
    <div className="CustomerCardComp">
      <FaQuoteLeft style={{ color: "#80808050", fontSize: "2rem" }} />
      <div className="about">{data?.content}</div>
      <div className="customer-sec">
        {data?.image && <img src={data?.image} alt="customerimage" />}
        <div className="company-name">{data?.name}</div>

        {/* <div className="right-sec"> */}
        {/* <div className="name">{data?.name}</div> */}
        {/* <div className="company-name">{data?.name}</div> */}
        {/* </div> */}
      </div>
    </div>
  );
};
