import { FETCH_CATEGORIES_FAILURE, FETCH_CATEGORIES_SUCCESS } from "../actions/types";

const initialState = {
  categories: [],
  error: null,
};

const categoryReducer = (state = initialState, { type, payload = null }) => {
  switch (type) {

    case FETCH_CATEGORIES_SUCCESS:
      return { ...state, categories: payload, error: null };


    case FETCH_CATEGORIES_FAILURE:
      return { ...state, categories: [], error: payload };

    default:
      return state;
  }
};

export default categoryReducer;