import React from "react";
import Card from "./Card";
import Footer from "./footer";
import { DB } from "../DB";
import Slide from "./slider";
import Slider from "./slider";
import { Carousel } from "react-responsive-carousel";
const Home = () => {
  return (
    <div className="Home-page">
      <div className="slider-show">
        <Carousel infiniteLoop autoPlay>
          <div className="banner">
            <img src="https://m.media-amazon.com/images/I/61aURrton0L._SX3000_.jpg" />
          </div>
          <div className="banner">
            <img src="https://m.media-amazon.com/images/I/B1cyKWQsdSL._SX3000_.jpg" />
          </div>
          <div>
            <img src="https://m.media-amazon.com/images/I/71vdTR50hFL._SX3000_.jpg" />
          </div>
        </Carousel>
      </div>
      <div className="body_box_home">
        <div className="main">
          {DB.map((data) => (
            <Card
              id={data.id}
              image={data.img}
              rating={data.rate}
              price={data.price}
              title={data.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

// <Card
//   id={3}
//   image={"https://m.media-amazon.com/images/I/81uxx+FIV+L._AC_SL1500_.jpg"}
//   rating={4}
//   price={1899}
//   title={
//     "Ortizan Portable Bluetooth Speaker, IPX7 Waterproof Wireless Speaker with 24W Loud Stereo Sound, Outdoor Speakers with Bluetooth 5.0, 30H Playtime, 66ft Bluetooth Range, Dual Pairing for Home, Travel"
//   }
// />;
