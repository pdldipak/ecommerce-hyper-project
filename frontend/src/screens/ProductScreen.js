import React from 'react';
import { Link } from 'react-router-dom';
import Rating from '../components/Rating';
import data from '../data.json';
import './productScreen.css';

const ProductScreen = (props) => {
  const product = data.products.find(
    (product) => product._id === props.match.params.id
  );
  if (!product) {
    return <div> Product Not Found</div>;
  }
  return (
    <div>
      <Link to='/'>
        <i
          className='bi bi-arrow-left-short'
          style={{ 'font-size': '3rem' }}
        ></i>
        Back to Home
      </Link>
      <div className='productScreen-row'>
        <div className='productScreen-col-2'>
          <img
            className='large'
            src={product.image}
            alt={product.name}
          ></img>
        </div>
        <div className='productScreen-col-1'>
          <ul>
            <li>
              <h1>{product.name}</h1>
            </li>
            <li>
              <Rating
                rating={product.rating}
                numReviews={product.numReviews}
              ></Rating>
            </li>
            <li>Price : Kr {product.price}</li>
            <li>
              Description:
              <p>{product.description}</p>
            </li>
          </ul>
        </div>
        <div className='productScreen-col-1'>
          <div className='card card-body'>
            <ul>
              <li>
                <div className='productScreen-row'>
                  <div>Price</div>
                  <div className='price'>Kr {product.price}</div>
                </div>
              </li>
              <li>
                <div className='productScreen-row'>
                  <div>Status</div>
                  <div>
                    {product.countInStock > 0 ? (
                      <span className='success'>In Stock</span>
                    ) : (
                      <span className='danger'>Unavailable</span>
                    )}
                  </div>
                </div>
              </li>
              <li>
                <button className='primary-block'>Add to Cart</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;
