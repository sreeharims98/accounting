import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SlickCustomerSec.scss";
import { CustomerCardComp } from "./CustomerCardComp";

const SlickCustomerSec = () => {
  const settings = {
    arrows: true,
    className: "center",
    centerMode: true,
    centerPadding: "0px",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
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
          slidesToShow: 3,
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
          slidesToShow: 2,
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
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  //   const URL = process.env.REACT_APP_URL;
  //   const [token, settoken] = React.useState("");
  //   const [rows, setrows] = React.useState([]);
  //   const [isloading, setisloading] = React.useState(true);

  //   React.useEffect(() => {
  //     const token = localStorage.getItem("icantoken");
  //     Axios.get(`${URL}/corporate/requirement/?status=pending`, {
  //       headers: {
  //         Authorization: "Bearer " + token,
  //       },
  //     })
  //       .then((res) => {
  //         console.log(res.data.data);
  //         setrows(res.data.data);
  //         setisloading(false);
  //       })
  //       .catch((err) => {
  //         console.log(err.response);
  //         alert(err);
  //       });
  //   }, []);

  return (
    <div className="SlickCustomerSec">
      {/* <div className="title-style">{title}</div> */}
      <Slider {...settings}>
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CustomerCardComp />
          </div>
        </div>
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CustomerCardComp />
          </div>
        </div>
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CustomerCardComp />
          </div>
        </div>
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CustomerCardComp />
          </div>
        </div>
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CustomerCardComp />
          </div>
        </div>
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CustomerCardComp />
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default SlickCustomerSec;
