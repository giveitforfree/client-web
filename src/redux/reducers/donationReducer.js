import { FETCH_MY_DONATIONS_SUCCESS, POST_DONATION_SUCCESS } from "../actions/types";

const initialState = {
  my: [],
  donations: [],
  error: null,
};

const donationReducer = (state = initialState, { type, payload = null }) => {
  switch (type) {

    case POST_DONATION_SUCCESS:
      return { ...state, my: [...state.my, payload], error: null };


    case FETCH_MY_DONATIONS_SUCCESS:
      return { ...state, my: [...state.my, ...payload], error: payload };

    default:
      return state;
  }
};

export default donationReducer;