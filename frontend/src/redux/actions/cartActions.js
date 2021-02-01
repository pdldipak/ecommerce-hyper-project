import axios from 'axios';
import { ADD_TO_CART_ITEMS, REMOVE_FROM_CART_ITEMS } from '../types';


export const addToCartAction = (productId, quantity) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${productId}`);
  dispatch({
    type: ADD_TO_CART_ITEMS,
    payload: {
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      product: data._id,
      quantity,
    },
  });
  localStorage.setItem('cartItems', JSON.stringify(getState().cartItems.cartItems));
};

export const removeFromCartAction = (productId) => (dispatch, getState) => {
  dispatch({ type: REMOVE_FROM_CART_ITEMS, payload: productId });
  localStorage.setItem('cartItems', JSON.stringify(getState().cartItems.cartItems));
};