import React, { useState } from 'react'
import "./Payment.css"
import { useStatevalue } from './StateProvider'
import CheckoutProduct from "./CheckoutProduct.js"
import { Link } from 'react-router-dom';
import { CardElement ,useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';

function Payment() {
  const [{basket,user},dispatch]=useStatevalue();

  const stripe=useStripe();
  const elements=useElements();

  const [error,setError]=useState(null);
  const [disabled,setDisabled]=useState(true);

  const handleSubmit=e=>{

  }

  const handleChange=e=>{
    setDisabled(e.empty);
    setError(e.error?e.error.message:"");
  }

  return (
    <div className='payment'>
        <div className='payment_container'>
          <h1>Checkout {<Link> {basket.length} items</Link>}</h1>
            <div className='payment_section'>
              <div className='payment_title'>
                <h3>Delivery address</h3>
              </div>
              <div className='payment_adress'>
                <p>{user?.email}</p>
                <p>Amaravati colony 1st road</p>
                <p>kanuru , <strong>Vijayawada 520007</strong></p>
              </div>
            </div>

            <div className='payment_section'>
              <div className='payment_title'><h3>Review items and delivery</h3></div>
              <div className='payment_items'>
                {basket.map(item=>(
                  <CheckoutProduct 
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating = {item.rating}
                  />
                ))}
              </div>
            </div>
            
            <div className='payment_section'>
              <div className='payment_title'>
                <h3>Payment method</h3>
              </div>
              <div className='payment_details'>
                <form onSubmit={handleSubmit}>
                  <CardElement onChange={handleChange}/>
                  <div className='payment_priceContainer'>
                    <CurrencyFormat
                      renderText={(value)=>{
                        <h3>Order total {value}</h3>
                      }}
                      decimalScale={2}
                      //value={getBasketTotal(basket)}
                      displayType="text"
                      thousandSeparator={true}
                      prefix="₹"
                    />
                  </div>
                </form>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Payment
