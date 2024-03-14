import React from 'react';
import Home from './Navbar/Pages/Home';
import About from './Navbar/Pages/About';
import Contact from './Navbar/Pages/Contact';
import Footer from './Navbar/Pages/Footer';
import Products from './Dashboard/Products';
import data from '../Components/Dashboard/data.json'

const Link = () => {
  return (
    <div>
      <Home/>
      <About/>
      <Products products={data.items}/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default Link;
