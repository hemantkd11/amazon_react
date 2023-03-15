import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Carousel } from "react-responsive-carousel";

const Slider = () => {
  return (
    <Carousel infiniteLoop autoPlay>
      <div className="image-home">
        <img src="./amazon_react/banner.jpg" />
      </div>
      <div className="image-home">
        <img src="./amazon_react/banner.jpg" />
      </div>
      <div className="image-home">
        <img src="./amazon_react/banner.jpg" />
      </div>
    </Carousel>
  );
};

export default Slider;
