import {
  ADD_TO_CART_ITEMS,
  REMOVE_FROM_CART_ITEMS,
  SAVE_PAYMENT,
  SAVE_SHIPPING_ADDRESS,
} from '../types';

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case ADD_TO_CART_ITEMS:
      const items = action.payload;
      const existItems = state.cartItems.find(
        (item) => item.product === items.product
      );
      if (existItems) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.product === existItems.product ? items : item
          ),
        };
      } else {
        return { ...state, cartItems: [...state.cartItems, items] };
      }
    case REMOVE_FROM_CART_ITEMS:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.product !== action.payload
        ),
      };
    case SAVE_SHIPPING_ADDRESS:
      return { ...state, shippingAddress: action.payload };
    case SAVE_PAYMENT:
      return{...state, paymentMethod:action.payload}
    default:
      return state;
  }
};
