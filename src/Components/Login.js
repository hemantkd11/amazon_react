import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./footer";
import Navbar from "./Navbar";



const Login = ( )=>{
    const Navigate = useNavigate()
    return(
        <>
     
        <div className="container">
            <div className="Logo">
                <img src="./Amazon-Logo-1.png"/>
            </div>
            <div className="form">
                <from className='from-container'>
                   <h3 className="sign-in heading">Sign-In</h3>
                   <div className="sign-in">
                       <label className="Email">
                             Email
                       </label><br></br>
                       <input type='email' id='lofin-form-input' classname='email-input' placeholder='xyz@yourEmail.com'/>
                   </div>
                   <div className="sign-in">
                       <label className="Email">
                             Password 
                       </label><br/>
                       <input type='email' id='lofin-form-input' classname='email-input' placeholder='xyz@yourEmail.com'/>
                   </div>
                   <div className="sign-in">
                       <button type="button" className="Sign-in-btn">Login</button>
                   </div>      
                </from> 
                <div className="Note">
                    <p>By continuing you agree to Amazon's 
                        <a href="#"> Conditions of Use</a> and
                        <a href="#"> Privacy Notice</a>
                    </p>
                </div> 

            </div>
            <div className="New-Account">
                    <button type="button" onClick={()=> Navigate("/signup")} className="createNew-acc-btn" >Create Account in Amazon</button>
            </div>
            
        </div>
        <Footer/>
        </>
    )
}

export default Login