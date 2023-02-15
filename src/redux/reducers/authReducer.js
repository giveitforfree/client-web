import { SET_LOGGED_USER, SET_LOGGED_USER_FAILURE, SET_LOGOUT_USER } from "../actions/types";

const initialState = {
  user: null,
  errorCode: '',
  errorMessage: ''
};

const authReducer = (state = initialState, { type, payload = null }) => {
  switch (type) {
    case SET_LOGGED_USER:
      return { ...state, user: payload, errorCode: '', errorMessage: '' };

    case SET_LOGGED_USER_FAILURE:
      return { ...state, user: null, ...payload }


    case SET_LOGOUT_USER:
      return { ...state, user: null, errorCode: '', errorMessage: '' }


    default:
      return state;
  }
};

export default authReducer;