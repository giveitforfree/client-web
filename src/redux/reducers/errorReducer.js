import { POST_NEW_ERROR, CLEAR_ERRORS_SUCCESS } from "../actions/types";

const initialState = {
  errors: [],
};

const errorReducer = (state = initialState, { type, payload = null }) => {
  switch (type) {

    case POST_NEW_ERROR:
      return { ...state, notifications: [...state.errors, payload], };

    case CLEAR_ERRORS_SUCCESS:
      return { ...state, notifications: [] };

    default:
      return state;
  }
};

export default errorReducer;