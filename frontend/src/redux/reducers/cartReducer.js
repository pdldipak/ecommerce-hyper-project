import { ADD_TO_CART_ITEMS, REMOVE_FROM_CART_ITEMS } from "../types";


export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case ADD_TO_CART_ITEMS:
      const items = action.payload;
      const existItems = state.cartItems.find((item) => item.product === items.product);
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
        cartItems: state.cartItems.filter((item) => item.product !== action.payload),
      };
    default:
      return state;
  }
};