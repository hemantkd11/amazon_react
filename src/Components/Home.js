import React from "react";
import Card from "./Card";
import Footer from "./footer";
import { DB } from "../DB";
const Home = () => {
  return (
    <div className="Home-page">
      <div className="banner">
        <img src="./banner.jpg" />
      </div>
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
      <Footer />
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
