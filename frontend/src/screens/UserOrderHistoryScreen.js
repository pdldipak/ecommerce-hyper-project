import React, { useEffect } from 'react';
import Moment from 'react-moment';
import { useSelector, useDispatch } from 'react-redux';
import { mineOrderList } from '../redux/actions/orderAction';
import Loading from '../components/atom/Loading';
import ErrorMessage from '../components/atom/ErrorMessage';

const UserOrderHistoryScreen = (props) => {
  const listOfMyOrder = useSelector((state) => state.mineOrderList);
  const { loading, error, orders } = listOfMyOrder;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(mineOrderList());
  }, [dispatch]);
  return (
    <>
      {loading ? (
        <Loading></Loading>
      ) : error ? (
        <ErrorMessage variant='danger'>{error}</ErrorMessage>
      ) : (
        <div className='orders'>
          <h1>Order History</h1>
          <table className='table'>
            <thead>
              <tr>
                <th>ID</th>
                <th>DATE</th>
                <th>PAYMENT METHOD</th>
                <th>Items List</th>
                <th>Total price</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={index}>
                  <td>{order._id}</td>
                  <td>
                    <Moment>{order.createdAt}</Moment>
                  </td>
                  <td>{order.paymentMethod}</td>

                  <td>
                    {order.orderItems.map((item, index) => (
                      <div key={index}>
                        {item.quantity} {' x '} {item.name}
                      </div>
                    ))}
                  </td>
                  <td>
                    {order.orderItems.reduce(
                      (a, c) => a + c.price * c.quantity,
                      0
                    )}
                  </td>
                  <td>
                    <button
                      type='button'
                      className='btn btn-success'
                      onClick={() => {
                        props.history.push(`/order/${order._id}`);
                      }}
                    >
                      Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default UserOrderHistoryScreen;
