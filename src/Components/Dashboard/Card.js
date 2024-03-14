import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { add, remove } from "../Features/CartSlice";
import Ratings from "./Ratings";


const Cards = ({ product }) => {
  const [addedToCart, setAddedToCart] = useState(false);
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(add(item));
    setAddedToCart(true);
  }

  const handleDeleteCartItem = (itemId) => {
    dispatch(remove(itemId));
    setAddedToCart(false);
  }

  const isThereInCart = (itemId) => {
    return cart.find(cartItem => cartItem.id === itemId);
  }

  return (
    <div className="card">
      <img src={product.image} alt={product.category} height='300px' width='300px'  />
      <div className="card-body">
        <h3 className="card-title">{product.name}</h3>
        <p className="card-category">{product.category}</p>
        <p className="card-rating"><Ratings/></p>
        <p className="card-price">${product.price}</p>
       {
        isThereInCart(product.id)? <button onClick={()=>handleDeleteCartItem(product.id)} className="card-button">Remove</button>
        : <button onClick={()=>handleAddToCart({...product,quantity:1})} className="card-button">Add to Cart</button>
       }
      </div>
    </div>
  );
};

export default Cards;

