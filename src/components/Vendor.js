import React from "react";
import { vendors } from "../data/Data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Vendor() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="container-fluid py-5">
        <div className="row px-xl-5">
          <div className="col">
            <marquee scrollamount="6" behavior="scroll" direction="left">
              {vendors.map((vendor, key) => (
                <div className="bg-light p-4 d-inline-block" key={key}>
                  <img src={vendor.image} alt={`Vendor ${key + 1}`} />
                </div>
              ))}
            </marquee>
          </div>
        </div>
      </div>
    </>
  );
}