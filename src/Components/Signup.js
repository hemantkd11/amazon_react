import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./footer"

const Signup = ( )=>{
    const Navigate = useNavigate()
    return(
        <>
     
        <div className="container">
           
        <div className="Logo">
            <img src="./Amazon-Logo-1.png"/>
        </div>
        <div className="form">
            <from className='from-container'>
               <h3 className="sign-in heading">Sign-Up</h3>
               <div className="sign-in">
                   <label className="Email">
                         Name
                   </label><br></br>
                   <input type='text' id='lofin-form-input' classname='name-input' placeholder='Enter Your Name Here'/>
               </div>
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
                   <input type='email' id='lofin-form-input' classname='password-input' placeholder='**********'/>
               </div>
               <div className="sign-in">
                   <button type="button" className="Sign-in-btn">Create Account</button>
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
                <button type="button" onClick={()=> Navigate("/login")} className="createNew-acc-btn" >Already Have Account / Go Back To Login</button>
        </div>
        
    </div>
    <Footer/>
    </>
    )
}
export default Signup 