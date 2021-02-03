import {
  SIGNIN_FAIL,
  SIGNIN_REQUEST,
  SIGNIN_SUCCESS,
  SIGNOUT_REQUEST,
} from '../types';

export const userSigninReducer = (state = {}, action) => {
  switch (action.type) {
    case SIGNIN_REQUEST:
      return { loading: true };
    case SIGNIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case SIGNIN_FAIL:
      return { loading: false, error: action.payload };
    case SIGNOUT_REQUEST:
      return {};
    default:
      return state;
  }
};
