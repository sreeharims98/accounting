import React from "react";
import "./IntroductionSec.scss";
import { FaWhatsapp } from "react-icons/fa";

export const IntroductionSec = () => {
  return (
    <div className="IntroductionSec" id="aboutus">
      <div className="title">Who we are</div>
      <div className="underline">
        <ul>
          <li style={{ width: 38 }}></li>
          <li style={{ width: 18 }}></li>
          <li style={{ width: 9 }}></li>
        </ul>
      </div>
      <div className="about">
        <p>
          Finoxen Stratagem is one of the leading professional Strategist firms
          in south India having more experience in the field of Audit and
          Assurance, Financial Guidance, Technical Accounting Consulting,
          Company Law Matters, Income Tax Matters, Goods and Service Tax
          Matters, State and Local Tax services.
        </p>
        <p>
          Our firm has strived with the mission to provide a comprehensive range
          of financial Strategies and consulting services to its clients. We
          understand that each client is different in need and expectation so we
          provide tailored and pragmatic advice regardless of the size of the
          client. We can combine an array of services, applications and tools to
          fit the specific needs of your business to help increase your
          productivity and profitability.
        </p>
      </div>
      <div className="whatsapp-sec">
        <a
          href="https://wa.me/918075680501"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="icon wa">
            <FaWhatsapp />
          </div>
        </a>
      </div>
    </div>
  );
};
