import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { useSelector } from 'react-redux';

const ResponsiveBar = () => {
    const [showlinks,setShowlinks] = useState(false)
    const cartItems = useSelector((state)=>state.cart)
    const navigate = useNavigate()

  return (
    <div className='Navbar'>
      <div className='menu'>
        <button onClick={()=>setShowlinks(!showlinks)}><GiHamburgerMenu/></button>
      </div> 
      <div className='heading'>
        <h2 onClick={()=>navigate('/')}><HiMiniShoppingBag /></h2>
        <h3 onClick={()=>navigate('/')}>Shopping Cart</h3>
      </div>
      <div className='leftside'>
        <div className='links' id={showlinks?'hidden':''}>
            <Link to='/home' className='link'>Home</Link>
            <Link to='/about' className='link'>About</Link>
            <Link to='/products' className='link'>Products</Link>
            <Link to='/contact' className='link'>Contact</Link>
            <Button type='submit' component={Link} to='/signup' className='link-btn' variant='contained'>Signup</Button>
            <Button type='submit' component={Link} to='/login' className='link-btn' variant='contained'>Login</Button>
        </div>
      </div>
      <div className='rightside'>
        <input type='text' placeholder='Search....'/>
        <button><FaSearch/></button>
      </div>
      <div className="carting">
        <FaShoppingCart style={{ border: 'none' }} onClick={() => navigate('/cart')} >
        </FaShoppingCart >
        <sup style={{ fontSize : '15px' }}>{cartItems.length ? cartItems.length : ''}</sup>
      </div>
  
    </div>

  );
}

export default ResponsiveBar;
