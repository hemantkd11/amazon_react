import React, { useState } from "react";
import Rating from "@material-ui/lab/Rating";
import { useStateValue } from "../context";

const Card = ({ id, image, price, title, rating }) => {
  const [{ basket }, dispatch] = useStateValue();

  console.log("basket", basket);

  const addToBasket = (e) => {
    e.preventDefault();
    dispatch({
      type: "Add_to_basket",

      /////  use to map items in the lis to the card list
      items: {
        id,
        title,
        price,
        image,
        rating,
      },
    });
  };

  /// current basket [{},{},{}]
  //setBasket([{},{},{}])

  return (
    <div className="card">
      <div className="image">
        <img src={image} />
      </div>
      <div className="details">
        <h3>{title}</h3>
        <Rating
          name="half-rating-read"
          defaultValue={rating}
          precision={0.5}
          readOnly
        />
        <p>₹ {price}</p>
      </div>
      <div className="card-btn">
        <button onClick={addToBasket}>Add to Card</button>
      </div>
    </div>
  );
};

export default Card;
