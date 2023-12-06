import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
   <nav>
    <Link to='/'>Home</Link><br></br>
    <Link to='/about'>About</Link><br></br>
        
    <Link to='/product'>product</Link><br></br>
    <Link to='/product-detail/'>product-detail</Link>
   </nav>
  );
}

export default Navbar;
