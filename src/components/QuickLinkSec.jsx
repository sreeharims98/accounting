import React from "react";
import "./QuickLinkSec.scss";

export const QuickLinkSec = () => {
  return (
    <div className="QuickLinkSec">
      <div className="title">Quick Links & Updates</div>
      <div className="underline">
        <ul>
          <li style={{ width: 38 }}></li>
          <li style={{ width: 18 }}></li>
          <li style={{ width: 9 }}></li>
        </ul>
      </div>
      <div className="quick-links">
        <div className="one-link">
          <a
            href="https://www.gst.gov.in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            GST
          </a>
        </div>
        <div className="one-link">
          <a
            href="https://www.incometaxindiaefiling.gov.in"
            target="_blank"
            rel="noopener noreferrer"
          >
            INCOME TAX
          </a>
        </div>
        <div className="one-link">
          <a
            href="http://www.mca.gov.in"
            target="_blank"
            rel="noopener noreferrer"
          >
            MCA
          </a>
        </div>
      </div>
    </div>
  );
};
