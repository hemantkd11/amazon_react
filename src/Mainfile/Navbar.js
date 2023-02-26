import React,{useState} from 'react'

const Navbar =()=>{
    
        const [isMobile,setIsMobile] = useState(false)
  return (
    <>
   <nav className='navbar'>
    <h3 className='logo'>REACT_APP</h3>
    <ul className={isMobile ? "nav-link-mobile" : "nav-link"}
    onClick={()=> setIsMobile(false)}>
      <li className='home'>Home</li>
      <li className='about'>About</li>
      <li className='profile'>Profile</li>
      <li className='contact'>Contact</li>
      <li className='details'>Deatils</li>
      <li className='signup'>Sign-Up</li>
    </ul>
    <button className='mobile-menu-icon'>{isMobile ? <i className='fas fa-times'></i> : <i className='fas fa-bars'></i>} </button>
   </nav>
   
   </>
  );
    
} 
export default Navbar