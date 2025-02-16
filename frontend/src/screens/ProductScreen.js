import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import ErrorMessage from '../components/atom/ErrorMessage';
import Loading from '../components/atom/Loading';
import Rating from '../components/Rating';
import { productDetailsAction } from '../redux/actions/productsActions';
import './screen.css';

const ProductScreen = (props) => {
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState('');
  const dispatch = useDispatch();
  const productId = props.match.params.id;

  const productsDetails = useSelector(
    (state) => state.productsDetails
  );
  const { loading, product, error } = productsDetails;

  useEffect(() => {
    dispatch(productDetailsAction(productId));
  }, [dispatch, productId]);
  const addToCart = () => {
    props.history.push(`/cart/${productId}?quantity=${quantity}`);
  };
  return (
    <>
      {loading ? (
        <Loading></Loading>
      ) : error ? (
        <ErrorMessage>{error}</ErrorMessage>
      ) : (
        <div>
          <NavLink to='/'>
            <i
              className='bi bi-arrow-left-short'
              style={{ fontSize: '3rem' }}
            ></i>
            Back to Home
          </NavLink>
          <div className='screen-row'>
            <div className='screen-col-1'>
              <img
                className='large'
                src={product.image}
                alt={product.name}
              ></img>
            </div>
            <div className='screen-col-1'>
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
            <div className='screen-col-1'>
              <div className='card card-body'>
                <ul>
                  <li>
                    <div className='screen-row'>
                      <div>Price</div>
                      <div className='price'>Kr {product.price}</div>
                    </div>
                  </li>

                  <li>
                    <div className='screen-row'>
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

                  {product.countInStock > 0 && (
                    <>
                      <li>
                        <div className='screen-row'>
                          <div>Size</div>
                          <div>
                            <select
                              value={size}
                              onChange={(e) =>
                                setSize(e.target.value)
                              }
                            >
                              {product.availableSizes.map((size) => (
                                <option key={size}>{size}</option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className='screen-row'>
                          <div>Quantity</div>
                          <div>
                            <select
                              value={quantity}
                              onChange={(e) =>
                                setQuantity(e.target.value)
                              }
                            >
                              {[
                                ...Array(product.countInStock).keys(),
                              ].map((x) => (
                                <option key={x + 1} value={x + 1}>
                                  {x + 1}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </li>

                      <li>
                        <button
                          onClick={addToCart}
                          className='primary-block'
                        >
                          Add to Cart
                        </button>
                      </li>
                    </>
                  )}
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

