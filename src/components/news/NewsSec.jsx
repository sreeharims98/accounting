import React, { useEffect, useState } from "react";
import { Carousel, message } from "antd";
import "./NewsSec.scss";
import { db } from "../../config";

export const NewsSec = () => {
  const [isloading, setisloading] = useState(false);
  const [data, setdata] = useState([
    // {
    //   type: "IT",
    //   name: "Statement of Financial Transactions",
    //   period: "2020-21",
    //   rule: "114E",
    //   original: "31st May 2021",
    //   extended: "30th June 2021",
    // },
    // {
    //   type: "IT",
    //   name: "Statement of reportable account",
    //   period: "Calendar year 2020",
    //   rule: "114G",
    //   original: "31st May 2021",
    //   extended: "30th June 2021",
    // },
    // {
    //   type: "IT",
    //   name: "TDS returns",
    //   period: "Jan to March 2021",
    //   rule: "31A",
    //   original: "31st May 2021",
    //   extended: "30th June 2021",
    // },
    // {
    //   type: "IT",
    //   name: "Form 16 wrt Tds salary returns",
    //   period: "2020-21",
    //   rule: "31",
    //   original: "15th June 2021",
    //   extended: "15th July 2021",
    // },
    // {
    //   type: "IT",
    //   name: "TDS/TCS book adjustment Form 24G",
    //   period: "May 2021",
    //   rule: "30 & 37CA",
    //   original: "15th June 2021",
    //   extended: "30th June 2021",
    // },
    // {
    //   type: "IT",
    //   name: "Tax Deduction statement by trustees of approved superannuation fund",
    //   period: "2020-21",
    //   rule: "33",
    //   original: "31st May 2021",
    //   extended: "30th June 2021",
    // },
    // {
    //   type: "IT",
    //   name: "Statement of Income paid or credited by investment fund in Form 64D",
    //   period: "2020-21",
    //   rule: "12CB",
    //   original: "15th June 2021",
    //   extended: "30th June 2021",
    // },
    // {
    //   type: "IT",
    //   name: "Statement of Income paid or credited by investment fund in Form 64C",
    //   period: "2020-21",
    //   rule: "12CB",
    //   original: "30th June 2021",
    //   extended: "15th July 2021",
    // },
    // {
    //   type: "IT",
    //   name: "Income tax returns for non-audit cases",
    //   period: "2020-21",
    //   rule: "Section 139(1)",
    //   original: "31st July 2021",
    //   extended: "30th September 2021",
    // },
    // {
    //   type: "IT",
    //   name: "Audit report",
    //   period: "2020-21",
    //   rule: "Income Tax Act",
    //   original: "30th September 2021",
    //   extended: "31st October 2021",
    // },
    // {
    //   type: "IT",
    //   name: "Audit report for international transaction or specified domestic transaction",
    //   period: "2020-21",
    //   rule: "Section 92E",
    //   original: "31st October 2021",
    //   extended: "30th November 2021",
    // },
    // {
    //   type: "IT",
    //   name: "Income tax returns for audit/ company cases",
    //   period: "2020-21",
    //   rule: "Section 139(1)",
    //   original: "31st October 2021",
    //   extended: "30th November 2021",
    // },
    // {
    //   type: "IT",
    //   name: "Income tax returns with due date 30th November 2021",
    //   period: "2020-21",
    //   rule: "Section 139(1)",
    //   original: "30th November 2021",
    //   extended: "31st December 2021",
    // },
    // {
    //   type: "IT",
    //   name: "Belated/ Revised income tax returns",
    //   period: "2020-21",
    //   rule: "Section 139(4) 139(5)",
    //   original: "31st December 2021",
    //   extended: "31st January 2022",
    // },
    // {
    //   type: "TAX",
    //   name: "Seeks to prescribe the provision of extension of time limit to apply for revocation of cancellation of registration under section 30 of the CGST Act, 2017 and rule 23 of the CGST Rules, 2017.",
    //   circular: "148/04/2021-GST dated 18-05-2021",
    // },
  ]);

  useEffect(() => {
    db.ref("updates").on("value", (res) => {
      if (res.val() !== undefined && res.val() !== null) {
        let orgdata = Object.entries(res?.val());
        setdata(orgdata?.reverse());
        console.log(orgdata?.reverse());
        setisloading(false);
      } else {
        setisloading(false);
        message.warning("No responses found !");
      }
    });
  }, []);

  return (
    <div className="NewsSec">
      <div className="title">News & Updates</div>
      <div className="underline">
        <ul>
          <li style={{ width: 38 }}></li>
          <li style={{ width: 18 }}></li>
          <li style={{ width: 9 }}></li>
        </ul>
      </div>
      <Carousel
        autoplay
        autoplaySpeed={1000}
        dotPosition="right"
        dots={false}
        // effect="fade"
      >
        {data?.map((item) => (
          <div key={item[0]}>
            {item[1]?.type === "IT" ? (
              <div className="it-sec">
                <h3>{item[1]?.name}</h3>
                <p>Period covered: {item[1]?.period}</p>
                <p>Rule/Section: {item[1]?.rule}</p>
                <p>Original Date: {item[1]?.original}</p>
                <p>Extended Date: {item[1]?.extended}</p>
              </div>
            ) : item[1]?.type === "TAX" ? (
              <div className="it-sec">
                <h3>{item[1]?.circular}</h3>
                <p>{item[1]?.name}</p>
              </div>
            ) : null}
          </div>
        ))}
      </Carousel>
    </div>
  );
};
