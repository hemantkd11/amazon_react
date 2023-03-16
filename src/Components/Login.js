import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./footer";
import Navbar from "./Navbar";

const Login = () => {
  const Navigate = useNavigate();
  return (
    <>
      <div className="container">
        <div className="Logo">
          <img src="./Amazon-Logo-1.png" />
        </div>
        <div className="form">
          <from className="from-container">
            <h3 className="sign-in heading center-item">Log-In</h3>
            <div className="sign-in">
              <label className="Email">Email</label>

              <input
                type="email"
                id="lofin-form-input"
                classname="email-input"
                placeholder="xyz@yourEmail.com"
              />
            </div>
            <div className="sign-in">
              <label className="Email">Password</label>

              <input
                type="email"
                id="lofin-form-input"
                classname="email-input"
                placeholder="xyz@yourEmail.com"
              />
            </div>
            <div className="sign-in">
              <button type="button" className="Sign-in-btn">
                Login
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
        <div className="New-Account">
          <button
            type="button"
            onClick={() => Navigate("amazon_react/signup")}
            className="createNew-acc-btn"
          >
            Create Account in Amazon
          </button>
        </div>
      </div>
    </>
  );
};
// import { DB } from "../DB";
// import { elementAcceptingRef } from "@mui/utils";
// // export default Login;
// const Login = () => {
//   const Navigate = useNavigate();
//   const [data, setData] = useState(DB);
//   // const OnclickHandle = (e) => {
//   //   if (data == e.target.value) {
//   //     Navigate("/amazon_react/");
//   //
//   const handlechange = (e) => {
//     const id = e.target.value;
//   };
//   const HandleClick = (e, value) => {
//     if (handlechange === data.name) {
//       alert("hello");
//     } else {
//       alert("not matched");
//     }
//   };
//   return (
//     <div>
//       {data.map((item) => (
//         <input
//           type="text"
//           name="name"
//           value={item.name}
//           onChange={handlechange}
//         />
//       ))}

//       <button onClick={HandleClick}>On click</button>
//     </div>
//   );
// };
export default Login;
