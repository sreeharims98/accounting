import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SlickCustomerSec.scss";
import { CustomerCardComp } from "./CustomerCardComp";

const SlickCustomerSec = ({ data }) => {
  console.log(data.length);
  const settings = {
    arrows: true,
    className: "center",
    centerMode: true,
    centerPadding: "0px",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: data.length > 3 ? 4 : 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    swipeToSlide: true,
    pauseOnHover: true,
    initialSlide: 0,
    // adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          arrows: true,
          className: "center",
          centerMode: true,
          // centerPadding: "-10px",
          slidesToShow: data.length >= 3 ? 3 : 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1070,
        settings: {
          arrows: true,
          className: "center",
          centerMode: true,
          // centerPadding: "-10px",
          slidesToShow: data.length >= 2 ? 2 : 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 720,
        settings: {
          arrows: false,
          className: "center",
          centerMode: true,
          // centerPadding: "-10px",
          slidesToShow: data.length >= 1 ? 1 : 0,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className="SlickCustomerSec">
      <Slider {...settings}>
        {data.map((item) => (
          <div key={item.name}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CustomerCardComp data={item} />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SlickCustomerSec;
