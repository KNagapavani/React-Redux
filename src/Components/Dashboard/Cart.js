import React from 'react';
import {useSelector,useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { decreaseQuantity, increseQuantity, remove } from '../Features/CartSlice';

const Cart = () => {
 const navigate =  useNavigate()
 const products = useSelector((state)=>state.cart)
 const dipatch = useDispatch()
 const totalPriceOfCart = products.reduce((acc, val) => {
    const productPrice = Number(val.price);
    const productQuantity = Number(val.quantity);
    if (!isNaN(productPrice) && !isNaN(productQuantity)) {
        return acc + (productPrice * productQuantity);
    } else {
        return acc;
    }
}, 0);


 console.log(totalPriceOfCart,'this is cart value')

  return (
    <div className="cart-container">
      <h2>Your Shopping Cart</h2>
      <button onClick={()=>navigate('/products')}>Go Back</button>
      <div className="product-list">
        {products && products.map((product) => (
          <div key={product.id} className="cart-item">
            <div className="product-details">
              <img src={product.image} alt={product.name} height='300px' width='300px' />
              <div className="product-info">
                <h3>{product.name}</h3>
                <p>Price: ${product.price*product.quantity}</p>
                <button onClick={()=>dipatch(remove(product.id))} className="remove-button">
              Remove
            </button>
            <div className='quantitycart'>
            <button onClick={()=>dipatch(decreaseQuantity({id:product.id}))} className='plus-btn'>-</button>
            <p>{product.quantity}</p>
            <button onClick={()=>dipatch(increseQuantity({id:product.id}))} className='plus-btn'>+</button>
              </div>
            </div>
            </div>
            <br/>

          </div>
        ))}
      </div>
      <h1>Total:${totalPriceOfCart}</h1>
    </div>
  );
};

export default Cart;