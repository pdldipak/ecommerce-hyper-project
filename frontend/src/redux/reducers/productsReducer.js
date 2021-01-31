import {
  FETCH_PRODUCTS_DATA,
  FETCH_PRODUCTS_DATA_FAIL,
  FETCH_PRODUCTS_DATA_SUCCESS,
  FETCH_PRODUCTS_DETAILS,
  FETCH_PRODUCTS_DETAILS_FAIL,
  FETCH_PRODUCTS_DETAILS_SUCCESS,
} from '../types';

const initialState = { loading: true, products: [] };

export const productsListReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_DATA:
      return { ...state, loading: true };
    case FETCH_PRODUCTS_DATA_SUCCESS:
      return { ...state, loading: false, products: action.payload };
    case FETCH_PRODUCTS_DATA_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const productsDetailsReducer = (
  state = { product: {}, loading: true },
  action
) => {
  switch (action.type) {
    case FETCH_PRODUCTS_DETAILS:
      return { ...state, loading: true };
    case FETCH_PRODUCTS_DETAILS_SUCCESS:
      return { ...state, loading: false, product: action.payload };
    case FETCH_PRODUCTS_DETAILS_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
