import React from 'react';
import { NavLink } from 'react-router-dom';
import './product.css';
import Rating from './Rating';

export default function Product({ product }) {
  return (
    <div key={product._id} className='product-card'>
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
          <NavLink to={`/product/${product._id}`}>
            {' '}
            <button className='btn btn-success'>Add to cart</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
