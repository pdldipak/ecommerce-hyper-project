import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import ErrorMessage from '../components/atom/ErrorMessage';
import {
  addToCartAction,
  removeFromCartAction,
} from '../redux/actions/cartActions';
import './cartScreen.css';

const CartScreen = (props) => {
  const productId = props.match.params.id;
  const quantity = props.location.search
    ? Number(props.location.search.split('=')[1])
    : 1;
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartItems.cartItems);
  useEffect(() => {
    if (productId) {
      dispatch(addToCartAction(productId, quantity));
    }
  }, [dispatch, productId, quantity]);

  const removeFromCart = (id) => {
    dispatch(removeFromCartAction(id));
  };

  const checkout = () => {
    props.history.push('/signin?redirect=shipping');
  };
  return (
    <>
      {cartItems.length >= 1 && (
        <NavLink to='/'>
          <i
            className='bi bi-arrow-left-short'
            style={{ 'fontSize': '3rem' }}
          ></i>
          Back to Home
        </NavLink>
      )}

      <div className='cart-row'>
        <div className='cart-col-2'>
          <div className='product-heading'>
            <h1>Shopping Cart</h1>
          </div>

          {cartItems.length === 0 ? (
            <ErrorMessage>
              <NavLink to='/'>Go Shopping</NavLink>Cart is empty.
            </ErrorMessage>
          ) : (
            <ul>
              {cartItems.map((item) => (
                <li key={item.product}>
                  <div className='cart-row center'>
                    <div>
                      <img
                        src={item.image}
                        alt={item.name}
                        className='img-small'
                      ></img>
                    </div>
                    <div className='cart-text'>
                      <NavLink to={`/product/${item.product}`}>
                        {item.name}
                      </NavLink>
                    </div>
                    <div>
                      <select
                        value={item.quantity}
                        onChange={(e) =>
                          dispatch(
                            addToCartAction(
                              item.product,
                              Number(e.target.value)
                            )
                          )
                        }
                      >
                        {[...Array(item.countInStock).keys()].map(
                          (x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          )
                        )}
                      </select>
                    </div>
                    <div>Kr {item.price}</div>
                    <div>
                      <button
                        type='button'
                        className='btn btn-outline-danger'
                        onClick={() => removeFromCart(item.product)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className='cart-col-1'>
          <div className='cart-card-body'>
            <ul>
              <li>
                <h2>
                  Subtotal (
                  {cartItems.reduce((a, c) => a + c.quantity, 0)}{' '}
                  items) : Kr
                  {cartItems.reduce(
                    (a, c) => a + c.price * c.quantity,
                    0
                  )}
                </h2>
              </li>
              <li>
                <button
                  onClick={checkout}
                  className='primary-block'
                  disabled={cartItems.length === 0}
                >
                  Checkout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartScreen;
