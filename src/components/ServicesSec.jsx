import React, { useState } from "react";
import { CardComp } from "./service sec/CardComp";
import "./ServicesSec.scss";

import auditing from "../images/services/auditing.jpg";
import tax from "../images/services/tax.jpg";
import corporate from "../images/services/corporate.jpg";
import accounting from "../images/services/accounting.jpg";
import business from "../images/services/business.jpg";
import corporaterisk from "../images/services/corporaterisk.jpg";
import crisis from "../images/services/crisis.jpg";
import nri from "../images/services/nri.jpg";
import shared from "../images/services/shared.jpg";
import staff from "../images/services/staff.jpg";

export const ServicesSec = () => {
  const [data, setdata] = useState([
    {
      name: "AUDITING & ASSURANCE",
      image: auditing,
      about:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit iusto, aliquam totam doloribus Velit iusto, aliquam totam doloribus totam doloribus",
      points: [
        "STATUTORY AUDITS",
        "TAX AUDITS",
        "INTERNAL AUDITS",
        "CERTIFICATIONS",
        "CONCURRENT AUDITS",
        "MANAGEMENT AUDITS",
        "OPERATIONS AUDITS",
        "STOCK AUDITS",
      ],
    },
    {
      name: "INCOME TAX",
      image: tax,
      about:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit iusto, aliquam totam doloribus Velit iusto, aliquam totam doloribus totam doloribus",
      points: [
        "CONSULTANCY ON INCOME TAX MATTERS",
        "LIAISON WITH INCOME TAX AUTHORITIES",
        "CONSULTANCY ON TAX PLANNING AND SAVINGS",
        "BUSINESS AND INDIVIDUAL TAX PLANNING",
        "NRI TAXATIONS",
        "E-FILING OF INCOME TAX RETURNS",
        "E- FILING OF TDS RETURNS",
        "GETTING TAN & PAN",
        "SERVICES RELATED TO WITHHOLDING TAXES/ TDS",
      ],
    },
    {
      name: "GOODS & SERVICE TAX",
      image: tax,
      about:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit iusto, aliquam totam doloribus Velit iusto, aliquam totam doloribus totam doloribus",
      points: [
        "GST REGISTRATION",
        "CONSULTANCY ON SERVICES AS PER THE APPLICABILITY OF GST ACT 2017",
        "CONSULTANCY ON DEPOSIT OF MONTHLY GST OF CORPORATE AND INDIVIDUALS",
        "LIASIONING WITH RESPECTIVE AUTHORITIES",
        "PREPRATION OF RETURNS AND CHALLANS",
        "PREPARING & FILING GSTR 7, GSTR 9, DRC 03,",
      ],
    },
    {
      name: "CORPORATE FINANCE",
      image: corporate,
      about:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit iusto, aliquam totam doloribus Velit iusto, aliquam totam doloribus totam doloribus",
      points: [
        "BUSINESS DUE DELLIGENCE",
        "TAX DUE DELLIGENCE",
        "ACCOUNTING AND FINANCIAL DUE DELLIGENCE",
        "M & A ADVISORY",
        "CORPORATE RESTRUCTURING",
        "VALUATIONS PROJECT ADVISORY",
        "DEBT RESTRUCTURING",
        "OPERATIONAL REVIEWS",
        "MIS",
        "BUSINESS PLAN AND STRATEGY",
        "PROJECT REPORTS AND FEASIBILITY STUDY REPORTS",
      ],
    },
    {
      name: "ACCOUNTING SERVICES",
      image: accounting,
      about:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit iusto, aliquam totam doloribus Velit iusto, aliquam totam doloribus totam doloribus",
      points: [
        "PERIODIC MIS REPORT",
        "MANAGEMENT ACCOUNTING",
        "BUSINESS PLANS AND PROJECTIONS",
        "INTERNAL CONTROL SYSTEM",
        "MONTHLY CLOSING , REVIEW, AND REPORTING",
        "ACCOUNTS / SYSTEM MANUAL PREPARATIONS",
        "BACK OFFICE OPERATIONS INCLUDING PAYROLL/ HR PROCESSING",
      ],
    },
    {
      name: "STAFF EVALUATION & TRAINING",
      image: staff,
      about:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit iusto, aliquam totam doloribus Velit iusto, aliquam totam doloribus totam doloribus",
      points: [
        "REVIEW QUALITY OF FINANCE AND ACCOUNTS STAFF",
        "ASSIST IN HIRING FINANCE PROFESSIONALS",
        "TRAIN IN THE CORE AREAS",
        "INTERVIEWING CANDIDATES",
      ],
    },
    {
      name: "NRI SERVICES",
      image: nri,
      about:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit iusto, aliquam totam doloribus Velit iusto, aliquam totam doloribus totam doloribus",
      points: [
        "ALLOTMENT OF PAN",
        "TAX PLANNING",
        "FILING ITR",
        "ADVICE ON MAKING INVESTMENTS",
        "ASSET ALLOCATION ADVISE",
        "BUSINESS PLANNING & RE-ENGINEERING",
        "BUSINESS ADVISORY SERVICE FOR OVERSEAS BUSINESS",
        "FINANCIAL FEASIBILITY STUDY REPORTS",
      ],
    },
    {
      name: "CRISIS MANAGEMENT",
      image: crisis,
      about:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit iusto, aliquam totam doloribus Velit iusto, aliquam totam doloribus totam doloribus",
      points: [
        "BUSINESS OPERATIONS REVIEW",
        "CRITICAL FINANCIAL REVIEW",
        "CASH FLOW ANALYSIS",
        "LEVERAGE AND DEBT RESTRUCTURING",
        "BREAK-EVEN ANALYSIS, RATIO ANALYSIS, ROE ANALYSIS",
        "MAN POWER REVIEW",
        "BUSINESS ADVISORY SERVICE FOR OVERSEAS BUSINESS",
        "FINANCIAL FEASIBILITY STUDY REPORTS",
      ],
    },
    {
      name: "BUSINESS VALUATION",
      image: business,
      about:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit iusto, aliquam totam doloribus Velit iusto, aliquam totam doloribus totam doloribus",
      points: [
        "FINANCIAL AND OPERATIONAL DUE DILIGENCE",
        "REVIEW OF HISTORICAL FINANCIAL DATA",
        "WORKING OF PROJECTED FINANCIAL",
        "WORKING OF FREE CASH FLOWS",
        "DCF METHODOLOGY",
        "INCOME APPROACH",
        "MARKET APPROACH & NET ASSET APPROACH",
      ],
    },
    {
      name: "CORPORATE RISK",
      image: corporaterisk,
      about:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit iusto, aliquam totam doloribus Velit iusto, aliquam totam doloribus totam doloribus",
      points: [
        "COMPLY WITH RULES AND REGULATIONS",
        "RISK IDENTIFICATIONS",
        "RISK IMPACT ASSESSMENT",
        "RISK PRIORITIZATION ANALYSIS",
        "RISK TRACKING MITIGATION PLANNING & IMPLEMENTATION",
        "PROGRESS MONITORING",
      ],
    },
    {
      name: "SHARED CFO SERVICES",
      image: shared,
      about:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit iusto, aliquam totam doloribus Velit iusto, aliquam totam doloribus totam doloribus",
      points: [
        "IDEAL FOR SMEs",
        "COST EFFECTIVE",
        "QUALITY AND TIMELY DELIVERY",
        "MANAGING FINANCE & ACCOUNTS DEPARTMENTS",
        "RISK REVIEW FOR MITIGATION",
        "FINANCIAL PLANNING AND MODELING",
        "INTERNAL CONTROL COMPLIANCE",
        "CRITICAL REVIEW OF PERIODIC FINANCIAL REPORTS",
        "ADVISER TO SENIOR MANAGEMENT & BOARD",
      ],
    },
    {
      name: "IT SYSTEMS & ERP",
      image: shared,
      about:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit iusto, aliquam totam doloribus Velit iusto, aliquam totam doloribus totam doloribus",
      points: [
        "REVIEW OF EXISTING SOFTWARE",
        "STUDY REQUIREMENTS AT CLIENTS END",
        "PREPARING FUNCTIONALITY REQUIREMENTS AFTER DISCUSSION WITH KEY TEAMS",
        "IDENTIFYING PROPER PRODUCTS",
        "FINALIZE AGREEMENTS FOR TIMELY DELIVERY",
        "ASSISTING IN IMPLEMENTATION",
        "CUSTOMIZATION OF ERP",
      ],
    },
  ]);

  const [viewmore, setviewmore] = useState(false);

  const [viewdata, setviewdata] = useState(data.slice(0, 4));

  return (
    <div className="ServicesSec" id="services">
      <div className="title">Our Services</div>
      <div className="underline">
        <ul>
          <li style={{ width: 38 }}></li>
          <li style={{ width: 18 }}></li>
          <li style={{ width: 9 }}></li>
        </ul>
      </div>
      {/* <div className="about">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit iusto,
        aliquam totam doloribus facere ex aliquid? Quod ratione error eum,
        molestias, deserunt voluptas doloribus at voluptatem laboriosam rerum
        aspernatur impedit. Sit a nesciunt, inventore doloremque, odit, iste
        placeat asperiores natus consequuntur quos officiis fugiat at beatae
        laudantium enim adipisci ullam.
      </div> */}

      <div className="card-sec">
        {viewdata.map((onedata) => (
          <CardComp key={onedata.name} onedata={onedata} />
        ))}
      </div>
      <div className="view-more">
        <button
          className="button"
          onClick={() => {
            let viewdata1 = data.slice(0, viewmore === true ? 4 : 12);
            setviewdata(viewdata1);
            setviewmore(!viewmore);
          }}
        >
          {viewmore === true ? "VIEW LESS" : "VIEW MORE"}
        </button>
      </div>
    </div>
  );
};
