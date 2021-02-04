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
import {
  userRegisterReducer,
  userSignInReducer,
} from './reducers/userSigninReducer';

const initialState = {
  cartItems: {
    cartItems: localStorage.getItem('cartItems')
      ? JSON.parse(localStorage.getItem('cartItems'))
      : [],
    shippingAddress: localStorage.getItem('shippingAddress')
      ? JSON.parse(localStorage.getItem('shippingAddress'))
      : {},
    paymentMethod:'Stripe'
    
  },
  userSignIn: {
    userInfo: localStorage.getItem('userInfo')
      ? JSON.parse(localStorage.getItem('userInfo'))
      : null,
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
    userSignIn: userSignInReducer,
    userRegister: userRegisterReducer,
  }),
  initialState,
  enhancer
);

export default store;
