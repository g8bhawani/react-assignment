import * as actions from "./actionTypes";

const initialState = {
  pending: false,
  error: null,
  items: [],
};

function serviecs(state = initialState, action) {
  switch (action.type) {
    case actions.REQUEST_SERVICES:
      return {
        ...state,
        pending: true,
      };

    case actions.RECEIVE_SERVICES:
      return {
        ...state,
        pending: false,
        items: action.value,
      };

    default:
      return state;
  }
}

export default serviecs;
