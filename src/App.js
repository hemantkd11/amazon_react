import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import Address from "./Components/Address";
import CheckoutPage from "./Components/checkoutPage";
import Home from "./Components/Home";
import Login from "./Components/Login";
import OrderPage from "./orderpage";
import Payment from "./Components/payment";
import Signup from "./Components/Signup";
import Navbar from "./Components/Navbar";
import Confirm from "./Components/confirm_page";
import Footer from "./Components/footer";
// import Navbar from './Mainfile/Navbar'
// import Profile from './Mainfile/profile';

function App() {
  return (
    <Router>
      <Container>
        <Navbar />
        <Routes>
          <Route path="/amazon_react/" element={<Home />} />
          <Route path="/amazon_react/login" element={<Login />} />
          <Route path="/amazon_react/address" element={<Address />} />
          <Route path="/amazon_react/payment" element={<Payment />} />
          <Route path="/amazon_react/order" element={<OrderPage />} />
          <Route path="/amazon_react/checkout" element={<CheckoutPage />} />
          <Route path="/amazon_react/signup" element={<Signup />} />
          <Route path="/amazon_react/confirm" element={<Confirm />} />
        </Routes>
        <Footer />
      </Container>
    </Router>
  );
}
const Container = styled.div``;
export default App;
