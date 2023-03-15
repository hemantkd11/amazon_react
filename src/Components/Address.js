import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../context";
import Footer from "./footer";
import Navbar from "./Navbar";

const Address = () => {
  const [{ address }, dispatch] = useStateValue();
  const Navigate = useNavigate();
  // const [userAddress,setUserAddress] = useState({
  //     fullname :"",
  //     phone:"",
  //     town:"",
  //     home:"",
  //     landmark:"",
  // })
  const [fullname, setFullname] = useState("");
  const [home, setHome] = useState("");
  const [phone, setPhone] = useState("");
  const [landmark, setLandmark] = useState("");
  const [town, setTown] = useState("");

  const deliver = (e) => {
    e.preventDefault();
    dispatch({
      type: "Set_address",
      items: {
        fullname,
        phone,
        home,
        town,
        landmark,
      },
    });
    if (
      fullname == "" &&
      phone == "" &&
      home == "" &&
      town == "" &&
      landmark == ""
    ) {
      alert("please fill all the fields");
    } else {
      Navigate("/amazon_react/payment");
    }
  };

  return (
    <>
      <div className="container">
        <div className="Logo">
          <img src="./Amazon-Logo-1.png" />
        </div>
        <div className="form">
          <from className="from-container">
            <h3 className="sign-in heading">Address</h3>
            <div className="sign-in">
              <label className="Email">Fullname</label>
              <input
                type="text"
                value={fullname}
                placeholder="Enter Your Name Here"
                onChange={(e) => setFullname(e.target.value)}
              />
            </div>
            <div className="sign-in">
              <label className="Email">House/flat Address</label>

              <input
                type="text"
                placeholder="House/flat No."
                value={home}
                onChange={(e) => setHome(e.target.value)}
              />
            </div>
            <div className="sign-in">
              <label className="Email">Phone No.</label>

              <input
                type="number"
                placeholder="123456789"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="sign-in">
              <label className="Email">Area/Landmark</label>

              <input
                type="text"
                placeholder="Area and landmark "
                value={landmark}
                onChange={(e) => setLandmark(e.target.value)}
              />
            </div>
            <div className="sign-in">
              <label className="Email">Town/city</label>

              <input
                type="text"
                placeholder="Town/city "
                value={town}
                onChange={(e) => setTown(e.target.value)}
              />
            </div>

            <div className="sign-in">
              <button type="button" className="Sign-in-btn" onClick={deliver}>
                Deliver to this Address
              </button>
            </div>
          </from>
          <div className="Note">
            <p>
              By continuing you agree to Amazon's
              <a href="#"> Conditions of Use</a> and
              <a href="#"> Privacy Notice</a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Address;
