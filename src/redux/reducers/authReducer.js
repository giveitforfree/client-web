import { LOGIN_SUCCESS, SET_LOGGED_USER, SET_LOGGED_USER_FAILURE, SET_LOGOUT_USER } from "../actions/types";

const initialState = {
  user: null,
  error: null,
};

const authReducer = (state = initialState, { type, payload = null }) => {
  switch (type) {

    case LOGIN_SUCCESS:
      return { ...state, user: payload, error: null };


    case SET_LOGGED_USER:
      return { ...state, user: payload, error: null };

    case SET_LOGGED_USER_FAILURE:
      return { ...state, user: null, ...payload }

    case SET_LOGOUT_USER:
      return { ...state, user: null, error: null }


    default:
      return state;
  }
};

export default authReducer;