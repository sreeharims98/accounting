import React from "react";
import { CustomerCardComp } from "./happy customer/CustomerCardComp";
import SlickCustomerComp from "./happy customer/SlickCustomerSec";
import "./HappyCustomerSec.scss";

export const HappyCustomerSec = () => {
  return (
    <div className="HappyCustomerSec" id="customers">
      <div className="title">Our Happy Customers</div>
      <div className="underline">
        <ul>
          <li style={{ width: 38 }}></li>
          <li style={{ width: 18 }}></li>
          <li style={{ width: 9 }}></li>
        </ul>
      </div>
      <SlickCustomerComp />
    </div>
  );
};
