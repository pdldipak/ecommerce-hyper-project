import React from 'react';
import './product.css';
import Rating from './Rating';

export default function Shoe(props) {
  const { product } = props;
  return (
    <div key={product._id} className='product'>
      <a href={`/product/${product._id}`}>
        <div className='image-container'>
          <img
            className='medium'
            src={product.image}
            alt={product.name}
          />
        </div>
      </a>
      <div className='product-body'>
        <a href={`/product/${product._id}`}>
          <h2>{product.name}</h2>
        </a>
        <Rating
          rating={product.rating}
          numReviews={product.numReviews}
        ></Rating>
        <div className='product-button'>
          <div className='price'>{`Kr ${product.price}`}</div>
          <div className='btn btn-success'>Add to cart</div>
        </div>
      </div>
    </div>
  );
}
