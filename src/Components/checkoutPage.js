import React from "react";
import Navbar from "./Navbar";
import Footer from "./footer";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../reducer";
import { useStateValue } from "../context";
import { useNavigate } from "react-router-dom";

const CheckoutPage =()=>{
    const Navigate = useNavigate()
    const [{basket},dispatch] = useStateValue()

   const RemoveItem =(e,id)=>{
    e.preventDefault()
    

    dispatch({
        type:"REMOVE_ITEM",
        id:id
    })
   }


    console.log('checkout>>>>',basket)
    return(
        <div className="checkOut-container">
           
             <div className="checkout-main">
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
                </div>
                
                <div className="total-amount">
                       <CurrencyFormat renderText={(value)=>(
                        <>
                        <p className="subtotal">SubTotal({basket.length} items)
                        :<strong>{value}</strong>
                        </p>
                        <small className="checkbox">
                            <input type='checkbox'/>
                            <span> This order contain a gift</span>
                        </small>
                        </>
                    )}
                       decimalScale={4}
                       value={getBasketTotal(basket)}
                       displayType="text"
                       thousandSeparator={true}
                       prefix={" ₹ "}
                       />
                       <button className="subtotal-btn" onClick={()=>Navigate("/address")}>Proceed to checkout</button>
                </div>
             </div>
             <Footer/>
        </div>

    )
}

export default CheckoutPage