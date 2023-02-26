import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../context";


function Navbar(){

    const[{basket}] = useStateValue()
    const Navigate = useNavigate()
    return(
        <div className="container-nav">
            <div className="Navbar">
                <div className="logo">
                    
                <img src="./amazon-smile.png" onClick={()=> Navigate("/")}/>
               </div>
               <div className="search">
                 <input type='search' placeholder='Search'/>
               </div>
               <div className="right-Container">
                 <div className="col1">
                    <p className="text-1" onClick={()=>Navigate("/login")}>Hello, Sign in</p>
                    <p className="text">Guest</p>
                 </div>
                 <div className="col1">
                  <p className="text-1">Return</p>
                  <p className="text-2">& Order</p>
                 </div>
                 <div className="basket-Btn" onClick={()=> Navigate('/checkout')}>
                     <img src="./basket2.jpg" />
                     <p className="text" >{basket.length}</p>
                 </div>
               </div>
            </div>
        </div>
    )
}



export default Navbar
