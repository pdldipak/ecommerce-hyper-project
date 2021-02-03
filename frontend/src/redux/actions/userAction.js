import axios from 'axios';
import {
  REGISTER_FAIL,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  SIGNIN_FAIL,
  SIGNIN_REQUEST,
  SIGNIN_SUCCESS,
  SIGNOUT_REQUEST,
} from '../types';

export const signInAction = (email, password) => async (dispatch) => {
  dispatch({ type: SIGNIN_REQUEST, payload: { email, password } });
  //sending ajax request
  try {
    const { data } = await axios.post('/api/users/signin', {
      email,
      password,
    });
    dispatch({ type: SIGNIN_SUCCESS, payload: data });
    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: SIGNIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const registerAction = (name, email, password) => async (
  dispatch
) => {
  dispatch({
    type: REGISTER_REQUEST,
    payload: { email, password },
  });
  try {
    const { data } = await axios.post('/api/users/register', {
      name,
      email,
      password,
    });
    dispatch({ type: REGISTER_SUCCESS, payload: data });
    dispatch({ type: SIGNIN_SUCCESS, payload: data });
    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const signOutAction = () => (dispatch) => {
  localStorage.removeItem('userInfo');
  localStorage.removeItem('cartItems');
  dispatch({ type: SIGNOUT_REQUEST });
};
