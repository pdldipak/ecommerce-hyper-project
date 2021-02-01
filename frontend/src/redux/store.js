import {
  createStore,
  applyMiddleware,
  compose,
  combineReducers,
} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {
  productsDetailsReducer,
  productsListReducer,
} from './reducers/productsReducer';
import { cartReducer } from './reducers/cartReducer';

const initialState = {
  cartItems: {
    cartItems: localStorage.getItem('cartItems')
      ? JSON.parse(localStorage.getItem('cartItems'))
      : [],
  },
};

const composeEnhancer =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewareList = [thunk, logger];
const enhancer = composeEnhancer(applyMiddleware(...middlewareList));

const store = createStore(
  combineReducers({
    productsList: productsListReducer,
    productsDetails: productsDetailsReducer,
    cartItems: cartReducer,
  }),
  initialState,
  enhancer
);

export default store;
