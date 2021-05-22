import React from "react";
// import { CustomerCardComp } from "./happy customer/CustomerCardComp";
import SlickCustomerComp from "./happy customer/SlickCustomerSec";
import "./HappyCustomerSec.scss";

import highway from "../images/customers/highway.jpg";
import aslifestyle from "../images/customers/aslifestyle.jpg";

export const HappyCustomerSec = () => {
  const data = [
    {
      name: "HIGHWAY THROTT CUSTOMES AND GARRAGES",
      image: highway,
      content:
        "We are extremely happy with services offered by Finoxen Stratagem for our integrated accounting system, business analysis and management reporting requirement. After taking their service, immediately we saw an immense improvement in our accounting and internal control system. This has enabled us to focus on our core business activities without worrying of accounting and internal control system.",
    },
    {
      name: " AS ESSENTIAL LIFESTYLES",
      image: aslifestyle,
      content:
        "Finoxen Stratagem’s cost-effective structure made it possible for us to meet all our financial needs at a competitive rate. Finoxen Stratagem's depth analysis and reports which helped in improving efficiency.",
    },
    {
      name: "SAAS ENTERPRISES",
      image: null,
      content:
        "I would like to thank you for your excellent efforts and commitment. I am impressed with your dedicated and professional submission that has helped us avoid unfavorable deficiencies that may have led to additional cost and time delay. Thank you once again and looking forward to working with you on future projects.",
    },
  ];

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
      <SlickCustomerComp data={data} />
    </div>
  );
};
