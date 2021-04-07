import React, { useState } from "react";
import { CardComp } from "./service sec/CardComp";
import "./ServicesSec.scss";

export const ServicesSec = () => {
  const [viewmore, setviewmore] = useState(4);

  return (
    <div className="ServicesSec">
      <div className="title">Our Services</div>
      <div className="underline">
        <ul>
          <li style={{ width: 38 }}></li>
          <li style={{ width: 18 }}></li>
          <li style={{ width: 9 }}></li>
        </ul>
      </div>
      <div className="about">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit iusto,
        aliquam totam doloribus facere ex aliquid? Quod ratione error eum,
        molestias, deserunt voluptas doloribus at voluptatem laboriosam rerum
        aspernatur impedit. Sit a nesciunt, inventore doloremque, odit, iste
        placeat asperiores natus consequuntur quos officiis fugiat at beatae
        laudantium enim adipisci ullam.
      </div>

      <div className="card-sec">
        <CardComp />
        <CardComp />
        <CardComp />
        <CardComp />
      </div>
      <div className="view-more">
        <button className="button" onClick={() => setviewmore(10)}>
          VIEW MORE
        </button>
      </div>
    </div>
  );
};
