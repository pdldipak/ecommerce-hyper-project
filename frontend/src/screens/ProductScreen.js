import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ErrorMessage from '../components/atom/ErrorMessage';
import Loading from '../components/atom/Loading';
import Rating from '../components/Rating';
import { productDetailsAction } from '../redux/actions/productsAction';
import './productScreen.css';

const ProductScreen = (props) => {
  const dispatch = useDispatch();
  const productId = props.match.params.id;

  const productsDetails = useSelector(
    (state) => state.productsDetails
  );
  const { loading, product, error } = productsDetails;

  useEffect(() => {
    dispatch(productDetailsAction(productId));
  }, [dispatch, productId]);
  return (
    <>
      {loading ? (
        <Loading></Loading>
      ) : error ? (
        <ErrorMessage>{error}</ErrorMessage>
      ) : (
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
                    <button className='primary-block'>
                      Add to Cart
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductScreen;
