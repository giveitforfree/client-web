import { FETCH_NOTIFICATION_SUCCESS } from "../actions/types";

const initialState = {
  notifications: [],
};

const notificationReducer = (state = initialState, { type, payload = null }) => {
  switch (type) {

    case FETCH_NOTIFICATION_SUCCESS:
      return { ...state, notifications: [...state.notifications, payload], };

    default:
      return state;
  }
};

export default notificationReducer;