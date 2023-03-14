// import React, { useState } from "react";

// const Navbar =()=>{

//         const [isMobile,setIsMobile] = useState(false)
//   return (
//     <>
//    <nav className='navbar'>
//     <h3 className='logo'>REACT_APP</h3>
//     <ul className={isMobile ? "nav-link-mobile" : "nav-link"}
//     onClick={()=> setIsMobile(false)}>
//       <li className='home'>Home</li>
//       <li className='about'>About</li>
//       <li className='profile'>Profile</li>
//       <li className='contact'>Contact</li>
//       <li className='details'>Deatils</li>
//       <li className='signup'>Sign-Up</li>
//     </ul>
//     <button className='mobile-menu-icon'>{isMobile ? <i className='fas fa-times'></i> : <i className='fas fa-bars'></i>} </button>
//    </nav>

//    </>
//   );

// }
// export default Navbar;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../context";
import AddCard from "@mui/icons-material/AddShoppingCart";
function Navbar() {
  const [{ basket }] = useStateValue();
  const Navigate = useNavigate();
  return (
    <div className="container-nav">
      <div className="Navbar">
        <div className="logo">
          <img
            src="./amazon-smile.png"
            onClick={() => Navigate("/amazon_react/")}
          />
        </div>
        <div className="search">
          <input type="search" placeholder="Search" />
        </div>
        <div className="right-Container">
          <div className="col1">
            <p
              className="text-1"
              onClick={() => Navigate("/amazon_react/login")}
            >
              Hi, Sign in
            </p>
            <p className="text">Guest</p>
          </div>
          <div className="col1">
            <p className="text-1">Retur</p>
            <p className="text-1">& Order</p>
          </div>
          <div
            className="basket-Btn"
            onClick={() => Navigate("/amazon_react/checkout")}
          >
            <AddCard />
            <p className="text">{basket.length}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
