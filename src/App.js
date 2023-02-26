import React from 'react';
import {BrowserRouter as Router ,Routes, Route} from 'react-router-dom'
import styled from 'styled-components';
import './App.css';
import Address from './Components/Address';
import CheckoutPage from './Components/checkoutPage';
import Home from './Components/Home';
import Login from './Components/Login';
import OrderPage from './Mainfile/orderpage';
import Payment from './Components/payment';
import Signup from './Components/Signup';
import Navbar from './Components/Navbar';
import Confirm from './Components/confirm_page';
// import Navbar from './Mainfile/Navbar'
// import Profile from './Mainfile/profile';


function App() {

  return(
    <Router> 
      <Container>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/address" element={<Address/>}/>
          <Route path='/payment' element={<Payment/>}/>
          <Route path='/order'  element={<OrderPage/>}/>
          <Route path='/checkout' element={<CheckoutPage/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path='/confirm' element={<Confirm/>}/>
          
        </Routes>
      </Container>
    </Router>
  
  
  )
}
 const Container = styled.div``
export default App;
