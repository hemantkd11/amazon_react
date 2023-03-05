import React from "react";
import { useStateValue } from "./context";
import Navbar from "./Components/Navbar";

const OrderPage = ({
  id,
  image,
  price,
  title,
  rating,
  fullname,
  home,
  phone,
  landmark,
}) => {
  const [{ address }, dispatch] = useStateValue;

  console.log("address", address);

  const addToBasket = (e) => {
    e.preventDefault();
    dispatch({
      type: "Add_to_basket",

      /////  use to map items in the lis to the card list
      items: {
        fullname,
        home,
        phone,
        landmark,
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

        <p>₹ {price}</p>
      </div>
      <div className="card-btn">
        <button onClick={addToBasket}>Add to Card</button>
      </div>
    </div>
  );
};
export default OrderPage;
