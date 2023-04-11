import React from 'react'
import "./Product.css"
import StarIcon from '@mui/icons-material/Star';
import { useStatevalue } from './StateProvider';

function Product({id,title,price,image,rating}) {
  const [{basket},dispatch]=useStatevalue();
  const addToBasket=()=>{
    dispatch({
      type:"Add_To_Basket",
      item:{
        id:id,
        title:title,
        image:image,
        price:price,
        rating:rating,
      },
    });
  };

  return (
    <div className='product'>
      <div className='product_info'>
        <p>{title}</p>
        <p className='product_price'>
            <snamll>₹</snamll>
            <strong>{price}</strong>
        </p>
        <div classsName="product_rating">
            {Array(rating)
                .fill()
                .map((_,i)=>(
                    <p>*</p>
              ))
            }
        </div>
      </div>
      <img src={image}/>
      <button onClick={addToBasket}>Add to bag</button>
    </div>
  )
}

export default Product
