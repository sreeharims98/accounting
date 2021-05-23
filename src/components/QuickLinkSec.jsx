import React from "react";
import "./QuickLinkSec.scss";

import gst from "../images/links/gst.jpg";
import incometax from "../images/links/incometax.gif";
import mca from "../images/links/mca.jpg";

export const QuickLinkSec = () => {
  return (
    <div className="QuickLinkSec">
      <div className="title">Quick Links</div>
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
            <img src={gst} alt="gst" />
          </a>
        </div>
        <div className="one-link">
          <a
            href="https://www.incometaxindiaefiling.gov.in"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={incometax} alt="income tax" />
          </a>
        </div>
        <div className="one-link">
          <a
            href="http://www.mca.gov.in"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={mca} alt="mca" />
          </a>
        </div>
      </div>
    </div>
  );
};
