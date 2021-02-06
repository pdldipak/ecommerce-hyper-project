import React from 'react';
import { NavLink } from 'react-router-dom';
import './product.css';
import Rating from './Rating';

export default function Shoe({ product }) {
  return (
    <div key={product._id} className='product'>
      <div className='image-container'>
        <img
          className='medium'
          src={product.image}
          alt={product.name}
        />
      </div>

      <div className='product-body'>
        <NavLink to={`/product/${product._id}`}>
          <h2>{product.name}</h2>
        </NavLink>
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
