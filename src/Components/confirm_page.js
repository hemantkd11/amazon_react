import React from "react";
import { useStateValue } from "../context";
import Footer from "./footer";
import { useNavigate } from "react-router-dom";

const Confirm = () => {
  const Navigate = useNavigate();
  const [{ address }] = useStateValue();
  return (
    <div className="confirm-container">
      <div className="confirm-main">
        <div className="confirm">
          <div className="tick-logo">
            <img src="./tick.png" />
          </div>
          <div className="order-ok">
            <h5>Your Order Placed Successfully , Thank you</h5>
          </div>
        </div>
        <div className="c">
          <h6>confirmation will be sent to your email.</h6>
        </div>
      </div>
      <div className="outer-bar">
        <div>
          <h5>Delivery Address :- </h5>
        </div>
        <div>
          <p>Hemant kumar diwakar {address.name}</p>
          <p>House no. 60/2 sector- 30 gandhinargar gujarat</p>
          <p>Near main road or sant nirankari bhawan</p>
          <p>Gujarat 382030</p>
          <p>Contact details : 99978-75425</p>
        </div>
      </div>
      <div className="delivery-add">
        <h5>Monday , 28 nov</h5>
        <p>Delivery data , Thank you for ordering .</p>
      </div>

      <div className="continue">
        <button onClick={() => Navigate("/")}>Countinue Shopping</button>
      </div>
    </div>
  );
};
export default Confirm;
