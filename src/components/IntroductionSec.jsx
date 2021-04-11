import React from "react";
import "./IntroductionSec.scss";

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
        <p>
          We offer a wide spectrum of services that includes Company Formation
          and Registration, Auditing and Assurance Services, Taxation,
          Accounting and Payroll Outsourcing Services, Project Financing and
          Technology Consulting. Our people work with you to build the value you
          are looking for by providing insightful solutions, ideas, attention to
          detail, expertise and results. Our reputation ties in building lasting
          relationships with our clients and a focus on delivering value in all
          we do.
        </p>
      </div>
    </div>
  );
};
