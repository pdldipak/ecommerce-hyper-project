import React, { useState } from 'react';
import CheckoutSteps from '../components/atom/CheckoutSteps';
import { useDispatch, useSelector } from 'react-redux';
import './signinscreen.css';
import './cartScreen.css';
import { savePaymentAction } from '../redux/actions/cartActions';

const PaymentScreen = (props) => {
  const [payment, setPayment] = useState('Stripe');
  const dispatch = useDispatch();
  const submit = (e) => {
    e.preventDefault();
    dispatch(savePaymentAction(payment));
    props.history.push('/placeholder');
  };
  return (
    <div>
      <CheckoutSteps step1 step2 step3></CheckoutSteps>
      <div className='cart'>
        <form onSubmit={submit}>
          <h1>Payment methods</h1>
          <ul className='form-container form-radio'>
            <li>
              <input
                className='radio'
                type='radio'
                id='stripe'
                value={payment}
                name='payment'
                required
                onChange={(e) => setPayment(e.target.value)}
              ></input>
              {'  '}
              <label htmlFor='stripe'>Stripe</label>
            </li>
            <li>
              <input
                className='radio'
                type='radio'
                id='klarna'
                value='Klarna'
                name='payment'
                required
                onChange={(e) => setPayment(e.target.value)}
              ></input>
              {'  '}
              <label htmlFor='klarna'>Klarna</label>
            </li>
            <li>
              <input
                className='radio'
                type='radio'
                id='swish'
                value='Swish'
                name='payment'
                required
                onChange={(e) => setPayment(e.target.value)}
              ></input>
              {'  '}
              <label htmlFor='swish'>Swish</label>
            </li>
          </ul>

          <div>
            <button className='primary-block' type='submit'>
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PaymentScreen;
