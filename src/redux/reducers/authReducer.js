import { USER_LOGIN } from "../actions/types";

const initialState = {
  user: null,
  id: 10,
};

const authReducer =  (state = initialState, { type, payload = {} }) => {
  switch (type) {
    case USER_LOGIN:
      return { ...state,  ...payload };

    default:
      return state;
  }
};

export default authReducer;