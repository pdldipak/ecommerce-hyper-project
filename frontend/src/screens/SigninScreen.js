import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './signinscreen.css';
import { signInAction } from '../redux/actions/userAction';
import Loading from '../components/atom/Loading';
import ErrorMessage from '../components/atom/ErrorMessage';

const SigninScreen = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const userSignIn = useSelector((state) => state.userSignIn);
  const { userInfo, loading, error } = userSignIn;
  const dispatch = useDispatch();

  const redirect = props.location.search
    ? props.location.search.split('=')[1]
    : '/';

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signInAction(email, password));
  };
  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [props.history, redirect, userInfo]);
  return (
    <div className='cart'>
      <h1>Sign In</h1>
      {loading && <Loading></Loading>}
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <form onSubmit={submitHandler}>
        <ul className='form-container'>
          <li>
            <label htmlFor='email'>Email</label>
            <input
              name='email'
              type='email'
              placeholder='Enter Email'
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </li>
          <li>
            <label htmlFor='password'>Password</label>
            <input
              name='password'
              type='password'
              placeholder='Enter Email'
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </li>

          <li>
            <button className='primary-block' type='submit'>
              SignIn
            </button>
          </li>
        </ul>
        <div className='to-register'>
          New Customer{' '}
          <NavLink to='/register'>Create your account</NavLink>
        </div>
      </form>
    </div>
  );
};

export default SigninScreen;
