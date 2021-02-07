import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './screen.css';
import CheckoutSteps from '../components/atom/CheckoutSteps';
import { createOrder } from '../redux/actions/orderAction';
import Loading from '../components/atom/Loading';
import ErrorMessage from '../components/atom/ErrorMessage';
import { CREATE_ORDER_RESET } from '../redux/types';

const OrderScreen = (props) => {
  const dispatch = useDispatch();
  const cartItemsData = useSelector((state) => state.cartItems);
  const { shippingAddress, paymentMethod, cartItems } = cartItemsData;
  if (!paymentMethod) {
    props.history.push('/payment');
  }
  const orderCreate = useSelector((state) => state.orderCreate);
  const { loading, success, error, order } = orderCreate;

  const totalPrice = cartItems.reduce(
    (a, c) => a + c.price * c.quantity,
    0
  );
  const placeOrder = () => {
    dispatch(
      createOrder({
        ...cartItemsData,
        orderItems: cartItemsData.cartItems,
      })
    );
  };
  useEffect(() => {
    if (success) {
      props.history.push(`/order/${order._id}`);
      dispatch({ type: CREATE_ORDER_RESET });
    }
  }, [dispatch, order, props.history, success]);
  return (
    <div>
      <CheckoutSteps step1 step2 step3 step4 />
      <div className='screen-row'>
        <div className='screen-col-2'>
          <div className='cart-card-body'>
            <h2>Shipping Address</h2>
            <p>
              <strong>Name:</strong> {shippingAddress.fullName} <br />
              <strong>Address: </strong> {shippingAddress.address},
              {shippingAddress.city}, {shippingAddress.postalCode},
              {shippingAddress.country}
            </p>
          </div>
          <div className='cart-card-body'>
            <h2>Payment</h2>
            <p>
              <strong>Method:</strong> {paymentMethod}
            </p>
          </div>
          <div className='cart-card-body'>
            <h2>Order Items</h2>
            <ul>
              {cartItems.map((item) => (
                <li key={item.product}>
                  <div className='cart-row center'>
                    <div>
                      <NavLink to={`/product/${item.product}`}>
                        <img
                          src={item.image}
                          alt={item.name}
                          className='img-small'
                        ></img>
                      </NavLink>
                    </div>
                    <div className='cart-text'>{item.name}</div>
                    <div></div>
                    <div>
                      {item.quantity} X Kr {item.price} = Kr
                      {item.quantity * item.price}
                    </div>
                  </div>
                  <hr />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className='screen-col-1'>
          <div className='cart-card-body'>
            <ul>
              <li>
                <h2>
                  Total Amount: Kr <strong>{totalPrice}</strong>
                </h2>
              </li>
              <li>
                <button
                  className='primary-block pay'
                  onClick={placeOrder}
                >
                  Save Order
                </button>
              </li>
              {loading && <Loading></Loading>}
              {error && <ErrorMessage>{error}</ErrorMessage>}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderScreen;
