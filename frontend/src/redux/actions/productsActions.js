import axios from 'axios';
import {
  FETCH_PRODUCTS_DATA,
  FETCH_PRODUCTS_DATA_FAIL,
  FETCH_PRODUCTS_DATA_SUCCESS,
  FETCH_PRODUCTS_DETAILS,
  FETCH_PRODUCTS_DETAILS_FAIL,
  FETCH_PRODUCTS_DETAILS_SUCCESS,
} from '../types';

export const productsListAction = () => async (dispatch) => {
  dispatch({ type: FETCH_PRODUCTS_DATA });
  try {
    const { data } = await axios.get('/api/products');
    dispatch({ type: FETCH_PRODUCTS_DATA_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: FETCH_PRODUCTS_DATA_FAIL,
      payload: error.message,
    });
  }
};

export const productDetailsAction = (productId) => async (
  dispatch
) => {
  dispatch({ type: FETCH_PRODUCTS_DETAILS, payload: productId });
  try {
    const { data } = await axios.get(`/api/products/${productId}`);
    dispatch({
      type: FETCH_PRODUCTS_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_PRODUCTS_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// export const productsListAction = () => async (dispatch) => {
//     const res = await fetch('/api/products');
//     const data = await res.json();
//     // console.log('data-', data);
//     dispatch({
//         type: PRODUCTS_SUCCESS,
//         payload: data,
//     });
// }
