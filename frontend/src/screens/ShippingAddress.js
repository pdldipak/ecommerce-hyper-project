import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CheckoutSteps from '../components/atom/CheckoutSteps';
import { shippingAddressAction } from '../redux/actions/cartActions';

const ShippingAddress = (props) => {
  const dispatch = useDispatch();
  const userSignIn = useSelector((state) => state.userSignIn);
  const { userInfo } = userSignIn;
  const cartItems = useSelector((state) => state.cartItems);
  const { shippingAddress } = cartItems;
  if (!userInfo) {
    props.history.push('/signin');
  }
  const [fullName, setFullName] = useState(shippingAddress.fullName);
  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(
    shippingAddress.postalCode
  );
  const [country, setCountry] = useState(shippingAddress.country);

  const submit = (e) => {
    e.preventDefault();
    dispatch(
      shippingAddressAction({
        fullName,
        address,
        city,
        postalCode,
        country,
      })
    );
    props.history.push('/payment');
  };
  return (
    <div>
      <CheckoutSteps step1 step2></CheckoutSteps>
      <div className='cart' style={{ marginTop: '1rem' }}>
        <h1>Shipping Address</h1>
        <form onSubmit={submit}>
          <ul className='form-container'>
            <li>
              <label htmlFor='fullName'>Full Name</label>
              <input
                type='text'
                name='fullName'
                placeholder='Enter full name'
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              ></input>
            </li>
            <li>
              <label htmlFor='address'>Address</label>
              <input
                type='text'
                name='address'
                placeholder='Enter address'
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              ></input>
            </li>
            <li>
              <label htmlFor='city'>City</label>
              <input
                type='text'
                name='city'
                placeholder='Enter city'
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              ></input>
            </li>
            <li>
              <label htmlFor='postalCode'>Postal Code</label>
              <input
                type='text'
                name='postalCode'
                placeholder='Enter postal code'
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
                required
              ></input>
            </li>

            <li>
              <label htmlFor='country'>Country</label>
              <input
                type='text'
                name='country'
                placeholder='Enter country'
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                required
              ></input>
            </li>
            <li>
              <button className='primary-block' type='submit'>
                Continue
              </button>
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
};

export default ShippingAddress;
