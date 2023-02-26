import React from "react";
// import styled from "styled-components";
import Navbar from "./Navbar";
import Card from "./Card";
import Footer from "./footer";
const Home = ( )=>{
 

    return(
        <div className="Home-page">
          
            <div className="banner">
                <img src="./banner.jpg"/>
            </div>
            <div className="main">
                 <Card 
                    id={1}
                    image={"https://m.media-amazon.com/images/I/71V3nk2-+GL._AC_SL1500_.jpg"}
                    rating={4}
                    price={69999}
                    title={"OnePlus 10 Pro | 5G Android Smartphone | 8GB+128GB | U.S. Unlocked | Triple Camera co-Developed with Hasselblad | Emerald Forest"}/>
                    
                 <Card  
                    id={2}
                    image={"https://m.media-amazon.com/images/I/613AbRRTA6L._AC_SL1500_.jpg"}
                    rating={4}
                    price={28929}
                    title={"MAKAVO Slim Fit for OnePlus Nord N20 5G Case with Screen Protector [Ultra Thin] [Camera Cover] Full Protection Flexible Bumper Hard Matte PC Back Cover for One Plus N20 5G (Black)"}/>
                 
                 <Card
                    id={3}  
                    image={"https://m.media-amazon.com/images/I/81uxx+FIV+L._AC_SL1500_.jpg"}
                    rating={4}
                    price={1899}
                    title={"Ortizan Portable Bluetooth Speaker, IPX7 Waterproof Wireless Speaker with 24W Loud Stereo Sound, Outdoor Speakers with Bluetooth 5.0, 30H Playtime, 66ft Bluetooth Range, Dual Pairing for Home, Travel"}/>
                 
                 <Card
                    id={4} 
                    image={"https://m.media-amazon.com/images/I/81jc-3UMGBL._AC_SX425_.jpg"}
                    rating={4}
                    price={19999}
                    title={"Pyle Portable Bluetooth PA Speaker System - 600W Rechargeable Outdoor Bluetooth Speaker Portable PA System w/ Dual 8” Subwoofer 1” Tweeter, Microphone In, Party Lights, USB, Radio, Remote - PPHP2835B"}/>
                 

            </div>
            <Footer/>
        </div>
    )
}


export default Home