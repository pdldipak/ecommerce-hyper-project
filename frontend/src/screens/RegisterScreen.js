import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './signinscreen.css';
import { registerAction } from '../redux/actions/userAction';
import Loading from '../components/atom/Loading';
import ErrorMessage from '../components/atom/ErrorMessage';

const RegisterScreen = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const userRegister = useSelector((state) => state.userRegister);
  const { userInfo, loading, error } = userRegister;
  const dispatch = useDispatch();

  const redirect = props.location.search
    ? props.location.search.split('=')[1]
    : '/';

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Password and confirm password are not match');
    } else {
      dispatch(registerAction(name, email, password));
    }
  };
  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [props.history, redirect, userInfo]);
  return (
    <div className='cart'>
      <h1>Register</h1>
      {loading && <Loading></Loading>}
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <form onSubmit={submitHandler}>
        <ul className='form-container'>
          <li>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              name='name'
              placeholder='Enter Name'
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
            ></input>
          </li>
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
              placeholder='Enter Password'
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </li>
          <li>
            <label htmlFor='confirmPassword'>Confirm Password</label>
            <input
              name='confirmPassword'
              type='password'
              placeholder='Confirm Password'
              value={confirmPassword}
              required
              onChange={(e) => setConfirmPassword(e.target.value)}
            ></input>
          </li>

          <li>
            <button className='primary-block' type='submit'>
              Register
            </button>
          </li>
        </ul>
        <div className='to-register'>
          Already have an account{' '}
          <NavLink to={`/signin?redirect=${redirect}`}>LogIn</NavLink>
        </div>
      </form>
    </div>
  );
};

export default RegisterScreen;
