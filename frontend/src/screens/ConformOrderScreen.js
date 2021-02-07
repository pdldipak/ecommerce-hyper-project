import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Moment from 'react-moment';
import './screen.css';
import { detailsOrder } from '../redux/actions/orderAction';
import Loading from '../components/atom/Loading';
import ErrorMessage from '../components/atom/ErrorMessage';

const ConformOrderScreen = (props) => {
  const dispatch = useDispatch();

  const orderId = props.match.params.id;
  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;

  useEffect(() => {
    dispatch(detailsOrder(orderId));
  }, [dispatch, orderId]);
  return (
    <>
      {loading ? (
        <Loading></Loading>
      ) : error ? (
        <ErrorMessage>{error}</ErrorMessage>
      ) : (
        <div>
          <div className='screen-row conform'>
            <div className='screen-col-2'>
              <div className='cart-card-body'>
                <h2>
                  <strong>Order id:</strong>
                  {order._id}
                </h2>
                <h2>
                  {' '}
                  <strong>Order Created at:</strong>{' '}
                  <Moment>{order.createdAt}</Moment>
                </h2>{' '}
              </div>
              <div className='cart-card-body'>
                <p>
                  <strong>Name:</strong>{' '}
                  {order.shippingAddress.fullName} <br />
                  <strong>Address: </strong>{' '}
                  {order.shippingAddress.address},
                  {order.shippingAddress.city},{' '}
                  {order.shippingAddress.postalCode},
                  {order.shippingAddress.country}
                </p>
              </div>
              <div className='cart-card-body'>
                <h2>Payment</h2>
                <p>
                  <strong>Method:</strong> {order.paymentMethod}
                </p>
              </div>
              <div className='cart-card-body'>
                <h2>Order Items</h2>
                <ul>
                  {order.orderItems.map((item) => (
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
          </div>
        </div>
      )}
    </>
  );
};

export default ConformOrderScreen;
