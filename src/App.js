// import React, { useEffect, useState } from "react";
import './App.css';
import ResponsiveBar from './Components/Navbar/ResponsiveBar';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './Components/Navbar/Pages/Home';
import About from './Components/Navbar/Pages/About';
import Link from './Components/Link';
import Contact from './Components/Navbar/Pages/Contact';
import Signup from './Components/Navbar/Pages/Signup';
import Login from './Components/Navbar/Pages/Login';
import Footer from './Components/Navbar/Pages/Footer';
import Products from './Components/Dashboard/Products';
import Cart from './Components/Dashboard/Cart';
import data from './Components/Dashboard/data.json'

function App() {
  
  return (
    <div className="App">
      <Router>
        <ResponsiveBar/>
        <Routes>
          <Route path='/' element={<Link/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/products' element={<Products products={data.items}/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/footer' element={<Footer/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

