import React from "react";
import Footer from "./footer";
import Navbar from "./Navbar";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../reducer";
import { useStateValue } from "../context";
import { useNavigate } from "react-router-dom";

const Payment =()=>{
    
    const Navigate = useNavigate()
    const [{address},dispatch] = useStateValue()
    const [{basket}]=useStateValue()

    const RemoveItem =(e,id)=>{
        e.preventDefault()
        
    
        dispatch({
            type:"REMOVE_ITEM",
            id:id
        })
       }
    return(
        <>
       
        < div className="Payment-container">
            <div className="payment-page">
               <div className="review">
                <div className="review-style">
                      <h2>Review Your Products</h2>
                    <div className="adddres-to-ship">
                             <h5>Select a delivery adddress</h5>
                         <div className="full-address">
                            <div>
                               <h6>Deliver To :-</h6>
                             </div>
                         <div>
                            <p>{address.fullname}</p>
                            <p>{address.home}</p>
                            <p>{address.town}</p>
                            <p> {address.landmark}</p> 
                            <p> {address.phone}</p> 
                         </div>
                        </div>
                    </div>
                </div>   
              
                <div className="shopping-list">
                    <h1>Shopping card</h1>
                    {basket?.map((items)=>
                    <div className="checkout-items" >
                        <div className="checkout-image">
                            <img src={items.image}/>
                
                         </div>
                         <div className="checkout-details">
                             <h3>
                             {items.title}
                              </h3>
                            
                             <p>₹ {items.price}</p>
                             <button className="check-btn" onClick={(e)=>RemoveItem(e,items.id)}>Remove</button>
                         </div>
                    </div>
                    )}
                     <div>
                         <button className="Add-More-btn"  onClick={()=>Navigate('/')}>Add More items</button>
                    </div>
                 </div>
                
               </div>
               <div className="sub-total">
               <CurrencyFormat renderText={(value)=>(
                        <>
                        <p className="subtotal">SubTotal({basket.length} items)
                        :<strong>{value}</strong>
                        </p>
                        <small className="checkbox">
                            <input type='checkbox'/>
                            <span> This order contain a gift</span>
                        </small><br/>
                        </>
                    )}
                       decimalScale={4}
                       value={getBasketTotal(basket)}
                       displayType="text"
                       thousandSeparator={true}
                       prefix={" ₹ "}
                       />
                       <button className="subtotal-btn" >Proceed to buy</button>
                       <button className="subtotal-btn">Add More items</button>
               </div>
             </div>
         </div>
        <Footer/>
        </>
    )
}
export default Payment