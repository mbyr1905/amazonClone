import React from 'react';
import "./Checkout.css";
import CheckoutProduct from './CheckoutProduct';
import { useStatevalue } from './StateProvider';
import Subtotal from "./Subtotal.js";

function Checkout() {
  const [{basket,user},dispatch]=useStatevalue();
  return (
    <div className='checkout'>
      <div className='checkout_left'>
        <img className='checkout_add' src="https://theclippingpathservice.com/wp-content/uploads/2020/02/Discount-Offer-for-mobile-version-1024x197.png"/>
        <div>
          <h3>Hello {user?user?.email:"please signIn"}</h3>
          <h2 className='checkout_title'>Your Basket</h2>
          {basket.map(item=>(
            <CheckoutProduct 
              id={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className='checkout_right'>
        <Subtotal />
      </div>
      <div className='checkout_right'></div>
    </div>
  )
}

export default Checkout
