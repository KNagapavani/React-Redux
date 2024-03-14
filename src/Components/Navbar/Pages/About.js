import React from 'react';
import { BsShieldLockFill } from "react-icons/bs";
import { BsAirplaneFill } from "react-icons/bs";
import { FaHeadset } from "react-icons/fa6";
import { PiArrowClockwiseFill } from "react-icons/pi";
import { PiCertificateFill } from "react-icons/pi";
import { Card, CardContent } from '@mui/material';


const About = () => {
  return (
    <div className="about-container">
    <div className="about-content">
      <h1>About Us</h1>
      <div>
        <p>
          Welcome to our e-commerce platform! At Shopping Cart, we strive to provide high-quality products and exceptional customer service. Our mission is to send good products to the customers through online. We are passionate about selling quality products within the given time.
        </p>
        <p>
          This signifies the overarching objective or purpose of your business. It's what drives your team and guides your actions. This highlights the primary action you aim to achieve, which is delivering high-quality products to your customers that meet certain standards of quality, reliability, and value. This clarifies the method or channel through which you fulfill your mission. You're emphasizing that your platform operates exclusively online, indicating that customers can access and purchase products through your website or other digital channels.
        </p>
        <p>
          A sense of enthusiasm and dedication towards the products you offer. It suggests that your team takes pride in the quality of the items you sell, and you prioritize customer satisfaction. Commitment to prompt and efficient service. You strive to ensure that orders are processed and delivered within a specified timeframe, underscoring your reliability and professionalism.
        </p>
        <p>
          Our Shopping Cart, e-commerce platform's dedication to providing excellent products and service to customers, emphasizing quality, reliability, and efficiency in online transactions. If you have any questions or feedback, feel free to <a href='http://localhost:3002/contact' style={{textDecoration:'none'}}>Contact Us</a>.
        </p>
      </div>
    </div>
    <div className="services">
      <h1>Services</h1>
      <div className="card-container">
        <Card className='card'>
          <div className='about-icons'>
          <BsAirplaneFill/>
          </div>
          <CardContent className='cardcontent'>
            <h3>Free Shipping</h3>
            <p>Order Over Rs.50,000/-</p>
          </CardContent>
        </Card>
        <Card className='card'>
        <div className='about-icons'>
          <BsShieldLockFill/>
          </div>
          <CardContent className='cardcontent'>
          <h3>secure payment</h3>
                <p>100% security guranty</p>
          </CardContent>
        </Card>
        <Card className='card'>
        <div className='about-icons'>
            <FaHeadset/>
            </div>
            <CardContent className='cardcontent'>
            <h3>24/7 support</h3>
                <p>call us anytime</p>
            </CardContent>
        </Card>
        <Card className='card'>
        <div className='about-icons'>
        <PiArrowClockwiseFill/>
        </div>
          <CardContent className='cardcontent'>
          <h3>Easy returns</h3>
                <p>10 daysreturns</p>
          </CardContent>
        </Card>
        <Card className='card'>
        <div className='about-icons'>
          < PiCertificateFill/>
          </div>
          <CardContent className='cardcontent'>
          <h3>Original Products</h3>
                <p>Every Product is original</p>
          </CardContent>
        </Card>
      </div>
    </div>
      
    </div>
  );
}

export default About;

